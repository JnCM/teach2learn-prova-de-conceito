import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather as Icon } from '@expo/vector-icons';

import components from '../components';

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
                initialRouteName={"ListaAlunos"}
            >
                <Screen name="ListaAlunos" component={components.Aluno.ListaAluno}
                    options={{
                        title: "Lista de alunos",
                        tabBarLabel: "Alunos",
                        tabBarIcon: ({ focused,color,size }) => (  
                            <Icon name="users" color={color} size={25}/>  
                        )  
                    }}
                />
                <Screen name="NovoAluno" component={components.Aluno.FormNovoAluno}
                    options={{
                        title: "Novo aluno",
                        tabBarLabel: "Novo aluno",
                        tabBarIcon: ({ focused,color,size }) => (  
                            <Icon name="user-plus" color={color} size={25}/>  
                        )
                    }}
                />
                <Screen name="EditaAluno" component={components.Aluno.FormEditaAluno}
                    options={{
                        title: "Editar aluno",
                        tabBarButton: () => null
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
}

export default Tab;