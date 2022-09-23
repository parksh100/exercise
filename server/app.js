const { application } = require("express");
const express = require("express");
const app = express();
const xlsx = require("xlsx"); // 아무데나
const port = 3000;
require("dotenv").config({ path: "mysql/.env" }); // 반드시 mysql위에 있어야 함.
const mysql = require("./mysql");
const multer = require("multer");
const fs = require("fs");
const morgan = require("morgan");
const rfs = require("rotating-file-stream"); // 사이즈가 벗어난다거나 할때 자동으로 새로운 로그파일 생성
const path = require("path");

//----------------------------------------------------
app.use(express.static("public")); // 서버에서 이미지를 다운받아야 할때 사용. static("열어줄 폴더")
// 브라우저에 localhost:3000//images/q8.jpg 입력하면 이미지 바로 볼 수 있음.

// ---------------------------------------------------
// 클라이언트 요청 body를 json으로 파싱 처리
// post로 실러오는 데이터를 받을 때 반드시 필요.
app.use(
  express.json({
    limit: "50mb",
  })
);

// multer --------------------------------------------------
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

// xlsx --------------------------------------------------
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

//morgan --------------------------------------------------------------
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

//웹서버 시작--------------------------------------------------------
app.listen(port, () => {
  console.log(`Server start on port ${port}!!`);
});

//라우트 동록------------------------------------------------------------
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
