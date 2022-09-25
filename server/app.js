const { application } = require("express");
const express = require("express");
const app = express();
const xlsx = require("xlsx"); // 아무데나
const port = 3000;
require("dotenv").config({ path: "mysql/.env" }); // 반드시 mysql위에 있어야 함.
const mysql = require("./mysql"); // mysql
const multer = require("multer"); // multer
const fs = require("fs");
const morgan = require("morgan");
const rfs = require("rotating-file-stream"); // 사이즈가 벗어난다거나 할때 자동으로 새로운 로그파일 생성
const path = require("path");
const session = require("express-session");

require("dotenv").config({ path: "nodemailer/.env" }); // nodemailer
const nodemailer = require("./nodemailer"); // nodemailer

const mime = require("mime"); // 파일다운로드 기능
const cookieParser = require("cookie-parser");
const cron = require("node-cron"); // 작업스케줄러

//----------------------------------------------------------------------------------------------------
app.use(express.static("public")); // 서버에서 이미지를 다운받아야 할때 사용. static("열어줄 폴더")
// 브라우저에 localhost:3000//images/q8.jpg 입력하면 이미지 바로 볼 수 있음.

// ---------------------------------------------------------------------------------------------------------
// 클라이언트 요청 body를 json으로 파싱 처리
// post로 실러오는 데이터를 받을 때 반드시 필요.
app.use(
  express.json({
    limit: "50mb",
  })
);

// multer ---------------------------------------------------------------------------------------------
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // 어떤폴더에 저장
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    // 시스템 시간으로 파일이름 변경
    cb(null, new Date().valueOf() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.post("/api/attachment", upload.single("attachment"), async (req, res) => {
  console.log(req.file);
  console.log(req.body);

  const fileInfo = {
    auditor_id: parseInt(req.body.auditor_id),
    originalname: req.file.originalname,
    mimetype: req.file.mimetype,
    filename: req.file.filename,
    path: req.file.path,
  };
  res.send(fileInfo);
  // const r = await mysql.query("auditorImage", fileInfo);
  // res.send(r);
});

// xlsx Upload ----------------------------------------------------------------------------------------------
const xlsxStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    // 어떤폴더에 저장
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    // 시스템 시간으로 파일이름 변경
    cb(null, new Date().valueOf() + path.extname(file.originalname));
  },
});

const xlsxUpload = multer({ storage: xlsxStorage });

app.post("/api/xlsx", xlsxUpload.single("xlsx"), async (req, res) => {
  console.log(req.file);
  console.log(req.body);
  const workbook = xlsx.readFile(req.file.path);
  const firstSheetName = workbook.SheetNames[0];
  const firstSheet = workbook.Sheets[firstSheetName];
  const firstSheetJson = xlsx.utils.sheet_to_json(firstSheet);

  res.send(firstSheetJson);
});

//morgan -------------------------------------------------------------------------------------------------------------
const generator = (time, index) => {
  if (!time) return "file.log";

  const yearMonth =
    time.getFullYear() + (time.getMonth() + 1).toString().padStart(2, "0");
  const day = time.getDate().toString().padStart(2, "0");
  const hour = time.getHours().toString().padStart(2, "0");
  const minute = time.getMinutes().toString().padStart(2, "0");

  return `${yearMonth}/${yearMonth}${day}-${hour}${minute}-${index}-file.log`;
};

const accessLogStream = rfs.createStream(generator, {
  interval: "1d",
  size: "10M",
  path: path.join(__dirname, "log"),
});

app.use(
  morgan("combined", {
    stream: accessLogStream,
    skip: function (req, res) {
      return res.statusCode < 400; // 에러가 아닌 경우 로그파일 생성 하지 않음
    },
  })
);

//웹서버 시작--------------------------------------------------------------------------------------------------
app.listen(port, () => {
  console.log(`Server start on port ${port}!!`);
});

//라우트 동록---------------------------------------------------------------------------------------------------
//auditor 전체조회
app.get("/api/auditor", async (req, res) => {
  const auditorList = await mysql.query("auditorList");
  res.send(auditorList);
});

//auditor 한 명조회
app.get("/api/auditor/:auditor_id", async (req, res) => {
  const { auditor_id } = req.params;
  const getAuditor = await mysql.query("getAuditor", auditor_id);
  res.send(getAuditor);
});

// auditor 생성
app.post("/api/auditor", async (req, res) => {
  const result = await mysql.query("auditorInsert", req.body.param);
  res.send(result);
});

// auditor 수정
app.put("/api/auditor/:auditor_id", async (req, res) => {
  const { auditor_id } = req.params;
  const result = await mysql.query("auditorUpdate", [
    req.body.param,
    auditor_id,
  ]); // body에 실려온 자료 중 첫번째 ?표에 req.body.param에 auditor_id는 두번째 ?에 입력됨.
  res.send(result);
});

