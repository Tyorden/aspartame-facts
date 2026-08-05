export const meta = {
  name: 'aspartame-research-batch-1',
  description: 'Research the 8 highest-value outstanding aspartame areas',
  phases: [
    { title: 'Research', detail: '8 parallel domain researchers, each writes a sourced brief' },
  ],
}

const DIR = '/Users/tylerorden/aspartame-facts/research'

// Batch 1: the claims people actually arrive believing. Batch 2 (the remaining 13)
// lives in RESEARCH-STATUS.md and can be run the same way once this one's cost is known.
const AREAS = [
  { slug: 'metabolism-methanol', title: 'Metabolism: phenylalanine, aspartate, methanol',
    brief: 'How aspartame is digested -- fully hydrolyzed in the gut, never enters bloodstream intact. The three components and their fate. Critically: methanol quantities from aspartame vs from tomato juice, fruit juices, and fermented foods -- with numbers. The formaldehyde argument and why it fails (endogenous formaldehyde production, dose, one-carbon metabolism). Blood phenylalanine levels after aspartame vs a normal protein meal.' },
  { slug: 'ramazzini-rodent-studies', title: 'Ramazzini Institute rodent studies',
    brief: 'The Soffritti/Ramazzini Institute studies (2005, 2007, 2010) claiming lymphoma/leukemia in rats -- the single largest source of aspartame cancer alarm. Then the detailed EFSA, FDA, and NCI critiques: pathology diagnosis disputes, chronic respiratory disease in the colony confounding lymphoma counts, ad libitum lifetime dosing to natural death, statistical issues, refusal to share slides. Also cover the 2020s Ramazzini follow-up work honestly, and the NTP/NCI rodent studies that found nothing.' },
  { slug: 'pku', title: 'Phenylketonuria: the one real contraindication',
    brief: 'PKU explained, prevalence, newborn screening, why the "PHENYLKETONURICS: CONTAINS PHENYLALANINE" label exists, what PKU patients must actually avoid (all protein, far beyond aspartame). Also cover PKU heterozygote carriers and whether there is any real evidence of risk for them. This is a genuine caveat -- present it as such, not as a footnote.' },
  { slug: 'nancy-markle-hoax', title: 'The Nancy Markle chain email and Betty Martini',
    brief: 'The 1990s viral chain letter that seeded most modern aspartame folklore -- its origin, the Betty Martini / "Nancy Markle" attribution, the specific claims it made, and the debunkings by Snopes, universities, and MS/lupus organizations. Document how specific still-circulating claims trace directly to it.' },
  { slug: 'rumsfeld-conspiracy', title: 'The Rumsfeld / FDA approval conspiracy',
    brief: 'The claim that Donald Rumsfeld as G.D. Searle CEO forced FDA approval. Separate the verifiable facts (Rumsfeld was Searle CEO from 1977; Commissioner Arthur Hull Hayes approved it in 1981; Hayes later left FDA and consulted for a Searle PR firm; the Public Board of Inquiry had recommended against approval) from the conspiracy inference. This one has real factual grit in it -- do NOT wave it away, report the documented record precisely and then explain why regulatory history since 1981 is what actually settles the safety question.' },
  { slug: 'cancer-cohort-studies', title: 'Human cancer epidemiology',
    brief: 'The major human cohort studies: NIH-AARP Diet and Health Study, the American Cancer Society CPS-II, the NutriNet-Sante 2022 study, and the three studies IARC cited for hepatocellular carcinoma. What each found, sample sizes, effect sizes, confounding and limitations. Be even-handed: report the positive signals accurately, then their limitations. Note that jecfa-iarc-2023.md in this directory already covers the IARC-cited cohorts -- extend rather than duplicate it.' },
  { slug: 'weight-obesity-rcts', title: 'Weight, obesity and reverse causality',
    brief: 'The "diet soda makes you fat" claim. Contrast observational cohorts with randomized controlled trials and meta-analyses of RCTs on LNCS substitution for sugar and body weight. Reverse causality explained. Key trials: CHOICE, the Peters/Foreyt trials, SWITCH, the 2022 Harrold/Halford studies, and Cochrane/WHO evidence reviews. Also cover the WHO May 2023 conditional recommendation against non-sugar sweeteners for weight control and criticism of it.' },
  { slug: 'industry-funding', title: 'Industry funding and conflicts of interest',
    brief: 'The critique that pro-aspartame research is industry-funded. Find the actual studies on funding source and outcome in sweetener research (e.g. the Mandrioli 2016 analysis of review conflicts). Report the finding honestly even though it is inconvenient. Then explain what independent, publicly funded evidence exists separate from industry, and how regulators handle conflicted data.' },
]

