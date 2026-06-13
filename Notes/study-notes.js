/* study-notes.js — shared interactivity */

// ── Reading progress bar ─────────────────────────────────────
function initProgress() {
  const bar = document.querySelector('.reading-progress-bar');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const doc = document.documentElement;
    const scrolled = doc.scrollTop;
    const total = doc.scrollHeight - doc.clientHeight;
    bar.style.width = total > 0 ? (scrolled / total * 100) + '%' : '0%';
  }, { passive: true });
}

// ── Dark mode toggle ─────────────────────────────────────────
function initTheme() {
  const btn = document.querySelector('.theme-toggle');
  const icon = document.querySelector('.toggle-icon');
  const label = document.querySelector('.toggle-label');
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  updateToggle(saved);

  if (btn) {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateToggle(next);
    });
  }

  function updateToggle(theme) {
    if (icon) icon.textContent = theme === 'dark' ? '☀' : '☾';
    if (label) label.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
  }
}

// ── Collapsible sections ─────────────────────────────────────
function initCollapsibles() {
  document.querySelectorAll('.collapsible-header').forEach(header => {
    header.addEventListener('click', () => {
      const section = header.closest('.collapsible');
      section.classList.toggle('open');
    });
  });
}

// ── Quiz widget ───────────────────────────────────────────────
function initQuizzes() {
  document.querySelectorAll('.quiz').forEach(quiz => {
    const options = quiz.querySelectorAll('.quiz-option');
    const feedback = quiz.querySelector('.quiz-feedback');
    const resetBtn = quiz.querySelector('.quiz-reset');
    let answered = false;

    options.forEach(opt => {
      opt.addEventListener('click', () => {
        if (answered) return;
        answered = true;
        const correct = opt.dataset.correct === 'true';
        opt.classList.add(correct ? 'correct' : 'incorrect');
        if (!correct) {
          quiz.querySelector('[data-correct="true"]').classList.add('correct');
        }
        if (feedback) {
          feedback.textContent = opt.dataset.feedback || (correct ? '✓ Correct!' : '✗ Not quite.');
          feedback.className = 'quiz-feedback show ' + (correct ? 'correct' : 'incorrect');
        }
        if (resetBtn) resetBtn.classList.add('show');
      });
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        answered = false;
        options.forEach(o => { o.classList.remove('correct', 'incorrect'); });
        if (feedback) { feedback.className = 'quiz-feedback'; feedback.textContent = ''; }
        resetBtn.classList.remove('show');
      });
    }
  });
}

// ── Mobile sidebar ────────────────────────────────────────────
function initMobileSidebar() {
  const toggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');
  if (!toggle || !sidebar) return;

  function openSidebar() {
    sidebar.classList.add('open');
    overlay && overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay && overlay.classList.remove('show');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', () => {
    sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
  });

  overlay && overlay.addEventListener('click', closeSidebar);

  // Close on nav link tap so body scroll is restored
  sidebar.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (window.innerWidth <= 900) closeSidebar();
    });
  });
}

// ── Active nav link ───────────────────────────────────────────
function initActiveNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sidebar-nav a').forEach(a => {
    if (a.getAttribute('href') === current) a.classList.add('active');
  });
}

// ── Init all ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initProgress();
  initTheme();
  initCollapsibles();
  initQuizzes();
  initMobileSidebar();
  initActiveNav();
});
