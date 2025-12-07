// team.js — team-card insertion logic
document.addEventListener('DOMContentLoaded', function () {
  const addBtn = document.getElementById('addTeamBtn');
  const teamGrid = document.getElementById('teamGrid');
  const template = document.getElementById('teamCardTemplate');

  if (addBtn && teamGrid && template) {
    addBtn.addEventListener('click', function () {
      const clone = template.content.cloneNode(true);
      teamGrid.appendChild(clone);
      setTimeout(() => {
        const cards = teamGrid.querySelectorAll('.team-card');
        if (cards.length) cards[cards.length - 1].scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 50);
    });
  }
});
