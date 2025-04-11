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
    setselectedComponentId: (state, action) => {
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
      state.currentProjectId = action.payload;
    },
    setComponentTreeForProject: (state, action) => {
      const { projectId, tree } = action.payload;
      state.componentTrees[projectId] = tree;
    },
    addComponentToProject: (state, action) => {
      const { component, projectId } = action.payload; // Extract the component and its associated project ID from the dispatched action

      // Create a shallow copy of the current componentTrees state to avoid direct mutation
      const newComponentTrees = { ...state.componentTrees };

      // If there's no entry for this project yet, initialize it as an empty array
      if (!newComponentTrees[projectId]) {
        newComponentTrees[projectId] = [];
      }

      // Add the new component to the component tree array for this specific project
      newComponentTrees[projectId] = [
        ...newComponentTrees[projectId],
        component,
      ];

      // Return a new state object with the updated componentTrees and set the currentProjectId
      return {
        ...state,
        componentTrees: newComponentTrees,
        currentProjectId: projectId, // useful for keeping track of which project is currently being edited
      };
    },
    moveComponent: (state, action) => {
      const { projectId, id, position } = action.payload;
      const components = state.componentTrees[projectId];

      const index = components.findIndex((comp) => comp.id === id);
      if (index !== -1) {
        components[index].position = position;
      }
    },
  },
});
export const {
  setComponentTree,
  setselectedComponentId,
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
  moveComponent,
} = projectSlice.actions;
export default projectSlice.reducer;
