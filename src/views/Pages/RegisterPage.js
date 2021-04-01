import React, {useContext, useState, useEffect} from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { connect } from "react-redux";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import MailOutline from "@material-ui/icons/MailOutline";
import AddAlert from "@material-ui/icons/AddAlert";
import Snackbar from "components/Snackbar/Snackbar.js";
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
// import LockOutline from "@material-ui/icons/LockOutline";
import Check from "@material-ui/icons/Check";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardText from "components/Card/CardText.js";
import CardIcon from "components/Card/CardIcon.js";
import Accordion from "components/Accordion/Accordion.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-pro-react/views/registerPageStyle";

import * as authAction from "../../redux/actions/auth";
import * as authService from '../../services/authService';
import * as storageService from '../../services/storageService';
import {Text, LanguageContext} from 'utils/Language';
import cities from 'utils/cities.json';

const useStyles = makeStyles(styles);

const RegisterPage = (props) => {
  const {dictionary} = useContext(LanguageContext);

  const [registerEmail, setregisterEmail] = React.useState("");
  const [registerEmailState, setregisterEmailState] = React.useState("");
  const [registerPassword, setregisterPassword] = React.useState("");
  const [registerPasswordState, setregisterPasswordState] = React.useState("");
  const [registerConfirmPassword, setregisterConfirmPassword] = React.useState("");
  const [registerConfirmPasswordState, setregisterConfirmPasswordState] = React.useState("");
  const [registerName, setregisterName] = React.useState("");
  const [registerNameState, setregisterNameState] = React.useState("");
  const [registerLastName, setregisterLastName] = React.useState("");
  const [registerLastNameState, setregisterLastNameState] = React.useState("");
  const [registerSurName, setregisterSurName] = React.useState("");
  const [registerSurNameState, setregisterSurNameState] = React.useState("");
  const [registerPhone, setregisterPhone] = React.useState("");
  const [registerPhoneState, setregisterPhoneState] = React.useState("");
  const [registerAddress, setregisterAddress] = React.useState("");
  const [registerAddressState, setregisterAddressState] = React.useState("");
  const [registerCity, setregisterCity] = React.useState("");
  const [registerCityState, setregisterCityState] = React.useState("");
  const [registerCheckbox, setregisterCheckbox] = React.useState(false);
  const [registerCheckboxState, setregisterCheckboxState] = React.useState("");
  const [simpleSelect, setSimpleSelect] = React.useState("");

  const [registerName2, setRegisterName2] = React.useState("");
  const [registerName2State, setRegisterName2State] = React.useState("");
  const [registerType, setRegisterType] = React.useState("");
  const [registerTypeState, setRegisterTypeState] = React.useState("");
  const [registerBank, setRegisterBank] = React.useState("");
  const [registerBankState, setRegisterBankState] = React.useState("");
  const [registerINN, setRegisterINN] = React.useState("");
  const [registerINNState, setRegisterINNState] = React.useState("");
  const [br, setBR] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
   if(!props.registerDetail){
    setRegisterName2State("");
    setRegisterTypeState("");
    setRegisterBankState("");
    setRegisterINNState("");
   }
  }, [props.registerDetail])
  const handleSimple = event => {
    setSimpleSelect(event.target.value);
  };
  const verifyEmail = value => {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  };
  // function that verifies if a string has a given length or not
  const verifyLength = (value, length) => {
    if (value.length >= length) {
      return true;
    }
    return false;
  };
  // function that verifies if value contains only numbers
  const verifyNumber = value => {
    var numberRex = new RegExp("^[0-9]+$");
    if (numberRex.test(value)) {
      return true;
    }
    return false;
  };

  const showNotification = () => {
    if (!br) {
      setBR(true);
      setTimeout(function() {
        setBR(false);
      }, 6000);
    }
  };
  const registerClick = ({login}) => {
    if (registerEmailState === "") {
      setregisterEmailState("error");
    }
    if (registerPasswordState === "") {
      setregisterPasswordState("error");
    }
    if (registerConfirmPasswordState === "") {
      setregisterConfirmPasswordState("error");
    }
    if(registerPasswordState !== registerConfirmPasswordState) {
      setregisterPasswordState("error");
      setregisterConfirmPasswordState("error");
    }
    if (registerNameState === "") {
      setregisterNameState("error");
    }
    if (registerLastNameState === "") {
      setregisterLastNameState("error");
    }
    if (registerSurNameState === "") {
      setregisterSurNameState("error");
    }
    if (registerPhoneState === "") {
      setregisterPhoneState("error");
    }
    if (registerAddressState === "") {
      setregisterAddressState("error");
    }
    if (registerCityState === "") {
      setregisterCityState("error");
    }
    if (props.registerDetail && registerName2 === "") {
      setRegisterName2State("error");
    }
    if (props.registerDetail && registerTypeState === "") {
      setRegisterTypeState("error");
    }
    if (props.registerDetail && registerBankState === "") {
      setRegisterBankState("error");
    }
    if (props.registerDetail && registerINNState === "") {
      setRegisterINNState("error");
    }
    if(registerPasswordState === registerConfirmPasswordState && registerEmailState !== "" && registerPasswordState !== "" && registerConfirmPasswordState !== '' && registerCityState !== "" && registerNameState !== "" && registerLastNameState !== "" && registerSurNameState !== "" && registerPhoneState !== "" && registerAddressState !== "" && registerCityState !== "" ){
      if(props.registerDetail){
        if(registerName2 !== "" && registerTypeState !== "" && registerBankState !== "" && registerINNState !== ""){
          authService.signUp({
            login: registerEmail, 
            password: registerPassword, 
            name: registerName, 
            familyName: registerLastName, 
            middleName: registerSurName,
            phone: registerPhone, 
            address: registerAddress, 
            IP: '127.120.0.1',
            city: registerCity,
            isEntity:registerCheckbox, 
            entityName: 'ddd',
            entityType: '',
            entityType: registerType, 
            ITN: registerINN, 
            currentAccount: registerBank,
            BIC: '',
            PSRNSP: '',
            IEC: '' ,
          }).then(result => {
            if(result.status === 200){
              authService.logIn({login: registerEmail, password: registerPassword}).then(result => {
                if(!result) {
                        console.log('error notificato');
                } else if(result.data.status === 'ok'){
                  props.login(result.data.user)
                  storageService.setStorage('token', result.data.token);
                  storageService.setStorage('user', result.data.user);
                  props.history.push("/admin/dashboard");
                }
              })
            } else if (result.status === 422) {
              setMessage(result.data.message[0].message);
              showNotification();
            }
          })
        }
      } else{
        authService.signUp({
          login: registerEmail, 
          password: registerPassword, 
          name: registerName, 
          familyName: registerLastName, 
          middleName: registerSurName,
          phone: registerPhone, 
          address: registerAddress, 
          IP: '127.120.0.1',
          city: registerCity,
          isEntity:registerCheckbox, 
          entityName: 'ddd',
          entityType: '',
          entityType: registerType, 
          ITN: registerINN, 
          currentAccount: registerBank,
          BIC: '',
          PSRNSP: '',
          IEC: '' ,
        }).then(result => {
          if(result.status === 200){
            authService.logIn({login: registerEmail, password: registerPassword}).then(result => {
              if(!result) {
                      console.log('error notificato');
              } else if(result.data.status === 'ok'){
                props.login(result.data.user)
                storageService.setStorage('token', result.data.token);
                storageService.setStorage('user', result.data.user);
                props.history.push("/admin/dashboard");
              }
            })
          } else if (result.status === 422) {
            setMessage(result.data.message[0].message);
            showNotification();
          }
        })
      }
      
    }
  };
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={5}>
          <Card>
            <CardHeader color="rose" icon>
                    <CardIcon color="rose">
                      <MailOutline />
                    </CardIcon>
                    <h4 className={classes.cardIconTitle}>Register Forms</h4>
                  </CardHeader>
            <CardBody>
                    <form>
                      <CustomInput
                        success={registerEmailState === "success"}
                        error={registerEmailState === "error"}
                        labelText={dictionary.login + " *"} 
                        id="registeremail"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: event => {
                            if (verifyEmail(event.target.value)) {
                              setregisterEmailState("success");
                            } else {
                              setregisterEmailState("error");
                            }
                            setregisterEmail(event.target.value);
                          },
                          type: "email"
                        }}
                      />
                      <CustomInput
                        success={registerPasswordState === "success"}
                        error={registerPasswordState === "error"}
                        labelText={dictionary.password + " *"} 
                        id="registerpassword"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: event => {
                            if (verifyLength(event.target.value, 6)) {
                              setregisterPasswordState("success");
                            } else {
                              setregisterPasswordState("error");
                            }
                            setregisterPassword(event.target.value);
                          },
                          type: "password",
                          autoComplete: "off"
                        }}
                      />
                      <CustomInput
                        success={registerConfirmPasswordState === "success"}
                        error={registerConfirmPasswordState === "error"}
                        labelText={dictionary.confirmpassword + " *"} 
                        id="registerconfirmpassword"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: event => {
                            if (registerPassword === event.target.value) {
                              setregisterConfirmPasswordState("success");
                            } else {
                              setregisterConfirmPasswordState("error");
                            }
                            setregisterConfirmPassword(event.target.value);
                          },
                          type: "password",
                          autoComplete: "off"
                        }}
                      />
                      <CustomInput
                        success={registerNameState === "success"}
                        error={registerNameState === "error"}
                        labelText={dictionary.Name + " *"} 
                        id="registerename"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: event => {
                            if (event.target.value) {
                              setregisterNameState("success");
                            } else {
                              setregisterNameState("error");
                            }
                            setregisterName(event.target.value);
                          },
                          type: "text"
                        }}
                      />
                      <CustomInput
                        success={registerLastNameState === "success"}
                        error={registerLastNameState === "error"}
                        labelText={dictionary.surname + " *"} 
                        id="registerelastname"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: event => {
                            if (event.target.value) {
                              setregisterLastNameState("success");
                            } else {
                              setregisterLastNameState("error");
                            }
                            setregisterLastName(event.target.value);
                          },
                          type: "text"
                        }}
                      />
                      <CustomInput
                        success={registerSurNameState === "success"}
                        error={registerSurNameState === "error"}
                        labelText={dictionary.middlename + " *"} 
                        id="registeresurname"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: event => {
                            if (event.target.value) {
                              setregisterSurNameState("success");
                            } else {
                              setregisterSurNameState("error");
                            }
                            setregisterSurName(event.target.value);
                          },
                          type: "text"
                        }}
                      />
                      <CustomInput
                        success={registerPhoneState === "success"}
                        error={registerPhoneState === "error"}
                        labelText={dictionary.telephone + " *"} 
                        id="registerphonenumber"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: event => {
                            if (verifyNumber(event.target.value)) {
                              setregisterPhoneState("success");
                            } else {
                              setregisterPhoneState("error");
                            }
                            setregisterPhone(event.target.value);
                          },
                          type: "number"
                        }}
                      />
                      <CustomInput
                        success={registerAddressState === "success"}
                        error={registerAddressState === "error"}
                        labelText={dictionary.address + " *"} 
                        id="registeraddress"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: event => {
                            if (event.target.value) {
                              setregisterAddressState("success");
                            } else {
                              setregisterAddressState("error");
                            }
                            setregisterAddress(event.target.value);
                          },
                          type: "text"
                        }}
                      />
                      <FormControl
                        fullWidth
                        className={classes.selectFormControl}
                      >
                        <InputLabel
                          htmlFor="simple-select"
                          className={classes.selectLabel}
                        >
                          <Text tid="city" />
                        </InputLabel>
                        <Select
                          success={registerCityState === "success"}
                          error={registerCityState === "error"}
                          MenuProps={{
                            className: classes.selectMenu
                          }}
                          classes={{
                            select: classes.select
                          }}
                          value={simpleSelect}
                          onChange={handleSimple}
                          inputProps={{
                            onChange: event => {
                              if (event.target.value) {
                                setregisterCityState("success");
                              } else {
                                setregisterCityState("error");
                              }
                              setregisterCity(event.target.value);
                            },
                            name: "simpleSelect",
                            id: "simple-select"
                          }}
                        >
                          <MenuItem
                            disabled
                            classes={{
                              root: classes.selectMenuItem
                            }}
                          >
                            Choose City
                          </MenuItem>
                          {
                            cities.map((city, index) => {
                              return ( 
                                <MenuItem
                                  key={index}
                                  classes={{
                                    root: classes.selectMenuItem,
                                    selected: classes.selectMenuItemSelected
                                  }}
                                  value={index}
                                >
                                  {city.city}
                                </MenuItem>
                              )
                            })
                          } 
                        </Select>
                      </FormControl>
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={7}>
                            <Accordion
                              active={-1}
                              collapses={[
                                {
                                  title: <Text tid="legalEntity" />,
                                  content: (
                                    <form>
                                    <CustomInput
                                      success={registerName2State === "success"}
                                      error={registerName2State === "error"}
                                      labelText={dictionary.Name + " *"} 
                                      id="registerName2"
                                      formControlProps={{
                                        fullWidth: true
                                      }}
                                      inputProps={{
                                        onChange: event => {
                                          if (event.target.value) {
                                            setRegisterName2State("success");
                                          } else {
                                            setRegisterName2State("error");
                                          }
                                          setRegisterName2(event.target.value);
                                        },
                                        type: "text"
                                      }}
                                    />
                                    
                                    <FormControl
                                      fullWidth
                                      className={classes.selectFormControl}
                                    >
                                      <InputLabel
                                        htmlFor="simple-select"
                                        className={classes.selectLabel}
                                      >
                                        <Text tid="tpye" />
                                      </InputLabel>
                                      <Select
                                        success={registerTypeState === "success"}
                                        error={registerTypeState === "error"}
                                        MenuProps={{
                                          className: classes.selectMenu
                                        }}
                                        classes={{
                                          select: classes.select
                                        }}
                                        value={simpleSelect}
                                        onChange={handleSimple}
                                        inputProps={{
                                          onChange: event => {
                                            if (event.target.value) {
                                              setRegisterTypeState("success");
                                            } else {
                                              setRegisterTypeState("error");
                                            }
                                            setRegisterType(event.target.value);
                                          },
                                          name: "simpleSelect",
                                          id: "simple-select"
                                        }}
                                      >
                                        <MenuItem
                                          disabled
                                          classes={{
                                            root: classes.selectMenuItem
                                          }}
                                        >
                                          выберите тип
                                        </MenuItem>
                                        <MenuItem
                                          classes={{
                                            root: classes.selectMenuItem,
                                            selected: classes.selectMenuItemSelected
                                          }}
                                          value="ООО"
                                        >
                                          ООО
                                        </MenuItem>
                                        <MenuItem
                                          classes={{
                                            root: classes.selectMenuItem,
                                            selected: classes.selectMenuItemSelected
                                          }}
                                          value="ЗАО"
                                        >
                                          ЗАО
                                        </MenuItem>
                                        <MenuItem
                                          classes={{
                                            root: classes.selectMenuItem,
                                            selected: classes.selectMenuItemSelected
                                          }}
                                          value="ОАО"
                                        >
                                          ОАО
                                        </MenuItem>
                                        <MenuItem
                                          classes={{
                                            root: classes.selectMenuItem,
                                            selected: classes.selectMenuItemSelected
                                          }}
                                          value="ИП"
                                        >
                                          ИП
                                        </MenuItem>
                                      </Select>
                                    </FormControl>
                                    {registerType == "ООО" && <CustomInput
                                      success={registerBankState === "success"}
                                      error={registerBankState === "error"}
                                      labelText={"КПП *"} 
                                      id="changeBank"
                                      formControlProps={{
                                        fullWidth: true
                                      }}
                                      inputProps={{
                                        onChange: event => {
                                          if (event.target.value) {
                                            setRegisterBankState("success");
                                          } else {
                                            setRegisterBankState("error");
                                          }
                                          setRegisterBank(event.target.value);
                                        },
                                        type: "text"
                                      }}
                                    />}
                                    {registerType == "ИП" && <CustomInput
                                      success={registerBankState === "success"}
                                      error={registerBankState === "error"}
                                      labelText={"ОГРН *"} 
                                      id="changeBank"
                                      formControlProps={{
                                        fullWidth: true
                                      }}
                                      inputProps={{
                                        onChange: event => {
                                          if (event.target.value) {
                                            setRegisterBankState("success");
                                          } else {
                                            setRegisterBankState("error");
                                          }
                                          setRegisterBank(event.target.value);
                                        },
                                        type: "text"
                                      }}
                                    />}
                                    {registerType == "ЗАО" && <CustomInput
                                      success={registerBankState === "success"}
                                      error={registerBankState === "error"}
                                      labelText={"ЗАО *"} 
                                      id="changeBank"
                                      formControlProps={{
                                        fullWidth: true
                                      }}
                                      inputProps={{
                                        onChange: event => {
                                          if (event.target.value) {
                                            setRegisterBankState("success");
                                          } else {
                                            setRegisterBankState("error");
                                          }
                                          setRegisterBank(event.target.value);
                                        },
                                        type: "text"
                                      }}
                                    />}
                                    {registerType == "ОАО" && <CustomInput
                                      success={registerBankState === "success"}
                                      error={registerBankState === "error"}
                                      labelText={"ОАО *"} 
                                      id="changeBank"
                                      formControlProps={{
                                        fullWidth: true
                                      }}
                                      inputProps={{
                                        onChange: event => {
                                          if (event.target.value) {
                                            setRegisterBankState("success");
                                          } else {
                                            setRegisterBankState("error");
                                          }
                                          setRegisterBank(event.target.value);
                                        },
                                        type: "text"
                                      }}
                                    />}                                    
                                    <CustomInput
                                      success={registerBankState === "success"}
                                      error={registerBankState === "error"}
                                      labelText={dictionary.bank + " *"} 
                                      id="registerBank"
                                      formControlProps={{
                                        fullWidth: true
                                      }}
                                      inputProps={{
                                        onChange: event => {
                                          if (event.target.value) {
                                            setRegisterBankState("success");
                                          } else {
                                            setRegisterBankState("error");
                                          }
                                          setRegisterBank(event.target.value);
                                        },
                                        type: "text"
                                      }}
                                    />
                                    <CustomInput
                                      success={registerINNState === "success"}
                                      error={registerINNState === "error"}
                                      labelText={dictionary.inn + " *"} 
                                      id="registerINN"
                                      formControlProps={{
                                        fullWidth: true
                                      }}
                                      inputProps={{
                                        onChange: event => {
                                          if (event.target.value) {
                                            setRegisterINNState("success");
                                          } else {
                                            setRegisterINNState("error");
                                          }
                                          setRegisterINN(event.target.value);
                                        },
                                        type: "text"
                                      }}
                                    />
                                    </form>
                                  )
                                }
                              ]}
                            />
                          </GridItem>
                        </GridContainer>
                      <div className={classes.left}>
                      <Button
                        color="rose"
                        onClick={registerClick}
                        className={classes.registerButton}
                      >
                        <Text tid="confirm" />
                      </Button>
                      <Button
                        color="rose"
                        className={classes.registerButton}
                      >
                        <a href="/auth/login-page" className={classes.white}>
                        <Text tid="gotoauthorisation" />
                        </a> 
                      </Button>
                      </div>
                    </form>
                  </CardBody>
          </Card>
          <Snackbar
            place="br"
            color="danger"
            icon={AddAlert}
            message={message}
            open={br}
            closeNotification={() => setBR(false)}
            close
              />
        </GridItem>
      </GridContainer>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  ...state,
  registerDetail: state.main.registerDetail
  
})

const mapDispatchToProps = () => ({
  login: authAction.Signin
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)
