package com.example.componente_backend;

import java.util.stream.Stream;

import com.example.componente_backend.model.Componente;
import com.example.componente_backend.repository.ComponenteRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ComponenteBackendApplication {

	@Bean
	CommandLineRunner runner(ComponenteRepository sr) {
		Componente[] componente = new Componente[] { new Componente("i5 10400", "Intel", 120), 
		new Componente("1700AF", "AMD", 100), new Componente("i5 10600KF", "Intel", 200),
		new Componente("MSI Radeon RX 6700 XT", "AMD", 910), new Componente("Gainward GeForce GTX 1650", "NVIDIA", 280)
	};

		return args -> Stream.of(componente).forEach(sr::save);
	}

	public static void main(String[] args) {
		SpringApplication.run(ComponenteBackendApplication.class, args);
	}

}
