import React from 'react';
import MiniPaletteStyles from './MiniPaletteStyles';
import DeleteIcon from '@material-ui/icons/Delete'

export default function MiniPalette(props) {
   const classes = MiniPaletteStyles()
   
   const miniColorBoxes = props.colors.map(color => (
      <div className={classes.miniColor} style={{backgroundColor: color.color}} key={color.name} />
   ))
   
   const handleDelete = (e) => {
      e.stopPropagation()
      props.openDialog(props.id)
   }
   
   return (
      <div className={classes.root} onClick={props.goToPalette}>
         <DeleteIcon className={classes.deleteIcon} onClick={handleDelete}/>
         <div className={classes.colors}>
            {miniColorBoxes}
         </div>
         <h5 className={classes.title}>{props.paletteName}</h5>
      </div>
   )
}