const RESEARCH_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['slug', 'headline', 'key_claims', 'genuine_caveats', 'source_count', 'confidence'],
  properties: {
    slug: { type: 'string' },
    headline: { type: 'string', description: 'One sentence bottom line for this area' },
    key_claims: {
      type: 'array', maxItems: 8,
      items: {
        type: 'object', additionalProperties: false,
        required: ['claim', 'evidence_strength'],
        properties: {
          claim: { type: 'string' },
          evidence_strength: { enum: ['strong', 'moderate', 'weak', 'contested'] },
        },
      },
    },
    genuine_caveats: { type: 'array', maxItems: 6, items: { type: 'string' },
      description: 'Things that genuinely cut AGAINST a simple "aspartame is safe" message. Must not be empty unless truly none exist.' },
    source_count: { type: 'number' },
    confidence: { enum: ['high', 'medium', 'low'] },
  },
}

phase('Research')
log(`Dispatching ${AREAS.length} domain researchers (batch 1 of 2)`)

const research = await parallel(AREAS.map(a => () => agent(
`You are researching one domain for an evidence-based public website about aspartame. The site's thesis is that aspartame is safe at real-world intakes and that most viral claims against it are myths -- BUT the site must be scrupulously accurate and must concede every genuine caveat. A credible debunking site that overclaims is worthless. Your job is truth, not advocacy.

YOUR AREA: ${a.title}

BRIEF: ${a.brief}

CONTEXT: Three briefs already exist in ${DIR} (efsa-2013-reevaluation.md, jecfa-iarc-2023.md, elsa-brasil-cognition-2025.md). Read any that overlap your area so you extend rather than duplicate them.

METHOD:
- Use WebSearch and WebFetch extensively. Prioritise primary sources: regulator documents (FDA, EFSA, JECFA/WHO, IARC), PubMed abstracts, journal pages, systematic reviews and meta-analyses. Use news sources only for dated events.
- Treat industry sources (International Sweeteners Association, Calorie Control Council, UNESDA, beverage companies) as ADVOCACY. You may cite them, but you must label them as industry-funded inline, and never let them be the sole support for a claim.
- Treat activist sources the same way.
- Where evidence is genuinely mixed or weak, say so. Where a claim against aspartame has real support, say so plainly.
- Never fabricate a citation. If you cannot verify something, write that you could not verify it. A confirmed "unverified" is more valuable to me than a plausible guess.
- Budget roughly 20-25 searches. If you approach that, stop searching and write up what you have, marking the gaps.

DELIVERABLE: Write a thorough markdown brief to ${DIR}/${a.slug}.md with this structure:
  # <Title>
  ## Bottom line
  ## Key findings   (each finding with an inline source link and a strength tag)
  ## Genuine caveats / what cuts the other way
  ## Myths in this area and what is actually true   (only if applicable)
  ## Numbers worth quoting on a website   (exact figures, doses, dates, effect sizes)
  ## Sources   (numbered list of full URLs with publisher and date)
  ## What I could NOT verify

Aim for depth: 800-1500 words, 8+ distinct real sources. Then return the structured summary.`,
  { label: `research:${a.slug}`, phase: 'Research', schema: RESEARCH_SCHEMA }
)))

const ok = research.filter(Boolean)
log(`${ok.length}/${AREAS.length} briefs completed`)

return { briefs: ok, dir: DIR }
