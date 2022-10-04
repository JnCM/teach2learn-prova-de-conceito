import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import api from '../../api';

export default function AlunoRow(props){

    async function editaAluno(){
        await api.alunoservice.getAluno(props.id).then(
            aluno => props.navigation.navigate("EditaAluno", aluno)
        );
    }

    function excluiAluno(){
        Alert.alert(
            "Atenção!",
            "Você tem certeza que deseja excluir este aluno?",
            [
                { text: "Não", onPress: () => {}, style: "cancel" },
                {
                    text: "Sim",
                    onPress: async () => await api.alunoservice.deletarAluno(props.id).then(
                        response => props.navigation.navigate("ListaAlunos", {id: props.id})
                    )
                }
            ],
            { cancelable: false }
        );
    }

    return (
        <View style={styles.container}>
          <Text style={styles.textItem}>{props.aluno}</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.deleteButton} onPress={excluiAluno}>
                <Icon name="trash" color="white" size={18}/>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.editButton} onPress={editaAluno}> 
                <Icon name="edit" color="white" size={18}/>
            </TouchableOpacity> 
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFFFFF',
      marginTop: 20,
      width: '100%'
    },
    buttonsContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
        paddingBottom: 10,
        marginTop: 10,
    },
    editButton: {
        marginLeft: 10,
        height: 40,
        backgroundColor: '#F0D757',
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center'
    },
    deleteButton: {
        marginLeft: 10,
        height: 40,
        backgroundColor: 'red',
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    textItem: {
        fontSize: 20,
    }
});