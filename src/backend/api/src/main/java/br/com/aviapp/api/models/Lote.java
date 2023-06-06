package br.com.aviapp.api.models;

import java.util.ArrayList;

public class Lote {
  private ArrayList<Aviario> aviarios;

  public Lote(ArrayList<Aviario> aviarios) {
    this.aviarios = aviarios;
  }

  public Integer calcularTotalDeAvesMacho() {
    Integer total = 0;
    for(Aviario aviario : aviarios) {
      total += aviario.getQuantidadeDeAvesMacho();
    }
    return total;
  }

  public ArrayList<Aviario> getAviarios() {
    return this.aviarios;
  }
}
