// ---------------------------------------------------------------------------
// Every entry below was verified against Google Scholar in August 2026.
// Each publication gets its own URL for long-tail search ranking.
// ---------------------------------------------------------------------------

export type Pub = {
  slug: string;
  title: string;
  authors: string;
  venue: string;
  venueShort: string;
  year: number;
  doi: string | null;
  arxiv: string | null;
  url: string;
  role: 'first' | 'co';
  area: 'quantum' | 'sensing' | 'health' | 'laser' | 'systems';
  summary: string;
  significance: string;
  verified: boolean;
  citations?: number;
};

export const publications: Pub[] = [
  // === 2026 ===
  {
    slug: 'cryogenic-accelerator-4k-quantum-state-discrimination',
    title: 'Cryogenic hardware accelerator for quantum state discrimination at 4K',
    authors: 'P Gonzalez-Guerrero, MG Bautista-Jurney, N Vora, Y Xu, K Nowrouzi, Q Ji, G Huang, PVP Nguyen',
    venue: 'npj Unconventional Computing',
    venueShort: 'npj Unconv',
    year: 2026,
    doi: null,
    arxiv: null,
    url: '',
    role: 'co',
    area: 'quantum',
    summary:
      'A hardware accelerator operating at 4 Kelvin for quantum state discrimination, bringing ML inference closer to the quantum processor inside the cryostat.',
    significance:
      'Reduces the signal path between qubit and classifier to near-zero, eliminating room-temperature round trips entirely.',
    verified: true,
  },
  {
    slug: 'breaking-memory-bottlenecks-quantum-control',
    title: 'Breaking Memory Bottlenecks in Quantum Control Systems for More Precise Experiments and Higher Throughput Computing',
    authors: 'Y Guang, N Vora, Y Xu, Y Chen, G Huang',
    venue: 'arXiv preprint',
    venueShort: 'arXiv',
    year: 2026,
    doi: null,
    arxiv: '2608.06318',
    url: 'https://arxiv.org/abs/2608.06318',
    role: 'co',
    area: 'quantum',
    summary:
      'Addresses memory architecture bottlenecks in quantum control systems to enable higher-throughput experiments and more precise control.',
    significance:
      'Memory bandwidth limits how fast control systems can update pulse sequences; this work removes that ceiling.',
    verified: true,
  },
  {
    slug: 'qcaleval-vlm-quantum-calibration',
    title: 'QcalEval: Benchmarking vision-language models for quantum calibration plot understanding',
    authors: 'S Cao, Z Zhang, A Agarwal, G Bratrud, NR Beysengulov, DC Cole, NR Vora, et al.',
    venue: 'arXiv preprint',
    venueShort: 'arXiv',
    year: 2026,
    doi: null,
    arxiv: '2604.25884',
    url: 'https://arxiv.org/abs/2604.25884',
    role: 'co',
    area: 'quantum',
    summary:
      'A benchmark for evaluating how well vision-language models understand quantum calibration plots — the visual outputs that physicists use to tune qubits.',
    significance:
      'Opens the door to AI assistants that can interpret calibration data and suggest parameter adjustments.',
    verified: true,
    citations: 4,
  },
  {
    slug: 'ml-enabled-fpga-framework-mid-circuit-measurement',
    title: 'ML-Enabled FPGA Framework for Fast Quantum State Discrimination in Mid-Circuit Measurement Regimes',
    authors: 'N Vora, Y Xu, A Hashim, N Fruitwala, N Nguyen, N Goss, J Balewski, B Whaley, I Siddiqi, PVP Nguyen, G Huang',
    venue: 'Great Lakes Symposium on VLSI (GLSVLSI)',
    venueShort: 'GLSVLSI',
    year: 2026,
    doi: '10.1145/3787109.3816383',
    arxiv: null,
    url: 'https://doi.org/10.1145/3787109.3816383',
    role: 'first',
    area: 'quantum',
    summary:
      'An in-situ inference engine on FPGA for real-time quantum state discrimination, aimed at protocols that need mid-circuit measurement and conditional feed-forward.',
    significance:
      'Extends QubiCML into a reusable framework, framed for the VLSI and design-automation community.',
    verified: true,
    citations: 1,
  },
  {
    slug: 'time-series-quantum-state-discrimination',
    title: 'Time-series based quantum state discrimination',
    authors: 'Samuel Jung, Neel Vora, Akel Hashim, Yilun Xu, Gang Huang',
    venue: 'arXiv preprint',
    venueShort: 'arXiv',
    year: 2026,
    doi: null,
    arxiv: '2601.19057',
    url: 'https://arxiv.org/abs/2601.19057',
    role: 'co',
    area: 'quantum',
    summary:
      'Treats the readout signal as a time series rather than a single integrated point, targeting both poor SNR and energy relaxation during measurement.',
    significance:
      'Readout fidelity sets a floor on quantum error correction. Recovering information from the signal shape attacks that floor directly.',
    verified: true,
  },
  {
    slug: 'fiber-laser-broadband-combination',
    title: 'Design and Progress Towards a Broadband, High Energy, Multidimensionally Combined Fiber Laser',
    authors: 'M Logantha, T Zhou, Q Du, F Kong, M Chen, A Amodio, D Wang, N Vora, et al.',
    venue: 'CLEO: Science and Innovations',
    venueShort: 'CLEO',
    year: 2026,
    doi: null,
    arxiv: null,
    url: '',
    role: 'co',
    area: 'laser',
    summary:
      'Progress toward a broadband, high-energy fiber laser using multidimensional beam combination techniques.',
    significance:
      'High-energy lasers for particle acceleration and materials science require precise control and combination of multiple beams.',
    verified: true,
  },
  {
    slug: 'monolithic-fiber-amplifier-combination',
    title: 'Monolithically Integrated 85μm Core High Energy Fiber Amplifier for Pulsed Fiber Laser Array Combination',
    authors: 'M Chen, F Kong, R Wilcox, Q Du, M Logantha, S Chen, A Amodio, N Vora, et al.',
    venue: 'CLEO: Science and Innovations',
    venueShort: 'CLEO',
    year: 2026,
    doi: null,
    arxiv: null,
    url: '',
    role: 'co',
    area: 'laser',
    summary:
      'A monolithically integrated high-energy fiber amplifier with 85μm core for pulsed laser array combination.',
    significance:
      'Enables scaling of laser power through coherent combination while maintaining beam quality.',
    verified: true,
  },

  // === 2025 ===
  {
    slug: 'laser-pointing-stabilization-ml',
    title: 'Pointing stabilization of a 1 Hz high-power laser via machine learning',
    authors: 'A Amodio, D Wang, C Berger, HE Tsai, SK Barber, J van Tilborg, N Vora, et al.',
    venue: 'High Power Laser Science and Engineering',
    venueShort: 'HPLSE',
    year: 2025,
    doi: null,
    arxiv: null,
    url: '',
    role: 'co',
    area: 'laser',
    summary:
      'Uses machine learning to stabilize the pointing of a 1 Hz high-power laser, compensating for thermal and mechanical drift between shots.',
    significance:
      'High-power lasers fire slowly and drift between shots. ML-based stabilization keeps the beam on target without waiting for convergence.',
    verified: true,
    citations: 14,
  },
  {
    slug: 'computing-systems-superconducting-qubits',
    title: 'Computing Systems for Superconducting Qubits: Challenges and Opportunities',
    authors: 'V Le, N Vora, D Brahmbhatt, Y Xu, G Huang, PVP Nguyen',
    venue: 'ACM MobiSys (Workshop)',
    venueShort: 'MobiSys',
    year: 2025,
    doi: null,
    arxiv: null,
    url: '',
    role: 'co',
    area: 'systems',
    summary:
      'A survey of computing systems challenges for superconducting qubit control — from FPGA architectures to software stacks.',
    significance:
      'Frames the systems research agenda for quantum computing infrastructure.',
    verified: true,
    citations: 2,
  },
  {
    slug: 'crosstalk-dynamics-hamiltonian-learning-rabi',
    title: 'First-principle crosstalk dynamics and Hamiltonian learning via Rabi experiments',
    authors: 'J Balewski, A Winick, Y Xu, N Vora, G Huang, D Santiago, J Emerson, I Siddiqi',
    venue: 'arXiv preprint',
    venueShort: 'arXiv',
    year: 2025,
    doi: null,
    arxiv: '2502.05362',
    url: 'https://arxiv.org/abs/2502.05362',
    role: 'co',
    area: 'quantum',
    summary:
      'Crosstalk is modelled from first principles, with parameters learned by fitting a Hamiltonian to simultaneous Rabi experiments. The model predicts three- and four-qubit behaviour.',
    significance:
      'Lets researchers study multi-qubit dynamics without running the experiment, and characterizes crosstalk across a chip.',
    verified: true,
    citations: 4,
  },
  {
    slug: 'earsd-ear-worn-seizure-detection',
    title: 'An Unobtrusive and Lightweight Ear-worn System for Continuous Epileptic Seizure Detection',
    authors: 'A Aziz, N Pham, N Vora, C Reynolds, J Lehnen, P Venkatesh, Z Yao, J Harvey, T Vu, K Ding, P Nguyen',
    venue: 'ACM Transactions on Computing for Healthcare',
    venueShort: 'ACM HEALTH',
    year: 2025,
    doi: '10.1145/3703164',
    arxiv: null,
    url: 'https://doi.org/10.1145/3703164',
    role: 'co',
    area: 'health',
    summary:
      'EarSD detects seizure onset from physiological signals measured behind the ears, in a form factor that fits inside earphones or hearing aids.',
    significance:
      'Moves seizure monitoring out of the hospital into something a person can wear all day.',
    verified: true,
    citations: 10,
  },
  {
    slug: 'laser-pointing-stabilization-cleo',
    title: 'Machine Learning based Pointing Stabilization for Low-Repetition-Rate High Power Lasers',
    authors: 'A Amodio, D Wang, C Berger, HE Tsai, S Barber, J Van Tilborg, N Vora, et al.',
    venue: 'CLEO: Applications and Technology',
    venueShort: 'CLEO',
    year: 2025,
    doi: null,
    arxiv: null,
    url: '',
    role: 'co',
    area: 'laser',
    summary:
      'Conference presentation on ML-based pointing stabilization for low-repetition-rate high-power lasers.',
    significance:
      'Demonstrates real-time ML control in high-energy physics instrumentation.',
    verified: true,
    citations: 1,
  },

  // === 2024 ===
  {
    slug: 'qubicml-fpga-quantum-state-discrimination',
    title: 'ML-Powered FPGA-based Real-Time Quantum State Discrimination Enabling Mid-circuit Measurements',
    authors: 'NR Vora, Y Xu, A Hashim, N Fruitwala, HN Nguyen, H Liao, J Balewski, A Rajagopala, K Nowrouzi, Q Ji, KB Whaley, I Siddiqi, P Nguyen, G Huang',
    venue: 'IEEE International Conference on Quantum Computing and Engineering (QCE)',
    venueShort: 'IEEE QCE',
    year: 2024,
    doi: null,
    arxiv: '2406.18807',
    url: 'https://arxiv.org/abs/2406.18807',
    role: 'first',
    area: 'quantum',
    summary:
      'QubiCML puts a small neural network directly on the FPGA that controls a superconducting quantum processor. Inference completes in 54 ns at 98.5% average accuracy.',
    significance:
      'First demonstration of ML-powered quantum state discrimination on an RFSoC FPGA platform for mid-circuit measurement.',
    verified: true,
    citations: 17,
  },
  {
    slug: 'qubicsv-open-source-qubit-control-platform',
    title: 'An open-source data storage and visualization platform for collaborative qubit control',
    authors: 'D Brahmbhatt, Y Xu, N Vora, L Chen, N Fruitwala, G Huang, Q Ji, P Nguyen',
    venue: 'Scientific Reports (Nature Portfolio)',
    venueShort: 'Sci Rep',
    year: 2024,
    doi: '10.1038/s41598-024-72584-9',
    arxiv: '2403.14672',
    url: 'https://doi.org/10.1038/s41598-024-72584-9',
    role: 'co',
    area: 'quantum',
    summary:
      'QubiCSV is an open-source platform for storing, versioning and visualizing calibration and characterization data from qubit control systems.',
    significance:
      'Quantum hardware time is scarce. Shared, versioned calibration data lets groups reuse each other\'s runs.',
    verified: true,
    citations: 4,
  },
  {
    slug: 'path-signature-qubit-readout',
    title: 'Superconducting qubit readout enhanced by path signature',
    authors: 'S Cao, Z Shao, JQ Zheng, M Alghadeer, SD Fasciati, M Piscitelli, N Vora, et al.',
    venue: 'arXiv preprint',
    venueShort: 'arXiv',
    year: 2024,
    doi: null,
    arxiv: '2402.09532',
    url: 'https://arxiv.org/abs/2402.09532',
    role: 'co',
    area: 'quantum',
    summary:
      'Applies path signature methods — a technique from rough path theory — to enhance superconducting qubit readout fidelity.',
    significance:
      'Path signatures extract geometric features from time-series data that traditional methods miss.',
    verified: true,
    citations: 4,
  },
  {
    slug: 'exploring-ml-embedded-hardware-thesis',
    title: 'Exploring machine learning techniques for embedded hardware',
    authors: 'NR Vora',
    venue: 'M.S. Thesis, University of Texas at Arlington',
    venueShort: 'Thesis',
    year: 2024,
    doi: null,
    arxiv: null,
    url: '',
    role: 'first',
    area: 'systems',
    summary:
      'Master\'s thesis exploring machine learning deployment on embedded and resource-constrained hardware.',
    significance:
      'Lays the foundation for the edge AI and FPGA inference work that followed.',
    verified: true,
    citations: 2,
  },

  // === 2023 ===
  {
    slug: 'dronechase-cross-modality-drone-tracking',
    title: 'DroneChase: A Mobile and Automated Cross-Modality System for Continuous Drone Tracking',
    authors: 'N Vora, Y Wu, J Liu, P Nguyen',
    venue: 'ACM Workshop on Micro Aerial Vehicle Networks, Systems, and Applications (DroNet\'23), at ACM MobiSys',
    venueShort: 'ACM DroNet',
    year: 2023,
    doi: '10.1145/3597060.3597237',
    arxiv: null,
    url: 'https://doi.org/10.1145/3597060.3597237',
    role: 'first',
    area: 'sensing',
    summary:
      'A portable system that tracks a flying drone by combining audio and vision, so tracking continues through occlusion and darkness. Runs on a Raspberry Pi.',
    significance:
      'Most drone-monitoring systems assume clear line of sight. Fusing audio with vision keeps the track alive.',
    verified: true,
    citations: 22,
  },
  {
    slug: 'physiological-signal-compression-headwear',
    title: 'Real-time diagnostic integrity meets efficiency: A novel platform-agnostic architecture for physiological signal compression',
    authors: 'NR Vora, A Hajighasemi, CT Reynolds, A Radmehr, M Mohamed, P Nguyen',
    venue: 'arXiv preprint',
    venueShort: 'arXiv',
    year: 2023,
    doi: null,
    arxiv: '2312.12587',
    url: 'https://arxiv.org/abs/2312.12587',
    role: 'first',
    area: 'health',
    summary:
      'Compression for physiological signals that holds up on small, power-limited processors inside head-worn devices.',
    significance:
      'Wearables are bottlenecked on radio and battery. What you can afford to transmit decides what you can monitor.',
    verified: true,
    citations: 7,
  },
];

export const byYear = [...publications].sort((a, b) => b.year - a.year);
export const byArea = (area: Pub['area']) => publications.filter((p) => p.area === area);
export const firstAuthor = publications.filter((p) => p.role === 'first');
