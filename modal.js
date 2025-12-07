// modal.js — show health warning modal on each page open
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
