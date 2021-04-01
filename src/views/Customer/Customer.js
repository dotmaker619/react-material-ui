import React, { useState, useEffect, useContext } from "react";
import { connect } from 'react-redux';  

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Assignment from "@material-ui/icons/Assignment";
import Dvr from "@material-ui/icons/Dvr";
import Add from "@material-ui/icons/Add";
import Close from "@material-ui/icons/Close";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardIcon from "components/Card/CardIcon.js";
import CardHeader from "components/Card/CardHeader.js";
import ReactTable from "components/ReactTable/ReactTable.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Accordion from "components/Accordion/Accordion.js";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";
import modalStyle from "assets/jss/material-dashboard-pro-react/modalStyle.js";
import customSelectStyle from "assets/jss/material-dashboard-pro-react/customSelectStyle.js";
import customCheckboxRadioSwitch from "assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.js";
import * as mainAction from 'redux/actions/main';

// import { customerData } from "variables/general.js";

import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";
import * as userService from 'services/userService';
import { Text, LanguageContext } from 'utils/Language';
import cities from 'utils/cities.json';
import SweetAlert from "react-bootstrap-sweetalert";
import { Snackbar } from "@material-ui/core";
import { AddAlert } from "@material-ui/icons";

const styles = theme => ({
  ...customCheckboxRadioSwitch,
  ...customSelectStyle,
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  },
  icons: {
    width: "20px !important",
    height: "20px !important",
  },
  roundIcon: {
    paddingTop: "8px",
  },
  floatLeft: {
    width: "90%",
    float: "left",
  },
  createBtn: {
    width: "10%",
    float: "right",
  },
  ...modalStyle(theme)
});

