import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ListaItem from './ListaItem';

export default function ListaAluno({ route, navigation }) {
    const [alunos, setAlunos] = useState([]);

    async function getAlunos(){
        try {
            const response = await axios.get("http://192.168.1.6:8080/alunos");
            return response.data;
        } catch (error) {
            alert(error.message);
            return [];
        }
    }

    useEffect(() => {
        getAlunos().then(alunos => setAlunos(alunos));
    }, [route]);

    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <Text style={styles.title}>Alunos cadastrados</Text>
            <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.itemsContainer}>
                {
                    alunos.map(aluno => {
                        return <ListaItem
                                    key={aluno.id}
                                    id={aluno.id}
                                    aluno={aluno.matricula + ' - ' + aluno.nome}
                                    navigation={navigation}
                                />
                    })
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CCE5FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 20
    },
    scrollContainer: {
        flex: 1,
        width: '90%'
    },
    itemsContainer: {
        flexGrow: 1,
        marginTop: 10,
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'stretch',
        backgroundColor: '#fff'
    },
});
