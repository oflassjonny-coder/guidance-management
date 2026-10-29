const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const guidanceReportService = require("../services/guidance_report-service.js");

// CREATE
const createGuidanceReport = async (req, res) => {
  try {
    const { staff_id, report_type, report_title, date_from, date_to } = req.body;

    const result = await guidanceReportService.createGuidanceReport(
      staff_id,
      report_type,
      report_title,
      date_from,
      date_to,
    );

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Guidance report created successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Create guidance report error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ ALL
const findAllGuidanceReports = async (req, res) => {
  try {
    const result = await guidanceReportService.findAllGuidanceReports();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Guidance reports retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find all guidance reports error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ BY ID
const findGuidanceReportById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await guidanceReportService.findGuidanceReportById(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Guidance report not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Guidance report retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find guidance report by ID error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ BY STAFF ID
const findGuidanceReportsByStaffId = async (req, res) => {
  try {
    const { staffId } = req.params;
    const result = await guidanceReportService.findGuidanceReportsByStaffId(staffId);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Guidance reports retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find guidance reports by staff ID error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ BY REPORT TYPE
const findGuidanceReportsByType = async (req, res) => {
  try {
    const { reportType } = req.params;
    const result = await guidanceReportService.findGuidanceReportsByType(reportType);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Guidance reports by type retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find guidance reports by type error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ BY DATE RANGE
const findGuidanceReportsByDateRange = async (req, res) => {
  try {
    const { dateFrom, dateTo } = req.query;

    const result = await guidanceReportService.findGuidanceReportsByDateRange(dateFrom, dateTo);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Guidance reports retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find guidance reports by date range error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// UPDATE
const updateGuidanceReport = async (req, res) => {
  try {
    const { id } = req.params;
    const { staff_id, report_type, report_title, date_from, date_to } = req.body;

    const result = await guidanceReportService.updateGuidanceReport(id, {
      staff_id,
      report_type,
      report_title,
      date_from,
      date_to,
    });

    if (!result || result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Guidance report not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Guidance report updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update guidance report error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// DELETE
const deleteGuidanceReport = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await guidanceReportService.deleteGuidanceReport(id);

    if (!result || result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Guidance report not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Guidance report deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete guidance report error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

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
