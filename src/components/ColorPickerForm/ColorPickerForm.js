import React from 'react';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import ColorPickerFormStyles from './ColorPickerFormStyles';

export default function ColorPickerForm(props) {
   const classes = ColorPickerFormStyles()
   const [currentColor, setCurrentColor] = React.useState('teal');
   const [newColorName, setNewColorName] = React.useState('');
   
   React.useEffect(() => {
      ValidatorForm.addValidationRule('colorNameUnique', value => {
         return props.colors.every(({name}) => name.toLowerCase() !== value.toLowerCase())
      })
      
      ValidatorForm.addValidationRule('colorUnique', value => {
         return props.colors.every(({color}) => color !== currentColor)
      })
   });
   
   const updateCurrentColor = (val) => {
      setCurrentColor(val.hex)
   }
   
   const handleColorNameChange = (e) => {
      setNewColorName(e.target.value)
   }
   
   const handleSubmit = () => {
      const newColor = {color: currentColor, name: newColorName}
      props.addNewColor(newColor)
      setNewColorName('')
   }
   
   
   return (
      <div>
         <ChromePicker className={classes.colorPicker} color={currentColor} onChange={updateCurrentColor}/>
         <ValidatorForm onSubmit={handleSubmit} instantValidate={false}>
            <TextValidator 
               variant='filled'
               margin='normal'
               placeholder='Color Name'
               className={classes.colorNameInput}
               value={newColorName} 
               onChange={handleColorNameChange}
               validators={['required', 'colorNameUnique', 'colorUnique']}
               errorMessages={['Enter color name!', 'Color name already used!', 'Color already used!']}
            />
            <Button 
               className={classes.addColor}
               variant='contained' 
               type='submit' 
               color='primary' 
               style={{backgroundColor: props.paletteIsFull ? 'grey' : currentColor}} 
               disabled={props.paletteIsFull}
            >
               {props.paletteIsFull ? 'Palette Full' : 'Add Color'}
            </Button>
         </ValidatorForm>
      </div>
   )
}