# Research status

Last updated: 2026-08-08

The site is built from sourced research briefs in `research/`. Each brief is written against
primary sources, labels advocacy sources inline, and carries an explicit "things I could not
verify" section. **Nothing is published on the site that isn't traceable to one of these briefs.**

**25 briefs, all written.** Three seed briefs, eight from batch 1, fourteen from batch 2.

## Seed briefs — 3

| Brief | Covers | Feeds |
|---|---|---|
| `efsa-2013-reevaluation.md` | EFSA's 263-page re-evaluation, endpoint by endpoint; the phenylalanine mode-of-action pivot; exposure modelling; the Millstone & Dawson critique and EFSA's reply | `the-evidence.html`, `caveats.html`, `myths.html` |
| `jecfa-iarc-2023.md` | The July 2023 WHO split; hazard vs risk; what "limited evidence" consisted of; the three cohorts; dose arithmetic; post-2023 evidence | `the-evidence.html`, `myths.html`, `caveats.html` |
| `elsa-brasil-cognition-2025.md` | The *Neurology* sweetener–cognition study; both correction notices verified across three registries; effect sizes; published correspondence and author replies | `the-study.html`, `myths.html` |

## Batch 1 — complete, 8 briefs

Ran 2026-08-04. 8/8 completed, zero errors, 674k subagent tokens, 364 tool calls, ~11 minutes.
Script: `tools/research-batch-1.workflow.js`. The claims people actually arrive believing.

- `metabolism-methanol` — hydrolysis, phenylalanine/aspartate/methanol fate, the formaldehyde argument
- `ramazzini-rodent-studies` — the Soffritti studies and the EFSA/FDA/NCI critiques
- `pku` — phenylketonuria in depth, prevalence, screening, heterozygotes
- `nancy-markle-hoax` — the 1990s chain email that seeded most modern folklore
- `rumsfeld-conspiracy` — the documented record vs the inference
- `cancer-cohort-studies` — NIH-AARP, CPS-II, NutriNet-Santé, the IARC-cited cohorts
- `weight-obesity-rcts` — observational vs randomised evidence, reverse causality, the WHO 2023 NSS guideline
- `industry-funding` — funding source and outcome in sweetener research, handled honestly

## Batch 2 — complete, 14 briefs

Ran 2026-08-05. Script: `tools/research-batch-2.workflow.js` — the twelve remaining topics
plus two briefs that aren't topic surveys:

- `what-is-aspartame` — chemistry, sweetness, heat instability, mg per product, 1965 discovery
- `fda-approval-history` — 1974 approval, 1975 suspension, Public Board of Inquiry, 1981/1983/1996 approvals
- `iarc-2b-context` — the classification system, Group 2B membership, why the "harmless companions" move is weak
- `adi-dose-math` — dose arithmetic by body weight, measured population intake, derivation of the 100× factor
- `neuro-headaches-seizures` — RCT evidence on headache, migraine, seizure threshold, mood
- `gut-microbiome` — the 2014 and 2022 Suez/Elinav studies, what aspartame specifically showed
- `diabetes-glycemic` — glucose/insulin response, HbA1c, ADA and Diabetes UK guidance
- `cardiovascular-stroke` — the 2017 Pase study, erythritol/xylitol CV signals, why erythritol ≠ aspartame
- `pregnancy-preterm` — Danish and Norwegian cohorts, regulator and ACOG positions
- `ms-lupus-myths` — origins and evidence
- `current-landscape-2024-2026` — recent regulatory, political and media developments
- `sweetener-comparison` — aspartame vs sucralose, stevia, erythritol, polyols, and sugar
- `science-communicators` — what four named communicators actually claim, sourced to their own material
- `steelman-against` — **adversarial brief.** The strongest honest case *against* aspartame
  safety the evidence can support. This one became `cardiometabolic.html`, and its "what would
  a well-informed critic say that this site has no answer to?" section is the most useful
  single document in `research/`.

`who-nss-guideline-2023` was folded into `weight-obesity-rcts` and never split out.

## Still unaudited

Three dedicated critic agents were designed for this project and have **never executed**: a
hostile fact-checker spot-checking numeric and date claims against the web, an overclaim
critic reading from the position that aspartame may be harmful, and a coverage critic
identifying what a reader arriving from a viral video would still be asking.

