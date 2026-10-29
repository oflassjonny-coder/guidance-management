// Import Database Connection and Query Definitions
const db = require("../config/database.js");

const {
  CREATE_STAFF,
  FIND_ALL_STAFFS,
  FIND_STAFF_BY_ID,
  FIND_STAFF_BY_ACCOUNT_ID,
  FIND_STAFF_BY_EMAIL,
  UPDATE_STAFF,
  DELETE_STAFF,
} = require("../database/queries/staff-query.js");

// ==========================================
// CREATE OPERATION
// ==========================================
const createStaff = async (account_id, role_id, lastname, firstname, contact_no, email) => {
  // Input Validation
  if (!account_id || !role_id || !lastname || !firstname || !contact_no || !email) {
    throw new Error("Required fields are missing.");
  }

  // Execute SQL query
  const [result] = await db.query(CREATE_STAFF, [account_id, role_id, lastname, firstname, contact_no, email]);

  return result;
};

// ==========================================
// READ OPERATIONS
// ==========================================

// Get All Staffs
const findAllStaffs = async () => {
  const [rows] = await db.query(FIND_ALL_STAFFS);
  return rows;
};

// Get Staff by ID
const findStaffById = async (id) => {
  if (!id) {
    throw new Error("Staff ID is required.");
  }

  const [rows] = await db.query(FIND_STAFF_BY_ID, [id]);

  return rows[0] || null;
};

// Get Staff by Account ID
const findStaffByAccountId = async (accountId) => {
  if (!accountId) {
    throw new Error("Account ID is required.");
  }

  const [rows] = await db.query(FIND_STAFF_BY_ACCOUNT_ID, [accountId]);

  return rows[0] || null;
};

// Get Staff by Email
const findStaffByEmail = async (email) => {
  if (!email) {
    throw new Error("Email is required.");
  }

  const [rows] = await db.query(FIND_STAFF_BY_EMAIL, [email]);

  return rows[0] || null;
};

// ==========================================
// UPDATE OPERATION
// ==========================================
const updateStaff = async (id, data) => {
  if (!id) {
    throw new Error("Staff ID is required.");
  }

  const [result] = await db.query(UPDATE_STAFF, [account_id, role_id, lastname, firstname, contact_no, email, id]);

  return result;
};

// ==========================================
// DELETE OPERATION
// ==========================================
const deleteStaff = async (id) => {
  if (!id) {
    throw new Error("Staff ID is required.");
  }

  const [result] = await db.query(DELETE_STAFF, [id]);

  return result;
};

// ==========================================
// EXPORT ALL FUNCTIONS
// ==========================================
module.exports = {
  createStaff,
  findAllStaffs,
  findStaffById,
  findStaffByAccountId,
  findStaffByEmail,
  updateStaff,
  deleteStaff,
};
