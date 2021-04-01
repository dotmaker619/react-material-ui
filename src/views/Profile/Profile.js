import React, {useState, useEffect, useContext} from "react";
import {connect} from 'react-redux';
import SweetAlert from "react-bootstrap-sweetalert";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MailOutline from "@material-ui/icons/MailOutline";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import AddAlert from "@material-ui/icons/AddAlert";
import Info from "@material-ui/icons/Info";
import LocationOn from "@material-ui/icons/LocationOn";
import Gavel from "@material-ui/icons/Gavel";
import HelpOutline from "@material-ui/icons/HelpOutline";

// core components
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Check from "@material-ui/icons/Check";

import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Snackbar from "components/Snackbar/Snackbar.js";
import Accordion from "components/Accordion/Accordion.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardIcon from "components/Card/CardIcon.js";

import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";
import styles from "assets/jss/material-dashboard-pro-react/views/registerPageStyle";
import * as userService from 'services/userService';
import { Text, LanguageContext } from '../../utils/Language';
import * as mainAction from 'redux/actions/main';
import cities from 'utils/cities.json';

const useStyles = makeStyles(styles);

const Profile = ({id, MiniActive, user}) => {
  const {dictionary} = useContext(LanguageContext);

  const [changeEmail, setChangeEmail] = React.useState("");
  const [changeEmailState, setChangeEmailState] = React.useState("");
  const [changeName, setChangeName] = React.useState("");
  const [changeNameState, setChangeNameState] = React.useState("");
  const [changeLastName, setChangeLastName] = React.useState("");
  const [changeLastNameState, setChangeLastNameState] = React.useState("");
  const [changeSurName, setChangeSurName] = React.useState("");
  const [changeSurNameState, setChangeSurNameState] = React.useState("");
  const [changePhone, setChangePhone] = React.useState("");
  const [changePhoneState, setChangePhoneState] = React.useState("");
  const [changeAddress, setChangeAddress] = React.useState("");
  const [changeAddressState, setChangeAddressState] = React.useState("");
  const [changeCity, setChangeCity] = React.useState("");
  const [changeCityState, setChangeCityState] = React.useState("");
  const [simpleSelect, setSimpleSelect] = React.useState("");
  const [currentPassword, setCurrentPassword] = React.useState("");
  const [currentPasswordState, setCurrentPasswordState] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordState, setPasswordState] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [confirmPasswordState, setConfirmPasswordState] = React.useState("");

  const [changeName2, setChangeName2] = React.useState("");
  const [changeName2State, setChangeName2State] = React.useState("");
  const [changeType, setChangeType] = React.useState("");
  const [changeTypeState, setChangeTypeState] = React.useState("");
  const [changeBank, setChangeBank] = React.useState("");
  const [changeBankState, setChangeBankState] = React.useState("");
  const [changeINN, setChangeINN] = React.useState("");
  const [changeINNState, setChangeINNState] = React.useState("");
  const handleSimple = event => {
    setSimpleSelect(event.target.value);
  };
  const [alert, setAlert] = React.useState(null);

  useEffect(() => {
    MiniActive(false);
  //  userSevice.getUserById(id).then(res => {
  //    console.log(res);
  //    setChangeEmail(res.config.data.login)
  //    setChangeName(res.config.data.name)
  //    setChangeLastName(res.config.data.familyName)
  //    setChangeSurName(res.config.data.middleName)
  //    setChangePhone(res.config.data.phone)
  //    setChangeAddress(res.config.data.city)
  //    setChangeCity(res.config.data.region)
  //  })
  }, [])
  const successAlert = () => {
    setAlert(
      <SweetAlert
        success
        style={{ display: "block", marginTop: "-100px" }}
        title="Change Success!"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={classes.confirmButton + " " + classes.success}
      >
        Welcome to our site.
      </SweetAlert>
    );
  };
  const success2Alert = () => {
    setAlert(
      <SweetAlert
        success
        style={{ display: "block", marginTop: "-100px" }}
        title="Change Success!"
        onConfirm={() => hide2Alert()}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={classes.confirmButton + " " + classes.success}
      >
        You can use new information from now.
      </SweetAlert>
    );
  };
  const [tl, setTL] = React.useState(false);
  const [tc, setTC] = React.useState(false);
  const [tr, setTR] = React.useState(false);
  const [bl, setBL] = React.useState(false);
  const [bc, setBC] = React.useState(false);
  const [br, setBR] = React.useState(false);
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
  const changeClick = () => {
    if (changeEmailState === "") {
      setChangeEmailState("error");
    }
    if (changeNameState === "") {
      setChangeNameState("error");
    }
    if (changeLastNameState === "") {
      setChangeLastNameState("error");
    }
    if (changeSurNameState === "") {
      setChangeSurNameState("error");
    }
    if (changePhoneState === "") {
      setChangePhoneState("error");
    }
    if (changeAddressState === "") {
      setChangeAddressState("error");
    }
    if (changeCityState === "") {
      setChangeCityState("error");
    }
  
      if (changeName2 === "") {
        setChangeName2State("error");
      }
      if (changeTypeState === "") {
        setChangeTypeState("error");
      }
      if (changeBankState === "") {
        setChangeBankState("error");
      }
      if (changeINNState === "") {
        setChangeINNState("error");
      }
      if (changeEmail !== "" && changeName !== "" && changeLastName !== "" && changeSurName !== "" && changePhone !== "" && changeAddress !== "") {
        success2Alert();
        // userService.updateById([id], {
        //   login: changeEmail,
        //   name: changeName,
        //   familyName: changeLastName,
        //   middleName: changeSurName,
        //   phone: changePhone,
        //   city: changeCity,
        //   region: changeAddress,
        //   regionCode: '',
        //   role: '',
        //   isEntity: '',
        //   orders: ''

        // }).then(res => {
        //   console.log(res)
        // })
      }
  };
  const changePassClick = () => {
    if (currentPasswordState === "") {
      setCurrentPasswordState("error");
    }
    if (passwordState === "") {
      setPasswordState("error");
    }
    if (confirmPasswordState === "") {
      setConfirmPasswordState("error");
    }
    if (currentPassword !== "Navin[123]" && currentPassword !== "" && password !== "" && confirmPassword !== "") {
      showNotification('br');
    }
    if (currentPassword === "Navin[123]") {
      successAlert();
    }
  }
  const showNotification = place => {
    switch (place) {
      case "tl":
        if (!tl) {
          setTL(true);
          setTimeout(function() {
            setTL(false);
          }, 6000);
        }
        break;
      case "tc":
        if (!tc) {
          setTC(true);
          setTimeout(function() {
            setTC(false);
          }, 6000);
        }
        break;
      case "tr":
        if (!tr) {
          setTR(true);
          setTimeout(function() {
            setTR(false);
          }, 6000);
        }
        break;
      case "bl":
        if (!bl) {
          setBL(true);
          setTimeout(function() {
            setBL(false);
          }, 6000);
        }
        break;
      case "bc":
        if (!bc) {
          setBC(true);
          setTimeout(function() {
            setBC(false);
          }, 6000);
        }
        break;
      case "br":
        if (!br) {
          setBR(true);
          setTimeout(function() {
            setBR(false);
          }, 6000);
        }
        break;
      default:
        break;
    }
  };
  const hideAlert = () => {
    setAlert(null);
    window.location.href = "/admin/profile";
  };
  const hide2Alert = () => {
    setAlert(null);
    window.location.href = "/admin/profile";
  };
  const classes = useStyles();
  return (
    <div>
      {alert}
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardBody>
              <NavPills
                color="rose"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 12, md: 2 },
                  contentGrid: { xs: 12, sm: 12, md: 10 }
                }}
                tabs={[
                  {
                    tabButton: <Text tid="profile" />,
                    tabIcon: Dashboard,
                    tabContent: (
                      
                      <Card>
                        <CardBody>
                          <form>
                            <GridContainer>
                            <GridItem xs={12} sm={12} md={5}>
                            <CustomInput
                              success={changeEmailState === "success"}
                              error={changeEmailState === "error"}
                              labelText= {dictionary.mail + " *"} 
                              id="changeEmail"
                              formControlProps={{
                                fullWidth: true
                              }}
                              value={user.login}
                              inputProps={{
                                onChange: event => {
                                  if (verifyEmail(event.target.value)) {
                                    setChangeEmailState("success");
                                  } else {
                                    setChangeEmailState("error");
                                  }
                                  setChangeEmail(event.target.value);
                                },
                                type: "email"
                              }}
                            />
                            </GridItem>
                            </GridContainer>
                            <GridContainer>
                            <GridItem xs={12} sm={12} md={4}>
                            <CustomInput
                              success={changeNameState === "success"}
                              error={changeNameState === "error"}
                              labelText={dictionary.Name + " *"} 
                              id="changeFirstname"
                              formControlProps={{
                                fullWidth: true
                              }}
                              value={user.name}
                              inputProps={{
                                onChange: event => {
                                  if (event.target.value) {
                                    setChangeNameState("success");
                                  } else {
                                    setChangeNameState("error");
                                  }
                                  setChangeName(event.target.value);
                                },
                                type: "text"
                              }}
                            />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                            <CustomInput
                              success={changeLastNameState === "success"}
                              error={changeLastNameState === "error"}
                              labelText={dictionary.surname + " *"} 
                              id="changeLastName"
                              formControlProps={{
                                fullWidth: true
                              }}
                              value={user.familyName}
                              inputProps={{
                                onChange: event => {
                                  if (event.target.value) {
                                    setChangeLastNameState("success");
                                  } else {
                                    setChangeLastNameState("error");
                                  }
                                  setChangeLastName(event.target.value);
                                },
                                type: "text"
                              }}
                            />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                            <CustomInput
                              success={changeSurNameState === "success"}
                              error={changeSurNameState === "error"}
                              labelText={dictionary.middlename + " *"} 
                              id="changeSurName"
                              formControlProps={{
                                fullWidth: true
                              }}
                              value={user.middleName}
                              inputProps={{
                                onChange: event => {
                                  if (event.target.value) {
                                    setChangeSurNameState("success");
                                  } else {
                                    setChangeSurNameState("error");
                                  }
                                  setChangeSurName(event.target.value);
                                },
                                type: "text"
                              }}
                            />
                            </GridItem>
                            </GridContainer>
                            <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                            <CustomInput
                              success={changePhoneState === "success"}
                              error={changePhoneState === "error"}
                              labelText={dictionary.telephone + " *"} 
                              id="changePhone"
                              formControlProps={{
                                fullWidth: true
                              }}
                              value={user.phone}
                              inputProps={{
                                onChange: event => {
                                  if (verifyNumber(event.target.value)) {
                                    setChangePhoneState("success");
                                  } else {
                                    setChangePhoneState("error");
                                  }
                                  setChangePhone(event.target.value);
                                },
                                type: "number"
                              }}
                            />
                            </GridItem>
                            </GridContainer>
                            <GridContainer>
                            <GridItem xs={12} sm={12} md={8}>
                            <CustomInput
                              success={changeAddressState === "success"}
                              error={changeAddressState === "error"}
                              labelText={dictionary.address + " *"} 
                              id="changeAddress"
                              formControlProps={{
                                fullWidth: true
                              }}
                              value={user.address}
                              inputProps={{
                                onChange: event => {
                                  if (event.target.value) {
                                    setChangeAddressState("success");
                                  } else {
                                    setChangeAddressState("error");
                                  }
                                  setChangeAddress(event.target.value);
                                },
                                type: "text"
                              }}
                            />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
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
                                success={changeCityState === "success"}
                                error={changeCityState === "error"}
                                MenuProps={{
                                  className: classes.selectMenu
                                }}
                                classes={{
                                  select: classes.select
                                }}
                                value={ cities.findIndex((city, index) => 
                                  city.city === user.city 
                               )}
                                onChange={handleSimple}
                                inputProps={{
                                  onChange: event => {
                                    if (event.target.value) {
                                      setChangeCityState("success");
                                    } else {
                                      setChangeCityState("error");
                                    }
                                    setChangeCity(event.target.value);
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
                            </GridItem>
                            </GridContainer>
                            <GridContainer>
                            <GridItem xs={12} sm={12} md={3}>
                            <Accordion
                              active={-1}
                              collapses={[
                                {
                                  title: <Text tid="legalEntity" />,
                                  content: (
                                    <form>
                                    <CustomInput
                                      success={changeName2State === "success"}
                                      error={changeName2State === "error"}
                                      labelText={dictionary.Name + " *"} 
                                      id="changeName2"
                                      formControlProps={{
                                        fullWidth: true
                                      }}
                                      value={user.name}
                                      inputProps={{
                                        onChange: event => {
                                          if (event.target.value) {
                                            setChangeName2State("success");
                                          } else {
                                            setChangeName2State("error");
                                          }
                                          setChangeName2(event.target.value);
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
                                        success={changeTypeState === "success"}
                                        error={changeTypeState === "error"}
                                        MenuProps={{
                                          className: classes.selectMenu
                                        }}
                                        classes={{
                                          select: classes.select
                                        }}
                                        value={'1'}
                                        onChange={handleSimple}
                                        inputProps={{
                                          onChange: event => {
                                            if (event.target.value) {
                                              setChangeTypeState("success");
                                            } else {
                                              setChangeTypeState("error");
                                            }
                                            setChangeType(event.target.value);
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
                                         <Text tid="selectType" />
                                        </MenuItem>
                                        <MenuItem
                                          classes={{
                                            root: classes.selectMenuItem,
                                            selected: classes.selectMenuItemSelected
                                          }}
                                          value="OOO"
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
                                    {changeType == "OOO" && <CustomInput
                                      success={changeBankState === "success"}
                                      error={changeBankState === "error"}
                                      labelText={"КПП *"} 
                                      id="changeBank"
                                      formControlProps={{
                                        fullWidth: true
                                      }}
                                      inputProps={{
                                        onChange: event => {
                                          if (event.target.value) {
                                            setChangeBankState("success");
                                          } else {
                                            setChangeBankState("error");
                                          }
                                          setChangeBank(event.target.value);
                                        },
                                        type: "text"
                                      }}
                                    />}
                                    {changeType == "ИП" && <CustomInput
                                      success={changeBankState === "success"}
                                      error={changeBankState === "error"}
                                      labelText={"ОГРН *"} 
                                      id="changeBank"
                                      formControlProps={{
                                        fullWidth: true
                                      }}
                                      inputProps={{
                                        onChange: event => {
                                          if (event.target.value) {
                                            setChangeBankState("success");
                                          } else {
                                            setChangeBankState("error");
                                          }
                                          setChangeBank(event.target.value);
                                        },
                                        type: "text"
                                      }}
                                    />}
                                    {changeType == "ЗАО" && <CustomInput
                                      success={changeBankState === "success"}
                                      error={changeBankState === "error"}
                                      labelText={"ЗАО *"} 
                                      id="changeBank"
                                      formControlProps={{
                                        fullWidth: true
                                      }}
                                      inputProps={{
                                        onChange: event => {
                                          if (event.target.value) {
                                            setChangeBankState("success");
                                          } else {
                                            setChangeBankState("error");
                                          }
                                          setChangeBank(event.target.value);
                                        },
                                        type: "text"
                                      }}
                                    />}
                                    {changeType == "ОАО" && <CustomInput
                                      success={changeBankState === "success"}
                                      error={changeBankState === "error"}
                                      labelText={"ОАО *"} 
                                      id="changeBank"
                                      formControlProps={{
                                        fullWidth: true
                                      }}
                                      inputProps={{
                                        onChange: event => {
                                          if (event.target.value) {
                                            setChangeBankState("success");
                                          } else {
                                            setChangeBankState("error");
                                          }
                                          setChangeBank(event.target.value);
                                        },
                                        type: "text"
                                      }}
                                    />}
                                    <CustomInput
                                      success={changeBankState === "success"}
                                      error={changeBankState === "error"}
                                      labelText={dictionary.bank + " *"} 
                                      id="changeBank"
                                      formControlProps={{
                                        fullWidth: true
                                      }}
                                      inputProps={{
                                        onChange: event => {
                                          if (event.target.value) {
                                            setChangeBankState("success");
                                          } else {
                                            setChangeBankState("error");
                                          }
                                          setChangeBank(event.target.value);
                                        },
                                        type: "text"
                                      }}
                                    />
                                    <CustomInput
                                      success={changeINNState === "success"}
                                      error={changeINNState === "error"}
                                      labelText={dictionary.inn + " *"} 
                                      id="changeINN"
                                      formControlProps={{
                                        fullWidth: true
                                      }}
                                      inputProps={{
                                        onChange: event => {
                                          if (event.target.value) {
                                            setChangeINNState("success");
                                          } else {
                                            setChangeINNState("error");
                                          }
                                          setChangeINN(event.target.value);
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
                            {/* <div className={classes.formCategory}>
                              <small>*</small> Required fields
                            </div> */}
                            <div className={classes.right}>
                            <Button
                              color="rose"
                              onClick={changeClick}
                              className={classes.registerButton}
                            >
                              <Text tid="edit" />
                            </Button>
                            </div>
                          </form>
                        </CardBody>
                      </Card>
              
                    )
                  },
                  {
                    tabButton: <Text tid="changePassword" />,
                    tabIcon: Schedule,
                    tabContent: (
                      <Card>
                        <CardBody>
                          <form>
                          <CustomInput
                            success={currentPasswordState === "success"}
                            error={currentPasswordState === "error"}
                            labelText={dictionary.currentPassword + " *"}
                            id="currentPassword"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              onChange: event => {
                                if (verifyLength(event.target.value, 6)) {
                                  setCurrentPasswordState("success");
                                } else {
                                  setCurrentPasswordState("error");
                                }
                                setCurrentPassword(event.target.value);
                              },
                              type: "password",
                              autoComplete: "off"
                            }}
                          />
                          <CustomInput
                            success={passwordState === "success"}
                            error={passwordState === "error"}
                            labelText={dictionary.newPassword + " *"}
                            id="password"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              onChange: event => {
                                if (verifyLength(event.target.value, 6)) {
                                  setPasswordState("success");
                                } else {
                                  setPasswordState("error");
                                }
                                setPassword(event.target.value);
                              },
                              type: "password",
                              autoComplete: "off"
                            }}
                          />
                          <CustomInput
                            success={confirmPasswordState === "success"}
                            error={confirmPasswordState === "error"}
                            labelText={dictionary.confirmpassword + " *"}
                            id="confirmpassword"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              onChange: event => {
                                if (password === event.target.value) {
                                  setConfirmPasswordState("success");
                                } else {
                                  setConfirmPasswordState("error");
                                }
                                setConfirmPassword(event.target.value);
                              },
                              type: "password",
                              autoComplete: "off"
                            }}
                          />
                            <div className={classes.right}>
                            <Button
                              color="rose"
                              onClick={changePassClick}
                              className={classes.registerButton}
                            >
                              <Text tid="changePassword" />
                            </Button>
                            </div>
                          </form>
                        </CardBody>
                      </Card>
                    )
                  }
                ]}
              />
            </CardBody>
          </Card>
          <Snackbar
            place="br"
            color="danger"
            icon={AddAlert}
            message={<Text tid="passwordIncorrect" />}
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
  id: state.auth.user._id,
  user: state.auth.user,
})

const mapDispatchToProps = ({
  MiniActive: mainAction.MiniActive
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
