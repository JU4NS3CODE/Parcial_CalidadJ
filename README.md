# Parcial Juan Sebastián Lopez Hurtado

### Parte 1: Estrategia:
- Explicar la diferencia entre CI y CD. 
- Indicar lenguaje, linter y herramienta de cobertura a utilizar, con justificación. 
- Definir y justificar un umbral mínimo de cobertura (70–90%).

***Respuestas***

- Diferencia entre CI y CD**
La diferencia principal es que la **Integración Continua (CI)** se centra en integrar y validar automáticamente el código en un repositorio compartido mediante pruebas y análisis para asegurar su calidad, mientras que la **Entrega/Despliegue Continuo (CD)** lleva ese código validado a entornos superiores: en **Continuous Delivery** el sistema queda listo para desplegarse pero requiere aprobación manual, y en **Continuous Deployment** el despliegue ocurre de forma automática en producción sin intervención humana.
 
-2
 - Lenguaje: Nest con nodeJs	
 - Linter: ESLint, porque es el estándar más usado en proyectos JavaScript/TypeScript. 	
  - Herramienta de cobertura: Jest + ts-jest, ambas herramientas son el default de Nest
  
  **3. Un umbral razonable para un proyecto académico o profesional pequeño es:**

 Umbral sugerido: 70% de cobertura global

**Justificación:**

-   Coberturas por debajo del **70%** suelen indicar ausencia de pruebas básicas y dejan rutas importantes sin evaluar.
    
-   Exigir más del **80–90%** en proyectos pequeños suele generar pruebas artificiales, enfocadas más en aumentar números que en validar comportamientos reales.
    
-   Un umbral del **70%** ofrece un punto de equilibrio adecuado:
    
    -   Asegura que la mayor parte de la lógica principal está realmente probada.
        
    -   Permite avanzar sin bloquear el desarrollo por ramas complejas o decoradores internos (especialmente relevante en frameworks como NestJS).
        
    -   Es un valor realista para proyectos backend pequeños donde los _branches_ pueden inflarse por metadatos o decoradores.
        
-   Además, un umbral del **70%** sigue siendo compatible con buenas prácticas de CI/CD, sin forzar a cubrir casos extremos o comportamiento generado automáticamente por el framework.

### Parte 2 – Workflow CI/CD:
Debe crear .github/workflows/ci-quality.yml con: 
- Activación en push y pull_request.
- Pasos: checkout, instalación dependencias, linter, build, pruebas, cobertura y validación de umbral.
- Si alguna etapa falla, el run debe detenerse.

[![image.png](https://i.postimg.cc/wjFQsTqp/image.png)](https://postimg.cc/YvGW57Ln)
[![image.png](https://i.postimg.cc/yN2qrZGL/image.png)](https://postimg.cc/VS9HJdmt)

## Parte 3  - nektos/act

 - Uso de nektos/act: Investigar qué es act
 - Qué hace.
 - Requisitos (Docker).
 - Comando para ejecutar el workflow localment

***Respuesta***

Act es una herramienta de linea de comadno  desarrollada por la comunidad que permite **ejecutar localmente los workflows de GitHub Actions** sin necesidad de subir cambios al repositorio remoto. Su principal ventaja es que simula el mismo entorno que ofrece GitHub Actions utilizando **contenedores Docker**, lo que facilita probar y depurar pipelines de CI/CD en tu máquina antes de integrarlos en GitHub.

**Qué hace:**

-   Ejecuta los jobs definidos en `.github/workflows/*.yml` directamente en tu entorno local.
-   Usa imágenes de Docker para reproducir el comportamiento de los runners de GitHub (por ejemplo, `ubuntu-latest`).
-   Permite validar pasos como instalación de dependencias, ejecución de pruebas, linting o despliegues simulados sin necesidad de esperar a que GitHub procese el workflow

**Requisitos**
-   Tener **Docker instalado y en ejecución**, ya que act utiliza contenedores para simular los runners.  
-   Contar con un archivo de workflow en la carpeta `.github/workflows/`
-  Tener instalado en el ordenador Act.

**El comando para ejecutar act es:**
`act -P ubuntu-latest=catthehacker/ubuntu:act-latest`

## Parte 4– Validación y logs:

- Cómo identificar fallos de linter, pruebas y cobertura en logs.
- Generar un run fallido y uno exitoso y explicar la diferencia

***Respuesta***

a) Fallos del linter (ESLint)
[![image.png](https://i.postimg.cc/d3T52MWd/image.png)](https://postimg.cc/fSD7sPQT)
Si hay errores, los logs muestran, los archivos y líneas que dan ese error y dicen cuál es el error, como se ve en la captura

-   Archivos y líneas afectadas.
    
-   Regla que fue violada.

b)  Fallos de pruebas (Jest)
Se detectan porque Jest muestra los mensajes Test failed, Expected… received…, TypeError / ReferenceError / thrown error segun el error

c) Run exitoso
[![image.png](https://i.postimg.cc/yN2qrZGL/image.png)](https://postimg.cc/VS9HJdmt)

d) Run fallido
[![image.png](https://i.postimg.cc/YSHYNn2w/image.png)](https://postimg.cc/FYTYNxJP)
Run fallido por no tener suficiente coverage 

### Parte 5 – IA y Ética:

- Investigar dos métodos para detectar código generado por IA.
- Explicar por qué no es posible asegurar al 100% la autoría.
- Proponer políticas razonables de uso de IA en educación y calidad.

***Respuesta***

1.	 Los dos métodos principales para identificar código escrito por Inteligencia Artificial (IA) son el Análisis Estático del Código y la Evaluación de Estilos y Patrones de Codificación. El análisis estático consiste en examinar el código fuente sin ejecutarlo para buscar estructuras, comentarios o patrones distintivos que suelen producir los modelos de lenguaje grande (LLM).
2. Es prácticamente imposible garantizar con un 100% de certeza si un código fue escrito íntegramente por un ser humano o completamente por una IA. Esto se debe a que la IA generativa funciona comúnmente como una herramienta de apoyo y colaboración. Un desarrollador puede tomar el código que genera la IA, modificarlo, reestructurarlo o adaptarlo, mezclando así la autoría.
3. La Inteligencia Artificial debería ser utilizada para optimizar el proceso de aprendizaje. Permite obtener información específica de manera rápida, eliminando la necesidad de invertir mucho tiempo revisando documentación extensa. 

