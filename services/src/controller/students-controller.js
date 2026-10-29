const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const studentsService = require("../services/students-service.js");

// ==========================================
// CREATE OPERATION
// ==========================================
const createStudent = async (req, res) => {
  try {
    const { grade_section_id, account_id, lastname, firstname, middlename, contact_no } = req.body;

    const result = await studentsService.createStudent(
      grade_section_id,
      account_id,
      lastname,
      firstname,
      middlename,
      contact_no,
    );

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Student created successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Create student error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// ==========================================
// READ OPERATIONS
// ==========================================

// Get All Students
const findAllStudents = async (req, res) => {
  try {
    const result = await studentsService.findAllStudents();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Students retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find all students error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// Get Student by ID
const findStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await studentsService.findStudentById(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Student not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Student retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find student by ID error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// Get Students by Grade Section ID
const findStudentsByGradeSectionId = async (req, res) => {
  try {
    const { gradeSectionId } = req.params;

    const result = await studentsService.findStudentsByGradeSectionId(gradeSectionId);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Students retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find students by grade section ID error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// Get Student by Account ID
const findStudentByAccountId = async (req, res) => {
  try {
    const { accountId } = req.params;
    const result = await studentsService.findStudentByAccountId(accountId);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Student record not found for this account.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Student retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find student by account ID error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// Get Students by Last Name
const findStudentsByLastname = async (req, res) => {
  try {
    const { lastname } = req.params;
    const result = await studentsService.findStudentsByLastname(lastname);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Students retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find students by last name error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// Get Students by Name
const findStudentsByName = async (req, res) => {
  try {
    const { name } = req.query;
    const result = await studentsService.findStudentsByName(name);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Students retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find students by name error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// ==========================================
// UPDATE OPERATION
// ==========================================
const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const { grade_section_id, account_id, lastname, firstname, middlename, contact_no } = req.body;

    const result = await studentsService.updateStudent(id, {
      grade_section_id,
      account_id,
      lastname,
      firstname,
      middlename,
      contact_no,
    });

    if (!result || result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Student not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Student updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update student error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// ==========================================
// DELETE OPERATION
// ==========================================
const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await studentsService.deleteStudent(id);

    if (!result || result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Student not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Student deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete student error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
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
