
// Données des projets
const projectsData = {
  1: {
    title: "SAÉ 21",
    description: "Comprendre et construire une architecture de réseaux d'entreprise et d'Internet,<br>Élaborer une méthode efficace pour tester progressivement la configuration réealisée,<br>Construire un réseau local virtuel VLAN,<br>Intercepter un trafic entre 2 ordinateurs et identifier le chemin utilisé,<br>Construire une passerelle entre un réseau émulé et un réseau réel...",
    technologies: ["Cisco Packet Tracer (9.0.0)", "CLI", "Linux"],
    results: "Un fichier .pkt contenant la configuration du réseau, un rapport complet expliquant les étapes de la réalisation du projet, et une vidéo de démonstration du réseau fonctionnel.",
  },
  2: {
    title: "R211: Interview d'un professionnel",
    description: "Organiser et réaliser en groupe l'interview d'un professionnel des RT. <br>Cette personne devait obligatoirement appartenir à notre réseau secondaire.",
    technologies: ["LinkedIn", "Outlook", "Powerpoint"],
    results: "Soutenance orale expliquant les circonstances de l'interview, les questions posées, les réponses obtenues et les enseignements tirés de cette expérience.",
  },
  3: {
    title: "SAÉ15, SAÉ23 et SAÉ24",
    description: "Mettre en place un système qui prenne des photos d'un banc avionique avant chaque exécution de test ou sur demande.<br>Le système gère la prise de photo automatique et / ou manuelle, l'archivage des photos avec un site web permettant de parcourir l'historique de toutes les photos disponibles.<br>Le système gère un détecteur de luminosité.<br>Le système gère les utilisateurs autorisés",
    technologies: ["PHP", "HTML5", "CSS3", "Python", "SQL", "Raspberry Pi", "Linux", "Powershell", "SSH", "Électronique", "Git", "GitHub", "Drawio ", "Excel", "Word", "Powerpoint"],
    results: "Système complet, basé sur une Raspberry Pi 3, connecté à un site web local",
  },
};

// Ouvrir la modale avec les détails du projet
function openProjectModal(element) {
  const projectId = element.getAttribute('data-project-id');
  const project = projectsData[projectId];
  
  if (!project) return;
  
  const modalBody = document.getElementById('modalBody');
  const technologiesList = project.technologies.map(tech => `<li>${tech}</li>`).join('');
  
  // Déterminer le lien de téléchargement selon le projet
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
  
  modalBody.innerHTML = `
    <h2 class="w3-text-pink">${project.title}</h2>
    <p class="w3-text-white"><strong>Description:</strong></p>
    <p class="w3-text-light-grey">${project.description}</p>
    <p class="w3-text-white"><strong>Technologie utilisée:</strong></p>
    <ul class="w3-text-light-grey">${technologiesList}</ul>
    <p class="w3-text-white"><strong>Résultats:</strong></p>
    <p class="w3-text-light-grey">${project.results}</p>
    ${downloadButton}
  `;
  
  document.getElementById('projectModal').style.display = 'block';
}

// Fermer la modale
function closeProjectModal() {
  document.getElementById('projectModal').style.display = 'none';
}

// Fermer la modale quand on clique en dehors du contenu
window.onclick = function(event) {
  const modal = document.getElementById('projectModal');
  if (event.target === modal) {
    closeProjectModal();
  }
}
// Automatiquement activer le lien de la page actuelle
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
