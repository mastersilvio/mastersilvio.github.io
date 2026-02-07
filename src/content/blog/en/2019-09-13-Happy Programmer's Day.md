---
title: 'Happy Programmer''s Day'
published: true
tags: [Technology]
lang: en
translation_key: programmers-day
date: 2019-09-13
---

Programmer's Day is a holiday celebrated on the 256th day of the year, which falls on September 12 in leap years and September 13 in other years. But why 256?

This number was chosen because it represents the number of different values that can be represented with a byte (8 bits).

A bit can be 0 or 1, meaning two possibilities. Therefore, 8 bits would be 2x2x2x2x2x2x2x2 or 2^8, which equals 256.

In 2002, Valentin Balt gathered signatures to petition the government to recognize the date as Programmer's Day. Only in 2009 did Russian President Dmitry Medvedev make it an official professional holiday in the country, and since then it has been remembered worldwide.

```ruby
require 'date'

if Date.today.yday == 256
  puts 'Happy Programmer''s Day!'
end
```
