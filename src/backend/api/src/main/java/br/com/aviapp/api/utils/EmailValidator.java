package br.com.aviapp.api.utils;

import java.util.regex.Pattern;

public class EmailValidator {
  public static boolean validate(String email) {
    String regexPattern = "^(.+)@(\\S+)$";
    return Pattern.compile(regexPattern).matcher(email).matches();
  }
}
