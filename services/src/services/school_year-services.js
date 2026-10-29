// Import Database Connection and Query Definitions
const db = require("../config/database.js");

const {
  CREATE_SCHOOL_YEAR,
  FIND_ALL_SCHOOL_YEARS,
  FIND_SCHOOL_YEAR_BY_ID,
  FIND_SCHOOL_YEAR_BY_YEAR,
  FIND_ACTIVE_SCHOOL_YEAR,
  UPDATE_SCHOOL_YEAR,
  DELETE_SCHOOL_YEAR,
} = require("../database/queries/school_years-query.js");

// ==========================================
// CREATE OPERATION
// ==========================================
const createSchoolYear = async (staff_id, school_year, start_date, end_date, is_active) => {
  if (!staff_id || !school_year || !start_date || !end_date) {
    throw new Error("Required fields are missing.");
  }

  const [result] = await db.query(CREATE_SCHOOL_YEAR, [staff_id, school_year, start_date, end_date, is_active]);

  return result;
};

// ==========================================
// READ OPERATIONS
// ==========================================

// Get All School Years
const findAllSchoolYears = async () => {
  const [rows] = await db.query(FIND_ALL_SCHOOL_YEARS);
  return rows;
};

// Get School Year by ID
const findSchoolYearById = async (id) => {
  if (!id) {
    throw new Error("School year ID is required.");
  }

  const [rows] = await db.query(FIND_SCHOOL_YEAR_BY_ID, [id]);

  return rows[0] || null;
};

// Get School Year by Year
const findSchoolYearByYear = async (schoolYear) => {
  if (!schoolYear) {
    throw new Error("School year is required.");
  }

  const [rows] = await db.query(FIND_SCHOOL_YEAR_BY_YEAR, [schoolYear]);

  return rows[0] || null;
};

// Get Active School Year
const findActiveSchoolYear = async () => {
  const [rows] = await db.query(FIND_ACTIVE_SCHOOL_YEAR);

  return rows[0] || null;
};

// ==========================================
// UPDATE OPERATION
// ==========================================
const updateSchoolYear = async (id, data) => {
  if (!id) {
    throw new Error("School year ID is required.");
  }

  const [result] = await db.query(UPDATE_SCHOOL_YEAR, [staff_id, school_year, start_date, end_date, is_active, id]);

  return result;
};

// ==========================================
// DELETE OPERATION
// ==========================================
const deleteSchoolYear = async (id) => {
  if (!id) {
    throw new Error("School year ID is required.");
  }

  const [result] = await db.query(DELETE_SCHOOL_YEAR, [id]);

  return result;
};

// ==========================================
// EXPORT ALL FUNCTIONS
// ==========================================
module.exports = {
  createSchoolYear,
  findAllSchoolYears,
  findSchoolYearById,
  findSchoolYearByYear,
  findActiveSchoolYear,
  updateSchoolYear,
  deleteSchoolYear,
};
