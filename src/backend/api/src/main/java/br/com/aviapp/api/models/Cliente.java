package br.com.aviapp.api.models;

public class Cliente {
  private String nome;
  private String email;
  private String cnpj;
  private String telefone;

  public Cliente(String nome, String email, String cnpj, String telefone) {
    this.nome = nome;
    
  }

  public String getNome() {
    return this.nome;
  }

  public void setNome(String nome) {
    this.nome = nome.toUpperCase();
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

}
