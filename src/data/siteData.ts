export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  children?: NavItem[];
}

export interface HeroSlide {
  id: number;
  tag: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  bgImage: string;
  learnMoreLink: string;
  telegramLink: string;
  videoUrl: string;
}

export interface StatItem {
  id: number;
  value: number;
  suffix: string;
  title: string;
  description: string;
  icon: string;
}

export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  href: string;
  image: string;
  features: string[];
}

export interface PortfolioItem {
  id: number;
  slug: string;
  title: string;
  category: 'Energy' | 'Solar Panels' | 'Windmill' | 'Commercial';
  image: string;
  location: string;
  capacity: string;
  year: string;
  client: string;
  description: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  image: string;
  excerpt: string;
  readTime: string;
  format: 'standard' | 'video' | 'gallery' | 'link' | 'quote' | 'music';
  audioUrl?: string;
  videoUrl?: string;
  galleryImages?: string[];
  externalLink?: string;
  quote?: {
    text: string;
    author: string;
  };
}

export interface ProductItem {
  id: number;
  slug: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  gallery: string[];
  shortDesc: string;
  inStock: boolean;
  sku: string;
  specs: { [key: string]: string };
}

export interface TeamMember {
  id: number;
  slug: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  email: string;
  phone: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  skills: { label: string; percentage: number }[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  milestone: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'General' | 'Technical' | 'Financial' | 'Support';
}

export const siteConfig = {
  name: "ENERVOX",
  fullName: "Enervox Renewable Energy",
  tagline: "Empowering a Regenerative Tomorrow",
  address: "742 Evergreen Terrace, Clean Energy Park, San Diego, CA 92101",
  emails: [
    "info@enervox-energy.com",
    "support@enervox-energy.com"
  ],
  phones: [
    "+1 (800) 456-7890",
    "+1 (800) 987-6543"
  ],
  socials: {
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com"
  }
};

export const mainNavigation: NavItem[] = [
  {
    label: "Home",
    href: "/",
    children: [
      { label: "Home 1 - Corporate Main", href: "/" },
      { label: "Home 2 - Wind Energy", href: "/#wind-energy" },
      { label: "Home 3 - Solar & Storage", href: "/#solar-energy" },
    ]
  },
  {
    label: "Page",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Our History", href: "/history" },
      { label: "Our Team", href: "/team" },
      { label: "Single Team (Elena Rostova)", href: "/team/elena-rostova" },
      { label: "Services", href: "/services" },
      { label: "Services Single", href: "/services/wind-turbines" },
      { label: "FAQ", href: "/faq" },
      { label: "Elements", href: "/elements" },
      { label: "Typography", href: "/typography" },
      { label: "Coming Soon", href: "/coming-soon" },
      { label: "404 Page", href: "/404" },
    ]
  },
  {
    label: "Blog",
    href: "/blog",
    children: [
      { label: "Blog Listing", href: "/blog" },
      { label: "Grid 2 Columns", href: "/blog?layout=grid-2" },
      { label: "Grid 3 Columns", href: "/blog?layout=grid-3" },
      { label: "Grid 4 Columns", href: "/blog?layout=grid-4" },
      { label: "Masonry View", href: "/blog?layout=masonry" },
      { label: "Single - Standard Format", href: "/blog/future-of-floating-offshore-wind-farms" },
      { label: "Single - Video Format", href: "/blog/solar-photovoltaic-efficiency-breakthrough?format=video" },
      { label: "Single - Gallery Format", href: "/blog/hybrid-microgrids-powering-island-communities?format=gallery" },
      { label: "Single - Link Format", href: "/blog/global-net-zero-clean-energy-summit-highlights?format=link" },
      { label: "Single - Quote Format", href: "/blog/decarbonizing-heavy-industry-through-renewables?format=quote" },
      { label: "Single - Music / Audio Format", href: "/blog/the-energy-transition-podcast-episode-42?format=music" },
    ]
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    children: [
      { label: "Grid 2 Columns", href: "/portfolio?layout=grid-2" },
      { label: "Grid 3 Columns", href: "/portfolio?layout=grid-3" },
      { label: "Grid 4 Columns", href: "/portfolio?layout=grid-4" },
      { label: "Grid 5 Columns", href: "/portfolio?layout=grid-5" },
      { label: "Masonry View", href: "/portfolio?layout=masonry" },
      { label: "Gallery View", href: "/portfolio?layout=gallery" },
      { label: "Single Project", href: "/portfolio/mojave-solar-complex" },
    ]
  },
  {
    label: "Shop",
    href: "/shop",
    children: [
      { label: "Products Grid", href: "/shop" },
      { label: "Product Single", href: "/shop/enervox-nx3-solar-panel-550w" },
      { label: "Cart", href: "/cart" },
      { label: "Checkout", href: "/checkout" },
    ]
  },
  {
    label: "Contacts",
    href: "/contacts"
  }
];

