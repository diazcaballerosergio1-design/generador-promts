const plantillas = {
    redes: {
        titulo: "📱 Redes Sociales y Contenido",
        campos: [
            { id: "plataforma", label: "Plataforma de destino:", tipo: "input", placeholder: "Ej. Facebook, Instagram, TikTok, LinkedIn, YouTube, X" },
            { id: "formato", label: "Formato de contenido:", tipo: "input", placeholder: "Ej. Post carrusel, Reel, Story, Hilo educativo, Diseño en Canva" },
            { id: "objetivoRedes", label: "Objetivo y mensaje central:", tipo: "textarea", placeholder: "Ej. Generar interacción, educar sobre un servicio, captar clientes" },
            { id: "tonoRedes", label: "Tono de voz:", tipo: "input", placeholder: "Ej. Cercano y amigable, profesional y analítico, persuasivo" }
        ],
        generar: (vals, profesion, ai) => `Estás trabajando en la plataforma **${ai}**. Actúa como un experto en comunicación y marketing digital en ${vals.plataforma || '[Plataforma]'}. Tu perfil y enfoque profesional es el de: ${profesion || 'Creador de Contenido y Especialista'}.

### Objetivo y Contexto:
${vals.objetivoRedes || '[Describe el mensaje central o producto a promocionar]'}

### Parámetros de la Publicación:
- **Plataforma:** ${vals.plataforma || '[Plataforma]'}
- **Formato:** ${vals.formato || '[Formato de contenido]'}
- **Tono de voz:** ${vals.tonoRedes || '[Tono deseado]'}

### Estructura de Respuesta Requerida:
1. **Ganancia de atención (Hook):** Las primeras líneas o segundos clave adaptados al algoritmo de ${vals.plataforma || 'la red social'}.
2. **Cuerpo del mensaje:** Desarrollo ágil, estructurado con espacios, viñetas y fácil lectura.
3. **Llamado a la Acción (CTA):** Instrucción clara para orientar a la audiencia.
4. **Sugerencia de Hashtags / Palabras clave:** Listado optimizado.`
    },

    freelance: {
        titulo: "💼 Trabajo Freelance y Negocios",
        campos: [
            { id: "tipoServicio", label: "Propuesta o situación comercial:", tipo: "input", placeholder: "Ej. Presupuesto de servicios, propuesta de valor, negociación" },
            { id: "detallesNegocio", label: "Detalles del cliente o proyecto:", tipo: "textarea", placeholder: "Ej. El cliente solicita un presupuesto ajustado pero exige entregas rápidas..." },
            { id: "objetivoFreelance", label: "Resultado que buscas obtener:", tipo: "input", placeholder: "Ej. Cerrar el contrato manteniendo tarifas justas y profesionalismo" }
        ],
        generar: (vals, profesion, ai) => `Estás trabajando en la plataforma **${ai}**. Actúa como un Consultor de Negocios y Profesional Independiente experto en negociación, respaldado por tu experiencia como ${profesion || 'Especialista en servicios'}.

### Situación / Proyecto:
${vals.detallesNegocio || '[Describe el contexto, correo recibido o propuesta a redactar]'}

### Parámetros:
- **Área:** ${vals.tipoServicio || '[Negociación / Propuesta]'}
- **Meta:** ${vals.objetivoFreelance || '[Objetivo principal]'}

### Estructura de Respuesta Requerida:
1. **Estrategia de comunicación:** Enfoque psicológico y comercial recomendado.
2. **Plantilla de mensaje lista para usar:** Redacción persuasiva, educada y profesional.`
    },

    oficios: {
        titulo: "🔧 Oficios, Reparación y Servicios Técnicos",
        campos: [
            { id: "tipoServicio", label: "Ámbito u oficio específico:", tipo: "input", placeholder: "Ej. Electricidad, mecánica, carpintería, fontanería, cerrajería" },
            { id: "problemaTecnico", label: "Descripción del problema o tarea:", tipo: "textarea", placeholder: "Ej. Diagnóstico de componentes, pasos para ensamblar una pieza, solución de fallas..." },
            { id: "herramientas", label: "Herramientas o materiales disponibles:", tipo: "input", placeholder: "Ej. Multímetro, soldador, herramientas manuales básicas" }
        ],
        generar: (vals, profesion, ai) => `Estás trabajando en la plataforma **${ai}**. Actúa como un Maestro Senior y Especialista en ${vals.tipoServicio || 'oficios técnicos'}, aplicando los conocimientos y rigor de un/a ${profesion || 'Profesional experto'}.

### Situación / Problema a Resolver:
${vals.problemaTecnico || '[Describe detalladamente el problema o trabajo a realizar]'}

### Recursos Disponibles:
- ${vals.herramientas || 'Herramientas estándar del sector'}

### Estructura de Respuesta Requerida:
1. **Evaluación de seguridad y precauciones:** Advertencias críticas antes de manipular equipos o materiales.
2. **Guía de acción paso a paso:** Procedimiento claro, lógico y metódico.
3. **Consejos profesionales (Tips del oficio):** Buenas prácticas para garantizar un resultado duradero y de calidad.`
    },

    estrategia: {
        titulo: "🎯 Estrategia, Planificación y Proyectos",
        campos: [
            { id: "reto", label: "Describe el problema o meta a planificar:", tipo: "textarea", placeholder: "Ej. Diseñar un plan operativo para lanzar un nuevo servicio digital..." },
            { id: "enfoque", label: "Metodología o enfoque deseado:", tipo: "input", placeholder: "Ej. Enfoque ágil, análisis DAFO, optimización de tiempos y recursos" }
        ],
        generar: (vals, profesion, ai) => `Estás trabajando en la plataforma **${ai}**. Actúa como un Consultor Estratégico y Planificador Senior con amplia experiencia en ${vals.enfoque || 'gestión de proyectos'}, enfocado desde la perspectiva experta de un/a ${profesion || 'Especialista'}.

### Reto o Meta a Abordar:
${vals.reto || '[Describe tu objetivo o problema]'}

### Estructura de Respuesta Requerida:
1. **Diagnóstico inicial:** Perspectiva analítica del reto.
2. **Plan de acción paso a paso:** Fases cronológicas o hitos claros.
3. **Mitigación de riesgos:** Posibles obstáculos y soluciones preventivas.`
    },

    analisis: {
        titulo: "📊 Análisis de Datos y Documentos",
        campos: [
            { id: "fuenteDatos", label: "Información o contexto a analizar:", tipo: "textarea", placeholder: "Pega fragmentos de informes, notas o registros..." },
            { id: "preguntaClave", label: "Pregunta o análisis específico:", tipo: "textarea", placeholder: "Ej. Extrae los puntos críticos y genera conclusiones prácticas..." }
        ],
        generar: (vals, profesion, ai) => `Estás trabajando en la plataforma **${ai}**. Actúa como un Analista e Investigador Experto trabajando como ${profesion || 'Especialista en la materia'}. Utiliza estrictamente la información provista en el contexto.

### Contexto / Datos de Entrada:
${vals.fuenteDatos || '[Inserta aquí los datos, fragmentos o notas]'}

### Tarea de Análisis:
${vals.preguntaClave || '[Indica qué deseas encontrar o analizar]'}

### Formato de Salida Requerido:
- Presenta la información clave estructurada en viñetas claras o tablas comparativas si aplica.
- Sé preciso, objetivo y directo al grano.`
    },

    codigo: {
        titulo: "💻 Desarrollo y Tecnología",
        campos: [
            { id: "lenguaje", label: "Tecnología / Lenguaje / Framework:", tipo: "input", placeholder: "Ej. Python, Flask, SQLite, JavaScript, Automatización" },
            { id: "objetivo", label: "¿Qué necesitas construir o solucionar?", tipo: "textarea", placeholder: "Ej. Crear un script que automatice tareas o solucione un error..." },
            { id: "restricciones", label: "Restricciones técnicas:", tipo: "input", placeholder: "Ej. Sin dependencias externas, código modular y limpio" }
        ],
        generar: (vals, profesion, ai) => `Estás trabajando en la plataforma **${ai}**. Actúa como un Ingeniero y Desarrollador Senior experto en ${vals.lenguaje || '[Tecnología]'}, combinando tu experiencia técnica como ${profesion || 'Especialista en software'}. 

### Contexto y Objetivo:
${vals.objetivo || '[Describe tu tarea o error detalladamente]'}

### Restricciones Técnicas:
- ${vals.restricciones || 'Ninguna restricción adicional'}
- Sigue estrictamente las mejores prácticas de código limpio.

### Estructura de Respuesta Requerida:
1. Breve explicación técnica de la solución.
2. Bloque de código completo, optimizado y comentado.
3. Posibles casos de fallo o advertencias.`
    },

    traduccion: {
        titulo: "🌍 Traducción y Localización Profesional",
        campos: [
            { id: "idiomaOrigen", label: "Idioma de origen y destino:", tipo: "input", placeholder: "Ej. De inglés técnico a español latino" },
            { id: "contextoTexto", label: "Dominio o contexto del texto:", tipo: "input", placeholder: "Ej. Documentación comercial, manual técnico, marketing" },
            { id: "textoOriginal", label: "Texto a traducir:", tipo: "textarea", placeholder: "Pega aquí el texto que necesitas traducir..." }
        ],
        generar: (vals, profesion, ai) => `Estás trabajando en la plataforma **${ai}**. Actúa como un Traductor Profesional y Localizador experto trabajando con el perfil de ${profesion || 'Especialista lingüístico'}. 

### Instrucciones de Traducción:
- Traduce el texto de forma precisa ${vals.idiomaOrigen || '[Idioma origen a destino]'}.
- Adapta los modismos y expresiones para que suenen naturales en el idioma de llegada.

### Texto a Traducir:
${vals.textoOriginal || '[Inserta el texto aquí]'}`
    }
};

