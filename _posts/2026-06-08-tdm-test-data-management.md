---
layout: post
title: "TDM: Por qué el Test Data Management es la próxima gran batalla del QA"
date: 2026-06-08
categories: [qa-strategy]
icon: "🧪"
read_time: 8
featured: true
excerpt: "Las organizaciones siguen luchando con datos de prueba incoherentes. Aquí el enfoque que estamos adoptando en Carrefour para resolverlo de raíz."
---

Las organizaciones siguen luchando con datos de prueba incoherentes. El problema no es técnico: es estratégico.

## El diagnóstico real

Después de tres años gestionando entornos de prueba en Carrefour Spain, el patrón es siempre el mismo: los equipos pasan el 30-40% de su tiempo de testing gestionando datos, no ejecutando pruebas.

La causa raíz no es la falta de herramientas. Es la ausencia de una estrategia clara de TDM que alinee a los equipos de desarrollo, QA y negocio.

## Qué significa TDM bien hecho

Un buen Test Data Management implica tres dimensiones:

**1. Consistencia entre entornos** — Los datos de DEV, QA y PRE deben ser representativos y actualizados. No hay nada más peligroso que un bug que solo aparece en producción porque los datos de prueba eran demasiado simples.

**2. Privacidad y compliance** — Con GDPR, no puedes usar datos reales de clientes. Necesitas anonimización, enmascaramiento y generación sintética. Esto no es opcional.

**3. Velocidad de aprovisionamiento** — Si un tester tiene que esperar 2 días para obtener datos para su suite de regresión, algo falla en el proceso.

## El enfoque que estamos adoptando

En lugar de comprar una herramienta TDM desde el principio, hemos dividido el problema:

- **Fase 1**: Catálogo de datasets por dominio de negocio (frescos, moda, electrónica...)
- **Fase 2**: Scripts de generación sintética basados en reglas de negocio reales
- **Fase 3**: Integración con el pipeline CI/CD para aprovisionamiento automático

¿Es perfecto? No. ¿Es pragmático? Absolutamente.

## La pregunta que deberías hacerte

¿Cuánto tiempo pierden tus equipos buscando, creando o reparando datos de prueba cada semana?

Si la respuesta supera las 4 horas por tester, tienes un problema de TDM. Y es solucionable.