export const heroSlidesData: HeroSlide[] = [
  {
    id: 1,
    tag: "ENERGY / WIND / SOLAR",
    titleLine1: "Largest Producer of",
    titleLine2: "Wind & Solar Energy",
    description: "Accelerating the global transition toward 100% clean, regenerative electricity through tier-1 turbine arrays and gigawatt solar infrastructure.",
    bgImage: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1920&auto=format&fit=crop",
    learnMoreLink: "/services",
    telegramLink: "https://t.me/enervox_renewables",
    videoUrl: "https://www.youtube.com/watch?v=1kUE0BZtTRc"
  },
  {
    id: 2,
    tag: "CLEAN ENERGY / HYBRID",
    titleLine1: "Proven Renewable",
    titleLine2: "Energy Solutions",
    description: "Engineered for maximum annual energy yield and grid stabilization with advanced bifacial PV modules and smart microgrid storage.",
    bgImage: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1920&auto=format&fit=crop",
    learnMoreLink: "/about",
    telegramLink: "https://t.me/enervox_renewables",
    videoUrl: "https://www.youtube.com/watch?v=1kUE0BZtTRc"
  },
  {
    id: 3,
    tag: "SUSTAINABILITY / FUTURE",
    titleLine1: "Investing in Clean",
    titleLine2: "Energy Generation",
    description: "Decarbonizing global industrial infrastructure with bankable utility-scale projects and lifecycle predictive O&M management.",
    bgImage: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1920&auto=format&fit=crop",
    learnMoreLink: "/portfolio",
    telegramLink: "https://t.me/enervox_renewables",
    videoUrl: "https://www.youtube.com/watch?v=1kUE0BZtTRc"
  }
];

export const statsData: StatItem[] = [
  {
    id: 1,
    value: 18000,
    suffix: "+",
    title: "Installed Capacity (MW)",
    description: "Clean electricity delivered seamlessly to municipal and industrial grids.",
    icon: "Zap"
  },
  {
    id: 2,
    value: 12000,
    suffix: "+",
    title: "WTGs Installed",
    description: "High-efficiency wind turbine generators operating worldwide with 99.8% uptime.",
    icon: "Wind"
  },
  {
    id: 3,
    value: 2450,
    suffix: "+",
    title: "Customers Globally",
    description: "Forward-thinking enterprises and governments reaching net-zero milestones.",
    icon: "Globe"
  }
];

export const whyChooseUsData = [
  {
    id: 1,
    title: "Best Energy Solutions",
    icon: "SunMedium",
    description: "Customized hybrid wind-solar architectures engineered for superior capacity factors and maximum kilowatt-hour production."
  },
  {
    id: 2,
    title: "End-To-End Services",
    icon: "Layers",
    description: "From resource assessment and environmental permitting to EPC turnkey execution and 30-year lifecycle support."
  },
  {
    id: 3,
    title: "Global Expertise",
    icon: "ShieldCheck",
    description: "Cross-border engineering veterans delivering ISO-certified excellence across 34 countries and extreme climatic zones."
  }
];

