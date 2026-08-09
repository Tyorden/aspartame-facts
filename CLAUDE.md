# Working in this repo

Read `README.md` first — it has the page inventory, the component vocabulary, and the
validation script. This file covers what an agent gets wrong here if nobody says it.

## What this project is

A static evidence reference on aspartame. 19 hand-written HTML pages, one stylesheet, no
build step, no dependencies, no framework. The only JavaScript on the site is the dose
calculator in `calculator.html`. Keep it that way — a build step would be a regression.

Everything published traces to a sourced brief in `research/`. If you're about to write a
factual claim that isn't in one, stop and check; if no brief covers it, the claim doesn't go
on the site yet.

## The failure mode this site is most prone to

It argues a position — that aspartame is safe at real-world intakes — so it is constantly
tempted to prove its own fairness. That temptation produces three specific bugs, all of which
have shipped here at least once:

1. **Narrating the site's own rhetorical position.** "That's an awkward fact for a page
   arguing X." "This is uncomfortable for us." "Where the usual defence overreaches." The
   reader wants the fact, not your relationship to it. State the fact.
2. **Manufacturing symmetry.** Claiming a principle "cuts both ways" when the evidence says
   it mostly cuts one way. Presenting a neutral fact — the *date* of a regulatory opinion —
   as though it were damaging. This isn't balance, it's inaccuracy aimed the other direction,
   and it's just as wrong as inaccuracy aimed at the thesis.
3. **Overstating a debunk.** "Studies show no link" where no study has looked. The accurate
   phrasing is usually weaker-sounding and always sufficient.

The reverse is equally forbidden: a genuine limitation of a genuine study gets stated plainly
and then given the context that makes it interpretable. `caveats.html` and
`cardiometabolic.html` are the models — both make the strongest honest case against, then
answer it.

Rule of thumb: **if a sentence is about the site rather than about aspartame, cut it.**

## Editing conventions

- **Section `id`s are an API.** `directory.html` deep-links into them and pages cross-link to
  each other. Renaming a heading is fine; changing its `id` means updating every referrer.
  Run the validator in the README after any structural edit.
- **The masthead is identical on every page** except which link carries `aria-current="page"`.
  Adding a page means updating the nav on all of them — script it, don't hand-edit 19 files.
- **Both units, always.** kg with lb in parentheses.
- **Use the existing components.** `.callout` / `--warn` / `--danger`, `.tag`, `.stats`,
  `.cards`, `.table-wrap`, `.sources`, `.toc`. Reach for new CSS only when none fits, and put
  it in `assets/style.css` with a comment saying why.
- **Callout severity carries meaning.** `--warn` and `--danger` mark genuine caveats and
  falsehoods. Don't use them to decorate a point that isn't one.

## Sourcing rules

- Primary sources over press releases. Regulator PDFs, journal pages, systematic reviews.
  News outlets are for dated events, not for science.
- Industry sources (ISA, Calorie Control Council, IAFNS/ILSI, beverage companies) and
  activist sources (US Right To Know, Mission Possible) are both advocacy. Label them inline,
  and never let either be the only support for a claim.
- Never fabricate a citation. "I could not verify this" is a publishable sentence here and
  appears on several pages — that's deliberate.
- New claim → add it to `sources.html`, and if it's one people arrive with, add it to the
  lookup table in `directory.html`.

## When you find an error in published content

Fix it in place and log it in `RESEARCH-STATUS.md` under the correction log with the date and
what was wrong. The site footer promises this happens, so it has to actually happen. Finding
errors is the point of the process, not an embarrassment.

## Before committing

Run the validation script in the README — balanced markup, every internal link and anchor
resolving, five nav groups and one `aria-current` per page. There is no test suite; that
script is it.

Visual changes deserve an actual look: `python3 -m http.server 8000`. If you can't see the
rendered page, say so in the commit message rather than implying it was checked.
