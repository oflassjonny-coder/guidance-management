const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const guidanceConcernsService = require("../services/guidance_concerns-service.js");

// CREATE
const createGuidanceConcern = async (req, res) => {
  try {
    const { name, description, is_active } = req.body;

    const result = await guidanceConcernsService.createGuidanceConcern(name, description, is_active);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Guidance concern created successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Create guidance concern error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ ALL
const findAllGuidanceConcerns = async (req, res) => {
  try {
    const result = await guidanceConcernsService.findAllGuidanceConcerns();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Guidance concerns retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find all guidance concerns error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ BY ID
const findGuidanceConcernById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await guidanceConcernsService.findGuidanceConcernById(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Guidance concern not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Guidance concern retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find guidance concern by ID error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ BY NAME
const findGuidanceConcernByName = async (req, res) => {
  try {
    const { name } = req.params;
    const result = await guidanceConcernsService.findGuidanceConcernByName(name);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Guidance concern not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Guidance concern retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find guidance concern by name error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ ACTIVE CONCERNS
const findActiveGuidanceConcerns = async (req, res) => {
  try {
    const result = await guidanceConcernsService.findActiveGuidanceConcerns();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Active guidance concerns retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find active guidance concerns error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ INACTIVE CONCERNS
const findInactiveGuidanceConcerns = async (req, res) => {
  try {
    const result = await guidanceConcernsService.findInactiveGuidanceConcerns();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Inactive guidance concerns retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find inactive guidance concerns error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// UPDATE
const updateGuidanceConcern = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, is_active } = req.body;

    const result = await guidanceConcernsService.updateGuidanceConcern(id, {
      name,
      description,
      is_active,
    });

    if (!result || result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Guidance concern not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Guidance concern updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update guidance concern error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// DELETE
const deleteGuidanceConcern = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await guidanceConcernsService.deleteGuidanceConcern(id);

    if (!result || result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Guidance concern not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Guidance concern deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete guidance concern error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

module.exports = {
  createGuidanceConcern,
  findAllGuidanceConcerns,
  findGuidanceConcernById,
  findGuidanceConcernByName,
  findActiveGuidanceConcerns,
  findInactiveGuidanceConcerns,
  updateGuidanceConcern,
  deleteGuidanceConcern,
};
