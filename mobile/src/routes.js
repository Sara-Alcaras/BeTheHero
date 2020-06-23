import React from 'react';
import { NavagationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navagation/stack';

const AppStack = createStackNavigator();

import Incidents from './pages/incidents';
import Detail from './pages/Detail';

export default function Routes() {
    return (
        <NavagationContainer>
            <AppStack.Navigator>
                <AppStack.Screen name="Incidents" component={Incidents} />
                <AppStack.Screen name="Detail" component={Detail} />

            </AppStack.Navigator>


        </NavagationContainer>
    );
}