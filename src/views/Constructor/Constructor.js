/*eslint-disable*/
import React, {useEffect} from "react";
import { connect } from 'react-redux'
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-dashboard-pro-react/views/iconsStyle";
import * as mainAction from 'redux/actions/main';

const useStyles = makeStyles(styles);

const Constructor = ({MiniActive}) => {
  const classes = useStyles();
  useEffect(() => {
    MiniActive(true)
  }, [])
  return (
    <GridContainer className="p-0 m-0">
      <GridItem xs={12} sm={12} md={12} className="p-0 m-0">
        <Card plain className="p-0 m-0" >
          <CardBody plain className="p-0 m-0">
            <Hidden only={["sm", "xs"]} implementation="css">
              <iframe
                className={classes.iframe}
                src=""
                title="Icons iframe"
              >
                <p>Your browser does not support iframes.</p>
              </iframe>
            </Hidden>
            <Hidden only={["lg", "md"]} implementation="css">
              <GridItem xs={12} sm={12} md={6}>
                <h5>
                  This page is visible on Desktop mode inside an iframe. Since
                  the iframe is not working on Mobile and Tablets please visit
                  the icons on their original page on Google. 
                </h5>
              </GridItem>
            </Hidden>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

const mapStateToProps = (state, ownProps) => ({
  miniActive: state.main.miniActive
})

const mapDispatchToProps = ({
  MiniActive: mainAction.MiniActive
})

export default connect(mapStateToProps, mapDispatchToProps)(Constructor)
