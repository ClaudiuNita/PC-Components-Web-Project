package com.example.componente_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.componente_backend.model.Componente;

public interface ComponenteRepository extends JpaRepository<Componente, Integer> {
    
}
