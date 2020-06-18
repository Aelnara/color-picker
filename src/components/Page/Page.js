import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
   '@global': {
      '.page-enter': {
         opacity: '0'
      },
      '.page-enter-active': {
         opacity: '1'
      },
      '.page-exit-active': {
         opacity: '0'
      }
   },
   page: {
      width: '100%',
      height: '100vh',
      position: 'fixed',
      top: '0',
      transition: 'opacity 500ms ease-in-out'
   }
});

export default function Page({children}) {
   const classes = useStyles();
   return <section className={classes.page}>{children}</section>;
}
