import React, {useEffect} from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import {
  whiteColor,
  grayColor,
  successColor,
} from "assets/jss/material-dashboard-pro-react.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Assignment from "@material-ui/icons/Assignment";
import Dvr from "@material-ui/icons/Dvr";
import Image from "@material-ui/icons/Image";
import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";
import product1 from "assets/img/product1.jpg";
import product2 from "assets/img/product2.jpg";
import product3 from "assets/img/product3.jpg";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardIcon from "components/Card/CardIcon.js";

import CardHeader from "components/Card/CardHeader.js";
import ReactTable from "components/ReactTable/ReactTable.js";

import { productData } from "./general.js";
import * as mainAction from 'redux/actions/main';

import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";

import * as mainService from 'services/mainService';
import {Text} from 'utils/Language';
import { connect } from "react-redux";

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
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
};

const useStyles = makeStyles(styles);
const Product = (props) => {
  const [alert, setAlert] = React.useState(null);
  const [data, setData] = React.useState(
    productData.dataRows.map((prop, key) => {
      return {
        id: key,
        productName: prop[0],
        color: prop[1],
        size: prop[2],
        price: prop[3],
        company: prop[4],
        img: prop[5],
        actions: (
          // we've added some custom button actions
          <div className="actions-right">
            <Button
              justIcon
              round
              simple
              onClick={() => {
                let obj = data.find(o => o.id === key);
                setAlert(
                  <SweetAlert
                    style={{ display: "block", marginTop: "-100px", width:"30%", height:"65%" }}
                    title={obj.productName}
                    onConfirm={() => hideAlert()}
                    onCancel={() => hideAlert()}
                    confirmBtnCssClass={classes.confirmButton + " " + classes.success}
                    confirmBtnText="Cancel"
                  >
                  <img src={product1} alt="..." className={classes.img} />
                  {/* <div style={{width:"250px", height: "300px",  backgroundImage: import(`${obj.img}`) }}></div> */}
                  </SweetAlert>
                );
              }
                
              }
              color="warning"
              className="edit"
            >
              <Image />
            </Button>{" "}
            {props.user.role == 1 && <Button
              justIcon
              round
              simple
              onClick={() => {
                var newData = data;
                newData.find((o, i) => {
                  if (o.id === key) {
                    newData.splice(i, 1);
                    return true;
                  }
                  return false;
                });
                setData([...newData]);  
                
              }}
              color="danger"
              className="remove"
            >
              <Close />
            </Button>}
          </div>
        )
      };
    })
  );

  useEffect(() => {
    props.MiniActive(false)
  }, [])
  const hideAlert = () => {
    setAlert(null);
  };
  const classes = useStyles();
  return (
    
    <GridContainer>
      {alert}
      <GridItem xs={12}>
        <Card>
          <CardHeader color="primary" icon>
            <CardIcon color="primary">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}><Text tid="listOfGood" /></h4>
          </CardHeader>
          <CardBody>
            <ReactTable
              columns={[
                {
                  Header: <Text tid="goods" />,
                  accessor: "productName"
                },
                {
                  Header: <Text tid="color" />,
                  accessor: "color"
                },
                {
                  Header: <Text tid="size" />,
                  accessor: "size"
                },
                {
                  Header: <Text tid="price" />,
                  accessor: "price"
                },
                {
                  Header: <Text tid="compony" />,
                  accessor: "company"
                },
                {
                  Header: <Text tid="act" />,
                  accessor: "actions"
                }
              ]}
              data={data}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

const mapStateToProps = state => ({
  user: state.auth.user
})

const mapDispatchToProps = {
  MiniActive: mainAction.MiniActive
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);