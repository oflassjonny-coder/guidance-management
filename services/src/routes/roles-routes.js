const { Router } = require("express");

const authenticate = require("../middleware/authenticate.js");
const rolesController = require("../controller/roles-controller.js");

const router = Router();

router.use(authenticate);

// ✅ LGTM
router.get("/", rolesController.findAllRoles);
router.get("/:id", rolesController.findRoleById);
router.get("/name/:name", rolesController.findRoleByName);
router.post("/", rolesController.createRole);
router.put("/:id", rolesController.updateRole);
router.delete("/:id", rolesController.deleteRole);

module.exports = router;
