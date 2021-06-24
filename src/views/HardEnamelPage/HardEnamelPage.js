import styles from "assets/jss/material-kit-react/views/profilePage.js";
import classNames from "classnames";
import { GridList, GridListTile } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import pins from "assets/constants/pins";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import GalleryImg from "../Components/GalleryImg/GalleryImg.js"
const useStyles = makeStyles(styles);

export default function HardEnamelPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  const dashboardRoutes = ['/'];

  return (
    <>
    <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Enamel Pins"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
    />
    <div>
        <GridList cellHeight={260} className={classes.gridList} cols={3}>
            {pins.map((pin) => (
                <GridListTile key={pin.id} cols={pin.cols | 1 } >
                    <img style={{borderRadius: '25px'}} src={process.env.PUBLIC_URL + pin.src} alt={pin.alt} />
                </GridListTile>
            ))}
        </GridList>
    </div>
    {/* <div style={ {display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(200px, 1fr))', gridGap: '20px', alignItems:'center'}}>
    {pins.map((pin) => (
                
                    <img src={process.env.PUBLIC_URL + pin.src} alt={pin.alt} />
            ))}  
    </div> */}
    </>
    )
}