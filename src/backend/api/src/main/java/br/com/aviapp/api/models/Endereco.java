package br.com.aviapp.api.models;

public class Endereco {
  private String rua;
  private String cep;
  private String bairro;
  private String cidade;
  private String estado;

  public Endereco() {}

  public Endereco(String cep) {
    // construtor para pegar o endereco automatico
  }

  public Endereco(String rua, String cep, String bairro, String cidade, String estado) {
    this.rua = rua;
    this.cep = cep;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
  }

  public String getRua() {
    return this.rua;
  }

  public void setRua(String rua) {
    this.rua = rua;
  }

  public String getCep() {
    return this.cep;
  }

  public void setCep(String cep) {
    this.cep = cep;
  }

  public String getBairro() {
    return this.bairro;
  }

  public void setBairro(String bairro) {
    this.bairro = bairro;
  }

  public String getCidade() {
    return this.cidade;
  }

  public void setCidade(String cidade) {
    this.cidade = cidade;
  }

  public String getEstado() {
    return this.estado;
  }

  public void setEstado(String estado) {
    this.estado = estado;
  }

}
