package br.com.teach2learn.api.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import br.com.teach2learn.api.dao.AlunoDAO;
import br.com.teach2learn.api.entities.Aluno;

@RequestMapping("alunos")
@RestController
public class AlunoController {

    @Autowired
    private AlunoDAO alunoDAO;

    @GetMapping
    public List<Aluno> alunos(){
       return alunoDAO.findAll();
    }

    @GetMapping(value = "/{id}")
    public Aluno getAlunoById(@PathVariable("id") long id){
        Optional<Aluno> aluno = alunoDAO.findById(id);

        if(aluno.isPresent()){
            return aluno.get();
        }else{
            return null;
        }
    }

    @PostMapping
    public Aluno addAluno(@RequestBody Aluno novoAluno){
        Aluno aluno = alunoDAO.save(novoAluno);
        return aluno;
    }

    @PutMapping
    public Aluno updateAluno(@RequestBody Aluno novoAluno){
        Aluno aluno = alunoDAO.findById(novoAluno.getId()).get();
        aluno = novoAluno;
        return alunoDAO.save(aluno);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteAluno(@PathVariable("id") long id){
        alunoDAO.deleteById(id);
    }
}
