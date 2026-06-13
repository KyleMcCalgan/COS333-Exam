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

// ── Chapter nav tooltips ──────────────────────────────────────
const CHAPTER_HINTS = {
  'chapter1.html': {
    priority: 'HIGH',
    label: 'Preliminaries',
    concepts: ['Evaluation criteria (readability, writability, reliability, cost)', 'Orthogonality', 'Implementation methods (compilation, interpretation, hybrid)'],
    scope: '"Orthogonality will definitely be tested. Apply criteria to both real and hypothetical PLs — scenarios require answers tailored to the given context."'
  },
  'chapter2.html': {
    priority: 'MEDIUM',
    label: 'Evolution of PLs',
    concepts: ['Environment → effect → contribution for each language', 'FORTRAN through Java lineage', 'Portability and readability comparisons'],
    scope: '"For each language know exactly three things: the environment for its development, how that environment affected the design, and the main contribution(s)."'
  },
  'chapter5.html': {
    priority: 'HIGH',
    label: 'Names, Bindings & Scopes',
    concepts: ['Binding times (language design → runtime)', 'Storage lifetimes (static, stack-dynamic, heap-dynamic)', 'Static vs dynamic scoping', 'Keywords vs reserved words'],
    scope: '"The whole chapter is examinable. No sections are excluded."'
  },
  'chapter6.html': {
    priority: 'MEDIUM',
    label: 'Data Types',
    concepts: ['Strong vs weak typing', 'Discriminated unions (tag field = safer)', 'Type equivalence: name vs structural', 'String length categories and trade-offs'],
    scope: '"Pay attention to discriminated unions — a graphical example is in the slides. For type equivalence, only slide details are examinable."'
  },
  'chapter7.html': {
    priority: 'VERY HIGH',
    label: 'Expressions & Assignments',
    concepts: ['Short-circuit evaluation + side effects', 'Referential transparency', 'Coercions (Ada has none → more reliable)', 'APL operator precedence = orthogonality'],
    scope: '"Pay special attention to side effects and referential transparency — discussed in Ch15 slides and will be tested here too."'
  },
  'chapter8.html': {
    priority: 'HIGH',
    label: 'Control Structures',
    concepts: ['Guarded commands: if…fi and do…od traces', 'Ruby blocks and yield traces', 'Nested selector disambiguation (Python/Ruby/Perl)', 'Counter-controlled loop reliability comparisons'],
    scope: '"Make sure you understand Ruby blocks (Section 8.3.4). Pay special attention to guarded commands (Section 8.5)."'
  },
  'chapter9.html': {
    priority: 'VERY HIGH',
    label: 'Subprograms',
    concepts: ['All parameter passing modes (value, reference, value-result, name)', 'Ad-hoc / shallow / deep binding traces', 'Closures — MakeAdder pattern', 'Coroutine output traces', 'Generics: C++ templates vs Java erasure vs C# reification'],
    scope: '"Terminology is critical. Closures (9.12) and coroutines (9.13) are very important. Generics 9.10.1–9.10.3: understand the differences."'
  },
  'chapter12.html': {
    priority: 'VERY HIGH',
    label: 'OOP Support',
    concepts: ['Multiple inheritance diamond problem (implicit vs explicit collision)', 'Dynamic vs static message binding', 'Subclasses vs subtypes (Liskov substitution)', 'Smalltalk / C++ / Java / Ruby OOP differences'],
    scope: '"This chapter is very important. Leave out Sections 12.5 and 12.6. Everything else is examinable."'
  },
  'chapter15.html': {
    priority: 'VERY HIGH',
    label: 'Functional Programming & Scheme',
    concepts: ['car / cdr / cons / null?', 'cond-based recursive list functions', 'Tail recursion', 'Side effects and referential transparency'],
    scope: '"Exactly one Scheme implementation question involving list processing — no more complex than member, equal, append. Use DrRacket (#lang racket)."'
  },
  'chapter16.html': {
    priority: 'VERY HIGH',
    label: 'Logic Programming',
    concepts: ['Facts, rules, and goals syntax', 'Backtracking and unification', 'Recursive list predicates (multi-clause pattern)', 'Cut operator and not', 'No if-then-else or built-in member/append'],
    scope: '"Exactly one Prolog implementation question involving list processing. All material in the chapter is examinable."'
  },
  'prolog-practical.html': {
    priority: 'HIGH',
    label: 'Prolog in Practice',
    concepts: ['Multi-clause list predicates', 'Arithmetic with is', 'Cut and not usage', 'Recursive patterns from scratch'],
    scope: 'Exam reference permitted. Builds the skills directly needed for the Ch16 implementation question.'
  },
  'prolog-list-patterns.html': {
    priority: 'HIGH',
    label: 'List Patterns',
    concepts: ['Head/tail unification [H|T]', 'Base case: empty list []', 'Pattern matching across multiple clauses'],
    scope: 'Exam reference permitted. Core patterns used in every Prolog list processing question.'
  },
  'scheme-practical.html': {
    priority: 'HIGH',
    label: 'Scheme in Practice',
    concepts: ['#lang racket header', 'cond with multiple conditions', 'Recursive list templates', 'DrRacket environment'],
    scope: 'Builds the skills directly needed for the Ch15 implementation question. The exam uses DrRacket under Windows.'
  },
  'past-papers.html': {
    priority: 'HIGH',
    label: 'Past Papers Archive',
    concepts: ['2022–2025 exam papers', '2022–2025 Semester Test 2 papers', 'Interactive quizzes with feedback'],
    scope: 'Every exam follows a consistent format: 40 marks, 3 hours, 1 Scheme question, 1 Prolog question, ~28–31 MCQs.'
  },
  'mcq.html': {
    priority: 'HIGH',
    label: 'MCQ Bank',
    concepts: ['180 multiple-choice questions', 'Filter by chapter', 'Instant feedback on selection'],
    scope: 'MCQs carry a penalty for wrong multi-select answers — only select options you are confident about.'
  },
  'mindmap.html': {
    priority: 'MEDIUM',
    label: 'Knowledge Graph',
    concepts: ['Interactive concept map', 'Links between chapters and paradigms', 'Visual overview of the full syllabus'],
    scope: 'Use to see how topics connect across chapters before drilling into individual notes.'
  },
};

