package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final InstrumentoRepository repositoryI;
	private final MusicoRepository repositoryM;

	@Autowired
	public DatabaseLoader(InstrumentoRepository repositoryI, MusicoRepository repositoryM) {
		this.repositoryI = repositoryI;
		this.repositoryM = repositoryM;
	}

	@Override
	public void run(String... strings) throws Exception {
		
		this.repositoryI.save(new Instrumento("Guitarra", "Cuerda", "de madera, con caja de resonancia, 6 cuerdas templadas"));
		this.repositoryI.save(new Instrumento("Ukelele", "Cuerda", "de madera, con caja de resonancia pequeña, 4 cuerdas templadas"));
		this.repositoryI.save(new Instrumento("Melódica", "Viento", "Teclado pequeño de 2 octavas, sonorisado por soplido"));
		
		this.repositoryM.save(new Musico("M1"));

	}

	
}