function actualizarCampos() {
    const categoria = document.getElementById('categorySelect').value;
    const config = plantillas[categoria];
    const contenedor = document.getElementById('dynamicFields');
    
    contenedor.innerHTML = '';

    config.campos.forEach(campo => {
        const div = document.createElement('div');
        div.className = 'form-group';

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

function toggleSeccionImagen() {
    const checkbox = document.getElementById('checkImagen');
    const seccionImagen = document.getElementById('imagenCampos');
    seccionImagen.style.display = checkbox.checked ? 'block' : 'none';
    actualizarPromptFinal();
}

function actualizarPromptFinal() {
    const ai = document.getElementById('aiSelect').value;
    const categoria = document.getElementById('categorySelect').value;
    const config = plantillas[categoria];
    const profesion = document.getElementById('inputProfesion').value;
    const valores = {};

    config.campos.forEach(campo => {
        const el = document.getElementById(campo.id);
        valores[campo.id] = el ? el.value : '';
    });

    let promptFinal = config.generar(valores, profesion, ai);

    // Añadir bloque de imagen opcional si está activado
    const checkboxImagen = document.getElementById('checkImagen');
    if (checkboxImagen && checkboxImagen.checked) {
        const tipoImg = document.getElementById('tipoImagen').value || '[Tipo de imagen]';
        const guiaImg = document.getElementById('guiaMejora').value || '[Aspecto visual a mejorar]';
        
        promptFinal += `\n\n### Módulo Adicional de Análisis / Mejora Visual:\n- **Tipo de Imagen / Diseño:** ${tipoImg}\n- **Guía de Mejora Requerida:** ${guiaImg}\n- Por favor, analiza los elementos visuales, estéticos o de diseño con base en esta guía.`;
    }

    document.getElementById('outputPrompt').value = promptFinal;
}

function copiarPrompt() {
    const texto = document.getElementById('outputPrompt');
    texto.select();
    navigator.clipboard.writeText(texto.value);
    
    const btn = document.getElementById('copyBtn');
    const originalText = btn.innerText;
    btn.innerText = '¡Copiado con éxito! ✅';
    btn.style.backgroundColor = '#16a34a';
    
    setTimeout(() => {
        btn.innerText = originalText;
        btn.style.backgroundColor = '';
    }, 2000);
}

function limpiarCampos() {
    const inputs = document.querySelectorAll('#dynamicFields input, #dynamicFields textarea, #inputProfesion, #tipoImagen, #guiaMejora');
    inputs.forEach(input => {
        input.value = '';
    });
    document.getElementById('checkImagen').checked = false;
    toggleSeccionImagen();
    actualizarPromptFinal();
}

// Inicializar al cargar la página
window.onload = () => {
    actualizarCampos();
    document.getElementById('inputProfesion').addEventListener('input', actualizarPromptFinal);
    document.getElementById('aiSelect').addEventListener('change', actualizarPromptFinal);
};
