# Parcial calidad de software by Camilo Pastrana


## Parte 1: Estrategia:
1. Explicar la diferencia entre CI y CD. 
2. Indicar lenguaje, linter y herramienta de cobertura a utilizar, con justificación. 
3. Definir y justificar un umbral mínimo de cobertura (70–90%).

***Respuestas***

**1. Diferencia entre CI y CD**

 - **Integración Continua (CI – Continuous Integration)**
	
	La Integración Continua es la práctica de **integrar código frecuentemente en un repositorio central**, donde cada cambio dispara automáticamente un proceso que ejecuta _lint, pruebas unitarias y análisis de calidad_.  
	Su objetivo es **detectar errores temprano**, evitar integraciones conflictivas y garantizar que el código que entra al repositorio principal cumple con los estándares de calidad.
 - **Entrega/Despliegue Continuo (CD – Continuous Delivery / Continuous Deployment)**

	La Entrega/Despliegue Continuo amplía la CI llevando el código verificado por CI hacia ambientes superiores.

	 - **Continuous Delivery:** deja el sistema listo para desplegarse, pero requiere una aprobación manual.
      
      -   **Continuous Deployment:** realiza el despliegue en producción automáticamente sin intervención humana.

    

Su objetivo es automatizar el flujo desde el commit hasta el ambiente final, reduciendo tiempo, errores manuales y riesgos de despliegue.
**2.** 
 - TypeScript con NodeJs y Express 	
 - Linter: ESLint, porque es el estándar más usado en proyectos JavaScript/TypeScript. 	
  - Herramienta de cobertura: Jest + ts-jest, porque Jest incluye soporte integrado para reportes de cobertura (text, html, lcov).
  
  **3. Un umbral razonable para un proyecto académico o profesional pequeño es:**

 Umbral sugerido: 80% de cobertura global

**Justificación:**

-   Menos del **70%** puede indicar falta de pruebas en rutas críticas.
    
-   Más del **90%** suele llevar a pruebas artificiales o poco útiles que solo aumentan líneas cubiertas.
    
-   **80%** es un equilibrio adecuado:
    
    -   Garantiza validar la mayoría de rutas importantes.
        
    -   No exige cubrir casos extremos innecesarios en proyectos pequeños.
        
    -   Es el estándar común en CI/CD para proyectos reales de backend.

## Parte 2 – Workflow CI/CD:
Debe crear .github/workflows/ci-quality.yml con: 
- Activación en push y pull_request.
- Pasos: checkout, instalación dependencias, linter, build, pruebas, cobertura y validación de umbral.
- Si alguna etapa falla, el run debe detenerse.

![enter image description here](https://i.postimg.cc/hGPgph8Z/image.png)

## Parte 3  - nektos/act

 - Uso de nektos/act: Investigar qué es act y documentar en README.md:
 - Qué hace.
 - Requisitos (Docker).
 - Comando para ejecutar el workflow localment

***Respuesta***

Act es una herramienta de línea de comandos que permite ejecutar workflows de GitHub Actions de manera local, utilizando contenedores Docker para simular el entorno que ofrece GitHub

El comando para ejecutar act es:
`act -P ubuntu-latest=catthehacker/ubuntu:act-latest`

## Parte 4– Validación y logs:

- Cómo identificar fallos de linter, pruebas y cobertura en logs.
- Generar un run fallido y uno exitoso y explicar la diferencia

***Respuesta***
Cuando se ejecuta el workflow de CI en GitHub Actions (o localmente con `act`), los logs muestran claramente en qué etapa falla el proceso.

a) Fallos del linter (ESLint)
![enter image description here](https://i.postimg.cc/kg0LzGd8/image.png)
Si hay errores, los logs muestran:

-   Archivos y líneas afectadas.
    
-   Regla que fue violada.

b)  Fallos de pruebas (Jest)
Se detectan porque Jest muestra uno o varios de estos mensajes:

-   Test failed
    
-   Expected… received…
    
-   TypeError / ReferenceError / thrown error
![enter image description here](https://i.postimg.cc/BnCNJnry/image.png)
En caso de error mostrara los test fallidos y marcas de error.

c) Run exitoso
[![image.png](https://i.postimg.cc/Xvp5tN4f/image.png)](https://postimg.cc/LqFh1pq5)

d) Run fallido
[![image.png](https://i.postimg.cc/d1c0nJ15/image.png)](https://postimg.cc/nsTZhbqm)
Este workflow falla debido a que el Lint da error 


## Parte 5 – IA y Ética:

- Investigar dos métodos para detectar código generado por IA.
- Explicar por qué no es posible asegurar al 100% la autoría.
- Proponer políticas razonables de uso de IA en educación y calidad.

***Respuesta***

1.	 Dos métodos principales para la detección de código generado por IA son el Analisis de Código Estático y la Evaluación de Patrones y Estilos de Codificación. El análisis de código estático examina el código fuente sin ejecutarlo, identificando patrones, estructuras o comentarios que son típicos de los modelos de lenguaje grande (LLM)
2. No es posible asegurar al 100% la autoría de un código como puramente humano o puramente generado por IA porque la IA generativa funciona a menudo como una **herramienta de asistencia y colaboración**. Un desarrollador humano puede tomar un fragmento generado por IA, modificarlo, reescribirlo y adaptarlo a su propio estilo
3. El uso de la IA deberia ser para falicitar el aprendizaje, ya que nos permite buscar informacion concreta rapidamente sin necesidad de pasar horas y horas en documentaciones, que igualmente siguen siendo importantes para ciertas cosas.

