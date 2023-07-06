package br.com.aviapp.api.models;

public class Granja {
  Endereco endereco;
  Lote[] lotes;

  public Granja(Endereco endereco) {
    this.endereco = endereco;
  }

  public Endereco getEndereco() {
    return this.endereco;
  }

  public void setEndereco(Endereco endereco) {
    this.endereco = endereco;
  }

  public Lote[] getLotes() {
    return this.lotes;
  }

  public void setLotes(Lote[] lotes) {
    this.lotes = lotes;
  }

  
}