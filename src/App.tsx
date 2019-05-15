import React from 'react';

import { StoreProvider } from '_modules/store/';
import NavigationService from '_navigation/NavigationService';
import AppNavigator from '_navigation/AppNavigator';
import App from '_components/baseApp'

export default function Test(){
  return(
    <StoreProvider>
      <AppNavigator ref={ navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}/>
    </StoreProvider>
  )
}