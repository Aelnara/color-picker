import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import PaletteFormNavStyles from './PaletteFormNavStyles';
import PaletteMetaForm from 'components/PaletteMetaForm/PaletteMetaForm';

export default function PaletteFormNav(props) {
   const classes = PaletteFormNavStyles()
   const [formShowing, setFormShowing] = React.useState(false);
   
   const showForm = () => {
      setFormShowing(true)
   }
   
   const hideForm = () => {
      setFormShowing(false)
   }
   
   return (
      <div className={classes.root}>
         <AppBar
            position="fixed"
            color='default'
            className={clsx(classes.appBar, {[classes.appBarShift]: props.open})}
         >
            <Toolbar>
               <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={props.handleDrawerOpen}
                  edge="start"
                  className={clsx(classes.menuButton, {[classes.hide]: props.open})}
               >
                  <AddToPhotosIcon />
               </IconButton>
               <Typography variant="h6" noWrap>
                  Create A Palette
               </Typography>
            </Toolbar>
            <div className={classes.navButtons}>
               <Link to='/'>
                  <Button variant='contained' color='secondary' className={classes.button}>Back</Button>
               </Link>
               <Button variant="contained" color="primary" onClick={showForm} className={classes.button}>Save</Button>
            </div>
         </AppBar>
         {formShowing && <PaletteMetaForm handleSubmit={props.handleSubmit} hideForm={hideForm} formShowing={formShowing} />}
      </div>
   )
}