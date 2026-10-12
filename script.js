const plantillas = {
    codigo: {
        titulo: "Desarrollo y Depuración de Código",
        campos: [
            { id: "lenguaje", label: "Tecnología / Lenguaje / Framework:", tipo: "input", placeholder: "Ej. Python, Flask, SQLite, JavaScript" },
            { id: "objetivo", label: "¿Qué necesitas construir o solucionar?", tipo: "textarea", placeholder: "Ej. Crear un endpoint que reciba parámetros y los valide" },
            { id: "restricciones", label: "Restricciones técnicas:", tipo: "input", placeholder: "Ej. Sin dependencias externas, código modular" }
        ],
        generar: (vals) => `Actúa como un Ingeniero de Software Senior experto en ${vals.lenguaje || '[Tecnología]'}. 

### Contexto y Objetivo:
${vals.objetivo || '[Describe tu tarea o error detalladamente]'}

### Restricciones Técnicas:
- ${vals.restricciones || 'Ninguna restricción adicional'}
- Sigue estrictamente las mejores prácticas de la industria y principios de código limpio.

### Estructura de Respuesta Requerida:
1. Breve explicación técnica de la solución.
2. Bloque de código completo, optimizado y comentado (listo para probar).
3. Posibles casos de fallo o advertencias de seguridad a tener en cuenta.`
    },

    analisis: {
        titulo: "Análisis de Documentos / Datos (Ideal para NotebookLM y Claude)",
        campos: [
            { id: "fuenteDatos", label: "Tipo de información o contexto a analizar:", tipo: "textarea", placeholder: "Ej. Fragmentos de manuales técnicos, notas de investigación o registros de bases de datos" },
            { id: "preguntaClave", label: "Pregunta o análisis específico:", tipo: "textarea", placeholder: "Ej. Extrae los puntos críticos de falla y cómo solucionarlos" }
        ],
        generar: (vals) => `Actúa como un Analista e Investigador Experto. Utiliza únicamente la información provista en el contexto para realizar la siguiente tarea, sin asumir datos externos que no estén respaldados.

### Contexto / Datos de Entrada:
${vals.fuenteDatos || '[Inserta aquí los datos, fragmentos o notas]'}

### Tarea de Análisis:
${vals.preguntaClave || '[Indica qué deseas encontrar o analizar]'}

### Formato de Salida Requerido:
- Presenta la información clave estructurada en viñetas claras o tablas comparativas si aplica.
- Sé preciso, objetivo y directo al grano.`
    },

    creativo: {
        titulo: "Creación de Contenido y Redacción",
        campos: [
            { id: "tipoContenido", label: "Formato del contenido:", tipo: "input", placeholder: "Ej. Artículo técnico, Guion, Documentación, Hilo" },
            { id: "audiencia", label: "Audiencia o tono:", tipo: "input", placeholder: "Ej. Técnico y profesional / Didáctico y sencillo para principiantes" },
            { id: "ideaPrincipal", label: "Idea principal o esquema:", tipo: "textarea", placeholder: "Ej. Explicar el proceso paso a paso de una reparación o flujo de software" }
        ],
        generar: (vals) => `Actúa como un Redactor de Contenidos Profesional especializado en comunicación técnica y divulgación.

### Parámetros del Contenido:
- **Formato:** ${vals.tipoContenido || '[Formato]'}
- **Audiencia / Tono:** ${vals.audiencia || '[Tono deseado]'}

### Idea Central / Esquema Base:
${vals.ideaPrincipal || '[Desarrolla aquí los puntos que debe cubrir el texto]'}

### Instrucciones de Estilo:
- Evita relleno innecesario ("paja"). Ve directo a la estructura de valor.
- Usa subtítulos claros y lenguaje persuasivo pero riguroso.`
    },

    traduccion: {
        titulo: "Traducción y Localización Técnica",
        campos: [
            { id: "idiomaOrigen", label: "Idioma de origen y destino:", tipo: "input", placeholder: "Ej. De inglés técnico a español latino" },
            { id: "contextoTexto", label: "Dominio o contexto del texto:", tipo: "input", placeholder: "Ej. Manual de electrónica, documentación de software, legal" },
            { id: "textoOriginal", label: "Texto a traducir:", tipo: "textarea", placeholder: "Pega aquí el texto que necesitas traducir..." }
        ],
        generar: (vals) => `Actúa como un Traductor Profesional especializado en ${vals.contextoTexto || '[Dominio técnico]'}. 

### Instrucciones de Traducción:
- Traduce el siguiente texto de forma precisa ${vals.idiomaOrigen || '[Idioma origen a destino]'}.
- Mantén la terminología técnica adecuada al contexto sin realizar traducciones literales incorrectas.
- Preserva los formatos, etiquetas o fragmentos de código si los hubiera.

### Texto a Traducir:
${vals.textoOriginal || '[Inserta el texto aquí]'}`
    },

    resumen: {
        titulo: "Resumen y Síntesis de Información",
        campos: [
            { id: "longitud", label: "Formato o extensión del resumen:", tipo: "input", placeholder: "Ej. 3 conclusiones clave, viñetas cortas, resumen ejecutivo de 1 párrafo" },
            { id: "textoLargo", label: "Texto o notas extensas:", tipo: "textarea", placeholder: "Pega aquí el texto, transcripción o notas que deseas resumir..." }
        ],
        generar: (vals) => `Actúa como un Asistente Ejecutivo experto en síntesis de información compleja.

### Instrucciones:
- Analiza el texto proporcionado y extrae únicamente la información de mayor valor e impacto.
- El formato de salida debe ser: ${vals.longitud || 'Viñetas organizadas por orden de importancia'}.
- Omite redundancias y detalles superficiales.

### Texto / Notas de Entrada:
${vals.textoLargo || '[Inserta tu texto largo aquí]'}`
    },

    estrategia: {
        titulo: "Estrategia, Planificación y Resolución de Problemas",
        campos: [
            { id: "reto", label: "Describe el problema o meta a planificar:", tipo: "textarea", placeholder: "Ej. Diseñar un plan paso a paso para desarrollar una mini app en Flask..." },
            { id: "enfoque", label: "Metodología o enfoque deseado:", tipo: "input", placeholder: "Ej. Enfoque ágil, análisis de riesgos, lluvia de ideas creativa" }
        ],
        generar: (vals) => `Actúa como un Consultor Estratégico y Project Manager Senior con experiencia en ${vals.enfoque || 'resolución de problemas complejos'}.

### Reto o Meta a Abordar:
${vals.reto || '[Describe tu objetivo o problema]'}

### Estructura de Respuesta Requerida:
1. **Diagnóstico inicial:** Breve perspectiva del reto.
2. **Plan de acción paso a paso:** Fases cronológicas o hitos claros.
3. **Identificación de riesgos:** Posibles obstáculos y cómo mitigarlos de forma preventiva.`
    }
};

