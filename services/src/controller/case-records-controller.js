const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const caseRecordsService = require("../services/case-records-service.js");

// ==========================================
// CREATE OPERATION
// ==========================================
const createCaseRecord = async (req, res) => {
  try {
    const {
      student_id,
      concern_id,
      opened_by,
      opened_date,
      title,
      description,
      priority,
      status,
      closed_date,
      closing_remarks,
    } = req.body;

    const result = await caseRecordsService.createCaseRecord(
      student_id,
      concern_id,
      opened_by,
      opened_date,
      title,
      description,
      priority,
      status,
      closed_date,
      closing_remarks,
    );

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Case record created successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Create case record error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// ==========================================
// READ OPERATIONS
// ==========================================

// Get All Case Records
const findAllCaseRecords = async (req, res) => {
  try {
    const result = await caseRecordsService.findAllCaseRecords();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Case records retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find all case records error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// Get Case Record by ID
const findCaseRecordById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await caseRecordsService.findCaseRecordById(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Case record not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Case record retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find case record by ID error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// Get Case Records by Student ID
const findCaseRecordsByStudentId = async (req, res) => {
  try {
    const { studentId } = req.params;

    const result = await caseRecordsService.findCaseRecordsByStudentId(studentId);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Student case records retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find case records by student ID error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// Get Case Records by Concern ID
const findCaseRecordsByConcernId = async (req, res) => {
  try {
    const { concernId } = req.params;

    const result = await caseRecordsService.findCaseRecordsByConcernId(concernId);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Concern case records retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find case records by concern ID error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// Get Case Records by Staff ID (Opened By)
const findCaseRecordsByOpenedBy = async (req, res) => {
  try {
    const { openedBy } = req.params;

    const result = await caseRecordsService.findCaseRecordsByOpenedBy(openedBy);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Case records retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find case records by staff ID error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// Get Case Records by Status
const findCaseRecordsByStatus = async (req, res) => {
  try {
    const { status } = req.params;

    const result = await caseRecordsService.findCaseRecordsByStatus(status);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Case records by status retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find case records by status error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// Get Case Records by Priority
const findCaseRecordsByPriority = async (req, res) => {
  try {
    const { priority } = req.params;

    const result = await caseRecordsService.findCaseRecordsByPriority(priority);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Case records by priority retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find case records by priority error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// Get Case Record by Student, Concern, and Opened Date
const findCaseRecord = async (req, res) => {
  try {
    const { studentId, concernId, openedDate } = req.query;

    const result = await caseRecordsService.findCaseRecord(studentId, concernId, openedDate);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Case record not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Case record retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find case record error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// ==========================================
// UPDATE OPERATION
// ==========================================
const updateCaseRecord = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      student_id,
      concern_id,
      opened_by,
      opened_date,
      title,
      description,
      priority,
      status,
      closed_date,
      closing_remarks,
    } = req.body;

    const result = await caseRecordsService.updateCaseRecord(id, {
      student_id,
      concern_id,
      opened_by,
      opened_date,
      title,
      description,
      priority,
      status,
      closed_date,
      closing_remarks,
    });

    if (!result || result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Case record not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Case record updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update case record error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// ==========================================
// DELETE OPERATION
// ==========================================
const deleteCaseRecord = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await caseRecordsService.deleteCaseRecord(id);

    if (!result || result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Case record not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Case record deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete case record error:", error);

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
  createCaseRecord,
  findAllCaseRecords,
  findCaseRecordById,
  findCaseRecordsByStudentId,
  findCaseRecordsByConcernId,
  findCaseRecordsByOpenedBy,
  findCaseRecordsByStatus,
  findCaseRecordsByPriority,
  findCaseRecord,
  updateCaseRecord,
  deleteCaseRecord,
};
