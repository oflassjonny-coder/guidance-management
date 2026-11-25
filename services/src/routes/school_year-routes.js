const { Router } = require("express");

const authenticate = require("../middleware/authenticate.js");
const schoolYearController = require("../controller/school_years-controller.js");

const router = Router();

router.use(authenticate);

// ✅ LGTM
router.get("/", schoolYearController.findAllSchoolYears);
router.get("/:id", schoolYearController.findSchoolYearById);
router.get("/year/:schoolYear", schoolYearController.findSchoolYearByYear);
router.post("/", schoolYearController.createSchoolYear);
router.put("/:id", schoolYearController.updateSchoolYear);
router.delete("/:id", schoolYearController.deleteSchoolYear);

module.exports = router;
