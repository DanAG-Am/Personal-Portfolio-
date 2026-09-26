const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

function closeMenu() {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open menu');
}

menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    navLinks.classList.toggle('open', !isOpen);
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
});

navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
});

const translations = {
    'Skip to content': 'Saltar al contenido',
    'Open menu': 'Abrir menú',
    'Close menu': 'Cerrar menú',
    'Switch language to Spanish': 'Cambiar idioma a español',
    'Switch language to English': 'Cambiar idioma a inglés',
    'Main navigation': 'Navegación principal',
    'Amilka Lopez, home': 'Amilka Lopez, inicio',
    'Back to top': 'Volver al inicio',
    'About': 'Sobre mí',
    'Expertise': 'Especialidades',
    'Work': 'Proyectos',
    "Let's talk": 'Hablemos',
    'SOFTWARE · DATA · CREATIVE THINKING': 'SOFTWARE · DATOS · PENSAMIENTO CREATIVO',
    "Hi, I'm": 'Hola, soy',
    'I turn curious questions into useful technology, from data-driven models to experiences made for people.': 'Transformo preguntas curiosas en tecnología útil, desde modelos basados en datos hasta experiencias pensadas para las personas.',
    'Explore my work': 'Explora mis proyectos',
    'Get to know me': 'Conóceme',
    'COMPUTER SCIENCE & TECHNOLOGY': 'CIENCIAS DE LA COMPUTACIÓN Y TECNOLOGÍA',
    'SCROLL TO EXPLORE': 'DESPLÁZATE PARA EXPLORAR',
    'Portrait of Amilka Lopez': 'Retrato de Amilka Lopez',
    'A little about me / 01': 'Un poco sobre mí / 01',
    '01 / THE PERSON BEHIND THE CODE': '01 / LA PERSONA DETRÁS DEL CÓDIGO',
    'Curiosity is': 'La curiosidad es',
    'my ': 'mi ',
    'starting point.': 'punto de partida.',
    "I'm Amilka, a Computer Science and Technology student interested in building things that make a difference.": 'Soy Amilka, estudiante de Ciencias de la Computación y Tecnología, y me interesa crear cosas que generen un cambio positivo.',
    'My work moves between software engineering, data analysis, machine learning, and computational modeling. I enjoy finding the human question behind a technical challenge and working through it with care.': 'Mi trabajo abarca la ingeniería de software, el análisis de datos, el aprendizaje automático y el modelado computacional. Me gusta descubrir la pregunta humana detrás de un reto técnico y resolverlo con atención.',
    'More about Amilka': 'Más sobre Amilka',
    'Skills': 'Habilidades',
    'Experience': 'Experiencia',
    'Education': 'Educación',
    'Data & AI': 'Datos e IA',
    'Python, SQL, R, machine learning, and data visualization': 'Python, SQL, R, aprendizaje automático y visualización de datos',
    'Development': 'Desarrollo',
    'HTML, CSS, JavaScript, C++, and version control': 'HTML, CSS, JavaScript, C++ y control de versiones',
    'Modeling': 'Modelado',
    'Computational simulations and analytical problem-solving': 'Simulaciones computacionales y resolución analítica de problemas',
    'Software projects': 'Proyectos de software',
    'Web experiences, interactive tools, and collaborative development': 'Experiencias web, herramientas interactivas y desarrollo colaborativo',
    'Data projects': 'Proyectos de datos',
    'Analysis, modeling, and neural network experiments': 'Análisis, modelado y experimentos con redes neuronales',
    'Community': 'Comunidad',
    'STEAM teaching materials and student group leadership': 'Materiales educativos STEAM y liderazgo de grupos estudiantiles',
    'B.S. in Computer Science and Technology': 'Licenciatura en Ciencias de la Computación y Tecnología',
    'Data Analytics and IT Support': 'Análisis de datos y soporte de TI',
    '02 / WHAT I DO': '02 / LO QUE HAGO',
    'Ideas meet ': 'Las ideas se vuelven ',
    'execution.': 'realidad.',
    'Working across disciplines helps me connect the dots, not just write the code.': 'Trabajar en distintas disciplinas me ayuda a conectar ideas, no solo a escribir código.',
    'Software development': 'Desarrollo de software',
    'Building thoughtful digital tools and interfaces with a focus on usability and clarity.': 'Creo herramientas e interfaces digitales bien pensadas, enfocadas en la claridad y la facilidad de uso.',
    'Data & machine learning': 'Datos y aprendizaje automático',
    'Finding patterns in data and exploring what models can help us understand or predict.': 'Busco patrones en los datos y exploro qué podemos comprender o predecir con distintos modelos.',
    'Computational modeling': 'Modelado computacional',
    'Translating complex systems into experiments, simulations, and actionable insights.': 'Convierto sistemas complejos en experimentos, simulaciones e ideas útiles para actuar.',
    '03 / SELECTED WORK': '03 / PROYECTOS DESTACADOS',
    "Things I've ": 'Lo que he ',
    'built.': 'creado.',
    'A selection of projects from my public GitHub, spanning AI, software, simulation, and the web.': 'Una selección de proyectos de mi GitHub público sobre IA, software, simulación y desarrollo web.',
    'Filter projects': 'Filtrar proyectos',
    'All work': 'Todos',
    'AI & data': 'IA y datos',
    'Software': 'Software',
    'Web': 'Web',
    'Search projects': 'Buscar proyectos',
    'Showing 6 projects': 'Mostrando 6 proyectos',
    'AI & DATA': 'IA Y DATOS',
    'EXPERIMENT / LEARN / BUILD': 'EXPERIMENTAR / APRENDER / CREAR',
    'AI & DATA SCIENCE · 2026': 'IA Y CIENCIA DE DATOS · 2026',
    'A final project from an AI and data science concentration, collected in a public notebook repository.': 'Proyecto final de una concentración en IA y ciencia de datos, disponible en un repositorio público de notebooks.',
    'View AI and Data Science Final Project on GitHub': 'Ver el proyecto final de IA y ciencia de datos en GitHub',
    'View repository': 'Ver repositorio',
    'AI TOOLS': 'HERRAMIENTAS DE IA',
    'REASON / ORGANIZE / ACT': 'RAZONAR / ORGANIZAR / ACTUAR',
    'AI TOOLS · 2026': 'HERRAMIENTAS DE IA · 2026',
    'A reusable AI agent skill for structured reasoning, tool orchestration, and data analytics tasks.': 'Una habilidad reutilizable para agentes de IA, con razonamiento estructurado, coordinación de herramientas y análisis de datos.',
    'View ADLA Themis on GitHub': 'Ver ADLA Themis en GitHub',
    'SOFTWARE': 'SOFTWARE',
    'PLAN / BUILD / ITERATE': 'PLANEAR / CREAR / ITERAR',
    'A Python repository exploring smart project management workflows.': 'Un repositorio de Python que explora flujos de trabajo para la gestión inteligente de proyectos.',
    'View Smart Project Management on GitHub': 'Ver Smart Project Management en GitHub',
    'SIMULATION': 'SIMULACIÓN',
    'COMPUTATIONAL MODELING': 'MODELADO COMPUTACIONAL',
    'Particle simulation visualization': 'Visualización de una simulación de partículas',
    'Modeling particle motion with deterministic and stochastic forces in Python.': 'Modelado del movimiento de partículas con fuerzas deterministas y estocásticas en Python.',
    'View Brownian Particle Simulation on GitHub': 'Ver la simulación de partículas brownianas en GitHub',
    'MACHINE LEARNING': 'APRENDIZAJE AUTOMÁTICO',
    'Neural network illustration': 'Ilustración de una red neuronal',
    'A neural network that classifies diagnostic data using TensorFlow and Keras.': 'Una red neuronal que clasifica datos de diagnóstico con TensorFlow y Keras.',
    'View Cancer Classification Network on GitHub': 'Ver la red de clasificación de cáncer en GitHub',
    'WEB & EDUCATION': 'WEB Y EDUCACIÓN',
    'Web design project illustration': 'Ilustración de un proyecto de diseño web',
    "A website for STEAM workshops encouraging tomorrow's young engineers.": 'Un sitio web para talleres STEAM que inspiran a las futuras generaciones de ingeniería.',
    'View Talleres STEAM on GitHub': 'Ver Talleres STEAM en GitHub',
    'No projects match that search. Try another term or category.': 'Ningún proyecto coincide con la búsqueda. Prueba con otro término o categoría.',
    'See all repositories on GitHub': 'Ver todos los repositorios en GitHub',
    '04 / GET IN TOUCH': '04 / CONTACTO',
    'Have an idea?': '¿Tienes una idea?',
    "Let's make it real.": 'Hagámosla realidad.',
    "I'm always interested in a good question, a thoughtful collaboration, or a new challenge.": 'Siempre me interesa una buena pregunta, una colaboración con propósito o un nuevo reto.',
    'Send me an email': 'Envíame un correo',
    "Let's connect": 'Conectemos',
    'FIND ME ELSEWHERE': 'TAMBIÉN ME ENCUENTRAS EN',
    'Made with curiosity. © ': 'Hecho con curiosidad. © ',
    'Back to top ↑': 'Volver al inicio ↑'
};

