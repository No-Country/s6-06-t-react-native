import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from '../authnavigation/auth';
import { useSelector } from 'react-redux';
import DrawerNavegation from '../drawerNavigation/drawer';

const AppNavigator = () => {
    
     const isAuthenticated = useSelector(state => state.stateGlobal);
    return (
        <NavigationContainer>
            {!isAuthenticated && <AuthNavigator />}
            {isAuthenticated && <DrawerNavegation />}
        </NavigationContainer>
    )
}

export default AppNavigator;