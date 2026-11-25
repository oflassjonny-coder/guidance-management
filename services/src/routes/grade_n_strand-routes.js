const { Router } = require("express");

const authenticate = require("../middleware/authenticate.js");
const gradeNStrandController = require("../controller/grade_n_strand-controller.js");

const router = Router();

router.use(authenticate);

// ✅ LGTM
router.get("/", gradeNStrandController.findAllGradeNStrands);
router.get("/:id", gradeNStrandController.findGradeNStrandById);
router.get("/grade/:gradeLevel/strand/:strand", gradeNStrandController.findGradeNStrand);
router.post("/", gradeNStrandController.createGradeNStrand);
router.put("/:id", gradeNStrandController.updateGradeNStrand);
router.delete("/:id", gradeNStrandController.deleteGradeNStrand);

module.exports = router;
