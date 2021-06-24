import styles from "assets/jss/material-kit-react/views/profilePage.js";
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

export default function SoftEnamelPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div></div>
  )
}