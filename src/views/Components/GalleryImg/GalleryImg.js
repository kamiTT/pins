import styles from "assets/jss/material-kit-react/views/profilePage.js";
import classNames from "classnames";
import { GridList, GridListTile } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import './GalleryImg.css'
const useStyles = makeStyles(styles);

const GalleryImg = ({id, src, alt, group}) => {

  return (
        <img style={{border: '1px solid #ccc', boxShadow: '2px 2px 6px 0px',  maxWidth: '100%'}} src={src} alt={alt} />
  )
}

export default GalleryImg