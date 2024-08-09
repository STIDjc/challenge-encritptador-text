# CHALLENGE ALURA: ENCREIPTADOR DE TEXTO

## Sobre el encriptador.

Este encriptador de texto es un proyecto de [Alura latan](https://www.aluracursos.com/). en el cuál ponemos en practica lo aprendido en el curso de Lógica de programación.

## como se realizo.

este encriptador de texto cunta con las diferentes funciones:

### función para encriptar texto.

la función de encriptado se realizo con las siguientes reglas:

- `La letra "e" es convertida para "enter"`
- `La letra "i" es convertida para "imes"`
- `La letra "a" es convertida para "ai"`
- `La letra "o" es convertida para "ober"`
- `La letra "u" es convertida para "ufat"`

_y se utilizó el método `replace` para remplazar las bocales_

### función de desencritado de texto.

_la función de desencriptade funciona de la misma manera, pero a la inversa. Ej:`enter` se remplaza por `e`. (tambiens se utilizó el metodo `replace`)_

### función de validación de caracteres.

En esta función se utilizó expresiones regulares. La expresión regular que utilice fue la siguiente: `[^a-zñ\ ]+`. Está acompañada de su debida lógica.

## tambien cuneta con funciones extras.

### función de copiado de texto.

Esta función, como su nombre lo dice, copia el texto del resultado de la encriptación.

### funciuón de alertas.

Esta función va de la mano con la función de validar caracteres, y envía un mensaje si el usuario al momento de encriptar el texto ingresa un carácter no permitido.

### función de limpiado de texto.

Esta función toma el texto que el usuario ingresa a encriptar y lo limpia o borra de la entrada de texto.

**NOTA: El encantador se realizó desacuerdo a los siguientes requisitos**

# Requisitos:

- Debe funcionar solo con letras minúsculas
- No deben ser utilizados letras con acentos ni caracteres especiales
- Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra
  encriptada
- para su versión original.
  - Por ejemplo:
    "gato" => "gaitober"
    gaitober" => "gato"

La página debe tener campos para
inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
El resultado debe ser mostrado en la pantalla.

## Extras:

Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.
