const Project = require("../models/Project");

const createProject = async (req, res) => {
  //get data from users (form)
  const { name, description, cssFramework } = req.body;

  // Get the user's ID from the protect middleware (decoded from token)
  const userId = req.user?._id;

  // Check if a project with the same name already exists (global check)
  const isName = await Project.findOne({ name });
  if (isName) {
    res
      .status(400)
      .json({ message: "Project already exists, use another name" });
  }

  //checks if every field are available or not
  if (!name || !description || !cssFramework) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Create and save the new project in MongoDB
    const createdProject = await Project.create({
      name,
      user: userId, //save the current user's id in the project
      description,
      cssFramework,
    });
    //return a success response
    res.status(201).json({
      message: "Project created successfully 🚀",
      project: {
        id: createdProject._id,
        name: createdProject.name,
        user: createdProject.user,
        description: createdProject.description,
        cssFramework: createdProject.cssFramework,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
const getProject = async (req, res) => {
  try {
    // Find all projects in MongoDB where user matches logged-in user
    const project = await Project.find({
      user: req.user._id, // Get the user's MongoDB _id from the verified token (set by protect middleware) and store it in the project as a reference
    });
    // Return the list of projects

    res.status(200).json({
      message: "Projects Fetched",
      project,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
const getProjectById = async (req, res) => {
  try {
    //get project data from project id
    const project = await Project.findById(req.params.id); // req.params.id gets the project ID from the URL (e.g., /api/projects/:id)
    //check if project exists
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    //check if logged-in user owns project or not
    if (project.user.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ message: "Unauthrized to access the project" });
    }
    //send response
    res.status(200).json({ message: "Product data fetched", project });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
const editProjectById = async (req, res) => {
  const data = req.body;
  try {
    const id = req.params.id;
    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    if (project.user.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ message: "Unauthrized to edit this project" });
    }
    const updatedProject = await Project.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    res
      .status(200)
      .json({ message: "Project Updated Sucessfully", updatedProject });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
const deleteProjectById = async (req, res) => {
  try {
    const id = req.params.id;
    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    if (project.user.toString() != req.user.id) {
      res.status(403).json({ message: "Unauthorized to delete project" });
    }

    const deleteProject = await Project.findByIdAndDelete(id);

    if (!deleteProject) {
      res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json({ message: "Project Deleted Sucessfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  createProject,
  getProject,
  getProjectById,
  editProjectById,
  deleteProjectById,
};
