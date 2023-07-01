type Colors = {
  [key: string]: {
    [key: string]: string;
  };
};

export const colors: Colors = {
  primary: {
    100: "#bee3f8",
    200: "#90cdf4",
    300: "#63b3ed",
    400: "#4299e1",
    500: "#3182ce",
    600: "#2b6cb0",
  },
  text: {
    100: "#000d257a",
    200: "#788792",
    300: "#383838",
  },
  border: {
    100: "#5c93bb2b",
    200: "#d4dbdf",
  },
  background: {
    100: "#fff",
    200: "#f0f5f9",
    300: "linear-gradient(-60deg,#fbf6ff,#eff8ff)",
  },
};
