import React from 'react';
import { PalettesContext } from 'contexts/PalettesContext';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DraggableColorList from 'components/DraggableColorList/DraggableColorList';
import PaletteFormNav from 'components/PaletteFormNav/PaletteFormNav';
import ColorPickerForm from 'components/ColorPickerForm/ColorPickerForm';
import arrayMove from "array-move";
import NewPaletteFormStyles from './NewPaletteFormStyles';

export default function NewPaletteForm(props, {maxColors=20}) {
   const classes = NewPaletteFormStyles();
   const { palettes, savePalette } = React.useContext(PalettesContext);
   const [open, setOpen] = React.useState(true);
   const [colors, setColors] = React.useState(palettes[0].colors);
   
   const paletteIsFull = colors.length >= maxColors
   
   const handleDrawerOpen = () => {
      setOpen(true);
   };
   
   const handleDrawerClose = () => {
      setOpen(false);
   };
   
   const addNewColor = (newColor) => {
      setColors([...colors, newColor])
   }
   
   const handleSubmit = (newPaletteName) => {
      const newPalette = {
         paletteName: newPaletteName,
         id: newPaletteName.toLowerCase().replace(/ /g, '-'),
         colors
      }
      savePalette(newPalette)
      props.history.push('/')
   }
   
   const removeColor = (colorName) => {
      setColors(colors.filter(color => color.name !== colorName))
   }
   
   const clearColors = () => {
      setColors([])
   }
   
   const addRandomColor = () => {
      const allColors = palettes.map(p => p.colors).flat()
      const rand = Math.floor(Math.random() * allColors.length)
      const randomColor = allColors[rand]
      setColors([...colors, randomColor])
   }
   
   const onSortEnd = ({oldIndex, newIndex}) => {
      setColors(arrayMove(colors, oldIndex, newIndex))
   }

   return (
      <div className={classes.root}>
         <PaletteFormNav open={open} handleSubmit={handleSubmit} handleDrawerOpen={handleDrawerOpen}/>
         <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
               paper: classes.drawerPaper,
            }}
         >
            <div className={classes.drawerHeader}>
               <IconButton onClick={handleDrawerClose}>
                  <ChevronLeftIcon />
               </IconButton>
            </div>
            <Divider />
            <div className={classes.container}>
               <Typography variant='h4' gutterBottom>Design Your Palette</Typography>
               <div className={classes.buttons}>
                  <Button className={classes.button} variant='contained' color='secondary' onClick={clearColors}>Clear Palette</Button>
                  <Button className={classes.button} variant='contained' color='primary' onClick={addRandomColor} disabled={paletteIsFull}>Random Color</Button>
               </div>
               <ColorPickerForm paletteIsFull={paletteIsFull} colors={colors} addNewColor={addNewColor}/>
            </div>
         </Drawer>
         <main
            className={clsx(classes.content, {
               [classes.contentShift]: open,
            })}
         >
            <div className={classes.drawerHeader} />
            <DraggableColorList colors={colors} removeColor={removeColor} axis='xy' onSortEnd={onSortEnd} distance={5}/>
         </main>
      </div>
   );
}