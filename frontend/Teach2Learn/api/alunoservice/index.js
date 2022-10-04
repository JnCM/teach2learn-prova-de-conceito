import axios from 'axios';
import constants from '../constants';

async function salvarAluno(aluno){
    const data = {'matricula': aluno.matricula, 'nome': aluno.nome};
    try{
        const response = await axios.post(`${constants.baseUrl}/alunos`, data);
        return response.data;
    } catch (error) {
        return error.message;
    }
}

async function editarAluno(aluno){
    const data = {'id': aluno.id, 'matricula': aluno.matricula, 'nome': aluno.nome};
    try{
        const response = await axios.put(`${constants.baseUrl}/alunos`, data);
        return response.data;
    } catch (error) {
        return error.message;
    }
}

async function getAlunos(){
    try {
        const response = await axios.get(`${constants.baseUrl}/alunos`);
        return response.data;
    } catch (error) {
        console.log(error.message);
        return [];
    }
}

async function getAluno(id){
    try {
        const response = await axios.get(`${constants.baseUrl}/alunos/${id}`);
        return response.data;
    } catch (error) {
        console.log(error.message);
        return undefined;
    }
}

async function deletarAluno(id){
    try {
        const response = await axios.delete(`${constants.baseUrl}/alunos/${id}`);
        return true;
    } catch (error) {
        console.log(error.message);
        return false;
    }
}

export default {salvarAluno, editarAluno, deletarAluno, getAlunos, getAluno};