import React from 'react';
import PaletteFooterStyles from './PaletteFooterStyles';

export default function PaletteFooter(props) {
   const classes = PaletteFooterStyles();
   return (
      <footer className={classes.PaletteFooter}>
         <span>{props.paletteName}</span>
      </footer>
   )
}