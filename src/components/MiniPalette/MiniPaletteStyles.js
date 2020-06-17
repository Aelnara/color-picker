import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
   root: {
      backgroundColor: 'white',
      border: '1px solid black',
      borderRadius: '5px',
      padding: '0.5rem',
      position: 'relative',
      overflow: 'hidden',
      cursor: 'pointer',
      '&:hover svg': {
         opacity: '1'
      }
   },
   colors: {
      width: '100%',
      height: '150px',
      backgroundColor: '#dae1e3',
      overflow: 'hidden',
      borderRadius: '5px'
   },
   title: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 0,
      color: 'black',
      paddingTop: '0.5rem',
      fontSize: '1rem',
      position: 'relative'
   },
   miniColor: {
      width: '20%',
      height: '25%',
      display: 'inline-block',
      margin: '0 auto',
      position: 'relative',
      marginBottom: '-4px'
   },
   deleteIcon: {
      width: '20px',
      height: '20px',
      color: 'white',
      backgroundColor: '#eb3d30',
      position: 'absolute',
      top: '0',
      right: '0',
      padding: '10px',
      zIndex: '5',
      opacity: '0',
      transition: 'all 0.2s ease-in-out'
   }
})