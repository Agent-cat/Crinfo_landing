export interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  slug: string;
}

const NewsConstants: NewsItem[] = [
  {
    id: 1,
    title: "Energy Engineering 2025 Best Paper Award and Outstanding Editorial Board Member Award Selection Campaign",
    date: "15 August 2025",
    slug: "energy-engineering-2025-awards",
    excerpt: "Announcing the selection campaign for Energy Engineering 2025 Best Paper Award and Outstanding Editorial Board Member Award.",
    content: `
      <h2>Energy Engineering 2025 Best Paper Award and Outstanding Editorial Board Member Award Selection Campaign</h2>
      <p>We are pleased to announce the launch of the Energy Engineering 2025 Best Paper Award and Outstanding Editorial Board Member Award Selection Campaign.</p>
      <p>This initiative aims to recognize exceptional contributions to the field of energy engineering and honor the dedication of our editorial board members.</p>
      <h3>Award Categories</h3>
      <ul>
        <li><strong>Best Paper Award:</strong> Recognizing outstanding research publications in energy engineering</li>
        <li><strong>Outstanding Editorial Board Member Award:</strong> Honoring exceptional service and contributions to the journal</li>
      </ul>
      <h3>Selection Criteria</h3>
      <p>Papers and board members will be evaluated based on innovation, impact, methodology, and contribution to the field.</p>
    `
  },
  {
    id: 2,
    title: "Recruiting Early Career Editorial Board Members for Fluid Dynamics & Materials Processing",
    date: "14 August 2025",
    slug: "recruiting-editorial-board-members",
    excerpt: "We are seeking talented early career researchers to join our editorial board for Fluid Dynamics & Materials Processing.",
    content: `
      <h2>Recruiting Early Career Editorial Board Members</h2>
      <p>Crinfo Global is actively seeking talented early career researchers to join our editorial board for Fluid Dynamics & Materials Processing journal.</p>
      <h3>Requirements</h3>
      <ul>
        <li>PhD in relevant field</li>
        <li>Active research record in fluid dynamics or materials processing</li>
        <li>Commitment to peer review excellence</li>
        <li>Passion for advancing scientific publishing</li>
      </ul>
      <h3>Benefits</h3>
      <p>Join a prestigious editorial board, contribute to shaping the future of research in your field, and network with leading researchers worldwide.</p>
    `
  },
  {
    id: 3,
    title: "Tech Science Press Journals Featured in GoOA 2024 White List",
    date: "12 August 2025",
    slug: "gooa-2024-white-list",
    excerpt: "Our journals have been recognized and featured in the prestigious GoOA 2024 White List.",
    content: `
      <h2>Tech Science Press Journals Featured in GoOA 2024 White List</h2>
      <p>We are proud to announce that our journals have been featured in the GoOA 2024 White List, recognizing our commitment to quality open access publishing.</p>
      <p>This recognition validates our rigorous peer review process and dedication to maintaining the highest publishing standards.</p>
    `
  },
  {
    id: 4,
    title: "Highly Cited Papers in Oncology Research (2024-2025)",
    date: "25 July 2025",
    slug: "highly-cited-papers-oncology",
    excerpt: "Celebrating the most impactful papers published in Oncology Research during 2024-2025.",
    content: `
      <h2>Highly Cited Papers in Oncology Research (2024-2025)</h2>
      <p>We are delighted to highlight the most highly cited papers published in Oncology Research during the 2024-2025 period.</p>
      <p>These papers represent groundbreaking research that has significantly impacted the field of oncology and cancer research.</p>
      <h3>Impact Metrics</h3>
      <p>The featured papers have collectively received thousands of citations, demonstrating their influence on ongoing research worldwide.</p>
    `
  },
  {
    id: 5,
    title: "ICCEEE 2025 Successfully Concludes in Changchun, China",
    date: "25 July 2025",
    slug: "icceee-2025-changchun",
    excerpt: "The International Conference on Civil, Environmental and Energy Engineering 2025 concluded successfully in Changchun.",
    content: `
      <h2>ICCEEE 2025 Successfully Concludes in Changchun, China</h2>
      <p>The International Conference on Civil, Environmental and Energy Engineering (ICCEEE) 2025 has successfully concluded in Changchun, China.</p>
      <p>The conference brought together leading researchers, practitioners, and students from around the world to share insights and advances in civil, environmental, and energy engineering.</p>
      <h3>Conference Highlights</h3>
      <ul>
        <li>Over 200 presentations from international researchers</li>
        <li>Keynote speeches from industry leaders</li>
        <li>Networking opportunities and collaborative discussions</li>
        <li>Publication of selected papers in our journals</li>
      </ul>
    `
  },
  {
    id: 6,
    title: "Steady Growth in Impact for Tech Science Press Journals in the 2025 Journal Citation Reports",
    date: "18 June 2025",
    slug: "journal-citation-reports-2025",
    excerpt: "Our journals show consistent growth in impact metrics according to the 2025 Journal Citation Reports.",
    content: `
      <h2>Steady Growth in Impact for Tech Science Press Journals</h2>
      <p>We are pleased to report steady growth in impact metrics for our journals according to the 2025 Journal Citation Reports.</p>
      <p>This growth reflects the quality of research we publish and the dedication of our authors, reviewers, and editorial teams.</p>
    `
  },
  {
    id: 7,
    title: "ResearchGate and Tech Science Press greatly expand Journal Home partnership",
    date: "13 June 2025",
    slug: "researchgate-partnership",
    excerpt: "Expanding our partnership with ResearchGate to enhance journal visibility and researcher engagement.",
    content: `
      <h2>ResearchGate and Tech Science Press Partnership Expansion</h2>
      <p>We are excited to announce a significant expansion of our partnership with ResearchGate through the Journal Home program.</p>
      <p>This collaboration will enhance the visibility of our journals and facilitate greater engagement with the global research community.</p>
    `
  },
  {
    id: 8,
    title: "Canadian Journal of Urology Participation at AUA 2025: Fostering Global Collaboration to Propel Advances...",
    date: "23 May 2025",
    slug: "canadian-journal-urology-aua-2025",
    excerpt: "Canadian Journal of Urology's participation at AUA 2025 conference fostering international collaboration.",
    content: `
      <h2>Canadian Journal of Urology at AUA 2025</h2>
      <p>The Canadian Journal of Urology participated in the American Urological Association (AUA) 2025 Annual Meeting, fostering global collaboration to propel advances in urological research.</p>
      <p>This participation strengthened international partnerships and showcased cutting-edge research in urology.</p>
    `
  },
  {
    id: 9,
    title: "Journal of Psychology in Africa Now Indexed in EBSCO",
    date: "19 May 2025",
    slug: "psychology-africa-ebsco",
    excerpt: "Journal of Psychology in Africa achieves indexing in EBSCO database, expanding its reach.",
    content: `
      <h2>Journal of Psychology in Africa Now Indexed in EBSCO</h2>
      <p>We are thrilled to announce that the Journal of Psychology in Africa is now indexed in EBSCO, one of the world's leading academic databases.</p>
      <p>This indexing significantly expands the journal's visibility and accessibility to researchers worldwide.</p>
    `
  },
  {
    id: 10,
    title: "TSP Endorses NISO Transfer Code of Practice to Support Responsible Publishing",
    date: "12 May 2025",
    slug: "niso-transfer-code",
    excerpt: "Tech Science Press endorses the NISO Transfer Code of Practice for responsible publishing.",
    content: `
      <h2>TSP Endorses NISO Transfer Code of Practice</h2>
      <p>Tech Science Press has officially endorsed the NISO Transfer Code of Practice, demonstrating our commitment to responsible publishing practices.</p>
      <p>This endorsement ensures smooth manuscript transfers and protects author rights throughout the publication process.</p>
    `
  },
  {
    id: 11,
    title: "CHD Journal and AAPCHS Announce Official Partnership at 2025 China Congenital Heart Surgery Conference",
    date: "25 April 2025",
    slug: "chd-journal-aapchs-partnership",
    excerpt: "Official partnership announced between CHD Journal and AAPCHS at the 2025 conference.",
    content: `
      <h2>CHD Journal and AAPCHS Partnership</h2>
      <p>The CHD Journal and the Asian-Australasian Pediatric Cardiovascular and Heart Surgery Society (AAPCHS) have announced an official partnership at the 2025 China Congenital Heart Surgery Conference.</p>
      <p>This partnership will advance research and clinical practice in pediatric cardiovascular surgery.</p>
    `
  },
  {
    id: 12,
    title: "Canadian Journal of Urology is Now Indexed in EBSCO",
    date: "21 March 2025",
    slug: "canadian-journal-urology-ebsco",
    excerpt: "Canadian Journal of Urology achieves EBSCO indexing, enhancing global accessibility.",
    content: `
      <h2>Canadian Journal of Urology Indexed in EBSCO</h2>
      <p>The Canadian Journal of Urology is now indexed in EBSCO, marking another milestone in expanding the journal's global reach and accessibility.</p>
      <p>This indexing will benefit researchers and clinicians seeking the latest advances in urological research.</p>
    `
  },
  {
    id: 13,
    title: "TSP Statement on Unauthorized Third-Party Manuscript Solicitation and Fees",
    date: "11 March 2025",
    slug: "unauthorized-solicitation-statement",
    excerpt: "Official statement regarding unauthorized third-party manuscript solicitation and fees.",
    content: `
      <h2>TSP Statement on Unauthorized Solicitation</h2>
      <p>Tech Science Press issues an important statement regarding unauthorized third-party manuscript solicitation and fees.</p>
      <p>We urge authors to only submit manuscripts through our official channels and to report any suspicious solicitation attempts.</p>
      <h3>How to Verify Legitimate Communications</h3>
      <ul>
        <li>Check sender email domains</li>
        <li>Verify through our official website</li>
        <li>Contact our editorial office if uncertain</li>
      </ul>
    `
  },
  {
    id: 14,
    title: "AAPCHS Announces Strategic Partnership with Congenital Heart Disease",
    date: "13 February 2025",
    slug: "aapchs-congenital-heart-disease",
    excerpt: "Strategic partnership announced between AAPCHS and Congenital Heart Disease journal.",
    content: `
      <h2>AAPCHS Strategic Partnership</h2>
      <p>The Asian-Australasian Pediatric Cardiovascular and Heart Surgery Society (AAPCHS) announces a strategic partnership with Congenital Heart Disease journal.</p>
      <p>This collaboration will advance pediatric cardiovascular research and improve patient outcomes globally.</p>
    `
  },
  {
    id: 15,
    title: "TSP Journals Successfully Indexed by EBSCO",
    date: "13 December 2024",
    slug: "tsp-journals-ebsco",
    excerpt: "Multiple TSP journals achieve EBSCO indexing, expanding global research accessibility.",
    content: `
      <h2>TSP Journals Successfully Indexed by EBSCO</h2>
      <p>We are proud to announce that multiple Tech Science Press journals have been successfully indexed by EBSCO.</p>
      <p>This achievement significantly enhances the discoverability and accessibility of research published in our journals.</p>
      <h3>Indexed Journals</h3>
      <p>Several of our flagship journals across various disciplines are now available through EBSCO's comprehensive database platform.</p>
    `
  },
];

export default NewsConstants;
