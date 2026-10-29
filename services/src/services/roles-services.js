// Import Database Connection and Query Definitions
const db = require("../config/database.js");

const {
  CREATE_ROLE,
  FIND_ALL_ROLES,
  FIND_ROLE_BY_ID,
  FIND_ROLE_BY_NAME,
  UPDATE_ROLE,
  DELETE_ROLE,
} = require("../database/queries/role-query.js");

// ==========================================
// CREATE OPERATION
// ==========================================
const createRole = async (name, description) => {
  if (!name || !description) {
    throw new Error("Required fields are missing.");
  }

  const [result] = await db.query(CREATE_ROLE, [name, description]);

  return result;
};

// ==========================================
// READ OPERATIONS
// ==========================================

// Get All Roles
const findAllRoles = async () => {
  const [rows] = await db.query(FIND_ALL_ROLES);
  return rows;
};

// Get Role by ID
const findRoleById = async (id) => {
  if (!id) {
    throw new Error("Role ID is required.");
  }

  const [rows] = await db.query(FIND_ROLE_BY_ID, [id]);

  return rows[0] || null;
};

// Get Role by Name
const findRoleByName = async (name) => {
  if (!name) {
    throw new Error("Role name is required.");
  }

  const [rows] = await db.query(FIND_ROLE_BY_NAME, [name]);

  return rows[0] || null;
};

// ==========================================
// UPDATE OPERATION
// ==========================================
const updateRole = async (id, data) => {
  if (!id) {
    throw new Error("Role ID is required.");
  }

  const [result] = await db.query(UPDATE_ROLE, [name, description, id]);

  return result;
};

// ==========================================
// DELETE OPERATION
// ==========================================
const deleteRole = async (id) => {
  if (!id) {
    throw new Error("Role ID is required.");
  }

  const [result] = await db.query(DELETE_ROLE, [id]);

  return result;
};

// ==========================================
// EXPORT ALL FUNCTIONS
// ==========================================
module.exports = {
  createRole,
  findAllRoles,
  findRoleById,
  findRoleByName,
  updateRole,
  deleteRole,
};
