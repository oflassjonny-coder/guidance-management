// Import Database Connection and Query Definitions
const db = require("../config/database.js");

const {
  CREATE_GRADE_SECTION,
  FIND_ALL_GRADE_SECTIONS,
  FIND_GRADE_SECTION_BY_ID,
  FIND_GRADE_SECTIONS_BY_SCHOOL_YEAR,
  FIND_GRADE_SECTIONS_BY_GRADE_N_STRAND,
  FIND_GRADE_SECTIONS_BY_ADVISER,
  FIND_GRADE_SECTION,
  UPDATE_GRADE_SECTION,
  DELETE_GRADE_SECTION,
} = require("../database/queries/grade_sections-query.js");

// ==========================================
// CREATE OPERATION
// ==========================================
const createGradeSection = async (school_year_id, grade_n_strand_id, adviser_staff_id, section_name, description) => {
  if (!school_year_id || !grade_n_strand_id || !adviser_staff_id || !section_name || !description) {
    throw new Error("Required fields are missing.");
  }

  const [result] = await db.query(CREATE_GRADE_SECTION, [
    school_year_id,
    grade_n_strand_id,
    adviser_staff_id,
    section_name,
    description,
  ]);

  return result;
};

// ==========================================
// READ OPERATIONS
// ==========================================

// Get All Grade Sections
const findAllGradeSections = async () => {
  const [rows] = await db.query(FIND_ALL_GRADE_SECTIONS);
  return rows;
};

// Get Grade Section by ID
const findGradeSectionById = async (id) => {
  if (!id) {
    throw new Error("Grade section ID is required.");
  }

  const [rows] = await db.query(FIND_GRADE_SECTION_BY_ID, [id]);

  return rows[0] || null;
};

// Get Grade Sections by School Year
const findGradeSectionsBySchoolYear = async (schoolYearId) => {
  if (!schoolYearId) {
    throw new Error("School year ID is required.");
  }

  const [rows] = await db.query(FIND_GRADE_SECTIONS_BY_SCHOOL_YEAR, [schoolYearId]);

  return rows;
};

// Get Grade Sections by Grade and Strand
const findGradeSectionsByGradeNStrand = async (gradeNStrandId) => {
  if (!gradeNStrandId) {
    throw new Error("Grade and strand ID is required.");
  }

  const [rows] = await db.query(FIND_GRADE_SECTIONS_BY_GRADE_N_STRAND, [gradeNStrandId]);

  return rows;
};

// Get Grade Sections by Adviser
const findGradeSectionsByAdviser = async (adviserStaffId) => {
  if (!adviserStaffId) {
    throw new Error("Adviser staff ID is required.");
  }

  const [rows] = await db.query(FIND_GRADE_SECTIONS_BY_ADVISER, [adviserStaffId]);

  return rows;
};

// Check Specific Grade Section
const findGradeSection = async (schoolYearId, gradeNStrandId, sectionName) => {
  if (!schoolYearId || !gradeNStrandId || !sectionName) {
    throw new Error("Required fields are missing.");
  }

  const [rows] = await db.query(FIND_GRADE_SECTION, [schoolYearId, gradeNStrandId, sectionName]);

  return rows[0] || null;
};

// ==========================================
// UPDATE OPERATION
// ==========================================
const updateGradeSection = async (id, data) => {
  if (!id) {
    throw new Error("Grade section ID is required.");
  }

  const [result] = await db.query(UPDATE_GRADE_SECTION, [
    school_year_id,
    grade_n_strand_id,
    adviser_staff_id,
    section_name,
    description,
    id,
  ]);

  return result;
};

// ==========================================
// DELETE OPERATION
// ==========================================
const deleteGradeSection = async (id) => {
  if (!id) {
    throw new Error("Grade section ID is required.");
  }

  const [result] = await db.query(DELETE_GRADE_SECTION, [id]);

  return result;
};

// ==========================================
// EXPORT ALL FUNCTIONS
// ==========================================
module.exports = {
  createGradeSection,
  findAllGradeSections,
  findGradeSectionById,
  findGradeSectionsBySchoolYear,
  findGradeSectionsByGradeNStrand,
  findGradeSectionsByAdviser,
  findGradeSection,
  updateGradeSection,
  deleteGradeSection,
};
