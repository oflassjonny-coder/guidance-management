const { Router } = require("express");

const authenticate = require("../middleware/authenticate.js");
const studentsController = require("../controller/students-controller.js");

const router = Router();

router.use(authenticate);

// ✅ LGTM
router.get("/", studentsController.findAllStudents);
router.get("/:id", studentsController.findStudentById);
router.get("/grade/:gradeSectionId", studentsController.findStudentsByGradeSectionId);
router.get("/account/:accountId", studentsController.findStudentByAccountId);
router.get("/lastname/:lastname", studentsController.findStudentsByLastname);
router.get("/name/:name", studentsController.findStudentsByName);
router.post("/", studentsController.createStudent);
router.put("/:id", studentsController.updateStudent);
router.delete("/:id", studentsController.deleteStudent);

module.exports = router;
