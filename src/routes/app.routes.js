import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';

const AppStack = createStackNavigator();

function AppRoutes(){
    return(
        <Home />
    );
}

export default AppRoutes;