// Portfolio page specific JavaScript
// Dynamically loads projects and handles modal interactions

document.addEventListener('DOMContentLoaded', function() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    const modal = document.getElementById('project-modal');
    const modalClose = document.getElementById('modal-close');

    // Load projects dynamically
    function loadProjects() {
        if (typeof projects === 'undefined') {
            console.error('Projects data not loaded');
            return;
        }

        projects.forEach((project, index) => {
            const card = createProjectCard(project, index + 1);
            portfolioGrid.appendChild(card);
        });
    }

    // Create project card element
    function createProjectCard(project, number) {
        const card = document.createElement('div');
        card.className = 'portfolio-card';
        card.setAttribute('data-project-id', project.id);
        
        card.innerHTML = `
            <div class="portfolio-image">
                <img src="${project.image}" alt="${project.title}" class="project-bg-image">
            </div>
            <div class="portfolio-card-content">
                <div class="project-number-badge">${number.toString().padStart(2, '0')}</div>
                <h3>${project.title}</h3>
                <p class="project-company">${project.company}</p>
                <p class="project-description">${project.shortDescription}</p>
                <div class="portfolio-tags">
                    ${project.technologies.slice(0, 5).map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <button class="view-details-btn">View Details</button>
            </div>
        `;

        // Add click event to show modal
        card.addEventListener('click', () => showProjectModal(project, number));

        return card;
    }

    // Show project modal with details
    function showProjectModal(project, number) {
        document.getElementById('modal-number').textContent = `Project ${number.toString().padStart(2, '0')}`;
        document.getElementById('modal-title').textContent = project.title;
        document.getElementById('modal-company').textContent = project.company;
        document.getElementById('modal-duration').textContent = project.duration;
        document.getElementById('modal-description').textContent = project.fullDescription;
        document.getElementById('modal-image').src = project.image;
        document.getElementById('modal-image').alt = project.title;

        // Load benchmark image if available
        const benchmarkImageContainer = document.getElementById('modal-benchmark-image');
        console.log('Benchmark image check:', project.benchmarkImage, benchmarkImageContainer);
        if (project.benchmarkImage && benchmarkImageContainer) {
            benchmarkImageContainer.innerHTML = `
                <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Benchmark Results</h3>
                <img src="${project.benchmarkImage}" alt="INT8 Throughput Benchmark" style="width: 100%; max-width: 800px; margin-top: 1rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            `;
            benchmarkImageContainer.style.display = 'block';
            console.log('Benchmark image displayed');
        } else if (benchmarkImageContainer) {
            benchmarkImageContainer.style.display = 'none';
            benchmarkImageContainer.innerHTML = '';
        }

        // Load detail image if available (e.g., hardware setup)
        const detailImageContainer = document.getElementById('modal-detail-image');
        if (project.detailImage && detailImageContainer) {
            detailImageContainer.innerHTML = `
                <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Hardware Setup</h3>
                <img src="${project.detailImage}" alt="Hardware Setup" style="width: 100%; max-width: 800px; margin-top: 1rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            `;
            detailImageContainer.style.display = 'block';
        } else if (detailImageContainer) {
            detailImageContainer.style.display = 'none';
            detailImageContainer.innerHTML = '';
        }

        // Load features
        const featuresList = document.getElementById('modal-features');
        featuresList.innerHTML = '';
        project.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });

        // Load technologies
        const techTags = document.getElementById('modal-technologies');
        techTags.innerHTML = '';
        project.technologies.forEach(tech => {
            const span = document.createElement('span');
            span.textContent = tech;
            techTags.appendChild(span);
        });

        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    // Close modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Event listeners for closing modal
    modalClose.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });

    // Initialize
    loadProjects();
});

