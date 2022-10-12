module.exports = {
  auditorList: `select * from auditor`,
  auditorInsert: `insert into auditor set ?`,
  auditorImage: `insert into auditor_image set ?`,
  auditorUpdate: `update auditor set ? where auditor_id=?`,
  auditorDelete: `delete from auditor where auditor_id=?`,
  getAuditor: `select * from auditor where auditor_id=?`,
  auditorListByCondition: `select * from auditor where lower(auditor_name) like ?`,
  signUp: `insert into user set ? on duplicate key update ?`,
};
