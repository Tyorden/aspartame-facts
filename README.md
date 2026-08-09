# aspartame-facts

An evidence-based static site about aspartame: what the research actually shows, which
viral claims hold up, and where the critics have a real point.

No build step, no dependencies, no JavaScript except the dose calculator. Every page is
hand-written HTML against one stylesheet.

## Principles

This is a debunking site, which makes it easy to become the mirror image of what it
debunks. Four rules keep it honest:

1. **Primary sources over press releases.** Regulator documents (FDA, EFSA, JECFA, IARC),
   journal pages, and systematic reviews. News outlets are cited for events, not science.
2. **Industry sources are labelled.** The International Sweeteners Association, Calorie
   Control Council, UNESDA, and beverage companies are advocacy organisations. They can be
   cited, but never as sole support for a claim, and always labelled inline. Activist
   sources (US Right To Know, Mission Possible) get identical treatment.
3. **Genuine caveats get their own page, not a footnote.** PKU, the WHO 2023 guideline on
   non-sugar sweeteners, the documented conflict-of-interest literature, and the open
   questions in the observational evidence are stated plainly on `caveats.html`.
4. **Concede what's true, not what merely sounds even-handed.** A real limitation of a
   real study gets stated. A fact reframed to sound damaging when it isn't — the age of a
   regulatory opinion, say — is not evenhandedness, it's inaccuracy pointed the other way.
   See "Editorial voice" below.

## Structure

```
index.html            The short version, the five-point headline checklist, page decks
calculator.html       Dose calculator — enter body weight, get your own limit (the only JS)
perspective.html      Hazard vs risk, what Group 2B is a list of, caffeine comparison

metabolism.html       Hydrolysis, phenylalanine, aspartate, methanol, formaldehyde
symptoms.html         Headache, seizures, mood, children's behaviour, MS and lupus
cancer.html           Ramazzini rat studies, the slide re-read, human cohorts
cardiometabolic.html  The strongest case against aspartame, and what answers it
weight.html           Randomised trials vs cohorts on body weight
pregnancy.html        Cord blood, the diet-drink signal, regulator positions
sweeteners.html       Why findings don't transfer between sweeteners

the-evidence.html     EFSA 2013 endpoint by endpoint; the July 2023 IARC/JECFA split
origins.html          The 1995 chain email; the FDA approval history
the-study.html        The 2025 Neurology sweetener–cognition study, appraised

rebuttals.html        The seven arguments you'll be given, and what's wrong with each
myths.html            Claim by claim, with a verdict and a source on each
caveats.html          Where the critics are right

sources.html          Full bibliography
directory.html        Every page with its sections; claim-to-answer lookup table
about.html            Independence, funding, and why the site exists

assets/style.css      All styling. Light/dark aware, no external assets
research/             25 sourced research briefs behind the site content
tools/                Workflow scripts that generated the briefs
RESEARCH-STATUS.md    Which briefs exist, what's unaudited, the correction log
```

The five groups above match the five nav groups in the masthead: Start, Evidence, Record,
Arguments, Reference.

## Conventions

**Every page** carries the same masthead — five `.nav-group` blocks, each a `.nav-label`
plus a `.nav-links` wrapper, with `aria-current="page"` on its own link — then a
`.page-head` with eyebrow/h1/standfirst, a `.prose` column, and a footer naming its main
sources plus the corrections link. Longer pages add a `.toc`.

The nav renders one group per row with the labels aligned in a column down the left. The
`.nav-links` wrapper is what makes that alignment possible: without it the anchors would
wrap into the label's row and the grouping would read as accidental. On narrow screens the
label stacks above its links instead. The masthead is deliberately **not** sticky — five
rows of header is too much to pin.

**Components** live in `assets/style.css` and are the only vocabulary: `.callout` (plus
`--warn` and `--danger`), `.tag` verdict chips, `.stats`, `.cards` decks, `.table-wrap`
for anything that scrolls sideways, `.sources` for compact link lists. Add a new component
only when none of these fits.

**Headings** are `h2` for sections with an `id` (the TOC and cross-page deep links depend
on those ids being stable), `h3` for subsections, `h4` inside cards.

**Units** are given both ways — kg with lb in parentheses — because half the audience is
American.

## Editorial voice

Worth stating explicitly, because it's the failure mode this site is most prone to:

- **Don't narrate the site's own position.** "That's an awkward fact for a page arguing X"
  is editorialising, not evidence. State what's true and let the reader judge.
- **Don't manufacture symmetry.** If a principle helps aspartame more than it hurts it,
  say so; claiming it "cuts both ways" when it doesn't is inaccurate.
- **Don't overstate a debunk.** "Studies show no link" is false where no study has looked.
  The weaker, accurate phrasing is nearly always sufficient — and a critic who knows the
  literature will catch the overstatement and discard everything else with it.
- **Do concede real limitations,** immediately followed by the context that makes them
  interpretable. `caveats.html` is the model.

## Checking the site

There's no test suite. Before committing structural changes, verify that markup is
balanced, every internal link and anchor resolves, and each page has exactly five nav
groups and one `aria-current`:

```bash
python3 - <<'PY'
from html.parser import HTMLParser
import re, os, glob
VOID = {'meta','link','br','hr','img','input','source'}
pages = {os.path.basename(p) for p in glob.glob('*.html')}
ids = {p: set(re.findall(r'id="([^"]+)"', open(p).read())) for p in pages}
bad = []
for p in sorted(pages):
    s = open(p).read()
    class P(HTMLParser):
        def __init__(x): super().__init__(); x.st = []; x.err = []
        def handle_starttag(x, t, a):
            if t not in VOID: x.st.append(t)
        def handle_endtag(x, t):
            if t in VOID: return
            if not x.st or x.st[-1] != t: x.err.append(f'{p}:{x.getpos()[0]} </{t}>')
            else: x.st.pop()
    x = P(); x.feed(s)
    if x.err or x.st: bad.append((p, 'markup', x.err[:2], x.st))
    for cls, want in (('nav-group', 5), ('nav-links', 5), ('aria-current="page"', 1)):
        if s.count(cls) != want: bad.append((p, cls, s.count(cls)))
    for h in re.findall(r'href="([^"]+)"', s):
        if h.startswith(('http', 'mailto:')): continue
        if h.startswith('#'):
            if h[1:] not in ids[p]: bad.append((p, h, 'bad anchor'))
            continue
        f, _, a = h.partition('#')
        if f not in pages and not os.path.exists(f): bad.append((p, h, 'missing file'))
        elif f in pages and a and a not in ids[f]: bad.append((p, h, 'missing anchor'))
print('\n'.join(map(str, bad)) or 'ok')
PY
```

To view it locally: `python3 -m http.server 8000`, then open `http://localhost:8000`.
Opening the files directly over `file://` works too.

## Adding or changing a claim

1. Check `research/` for a brief covering it. If none exists, research it first — nothing
   goes on the site that isn't traceable to a brief.
2. Add the citation to `sources.html`, labelled if it's an industry or advocacy source.
3. If the claim contradicts something already published, fix both and log it in
   `RESEARCH-STATUS.md`.
4. If it deserves a deep link, give the section a stable `id` and add it to
   `directory.html` — both the page's section list and, if it's a claim people arrive
   with, the lookup table.

## Deploying

Pure static — no build step. Point Vercel at the repo root and it serves as-is.

## Contributing corrections

If something here is wrong, it should be fixed. Open an issue with the claim, the
correction, and a primary source.
