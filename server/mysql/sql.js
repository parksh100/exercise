module.exports = {
  auditorList: `select * from auditor`,
  auditorInsert: `insert into auditor set ?`,
  auditorUpdate: `update auditor set ? where auditor_id=?`,
  auditorDelete: `delete from auditor where auditor_id=?`,
};