const useStyles = makeStyles(styles);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Customer = (props) => {
  const {legalstate, setLegalstate} = useState('legal');
  const {dictionary} = useContext(LanguageContext);
  const [noticeModal, setNoticeModal] = useState(false);
  const [createEmail, setCreateEmail] = useState("");
  const [createEmailState, setCreateEmailState] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [createPasswordState, setCreatePasswordState] = useState("");
  const [createConfirmPassword, setCreateConfirmPassword] = useState("");
  const [createConfirmPasswordState, setCreateConfirmPasswordState] = useState("");
  const [createName, setcreateName] = useState("");
  const [createNameState, setCreateNameState] = useState("");
  const [createLastName, setCreateLastName] = useState("");
  const [createLastNameState, setCreateLastNameState] = useState("");
  const [createSurName, setCreateSurName] = useState("");
  const [createSurNameState, setCreateSurNameState] = useState("");
  const [createPhone, setCreatePhone] = useState("");
  const [createPhoneState, setCreatePhoneState] = useState("");
  const [createAddress, setCreateAddress] = useState("");
  const [createAddressState, setCreateAddressState] = useState("");
  const [registerCity, setCreateCity] = useState("");
  const [createCityState, setCreateCityState] = useState("");
  const [registerCheckbox, setregisterCheckbox] = useState(false);
  const [registerCheckboxState, setregisterCheckboxState] = useState("");
  const [simpleSelect, setSimpleSelect] = useState("");
  const [show, setShow] = useState(false);
  const [place, setPlace] = useState('br');
  const [alert, setAlert] = useState(null);
  const [message, setMessage] = useState('');

  const [createName2, setCreateName2] = useState("");
  const [createName2State, setCreateName2State] = useState("");
  const [createBank, setCreateBank] = useState("");
  const [createBankState, setCreateBankState] = useState("");
  const [createType, setCreateType] = useState("");
  const [createTypeState, setCreateTypeState] = useState("");
  const [createIPorgan, setCreateIPorgan] = useState("");
  const [createIPorganState, setCreateIPorganState] = useState("");
  const [createINN, setCreateINN] = useState("");
  const [createINNState, setCreateINNState] = useState("");

  useEffect(() => {
    const Data = {
      headerRow: [<Text tid="no" />, <Text tid="clientName" />,  <Text tid="mail" />, <Text tid="city" />, <Text tid="amountOfTransaction" />, <Text tid="act" />],
      footerRow: [<Text tid="no" />, <Text tid="clientName" />,  <Text tid="mail" />, <Text tid="city" />, <Text tid="amountOfTransaction" />, <Text tid="act" />],
      dataRows: [...props.users.map((user, index) => {
        return [index+1, user.name , user.login, user.city, user.inn? user.inn + '$' : '' ]
       })]
      
    }
    setData(Data.dataRows.map((prop, key) => {
      return {
        id: key,
        no: prop[0],
        customerName: prop[1],
        email: prop[2],
        city: prop[3],
        tranjaction: prop[4],
        actions: (
          // we've added some custom button actions
          <div className="actions-right">
            {/* use this button to add a edit kind of action */}
            <Button
              justIcon
              round
              simple
              onClick={() => editClick(prop)}
              color="warning"
              className="edit"
            >
              <Dvr />
            </Button>{" "}
            {props.user.role === 'partner' && <Button
              justIcon
              round
              simple
              onClick={() => deleteClick(prop)}
              color="danger"
              className="remove"
            >
              <Close />
            </Button>}
          </div>
        )
      };
    }))
  }, [props.users.length]);
  const successAlert =  () => {
    setAlert(
      <SweetAlert
        success
        style={{ display: "block", marginTop: "-100px" }}
        title="Login Success!"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={classes.confirmButton + " " + classes.success}
      >
        Welcome to our site.
      </SweetAlert>
    );
  };

  const showNotification = (place, message) => {
    setPlace(place);
    setMessage(message);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 6000);
  };
  const hideAlert = () => {
    setAlert(null);
  };

  const createClick = () => {
    if (createEmailState === "") {
      setCreateEmailState("error");
    }
    if (createPasswordState === "") {
      setCreatePasswordState("error");
    }
    if (createConfirmPasswordState === "") {
      setCreateConfirmPasswordState("error");
    }
    if (createNameState === "") {
      setCreateNameState("error");
    }
    if (createLastNameState === "") {
      setCreateLastNameState("error");
    }
    if (createSurNameState === "") {
      setCreateSurNameState("error");
    }
    if (createPhoneState === "") {
      setCreatePhoneState("error");
    }
    if (createAddressState === "") {
      setCreateAddressState("error");
    }
    if (createCityState === "") {
      setCreateCityState("error");
    }
    if (createName2State === "") {
      setCreateName2State("error");
    }
    if (createTypeState === "") {
      setCreateTypeState("error");
    }
    if (createBankState === "") {
      setCreateBankState("error");
    }
    if (createINNState === "") {
      setCreateINNState("error");
    }
    if (createIPorganState === "") {
      setCreateIPorganState("error");
    }
    if(createEmailState !== "" && createPasswordState !== "" && createConfirmPasswordState !== '' && createNameState !== "" && createLastNameState !== "" && createSurNameState !== "" && createPhoneState !== "" && createAddressState !== "" && createCityState !== "" && createName2 !== "" && createTypeState !== "" && createBankState !== "" && createINNState !== ""){
      props.AddUser({
        login: createEmail,
        password: createPassword,
        name: createName,
        lastName: createLastName,
        surName: createSurName,
        phone: createPhone,
        address: createAddress,
        city: createCityState,
        name2: createName2,
        type: createType,
        role: 'partner',
        bank: createBank,
        inn: createINN
      })
      successAlert();
      // setNoticeModal(false)
    }
  }
  const handleSimple = event => {
    setSimpleSelect(event.target.value);
  };

  const legalClick = (event, expand) => {
    // setLegalstate('individual')
    console.log(event, expand);
  }
  const verifyEmail = value => {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  };
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
  const [customerData, setCustomerData] = useState({
    headerRow: [<Text tid="no" />, <Text tid="clientName" />,  <Text tid="mail" />, <Text tid="city" />, <Text tid="amountOfTransaction" />, <Text tid="act" />],
    footerRow: [<Text tid="no" />, <Text tid="clientName" />,  <Text tid="mail" />, <Text tid="city" />, <Text tid="amountOfTransaction" />, <Text tid="act" />],
    dataRows: 
      props.users.map((user, index) => {
        return ([index+1, user.name, user.login, user.city, user.inn ? user.inn : '' + '$'])
       })
    
  })

  const editClick = (prop) => {
  
    alert(
      "EDIT \n{ \nNo: " +
        prop.no +
        ", \nCustomer Name: " +
        prop.customerName +
        ", \nEmail: " +
        prop.email +
        ", \nCity: " +
        prop.city +
        ", \nTranjaction: " +
        prop.tranjaction +
        "\n}."
    );
  }
  const deleteClick = (prop) => {
    props.DeleteUser(prop[2])
  }
  
  const [data, setData] = useState(customerData.dataRows.map((prop, key) => {
    return {
      id: key,
      no: prop[0],
      customerName: prop[1],
      email: prop[2],
      city: prop[3],
      tranjaction: prop[4],
      actions: (
        // we've added some custom button actions
        <div className="actions-right">
          {/* use this button to add a edit kind of action */}
          <Button
            justIcon
            round
            simple
            onClick={() => editClick(prop)}
            color="warning"
            className="edit"
          >
            <Dvr />
          </Button>{" "}
          {props.user.role === 'partner' && <Button
            justIcon
            round
            simple
            onClick={() => deleteClick(prop)}
            color="danger"
            className="remove"
          >
            <Close />
          </Button>}
        </div>
      )
    };
  }));
  useEffect(() => {
    props.MiniActive(false);
    userService.getUsers().then(res => {
      console.log(res.data.users);
      props.AddUser(res.data.users)
     
      // setCustomerData(res.config.data.users)
    })
  }, [])

  
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12}>
        <Card>
          <CardHeader color="primary" icon>
            <CardIcon color="primary">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}><Text tid="orderPage" /></h4>
            <div className={classes.floatLeft}></div>
            <div className={classes.createBtn}>
              <Button
                  justIcon
                  round
                  color="primary"
                  className={classes.roundIcon}
                  onClick={() => setNoticeModal(true)}
              >
                <Add className={classes.icons} />
              </Button>
            </div>
          </CardHeader>
          <CardBody>
            <ReactTable
              columns={[
                {
                  Header: <Text tid="no" />, 
                  accessor: "no"
                },
                {
                  Header: <Text tid="clientName" />,  
                  accessor: "customerName"
                },
                {
                  Header: <Text tid="mail" />,
                  accessor: "email"
                },
                {
                  Header:  <Text tid="city" />, 
                  accessor: "city"
                },
                {
                  Header: <Text tid="amountOfTransaction" />,
                  accessor: "tranjaction"
                },
                {
                  Header:  <Text tid="act" />,
                  accessor: "actions"
                }
              ]}
              data={data}
            />
          </CardBody>
        </Card>
      </GridItem>
      <Dialog
        classes={{
        root: classes.center + " " + classes.modalRoot,
        paper: classes.modal
        }}
        open={noticeModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setNoticeModal(false)}
        aria-labelledby="notice-modal-slide-title"
        aria-describedby="notice-modal-slide-description"
      >
          <DialogTitle
              id="notice-modal-slide-title"
              disableTypography
              className={classes.modalHeader}
          >
            <Button
                justIcon
                className={classes.modalCloseButton}
                key="close"
                aria-label="Close"
                color="transparent"
                onClick={() => setNoticeModal(false)}
             >
             <Close className={classes.modalClose} />
             </Button>
             <h4 className={classes.modalTitle}>{<Text tid="createNew" />}</h4>
          </DialogTitle>
          <DialogContent
              id="notice-modal-slide-description"
              className={classes.modalBody}
          >
              <form>
                <CustomInput
                    success={createEmailState === "success"}
                    error={createEmailState === "error"}
                    labelText= {dictionary.email + " *"} 
                    id="createEmail"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: event => {
                      if (verifyEmail(event.target.value)) {
                          setCreateEmailState("success");
                      } else {
                          setCreateEmailState("error");
                      }
                          setCreateEmail(event.target.value);
                      },
                      type: "email"
                    }}
                />
                <CustomInput
                    success={createPasswordState === "success"}
                    error={createPasswordState === "error"}
                    labelText= {dictionary.password + " *"}  
                    id="createPassword"
                    formControlProps={{
                        fullWidth: true
                    }}
                    inputProps={{
                        onChange: event => {
                        if (verifyLength(event.target.value, 6)) {
                            setCreatePasswordState("success");
                        } else {
                            setCreatePasswordState("error");
                        }
                        setCreatePassword(event.target.value);
                        },
                        type: "password",
                        autoComplete: "off"
                    }}
                />
                <CustomInput
                    success={createConfirmPasswordState === "success"}
                    error={createConfirmPasswordState === "error"}
                    labelText={dictionary.confirmpassword + " *"} 
                    id="createConfirmPassword"
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                        onChange: event => {
                        if (createPassword === event.target.value) {
                            setCreateConfirmPasswordState("success");
                        } else {
                            setCreateConfirmPasswordState("error");
                        }
                        setCreateConfirmPassword(event.target.value);
                        },
                        type: "password",
                        autoComplete: "off"
                    }}
                />
                <CustomInput
                    success={createNameState === "success"}
                    error={createNameState === "error"}
                    labelText={dictionary.Name + " *"} 
                    id="createName"
                    formControlProps={{
                        fullWidth: true
                    }}
                    inputProps={{
                        onChange: event => {
                        if (event.target.value) {
                            setCreateNameState("success");
                        } else {
                            setCreateNameState("error");
                        }
                        setcreateName(event.target.value);
                        },
                        type: "text"
                    }}
                />
                <CustomInput
                    success={createLastNameState === "success"}
                    error={createLastNameState === "error"}
                    labelText={dictionary.surname + " *"} 
                    id="createLastname"
                    formControlProps={{
                        fullWidth: true
                    }}
                    inputProps={{
                        onChange: event => {
                        if (event.target.value) {
                            setCreateLastNameState("success");
                        } else {
                            setCreateLastNameState("error");
                        }
                        setCreateLastName(event.target.value);
                        },
                        type: "text"
                    }}
                />
                <CustomInput
                    success={createSurNameState === "success"}
                    error={createSurNameState === "error"}
                    labelText={dictionary.middlename + " *"} 
                    id="createSurname"
                    formControlProps={{
                        fullWidth: true
                    }}
                    inputProps={{
                        onChange: event => {
                        if (event.target.value) {
                            setCreateSurNameState("success");
                        } else {
                            setCreateSurNameState("error");
                        }
                        setCreateSurName(event.target.value);
                        },
                        type: "text"
                    }}
                />
                <CustomInput
                    success={createPhoneState === "success"}
                    error={createPhoneState === "error"}
                    labelText={dictionary.telephone + " *"} 
                    id="createPhonenumber"
                    formControlProps={{
                        fullWidth: true
                    }}
                    inputProps={{
                        onChange: event => {
                        if (verifyNumber(event.target.value)) {
                            setCreatePhoneState("success");
                        } else {
                            setCreatePhoneState("error");
                        }
                        setCreatePhone(event.target.value);
                        },
                        type: "number"
                    }}
                />
                <CustomInput
                    success={createAddressState === "success"}
                    error={createAddressState === "error"}
                    labelText={dictionary.address + " *"} 
                    id="createAddress"
                    formControlProps={{
                        fullWidth: true
                    }}
                    inputProps={{
                        onChange: event => {
                        if (event.target.value) {
                            setCreateAddressState("success");
                        } else {
                            setCreateAddressState("error");
                        }
                        setCreateAddress(event.target.value);
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
                        success={createCityState === "success"}
                        error={createCityState === "error"}
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
                                setCreateCityState("success");
                            } else {
                                setCreateCityState("error");
                            }
                            setCreateCity(event.target.value);
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
                              onChange={(event, expand) => {console.log(event, expand)}}
                              collapses={[
                                {
                                  title: <Text tid='legal' />,
                                  content: (
                                    <form>
                                    <CustomInput
                                        success={createName2State === "success"}
                                        error={createName2State === "error"}
                                        labelText={dictionary.Name + " *"} 
                                        id="createName2"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        inputProps={{
                                            onChange: event => {
                                              if (event.target.value) {
                                                setCreateName2State("success");
                                              } else {
                                                setCreateName2State("error");
                                              }
                                              setCreateName2(event.target.value);
                                            },
                                            type: "text"
                                        }}
                                    />
                                    <FormControl
                                      fullWidth
                                      className={classes.selectFormControl}
                                    >
                                      <InputLabel
                                        htmlFor="simple-select1"
                                        className={classes.selectLabel}
                                      >
                                        <Text tid="tpye" />
                                      </InputLabel>
                                      <Select
                                        success={createTypeState === "success"}
                                        error={createTypeState === "error"}
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
                                              setCreateTypeState("success");
                                            } else {
                                              setCreateTypeState("error");
                                            }
                                            setCreateType(event.target.value);
                                          },
                                          name: "simpleSelect",
                                          id: "simple-select1"
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
                                    {createType == "ООО" && <CustomInput
                                      success={createIPorganState === "success"}
                                      error={createIPorganState === "error"}
                                      labelText={"КПП *"} 
                                      id="createIPorgan"
                                      formControlProps={{
                                        fullWidth: true
                                      }}
                                      inputProps={{
                                        onChange: event => {
                                          if (event.target.value) {
                                            setCreateIPorganState("success");
                                          } else {
                                            setCreateIPorganState("error");
                                          }
                                          setCreateIPorgan(event.target.value);
                                        },
                                        type: "text"
                                      }}
                                    />}
                                    {createType == "ИП" && <CustomInput
                                      success={createIPorganState === "success"}
                                      error={createIPorganState === "error"}
                                      labelText={"ОГРН *"} 
                                      id="createIPorgan"
                                      formControlProps={{
                                        fullWidth: true
                                      }}
                                      inputProps={{
                                        onChange: event => {
                                          if (event.target.value) {
                                            setCreateIPorganState("success");
                                          } else {
                                            setCreateIPorganState("error");
                                          }
                                          setCreateIPorgan(event.target.value);
                                        },
                                        type: "text"
                                      }}
                                    />}
                                    {createType == "ЗАО" && <CustomInput
                                      success={createIPorganState === "success"}
                                      error={createIPorganState === "error"}
                                      labelText={"ЗАО *"} 
                                      id="createIPorgan"
                                      formControlProps={{
                                        fullWidth: true
                                      }}
                                      inputProps={{
                                        onChange: event => {
                                          if (event.target.value) {
                                            setCreateIPorganState("success");
                                          } else {
                                            setCreateIPorganState("error");
                                          }
                                          setCreateIPorgan(event.target.value);
                                        },
                                        type: "text"
                                      }}
                                    />}
                                    {createType == "ОАО" && <CustomInput
                                      success={createIPorganState === "success"}
                                      error={createIPorganState === "error"}
                                      labelText={"ОАО *"} 
                                      id="createIPorgan"
                                      formControlProps={{
                                        fullWidth: true
                                      }}
                                      inputProps={{
                                        onChange: event => {
                                          if (event.target.value) {
                                            setCreateIPorganState("success");
                                          } else {
                                            setCreateIPorganState("error");
                                          }
                                          setCreateIPorgan(event.target.value);
                                        },
                                        type: "text"
                                      }}
                                    />}                                  
                                    <CustomInput
                                      success={createBankState === "success"}
                                      error={createBankState === "error"}
                                      labelText={dictionary.bank + " *"} 
                                      id="createBank"
                                      formControlProps={{
                                        fullWidth: true
                                      }}
                                      inputProps={{
                                        onChange: event => {
                                          if (event.target.value) {
                                            setCreateBankState("success");
                                          } else {
                                            setCreateBankState("error");
                                          }
                                          setCreateBank(event.target.value);
                                        },
                                        type: "text"
                                      }}
                                    />
                                    <CustomInput
                                      success={createINNState === "success"}
                                      error={createINNState === "error"}
                                      labelText={dictionary.inn + " *"} 
                                      id="registerINN"
                                      formControlProps={{
                                        fullWidth: true
                                      }}
                                      inputProps={{
                                        onChange: event => {
                                          if (event.target.value) {
                                            setCreateINNState("success");
                                          } else {
                                            setCreateINNState("error");
                                          }
                                          setCreateINN(event.target.value);
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
                    className={classes.registerButton}
                    onClick={createClick}
                >
                <Text tid="confirm" />
                </Button>
                <Button
                    color="rose"
                    onClick={() => setNoticeModal(false)}
                    className={classes.registerButton}
                >
                  Close
                </Button>
                </div>
              </form>
            </DialogContent>
      </Dialog>  
      <Snackbar
            place={place}
            color="danger"
            icon={AddAlert}
            message={message}
            open={show}
            closeNotification={() => setShow(false)}
            close
              />        
    </GridContainer>
  );
}


const mapStateToProps = (state, ownProps) => ({
  user: state.auth.user,
  users: state.main.users
})

const mapDispatchToProps = ({
  MiniActive: mainAction.MiniActive,
  AddUser: mainAction.AddUser,
  DeleteUser: mainAction.DeleteUser,
})

export default connect(mapStateToProps, mapDispatchToProps)(Customer)
