package br.com.angularjs.cursoangularjs;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pessoaController")
public class PessoaController {

	//rest/pessoaController/olaMundo?nome=Jullierme
	@RequestMapping(value = "/olaMundo", method = {RequestMethod.POST, RequestMethod.GET})
	public String olaMundo(@RequestParam("nome") String nome) {
		return "Olá " + nome;
	}

	@RequestMapping(value = "/salvar", method = RequestMethod.POST)
	public Pessoa salvar(@RequestBody Pessoa pessoa) {
		return pessoa;
	}

	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public List<Pessoa> list() {
		List<Pessoa> lista = new ArrayList<>();

		Pessoa p = new Pessoa();
		p.setNascimento(new Date());
		p.setNome("Fulano");
		p.setSobrenome("Barros");
		p.setCor("#CEECF5");
		
		lista.add(p);

		p = new Pessoa();
		p.setNascimento(new Date());
		p.setNome("Siclano");
		p.setSobrenome("Beltrano");
		p.setCor("#81F7BE");
		
		lista.add(p);

		return lista;
	}

}
