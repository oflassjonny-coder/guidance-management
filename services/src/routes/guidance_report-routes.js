const { Router } = require("express");

const authenticate = require("../middleware/authenticate.js");
const guidancereportController = require("../controller/guidance_report-controller.js");

const router = Router();

router.use(authenticate);

// ✅ LGTM
router.get("/", guidancereportController.findAllGuidanceReports);
router.get("/:id", guidancereportController.findGuidanceReportById);
router.get("/staff/:staffId", guidancereportController.findGuidanceReportsByStaffId);
router.get("/type/:reportType", guidancereportController.findGuidanceReportsByType);
router.post("/", guidancereportController.createGuidanceReport);
router.put("/:id", guidancereportController.updateGuidanceReport);
router.delete("/:id", guidancereportController.deleteGuidanceReport);

module.exports = router;
