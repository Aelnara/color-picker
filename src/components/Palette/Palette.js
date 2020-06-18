import React from 'react';
import { Redirect } from 'react-router-dom';
import { ColorFormatContext } from 'contexts/ColorFormatContext';
import { PalettesContext } from 'contexts/PalettesContext';
import ColorBox from 'components/ColorBox/ColorBox';
import Navbar from 'components/Navbar/Navbar';
import PaletteFooter from 'components/PaletteFooter/PaletteFooter';
import PaletteStyles from './PaletteStyles';
import { generatePalette } from 'utils/colorHelpers'

export default function Palette(props) {
   const classes = PaletteStyles()
   const { colorFormat } = React.useContext(ColorFormatContext);
   const { findPalette } = React.useContext(PalettesContext);
   const [level, setLevel] = React.useState(500)
   
   const paletteFound = findPalette(props.match.params.id)
   if(!paletteFound) return <Redirect to='/' />
   
   const palette = generatePalette(paletteFound)
   
   const colorBoxes = palette.colors[level].map(color => (
      <ColorBox 
         background={color[colorFormat]} 
         name={color.name} 
         key={color.id} 
         moreUrl={`/palette/${palette.id}/${color.id}`}
         showingFullPalette
      />
   ))
   
   const changeLevel = (newLevel) => {
      setLevel(newLevel)
   }
   
   return (
      <div className={classes.Palette}>
         <Navbar level={level} changeLevel={changeLevel} singleColor={false} />
         <div className={classes.colors}>
            {colorBoxes}
         </div>
         <PaletteFooter paletteName={palette.paletteName} />
      </div>
   )
}