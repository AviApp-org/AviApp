package br.com.aviapp.api.interfaces;

import br.com.aviapp.api.enums.EnumTipoDoOvo;

public interface IControleDeOvos {
  public void calcularTotalDeOvos();

  public void calcularQuantidadeDeOvosPorTipo(EnumTipoDoOvo ovo);

  public void calcularPorcentagemDeOvos(EnumTipoDoOvo ovo);
}