export const servicesStripData = [
  {
    id: 1,
    tag: "ADVANCED TECH",
    title: "Enhanced Services",
    description: "Aerodynamic blade retrofits, lidar-assisted yaw control, and high-frequency power electronics upgrades to boost existing output by up to 14%.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1000&auto=format&fit=crop",
    link: "/services/wind-turbines"
  },
  {
    id: 2,
    tag: "24/7 RELIABILITY",
    title: "Maintenance Services",
    description: "Autonomous drone inspections, ultrasonic non-destructive testing, and predictive SCADA algorithms preventing costly gearbox failures.",
    image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=1000&auto=format&fit=crop",
    link: "/services/maintenance-services"
  }
];

export const partnerLogos = [
  { name: "TerraGrid Energy", logoText: "TERRAGRID", highlight: "SOLAR TECH" },
  { name: "CleanVolt Systems", logoText: "CLEANVOLT", highlight: "GRID SYNC" },
  { name: "EcoWatt Corporation", logoText: "ECOWATT", highlight: "WIND POWER" },
  { name: "Helios Power Dynamics", logoText: "HELIOS", highlight: "BIFACIAL PV" },
  { name: "AeroDynamics Offshore", logoText: "AERODYN", highlight: "OFFSHORE" },
  { name: "Nordic Green Global", logoText: "NORDIC", highlight: "HYBRID BESS" }
];

export const serviceCategories: ServiceCategory[] = [
  {
    id: "wind-turbines",
    number: "01",
    title: "Wind Turbines",
    shortDesc: "Utility-scale onshore and floating offshore turbines with direct-drive permanent magnet generators.",
    href: "/services/wind-turbines",
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Modular nacelle architecture for easy serviceability",
      "Carbon-fiber reinforced 85m ultra-quiet blades",
      "Grid support with fast synthetic inertia response"
    ]
  },
  {
    id: "solar-panels",
    number: "02",
    title: "Solar Panels",
    shortDesc: "N-type TOPCon and heterojunction bifacial photovoltaic systems generating clean energy from dawn to dusk.",
    href: "/services/solar-panels",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Up to 23.4% module conversion efficiency",
      "Dual-axis intelligent astronomical solar trackers",
      "PID resistant encapsulation with 30-year linear performance warranty"
    ]
  },
  {
    id: "hybrid-energy",
    number: "03",
    title: "Hybrid Energy",
    shortDesc: "Integrated co-located wind, solar, and containerized lithium-iron-phosphate (LFP) energy storage systems.",
    href: "/services/hybrid-energy",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Sub-second microgrid response to frequency disruptions",
      "AI-optimized dispatch based on real-time spot energy pricing",
      "Zero-curtailment guarantee via thermal and battery balancing"
    ]
  }
];

