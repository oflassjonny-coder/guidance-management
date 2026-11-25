const { Router } = require("express");

const authenticate = require("../middleware/authenticate.js");
const caserecordsController = require("../controller/case-records-controller.js");

const router = Router();

router.use(authenticate);

// ✅ LGTM
router.get("/", caserecordsController.findAllCaseRecords);
router.get("/id", caserecordsController.findCaseRecordById);
router.get("student/:studentId", caserecordsController.findCaseRecordsByStudentId);
router.get("/concern/:concernId", caserecordsController.findCaseRecordsByConcernId);
router.get("/open/:openedBy", caserecordsController.findCaseRecordsByOpenedBy);
router.get("/status/:status", caserecordsController.findCaseRecordsByStatus);
router.get("/priority/:priority", caserecordsController.findCaseRecordsByPriority);
router.post("/", caserecordsController.createCaseRecord);
router.put("/:id", caserecordsController.updateCaseRecord);
router.delete("/:id", caserecordsController.deleteCaseRecord);

module.exports = router;
