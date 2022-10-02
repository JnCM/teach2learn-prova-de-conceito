package br.com.teach2learn.api.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.teach2learn.api.entities.Aluno;

public interface AlunoDAO extends JpaRepository<Aluno, Long> { }
