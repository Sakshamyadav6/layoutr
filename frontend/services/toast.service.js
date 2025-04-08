import toast from "react-hot-toast";

const toastConfig = {
  position: "top-right",
  reverseOrder: false,
  duration: 5000,
  style: {
    background: "#f9fafb", // light gray
    color: "#111827", // nice dark text (Tailwind gray-900)
    fontSize: "1em",
    padding: "12px 16px",
    borderRadius: "24px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
  },
  success: {
    duration: 4000,
    style: {
      background: "#000",
    },
    iconTheme: {
      primary: "#10b981", // Tailwind emerald-500
      secondary: "#ffffff",
    },
  },
  error: {
    duration: 4000,
    iconTheme: {
      primary: "#ef4444", // Tailwind red-500
      secondary: "#ffffff",
    },
  },
  info: {
    duration: 4000,
    iconTheme: {
      primary: "#3b82f6", // Tailwind blue-500
      secondary: "#ffffff",
    },
  },
};

export const successToast = (message) => {
  toast.success(message, toastConfig);
};
export const errorToast = (message) => {
  toast.error(message, toastConfig);
};
export const infoToast = (message) => {
  toast.info(message, toastConfig);
};