// auditor 삭제
app.delete("/api/auditor/:auditor_id", async (req, res) => {
  const { auditor_id } = req.params;
  const result = await mysql.query("auditorDelete", auditor_id);
  res.send(result);
});

/*
// route alias 실무에서는 번거로우니까 이렇게 사용함.
app.post("/api/:alias", async (req, res) => {
  const auditorList = await mysql.query(req.params.alias, req.body.param);
  res.send(auditorList);
});
*/

// nodemailer --------------------------------------------------------------------------------------------------------------
app.post("/api/email", async (req, res) => {
  const r = await nodemailer.send(req.body.param);
  res.send(r);
});

// File download --------------------------------------------------------------------------------------------------------------
app.get("/file/:filename", (req, res) => {
  const file = "./uploads/" + req.params.filename;
  try {
    if (fs.existsSync(file)) {
      // 파일이 있는지 확인해서 있을때만
      // const mimetype = mime.getType(file);
      // const filename = path.basename(file);
      // res.setHeader("Content-disposition", "attachment; filename =" + file);
      // res.setHeader("Content-tye", mimetype); //파일형식 지정
      // const filestream = fs.createReadStream(file);
      // filestream.pipe(res);
      res.download(file);
    } else {
      res.send("요청한 파일이 존재하지 않습니다");
    }
  } catch (e) {
    console.log(e);
    res.send("파일을 다운로드 하는 중에 에러가 발생했습니다.");
  }
});

// cookie-parser ---------------------------------------------------------------------------------------------------
app.use(cookieParser());

// express-session -----------------------------------------------------------------------------------------------------
/*
let sess = {
  secret: "secret key",
  resave: "false", //세션에 변경사항이 없어도 항상 다시 저장할지 여부
  saveUninitialized: true, // 초기화되지 않은 세션을 저장소에 강제로 저장할지 여부
  cookie: {
    httpOnly: true, // document.cookie해도 쿠키 정보를 볼 수 없음.
    secure: false, // https
    maxAge: 1000 * 60 * 60, // 쿠키가 유지되는 시간
  },
};

// if (app.get("env") == "prod") {
//   sess.cookie.secure = true;
// }

app.use(session(sess));

app.post("/login", (req, res) => {
  const { email, pw } = req.body.param;
  //데이터 베이스에 해당하는 사용자가 있는지, 비밀번호 맞는지 체크
  req.session.email = email;
  req.session.isLogined = true;
  req.session.save((err) => {
    if (err) throw err;

    res.send(req.session);
  });
});

app.post("/logout", (req, res) => {
  if (req.session.email) {
    req.session.destroy();
    res.redirect("/login");
  }
});

// 반드시 로그인, 로그아웃 밑에 위치
// 어떤 요청이 오더라도 먼저 로그인 되었는지 확인하고 로그인 되었으면 next로 다음 요청 수행
// 이 코드 밑에 나오는 라우터 는 무조건 로그인 확인하는 것
app.all("*", (req, res, next) => {
  if (req.session.email) {
    console.log(req.cookies); // 사용자의 암호화된 쿠키정보 볼 수 있음.포스트맨 로그인 후 test실행하면.
    next();
  } else {
    res.redirect("/login");
  }
});

app.get("/test", (req, res) => {
  // 무조건 로그인 됐는지 먼저 확인
  // if (!req.session.email) {
  //   res.redirect("/login");
  // }
  res.send("Ok");
});
*/

// 작업스케줄러 ------------------------------------------------------------------------------------------------------
// cron.schedule("* * * * * *", () => {
//   console.log("1초마다 작업이 실행 됩니다.");
// });
// cron.schedule("* * * * *", () => {
//   console.log("1분마다 작업이 실행됩니다");
// });
// cron.schedule("2 * * * *", () => {
//   console.log("매 시간의 2분마다 작업이 실행됩니다");
// });
// cron.schedule("1,2,4,5 * * * *", () => {
//   console.log("매 시간의 1, 2, 4, 5분 마다 작업이 실행됩니다."); // 8시1분, 8시2분, 8시4분, 8시5분, 9시1분 .....
// });
// cron.schedule("1-5 * * * *", () => {
//   console.log("매 시간의 1, 2, 4, 5분 마다 작업이 실행됩니다.");
// });
// cron.schedule("0 9 * * 1", () => {
//   console.log("매주 월요일 09시에 작업이 실행됩니다.");
// });
// cron.schedule("0 21 * * *", () => {
//   console.log("매일밤 9시에 작업이 실행됩니다.");
// });

//동작하는 것을 정해주고 싶으면
// const task = cron.schedule(
//   "* * * * * *",
//   () => {
//     console.log("1초마다 작업이 실행 됩니다.");
//   },
//   { scheduled: false } // 이렇게 하면 실행이 안되고 있다가 누군가가 task.start()라는 함수를 호출을 해주야만 실행
// );

// task.start();
// task.stop(); // 작업을 멈춤
// task.destroy(); // 작업을 완전히 삭제