export const factsProgress = [
  { label: "Wind Turbines Generation", percentage: 68 },
  { label: "Solar Panels Generation", percentage: 85 },
  { label: "Hybrid Energy & Storage", percentage: 25 }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    slug: "mojave-solar-complex",
    title: "Mojave Sun 450MW Solar Complex",
    category: "Solar Panels",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop",
    location: "California, USA",
    capacity: "450 MW",
    year: "2025",
    client: "Pacific Clean Grid Authority",
    description: "A monumental 450-megawatt bifacial tracker installation providing power to over 140,000 homes."
  },
  {
    id: 2,
    slug: "north-sea-breeze-offshore",
    title: "North Sea Breeze Offshore Array",
    category: "Windmill",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop",
    location: "Dogger Bank, North Sea",
    capacity: "820 MW",
    year: "2024",
    client: "EuroGrid Consortium",
    description: "68 deep-water wind turbines equipped with remote diagnostic telemetry and anti-corrosive nacelles."
  },
  {
    id: 3,
    slug: "atacama-hybrid-storage",
    title: "Atacama Desert Hybrid Microgrid",
    category: "Energy",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=800&auto=format&fit=crop",
    location: "Antofagasta, Chile",
    capacity: "310 MW + 120 MWh BESS",
    year: "2025",
    client: "Andean Mining Green Transition",
    description: "Continuous 24-hour clean base load power for copper refining operations replacing diesel generators."
  },
  {
    id: 4,
    slug: "apex-industrial-rooftop",
    title: "Apex Logistics 18MW Commercial Solar",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=800&auto=format&fit=crop",
    location: "Rotterdam, Netherlands",
    capacity: "18.5 MW",
    year: "2025",
    client: "Apex Global Supply Chain",
    description: "Europe's largest contiguous rooftop solar array covering 12 warehouse buildings."
  },
  {
    id: 5,
    slug: "baltic-gust-onshore-park",
    title: "Baltic Gust Onshore Wind Farm",
    category: "Windmill",
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=800&auto=format&fit=crop",
    location: "Gdansk, Poland",
    capacity: "240 MW",
    year: "2024",
    client: "Polska Green Energy SA",
    description: "High-wind onshore installation with low acoustic footprint designed for agricultural compatibility."
  },
  {
    id: 6,
    slug: "sonora-agrivoltaics-facility",
    title: "Sonora Agrivoltaic Solar Project",
    category: "Solar Panels",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop",
    location: "Sonora, Mexico",
    capacity: "180 MW",
    year: "2024",
    client: "AgriPower Latin America",
    description: "Elevated dual-use solar panels creating shaded microclimates for shade-loving organic crops."
  },
  {
    id: 7,
    slug: "nordic-aurora-hybrid-hub",
    title: "Nordic Aurora Wind & BESS Hub",
    category: "Energy",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop",
    location: "Tampere, Finland",
    capacity: "350 MW",
    year: "2025",
    client: "Nordic Grid Alliance",
    description: "Cold-climate de-icing turbines paired with rapid-discharge battery frequency containment."
  },
  {
    id: 8,
    slug: "metro-airport-net-zero",
    title: "Metropolitan Airport Net-Zero Plant",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop",
    location: "Austin, Texas, USA",
    capacity: "35 MW",
    year: "2024",
    client: "Austin Aviation Board",
    description: "Carport canopies and terminal microgrid supplying 100% of ground operations electricity."
  },
  {
    id: 9,
    slug: "sahara-phoenix-solar",
    title: "Sahara Phoenix Phase 1 Solar Farm",
    category: "Solar Panels",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop",
    location: "Ouarzazate, Morocco",
    capacity: "600 MW",
    year: "2026",
    client: "Maghreb Solar Authority",
    description: "Dust-repelling robotic cleaning technology ensuring 99.4% optical performance in desert sands."
  },
  {
    id: 10,
    slug: "highland-crest-wind-cluster",
    title: "Highland Crest Wind Cluster",
    category: "Windmill",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop",
    location: "Aberdeen, Scotland",
    capacity: "290 MW",
    year: "2025",
    client: "Caledonia Clean Power",
    description: "Steep-terrain wind turbine installation utilizing specialized heavy-lift tracked transport."
  },
  {
    id: 11,
    slug: "emerald-isle-hybrid-storage",
    title: "Emerald Microgrid Resiliency Network",
    category: "Energy",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=800&auto=format&fit=crop",
    location: "Cork, Ireland",
    capacity: "150 MW + 80 MWh",
    year: "2024",
    client: "EirGrid Innovations",
    description: "Black-start capable grid battery balancing high-penetration wind power on Atlantic coasts."
  },
  {
    id: 12,
    slug: "datacenter-campus-clean-feed",
    title: "Hyperscale Datacenter Solar Park",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=800&auto=format&fit=crop",
    location: "Frankfurt, Germany",
    capacity: "75 MW",
    year: "2025",
    client: "CloudCore Infrastructure",
    description: "Direct PPA solar supply with zero-emissions power certification for artificial intelligence compute clusters."
  }
];

