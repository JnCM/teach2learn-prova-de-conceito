import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import AlunoRow from './AlunoRow';
import api from '../../api';
import styles from './styles';

export default function ListaAluno({ route, navigation }) {
    
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        api.alunoservice.getAlunos().then(alunos => setAlunos(alunos));
    }, [route]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Alunos cadastrados</Text>
            <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.itemsContainer}>
                {alunos.map(aluno => {
                    return <AlunoRow key={aluno.id} id={aluno.id}
                        aluno={aluno.matricula + ' - ' + aluno.nome}
                        navigation={navigation}
                    />
                })}
            </ScrollView>
            <StatusBar style="auto"/>
        </View>
    );
}