// 1분마다 db에서 자료 가져와서 보내려면
cron.schedule("* * * * *", async () => {
  const auditorList = await mysql.query("auditorList");
  const h = [];
  h.push(`<table style="border:1px solid black;border-collapse:collapse;">`);
  h.push(`<thead>`);
  h.push(`<tr>`);
  h.push(`<th style="border:1px solid black;">Auditor ID</th>`);
  h.push(`<th style="border:1px solid black;">Auditor Name</th>`);
  h.push(`<th style="border:1px solid black;">Auditor Gender</th>`);
  h.push(`<th style="border:1px solid black;">Auditor Scheme</th>`);
  h.push(`<th style="border:1px solid black;">Auditor Grade</th>`);
  h.push(`</tr>`);
  h.push(`</thead>`);
  h.push(`<tbody>`);
  auditorList.forEach((auditor) => {
    h.push(`<tr>`);
    h.push(`<td style="border:1px solid black;">${auditor.auditor_id}</td>`);
    h.push(`<td style="border:1px solid black;">${auditor.auditor_name}</td>`);
    h.push(
      `<td style="border:1px solid black;">${auditor.auditor_gender}</td>`
    );
    h.push(
      `<td style="border:1px solid black;">${auditor.auditor_scheme}</td>`
    );
    h.push(`<td style="border:1px solid black;">${auditor.auditor_grade}</td>`);
    h.push(`</tr>`);
  });

  h.push(`</body>`);
  h.push(`<table>`);

  const emailData = {
    from: "spark616@gmail.com",
    to: "spark616@gmail.com",
    subject: "심사원현황",
    html: h.join(""),
  };

  // await nodemailer.send(emailData);
});

// 엑셀 Read, Write --------------------------------------------------------------------------------------------------
/*
const rWorkbook = xlsx.readFile("./xlsx/test.xlsx"); // 엑셀파일 읽기
const rfirstSheetName = rWorkbook.SheetNames[0]; // 첫번째 시트 이름
const rfirstSheet = rWorkbook.Sheets[rfirstSheetName]; // 첫번째 시트
console.log(rfirstSheet["A2"].v);
rfirstSheet["B2"].v = "spark616@gmail.com"; // 이메일 주소 변경
rfirstSheet["A3"] = { t: "s", v: "Park" }; // 새로운 셀값 추가

xlsx.writeFile(rWorkbook, "./xlsx/test2.xlsx"); //변경된 내용을 새로운 엑셀 파일로 생성
*/

// 엑셀 파일 생성 ---------------------------------------------------------------------------------------------------------
/*
const writeWorkbook = xlsx.utils.book_new(); // 가상의 엑셀 파일 생성

const customers = [
  { name: "고객명", email: "이메일", phone: "연락처" },
  { name: "박성훈", email: "spark616@gmail.com", phone: "010-2222-2222" },
  { name: "이상영", email: "leesy@hanmail.net", phone: "010-2222-1111" },
  { name: "박정은", email: "pje@naver.com", phone: "010-2233-4554" },
];

const writefirstSheet = xlsx.utils.json_to_sheet(customers, {
  header: ["name", "email", "phone"],
  skipHeader: true, // skipHeader가 false이면 엑셀시트의 처번째 행에 header에 해당하는 name, email, phone나오게 됨
});

writefirstSheet["!cols"] = [
  { wpx: 120 }, // name열 너비
  { wpx: 250 }, // email열 너비
  { wpx: 200 }, // phone열 너비
];

// xlsx.utils.book_append_sheet(writeWorkbook, writefirstSheet, "Customers");
// xlsx.writeFile(writeWorkbook, "./xlsx/customers.xlsx");
*/

//엑셀 다운로드 --------------------------------------------------------------------------------------------------
app.get("/api/xlsx/auditorList", async (req, res) => {
  const workbook = xlsx.utils.book_new();
  const auditorList = await mysql.query("auditorList");
  // console.log(auditorList);

  const firstSheet = xlsx.utils.json_to_sheet(auditorList, {
    header: [
      "auditor_id",
      "auditor_name",
      "auditor_gender",
      "auditor_scheme",
      "auditor_grade",
    ],
    skipHeader: false, // skipHeader가 false이면 엑셀시트의 처번째 행에 header에 해당하는 name, email, phone나오게 됨
  });

  firstSheet["!cols"] = [
    { wpx: 120 }, // ID열 너비
    { wpx: 250 }, // Name열 너비
    { wpx: 200 }, // Gender열 너비
    { wpx: 200 }, // Scheme열 너비
    { wpx: 200 }, // Grade열 너비
  ];

  xlsx.utils.book_append_sheet(workbook, firstSheet, "auditorList");
  res.setHeader("Content-disposition", "attachment; filename = Auditors.xlsx");
  res.setHeader(
    "Content-type",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  );
  const downloadFile = Buffer.from(
    // 물리적인 파일이 아님. 일회성 파일
    xlsx.write(workbook, { type: "base64" }),
    "base64"
  );
  res.end(downloadFile);
});
