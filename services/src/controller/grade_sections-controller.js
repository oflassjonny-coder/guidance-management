const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const gradeSectionsService = require("../services/grade_sections-service.js");

// CREATE
const createGradeSection = async (req, res) => {
  try {
    const { school_year_id, grade_n_strand_id, adviser_staff_id, section_name, description } = req.body;

    const result = await gradeSectionsService.createGradeSection(
      school_year_id,
      grade_n_strand_id,
      adviser_staff_id,
      section_name,
      description,
    );

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Grade section created successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Create grade section error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ ALL
const findAllGradeSections = async (req, res) => {
  try {
    const result = await gradeSectionsService.findAllGradeSections();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Grade sections retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find all grade sections error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ BY ID
const findGradeSectionById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await gradeSectionsService.findGradeSectionById(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Grade section not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Grade section retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find grade section by ID error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ BY SCHOOL YEAR
const findGradeSectionsBySchoolYear = async (req, res) => {
  try {
    const { schoolYearId } = req.params;
    const result = await gradeSectionsService.findGradeSectionsBySchoolYear(schoolYearId);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Grade sections retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find grade sections by school year error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ BY GRADE AND STRAND
const findGradeSectionsByGradeNStrand = async (req, res) => {
  try {
    const { gradeNStrandId } = req.params;
    const result = await gradeSectionsService.findGradeSectionsByGradeNStrand(gradeNStrandId);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Grade sections retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find grade sections by grade and strand error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ BY ADVISER
const findGradeSectionsByAdviser = async (req, res) => {
  try {
    const { adviserStaffId } = req.params;
    const result = await gradeSectionsService.findGradeSectionsByAdviser(adviserStaffId);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Grade sections retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find grade sections by adviser error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// CHECK SPECIFIC GRADE SECTION
const findGradeSection = async (req, res) => {
  try {
    const { schoolYearId, gradeNStrandId, sectionName } = req.query;

    const result = await gradeSectionsService.findGradeSection(schoolYearId, gradeNStrandId, sectionName);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Grade section not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Grade section retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find specific grade section error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// UPDATE
const updateGradeSection = async (req, res) => {
  try {
    const { id } = req.params;
    const { school_year_id, grade_n_strand_id, adviser_staff_id, section_name, description } = req.body;

    const result = await gradeSectionsService.updateGradeSection(id, {
      school_year_id,
      grade_n_strand_id,
      adviser_staff_id,
      section_name,
      description,
    });

    if (!result || result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Grade section not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Grade section updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update grade section error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// DELETE
const deleteGradeSection = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await gradeSectionsService.deleteGradeSection(id);

    if (!result || result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Grade section not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Grade section deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete grade section error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

module.exports = {
  createGradeSection,
  findAllGradeSections,
  findGradeSectionById,
  findGradeSectionsBySchoolYear,
  findGradeSectionsByGradeNStrand,
  findGradeSectionsByAdviser,
  findGradeSection,
  updateGradeSection,
  deleteGradeSection,
};
