# Research status

Last updated: 2026-08-04

The site is built from sourced research briefs in `research/`. Each brief is written against
primary sources, labels advocacy sources inline, and carries an explicit "things I could not
verify" section. **Nothing is published on the site that isn't traceable to one of these briefs.**

## Complete — 3 of 24

| Brief | Covers | Feeds |
|---|---|---|
| `efsa-2013-reevaluation.md` | EFSA's 263-page re-evaluation, endpoint by endpoint; the phenylalanine mode-of-action pivot; exposure modelling; the Millstone & Dawson critique and EFSA's reply | `the-evidence.html`, `caveats.html`, `myths.html` |
| `jecfa-iarc-2023.md` | The July 2023 WHO split; hazard vs risk; what "limited evidence" consisted of; the three cohorts; dose arithmetic; post-2023 evidence | `the-evidence.html`, `myths.html`, `caveats.html` |
| `elsa-brasil-cognition-2025.md` | The *Neurology* sweetener–cognition study; both correction notices verified across three registries; effect sizes; published correspondence and author replies | `the-study.html`, `myths.html` |

## Not started — 21

Stopped mid-run when the session's web search budget was exhausted (200/200). The workflow was
halted deliberately rather than allowed to produce confident, unsourced prose.

- `what-is-aspartame` — chemistry, sweetness, heat instability, mg per product, 1965 discovery
- `fda-approval-history` — 1974 approval, 1975 suspension, Public Board of Inquiry, 1981/1983/1996 approvals, current FDA position
- `iarc-2b-context` — the classification system, Group 2B membership, why the "harmless companions" move is weak
- `adi-dose-math` — full dose arithmetic by body weight, measured population intake, derivation of the 100× factor
- `metabolism-methanol` — hydrolysis, phenylalanine/aspartate/methanol fate, the formaldehyde argument, methanol vs tomato juice
- `pku` — phenylketonuria in depth, prevalence, screening, heterozygotes
- `cancer-cohort-studies` — NIH-AARP, CPS-II, NutriNet-Santé, the IARC-cited cohorts
- `ramazzini-rodent-studies` — the Soffritti studies and the EFSA/FDA/NCI critiques
- `neuro-headaches-seizures` — RCT evidence on headache, migraine, seizure threshold, mood
- `gut-microbiome` — the 2014 and 2022 Suez/Elinav studies, what aspartame specifically showed
- `weight-obesity-rcts` — observational vs randomised evidence, reverse causality
- `who-nss-guideline-2023` — the May 2023 conditional recommendation and criticism of it
- `diabetes-glycemic` — glucose/insulin response, HbA1c, ADA and Diabetes UK guidance
- `cardiovascular-stroke` — the 2017 Pase study, erythritol/xylitol CV signals, why erythritol ≠ aspartame
- `pregnancy-preterm` — Danish and Norwegian cohorts, regulator and ACOG positions
- `ms-lupus-myths` — origins and evidence
- `nancy-markle-hoax` — the 1990s chain email that seeded most modern folklore
- `rumsfeld-conspiracy` — the documented record vs the inference
- `industry-funding` — funding source and outcome in sweetener research, handled honestly
- `current-landscape-2024-2026` — recent regulatory, political and media developments
- `sweetener-comparison` — aspartame vs sucralose, stevia, erythritol, polyols, and sugar

## Resuming

The workflow script is preserved. To finish the remaining 21 briefs:

1. Raise the session web search cap — the 24 agents share one pool:
   ```sh
   export CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION=1000
   ```
   Budget roughly 400–500 searches for the remainder.

2. Resume the run. The three completed briefs return from cache and are not redone:
   ```
   Workflow({
     scriptPath: ".../workflows/scripts/aspartame-evidence-base-wf_4b24cddf-b0e.js",
     resumeFromRunId: "wf_4b24cddf-b0e"
   })
   ```

The run also has three critic agents queued behind the researchers — a hostile fact-checker
(spot-checking numeric and date claims against the web), an overclaim critic reading from the
position that aspartame may be harmful, and a coverage critic identifying what a reader arriving
from a viral video would still be asking. Those have not run yet. **The site should be treated as
unaudited until they do.**

## Known gaps in what's published

Carried forward from the briefs' own "could not verify" sections:

- Which specific numbers either *Neurology* correction changed. Neither notice publishes a delta
  table and the highlighted-changes PDF is behind a publisher block. The site says so explicitly.
- Whether a complete-case sensitivity analysis of the cognition study was null. Asserted by an
  advocacy organisation, unverified, and not relied on.
- A reconciliation between Millstone & Dawson's 154-study tally and EFSA's 37-study tally. The two
  sides count different sets; no published reconciliation exists.
- Which EFSA panel member was recused from the aspartame discussion.
- Whether EFSA has any timetable for a fresh full re-evaluation.
- The FDA's 50 mg/kg ADI is consistent with FDA's own published arithmetic but was not quoted
  directly from an FDA page, several of which returned errors.
