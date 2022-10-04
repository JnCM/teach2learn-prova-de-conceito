import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather as Icon } from '@expo/vector-icons';

import ListaAluno from './ListaAluno';
import FormAluno from './FormAluno';

const { Navigator, Screen } = createBottomTabNavigator();

function Tab() {

    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{
                    tabBarStyle: { height: 60 },
                    activeTintColor: '#FFFFFF',
                    inactiveTintColor: '#000000',
                    tabBarActiveTintColor: "#FFFFFF",
                    tabBarInactiveTintColor: "#000000",
                    tabBarActiveBackgroundColor: "#0066CC",
                    tabBarInactiveBackgroundColor: "#FAFAFC",
                    tabBarLabelStyle: { fontSize: 15 }
                }}
            >
                <Screen name="Lista de alunos" component={ListaAluno}
                    options={{
                        tabBarLabel: "Alunos",
                        tabBarIcon: ({ focused,color,size }) => (  
                            <Icon name="users" color={color} size={25}/>  
                        )  
                    }}
                />
                <Screen name="Novo aluno" component={FormAluno}
                    options={{
                        tabBarLabel: "Novo aluno",
                        tabBarIcon: ({ focused,color,size }) => (  
                            <Icon name="user-plus" color={color} size={25}/>  
                        ),
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
}

export default Tab;