function actualizarCampos() {
    const categoria = document.getElementById('categorySelect').value;
    const config = plantillas[categoria];
    const contenedor = document.getElementById('dynamicFields');
    
    contenedor.innerHTML = '';

    config.campos.forEach(campo => {
        const div = document.createElement('div');
        div.style.marginBottom = '15px';

        const label = document.createElement('label');
        label.innerText = campo.label;
        div.appendChild(label);

        let input;
        if (campo.tipo === 'textarea') {
            input = document.createElement('textarea');
            input.rows = 4;
        } else {
            input = document.createElement('input');
            input.type = 'text';
        }

        input.id = campo.id;
        input.placeholder = campo.placeholder;
        input.addEventListener('input', actualizarPromptFinal);
        div.appendChild(input);

        contenedor.appendChild(div);
    });

    actualizarPromptFinal();
}

function actualizarPromptFinal() {
    const categoria = document.getElementById('categorySelect').value;
    const config = plantillas[categoria];
    const valores = {};

    config.campos.forEach(campo => {
        const el = document.getElementById(campo.id);
        valores[campo.id] = el ? el.value : '';
    });

    document.getElementById('outputPrompt').value = config.generar(valores);
}

function copiarPrompt() {
    const texto = document.getElementById('outputPrompt');
    texto.select();
    navigator.clipboard.writeText(texto.value);
    
    const btn = document.getElementById('copyBtn');
    btn.innerText = '¡Prompt copiado al portapapeles!';
    setTimeout(() => {
        btn.innerText = 'Copiar al Portapapeles';
    }, 2000);
}

window.onload = actualizarCampos;
