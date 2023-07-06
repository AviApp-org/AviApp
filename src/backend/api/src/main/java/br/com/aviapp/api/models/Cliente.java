package br.com.aviapp.api.models;

import br.com.aviapp.api.enums.EnumStatusCliente;

public class Cliente {
  private String nome;
  private String email;
  private String cnpj;
  private String telefone;
  private EnumStatusCliente status;

  public Cliente(String nome, String email, String cnpj, String telefone) {
    this.nome = nome;
    this.email = email;
    this.cnpj = cnpj;
    this.telefone = telefone;
    this.status = EnumStatusCliente.ATIVO;
  }

  public String getNome() {
    return this.nome;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public String getEmail() {
    return this.email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getCnpj() {
    return this.cnpj;
  }

  public void setCnpj(String cnpj) {
    this.cnpj = cnpj;
  }

  public String getTelefone() {
    return this.telefone;
  }

  public void setTelefone(String telefone) {
    this.telefone = telefone;
  }

  public EnumStatusCliente getStatus() {
    return this.status;
  }

  public void setStatus(EnumStatusCliente status) {
    this.status = status;
  }
  
}
