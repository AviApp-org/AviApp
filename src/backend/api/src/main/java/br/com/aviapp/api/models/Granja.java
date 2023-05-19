package br.com.aviapp.api.models;

public class Granja {
  Endereco endereco;
  Integer totalDeAvesMacho;
  Integer totalDeAvesFemea;
  Integer totalDeAvesMachoMortas;
  Integer totalDeAvesFemeaMortas;
  Integer totalDeOvos;
  Lote[] lotes;
  Aviario[] aviarios;

  public Granja() {};
  
}