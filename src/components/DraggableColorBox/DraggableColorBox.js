import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import DeleteIcon from '@material-ui/icons/Delete';
import DraggableColorBoxStyles from './DraggableColorBoxStyles';

const DraggableColorBox = SortableElement((props) => {
   const classes = DraggableColorBoxStyles();
   return (
      <div className={classes.root} style={{backgroundColor: props.color}}>
         <div className={classes.boxContent}>
            <span>{props.name}</span>
            <DeleteIcon className={classes.deleteIcon} onClick={props.handleClick}/>
         </div>
      </div>
   )
})

export default DraggableColorBox