const { Router } = require("express");

const authenticate = require("../middleware/authenticate.js");
const guidanceconcernsController = require("../controller/guidance_concerns-controller.js");

const router = Router();

router.use(authenticate);

// ✅ LGTM
router.get("/", guidanceconcernsController.findAllGuidanceConcerns);
router.get("/:id", guidanceconcernsController.findGuidanceConcernById);
router.get("/concern/:name", guidanceconcernsController.findGuidanceConcernByName);
router.get("/active", guidanceconcernsController.findActiveGuidanceConcerns);
router.get("/inactive/", guidanceconcernsController.findInactiveGuidanceConcerns);
router.post("/", guidanceconcernsController.createGuidanceConcern);
router.put("/:id", guidanceconcernsController.updateGuidanceConcern);
router.delete("/:id", guidanceconcernsController.deleteGuidanceConcern);

module.exports = router;
