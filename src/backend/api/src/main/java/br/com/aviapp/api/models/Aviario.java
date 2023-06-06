package br.com.aviapp.api.models;

public class Aviario {
  Integer quantidadeDeAvesMacho;
  Integer quantidadeDeAvesFemea;
  Integer quantidadeDeAvesMachoMortas;
  Integer quantidadeDeAvesFemeaMortas;
  Ovos[] ovos;

  public Aviario() {}

  public Integer getQuantidadeDeAvesMacho() {
    return quantidadeDeAvesMacho;
  }

  public Integer getQuantidadeDeAvesFemea() {
    return quantidadeDeAvesFemea;
  }

  public Integer getQuantidadeDeAvesMachoMortas() {
    return quantidadeDeAvesMachoMortas;
  }

  public Integer getQuantidadeDeAvesFemeaMortas() {
    return quantidadeDeAvesFemeaMortas;
  }
  
}
