// 1. Importbase Connection and Query Definitions
const db = require("../config/base.js");
const {
  CREATE_STUDENT,
  FIND_ALL_STUDENTS,
  FIND_STUDENT_BY_ID,
  FIND_STUDENTS_BY_GRADE_SECTION_ID,
  FIND_STUDENT_BY_ACCOUNT_ID,
  FIND_STUDENTS_BY_LASTNAME,
  FIND_STUDENTS_BY_NAME,
  UPDATE_STUDENT,
  DELETE_STUDENT,
} = require("../base/queries/students-query.js");

// ==========================================
// CREATE OPERATION
// ==========================================
const createStudent = async (grade_section_id, account_id, lastname, firstname, middlename, contact_no) => {
  // Input Validation
  if (!grade_section_id || !lastname || !firstname) {
    throw new Error("Required fields are missing.");
  }

  // Execute SQL query with parameter binding
  const [result] = await db.query(CREATE_STUDENT, [
    grade_section_id,
    account_id,
    lastname,
    firstname,
    middlename,
    contact_no,
  ]);

  return result;
};

// ==========================================
// READ OPERATIONS
// ==========================================

// Get All Records
const findAllStudents = async () => {
  const [rows] = await db.query(FIND_ALL_STUDENTS);
  return rows;
};

// Get Single Record by Primary Key (ID)
const findStudentById = async (id) => {
  if (!id) {
    throw new Error("Student ID is required.");
  }

  const [rows] = await db.query(FIND_STUDENT_BY_ID, [id]);

  return rows[0] || null;
};

// Get Students by Grade Section ID
const findStudentsByGradeSectionId = async (gradeSectionId) => {
  if (!gradeSectionId) {
    throw new Error("Grade section ID is required.");
  }

  const [rows] = await db.query(FIND_STUDENTS_BY_GRADE_SECTION_ID, [gradeSectionId]);

  return rows;
};

// Get Student by Account ID
const findStudentByAccountId = async (accountId) => {
  if (!accountId) {
    throw new Error("Account ID is required.");
  }

  const [rows] = await db.query(FIND_STUDENT_BY_ACCOUNT_ID, [accountId]);

  return rows[0] || null;
};

// Get Students by Last Name
const findStudentsByLastname = async (lastname) => {
  if (!lastname) {
    throw new Error("Last name is required.");
  }

  const [rows] = await db.query(FIND_STUDENTS_BY_LASTNAME, [lastname]);

  return rows;
};

// Get Students by Name
const findStudentsByName = async (name) => {
  if (!name) {
    throw new Error("Name is required.");
  }

  const [rows] = await db.query(FIND_STUDENTS_BY_NAME, [name, name]);

  return rows;
};

// ==========================================
// UPDATE OPERATION
// ==========================================
const updateStudent = async (id) => {
  if (!id) {
    throw new Error("Student ID is required.");
  }

  const [result] = await db.query(UPDATE_STUDENT, [
    grade_section_id,
    account_id,
    lastname,
    firstname,
    middlename,
    contact_no,
    id,
  ]);

  return result;
};

// ==========================================
// DELETE OPERATION
// ==========================================
const deleteStudent = async (id) => {
  if (!id) {
    throw new Error("Student ID is required.");
  }

  const [result] = await db.query(DELETE_STUDENT, [id]);

  return result;
};

// ==========================================
// EXPORT
// ==========================================
module.exports = {
  createStudent,
  findAllStudents,
  findStudentById,
  findStudentsByGradeSectionId,
  findStudentByAccountId,
  findStudentsByLastname,
  findStudentsByName,
  updateStudent,
  deleteStudent,
};
