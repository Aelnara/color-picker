import { makeStyles } from '@material-ui/core/styles';
import sizes from 'utils/sizes';
import background from 'assets/background.svg'

export default makeStyles({
   '@global': {
      '.fade-exit': {
         opacity: '1',
      },
      '.fade-exit-active': {
         opacity: '0',
         transition: 'opacity 500ms ease-out'
      }
   },
   root: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      /* background by SVGBackgrounds.com */
      backgroundColor: '#000000',
      backgroundImage: `url(${background})`,
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      overflow: 'auto'
   },
   heading: {
      fontSize: '2rem'
   },
   container: {
      width: '50%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      paddingBottom: '2rem',
      [sizes.down('xl')]: {
         width: '80%'
      },
      [sizes.down('xs')]: {
         width: '75%'
      }
   },
   nav: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'white',
      '& a': {
         color: 'white'
      }
   },
   palettes: {
      width: '100%',
      boxSizing: 'border-box',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 30%)',
      gridGap: '2.5rem',
      [sizes.down('md')]: {
         gridTemplateColumns: 'repeat(2, 50%)'
      },
      [sizes.down('xs')]: {
         gridTemplateColumns: 'repeat(1, 100%)',
         gridGap: '1.4rem'
      }
   }
})