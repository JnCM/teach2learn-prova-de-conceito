function validaCampos(matricula, nomeCompleto){
    if(matricula === "" || nomeCompleto === "")
        return false;
    return true;
}

export default {validaCampos};