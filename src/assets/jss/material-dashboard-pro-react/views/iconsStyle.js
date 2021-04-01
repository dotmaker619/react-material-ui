import { boxShadow } from "assets/jss/material-dashboard-pro-react.js";

const iconsStyle = {
  iframe: {
    width: "calc(100vw - 100px)",
    height: "calc(100vh - 150px)",
    position: 'absolute',
    top: -10,
    left: -40,
    border: "0",
    ...boxShadow
  },
  iframeContainer: {
    margin: "0 -20px 0"
  },
};

export default iconsStyle;