What *has* happened is weaker but not nothing: each batch-2 research agent was pointed at the
published pages and asked to report contradictions with its own findings, which produced the
nine corrections logged below. That is incidental auditing by agents whose main job was
something else. **Treat the site as unaudited until the three critics run.**

## Correction log

Errors found after publication, fixed in place.

### 2026-08-08 — editorial and staleness pass

- **"Aspartame's 2013 opinion is now the oldest of the lot… the stalest regulatory review"**
  (`sweeteners.html`). Wrong on the merits: the date of an opinion is not a measure of its
  depth, and the most recent international review of aspartame is JECFA 2023, not EFSA 2013.
  Rewritten to state the scheduling fact without the spin.
- **"No announced timetable for a fresh aspartame re-evaluation"** (`caveats.html`,
  `the-evidence.html`). Superseded — the European Commission confirmed in writing on
  2025-03-20 that the pending E 962 opinion will update the aspartame assessment, incorporate
  IARC and JECFA, and consider whether the ADI needs revising. Flagged by
  `current-landscape-2024-2026.md`; both pages now carry the current position.
- **"Nothing has been reopened since"** (`rebuttals.html`). Self-contradictory — the same
  paragraph described JECFA's 2023 review of 7,000+ references. Narrowed to the European
  review specifically.
- Assorted editorial self-narration removed from `cardiometabolic.html`, `metabolism.html`,
  `symptoms.html`, `weight.html` and `index.html` — see "Editorial voice" in the README for
  the rule these violated.

### 2026-08-05 — nine errors found by the batch-2 agents

- `calculator.html` JS rendered "0.5× sooner" for any body weight under ~44 kg. The aspartame
  and caffeine ceilings cross at 43.5 kg; below that the aspartame limit binds first. Both the
  calculator and `perspective.html` claimed caffeine binds "at any body weight".
- "No adverse effect at any dose tested" contradicted the caveats page: EFSA set a rabbit
  developmental NOAEL of 1,000 mg/kg and could not exclude developmental toxicity.
- Aspartame is 56% phenylalanine by weight, not 50%.
- The 40 mg/kg ADI was allocated at JECFA's 24th meeting in 1980 and confirmed in 1981.
- FDA's 50 mg/kg was 20 mg/kg from 1974, raised July 1983, and derives from human clinical
  data rather than the animal NOAEL Europe used.
- Millstone & Dawson published a rejoinder in November 2020; the claim that neither side
  published a reconciliation was wrong.
- Lupus downgraded from "False" to "Unsupported" — no study has tested the hypothesis, which
  is not the same as ruling it out.
- The National MS Society attribution could not be verified; replaced with the MS Trust's
  exact wording.
- 200 mg aspartame per can relabelled as an upper bound, not typical.

### 2026-08-04 — two errors found by the batch-1 agents

- "Tomato juice has 6× the methanol of diet cola" could not be traced to a primary per-serving
  measurement. Replaced with a comparison derived from EFSA's concentration tables (~4×),
  labelled as derived.
- The EPIC liver-cancer sub-group count was published as 101 cases. The paper was formally
  corrected in 2024 to 151. Fixed on both pages that carried it.

## Known gaps in what's published

Carried forward from the briefs' own "could not verify" sections:

- Which specific numbers either *Neurology* correction changed. Neither notice publishes a
  delta table and the highlighted-changes PDF is behind a publisher block. The site says so.
- Whether a complete-case sensitivity analysis of the cognition study was null. Asserted by an
  advocacy organisation, unverified, and not relied on.
- A reconciliation between Millstone & Dawson's 154-study tally and EFSA's 37-study tally. The
  two sides count different sets; no published reconciliation exists.
- Which EFSA panel member was recused from the aspartame discussion.
- The FDA's 50 mg/kg ADI is consistent with FDA's own published arithmetic but was not quoted
  directly from an FDA page, several of which returned errors.

*(Resolved 2026-08-08: "whether EFSA has any timetable for a fresh re-evaluation." The
Commission's March 2025 statement answers it — the E 962 opinion is the vehicle, it was due
end-2025, and as of August 2026 it is still listed as ongoing.)*

## Search budget

The original 24-agent run exhausted the session's 200-search pool after 3 briefs and was
stopped deliberately rather than allowed to produce confident, unsourced prose. The cap now
sits at 1000 via `env.CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION` in `~/.claude/settings.json`;
agents are instructed to budget ~20–25 searches each and write up what they have rather than
run dry.
