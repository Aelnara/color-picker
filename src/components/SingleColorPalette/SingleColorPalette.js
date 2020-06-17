import React from 'react';
import { Link } from 'react-router-dom';
import { ColorFormatContext } from 'contexts/ColorFormatContext';
import { PalettesContext } from 'contexts/PalettesContext';
import ColorBox from 'components/ColorBox/ColorBox';
import Navbar from 'components/Navbar/Navbar';
import PaletteFooter from 'components/PaletteFooter/PaletteFooter';
import SingleColorPaletteStyles from './SingleColorPaletteStyles';
import { generatePalette } from 'colorHelpers';

export default function SingleColorPalette(props) {
   const classes = SingleColorPaletteStyles()
   const { colorFormat } = React.useContext(ColorFormatContext);
   const { findPalette } = React.useContext(PalettesContext);
   
   const palette = generatePalette(findPalette(props.match.params.paletteId))
   
   const gatherShades = () => {
      let shades = []
      let allColors = palette.colors
      for(let key in allColors) {
         shades = shades.concat(
            allColors[key].filter(color => color.id === props.match.params.colorId)
         )
      }
      return shades.slice(1)
   }
   const colorBoxes = gatherShades().map(color => (
      <ColorBox key={color.name} name={color.name} background={color[colorFormat]} showingFullPalette={false}/>
   ))
   
   return (
      <div className={classes.Palette}>
         <Navbar singleColor />
         <div className={classes.colors}>
            {colorBoxes}
            <div className={classes.goBack}>
               <Link to={`/palette/${palette.id}`}>GO BACK</Link>
            </div>
         </div>
         <PaletteFooter paletteName={palette.paletteName} />
      </div>
   )
}