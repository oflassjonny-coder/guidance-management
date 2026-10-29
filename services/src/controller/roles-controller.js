const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const rolesService = require("../services/role-service.js");

// CREATE
const createRole = async (req, res) => {
  try {
    const { name, description } = req.body;

    const result = await rolesService.createRole(name, description);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Role created successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Create role error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ ALL
const findAllRoles = async (req, res) => {
  try {
    const result = await rolesService.findAllRoles();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Roles retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find all roles error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ BY ID
const findRoleById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await rolesService.findRoleById(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Role not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Role retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find role by ID error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ BY NAME
const findRoleByName = async (req, res) => {
  try {
    const { name } = req.params;
    const result = await rolesService.findRoleByName(name);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Role not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Role retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find role by name error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// UPDATE
const updateRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const result = await rolesService.updateRole(id, {
      name,
      description,
    });

    if (!result || result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Role not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Role updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update role error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// DELETE
const deleteRole = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await rolesService.deleteRole(id);

    if (!result || result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Role not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Role deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete role error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

module.exports = {
  createRole,
  findAllRoles,
  findRoleById,
  findRoleByName,
  updateRole,
  deleteRole,
};
