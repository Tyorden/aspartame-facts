export const meta = {
  name: 'aspartame-research-batch-2',
  description: 'Remaining 12 topic briefs plus science-communicator survey and an adversarial steelman',
  phases: [
    { title: 'Research', detail: '14 parallel researchers, each writes a sourced brief' },
  ],
}

const DIR = '/Users/tylerorden/aspartame-facts/research'

const AREAS = [
  { slug: 'what-is-aspartame', title: 'Chemistry and basics',
    brief: 'What aspartame is chemically (methyl ester of the aspartic acid / phenylalanine dipeptide), sweetness ~200x sucrose, how it degrades, heat instability and why it is not used in baking, the diketopiperazine (DKP) degradant and its separate ADI, which products contain it, mg per serving across major brands and tabletop packets, and the 1965 discovery by James Schlatter at G.D. Searle.' },
  { slug: 'fda-approval-history', title: 'FDA approval history and current position',
    brief: 'Full factual timeline: 1974 initial approval, 1975 stay, the Bressler Report, the Public Board of Inquiry, 1981 dry-goods approval, 1983 carbonated beverages, 1996 general-purpose. FDA current stated position and the 50 mg/kg ADI. How many times FDA has reviewed it and how many adverse-event reports it evaluated (the ~10,000 consumer complaints and the 1995 decision to stop collecting them). Coordinate with rumsfeld-conspiracy.md which already covers the corruption allegation -- do not duplicate it, cover the regulatory mechanics instead.' },
  { slug: 'iarc-2b-context', title: 'What Group 2B means',
    brief: 'The IARC classification system in depth: how the groups are defined, what "limited evidence" is a term of art for, the preamble language on hazard vs risk, current agent counts per group. What else is in 2B and 2A (note red meat is 2A, processed meat and alcohol are Group 1). Explain why the "other 2B things sound harmless" comparison is rhetorically useful but not itself an argument. perspective.html already uses the mobile-phone comparison -- verify every claim on that page against primary IARC sources and flag anything wrong.' },
  { slug: 'adi-dose-math', title: 'ADI derivation and real-world intake',
    brief: 'How the ADI was derived: the NOAEL, the 100-fold uncertainty factor and what its two 10x components represent. Measured population intake from actual surveys across countries and age groups, as a percentage of ADI, including high consumers, children and diabetics. Note the calculator.html page on this site uses 200 mg aspartame and 46 mg caffeine per 12 oz can, a 40 mg/packet figure derived from FDA arithmetic, and the FDA 400 mg/day caffeine ceiling -- verify each of those and flag any that are wrong or better sourced elsewhere.' },
  { slug: 'neuro-headaches-seizures', title: 'Headaches, seizures, mood and behaviour',
    brief: 'Randomised and double-blind crossover trials on aspartame and headache, migraine, seizure threshold, mood, depression and childhood behaviour/ADHD. Include trials that DID find effects (e.g. the Walton 1993 depression study terminated early, and the Van den Eeden migraine crossover) with sample sizes and what they actually showed, plus replication status. Cover the self-reported sensitivity literature and blinded challenge studies. Net verdict from systematic reviews.' },
  { slug: 'gut-microbiome', title: 'Gut microbiome',
    brief: 'The 2014 Suez/Elinav Nature paper and the 2022 Cell paper on non-nutritive sweeteners and glycaemic response: exactly which sweeteners were tested, whether aspartame was among them and what IT specifically showed (as opposed to saccharin/sucralose), sample sizes, and how the findings were generalised in media coverage. Current state of evidence for aspartame specifically. Also the 2023 acesulfame-K and sucralose microbiome work if relevant.' },
  { slug: 'diabetes-glycemic', title: 'Diabetes and glycaemic effects',
    brief: 'Does aspartame raise blood glucose or insulin? Acute human trials, the cephalic-phase insulin response literature, HbA1c outcomes in people with diabetes, and guidance from the American Diabetes Association and Diabetes UK. Also the confounding point that people with diabetes preferentially consume diet drinks, which biases every observational cohort, and the cohort literature on sweeteners and incident type 2 diabetes.' },
  { slug: 'cardiovascular-stroke', title: 'Cardiovascular, stroke and dementia signals',
    brief: 'Observational associations between artificial sweetener or diet-soda intake and stroke, dementia (the 2017 Pase study in Stroke), cardiovascular events and all-cause mortality. Effect sizes, confounding, authors own caveats, and any subsequent replication or failure to replicate. Also the 2023 Cleveland Clinic erythritol and 2024 xylitol cardiovascular papers -- and the crucial distinction that these are sugar alcohols, NOT aspartame, since alarm about one is routinely transferred to the other.' },
  { slug: 'pregnancy-preterm', title: 'Pregnancy, preterm birth and children',
    brief: 'The Danish National Birth Cohort preterm-delivery finding and the Norwegian MoBa cohort, studies on maternal diet-soda intake and childhood BMI, allergy and neurodevelopment. What EFSA, FDA and ACOG say about aspartame in pregnancy. Evidence quality on each. efsa-2013-reevaluation.md already covers EFSA phenylalanine modelling in pregnancy -- extend rather than duplicate.' },
  { slug: 'ms-lupus-myths', title: 'Multiple sclerosis, lupus and "aspartame disease"',
    brief: 'The claim that aspartame causes or mimics MS and lupus. Statements from the National MS Society, MS Trust, MS Foundation and the Lupus Foundation of America. Whether any clinical evidence exists. The claimed syndrome "aspartame disease" and whether it has any standing in medicine. nancy-markle-hoax.md covers the provenance of these claims -- this brief should cover the medical evidence itself.' },
  { slug: 'current-landscape-2024-2026', title: 'Current regulatory and political landscape',
    brief: 'Aspartame news, regulatory action, state-level legislation and political attention from 2024 through August 2026. Any FDA post-market review, MAHA-era activity on food additives and sweeteners, EU actions, reformulation by beverage companies, and the 2026 media cycle. Also any new major studies published in 2025-2026 not already covered by other briefs in this directory.' },
  { slug: 'sweetener-comparison', title: 'Aspartame versus other sweeteners and sugar',
    brief: 'Side-by-side on evidence base and regulatory standing: aspartame, sucralose, saccharin, acesulfame-K, steviol glycosides, monk fruit, erythritol, xylitol, sorbitol, allulose, and sugar as the actual comparator. Which have the deepest safety literature, which have genuine open questions (erythritol cardiovascular, polyol GI effects, sucralose heat degradation). Emphasise the category-error problem of pooling chemically unrelated compounds as "artificial sweeteners".' },
  { slug: 'science-communicators', title: 'What the public-health communicators actually say',
    brief: `Four science communicators the site owner follows. Establish for each: real name, actual credentials (verify, do not take bios at face value), platform and following, and MOST IMPORTANTLY their specific substantive claims about aspartame and non-sugar sweeteners, sourced to their own material (videos, posts, articles, books, podcast appearances) rather than to critics summarising them.

  1. Dr Idrees Mughal, "Dr Idz" -- MBBS, MRes, board certification in lifestyle medicine, author of Saturated Facts. Known for debunking nutrition misinformation. He has commented on the 2025 Neurology sweetener-cognition study.
  2. Dr Jessica Knurick, @drjessicaknurick -- PhD, registered dietitian nutritionist.
  3. Liam, @theplantslant -- plant-based nutrition communicator.
  4. A microbiologist on TikTok the owner referred to as "Morticia" -- identify who this is (possible handles include variations on that name); if you cannot identify them with confidence, say so plainly rather than guessing.

  For each, report what they get RIGHT and where, if anywhere, their claims outrun the evidence -- these are people the site owner respects, so be accurate and fair, not flattering and not dismissive. Note that all four are broadly aligned with the evidence-based position, so the useful output is: which specific arguments and framings do they use that this site could adopt, and are any of their claims ones we should NOT repeat? Note you cannot access TikTok directly; work from web-indexed transcripts, articles, press coverage and their own written material.`,
  },
  { slug: 'steelman-against', title: 'The strongest possible case against aspartame',
    brief: `ADVERSARIAL BRIEF. Your job is the opposite of the rest of this project: build the strongest, most intellectually honest case AGAINST aspartame safety that the actual evidence can support. Do not strawman it and do not pad it with claims you know are weak -- a steelman made of bad arguments is useless.

  Find and assess: the best peer-reviewed critical literature; the most methodologically serious papers reporting harm; the strongest critiques of EFSA, JECFA and FDA methodology; researchers with genuine standing who remain unconvinced (e.g. Erik Millstone, the Ramazzini group, Morando Soffritti's successors, authors of the NutriNet-Sante analyses); any recent 2024-2026 work that strengthens the critical case; and the strongest version of the precautionary argument.

  Explicitly identify: which single finding, if replicated, would most damage the safety consensus? Where is the safety case thinnest? What would a well-informed critic say that this site currently has no answer to?

  Be rigorous about source quality -- label activist and industry sources on BOTH sides. The value of this brief is that it will be used to find and fix weak points in a pro-safety website, so unsupported alarmism is worse than useless. If the strongest honest case against aspartame is weak, say that too.`,
  },
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
      description: 'For topic briefs: what cuts AGAINST a simple safety message. For the steelman brief: what weakens the critical case.' },
    site_corrections: { type: 'array', maxItems: 8, items: { type: 'string' },
      description: 'Any claim currently published on the site (see the .html files in the parent directory) that your research shows is wrong, overstated, or badly sourced.' },
    source_count: { type: 'number' },
    confidence: { enum: ['high', 'medium', 'low'] },
  },
}

