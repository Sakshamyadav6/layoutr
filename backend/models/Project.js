const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a Project name"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    description: {
      type: String,
      // minLength: [10, "Description should be at least 10 characters long"],
    },
    components: {
      type: Array,
      default: [],
    },
    cssFramework: {
      type: String,
      default: "tailwind",
    },
    thumbnail: {
      type: String,
    },
  },
  {
    timestamps: true, //adds createdAt and updatedAt
  }
);

module.exports = mongoose.model("Project", projectSchema);
