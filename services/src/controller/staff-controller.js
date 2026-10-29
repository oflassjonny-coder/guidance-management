const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const staffService = require("../services/staff-service.js");

// ==========================================
// CREATE OPERATION
// ==========================================
const createStaff = async (req, res) => {
  try {
    const { account_id, role_id, lastname, firstname, contact_no, email } = req.body;

    const result = await staffService.createStaff(account_id, role_id, lastname, firstname, contact_no, email);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Staff created successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Create staff error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// ==========================================
// READ OPERATIONS
// ==========================================

// Get All Staff
const findAllStaffs = async (req, res) => {
  try {
    const result = await staffService.findAllStaffs();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Staff records retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find all staff error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// Get Staff by ID
const findStaffById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await staffService.findStaffById(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Staff not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Staff retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find staff by ID error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// Get Staff by Account ID
const findStaffByAccountId = async (req, res) => {
  try {
    const { accountId } = req.params;
    const result = await staffService.findStaffByAccountId(accountId);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Staff record not found for this account.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Staff retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find staff by account ID error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// Get Staff by Email
const findStaffByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const result = await staffService.findStaffByEmail(email);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Staff not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Staff retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find staff by email error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// ==========================================
// UPDATE OPERATION
// ==========================================
const updateStaff = async (req, res) => {
  try {
    const { id } = req.params;

    const { account_id, role_id, lastname, firstname, contact_no, email } = req.body;

    const result = await staffService.updateStaff(id, {
      account_id,
      role_id,
      lastname,
      firstname,
      contact_no,
      email,
    });

    if (!result || result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Staff not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Staff updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update staff error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// ==========================================
// DELETE OPERATION
// ==========================================
const deleteStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await staffService.deleteStaff(id);

    if (!result || result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Staff not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Staff deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete staff error:", error);

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
  createStaff,
  findAllStaffs,
  findStaffById,
  findStaffByAccountId,
  findStaffByEmail,
  updateStaff,
  deleteStaff,
};
