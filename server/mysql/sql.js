module.exports = {
  // auditorList: `select * from auditor`,
  customerList: `select * from customer`,
  crList: `select * from contract_review`,
  auditListByAuditorEmail: `select t1.*, t2.* from customer t1, certification_audit t2 where t1.auditor_email=? order by t2.audit_created_date desc`,
  auditList: `select t1.name_ko, t2.* from customer t1, certification_audit t2 where t1.customer_id = t2.customer_id`,
  // auditListByAuditorEmail: `select t1.*, t2.* from customer t1, certification_audit t2 where t1.customer_id = t2.customer_id`,
  customerListByAuditorEmail: `select * from customer where customer.auditor_email = ?`,
  // reportListAll: `select t1.*, t2.*, t3.*, t4.name_ko, t4.business_no from report_trans t1, report_s1 t2, report_s2 t3, customer t4 where t1.auditor_email = t2.auditor_email or t2.auditor_email = t3.auditor_email and t3.auditor_email = t4.auditor_email and t3.auditor_email=? and lower(name_ko) like ?`,

  // reportListAllByEmail: `select t1.*, t2.*, t3.*, t4.* from report_trans t1, report_s1 t2, report_s2 t3, customer t4 where t1.auditor_email = t2.auditor_email and t2.auditor_email=t3.auditor_email and t3.auditor_email = t4.auditor_email and t1.auditor_email=? and t2.auditor_email=? and t3.auditor_email=? and t4.auditor_email=?`,
  reportListAllByEmail: `SELECT report_s2.audit_no, report_s2.report_s2_no, certification_audit.audit_s2_end, report_s1.report_s1_no, report_trans.report_trans_no, report_s2.auditor_email, report_s1.s1_report_created, report_trans.created_at_trans_report, customer.name_ko, certification_audit.audit_type, certification_audit.audit_degree, certification_audit.audit_standard FROM report_s2 left join report_s1 on report_s2.audit_no = report_s1.audit_no left join report_trans on report_s2.audit_no = report_trans.audit_no left join customer on report_s2.customer_id = customer.customer_id left join certification_audit on report_s2.customer_id = certification_audit.customer_id WHERE report_s2.audit_no=? and lower(name_ko) like ?  `,

  // reportListAllByAuditNo: `SELECT certification_audit.* FROM certification_audit LEFT JOIN report_s2 ON certification_audit.audit_no = report_s2.audit_no LEFT JOIN report_s1 ON certification_audit.audit_no = report_s1.audit_no LEFT JOIN report_trans ON certification_audit.audit_no = report_trans.audit_no LEFT JOIN customer ON certification_audit.customer_id = customer.customer_id WHERE certification_audit.audit_no = ? and lower(name_ko) like ?`,
  reportListAllByAuditNo: `SELECT certification_audit.audit_no, report_s2.report_s2_no, report_s2.s2_report_created, report_s1.report_s1_no, report_s1.s1_report_created, report_trans.report_trans_no, report_trans.created_at_trans_report, customer.name_ko FROM certification_audit LEFT JOIN report_s2 ON certification_audit.audit_no = report_s2.audit_no LEFT JOIN report_s1 ON certification_audit.audit_no = report_s1.audit_no LEFT JOIN report_trans ON certification_audit.audit_no = report_trans.audit_no LEFT JOIN customer on certification_audit.customer_id= customer.customer_id WHERE certification_audit.auditor_email = ? `,
  reportListAll: `SELECT certification_audit.audit_no, report_s2.report_s2_no, report_s2.s2_report_created, report_s1.report_s1_no, report_s1.s1_report_created, report_trans.report_trans_no, report_trans.created_at_trans_report, customer.name_ko FROM certification_audit LEFT JOIN report_s2 ON certification_audit.audit_no = report_s2.audit_no LEFT JOIN report_s1 ON certification_audit.audit_no = report_s1.audit_no LEFT JOIN report_trans ON certification_audit.audit_no = report_trans.audit_no LEFT JOIN customer on certification_audit.customer_id= customer.customer_id and lower(name_ko) like ?`,

  transReport: `select * from report_trans where audit_no = ?`,
  s1Report: `select * from report_s1 where audit_no = ?`,
  s2Report: `select * from report_s2 where audit_no = ?`,
  // auditListByCustomer: `select t1.*, t2.* from customer t1, certification_audit t2  where  t1.customer_id = t2.customer_id and t2.customer_id=?`,
  auditListByCustomer: `select * from certification_audit where customer_id=?`,
  auditListByBizNo: `select * from certification_audit where business_no=?`,
  auditListByAuditNo: `select t1.*, t2.* from customer t1, certification_audit t2 where t1.customer_id = t2.customer_id and t2.audit_no =?`,
  auditListByAuditor: `select t1.*, t2.*, t3.* from report_trans t1, report_s1 t2, report_s2 t3 where t1.auditor_email = t2.auditor_email and t2.auditor_email = t3.auditor_email and t3.auditor_email =?`,
  reportListByAuditor: `select t1.*, t2.*, t3.* from report_trans t1, report_s1 t2, report_s2 t3 where t1.auditor_email = t2.auditor_email and t2.auditor_email = t3.auditor_email and t3.auditor_email =?`,

  auditListByEmailAndSearchName: `select t1.*, t2.* from customer t1,  certification_audit t2 where t1.customer_id = t2.customer_id and t1.auditor_email=? and lower(name_ko) like ? order by t2.audit_s2_start desc`,
  // auditListByEmailAndSearchName: `SELECT * FROM certification_audit AS t1 LEFT JOIN report_s2 AS t2 ON t1.audit_no = t2.audit_no LEFT JOIN report_s1 AS t3 ON t1.audit_no = t3.audit_no LEFT JOIN report_trans AS t4 ON t1.audit_no = t4.audit_no LEFT JOIN customer AS t5 ON t1.customer_id = t5.customer_id WHERE t1.audit_no = ? AND lower(name_ko) like ? order by t1.audit_s2_start desc`,

  auditListAllBySearchName: `select t1.*, t2.* from customer t1,  certification_audit t2 where t1.customer_id = t2.customer_id and lower(name_ko) like ? order by t2.audit_s2_start desc`,

  s2AuditDayDiff: `select certification_audit.audit_no, certification_audit.audit_s2_end, timestampdiff(day, audit_s2_start, audit_s2_end) as diff_Day from certification_audit where certification_audit.audit_no =?`,
  crSelectedList: `select t1.*, t2.* from certification_audit t1, contract_review t2 where t1.audit_no = t2.audit_no and t2.audit_no=?`,
  auditSelectedList: `select t1.name_ko, t1.auditor_name, t2.* from customer t1, contract_review t2 where t1.customer_id=t2.customer_id`,
  auditorInsert: `insert into auditor set ?`,
  customerInsert: `insert into customer set ?`,
  reportTransInsert: `insert into report_trans set ?`,
  reportS1Insert: `insert into report_s1 set ?`,
  reportS2Insert: `insert into report_s2 set ?`,
  crInsert: `insert into contract_review set ?`,
  certInsert: `insert into certification_audit set ?`,
  auditorImage: `insert into auditor_image set ?`,
  uploadTrans: `insert into report_trans_upload set ?`,
  uploadS1: `insert into report_s1_upload set ?`,
  uploadS2: `insert into report_s2_upload set ?`,

  auditorUpdate: `update auditor set ? where auditor_id=?`,
  customerUpdate: `update customer set ? where business_no=?`,
  auditUpdate: `update certification_audit set ? where audit_no=?`,
  transReportUpdate: `update report_trans set ? where audit_no=?`,
  s1ReportUpdate: `update report_s1 set ? where audit_no=?`,
  s2ReportUpdate: `update report_s2 set ? where audit_no=?`,
  // auditUpdate: `update customer set ? where customer_id=?`,
  auditorDelete: `delete from auditor where auditor_id=?`,
  customerDelete: `delete from customer where customer_id=?`,
  getAuditor: `select * from auditor where auditor_id=?`,
  customerDetail: `select * from customer where customer_id=?`,
  customerDetailByBizNo: `select * from customer where business_no=?`,
  certDetail: `select t1.*, t2. * from customer t1, certification_audit t2 where t1.customer_id= t2.customer_id and t2.audit_id=?`,
  crDetail: `select * from contract_review where customer_id=?`,
  auditorListByCondition: `select * from auditor where lower(auditor_name) like ?`,
  customerListByCondition: `select * from customer where lower(name_ko) like ?`,
  customerListByEmail: `select * from customer where auditor_email = ?`,
  customerListByEmailAndSearchName: `select t1.* from customer t1 where t1.auditor_email = ? and lower(name_ko) like ? order by t1.customer_created_date desc`,
  customerListBySearchName: `select t1.* from customer t1 where  lower(name_ko) like ? order by t1.customer_created_date desc`,
  auditListByCondition: `select t1.name_ko, t2.* from customer t1, certification_audit t2  where  t1.customer_id = t2.customer_id and lower(name_ko) like ?`,
  // auditListDetail: `select t1.*, t2.*, t3.* from customer t1, certification_audit t2, contract_review t3  where  t1.customer_id = t2.customer_id and t2.customer_id = t3.customer_id and t2.audit_no =?`,
  auditListDetail: `select t1.*, t2.* from customer t1, certification_audit t2 where  t1.customer_id = t2.customer_id  and t2.audit_no =?`,
  auditCustomerJoin: `select * from certification_audit inner join customer on certification_audit.customer_id = customer.customer_id where lower(name_ko) like ?`,
  activeCustomers: `select * from customer where status_yn='Y'`,
  signUp: `insert into user set ? on duplicate key update ?`,
  getUser: `select * from user where user_email=?`,
  insertCheckValue: `insert into test set ?`,

  uploadReportListAllByAuditNo: `SELECT certification_audit.audit_no, report_trans_upload.*, report_s1_upload.*, report_s2_upload.* FROM certification_audit LEFT JOIN report_trans_upload ON certification_audit.audit_no = report_trans_upload.audit_no LEFT JOIN report_s1_upload ON certification_audit.audit_no = report_s1_upload.audit_no LEFT JOIN report_s2_upload ON certification_audit.audit_no = report_s2_upload.audit_no WHERE  certification_audit.audit_no = ?`,

  allJoin: `SELECT certification_audit.audit_no, certification_audit.audit_fee, certification_audit.audit_no, certification_audit.audit_standard,certification_audit.audit_type,certification_audit.audit_degree, report_trans.created_at_trans_report, report_s1.s1_report_created, report_s2.s2_report_created, report_trans_upload.report_t_upload_id, report_trans_upload.report_t_upload_created, report_s1_upload.report_s1_upload_id, report_s1_upload.report_s1_upload_created, report_s2_upload.report_s2_upload_id, report_s2_upload.report_s2_upload_created, customer.name_ko,customer.business_no, tax_invoice.created_at_tax_invoice, tax_invoice.tax_invoice_amount, cash.cash_amount, cash.deduct_amount, cert_upload.cert_upload_created, cert_upload.cert_upload_id
             FROM certification_audit LEFT JOIN report_trans ON certification_audit.audit_no = report_trans.audit_no
                                      LEFT JOIN report_s1 ON certification_audit.audit_no = report_s1.audit_no 
                                      LEFT JOIN report_s2 ON certification_audit.audit_no = report_s2.audit_no  
                                      LEFT JOIN report_trans_upload ON certification_audit.audit_no = report_trans_upload.audit_no 
                                      LEFT JOIN report_s1_upload ON certification_audit.audit_no = report_s1_upload.audit_no 
                                      LEFT JOIN report_s2_upload ON certification_audit.audit_no = report_s2_upload.audit_no 
                                      LEFT JOIN customer ON certification_audit.business_no = customer.business_no 
                                      LEFT JOIN tax_invoice ON certification_audit.audit_no = tax_invoice.audit_no 
                                      LEFT JOIN cash ON certification_audit.audit_no = cash.audit_no 
                                      LEFT JOIN cert_upload ON certification_audit.audit_no = cert_upload.audit_no 
             WHERE  certification_audit.auditor_email = ? and  lower(name_ko) like ? `,

  allJoinAdmin: `SELECT certification_audit.audit_no, certification_audit.audit_fee, certification_audit.audit_no, certification_audit.audit_standard,certification_audit.audit_type,certification_audit.audit_degree, report_trans.created_at_trans_report, report_s1.s1_report_created, report_s2.s2_report_created, report_trans_upload.report_t_upload_id, report_trans_upload.report_t_upload_created, report_s1_upload.report_s1_upload_id, report_s1_upload.report_s1_upload_created, report_s2_upload.report_s2_upload_id, report_s2_upload.report_s2_upload_created, customer.name_ko,customer.business_no, tax_invoice.created_at_tax_invoice, tax_invoice.tax_invoice_amount, cash.cash_amount, cash.deduct_amount, cert_upload.cert_upload_created, cert_upload.cert_upload_id
             FROM certification_audit LEFT JOIN report_trans ON certification_audit.audit_no = report_trans.audit_no
                                      LEFT JOIN report_s1 ON certification_audit.audit_no = report_s1.audit_no 
                                      LEFT JOIN report_s2 ON certification_audit.audit_no = report_s2.audit_no  
                                      LEFT JOIN report_trans_upload ON certification_audit.audit_no = report_trans_upload.audit_no 
                                      LEFT JOIN report_s1_upload ON certification_audit.audit_no = report_s1_upload.audit_no 
                                      LEFT JOIN report_s2_upload ON certification_audit.audit_no = report_s2_upload.audit_no 
                                      LEFT JOIN customer ON certification_audit.business_no = customer.business_no 
                                      LEFT JOIN tax_invoice ON certification_audit.audit_no = tax_invoice.audit_no 
                                      LEFT JOIN cash ON certification_audit.audit_no = cash.audit_no 
                                      LEFT JOIN cert_upload ON certification_audit.audit_no = cert_upload.audit_no 
             WHERE lower(name_ko) like ? `,

  getUploadTrans: `select * from report_trans_upload where audit_no=?`,
  getUploadS1: `select * from report_s1_upload where audit_no=?`,
  getUploadS2: `select * from report_s2_upload where audit_no=?`,
  getUploadCert: `select * from cert_upload where audit_no=?`,

  updateUploadTransUpdate: `update report_trans_upload set ? where audit_no=?`,
  updateUploadS1Update: `update report_s1_upload set ? where audit_no=?`,
  updateUploadS2Update: `update report_s2_upload set ? where audit_no=?`,

  insertTaxInvoice: `insert into tax_invoice set ?`,
  getTaxInvoice: `select * from tax_invoice where audit_no=?`,
  insertCash: `insert into cash set ?`,
  insertCertUpload: `insert into cert_upload set ?`,
};
