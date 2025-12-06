// index.js — collected runtime scripts from mellowfellow.html

// Show health warning modal on each page open
(function () {
    function showHealthModal() {
        var modal = document.getElementById('healthWarningModal');
        var closeBtn = document.getElementById('hwCloseBtn');
        if (!modal) return;
        modal.classList.remove('hidden');

        function close() { modal.classList.add('hidden'); }

        if (closeBtn) closeBtn.addEventListener('click', close);

        // close on Escape
        document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', showHealthModal); else showHealthModal();
})();


// Team add script (inert if no Add button present)
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
