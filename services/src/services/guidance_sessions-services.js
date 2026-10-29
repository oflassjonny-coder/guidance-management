// 1. Import Database Connection and Query Definitions
const db = require("../config/database.js");
const {
  CREATE_GUIDANCE_SESSION,
  FIND_ALL_GUIDANCE_SESSIONS,
  FIND_GUIDANCE_SESSION_BY_ID,
  FIND_GUIDANCE_SESSIONS_BY_CASE_RECORD_ID,
  FIND_GUIDANCE_SESSIONS_BY_STAFF_ID,
  FIND_GUIDANCE_SESSIONS_BY_STATUS,
  FIND_GUIDANCE_SESSIONS_BY_TYPE,
  UPDATE_GUIDANCE_SESSION,
  DELETE_GUIDANCE_SESSION,
} = require("../database/queries/guidance_sessions-query.js");

// ==========================================
// CREATE OPERATION
// ==========================================
const createGuidanceSession = async (
  case_record_id,
  staff_id,
  session_date,
  session_time,
  session_type,
  concern,
  discussion_summary,
  intervention,
  recommendation,
  follow_up_date,
  status,
) => {
  // Input Validation
  if (!case_record_id || !staff_id || !session_date || !session_time || !session_type) {
    throw new Error("Required fields are missing.");
  }

  // Execute SQL query with parameter binding
  const [result] = await db.query(CREATE_GUIDANCE_SESSION, [
    case_record_id,
    staff_id,
    session_date,
    session_time,
    session_type,
    concern,
    discussion_summary,
    intervention,
    recommendation,
    follow_up_date,
    status,
  ]);

  return result;
};

// ==========================================
// READ OPERATIONS
// ==========================================

// Get All Records
const findAllGuidanceSessions = async () => {
  const [rows] = await db.query(FIND_ALL_GUIDANCE_SESSIONS);
  return rows;
};

// Get Single Record by Primary Key (ID)
const findGuidanceSessionById = async (id) => {
  if (!id) {
    throw new Error("Session ID is required.");
  }

  const [rows] = await db.query(FIND_GUIDANCE_SESSION_BY_ID, [id]);

  return rows[0] || null;
};

// Get Guidance Sessions by Case Record ID
const findGuidanceSessionsByCaseRecordId = async (caseRecordId) => {
  if (!caseRecordId) {
    throw new Error("Case record ID is required.");
  }

  const [rows] = await db.query(FIND_GUIDANCE_SESSIONS_BY_CASE_RECORD_ID, [caseRecordId]);

  return rows;
};

// Get Guidance Sessions by Staff ID
const findGuidanceSessionsByStaffId = async (staffId) => {
  if (!staffId) {
    throw new Error("Staff ID is required.");
  }

  const [rows] = await db.query(FIND_GUIDANCE_SESSIONS_BY_STAFF_ID, [staffId]);

  return rows;
};

// Get Guidance Sessions by Status
const findGuidanceSessionsByStatus = async (status) => {
  if (!status) {
    throw new Error("Status is required.");
  }

  const [rows] = await db.query(FIND_GUIDANCE_SESSIONS_BY_STATUS, [status]);

  return rows;
};

// Get Guidance Sessions by Session Type
const findGuidanceSessionsByType = async (sessionType) => {
  if (!sessionType) {
    throw new Error("Session type is required.");
  }

  const [rows] = await db.query(FIND_GUIDANCE_SESSIONS_BY_TYPE, [sessionType]);

  return rows;
};

// ==========================================
// UPDATE OPERATION
// ==========================================
const updateGuidanceSession = async (id, data) => {
  if (!id) {
    throw new Error("Session ID is required.");
  }

  const [result] = await db.query(UPDATE_GUIDANCE_SESSION, [
    case_record_id,
    staff_id,
    session_date,
    session_time,
    session_type,
    concern,
    discussion_summary,
    intervention,
    recommendation,
    follow_up_date,
    status,
    id,
  ]);

  return result;
};

// ==========================================
// DELETE OPERATION
// ==========================================
const deleteGuidanceSession = async (id) => {
  if (!id) {
    throw new Error("Session ID is required.");
  }

  const [result] = await db.query(DELETE_GUIDANCE_SESSION, [id]);

  return result;
};

// ==========================================
// EXPORT
// ==========================================
module.exports = {
  createGuidanceSession,
  findAllGuidanceSessions,
  findGuidanceSessionById,
  findGuidanceSessionsByCaseRecordId,
  findGuidanceSessionsByStaffId,
  findGuidanceSessionsByStatus,
  findGuidanceSessionsByType,
  updateGuidanceSession,
  deleteGuidanceSession,
};
