const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const appointmentsService = require("../services/appointments-service.js");

// ==========================================
// CREATE OPERATION
// ==========================================
const createAppointment = async (req, res) => {
  try {
    const { student_id, staff_id, appointment_date, appointment_time, purpose, status, remarks } = req.body;

    const result = await appointmentsService.createAppointment(
      student_id,
      staff_id,
      appointment_date,
      appointment_time,
      purpose,
      status,
      remarks,
    );

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Appointment created successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Create appointment error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// ==========================================
// READ OPERATIONS
// ==========================================

// Get All Appointments
const findAllAppointments = async (req, res) => {
  try {
    const result = await appointmentsService.findAllAppointments();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Appointments retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find all appointments error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// Get Appointment by ID
const findAppointmentById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await appointmentsService.findAppointmentById(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Appointment not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Appointment retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find appointment by ID error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// Get Appointments by Student ID
const findAppointmentsByStudentId = async (req, res) => {
  try {
    const { studentId } = req.params;

    const result = await appointmentsService.findAppointmentsByStudentId(studentId);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Student appointments retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find appointments by student ID error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// Get Appointments by Staff ID
const findAppointmentsByStaffId = async (req, res) => {
  try {
    const { staffId } = req.params;

    const result = await appointmentsService.findAppointmentsByStaffId(staffId);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Staff appointments retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find appointments by staff ID error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// Get Appointment by Student, Staff, Date, and Time
const findAppointment = async (req, res) => {
  try {
    const { studentId, staffId, appointmentDate, appointmentTime } = req.query;

    const result = await appointmentsService.findAppointment(studentId, staffId, appointmentDate, appointmentTime);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Appointment not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Appointment retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find appointment error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// ==========================================
// UPDATE OPERATION
// ==========================================
const updateAppointment = async (req, res) => {
  try {
    const { id } = req.params;

    const { student_id, staff_id, appointment_date, appointment_time, purpose, status, remarks } = req.body;

    const result = await appointmentsService.updateAppointment(id, {
      student_id,
      staff_id,
      appointment_date,
      appointment_time,
      purpose,
      status,
      remarks,
    });

    if (!result || result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Appointment not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Appointment updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update appointment error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// ==========================================
// DELETE OPERATION
// ==========================================
const deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await appointmentsService.deleteAppointment(id);

    if (!result || result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Appointment not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Appointment deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete appointment error:", error);

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
  createAppointment,
  findAllAppointments,
  findAppointmentById,
  findAppointmentsByStudentId,
  findAppointmentsByStaffId,
  findAppointment,
  updateAppointment,
  deleteAppointment,
};
