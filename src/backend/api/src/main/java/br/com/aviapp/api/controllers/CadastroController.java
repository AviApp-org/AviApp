package br.com.aviapp.api.controllers;

import br.com.aviapp.api.utils.EmailValidator;

public class CadastroController {
  public void novoCliente(String nome, String email, String cnpj, String telefone) {
    if (!EmailValidator.validate(email)) {
      
    }
  }
  
}
