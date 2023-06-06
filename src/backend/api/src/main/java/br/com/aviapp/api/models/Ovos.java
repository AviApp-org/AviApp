package br.com.aviapp.api.models;

import br.com.aviapp.api.enums.EnumOvos;

public class Ovos {
  private EnumOvos tipoDoOvo;
  private Integer quantidade;
  private Float valorTotal;
  
  public Ovos(EnumOvos tipoDoOvo, Integer quantidade) {
    this.tipoDoOvo = tipoDoOvo;
    this.quantidade = quantidade;
  }

  public Integer getQuantidade() {
    return quantidade;
  }

  public EnumOvos getTipoDoOvo() {
    return tipoDoOvo;
  }

  public Float getValorTotal() {
    return valorTotal;
  }
}
