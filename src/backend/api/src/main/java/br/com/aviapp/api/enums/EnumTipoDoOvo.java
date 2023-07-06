package br.com.aviapp.api.enums;

public enum EnumTipoDoOvo {
  MERCADO("Mercado");

  private final String tipoDoOvo;

  EnumTipoDoOvo(String tipoDoOvo) {
    this.tipoDoOvo = tipoDoOvo;
  }

  @Override
  public String toString() {
    return "{" + this.tipoDoOvo + "}";
  }
}
