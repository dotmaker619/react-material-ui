import React, {useState, useEffect} from "react";
import { connect } from 'react-redux';
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
// import ContentCopy from "@material-ui/icons/ContentCopy";
import Assignment from "@material-ui/icons/Assignment";
import Store from "@material-ui/icons/Store";
// import InfoOutline from "@material-ui/icons/InfoOutline";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";
import Place from "@material-ui/icons/Place";
import ArtTrack from "@material-ui/icons/ArtTrack";
import Language from "@material-ui/icons/Language";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import Button from "components/CustomButtons/Button.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { Text } from 'utils/Language';

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts";

import styles from "assets/jss/material-dashboard-pro-react/views/dashboardStyle.js";
import * as mainAction from 'redux/actions/main';

import * as userService from '../../services/userService';

import priceImage1 from "assets/img/card-2.jpeg";
import priceImage2 from "assets/img/card-3.jpeg";
import priceImage3 from "assets/img/card-1.jpeg";

const us_flag = require("assets/img/flags/US.png");
const de_flag = require("assets/img/flags/DE.png");
const au_flag = require("assets/img/flags/AU.png");
const gb_flag = require("assets/img/flags/GB.png");
const ro_flag = require("assets/img/flags/RO.png");
const br_flag = require("assets/img/flags/BR.png");

var mapData = {
  AU: 760,
  BR: 550,
  CA: 120,
  DE: 1300,
  FR: 540,
  GB: 690,
  GE: 200,
  IN: 200,
  RO: 600,
  RU: 300,
  US: 2920
};

const useStyles = makeStyles(styles);

const Dashboard = ({MiniActive}) =>  {

  //state
  const [usersTableData, setUsersTableData] = useState([
    ["Serhii Balynskyi", "balynskyiserhii@gmail.com", "Kyiv"],
    ["NIkita Kolikhanovn", "kolikhanovn@mail.ru", "Moscow"],
    ["Sage Rodriguez", "sr@hotmail.com", "Baileux"],
    ["Philip Chaney", "chaney@outlook.com", "Overland Park"],
    ["Sairam Reddy", "sairam@gmail.com", "New Delhi"],
    ["Mason Porter", "super@outlook.com", "Gloucester"]
  ]);
  const [orderTableData, setOrderTableData] = useState([
    ["1001", "Serhii Balynskyi", "2020.12.15", "9350$", "A"],
    ["1000", "NIkita Kolikhanovn", "2020.12.13", "5875$", "B"],
    ["999", "Sage Rodriguez", "2020.12.12", "6750$", "A"],
    ["998", "Philip Chaney", "2020.12.12", "4000$", "D"],
    ["997", "Sairam Reddy", "2020.11.28", "5120$", "C"],
    ["996","Mason Porter", "2020.11.16", "2800$", "B"]
  ]);

  //useEffect
  useEffect(() => {
    console.log('object');
    userService.getRecentuserData().then(res => {
      console.log(res, 'ddddddddddddddddddd')
      if(res.data.status === 'ok'){
        setUsersTableData(res.data.users.map((user, index) => {
          return [user.familyName, user.login, user.city]
      }))
      // setOrderTableData(result.data.orders.map((order, index) => {
      //   return [order.orderNumber, order.orderName, order.date, order.amount, order.type]
      // }))
      }
      else{
        console.log('error');
      }
    });
      MiniActive(false)
  }, [])
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={6} lg={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}><Text tid="numberofOrderinWork" /></p>
              <h3 className={classes.cardTitle}>
                243 <small></small>
              </h3>
            </CardHeader>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}><Text tid="sumofManagerOrder" /></p>
              <h3 className={classes.cardTitle}>325</h3>
            </CardHeader>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}><Text tid="numberofCompletedOrder" /></p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardHeader>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <i className="fab fa-twitter" />
              </CardIcon>
              <p className={classes.cardCategory}><Text tid="numberofLastRecieceOrder" /></p>
              <h3 className={classes.cardTitle}>45</h3>
            </CardHeader>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <Assignment />
              </CardIcon>
              <h4 className={classes.cardIconTitle}><Text tid="recentUser" /></h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={[<Text tid="surname" />, <Text tid="mail" />, <Text tid="city" /> ]}
                tableData={usersTableData}
                coloredColls={[3]}
                colorsColls={["primary"]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <Assignment />
              </CardIcon>
              <h4 className={classes.cardIconTitle}><Text tid="recentOrder" /></h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={[<Text tid="orderNumber" />, <Text tid="clientName" />, <Text tid="date" />,  <Text tid="amount" />,  <Text tid="orderType" />]}
                tableData={orderTableData}
                coloredColls={[3]}
                colorsColls={["primary"]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = ({
  MiniActive: mainAction.MiniActive
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

