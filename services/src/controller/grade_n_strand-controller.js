const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const gradeNStrandsService = require("../services/grade_n_strands-service.js");

// ==========================================
// CREATE OPERATION
// ==========================================
const createGradeNStrand = async (req, res) => {
  try {
    const { grade_level, strand, description } = req.body;

    const result = await gradeNStrandsService.createGradeNStrand(grade_level, strand, description);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Grade level and strand created successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Create grade and strand error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// ==========================================
// READ OPERATIONS
// ==========================================

// Get All Grade Levels and Strands
const findAllGradeNStrands = async (req, res) => {
  try {
    const result = await gradeNStrandsService.findAllGradeNStrands();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Grade levels and strands retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find all grade levels and strands error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// Get Grade Level and Strand by ID
const findGradeNStrandById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await gradeNStrandsService.findGradeNStrandById(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Grade level and strand not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Grade level and strand retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find grade level and strand by ID error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// Get by Grade Level and Strand
const findGradeNStrand = async (req, res) => {
  try {
    const { gradeLevel, strand } = req.query;

    const result = await gradeNStrandsService.findGradeNStrand(gradeLevel, strand);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Grade level and strand not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Grade level and strand retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find grade level and strand error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// ==========================================
// UPDATE OPERATION
// ==========================================
const updateGradeNStrand = async (req, res) => {
  try {
    const { id } = req.params;
    const { grade_level, strand, description } = req.body;

    const result = await gradeNStrandsService.updateGradeNStrand(id, {
      grade_level,
      strand,
      description,
    });

    if (!result || result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Grade level and strand not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Grade level and strand updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update grade level and strand error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// ==========================================
// DELETE OPERATION
// ==========================================
const deleteGradeNStrand = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await gradeNStrandsService.deleteGradeNStrand(id);

    if (!result || result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Grade level and strand not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Grade level and strand deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete grade level and strand error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// ==========================================
// EXPORT
// ==========================================
module.exports = {
  createGradeNStrand,
  findAllGradeNStrands,
  findGradeNStrandById,
  findGradeNStrand,
  updateGradeNStrand,
  deleteGradeNStrand,
};
