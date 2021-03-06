import { makeStyles } from '@material-ui/core/styles';
import chroma from 'chroma-js';
import sizes from 'utils/sizes';

export default makeStyles({
   root: {
      width: '20%',
      height: '25%',
      margin: '0 auto',
      display: 'inline-block',
      position: 'relative',
      cursor: 'pointer',
      marginBottom: '-6px',
      '&:hover svg': {
         color: 'white',
         transform: 'scale(1.5)'
      },
      [sizes.down('lg')]: {
         width: '25%',
         height: '20%'
      },
      [sizes.down('md')]: {
         width: '50%',
         height: '10%'
      },
      [sizes.down('sm')]: {
         width: '100%',
         height: '5%'
      }
   },
   boxContent: {
      color: props => chroma(props.color).luminance() <= 0.08 ? 'white' : 'rgba(0,0,0,0.6)',
      position: 'absolute',
      left: '0px',
      bottom: '0px',
      boxSizing: 'border-box',
      width: '100%',
      padding: '10px',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      fontSize: '12px',
      display: 'flex',
      justifyContent: 'space-between'
   },
   deleteIcon: {
      transition: 'all 0.2s ease-in-out'
   }
});