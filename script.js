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

    resultCount.textContent = `Showing ${visibleCount} ${visibleCount === 1 ? 'project' : 'projects'}`;
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