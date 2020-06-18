import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
   PaletteFooter: {
      backgroundColor: 'white',
      height: '5vh',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingRight: '1rem',
      fontFamily: 'Roboto',
      fontWeight: '700',
      '& span': {
         display: 'flex',
         alignItems: 'center',
         '& svg': {
            padding: '0 5px'
         }
      }
   }
});