export const testimonialsData = [
  {
    id: 1,
    name: "Jonathan Vance",
    role: "Chief Sustainability Officer, Apex Logistics",
    company: "Client of Company",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    quote: "Enervox delivered our 18.5MW rooftop array two weeks ahead of schedule. Their engineering precision, SCADA monitoring, and safety standards are unmatched in the utility renewable sector."
  },
  {
    id: 2,
    name: "Dr. Marianne Lindqvist",
    role: "VP of Grid Operations, EuroGrid Consortium",
    company: "Client of Company",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    quote: "Integrating Enervox's direct-drive offshore turbines stabilized our northern transmission grid during severe winter storms. Their team's proactive maintenance has maintained 99.9% uptime."
  },
  {
    id: 3,
    name: "Carlos Mendoza",
    role: "Director of Infrastructure, Andean Resources",
    company: "Client of Company",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    quote: "Switching our mining microgrid to an Enervox hybrid solar and BESS architecture reduced our diesel consumption by 82% within the first six months. Outstanding ROI."
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "future-of-floating-offshore-wind-farms",
    title: "The Future of Floating Offshore Wind Farms in Deep Ocean Basins",
    category: "WIND ENERGY",
    date: "October 18, 2026",
    readTime: "6 min read",
    author: {
      name: "Marcus Sterling",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
      role: "Lead Offshore Engineer"
    },
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=840&auto=format&fit=crop",
    excerpt: "Discover how tension-leg tethering platforms and next-gen 15MW turbines are unlocking untamed winds over deep waters previously inaccessible to bottom-fixed foundations.",
    format: "standard"
  },
  {
    id: 2,
    slug: "solar-photovoltaic-efficiency-breakthrough",
    title: "Tandem Perovskite-Silicon Cells Shatter 32% Commercial Efficiency Barrier",
    category: "SOLAR INNOVATION",
    date: "October 14, 2026",
    readTime: "8 min read",
    author: {
      name: "Dr. Elena Rostova",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
      role: "Chief Technology Officer"
    },
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=840&auto=format&fit=crop",
    excerpt: "A deep technical dive into spectral absorption layers and how commercial rollouts of tandem cells will reduce the required land footprint for utility solar farms by 35%.",
    format: "video",
    videoUrl: "https://www.youtube.com/watch?v=1kUE0BZtTRc"
  },
  {
    id: 3,
    slug: "hybrid-microgrids-powering-island-communities",
    title: "Island Resilience: How Hybrid BESS Systems Eliminate Diesel Dependency",
    category: "HYBRID & STORAGE",
    date: "October 08, 2026",
    readTime: "5 min read",
    author: {
      name: "Aisha Patel",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
      role: "Microgrid Systems Architect"
    },
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=840&auto=format&fit=crop",
    excerpt: "Case study on how Enervox coupled localized solar arrays and lithium-iron-phosphate battery containers to provide self-healing power grids for remote archipelagos.",
    format: "gallery",
    galleryImages: [
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=840&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=840&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=840&auto=format&fit=crop"
    ]
  },
  {
    id: 4,
    slug: "decarbonizing-heavy-industry-through-renewables",
    title: "Green Steel & Electrolyzers: Direct Renewable Generation for Clean Hydrogen",
    category: "CLEAN TECH",
    date: "September 29, 2026",
    readTime: "7 min read",
    author: {
      name: "Henrik Lindemann",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
      role: "VP of Clean Hydrogen"
    },
    image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=840&auto=format&fit=crop",
    excerpt: "Exploring the symbiotic integration of dedicated gigawatt wind farms feeding zero-emission proton exchange membrane electrolyzers at modern smelting operations.",
    format: "quote",
    quote: {
      text: "The future of heavy industrial manufacturing belongs not to carbon abatement, but to direct renewable electrification at source.",
      author: "Henrik Lindemann"
    }
  },
  {
    id: 5,
    slug: "global-net-zero-clean-energy-summit-highlights",
    title: "Key Takeaways from the Global Clean Energy Summit 2026",
    category: "INDUSTRY POLICY",
    date: "September 20, 2026",
    readTime: "4 min read",
    author: {
      name: "Marcus Sterling",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
      role: "Lead Offshore Engineer"
    },
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=840&auto=format&fit=crop",
    excerpt: "A comprehensive roundup of international grid harmonization standards, sovereign green bonds, and accelerated environmental permitting frameworks.",
    format: "link",
    externalLink: "https://irena.org"
  },
  {
    id: 6,
    slug: "the-energy-transition-podcast-episode-42",
    title: "The Energy Transition Podcast: Solving Grid Congestion & Curtailment",
    category: "PODCAST",
    date: "September 11, 2026",
    readTime: "32 min listen",
    author: {
      name: "Dr. Elena Rostova",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
      role: "Chief Technology Officer"
    },
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=840&auto=format&fit=crop",
    excerpt: "In this episode, Dr. Elena sits down with grid operators to unpack high-voltage DC lines, dynamic line ratings, and local battery storage sinks.",
    format: "music",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  }
];

