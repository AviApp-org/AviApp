package br.com.aviapp.api;
import org.junit.jupiter.api.Test;
import org.springframework.util.Assert;

import br.com.aviapp.api.models.Cliente;

public class ClienteTest {
  @Test
  void shouldCreateANewClient() {
    Cliente novoCliente = new Cliente("Teste", "email@teste.com", "null", "null");

    Assert.isInstanceOf(Cliente.class, novoCliente);
  }
}
