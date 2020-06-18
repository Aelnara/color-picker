import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ColorFormatProvider } from 'contexts/ColorFormatContext';
import { PalettesProvider } from 'contexts/PalettesContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Palette from 'components/Palette/Palette';
import PaletteList from 'components/PaletteList/PaletteList';
import SingleColorPalette from 'components/SingleColorPalette/SingleColorPalette';
import NewPaletteForm from 'components/NewPaletteForm/NewPaletteForm';
import Page from 'components/Page/Page'

export default function App() {
   return (
      <PalettesProvider>
         <ColorFormatProvider>
            <Route render={({location}) => (
               <TransitionGroup>
                  <CSSTransition key={location.key} classNames='page' timeout={300}>
                     <Switch location={location}>
                        <Route exact path='/' render={routeProps => <Page><PaletteList {...routeProps} /></Page>} />
                        <Route exact path='/palette/new' render={routeProps => <Page><NewPaletteForm {...routeProps} /></Page>} />
                        <Route exact path='/palette/:id' render={routeProps => <Page><Palette {...routeProps} /></Page>} />
                        <Route exact path='/palette/:paletteId/:colorId' render={routeProps => <Page><SingleColorPalette {...routeProps} /></Page>} />
                        <Route render={() => <Redirect to='/' />}/>
                     </Switch>
                  </CSSTransition>
               </TransitionGroup>
            )} />
         </ColorFormatProvider>
      </PalettesProvider>
   );
}
