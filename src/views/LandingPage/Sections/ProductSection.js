import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { AddShoppingCart, ShoppingCart } from "@material-ui/icons";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Types of Pins</h2>
          <h5 className={classes.description}>
          There are many different types of enamel pins to choose from, that being 
          said there are two main brackets that these pins fall under. First, 
          there are soft enamel pins. Second, you have a hard enamel. While they 
          are both pretty similar, with similar functions, they have a few distinct 
          differences.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Soft Enamel"
              description="Soft enamel pins are cheaper for the manufacturer because less time goes into making them. They have a very rigid finish and are much less smooth. They are cheaper to buy for you, the consumer."
              icon={ShoppingCartOutlinedIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Hard Enamel"
              description="Hard enamel pins take a lot more work to make them smooth and flush. They aren't going to be as intricate or vivid, though they will be much sturdier than their soft enamel counterparts. They are perfect for a simple glossy finish, rather than complicated patterns."
              icon={ShoppingCart}
              iconColor="info"
              vertical
            />
          </GridItem>
          {/* <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Fingerprint"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem> */}
        </GridContainer>
      </div>
    </div>
  );
}
