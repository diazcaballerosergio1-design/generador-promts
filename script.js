const plantillas = {
    redes: {
        titulo: "📱 Redes Sociales y Creación de Contenido",
        campos: [
            { id: "plataforma", label: "Plataforma de destino:", tipo: "input", placeholder: "Ej. Instagram, TikTok, LinkedIn, YouTube, X (Twitter)" },
            { id: "formato", label: "Formato de contenido:", tipo: "input", placeholder: "Ej. Guion para reel/short, Hilo educativo, Post carrusel, Copy publicitario" },
            { id: "objetivoRedes", label: "Objetivo y mensaje principal:", tipo: "textarea", placeholder: "Ej. Generar interacción, educar sobre un tema, promocionar un servicio o producto" },
            { id: "tonoRedes", label: "Tono de voz:", tipo: "input", placeholder: "Ej. Cercano y divertido, profesional y analítico, inspirador" }
        ],
        generar: (vals) => `Actúa como un Content Creator y Social Media Manager experto en crecimiento orgánico en ${vals.plataforma || '[Plataforma]'}.

### Objetivo y Contexto:
${vals.objetivoRedes || '[Describe el mensaje central o producto a promocionar]'}

### Parámetros de la Publicación:
- **Formato:** ${vals.formato || '[Formato de contenido]'}
- **Tono de voz:** ${vals.tonoRedes || '[Tono deseado]'}

### Estructura de Respuesta Requerida:
1. **Ganancia de atención (Hook):** Las primeras líneas o segundos clave para enganchar a la audiencia.
2. **Cuerpo del mensaje:** Desarrollo ágil, estructurado con espacios y fácil de leer.
3. **Llamado a la Acción (CTA):** Instrucción clara para que el usuario comente, comparta o haga clic.
4. **Sugerencia de Hashtags / Palabras clave:** Listado optimizado para el algoritmo.`
    },

    freelance: {
        titulo: "💼 Trabajo Freelance y Propuestas Comerciales",
        campos: [
            { id: "tipoServicio", label: "Servicio o propuesta:", tipo: "input", placeholder: "Ej. Presupuesto para diseño web, propuesta de consultoría, respuesta a cliente difícil" },
            { id: "detallesNegocio", label: "Detalles del proyecto o situación:", tipo: "textarea", placeholder: "Ej. El cliente quiere negociar un descuento del 30% en servicios de marketing..." },
            { id: "objetivoFreelance", label: "Resultado que buscas obtener:", tipo: "input", placeholder: "Ej. Cerrar el contrato al precio fijado manteniendo una relación cordial" }
        ],
        generar: (vals) => `Actúa como un Consultor de Negocios y Freelancer Senior con amplia experiencia en negociación y gestión de clientes.

### Situación / Proyecto:
${vals.detallesNegocio || '[Describe el contexto, correo recibido o propuesta a redactar]'}

### Tipo de Gestión:
- **Área:** ${vals.tipoServicio || '[Servicio o negociación]'}
- **Meta:** ${vals.objetivoFreelance || '[Objetivo principal]'}

### Estructura de Respuesta Requerida:
1. **Estrategia de comunicación:** Breve consejo de cómo abordar psicológicamente al cliente.
2. **Plantilla de mensaje lista para usar:** Redacción profesional, persuasiva y adaptada al contexto (incluyendo espacios editables entre corchetes si es necesario).`
    },

    codigo: {
        titulo: "💻 Desarrollo y Tecnología",
        campos: [
            { id: "lenguaje", label: "Tecnología / Lenguaje / Framework:", tipo: "input", placeholder: "Ej. Python, Flask, SQLite, JavaScript, Automatización" },
            { id: "objetivo", label: "¿Qué necesitas construir o solucionar?", tipo: "textarea", placeholder: "Ej. Crear un script que automatice tareas o solucione un error..." },
            { id: "restricciones", label: "Restricciones técnicas:", tipo: "input", placeholder: "Ej. Sin dependencias externas, código modular y limpio" }
        ],
        generar: (vals) => `Actúa como un Ingeniero de Software Senior experto en ${vals.lenguaje || '[Tecnología]'}. 

### Contexto y Objetivo:
${vals.objetivo || '[Describe tu tarea o error detalladamente]'}

### Restricciones Técnicas:
- ${vals.restricciones || 'Ninguna restricción adicional'}
- Sigue estrictamente las mejores prácticas de la industria y principios de código limpio.

### Estructura de Respuesta Requerida:
1. Breve explicación técnica de la solución.
2. Bloque de código completo, optimizado y comentado.
3. Posibles casos de fallo o advertencias de seguridad a tener en cuenta.`
    },

    analisis: {
        titulo: "📊 Análisis de Datos y Documentos (Ideal para NotebookLM/Claude)",
        campos: [
            { id: "fuenteDatos", label: "Información o contexto a analizar:", tipo: "textarea", placeholder: "Pega fragmentos de informes, notas de investigación o registros..." },
            { id: "preguntaClave", label: "Pregunta o análisis específico:", tipo: "textarea", placeholder: "Ej. Extrae los puntos críticos y genera una tabla comparativa..." }
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

    traduccion: {
        titulo: "🌍 Traducción y Localización Profesional",
        campos: [
            { id: "idiomaOrigen", label: "Idioma de origen y destino:", tipo: "input", placeholder: "Ej. De inglés técnico a español latino" },
            { id: "contextoTexto", label: "Dominio o contexto del texto:", tipo: "input", placeholder: "Ej. Documentación comercial, contrato, marketing, manual técnico" },
            { id: "textoOriginal", label: "Texto a traducir:", tipo: "textarea", placeholder: "Pega aquí el texto que necesitas traducir..." }
        ],
        generar: (vals) => `Actúa como un Traductor Profesional y Localizador experto en ${vals.contextoTexto || '[Dominio general]'}. 

### Instrucciones de Traducción:
- Traduce el siguiente texto de forma precisa ${vals.idiomaOrigen || '[Idioma origen a destino]'}.
- Adapta los modismos y expresiones para que suenen naturales en el idioma de llegada sin perder el sentido original.

### Texto a Traducir:
${vals.textoOriginal || '[Inserta el texto aquí]'}`
    },

    estrategia: {
        titulo: "🎯 Estrategia, Planificación y Negocios",
        campos: [
            { id: "reto", label: "Describe el problema o meta a planificar:", tipo: "textarea", placeholder: "Ej. Diseñar un plan de marketing para lanzar un servicio digital..." },
            { id: "enfoque", label: "Metodología o enfoque deseado:", tipo: "input", placeholder: "Ej. Enfoque ágil, análisis DAFO, optimización de recursos" }
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
