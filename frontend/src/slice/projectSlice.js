import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [], //holds all of the user projects
  currentProject: null, //holds the entire project data from the backend
  componentTree: [], // the actual drag-drop layout in JSON strucutre
  selectedComponentId: null, //id of currently selected components for editing props
  cssFramework: "tailwind", //defaults to tailwind
  loading: false, //for loading states during fetch/updates
  error: null, //to store fetch and update
  success: null, //success message for flag for ui feedback
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    //to update canvas when user drags/drops components
    setComponentTree: (state, action) => {
      state.componentTree = action.payload;
    },
    //to store the current project
    setCurrentProject: (state, action) => {
      state.currentProject = action.payload;
    },
    //to keep track of which components is selected
    selectedComponentId: (state, action) => {
      state.selectedComponentId = action.payload;
    },
    resetBuilder: (state) => {
      state.currentProject = null;
      state.componentTree = [];
      state.selectedComponentId = null;
      state.loading = false;
      state.error = null;
      state.success = null;
    },
    setProjectLoading: (state, action) => {
      state.loading = action.payload;
    },
    setProjectError: (state, action) => {
      state.error = action.payload;
    },
    setProjectSuccess: (state, action) => {
      state.success = action.payload;
    },
  },
});
export const {
  setComponentTree,
  selectedComponentId,
  resetBuilder,
  setCurrentProject,
  setProjectError,
  setProjectLoading,
  setProjectSuccess,
} = projectSlice.actions;
export default projectSlice.reducer;
