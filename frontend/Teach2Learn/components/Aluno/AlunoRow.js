import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import api from '../../api';
import styles from './styles';

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
        <View style={styles.containerRow}>
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
