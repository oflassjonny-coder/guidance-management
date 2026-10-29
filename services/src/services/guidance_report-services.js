// 1. Import Database Connection and Query Definitions
const db = require("../config/database.js");
const {
  CREATE_GUIDANCE_REPORT,
  FIND_ALL_GUIDANCE_REPORTS,
  FIND_GUIDANCE_REPORT_BY_ID,
  FIND_GUIDANCE_REPORTS_BY_STAFF_ID,
  FIND_GUIDANCE_REPORTS_BY_TYPE,
  FIND_GUIDANCE_REPORTS_BY_DATE_RANGE,
  UPDATE_GUIDANCE_REPORT,
  DELETE_GUIDANCE_REPORT,
} = require("../database/queries/guidance_report-query.js");

// ==========================================
// CREATE OPERATION
// ==========================================
const createGuidanceReport = async (staff_id, report_type, report_title, date_from, date_to) => {
  // Input Validation
  if (!staff_id || !report_type || !report_title || !date_from || !date_to) {
    throw new Error("Required fields are missing.");
  }

  // Execute SQL query with parameter binding
  const [result] = await db.query(CREATE_GUIDANCE_REPORT, [staff_id, report_type, report_title, date_from, date_to]);

  return result;
};

// ==========================================
// READ OPERATIONS
// ==========================================

// Get All Records
const findAllGuidanceReports = async () => {
  const [rows] = await db.query(FIND_ALL_GUIDANCE_REPORTS);
  return rows;
};

// Get Single Record by Primary Key (ID)
const findGuidanceReportById = async (id) => {
  if (!id) {
    throw new Error("Report ID is required.");
  }

  const [rows] = await db.query(FIND_GUIDANCE_REPORT_BY_ID, [id]);
  return rows[0] || null;
};

// Get Guidance Reports by Staff ID
const findGuidanceReportsByStaffId = async (staffId) => {
  if (!staffId) {
    throw new Error("Staff ID is required.");
  }

  const [rows] = await db.query(FIND_GUIDANCE_REPORTS_BY_STAFF_ID, [staffId]);

  return rows;
};

// Get Guidance Reports by Report Type
const findGuidanceReportsByType = async (reportType) => {
  if (!reportType) {
    throw new Error("Report type is required.");
  }

  const [rows] = await db.query(FIND_GUIDANCE_REPORTS_BY_TYPE, [reportType]);

  return rows;
};

// Get Guidance Reports by Date Range
const findGuidanceReportsByDateRange = async (dateFrom, dateTo) => {
  if (!dateFrom || !dateTo) {
    throw new Error("Date range is required.");
  }

  const [rows] = await db.query(FIND_GUIDANCE_REPORTS_BY_DATE_RANGE, [dateFrom, dateTo]);

  return rows;
};

// ==========================================
// UPDATE OPERATION
// ==========================================
const updateGuidanceReport = async (id, data) => {
  if (!id) {
    throw new Error("Report ID is required.");
  }

  const [result] = await db.query(UPDATE_GUIDANCE_REPORT, [
    staff_id,
    report_type,
    report_title,
    date_from,
    date_to,
    id,
  ]);

  return result;
};

// ==========================================
// DELETE OPERATION
// ==========================================
const deleteGuidanceReport = async (id) => {
  if (!id) {
    throw new Error("Report ID is required.");
  }

  const [result] = await db.query(DELETE_GUIDANCE_REPORT, [id]);

  return result;
};

// ==========================================
// EXPORT
// ==========================================
module.exports = {
  createGuidanceReport,
  findAllGuidanceReports,
  findGuidanceReportById,
  findGuidanceReportsByStaffId,
  findGuidanceReportsByType,
  findGuidanceReportsByDateRange,
  updateGuidanceReport,
  deleteGuidanceReport,
};
