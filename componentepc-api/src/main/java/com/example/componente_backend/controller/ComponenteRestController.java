package com.example.componente_backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.componente_backend.model.Componente;
import com.example.componente_backend.repository.ComponenteRepository;

@RestController
@RequestMapping(value="/componente-backend")
@CrossOrigin(origins = "http://localhost:4200")
public class ComponenteRestController {
    
    private final ComponenteRepository componenteRepository;

    @Autowired
    public ComponenteRestController(ComponenteRepository componenteRepository) {
        this.componenteRepository = componenteRepository;
    }

    @GetMapping(value = "/componente")
    public List<Componente> getAll(){
        return componenteRepository.findAll();
    }

    @GetMapping(value = "/componenta/{id}")
    public Optional<Componente> getById(@PathVariable("id") Integer id){
        return componenteRepository.findById(id);
    }

    @PutMapping(value="/update")
    public Componente actualizeazaComponente(@RequestBody Componente componenta){
        return componenteRepository.save(componenta);
    }

    @PostMapping(value = "/add")
    public Componente adaugaComponenta(@RequestBody Componente componenta){
        return componenteRepository.save(componenta);
    }

    @DeleteMapping(value = "/delete/{id}")
    public void stergeComponenta(@PathVariable("id") Integer id){
        componenteRepository.deleteById(id);
    }
}
