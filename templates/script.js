
// Données des projets
const projectsData = {
  1: {
    title: "SAÉ 21",
    description: "Comprendre et construire une architecture de réseaux d'entreprise et d'Internet,<br>Élaborer une méthode efficace pour tester progressivement la configuration réealisée,<br>Construire un réseau local virtuel VLAN,<br>Intercepter un trafic entre 2 ordinateurs et identifier le chemin utilisé,<br>Construire une passerelle entre un réseau émulé et un réseau réel...",
    technologies: ["Cisco Packet Tracer (9.0.0)", "CLI", "Linux"],
    results: "Un fichier .pkt contenant la configuration du réseau, un rapport complet expliquant les étapes de la réalisation du projet, et une vidéo de démonstration du réseau fonctionnel.",
    rex: "Ce projet m'a permis de mieux comprendre le fonctionnement des réseaux d'entreprise et d'Internet, ainsi que les différentes technologies utilisées pour les construire et les tester. J'ai pu me former aux 'bonnes pratiques' de configuration et m'informer sur les standarts de sécurité dans les topologies de réseaux.",
  },
  2: {
    title: "R211: Interview d'un professionnel",
    description: "Organiser et réaliser en groupe l'interview d'un professionnel des RT. <br>Cette personne devait obligatoirement appartenir à notre réseau secondaire.",
    technologies: ["LinkedIn", "Outlook", "Powerpoint"],
    results: "Soutenance orale expliquant les circonstances de l'interview, les questions posées, les réponses obtenues et les enseignements tirés de cette expérience.",
    rex: "Avec ce projet, j'ai pu découvrir pour la première fois le monde professionel des RT, qui plus est à Monaco. Ce qui m'a surpris, c'est la présence quotidienne d'un aspect souvent trop sous-estimé dans ces métiers: la communication et la maîtrise de l'anglais - Monaco oblige -. J'ai pu constater que la communication est un aspect essentiel dans le monde professionnel, et qu'il est important de savoir s'exprimer clairement et efficacement.",
  },
  3: {
    title: "SAÉ15, SAÉ23 et SAÉ24",
    description: "Mettre en place un système qui prenne des photos d'un banc avionique avant chaque exécution de test ou sur demande.<br>Le système gère la prise de photo automatique et / ou manuelle, l'archivage des photos avec un site web permettant de parcourir l'historique de toutes les photos disponibles.<br>Le système gère un détecteur de luminosité.<br>Le système gère les utilisateurs autorisés",
    technologies: ["PHP", "HTML5", "CSS3", "Python", "SQL", "Raspberry Pi", "Linux", "Powershell", "SSH", "Électronique", "Git", "GitHub", "Drawio ", "Excel", "Word", "Powerpoint"],
    results: "Système complet, basé sur une Raspberry Pi 3, connecté à un site web local",
    rex: "Ce projet m'a permis de mettre en pratique l'entièreté des compétences acquises lors de ma première année de BUT R&T. Ce projet fut extrêmement dense et complexe à mettre en place, mais le produit final est intéréssant car c'est un concentré de technologies et de compétences. Pour moi, ce projet est à l'image de la formation, car on manipule les acquis vu en cours.",
  },
};

// MODAL WITH PROJECT DETAILS

function openProjectModal(element) {
  const projectId = element.getAttribute('data-project-id');
  const project = projectsData[projectId];
  
  if (!project) return;
  
  const modalBody = document.getElementById('modalBody');
  const technologiesList = project.technologies.map(tech => `<li>${tech}</li>`).join('');
  
  // DOWNLOAD BUTTON

  let downloadButton = '';
  if (projectId === '1') {
    downloadButton = '<a href="../files/SAE21_LAST.pkt" download class="w3-button w3-pink" style="margin-top: 16px;">Télécharger le fichier</a>';
  }
  if (projectId === '2') {
    downloadButton = '<a href="../files/#" download class="w3-button w3-pink" style="margin-top: 16px;">Télécharger le fichier</a>';
  }
  if (projectId === '3') {
    downloadButton = '<a href="../files/#" download class="w3-button w3-pink" style="margin-top: 16px;">Télécharger le fichier</a>';
  }
  
  // MODAL CONTENT

  modalBody.innerHTML = `
    <h2 class="w3-text-pink">${project.title}</h2>
    <p class="w3-text-white"><strong>Description:</strong></p>
    <p class="w3-text-light-grey">${project.description}</p>
    <p class="w3-text-white"><strong>Technologie utilisée:</strong></p>
    <ul class="w3-text-light-grey">${technologiesList}</ul>
    <p class="w3-text-white"><strong>Résultats:</strong></p>
    <p class="w3-text-light-grey">${project.results}</p>
    ${downloadButton}
    <p class="w3-text-white"><strong>Retour d'expérience:</strong></p>
    <p class="w3-text-light-grey">${project.rex}</p>
  `;
  
  document.getElementById('projectModal').style.display = 'block';
}

  // CLOSE MODAL

