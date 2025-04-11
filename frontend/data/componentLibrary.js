export const componentLibrary = [
  {
    type: "button", //actual HTML element
    label: "Button", //display name for users
    defaultProps: {
      children: "Click Me",
      className: "relative px-4 py-2 bg-blue-600 text-white rounded m-2",
    },
  },
  {
    type: "p",
    label: "Text",
    defaultProps: {
      children: "Lorem ipsum dolor sit amet.",
      className: "relative text-base",
    },
  },
  {
    type: "div",
    label: "Div",
    defaultProps: {
      children: "Card Content",
      className: "relative p-4",
    },
  },
  {
    type: "h1",
    label: "Heading",
    defaultProps: { 
      children: "This is H1",
      className: "relative p-1",
    },
  },
];
