const express = require("express");
const {
  createProject,
  getProject,
  getProjectById,
  editProjectById,
  deleteProjectById,
} = require("../controllers/projectController");
const protect = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/project", protect, createProject);
router.get("/project", protect, getProject);
router.get(`/project/:id`, protect, getProjectById);
router.put(`/project/:id`, protect, editProjectById);
router.delete(`/project/:id`, protect, deleteProjectById);
module.exports = router;
