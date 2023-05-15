package br.com.aviapp.api.enums;

public enum EnumOvos {
  MERCADO("Mercado");

  private final String tipoDoOvo;

  EnumOvos(String tipoDoOvo) {
    this.tipoDoOvo = tipoDoOvo;
  }

  @Override
  public String toString() {
    return "{" + this.tipoDoOvo + "}";
  }
}
