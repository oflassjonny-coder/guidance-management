const { Router } = require("express");

const authenticate = require("../middleware/authenticate.js");
const guidanceSessionsController = require("../controller/guidance_sessions-controller.js");

const router = Router();

router.use(authenticate);

router.post("/", guidanceSessionsController.createGuidanceSession);
router.get("/", guidanceSessionsController.findAllGuidanceSessions);
router.get("/:id", guidanceSessionsController.findGuidanceSessionById);
router.get("/caseRecordId", guidanceSessionsController.findGuidanceSessionsByCaseRecordId);
router.get("/staffId", guidanceSessionsController.findGuidanceSessionsByStaffId);
router.get("/status", guidanceSessionsController.findGuidanceSessionsByStatus);
router.get("/sessionType", guidanceSessionsController.findGuidanceSessionsByType);
router.put("/:id", guidanceSessionsController.updateGuidanceSession);
router.delete("/:id", guidanceSessionsController.deleteGuidanceSession);

module.exports = router;
