// ---------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH.
// Every page title, meta description and JSON-LD block reads from here.
// Fill the TODO fields — the `sameAs` array is the highest-leverage SEO on the
// whole site: it is how search engines merge every profile of you into ONE
// entity instead of confusing you with the other people named Neel Vora.
// ---------------------------------------------------------------------------

export const SITE_URL = 'https://neelvora.github.io';

export const PERSON = {
  name: 'Neel Vora',
  alternateName: 'Neel R. Vora',
  jobTitle: 'Scientific Engineer Associate',
  affiliation: 'Lawrence Berkeley National Laboratory',
  affiliationUrl: 'https://atap.lbl.gov/',
  division: 'Accelerator Technology & Applied Physics Division',
  program: 'Berkeley Accelerator Controls & Instrumentation (BACI)',
  location: 'Berkeley, California',
  email: 'nrvora@lbl.gov',
  // One sentence. This is what Google shows under your name. Keep it under
  // 160 characters and put the distinguishing nouns first.
  tagline:
    'Real-time machine learning on FPGAs for quantum control — qubit state discrimination, mid-circuit measurement, and AI-native hardware design.',
  // Profiles you control. Add every one. Remove none.
  sameAs: [
    'https://profiles.lbl.gov/410489-neel-rajeshbhai-vora',
    'https://scholar.google.com/citations?user=EV0TOzcAAAAJ',
    'https://www.linkedin.com/in/neelvora27/',
    'https://www.researchgate.net/profile/Neel-Vora-7',
    'https://arxiv.org/a/vora_n_1', // TODO: verify this arXiv author page resolves
    'https://orcid.org/TODO', // TODO: register at orcid.org — takes 3 minutes
    'https://github.com/nrvora',
    'https://synseis.com',
  ],
  knowsAbout: [
    'Quantum state discrimination',
    'Mid-circuit measurement',
    'Superconducting qubits',
    'FPGA machine learning inference',
    'RFSoC',
    'Quantum control systems',
    'Reinforcement learning for quantum gate calibration',
    'Hardware accelerators',
    'Electronic design automation',
    'Edge AI',
  ],
  alumniOf: [
    {
      name: 'The University of Texas at Arlington',
      url: 'https://www.uta.edu/',
      degree: 'M.S. Computer Science',
      years: '2022–2024',
    },
    {
      name: 'Dharmsinh Desai University',
      url: 'https://www.ddu.ac.in/',
      degree: 'B.Tech, Information Technology',
      years: '2019–2022',
    },
  ],
};

export const NAV = [
  { href: '/', label: 'Overview' },
  { href: '/research', label: 'Research' },
  { href: '/publications', label: 'Publications' },
  { href: '/synseis', label: 'Synseis' },
  { href: '/media', label: 'Press' },
];