export const shopProducts: ProductItem[] = [
  {
    id: 1,
    slug: "enervox-nx3-solar-panel-550w",
    name: "Enervox NX3 Monocrystalline 550W Bifacial Solar Panel",
    category: "Solar Panels",
    price: 249.00,
    oldPrice: 299.00,
    rating: 4.9,
    reviewsCount: 38,
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop"
    ],
    shortDesc: "High-yield 550W bifacial solar panel with 22.8% efficiency, multi-busbar technology, and anti-PID encapsulation.",
    inStock: true,
    sku: "EVX-SP-550",
    specs: {
      "Max Power (Pmax)": "550W",
      "Module Efficiency": "22.8%",
      "Cell Type": "N-Type TOPCon Monocrystalline",
      "Dimensions": "2278 x 1134 x 35 mm",
      "Warranty": "25 Years Product, 30 Years Linear Performance"
    }
  },
  {
    id: 2,
    slug: "enervox-voltpack-15kwh-bess",
    name: "VoltPack 15kWh Commercial Battery Energy Storage",
    category: "Battery Storage",
    price: 5490.00,
    oldPrice: 5990.00,
    rating: 5.0,
    reviewsCount: 19,
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=800&auto=format&fit=crop"
    ],
    shortDesc: "Modular high-density LiFePO4 battery rack with integrated liquid cooling, intelligent BMS, and 8,000 cycle lifespan.",
    inStock: true,
    sku: "EVX-BP-15K",
    specs: {
      "Nominal Capacity": "15.36 kWh",
      "Cell Chemistry": "Lithium Iron Phosphate (LiFePO4)",
      "Depth of Discharge": "95%",
      "Round-Trip Efficiency": "96.5%",
      "Communication": "CAN, RS485, Modbus TCP"
    }
  },
  {
    id: 3,
    slug: "enervox-aero-micro-turbine-3kw",
    name: "AeroVane 3kW Micro Wind Turbine System",
    category: "Wind Turbines",
    price: 3200.00,
    oldPrice: 3600.00,
    rating: 4.8,
    reviewsCount: 14,
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop"
    ],
    shortDesc: "Whisper-quiet carbon blade residential and agricultural wind turbine with electromagnetic braking and MPPT controller.",
    inStock: true,
    sku: "EVX-WT-3K",
    specs: {
      "Rated Output": "3,000 W",
      "Rotor Diameter": "2.8 m",
      "Cut-in Wind Speed": "2.1 m/s",
      "Rated Wind Speed": "11 m/s",
      "Braking Mechanism": "Dual Electromagnetic & Mechanical"
    }
  },
  {
    id: 4,
    slug: "enervox-smart-hybrid-inverter-12kw",
    name: "Enervox Synchro 12kW Three-Phase Hybrid Inverter",
    category: "Inverters",
    price: 1890.00,
    oldPrice: 2150.00,
    rating: 4.9,
    reviewsCount: 27,
    image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=800&auto=format&fit=crop"
    ],
    shortDesc: "Grid-tie + off-grid hybrid inverter with dual MPPT trackers, EPS backup in <10ms, and smartphone cloud telemetry.",
    inStock: true,
    sku: "EVX-INV-12K",
    specs: {
      "Max PV Input": "18,000 W",
      "AC Output Power": "12,000 VA",
      "Peak Efficiency": "98.4%",
      "Switchover Time": "<10 milliseconds",
      "Enclosure Rating": "IP66 Outdoor Rated"
    }
  },
  {
    id: 5,
    slug: "enervox-heavy-duty-solar-mounting-rails",
    name: "AluPro Anodized Solar Ground & Roof Mount Rail Set",
    category: "Accessories",
    price: 135.00,
    rating: 4.7,
    reviewsCount: 42,
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop"
    ],
    shortDesc: "Corrosion-proof 6005-T5 structural aluminum mounting rails designed to withstand hurricane-grade wind loads.",
    inStock: true,
    sku: "EVX-MNT-ALU",
    specs: {
      "Material": "Anodized Aluminum AL6005-T5",
      "Wind Resistance": "Up to 60 m/s",
      "Snow Load": "Up to 1.4 kN/m2",
      "Compatibility": "Universal Framed PV Modules"
    }
  },
  {
    id: 6,
    slug: "enervox-smart-ev-ultra-charger-22kw",
    name: "VoltFlow 22kW Commercial EV Fast Charging Station",
    category: "Accessories",
    price: 1150.00,
    oldPrice: 1290.00,
    rating: 5.0,
    reviewsCount: 11,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop"
    ],
    shortDesc: "Dynamic solar surplus load balancing EV charger with RFID authentication and OCPP 1.6J network compatibility.",
    inStock: true,
    sku: "EVX-EV-22K",
    specs: {
      "Charging Power": "Up to 22 kW (32A 3-Phase)",
      "Connector": "Type 2 Tethered 6.5m Cable",
      "Protocols": "OCPP 1.6 JSON, WiFi, 4G, Ethernet",
      "Protection": "Type A + 6mA DC RCD Built-in"
    }
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    slug: "elena-rostova",
    name: "Dr. Elena Rostova",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    bio: "Dr. Elena holds a Ph.D. in Power Electronics from ETH Zurich and has led the engineering of over 4GW of renewable energy assets across four continents.",
    email: "e.rostova@enervox-energy.com",
    phone: "+1 (800) 456-7890 ext. 104",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    skills: [
      { label: "High-Voltage Power Electronics", percentage: 98 },
      { label: "Turbine Aerodynamic Control", percentage: 94 },
      { label: "Grid Interconnection Architecture", percentage: 92 },
      { label: "Utility Battery Energy Storage", percentage: 89 }
    ]
  },
  {
    id: 2,
    slug: "marcus-sterling",
    name: "Marcus Sterling",
    role: "VP of Global Offshore Projects",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    bio: "Marcus brings 20+ years of maritime construction and subsea cabling expertise, overseeing Enervox's flagship deep-water offshore wind projects.",
    email: "m.sterling@enervox-energy.com",
    phone: "+1 (800) 456-7890 ext. 108",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    skills: [
      { label: "Offshore Foundation EPC", percentage: 96 },
      { label: "Marine Logistics & Heavy Lifting", percentage: 95 },
      { label: "Environmental Compliance", percentage: 90 },
      { label: "Contract Negotiation", percentage: 88 }
    ]
  },
  {
    id: 3,
    slug: "aisha-patel",
    name: "Aisha Patel",
    role: "Head of Microgrids & BESS Engineering",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    bio: "Specializing in autonomous island microgrids and energy arbitrage software, Aisha manages our battery storage integration division.",
    email: "a.patel@enervox-energy.com",
    phone: "+1 (800) 456-7890 ext. 112",
    socials: {
      linkedin: "https://linkedin.com"
    },
    skills: [
      { label: "Battery Chemistry Management", percentage: 97 },
      { label: "SCADA & Energy Management Systems", percentage: 94 },
      { label: "Frequency Stabilization", percentage: 91 },
      { label: "Machine Learning Dispatch", percentage: 86 }
    ]
  },
  {
    id: 4,
    slug: "henrik-lindemann",
    name: "Henrik Lindemann",
    role: "Director of Global Asset Performance",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
    bio: "Former wind technician turned operations executive, Henrik leads our 24/7 centralized monitoring center supervising 12,000+ WTGs.",
    email: "h.lindemann@enervox-energy.com",
    phone: "+1 (800) 456-7890 ext. 119",
    socials: {
      linkedin: "https://linkedin.com"
    },
    skills: [
      { label: "Predictive O&M Strategy", percentage: 96 },
      { label: "Drone Thermography Diagnostics", percentage: 93 },
      { label: "Reliability Engineering", percentage: 92 },
      { label: "Turbine Overhauls", percentage: 90 }
    ]
  }
];

