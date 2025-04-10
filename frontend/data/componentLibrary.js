export const componentLibrary = [
  {
    type: "button", //actual HTML element
    label: "Button", //display name for users
    defaultProps: {
      children: "Click Me",
      className: "px-4 py-2 bg-blue-600 text-white rounded",
    },
  },
  {
    type: "p",
    label: "Text",
    defaultProps: {
      children: "Lorem ipsum dolor sit amet.",
      className: "text-base",
    },
  },
  {
    type: "div",
    label: "Div",
    defaultProps: {
      children: "Card Content",
      className: "p-4",
    },
  },
  {
    type: "h1",
    label: "Heading",
    defaultProps: {
      children: "This is H1",
      className: "p-1",
    },
  },
];
