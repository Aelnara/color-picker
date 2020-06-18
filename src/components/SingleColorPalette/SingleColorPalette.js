import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { ColorFormatContext } from 'contexts/ColorFormatContext';
import { PalettesContext } from 'contexts/PalettesContext';
import ColorBox from 'components/ColorBox/ColorBox';
import Navbar from 'components/Navbar/Navbar';
import PaletteFooter from 'components/PaletteFooter/PaletteFooter';
import SingleColorPaletteStyles from './SingleColorPaletteStyles';
import { generatePalette } from 'utils/colorHelpers';

export default function SingleColorPalette(props) {
   const classes = SingleColorPaletteStyles()
   const { colorFormat } = React.useContext(ColorFormatContext);
   const { findPalette } = React.useContext(PalettesContext);
   const { colorId, paletteId } = props.match.params
   
   if(!findPalette(paletteId).colors.find(color => color.name.toLowerCase() === colorId)) return <Redirect to={`/palette/${paletteId}`} />
   
   const palette = generatePalette(findPalette(paletteId))
   
   const gatherShades = () => {
      let shades = []
      let allColors = palette.colors
      for(let key in allColors) {
         shades = shades.concat(
            allColors[key].filter(color => color.id === colorId)
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