const { Router } = require("express");

const authenticate = require("../middleware/authenticate.js");
const gradeSectionController = require("../controller/grade_sections-controller.js");

const router = Router();

router.use(authenticate);

// ✅ LGTM
router.get("/", gradeSectionController.findAllGradeSections);
router.get("/id", gradeSectionController.findGradeSectionById);
router.get("/year/:schoolYearId", gradeSectionController.findGradeSectionsBySchoolYear);
router.get("/grade/:gradeNStrandId", gradeSectionController.findGradeSectionsByGradeNStrand);
router.get("/adviser/:adviserStaffId", gradeSectionController.findGradeSectionsByAdviser);
// Missing findGradeSection
router.post("/", gradeSectionController.createGradeSection);
router.put("/:id", gradeSectionController.updateGradeSection);
router.delete("/:id", gradeSectionController.deleteGradeSection);

module.exports = router;
