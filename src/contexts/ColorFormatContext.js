import React from 'react';

export const ColorFormatContext = React.createContext();

export function ColorFormatProvider(props) {
   const [colorFormat, setColorFormat] = React.useState('hex');
   
   const changeColorFormat = value => setColorFormat(value);
   
   return (
      <ColorFormatContext.Provider value={{ colorFormat, changeColorFormat }}>
         {props.children}
      </ColorFormatContext.Provider>
   )
}