type Colors = {
  [key: string]: {
    [key: string]: string;
  };
};

export const colors: Colors = {
  primary: {
    100: "#eee7ff",
    200: "#d0bfff",
    300: "#a389f4",
    400: "#7e63e6",
    500: "#5d39b1",
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
