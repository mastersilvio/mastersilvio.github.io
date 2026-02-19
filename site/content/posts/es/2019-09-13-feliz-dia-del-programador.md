---
title: 'Feliz Día del Programador'
description: 'El Día del Programador es un feriado que se celebra en el día 256 del año, este día cae el 12 de septiembre en los años bisiestos y el 13 de septiembre en los demás. Pero, ¿por qué 256?'
pubDate: 2019-09-13
tags: ['Tecnología']
lang: 'es'
slug: 'feliz-dia-del-programador-es'
translatedPosts:
  pt: 'feliz-dia-do-programador-pt'
  en: 'happy-programmers-day-en'
---

El Día del Programador es un feriado que se celebra en el día 256 del año, este día cae el 12 de septiembre en los años bisiestos y el 13 de septiembre en los demás. Pero, ¿por qué 256?

Este número fue elegido porque representa la cantidad de valores diferentes que pueden ser representados con un byte (8 bits).

Un bit puede ser 0 o 1, es decir, dos posibilidades. Por lo tanto, 8 bits serían 2x2x2x2x2x2x2x2 o 2^8, que es igual a 256.

En 2002, Valentin Balt reunió firmas para solicitar al gobierno que reconociera la fecha como el Día del Programador. Solo en 2009 el presidente ruso Dmitry Medvedev convirtió la fecha en un feriado profesional oficial en el país y desde entonces se ha conmemorado en todo el mundo.

```ruby
require 'date'

if Date.today.yday == 256
  puts '¡Feliz Día del Programador!'
end
```
