import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [], //holds all of the user projects
  currentProject: null, //holds the entire project data from the backend
  currentProjectId: null, //helps for tree lookup
  componentTrees: {}, // the actual drag-drop layout in JSON strucutre include a lot of components
  selectedComponentId: null, //id of currently selected components for editing props
  cssFramework: "tailwind", //defaults to tailwind
  loading: false, //for loading states during fetch/updates
  error: null, //to store fetch and update
  success: null, //success message for flag for ui feedback
  mode: "auth", //for builder page whether its logged in user or guest
  draftTree: [], //store components locally for guest users
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    //to update canvas when user drags/drops components
    setComponentTree: (state, action) => {
      state.componentTrees = action.payload;
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
      // state.componentTrees = {};
      state.selectedComponentId = null;
      state.loading = false;
      state.error = null;
      state.success = null;
    },
    setBuilderMode: (state, action) => {
      state.mode = action.payload; //auth or guest
    },
    setDraftTree: (state, action) => {
      state.draftTree = action.payload;
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
    setCurrentProjectId: (state, action) => {
      state.cureentProjectId = action.payload;
    },
    setComponentTreeForProject: (state, action) => {
      const { projectId, tree } = action.payload;
      state.componentTrees[projectId] = tree;
    },
    addComponentToProject: (state, action) => {
      const { projectId, component } = action.payload;
      const current = state.componentTrees[projectId] || [];
      state.componentTrees[projectId] = [...current, component];
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
  setBuilderMode,
  setDraftTree,
  setCurrentProjectId,
  setComponentTreeForProject,
  addComponentToProject,
} = projectSlice.actions;
export default projectSlice.reducer;
