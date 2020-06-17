import React from 'react';
import { ColorFormatContext } from 'contexts/ColorFormatContext';
import { Link } from 'react-router-dom';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import NavbarStyles from './NavbarStyles';

export default function Navbar(props) {
   const classes = NavbarStyles()
   const { colorFormat, changeColorFormat } = React.useContext(ColorFormatContext);
   const [open, setOpen] = React.useState(false)
   
   const handleFormatChange = (e) => {
      changeColorFormat(e.target.value)
      setOpen(true)
   }
   
   const closeSnackbar = () => {
      setOpen(false)
   }
   
   return (
      <header className={classes.Navbar}>
         <div className={classes.logo}>
            <Link to='/'>ReactColorPicker</Link>
         </div>
         {!props.singleColor && (
            <div>
               <span>Level: {props.level}</span>
               <div className={classes.slider}>
                  <Slider defaultValue={props.level} min={100} max={900} step={100} onAfterChange={props.changeLevel} />
               </div>
            </div>
         )}
         <div className={classes.selectContainer}>
            <Select value={colorFormat} onChange={handleFormatChange}>
               <MenuItem value='hex'>HEX - #ffffff</MenuItem>
               <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
               <MenuItem value='rgba'>RGBA - rgba(255,255,255,1.0)</MenuItem>
            </Select>
         </div>
         <Snackbar 
            anchorOrigin={{vertical: 'bottom', horizontal: 'left'}} 
            open={open} 
            autoHideDuration={3000}
            message={<span>Format Changed To {colorFormat.toUpperCase()}</span>}
            onClose={closeSnackbar}
            action={[
               <IconButton onClick={closeSnackbar} color='inherit' key='close' aria-label='close'>
                  <CloseIcon />
               </IconButton>
            ]}
         />
      </header>
   );
}
