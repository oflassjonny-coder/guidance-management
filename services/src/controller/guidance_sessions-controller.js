const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const guidanceSessionsService = require("../services/guidance_sessions-service.js");

// CREATE
const createGuidanceSession = async (req, res) => {
  try {
    const {
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
    } = req.body;

    const result = await guidanceSessionsService.createGuidanceSession(
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
    );

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Guidance session created successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Create guidance session error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ ALL
const findAllGuidanceSessions = async (req, res) => {
  try {
    const result = await guidanceSessionsService.findAllGuidanceSessions();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Guidance sessions retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find all guidance sessions error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ BY ID
const findGuidanceSessionById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await guidanceSessionsService.findGuidanceSessionById(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Guidance session not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Guidance session retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find guidance session by ID error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ BY CASE RECORD ID
const findGuidanceSessionsByCaseRecordId = async (req, res) => {
  try {
    const { caseRecordId } = req.params;
    const result = await guidanceSessionsService.findGuidanceSessionsByCaseRecordId(caseRecordId);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Guidance sessions retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find guidance sessions by case record ID error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ BY STAFF ID
const findGuidanceSessionsByStaffId = async (req, res) => {
  try {
    const { staffId } = req.params;
    const result = await guidanceSessionsService.findGuidanceSessionsByStaffId(staffId);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Guidance sessions retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find guidance sessions by staff ID error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ BY STATUS
const findGuidanceSessionsByStatus = async (req, res) => {
  try {
    const { status } = req.params;
    const result = await guidanceSessionsService.findGuidanceSessionsByStatus(status);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Guidance sessions by status retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find guidance sessions by status error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ BY SESSION TYPE
const findGuidanceSessionsByType = async (req, res) => {
  try {
    const { sessionType } = req.params;
    const result = await guidanceSessionsService.findGuidanceSessionsByType(sessionType);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Guidance sessions by type retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find guidance sessions by type error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// UPDATE
const updateGuidanceSession = async (req, res) => {
  try {
    const { id } = req.params;

    const {
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
    } = req.body;

    const result = await guidanceSessionsService.updateGuidanceSession(id, {
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
    });

    if (!result || result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Guidance session not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Guidance session updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update guidance session error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// DELETE
const deleteGuidanceSession = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await guidanceSessionsService.deleteGuidanceSession(id);

    if (!result || result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Guidance session not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Guidance session deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete guidance session error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

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
