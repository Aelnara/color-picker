import React from 'react';
import { PalettesContext } from 'contexts/PalettesContext';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default function PaletteMetaForm(props) {
   const [newPaletteName, setNewPaletteName] = React.useState('')
   const { palettes } = React.useContext(PalettesContext)
   
   
   React.useEffect(() => {
      ValidatorForm.addValidationRule('paletteNameUnique', value => {
         return palettes.every(({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase())
      })
   });
   
   const handlePaletteNameChange = (e) => {
      setNewPaletteName(e.target.value)
   }
   
   const handleSubmit = () => {
      props.handleSubmit(newPaletteName)
      props.hideForm()
   }
   
   return (
      <Dialog open={props.formShowing} onClose={props.hideForm} aria-labelledby="form-dialog-title">
         <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
         <ValidatorForm onSubmit={handleSubmit}>
            <DialogContent>
               <DialogContentText>
                  Please enter a name for your new palette. Make sure it's unique!
               </DialogContentText>
               <TextValidator 
                  autoFocus
                  label='Palette Name' 
                  fullWidth
                  margin='normal'
                  value={newPaletteName} 
                  onChange={handlePaletteNameChange}
                  validators={['required', 'paletteNameUnique']}
                  errorMessages={['Enter palette name!', 'Palette name already used!']}
               />
            </DialogContent>
            <DialogActions>
               <Button onClick={props.hideForm} color="primary">Cancel</Button>
               <Button variant='contained' color='primary' type='submit'>Save Palette</Button>
            </DialogActions>
         </ValidatorForm>
      </Dialog>
   )
}