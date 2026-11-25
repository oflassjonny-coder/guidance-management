const { Router } = require("express");

const authenticate = require("../middleware/authenticate.js");
const appointsmentController = require("../controller/appoinments-controller.js");

const router = Router();

router.use(authenticate);

// ✅ LGTM
router.get("/", appointsmentController.findAllAppointments);
router.get("/:id", appointsmentController.findAppointmentById);
router.get("/student/:studentId", appointsmentController.findAppointmentsByStudentId);
router.get("/staff/:staffId", appointsmentController.findAppointmentsByStaffId);
router.post("/", appointsmentController.createAppointment);
router.put("/:id", appointsmentController.updateAppointment);
router.delete("/:id", appointsmentController.deleteAppointment);

module.exports = router;
