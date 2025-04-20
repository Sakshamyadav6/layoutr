export const tailwindToInlineMap = {
  // Spacing
  "p-1": { padding: "0.25rem" },
  "p-2": { padding: "0.5rem" },
  "p-4": { padding: "1rem" },
  "pt-2": { paddingTop: "0.5rem" },
  "px-4": { paddingLeft: "1rem", paddingRight: "1rem" },

  "m-2": { margin: "0.5rem" },
  "mt-4": { marginTop: "1rem" },
  "mx-auto": { marginLeft: "auto", marginRight: "auto" },

  // Sizing
  "w-full": { width: "100%" },
  "h-full": { height: "100%" },
  "w-1/2": { width: "50%" },

  // Text
  "text-center": { textAlign: "center" },
  "text-left": { textAlign: "left" },
  "text-right": { textAlign: "right" },
  "text-white": { color: "#ffffff" },
  "text-black": { color: "#000000" },
  "text-xl": { fontSize: "1.25rem" },
  "font-bold": { fontWeight: "700" },

  // Backgrounds
  "bg-blue-600": { backgroundColor: "#3b82f6" },
  "bg-red-500": { backgroundColor: "#ef4444" },
  "bg-gray-800": { backgroundColor: "#1f2937" },

  // Borders
  border: { border: "1px solid #e5e7eb" },
  rounded: { borderRadius: "0.25rem" },
  "rounded-full": { borderRadius: "9999px" },

  // Flex & Grid
  flex: { display: "flex" },
  "items-center": { alignItems: "center" },
  "justify-center": { justifyContent: "center" },

  // Utilities
  shadow: { boxShadow: "0 1px 3px rgba(0,0,0,0.1)" },
  hidden: { display: "none" },
};
const camelToKebabCase = (str) =>
  str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);

export const convertTailwindToStyle = (className = "") => {
  return className
    .split(" ")
    .map((cls) => {
      const styleObj = tailwindToInlineMap[cls];
      if (!styleObj) return "";
      return Object.entries(styleObj)
        .map(([key, value]) => `${camelToKebabCase(key)}:${value}`)
        .join(";");
    })
    .filter(Boolean)
    .join("; ");
};
