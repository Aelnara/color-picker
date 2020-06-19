import React from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import clsx from 'clsx';
import ColorBoxStyles from './ColorBoxStyles';

export default function ColorBox(props) {
   const classes = ColorBoxStyles(props)
   const [copied, setCopied] = React.useState(false)
   
   const changeCopyState = () => {
      setCopied(true)
   }
   
   React.useEffect(() => {
      if(copied) setTimeout(() => setCopied(false), 1500)
   }, [copied])
   
   return (
      <CopyToClipboard text={props.background} onCopy={changeCopyState} >
         <div style={{background: props.background}} className={classes.ColorBox}>
            <div style={{background: props.background}} className={clsx(classes.copyOverlay, {[classes.showOverlay]: copied})}/>
            <div className={clsx(classes.copyMessage, {[classes.showMessage]: copied})}>
               <h1>copied!</h1>
               <p className={classes.copyText}>{props.background}</p>
            </div>
            <div>
               <div className={classes.boxContent}>
                  <span className={classes.colorName}>{props.name}</span>
               </div>
               <button className={classes.copyButton}>Copy</button>
            </div>
            {props.showingFullPalette && (
               <Link to={props.moreUrl} onClick={e => e.stopPropagation()}>
                  <span className={classes.seeMore}>More</span>
               </Link>
            )}
         </div>
      </CopyToClipboard>
   )
}