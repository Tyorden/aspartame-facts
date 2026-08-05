# aspartame-facts

An evidence-based static site about aspartame: what the research actually shows, which
viral claims hold up, and where the critics have a real point.

## Principles

This is a debunking site, which makes it easy to become the mirror image of what it
debunks. Three rules keep it honest:

1. **Primary sources over press releases.** Regulator documents (FDA, EFSA, JECFA, IARC),
   journal pages, and systematic reviews. News outlets are cited for events, not science.
2. **Industry sources are labelled.** The International Sweeteners Association, Calorie
   Control Council, UNESDA, and beverage companies are advocacy organisations. They can be
   cited, but never as sole support for a claim, and always labelled inline.
3. **Genuine caveats get their own page, not a footnote.** PKU, the WHO 2023 guideline on
   non-sugar sweeteners, the documented conflict-of-interest literature, and the open
   questions in the observational evidence are stated plainly.

## Structure

```
index.html            The short version
what-it-is.html       Chemistry, metabolism, and the dose arithmetic
the-evidence.html     What regulators and the research literature actually found
myths.html            Claim-by-claim, with verdicts and sources
caveats.html          Where the critics are right, or at least not wrong
the-study.html        The 2025/26 Neurology sweetener–cognition study, appraised
sources.html          Full bibliography
research/             Raw sourced research briefs behind the site content
assets/style.css      All styling; no build step, no external assets
```

## Deploying

Pure static — no build step. Point Vercel at the repo root and it serves as-is.

## Contributing corrections

If something here is wrong, it should be fixed. Open an issue with the claim, the
correction, and a primary source.
