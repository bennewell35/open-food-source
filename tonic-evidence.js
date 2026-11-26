'use strict';

const TONIC_EVIDENCE = {
  warm: {
    label: 'Warm drinks and throat comfort',
    finding: 'In a study of 30 adults with cold or flu symptoms, the group given hot fruit cordial reported less throat pain for up to 30 minutes. Measured nasal airflow did not improve. The trial did not track recovery. Let drinks cool to a comfortable sipping temperature.',
    sources: [
      {label: 'Sanu & Eccles · fruit drink trial', url: 'https://www.rhinologyjournal.com/Rhinology_issues/719.pdf'}
    ]
  },
  honey: {
    label: 'Honey and nighttime cough',
    finding: 'In a one-night trial, parents rated cough relief higher with honey than with date syrup (300 children enrolled, 270 completed). In a two-night trial of 161 children, honey performed similarly to a syrup placebo. Both studies involved ages 1–5. Never give honey to a baby under 12 months because of infant botulism risk.',
    sources: [
      {label: 'Cohen et al. · one-night trial', url: 'https://pubmed.ncbi.nlm.nih.gov/22869830/'},
      {label: 'Nishimura et al. · two-night trial', url: 'https://pubmed.ncbi.nlm.nih.gov/35927828/'},
      {label: 'CDC · honey and infants', url: 'https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/foods-and-drinks-to-avoid-or-limit.html'}
    ]
  },
  broth: {
    label: 'What a chicken soup study measured',
    finding: 'In 15 healthy adults, mucus moved faster through the nose five minutes after they sipped hot chicken soup or hot water. The effect had faded by 30 minutes, and breathing resistance did not improve. The study cannot tell us whether broth shortens an illness.',
    sources: [
      {label: 'Saketkhoo et al. · soup and water study', url: 'https://pubmed.ncbi.nlm.nih.gov/359266/'}
    ]
  },
  kiwi: {
    label: 'Gold kiwifruit and respiratory symptoms',
    finding: 'In 32 adults aged 65 or older, four weeks of the equivalent of four gold kiwis daily led to fewer reported days of sore throat and head congestion than four weeks of the equivalent of two bananas daily. Overall infection frequency showed no clear change. A later 20-person study did not confirm shorter symptoms. Neither tested a single drink after symptoms began.',
    sources: [
      {label: 'Hunter et al. · kiwifruit and banana trial', url: 'https://pubmed.ncbi.nlm.nih.gov/22172428/'},
      {label: 'Vlasiuk et al. · six-week kiwifruit study', url: 'https://pubmed.ncbi.nlm.nih.gov/38539806/'}
    ]
  },
  fluids: {
    label: 'Fluids during a cold',
    finding: 'CDC advises drinking fluids during a cold. Water, broth or a drink you enjoy can help you keep up your intake. The guidance gives no particular blend or volume that clears the virus. Seek medical care if you develop signs of dehydration.',
    sources: [
      {label: 'CDC · managing a common cold', url: 'https://www.cdc.gov/common-cold/treatment/'}
    ]
  },
  tradition: {
    label: 'What studies of traditional remedies can tell us',
    finding: 'Even studies of the same plant can disagree. In an early trial of 60 adults, people taking elderberry extract reported earlier flu symptom relief. In a later trial of 87 people with confirmed flu, symptoms resolved in about the same time with extract and placebo (8.6 and 8.7 days). These trials tested commercial extracts. The effects of a homemade tonic remain uncertain.',
    sources: [
      {label: 'Zakay-Rones et al. · elderberry trial', url: 'https://pubmed.ncbi.nlm.nih.gov/15080016/'},
      {label: 'Macknin et al. · elderberry trial', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7661609/'}
    ]
  }
};

const TONIC_FLU_GUIDANCE = {
  text: 'If flu is possible and you are at higher risk, contact a clinician promptly, even if symptoms are mild. Higher-risk groups include pregnant people, children under 5, adults 65 and older, and people with conditions such as asthma or diabetes. Prescription antivirals work best within two days of symptom onset and can still help later with severe illness or higher risk. Seek emergency care for trouble breathing, persistent chest pain or difficulty waking.',
  sources: [
    {label: 'CDC · flu treatment and timing', url: 'https://www.cdc.gov/flu/treatment/'},
    {label: 'CDC · higher-risk groups', url: 'https://www.cdc.gov/flu/highrisk/'},
    {label: 'CDC · emergency warning signs', url: 'https://www.cdc.gov/flu/signs-symptoms/'}
  ]
};
