import { makeStyles } from '@material-ui/core/styles';
import sizes from 'utils/sizes';

export default makeStyles({
   Palette: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
   },
   colors: {
      height: '90%',
      display: 'flex',
      flexWrap: 'wrap'
   },
   goBack: {
      width: '20%',
      height: '50%',
      margin: '0 auto',
      // display: 'inline-block',
      position: 'relative',
      cursor: 'pointer',
      // marginBottom: '-3.5px',
      opacity: 1,
      backgroundColor: 'black',
      '& a': {
         color: 'white',
         width: '100px',
         height: '30px',
         position: 'absolute',
         display: 'inline-block',
         top: '50%',
         left: '50%',
         marginLeft: '-50px',
         marginTop: '-15px',
         textAlign: 'center',
         outline: 'none',
         border: 'none',
         background: 'rgba(255, 255, 255, 0.3)',
         fontSize: '1rem',
         lineHeight: '30px',
         textTransform: 'uppercase',
         textDecoration: 'none'
      },
      [sizes.down('md')]: {
         width: '50%',
         height: '20%',
      },
      [sizes.down('xs')]: {
         width: '100%',
         height: '10%'
      },
   }
})