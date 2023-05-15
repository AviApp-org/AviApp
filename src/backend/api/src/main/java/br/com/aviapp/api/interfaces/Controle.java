package br.com.aviapp.api.interfaces;

import br.com.aviapp.api.enums.EnumOvos;

public interface Controle {
  public Integer calcularTotalDeAves();

  public Integer calcularGalosPorGranja();

  public Integer calcularGalinhasPorGranja();

  public Float calcularPorcentagemDeOvos(EnumOvos tipoDoOvo);

  public Integer calcularQuantidadeDeOvosPorTipo();
}
