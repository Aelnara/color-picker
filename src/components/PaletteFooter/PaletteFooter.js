import React from 'react';
import PaletteIcon from '@material-ui/icons/Palette';
import PaletteFooterStyles from './PaletteFooterStyles';

export default function PaletteFooter(props) {
   const classes = PaletteFooterStyles();
   return (
      <footer className={classes.PaletteFooter}>
         <span><PaletteIcon />{props.paletteName}</span>
      </footer>
   )
}