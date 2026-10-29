// Import Database Connection and Query Definitions
const db = require("../config/database.js");

const {
  CREATE_GRADE_N_STRAND,
  FIND_ALL_GRADE_N_STRANDS,
  FIND_GRADE_N_STRAND_BY_ID,
  FIND_GRADE_N_STRAND,
  UPDATE_GRADE_N_STRAND,
  DELETE_GRADE_N_STRAND,
} = require("../database/queries/grade_n_strands-query.js");

// ==========================================
// CREATE OPERATION
// ==========================================
const createGradeNStrand = async (grade_level, strand, description) => {
  if (!grade_level || !strand || !description) {
    throw new Error("Required fields are missing.");
  }

  const [result] = await db.query(CREATE_GRADE_N_STRAND, [grade_level, strand, description]);

  return result;
};

// ==========================================
// READ OPERATIONS
// ==========================================

// Get All Grade Levels and Strands
const findAllGradeNStrands = async () => {
  const [rows] = await db.query(FIND_ALL_GRADE_N_STRANDS);
  return rows;
};

// Get Grade Level and Strand by ID
const findGradeNStrandById = async (id) => {
  if (!id) {
    throw new Error("Grade and strand ID is required.");
  }

  const [rows] = await db.query(FIND_GRADE_N_STRAND_BY_ID, [id]);

  return rows[0] || null;
};

// Get by Grade Level and Strand
const findGradeNStrand = async (gradeLevel, strand) => {
  if (!gradeLevel || !strand) {
    throw new Error("Grade level and strand are required.");
  }

  const [rows] = await db.query(FIND_GRADE_N_STRAND, [gradeLevel, strand]);

  return rows[0] || null;
};

// ==========================================
// UPDATE OPERATION
// ==========================================
const updateGradeNStrand = async (id, data) => {
  if (!id) {
    throw new Error("Grade and strand ID is required.");
  }

  const [result] = await db.query(UPDATE_GRADE_N_STRAND, [grade_level, strand, description, id]);

  return result;
};

// ==========================================
// DELETE OPERATION
// ==========================================
const deleteGradeNStrand = async (id) => {
  if (!id) {
    throw new Error("Grade and strand ID is required.");
  }

  const [result] = await db.query(DELETE_GRADE_N_STRAND, [id]);

  return result;
};

// ==========================================
// EXPORT ALL FUNCTIONS
// ==========================================
module.exports = {
  createGradeNStrand,
  findAllGradeNStrands,
  findGradeNStrandById,
  findGradeNStrand,
  updateGradeNStrand,
  deleteGradeNStrand,
};
