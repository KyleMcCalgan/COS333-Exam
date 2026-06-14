# Flashcard Page — Implementation Plan

## File to create
`Notes/flashcards.html` — standalone page, no external dependencies (like the exam pages)

Add nav link in `Notes/index.html` sidebar under **Assessment** section.

---

## Card Data (~200+ cards)

### Sources

| Source | Count | Notes |
|--------|-------|-------|
| 2022 Exam | 29 | All questions including coding + traces |
| 2023 Exam | 29 | All questions |
| 2024 Exam | 28 | All questions |
| 2025 Exam | 31 | All questions |
| 2024 ST2 | ~14 | MCQ interactive only |
| 2025 ST2 | ~18 | MCQ interactive only |
| Study Cards | ~70 | Generated concept cards per chapter |
| **Total** | **~199** | |

### Card Data Structure
```js
{
  id:     string,        // e.g. 'ex2022-q1'
  front:  string,        // HTML — question text (+ options label for MCQ)
  back:   string,        // HTML — explanation / model answer
  opts:   string[]|null, // MCQ option texts (null for non-MCQ)
  ans:    number[]|null, // 1-based correct indices (null for non-MCQ)
  multi:  boolean,       // true = select-all-that-apply
  type:   'mcq'|'code'|'trace'|'concept',
  chapter: number,       // 1,2,5,6,7,8,9,12,15,16 (0 = general)
  topic:  string,        // e.g. 'evaluation-criteria', 'scope', 'coroutines'
  source: string,        // '2022-exam'|'2023-exam'|'2024-exam'|'2025-exam'|'2024-st2'|'2025-st2'|'study'
  year:   number|null,
  pts:    number,
}
```

### Generated Study Card Topics (by chapter)

**Ch 1** — evaluation criteria (readability/writability/reliability/cost), orthogonality,
implementation methods (compilation/interpretation/hybrid), portability, generality

**Ch 2** — FORTRAN, COBOL, ALGOL 60, SIMULA 67, C, Smalltalk, Ada, Java, Prolog, C++
contributions (environment → effect → contribution triad)

**Ch 5** — 4 lifetime categories, 5 binding times, keywords vs reserved words,
static vs dynamic scoping, named constants, variable hiding, dangling pointers

**Ch 6** — strong vs weak typing, free vs discriminated unions, string length types,
array categories, name vs structural type equivalence, list comprehensions,
heterogeneous arrays, pointer arithmetic

**Ch 7** — referential transparency, functional side effects, short-circuit evaluation,
APL precedence rule, conditional targets, coercions in Ada/C, unary ++ prefix vs postfix

**Ch 8** — guarded IF/DO rules, Ruby blocks/yield, counter-controlled loops (Ada vs C),
labeled break (Java vs C++), nested selector disambiguation

