import { convertTailwindToStyle } from "./tailwindToInline";

export const generateHTML = (components) => {
  const traverse = (node) => {
    if (!node) return "";

    const { type, props, children } = node;

    const inlineStyleFromClass = convertTailwindToStyle(props?.className);
    const inlineStyleFromStyle = props?.style
      ? Object.entries(props.style)
          .map(([k, v]) => `${k}:${v}`)
          .join(";")
      : "";

    const combinedStyle = [inlineStyleFromClass, inlineStyleFromStyle]
      .filter(Boolean)
      .join("; ");

    const styleAttr = combinedStyle ? `style="${combinedStyle}"` : "";

    const content = props?.children || "";
    const nested = children?.map(traverse).join("") || "";

    return `<${type} ${styleAttr}>${content}${nested}</${type}>`;
  };

  return components.map(traverse).join("\n");
};

export const buildHTMLFile = (bodyContent) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exported UI</title>
    <link href="style.css" rel="stylesheet">
  </head>
  <body>
  ${bodyContent}
  </body>
  </html>
  `;
};
