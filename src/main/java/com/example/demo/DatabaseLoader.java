package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final InstrumentoRepository repositoryI;
	private final MusicoRepository repositoryM;
	private final BandaRepository repositoryB;
	private final IntegranteRepository repositoryN;

	@Autowired
	public DatabaseLoader(
		InstrumentoRepository repositoryI,
		 MusicoRepository repositoryM,
		 BandaRepository repositoryB,
		 IntegranteRepository repositoryN) {
		this.repositoryI = repositoryI;
		this.repositoryM = repositoryM;
		this.repositoryB = repositoryB;
		this.repositoryN = repositoryN;
	}

	@Override
	public void run(String... strings) throws Exception {
		
		Instrumento iVoz = new Instrumento("Voz", "Viento", "Voz humana");
		Instrumento iGuitarrElectrica = new Instrumento("Guitarra Eléctrica", "Eléctrica", "de madera, SIN caja de resonancia, 6 cuerdas templadas metálicas, pastillas y amplificador");
		Instrumento iBajo = new Instrumento("Bajo", "Eléctrico", "Ritmos");
		this.repositoryI.save(new Instrumento("Guitarra Acústica", "Cuerda", "de madera, con caja de resonancia, 6 cuerdas templadas"));
		this.repositoryI.save(new Instrumento("Ukelele","Cuerda","de madera, con caja de resonancia pequeña, 4 cuerdas templadas"));
		this.repositoryI.save(new Instrumento("Melódica","Viento","teclado pequeño de 2 octavas, sonorizado por soplido"));
		this.repositoryI.save(iVoz);
		this.repositoryI.save(iGuitarrElectrica);
		this.repositoryI.save(iBajo);
		this.repositoryI.save(new Instrumento("Batería", "Percusión", "Percisiones"));

		Musico mFreddie = new Musico("Freddie");
		Musico mBrian = new Musico("Brian");
		Musico mRogerWaters = new Musico("Roger Waters");
		this.repositoryM.save(mFreddie);
		this.repositoryM.save(mBrian);
		this.repositoryM.save(mRogerWaters);
		this.repositoryM.save(new Musico("Roger"));

		Banda bQueen = new Banda("Queen");
		Banda bPinkFloyd = new Banda("Pink Floyd");
		this.repositoryB.save(bQueen);
		this.repositoryB.save(bPinkFloyd);

		Integrante intFreddie = new Integrante(bQueen, mFreddie, iVoz);
		this.repositoryN.save(intFreddie);
		Integrante intBrian = new Integrante(bQueen, mBrian, iGuitarrElectrica);
		this.repositoryN.save(intBrian);
		Integrante intRogerWaters = new Integrante(bPinkFloyd, mRogerWaters, iBajo);
		this.repositoryN.save(intRogerWaters);


	}
	
}