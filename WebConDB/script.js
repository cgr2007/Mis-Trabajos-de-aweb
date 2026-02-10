import db from './db.js';

const titleInput = document.getElementById('ideaTitle');
const descInput = document.getElementById('ideaDesc');
const addBtn = document.getElementById('addBtn');
const ideasGrid = document.getElementById('ideasGrid');

async function init() {
    await db.init();
    renderIdeas();
}

async function renderIdeas() {
    const ideas = await db.getAllIdeas();
    ideasGrid.innerHTML = '';

    ideas.reverse().forEach(idea => {
        const card = document.createElement('div');
        card.className = 'idea-card';
        card.innerHTML = `
            <button class="delete-btn" data-id="${idea.id}">&times;</button>
            <h3>${idea.title}</h3>
            <p>${idea.description}</p>
        `;
        ideasGrid.appendChild(card);
    });

    // Add delete listeners
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.onclick = async (e) => {
            const id = parseInt(e.target.dataset.id);
            await db.deleteIdea(id);
            renderIdeas();
        };
    });
}

addBtn.onclick = async () => {
    const title = titleInput.value.trim();
    const description = descInput.value.trim();

    if (title && description) {
        await db.addIdea({ title, description, timestamp: Date.now() });
        titleInput.value = '';
        descInput.value = '';
        renderIdeas();
    } else {
        alert('Por favor, rellena todos los campos');
    }
};

init();
