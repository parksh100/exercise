const { application } = require("express");
const express = require("express");
const app = express();
const port = 3000;
require("dotenv").config({ path: "mysql/.env" }); // 반드시 mysql위에 있어야 함.
const mysql = require("./mysql");

// 클라이언트 요청 body를 json으로 파싱 처리
// post로 실러오는 데이터를 받을 때 반드시 필요.
app.use(
  express.json({
    limit: "50mb",
  })
);

app.listen(port, () => {
  console.log(`Server start on port ${port}!!`);
});

//auditor 조회
app.get("/api/auditor", async (req, res) => {
  const auditorList = await mysql.query("auditorList");
  res.send(auditorList);
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