function closeProjectModal() {
  document.getElementById('projectModal').style.display = 'none';
}

// CLOSE MODAL WHEN CLICKING OUTSIDE OF IT

window.onclick = function(event) {
  const modal = document.getElementById('projectModal');
  if (event.target === modal) {
    closeProjectModal();
  }
}

// NAVIGATION BAR ACTIVE LINK HIGHLIGHTING

document.addEventListener('DOMContentLoaded', function() {
  const currentPageFull = window.location.pathname.split('/').pop() || 'index.html';
  const currentPage = currentPageFull.split('?')[0]; // Enlever les query params si présentes
  const navLinks = document.querySelectorAll('.header-nav ul li a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    // Récupérer le nom du fichier du lien (enlever les chemins relatifs)
    const hrefFile = href.split('/').pop() || 'index.html';
    
    // Vérifier si c'est la page courante
    if (hrefFile === currentPage || (currentPage === '' && hrefFile === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

//NEW CODE FOR WEBSITE APPEARANCE

(function() {
  'use strict';

  // Respect user's reduced motion preference
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  function initReveals() {
    const els = document.querySelectorAll('.project-card, .info-card, .hero-section, .photo-placeholder, .project-modal-content');
    els.forEach(el => el.classList.add('reveal'));

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  }

  function initHeaderEffects() {
    const headers = document.querySelectorAll('.header-nav h2');
    headers.forEach(h => h.classList.add('gradient-text'));
  }

  function initPhotoParallax() {
    const photo = document.querySelector('.photo-placeholder');
    if (!photo) return;

    let rect = photo.getBoundingClientRect();
    window.addEventListener('resize', () => rect = photo.getBoundingClientRect());

    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      photo.style.transform = `translate3d(${x * 8}px, ${y * 6}px, 0) rotate(${x * 2}deg)`;
    });

    photo.addEventListener('mouseleave', () => { photo.style.transform = ''; });
  }

  // Mouse halo that follows the cursor (detached)
  function initMouseHalo() {
    if (window.matchMedia && (window.matchMedia('(hover: none)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches)) return;

    let halo = document.querySelector('.mouse-halo');
    if (!halo) {
      halo = document.createElement('div');
      halo.className = 'mouse-halo';
      const inner = document.createElement('div'); inner.className = 'halo-inner';
      halo.appendChild(inner);
      document.body.appendChild(halo);
    }

    const inner = halo.querySelector('.halo-inner');
    let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
    let rafId = null;

    function updatePosition() {
      halo.style.setProperty('--mouse-x', mouseX + 'px');
      halo.style.setProperty('--mouse-y', mouseY + 'px');
      inner.style.left = mouseX + 'px';
      inner.style.top = mouseY + 'px';
      rafId = null;
    }

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX; mouseY = e.clientY;
      if (!rafId) rafId = requestAnimationFrame(updatePosition);
    }, { passive: true });

    // support touchmove for mobile when pointer is coarse
    document.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches[0]) {
        mouseX = e.touches[0].clientX; mouseY = e.touches[0].clientY;
        if (!rafId) rafId = requestAnimationFrame(updatePosition);
      }
    }, { passive: true });
  }

  // Mobile menu toggle injection (detached)
  function initMobileMenu() {
    const header = document.querySelector('.header-nav');
    if (!header) return;

    // create button if not present
    let toggle = header.querySelector('.mobile-toggle');
    if (!toggle) {
      toggle = document.createElement('button');
      toggle.className = 'mobile-toggle';
      toggle.setAttribute('aria-label', 'Ouvrir le menu');
      toggle.innerHTML = '☰';
      header.insertBefore(toggle, header.querySelector('ul'));
    }

    toggle.addEventListener('click', (e) => {
      header.classList.toggle('nav-open');
    });

    // close menu when clicking a link
    header.addEventListener('click', (e) => {
      if (e.target && e.target.matches('.header-nav ul li a')) {
        header.classList.remove('nav-open');
      }
    });

    // close on outside click
    document.addEventListener('click', (e) => {
      if (!header.contains(e.target)) header.classList.remove('nav-open');
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    initReveals();
    initHeaderEffects();
    initPhotoParallax();
    initMouseHalo();
    initMobileMenu();
  });
})();
