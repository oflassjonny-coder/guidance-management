const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const db = require("./config/database.js");
const app = express();
const authRoutes = require("./routes/auth-routes.js");
const accountsRoutes = require("./routes/accounts-routes.js");
const appointmentRoutes = require("./routes/appointment-routes.js");
const caserecordsRoutes = require("./routes/case-records-routes.js");
const gradenstrandsRoutes = require("./routes/grade_n_strand-routes.js");
const gradesectionRoutes = require("./routes/grade_sections-routes.js");
const guidanceconcernsRoutes = require("./routes/guidance_concerns-routes.js");
const guidancereportRoutes = require("./routes/guidance_report-routes.js");
const guidancesessionRoutes = require("./routes/guidance_session-routes.js");
const rolesRoutes = require("./routes/roles-routes.js");
const schoolyearsRoutes = require("./routes/school_year-routes.js");
const staffRoutes = require("./routes/staff-routes.js");
const studentsRoutes = require("./routes/students-routes.js");

const PROJECT_ROOT = path.join(__dirname, "../..");

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static(PROJECT_ROOT));

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    service: "backend",
    status: "online",
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(PROJECT_ROOT, "index.html"));
});

app.get("/api/health/db", async (req, res) => {
  try {
    const [result] = await db.query("SELECT 1 AS connected");

    res.status(StatusCodes.OK).json({
      success: true,
      database: "online",
      result,
    });
  } catch (error) {
    console.error("Database error:", error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      database: "offline",
      error: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
});

app.use("/api", authRoutes);
app.use("/api/accounts", accountsRoutes);
app.use("/api/appointment", appointmentRoutes);
app.use("/api/case_records", caserecordsRoutes);
app.use("/api/grade_n_strand", gradenstrandsRoutes);
app.use("/api/grade_sections", gradesectionRoutes);
app.use("/api/guidance_concerns", guidanceconcernsRoutes);
app.use("/api/guidance_report", guidancereportRoutes);
app.use("/api/guidance_session", guidancesessionRoutes);
app.use("/api/roles", rolesRoutes);
app.use("/api/school_years", schoolyearsRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/students", studentsRoutes);

module.exports = app;
