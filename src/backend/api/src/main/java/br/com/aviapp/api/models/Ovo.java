package br.com.aviapp.api.models;

import br.com.aviapp.api.enums.EnumTipoDoOvo;

public class Ovo {
  private EnumTipoDoOvo tipoDoOvo;
  private Integer quantidade;
  private Float valorTotal;
  
  public Ovo(EnumTipoDoOvo tipoDoOvo, Integer quantidade) {
    this.tipoDoOvo = tipoDoOvo;
    this.quantidade = quantidade;
  }

  public Integer getQuantidade() {
    return quantidade;
  }

  public EnumTipoDoOvo getTipoDoOvo() {
    return tipoDoOvo;
  }

  public Float getValorTotal() {
    return valorTotal;
  }
}
