import { makeStyles } from '@material-ui/core/styles';
import sizes from 'utils/sizes';

const drawerWidth = 400;

export default makeStyles(theme => ({
   root: {
      display: 'flex'
   },
   hide: {
      display: 'none',
   },
   appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen,
      }),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
   },
   appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
         easing: theme.transitions.easing.easeOut,
         duration: theme.transitions.duration.enteringScreen,
      }),
   },
   menuButton: {
      marginRight: theme.spacing(2),
   },
   navButtons: {
      marginRight: '1rem',
      '& a': {
         textDecoration: 'none'
      },
      [sizes.down('xs')]: {
         marginRight: '0.5rem'
      }
   },
   button: {
      margin: '0.5rem',
      [sizes.down('xs')]: {
         margin: '0 0.2rem',
         padding: '0.3rem'
      }
   }
}))