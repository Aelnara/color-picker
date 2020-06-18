import React from 'react';
import seedColors from 'utils/seedColors';

export const PalettesContext = React.createContext();

export function PalettesProvider(props) {
   const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'))
   const [palettes, setPalettes] = React.useState(savedPalettes || seedColors);

   React.useEffect(() => {
      window.localStorage.setItem("palettes", JSON.stringify(palettes))
   }, [palettes])
   
   const findPalette = (id) => {
      return palettes.find(palette => {
         return palette.id === id
      })
   }
   
   const deletePalette = (id) => {
      setPalettes(palettes.filter(palette => palette.id !== id))
   }
   
   const savePalette = (newPalette) => {
      setPalettes([...palettes, newPalette])
   }
   
   return (
      <PalettesContext.Provider value={{ palettes, findPalette, savePalette, deletePalette }}>
         {props.children}
      </PalettesContext.Provider>
   )
}