phase('Research')
log(`Dispatching ${AREAS.length} researchers (batch 2)`)

const research = await parallel(AREAS.map(a => () => agent(
`You are researching one domain for an evidence-based public website about aspartame. The site's thesis is that aspartame is safe at real-world intakes and that most viral claims against it are myths -- BUT the site must be scrupulously accurate and must concede every genuine caveat. A credible debunking site that overclaims is worthless. Your job is truth, not advocacy.

YOUR AREA: ${a.title}

BRIEF: ${a.brief}

CONTEXT: Eleven briefs already exist in ${DIR}. Read any that overlap your area so you extend rather than duplicate. The published site pages are the .html files in the parent directory ${DIR}/.. -- if your research contradicts anything already published there, say so explicitly in the site_corrections field. Two such errors have already been caught this way and fixed; finding more is valuable, not embarrassing.

METHOD:
- Use WebSearch and WebFetch extensively. Prioritise primary sources: regulator documents, PubMed, journal pages, systematic reviews and meta-analyses. Use news sources only for dated events.
- Treat industry sources (International Sweeteners Association, Calorie Control Council, IAFNS/ILSI, beverage companies) as ADVOCACY and label them inline. Treat activist sources (US Right To Know, Mission Possible, Feingold Association) identically.
- Where evidence is genuinely mixed or weak, say so. Where a claim against aspartame has real support, say so plainly.
- Never fabricate a citation. If you cannot verify something, write that you could not verify it.
- Budget roughly 20-25 searches. If you approach that, stop and write up what you have, marking the gaps.

DELIVERABLE: Write a thorough markdown brief to ${DIR}/${a.slug}.md with this structure:
  # <Title>
  ## Bottom line
  ## Key findings   (each with an inline source link and a strength tag)
  ## Genuine caveats / what cuts the other way
  ## Myths in this area and what is actually true   (if applicable)
  ## Numbers worth quoting on a website   (exact figures, doses, dates, effect sizes)
  ## Corrections to the existing site   (if any)
  ## Sources   (numbered, full URLs with publisher and date)
  ## What I could NOT verify

Aim for depth: 800-1500 words, 8+ distinct real sources. Then return the structured summary.`,
  { label: `research:${a.slug}`, phase: 'Research', schema: RESEARCH_SCHEMA }
)))

const ok = research.filter(Boolean)
const corrections = ok.flatMap(r => (r.site_corrections || []).map(c => `[${r.slug}] ${c}`))
log(`${ok.length}/${AREAS.length} briefs completed; ${corrections.length} proposed site corrections`)

return { briefs: ok, corrections, dir: DIR }
