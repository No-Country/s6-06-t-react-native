import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from '../authnavigation/auth';
import { useSelector } from 'react-redux';

const AppNavigator = () => {
    
     const isAuthenticated = useSelector(state => state.stateGlobal);
    return (
        <NavigationContainer>
            {!isAuthenticated && <AuthNavigator />}
               
        </NavigationContainer>
    )
}

export default AppNavigator;