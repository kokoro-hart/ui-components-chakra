type Colors = {
  [key: string]: {
    [key: string]: string;
  };
};

export const colors: Colors = {
  primary: {
    100: "#e6f7ff",
    200: "#bae7ff",
    300: "#55acee",
    400: "#1890ff",
    500: "#096dd9",
    600: "#0050b3",
    700: "#003a8c",
  },
  text: {
    100: "#000d257a",
    200: "#788792",
    300: "#363c42",
  },
  border: {
    100: "#5c93bb2b",
    200: "#d4dbdf",
  },
  background: {
    100: "#fff",
    200: "#f0f5f9",
    // 300: "linear-gradient(-60deg,#fbf6ff,#eff8ff)",
    300: "#EDF2F7",
  },
};
