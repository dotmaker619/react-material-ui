import {
  container,
  cardTitle,
  dangerColor,
  whiteColor,
  grayColor,
  successColor,
} from "assets/jss/material-dashboard-pro-react.js";
import modalStyle from "assets/jss/material-dashboard-pro-react/modalStyle.js";
import customCheckboxRadioSwitch from "assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.js";

const loginPageStyle = theme => ({
  ...customCheckboxRadioSwitch,
  container: {
    ...container,
    zIndex: "4",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "100px"
    }
  },
  cardTitle: {
    ...cardTitle,
    color: whiteColor
  },
  textCenter: {
    textAlign: "center"
  },
  justifyContentCenter: {
    justifyContent: "center !important"
  },
  forgot: {
    float: "right",
    marginTop: "13px",
  },
  customButtonClass: {
    "&,&:focus,&:hover": {
      color: whiteColor
    },
    marginLeft: "5px",
    marginRight: "5px"
  },
  white: {
    color: whiteColor,
    textDecoration: "none", 
  },
  confirmButton: {
    minHeight: "auto",
    minWidth: "auto",
    backgroundColor: grayColor[0],
    color: whiteColor,
    border: "none",
    borderRadius: "3px",
    position: "relative",
    padding: "12px 30px",
    margin: ".3125rem 1px",
    fontSize: "12px",
    fontWeight: "400",
    textTransform: "uppercase",
    letterSpacing: "0",
    willChange: "box-shadow, transform",
    transition:
      "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    lineHeight: "1.42857143",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
  },
  success: {
    backgroundColor: successColor[0],
  },
  inputAdornment: {
    marginRight: "18px"
  },
  inputAdornmentIcon: {
    color: grayColor[6]
  },
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)"
  },
  cardHeader: {
    marginBottom: "20px"
  },
  socialLine: {
    padding: "0.9375rem 0"
  },
  danger: {
    color: dangerColor[0] + "!important"
  },
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  },
  formCategory: {
    marginBottom: "0",
    color: grayColor[0],
    fontSize: "14px",
    padding: "10px 0 10px"
  },
  center: {
    textAlign: "center"
  },
  left: {
    textAlign: "left"
  },
  right: {
    textAlign: "right"
  },
  justifyContentCenter: {
    justifyContent: "center"
  },
  label: {
    float: "right"
  },
  registerButton: {
    float: "right"
  },
  modalSectionTitle: {
    marginTop: "30px"
  },
  ...modalStyle(theme),
});

export default loginPageStyle;