**Ch 9** — 5 parameter passing modes, pass-by-name, deep/shallow/ad-hoc binding,
closures, coroutines (resume semantics), generics (C++/Java/C#),
keyword vs positional params, pass-by-result physical copy only

**Ch 12** — diamond problem (implicit vs explicit collision), static vs dynamic binding,
subclasses vs subtypes, C++ private derivation, Java ADT hiding,
Smalltalk orthogonality, Ruby dynamic classes, friend functions

**Ch 15** — cond syntax, car/cdr/cons, null? base case, tail recursion, #lang racket

**Ch 16** — unification, backtracking, cut (!), Horn clauses, not(X=Y), [H|T] patterns,
top-down vs bottom-up resolution

---

## UI Layout (Desktop — 3 column)

```
+--------------------+-----------------------------+------------------+
|  FILTERS           |       FLASHCARD             |  SESSION STATS   |
|                    |                             |                  |
| [Search box]       |   +-----------------+       | Cards: 12/45     |
|                    |   |                 |       | Correct: 8       |
| Sources:           |   |  Question text  |       | Wrong: 4         |
| □ 2022 Exam        |   |  goes here...   |       | Streak: 3 ✓      |
| □ 2023 Exam        |   |                 |       |                  |
| □ 2024 Exam        |   +-[CLICK TO FLIP]-+       | Ratings this     |
| □ 2025 Exam        |                             | session:         |
| □ 2024 ST2         |   Card 12 of 45             | Easy:  5         |
| □ 2025 ST2         |   ██████░░░░░░░░░░░          | OK:    3         |
| □ Study Cards      |                             | Hard:  4         |
|                    |   [Easy] [OK] [Hard] [Skip] |                  |
| Chapters:          |                             | All-time Hard:   |
| [01][02][05][06]   |   [◀ Prev] [Flip] [Next ▶] | 12 cards         |
| [07][08][09][12]   |                             |                  |
| [15][16]           |                             | [Reset session]  |
|                    |                             |                  |
| Types:             |                             |                  |
| □ MCQ              |                             |                  |
| □ Coding           |                             |                  |
| □ Trace            |                             |                  |
| □ Concept          |                             |                  |
|                    |                             |                  |
| □ Hard cards only  |                             |                  |
| □ Unseen only      |                             |                  |
| □ Exam Qs only     |                             |                  |
|                    |                             |                  |
| [⇄ Shuffle ON]     |                             |                  |
| [Select All]       |                             |                  |
| [Clear All]        |                             |                  |
|                    |                             |                  |
| Active: 45 cards   |                             |                  |
+--------------------+-----------------------------+------------------+
```

On mobile: filter panel collapses to a floating button. Stats collapse below the card.

---

## Card Rendering Behaviour

### MCQ Cards (`type: 'mcq'`)
- **Front**: Question text + 4 option buttons (clickable)
- User clicks option → immediate green (correct) / red (wrong) highlight
- Other buttons disabled after selection
- "See Explanation" button appears after answering
- **Back** (flip to see): Explanation / reason text
- After answering: rate buttons appear (Easy / OK / Hard)

### Coding Cards (`type: 'code'`)
- **Front**: Task description (write a Scheme function / Prolog proposition)
- **Back**: Model answer code in `<pre>` block
- Click card or press Space to flip
- Rate after viewing back

### Trace Cards (`type: 'trace'`)
- **Front**: Code snippet + question (e.g. "Provide the output")
- **Back**: Traced output with step-by-step reasoning
- Click/Space to flip, then rate

### Concept Cards (`type: 'concept'`)
- **Front**: Question or term (e.g. "What is orthogonality?")
- **Back**: Definition / explanation
- Click/Space to flip, then rate

---

## Confidence Rating System (Spaced Repetition)

Each card can be rated: **Easy** · **OK** · **Hard**

- Ratings stored in `localStorage` keyed by `fc_rating_{id}`
- **Hard cards only** filter surfaces only cards rated Hard
- **Unseen only** filter shows cards with no rating yet
- Rating chip shown on card corner if already rated (dim, not intrusive)
- Stats sidebar shows count per rating bucket

---

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Space` | Flip card (non-MCQ) / submit selected option (MCQ) |
| `→` / `L` | Next card |
| `←` / `H` | Previous card |
| `1` | Rate Easy |
| `2` | Rate OK |
| `3` | Rate Hard |
| `S` | Toggle shuffle |
| `F` | Focus search box |
| `?` | Show shortcut help |

---

## LocalStorage Keys

```
fc_rating_{id}        →  'easy'|'ok'|'hard'
fc_filters            →  JSON of last-used filters
fc_shuffle            →  'true'|'false'
```

---

## CSS Animation (Card Flip)

```css
.card-scene {
  perspective: 1200px;
}
.card-inner {
  transform-style: preserve-3d;
  transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1);
}
.card-inner.flipped {
  transform: rotateY(180deg);
}
.card-front, .card-back {
  backface-visibility: hidden;
  position: absolute; inset: 0;
}
.card-back {
  transform: rotateY(180deg);
}
```

Additional polish:
- Card slides in from right on Next, from left on Prev
- Bounce animation when rated
- Green flash on correct MCQ, red shake on wrong

---

## Extra Bells & Whistles

- **URL hash sync**: current filter state encoded in `#` so you can share a filtered deck
- **Deck complete screen**: shown when all cards in deck have been seen; shows session summary + restart button
- **Quick filter presets**: one-click buttons for common combos:
  - "2026 Exam prep" (all 4 exam papers)
  - "Hard cards review" (only Hard-rated)
  - "Chapter 9 deep dive" (Ch9 only)
  - "Coding practice" (code type only)
- **Progress ring**: circular SVG progress indicator showing % of deck seen
- **Dark / Light mode**: respects `prefers-color-scheme`, also has manual toggle
- **Print mode**: CSS `@media print` renders a printable list of front/back pairs
- **Card counter badge**: filter chips show how many cards match each option
- **"Back to notes"** links on each card to the relevant chapter page

---

## Implementation Steps

1. Create `Notes/flashcards.html`
   - HTML structure (3-column layout)
   - Inline CSS (self-contained, no external deps)
   - Full `CARDS` array with all ~199 cards
   - JS: state, filter, render, localStorage, keyboard shortcuts

2. Add nav link in `Notes/index.html` sidebar
   ```html
   <a href="flashcards.html"><span class="nav-chapter">FC</span> Flashcards</a>
   ```

3. (Optional) Add "Practice with flashcards →" link on `mcq.html` and chapter pages