export const historyTimeline: TimelineEvent[] = [
  {
    year: "2008",
    title: "Founding & First Wind Installation",
    description: "Enervox was founded with a mission to develop rugged, direct-drive turbines for high-wind northern regions. Completed our first 50MW onshore farm.",
    milestone: "50 MW Installed",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=600&auto=format&fit=crop"
  },
  {
    year: "2013",
    title: "Expansion into Utility-Scale Solar",
    description: "Launched our Solar Photovoltaic division and patented our dual-axis astronomical tracking system, boosting solar yield by 28%.",
    milestone: "1,200 MW Milestone",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=600&auto=format&fit=crop"
  },
  {
    year: "2018",
    title: "Pioneering Hybrid Storage & Microgrids",
    description: "Constructed the first utility-scale hybrid wind-solar-BESS installation in Chile, setting global standards for continuous renewable baseload.",
    milestone: "5,000 MW Milestone",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=600&auto=format&fit=crop"
  },
  {
    year: "2022",
    title: "Deep-Water Floating Offshore Breakthrough",
    description: "Commissioned our first tension-leg floating wind turbine array in the North Sea, operating in waters deeper than 120 meters.",
    milestone: "12,000 MW Milestone",
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=600&auto=format&fit=crop"
  },
  {
    year: "2026",
    title: "Global Leadership & 18GW Capacity",
    description: "Operating in 34 countries with over 18GW installed capacity and 12,000 wind turbines in active generation. Leading next-gen hydrogen electrification.",
    milestone: "18,000+ MW Milestone",
    image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=600&auto=format&fit=crop"
  }
];

