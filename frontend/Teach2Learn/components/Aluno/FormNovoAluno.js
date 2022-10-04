import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Keyboard } from 'react-native';
import { Feather as Icon, MaterialIcons } from '@expo/vector-icons';

import utils from '../../utils';
import api from '../../api';
import styles from './styles';

export default function FormNovoAluno({ route, navigation }) {

    const [matricula, setMatricula] = useState('');
    const [nomeCompleto, setNomeCompleto] = useState('');

    function changeMatricula(novaMatricula) {
        setMatricula(novaMatricula);
    }

    function changeNomeCompleto(novoNomeCompleto){
        setNomeCompleto(novoNomeCompleto);
    }

    function limpaCampos(){
        setMatricula('');
        setNomeCompleto('');
    }
    
    function showResult(aluno){
        Alert.alert(
            "Aluno salvo com sucesso!",
            `ID: ${aluno.id}\nMatrícula: ${aluno.matricula}\nNome: ${aluno.nome}`,
            [{
                text: "OK",
                onPress: ()=>{
                    limpaCampos();
                    navigation.reset({
                        index: 0,
                        routes: [{name: "ListaAlunos"}]
                    });
                },
                style: "OK"
            }]
        );
    }

    async function salvaAluno(){
        if(utils.validaCampos(matricula, nomeCompleto)){
            Keyboard.dismiss();
            const data = {'matricula': parseInt(matricula), 'nome': nomeCompleto};
            await api.alunoservice.salvarAluno(data).then((aluno) => {
                showResult(aluno);
                // navigation.navigate("ListaAlunos", aluno);
            }).catch((error)=>{
                alert(error.message);
            });
        } else {
            Alert.alert(
                "Atenção!", "Preencha todos os campos.",
                [{ text: "OK", onPress: ()=>{}, style: "OK"}]
            );
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Preencha os dados do aluno</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Matrícula"
                    keyboardType={'numeric'}
                    clearButtonMode="while-editing"
                    onChangeText={changeMatricula}
                    value={matricula}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Nome completo"
                    clearButtonMode="while-editing"
                    onChangeText={changeNomeCompleto}
                    value={nomeCompleto}
                />
                <TouchableOpacity style={styles.button} onPress={salvaAluno}>
                    <View style={styles.buttonContainer}>
                        <Icon name="save" size={22} color="white"/>
                        <Text style={styles.buttonText}>Salvar</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonClear} onPress={limpaCampos}>
                    <View style={styles.buttonContainer}>
                        <MaterialIcons name="cleaning-services" size={22} color="blue"/>
                        <Text style={styles.buttonTextClear}>Limpar campos</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto"/>
        </View>
    );
}
