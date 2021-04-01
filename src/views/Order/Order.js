import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Assignment from "@material-ui/icons/Assignment";
import Create from "@material-ui/icons/Create";
import Favorite from "@material-ui/icons/Favorite";
import Duplicate from "@material-ui/icons/FileCopyTwoTone";
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

import * as mainAction from 'redux/actions/main';

// import { orderData } from "variables/general.js";

import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";
import * as userService from 'services/userService';
import { Text } from 'utils/Language';

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  }
};

const useStyles = makeStyles(styles);

const Order = (props) => {
  const [orderData, setOrderData] = useState({
    headerRow: [<Text tid="no" />, <Text tid="clientName" />, <Text tid="orderDate" />, <Text tid="clientName" />, <Text tid="orderPrice" />, <Text tid="orderType" />, <Text tid="description" />, <Text tid="act" />],
    footerRow: [<Text tid="no" />, <Text tid="clientName" />, <Text tid="orderDate" />, <Text tid="clientName" />, <Text tid="orderPrice" />, <Text tid="orderType" />, <Text tid="description" />, <Text tid="act" />],
    dataRows: [
      ["23", "Tiger Nixon", "2020-06-11", "2500$", "A", "Сделать компонент с пустым iframe внутри на всю ширину контента На мобильной версии сайта выводить надпись в центре блока, что конфигуратора работает только на десктоп-версии"],
      ["27", "Garrett Winters", "2020-07-13", "1765$", "B", "Комментарий заказа(выводить в списке часть комментария; по нажатию на это поле не переходить на страницу конфигуратора, а показывать модальное окно с комментарием в развернутом)"],
      ["43", "Tiger Nixon", "2020-06-11", "2500$", "C", "Сделать компонент с пустым iframe внутри на всю ширину контента На мобильной версии сайта выводить надпись в центре блока, что конфигуратора работает только на десктоп-версии"],
      ["67", "Garrett Winters", "2020-07-13", "1765$", "B", "Комментарий заказа(выводить в списке часть комментария; по нажатию на это поле не переходить на страницу конфигуратора, а показывать модальное окно с комментарием в развернутом)"],
      ["73", "Tiger Nixon", "2020-06-11", "2500$", "D", "Сделать компонент с пустым iframe внутри на всю ширину контента На мобильной версии сайта выводить надпись в центре блока, что конфигуратора работает только на десктоп-версии"],
      ["97", "Garrett Winters", "2020-07-13", "1765$", "B", "Комментарий заказа(выводить в списке часть комментария; по нажатию на это поле не переходить на страницу конфигуратора, а показывать модальное окно с комментарием в развернутом)"],
      ["103", "Tiger Nixon", "2020-06-11", "2500$", "D", "Сделать компонент с пустым iframe внутри на всю ширину контента На мобильной версии сайта выводить надпись в центре блока, что конфигуратора работает только на десктоп-версии"],
      ["127", "Garrett Winters", "2020-07-13", "1765$", "B", "Комментарий заказа(выводить в списке часть комментария; по нажатию на это поле не переходить на страницу конфигуратора, а показывать модальное окно с комментарием в развернутом)"],
    ]
  })

  useEffect(() => {
    //  setOrderData({})
    props.MiniActive(false)
    console.log(props.user.role)
  }, [])
  const [data, setData] = React.useState(
    orderData.dataRows.map((prop, key) => {
      return {
        id: key,
        no: prop[0],
        customerName: prop[1],
        date: prop[2],
        price: prop[3],
        type: prop[4],
        description: prop[5].slice(0, 32),
        actions: (
          // we've added some custom button actions
          <div className="actions-right">
            {/* use this button to add a like kind of action */}
            <Button
              justIcon
              round
              simple
              onClick={() => {
                let obj = data.find(o => o.id === key);
                alert(
                  "You've clicked LIKE button on \n{ \nName: " +
                  obj.no +
                  ", \nNo: " +
                  obj.customerName +
                  ", \nCustomerName: " +
                  obj.date +
                  ", \nDate: " +
                  obj.price +
                  "\nPrice." +
                  obj.type +
                  "\nDescription}." +
                  obj.description
                );
              }}
              color="info"
              className="like"
            >
              <Favorite />
            </Button>{" "}
            <Button
              justIcon
              round
              simple
              onClick={() => {
                let obj = data.find(o => o.id === key);
                alert(
                  "You've clicked Duplicate button on \n{ \nName: " +
                  obj.no +
                  ", \nNo: " +
                  obj.customerName +
                  ", \nCustomerName: " +
                  obj.date +
                  ", \nDate: " +
                  obj.price +
                  "\nPrice." +
                  obj.type +
                  "\nDescription}." +
                  obj.description
                );
              }}
              color="success"
              className="duplicate"
            >
              <Duplicate />
            </Button>{" "}
            {/* use this button to add a edit kind of action */}
            <Button
              justIcon
              round
              simple
              onClick={() => {
                let obj = data.find(o => o.id === key);
                alert(
                  "You've clicked Edit button on \n{ \nName: " +
                  obj.no +
                  ", \nNo: " +
                  obj.customerName +
                  ", \nCustomerName: " +
                  obj.date +
                  ", \nDate: " +
                  obj.price +
                  "\nPrice." +
                  obj.type +
                  "\nDescription}." +
                  obj.description
                );
              }}
              color="warning"
              className="edit"
            >
              <Create />
            </Button>{" "}
            {/* use this button to remove the data row */}
            {props.user.role == 1 && <Button
              justIcon
              round
              simple
              onClick={() => {
                var newData = data;
                newData.find((o, i) => {
                  if (o.id === key) {
                    // here you should add some custom code so you can delete the data
                    // from this component and from your server as well
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
            </Button>

            }
            {
              props.user.role == 2 && <Button
                justIcon
                round
                simple
                onClick={() => {
                  var newData = data;
                  newData.find((o, i) => {
                    if (o.id === key) {
                      newData.slice(i, 3);
                      return true;
                    }
                    return false;
                  });
                  setData([...newData]);
                }}
                color="warnning"
                className="edit"
              >
                <Duplicate />
              </Button>
            }
            {
              props.user.role === 3 && <Button
                justIcon
                round
                simple
                onClick={() => {
                  var newData = data;
                  newData.find((o, i) => {
                    if (o.id === key) {
                      newData.slice(i, 2);
                      return true;
                    }
                    return false;
                  });
                  setData([...newData]);
                }}
                color="sucess"
                className="create"
              >
                <Favorite />
              </Button>
            }
          </div>
        )
      };
    })
  );
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
                  Header: <Text tid="orderDate" />,
                  accessor: "date"
                },
                {
                  Header: <Text tid="orderPrice" />,
                  accessor: "price"
                },
                {
                  Header: <Text tid="orderType" />,
                  accessor: "type"
                },
                {
                  Header: <Text tid="description" />,
                  accessor: "description"
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

const mapStateToProps = (state, ownProps) => ({
  user: state.auth.user
})

const mapDispatchToProps = ({
  MiniActive: mainAction.MiniActive
})

export default connect(mapStateToProps, mapDispatchToProps)(Order)