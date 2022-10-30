package com.example.componente_backend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;

import com.example.componente_backend.repository.ComponenteRepository;

import java.util.List;
import java.util.Optional;

import com.example.componente_backend.model.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping(value="/componente_backend")
@CrossOrigin(origins = "http://localhost:4200")
public class ComponenteRestController {
    
    private final ComponenteRepository componenteRepository;

    @Autowired
    public ComponenteRestController(ComponenteRepository componenteRepository) {
        this.componenteRepository = componenteRepository;
    }

    @GetMapping(value = "/getComponente")
    public List<Componente> getAll(){
        return componenteRepository.findAll();
    }

    @GetMapping(value = "/getComponenta/{id}")
    public Optional<Componente> getById(@PathVariable("id") Integer id){
        return componenteRepository.findById(id);
    }

    @PutMapping(value="/putComponenta")
    public Componente actualizeazaComponente(@RequestBody Componente componenta){
        return componenteRepository.save(componenta);
    }

    @PostMapping(value = "/postComponenta")
    public Componente adaugaComponenta(@RequestBody Componente componenta){
        return componenteRepository.save(componenta);
    }

    @DeleteMapping(value = "/deleteComponenta/{id}")
    public void stergeComponenta(@PathVariable("id") Integer id){
        componenteRepository.deleteById(id);
    }
}