export const faqItems: FaqItem[] = [
  {
    category: "General",
    question: "What types of renewable energy solutions does Enervox build?",
    answer: "Enervox specializes in turnkey utility-scale and commercial renewable infrastructure: onshore and offshore wind farms, high-efficiency bifacial solar photovoltaic arrays, and co-located Battery Energy Storage Systems (BESS) engineered for grid stability."
  },
  {
    category: "General",
    question: "Does Enervox handle engineering, procurement, and construction (EPC)?",
    answer: "Yes, we are a full-scope EPC provider. We manage environmental permitting, civil works, electrical interconnection, turbine manufacturing, balance of plant, and commissioning under single-point responsibility contracts."
  },
  {
    category: "Technical",
    question: "What is the expected operating lifespan of Enervox wind turbines and solar panels?",
    answer: "Our wind turbine nacelles and structural towers are designed for a 30-year design life with routine mid-life overhauls. Our TOPCon solar panels come with a 30-year linear performance warranty guaranteeing >87.4% output at year 30."
  },
  {
    category: "Technical",
    question: "How do your hybrid systems solve the intermittency of wind and solar?",
    answer: "We pair co-located wind and solar arrays with smart lithium-iron-phosphate (LFP) battery storage managed by our proprietary EMS algorithm. The battery absorbs peak generation and discharges during wind lulls or after sunset, delivering dependable dispatchable power."
  },
  {
    category: "Financial",
    question: "What financing structures and PPA options do you offer?",
    answer: "We work with leading international green investment funds and multilateral lenders to offer Power Purchase Agreements (PPAs), build-own-transfer (BOT) structures, and export-credit-backed EPC financing tailored to project economics."
  },
  {
    category: "Support",
    question: "What level of maintenance support is provided after commissioning?",
    answer: "Enervox operates three 24/7 SCADA operations control centers globally. We offer 5 to 25 year long-term service agreements (LTSAs) guaranteeing 98%+ availability, predictive vibration analysis, and rapid emergency field technician dispatch."
  }
];

export const galleryImages = [
  {
    id: 1,
    title: "Offshore Wind Installation",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Utility Solar Array at Dawn",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "BESS Containerized Energy Storage",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1200&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Highland Wind Turbine Rotor",
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=1200&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Substation Transformer Synchronizer",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Commercial Rooftop PV Panels",
    image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=1200&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=400&auto=format&fit=crop"
  }
];