const languageToggle = document.querySelector('.language-toggle');
const textNodes = [];
const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (textWalker.nextNode()) textNodes.push(textWalker.currentNode);
const originalTextNodes = textNodes.map(node => ({ node, value: node.textContent }));
const translatableAttributes = ['aria-label', 'aria-placeholder', 'alt', 'placeholder', 'content'];
const originalAttributes = [...document.querySelectorAll('*')].flatMap(element => translatableAttributes
    .filter(attribute => element.hasAttribute(attribute))
    .map(attribute => ({ element, attribute, value: element.getAttribute(attribute) })));
let currentLanguage = 'en';

function setLanguage(language) {
    currentLanguage = language;
    const isSpanish = language === 'es';
    originalTextNodes.forEach(({ node, value }) => {
        const original = value;
        const trimmed = original.trim();
        if (!trimmed) return;
        const translated = isSpanish ? translations[trimmed] : null;
        node.textContent = translated ? original.replace(trimmed, translated) : original;
    });
    originalAttributes.forEach(({ element, attribute, value }) => {
        element.setAttribute(attribute, isSpanish ? translations[value] || value : value);
    });
    document.documentElement.lang = language;
    document.title = isSpanish ? 'Amilka Lopez | Software y Datos' : 'Amilka Lopez | Software & Data';
    document.querySelector('meta[name="description"]').content = isSpanish
        ? 'Amilka Lopez crea software, proyectos de datos y experiencias interactivas. Conoce su trabajo y ponte en contacto.'
        : 'Amilka Lopez builds thoughtful software, data projects, and interactive experiences. Explore her work and get in touch.';
    languageToggle.textContent = isSpanish ? 'English' : 'Español';
    languageToggle.setAttribute('aria-label', isSpanish ? 'Switch language to English' : 'Switch language to Spanish');
    updateProjects();
}

