import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Keyboard } from 'react-native';
import { Feather as Icon, MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';

export default function FormAluno({ route, navigation }) {
    const id = route.params ? route.params.id : 0;
    const [matricula, setMatricula] = useState('');
    const [nomeCompleto, setNomeCompleto] = useState('');

    useEffect(() => {
        if(!route.params) return;
        setMatricula(route.params.matricula.toString());
        setNomeCompleto(route.params.nome);
    }, [route]);

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
                        routes: [{name: "Lista de alunos"}]
                    });
                    navigation.navigate("Lista de alunos", aluno);
                },
                style: "OK"
            }]
        );
    }

    function validaCampos(){
        if(matricula === "" || nomeCompleto === "")
            return false;
        return true;
    }

    async function salvaAluno(){
        if(validaCampos()){
            Keyboard.dismiss();
            if(id != 0){
                const data = {'id': id, 'matricula': parseInt(matricula), 'nome': nomeCompleto};
                await axios.put(
                    `http://192.168.1.6:8080/alunos`,
                    data
                ).then(function (response){
                    const aluno = response.data;
                    showResult(aluno);
                }).catch(function (error){
                    alert(error.message);
                });
            }else{
                const data = {'matricula': parseInt(matricula), 'nome': nomeCompleto};
                await axios.post(
                    "http://192.168.1.6:8080/alunos",
                    data
                ).then(function (response){
                    const aluno = response.data;
                    showResult(aluno);
                }).catch(function (error){
                    alert(error.message);
                });
            }
        } else {
            Alert.alert(
                "Atenção!",
                "Preencha todos os campos.",
                [{
                    text: "OK",
                    onPress: ()=>{},
                    style: "OK"
                }]
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CCE5FF',
        alignItems: 'center',
    },
    title: {
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
    },
    inputContainer: {
        flex: 1,
        marginTop: 30,
        width: '90%',
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'stretch',
        backgroundColor: '#fff',
    },
    input: {
        marginTop: 10,
        height: 60,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#CCE5FF',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'stretch',
    },
    button: {
        marginTop: 25,
        height: 60,
        backgroundColor: 'blue',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20,
        shadowOpacity: 20,
        shadowColor: '#ccc',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 10,
        fontSize: 18,
    },
    buttonClear: {
        marginTop: 10,
        height: 60,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20,
        shadowOpacity: 20,
        shadowColor: '#ccc',
    },
    buttonTextClear: {
        color: 'blue',
        fontWeight: 'bold',
        marginLeft: 10,
        fontSize: 18,
    },
    buttonContainer: {
        flexDirection: "row"
    },
});