const PRIORITY_COLOUR = { 'VERY HIGH': '#c53030', 'HIGH': '#b7791f', 'MEDIUM': '#2b6cb0' };

function initNavTooltips() {
  if (window.innerWidth <= 900) return;

  const style = document.createElement('style');
  style.textContent = `
    #nav-toast {
      position: fixed; z-index: 9999;
      opacity: 0; transform: translateX(-6px);
      transition: opacity 0.14s ease, transform 0.14s ease;
      max-width: 300px; min-width: 230px;
    }
    #nav-toast.nt-visible { opacity: 1; transform: translateX(0); }
    #nav-toast-inner {
      background: var(--bg-content, #fff);
      border: 1px solid var(--border, #e2e8f0);
      border-radius: 10px;
      box-shadow: 0 8px 28px rgba(0,0,0,0.13);
      padding: 13px 15px;
      font-size: 0.77rem;
      color: var(--text-primary, #1a202c);
      line-height: 1.45;
    }
    .nt-priority {
      display: inline-block;
      font-size: 0.58rem; font-weight: 700; letter-spacing: 0.1em;
      text-transform: uppercase; padding: 2px 8px;
      border-radius: 99px; color: #fff; margin-bottom: 7px;
    }
    .nt-title {
      font-weight: 700; font-size: 0.84rem;
      margin-bottom: 7px; color: var(--text-primary, #1a202c);
    }
    .nt-concepts {
      list-style: none; margin: 0 0 9px; padding: 0;
      display: flex; flex-direction: column; gap: 3px;
    }
    .nt-concepts li::before { content: '→ '; color: var(--accent, #4f46e5); font-weight: 600; }
    .nt-scope {
      font-style: italic; color: var(--text-muted, #718096);
      border-left: 2px solid var(--accent, #4f46e5);
      padding-left: 8px; line-height: 1.4;
    }
    .nt-link {
      display: inline-block; margin-top: 7px;
      font-size: 0.72rem; color: var(--accent, #4f46e5);
      text-decoration: none; font-style: normal;
    }
    .nt-link:hover { text-decoration: underline; }
  `;
  document.head.appendChild(style);

  const toast = document.createElement('div');
  toast.id = 'nav-toast';
  toast.innerHTML = '<div id="nav-toast-inner"></div>';
  document.body.appendChild(toast);

  let hideTimer = null;

  toast.addEventListener('mouseenter', () => clearTimeout(hideTimer));
  toast.addEventListener('mouseleave', () => {
    hideTimer = setTimeout(() => toast.classList.remove('nt-visible'), 100);
  });

  document.querySelectorAll('.sidebar-nav a').forEach(link => {
    const key = (link.getAttribute('href') || '').split('#')[0];
    const hint = CHAPTER_HINTS[key];
    if (!hint) return;

    link.addEventListener('mouseenter', () => {
      clearTimeout(hideTimer);
      const colour = PRIORITY_COLOUR[hint.priority] || '#718096';
      toast.querySelector('#nav-toast-inner').innerHTML = `
        <span class="nt-priority" style="background:${colour}">${hint.priority} PRIORITY</span>
        <div class="nt-title">${hint.label}</div>
        <ul class="nt-concepts">${hint.concepts.map(c => `<li>${c}</li>`).join('')}</ul>
        <div class="nt-scope">${hint.scope}
          <a class="nt-link" href="index.html#scope">View full scope ↗</a>
        </div>
      `;

      const sidebar = document.querySelector('.sidebar');
      const sRect = sidebar ? sidebar.getBoundingClientRect() : { right: 260 };
      const lRect = link.getBoundingClientRect();

      let top = lRect.top;
      const estHeight = 60 + hint.concepts.length * 22;
      if (top + estHeight > window.innerHeight - 12) {
        top = window.innerHeight - estHeight - 12;
      }
      if (top < 8) top = 8;

      toast.style.left = (sRect.right + 12) + 'px';
      toast.style.top = top + 'px';
      toast.classList.add('nt-visible');
    });

    link.addEventListener('mouseleave', () => {
      hideTimer = setTimeout(() => toast.classList.remove('nt-visible'), 100);
    });
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
  initNavTooltips();
});
