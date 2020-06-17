import React from 'react';
import { ColorFormatContext } from 'contexts/ColorFormatContext';
import { PalettesContext } from 'contexts/PalettesContext';
import ColorBox from 'components/ColorBox/ColorBox';
import Navbar from 'components/Navbar/Navbar';
import PaletteFooter from 'components/PaletteFooter/PaletteFooter';
import PaletteStyles from './PaletteStyles';
import { generatePalette } from 'colorHelpers'

export default function Palette(props) {
   const classes = PaletteStyles()
   const { colorFormat } = React.useContext(ColorFormatContext);
   const { findPalette } = React.useContext(PalettesContext);
   const [level, setLevel] = React.useState(500)
   
   const palette = generatePalette(findPalette(props.match.params.id))
   
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