languageToggle.addEventListener('click', () => setLanguage(currentLanguage === 'en' ? 'es' : 'en'));

const tabs = [...document.querySelectorAll('.about-tab')];

function selectTab(selectedTab) {
    tabs.forEach(tab => {
        const selected = tab === selectedTab;
        tab.setAttribute('aria-selected', String(selected));
        tab.tabIndex = selected ? 0 : -1;
        document.getElementById(tab.getAttribute('aria-controls')).hidden = !selected;
    });
}

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectTab(tab));
    tab.addEventListener('keydown', event => {
        if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
        selectTab(tabs[nextIndex]);
        tabs[nextIndex].focus();
    });
});

const filters = [...document.querySelectorAll('.filter')];
const searchInput = document.getElementById('project-search');
const projects = [...document.querySelectorAll('.project-card')];
const resultCount = document.getElementById('result-count');
const noResults = document.getElementById('no-results');
let activeFilter = 'all';

function updateProjects() {
    const query = searchInput.value.trim().toLocaleLowerCase();
    let visibleCount = 0;

    projects.forEach(project => {
        const matchesCategory = activeFilter === 'all' || project.dataset.category.split(' ').includes(activeFilter);
        const matchesSearch = (project.dataset.search + ' ' + project.querySelector('h3').textContent).toLocaleLowerCase().includes(query);
        project.hidden = !(matchesCategory && matchesSearch);
        if (!project.hidden) visibleCount++;
    });

    resultCount.textContent = currentLanguage === 'es'
        ? `Mostrando ${visibleCount} ${visibleCount === 1 ? 'proyecto' : 'proyectos'}`
        : `Showing ${visibleCount} ${visibleCount === 1 ? 'project' : 'projects'}`;
    noResults.hidden = visibleCount !== 0;
}

filters.forEach(filter => filter.addEventListener('click', () => {
    activeFilter = filter.dataset.filter;
    filters.forEach(button => {
        const active = button === filter;
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', String(active));
    });
    updateProjects();
}));

searchInput.addEventListener('input', updateProjects);
document.getElementById('year').textContent = new Date().getFullYear();