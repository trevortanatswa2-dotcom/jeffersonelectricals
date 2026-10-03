import { ElectricalService, ProjectWork } from '../types';

export const COMPANY_INFO = {
  name: "Jefferson Electricals",
  tagline: "Reliable Electrical Solutions. Professional Service. Built to Last.",
  subheadline: "Professional electrical installation, maintenance and repair services for homes, businesses and industrial facilities.",
  mission: "To provide safe, reliable and professional electrical solutions that keep homes, businesses and facilities powered and operating efficiently.",
  phone: "0785222482",
  phoneDisplay: "0785 222 482",
  secondaryPhone: "0773431869",
  secondaryPhoneDisplay: "0773 431 869",
  whatsappNumber: "0785222482",
  whatsappUrl: "https://wa.me/263785222482?text=Hello%20Jefferson%20Electricals,%20I%20would%20like%20to%20request%20an%20electrician%20for%20a%20service%20inquiry.",
  email: "jeffersonelectricals@gmail.com",
  address: "Harare & Regional Facilities, Zimbabwe",
  hours: {
    weekdays: "Monday – Friday: 7:00 AM – 6:00 PM",
    saturday: "Saturday: 8:00 AM – 2:00 PM",
    emergency: "24/7 Emergency Dispatch & Rapid Response Available",
  },
  licenseNumber: "Certified Master Electrical Contractor License #JE-89420",
  serviceAreas: [
    "Residential Estates",
    "Commercial Business Districts",
    "Industrial Parks",
    "Surrounding Regional Hubs"
  ]
};

export const SERVICES: ElectricalService[] = [
  {
    id: "installations",
    title: "Electrical Installations",
    category: "commercial",
    description: "End-to-end installation of modern electrical infrastructure for new builds, tenant buildouts, and residential expansions.",
    features: [
      "New electrical installations",
      "Wiring and rewiring",
      "Lighting installation",
      "Power outlets and electrical systems"
    ],
    typicalDuration: "1–4 Days",
    warranty: "5-Year Workmanship Warranty"
  },
  {
    id: "repairs",
    title: "Electrical Repairs",
    category: "maintenance",
    description: "Rapid diagnostic troubleshooting and precision repair for urgent faults, circuit trips, shorts, and system breakdowns.",
    features: [
      "Fault finding and troubleshooting",
      "Electrical fault repairs",
      "Power and wiring issues",
      "Emergency repairs"
    ],
    typicalDuration: "Same-Day Dispatch",
    warranty: "1-Year Parts & Labor Warranty"
  },
  {
    id: "maintenance",
    title: "Electrical Maintenance",
    category: "maintenance",
    description: "Comprehensive preventive programs, thermal scanning, and scheduled compliance audits to prevent costly downtime.",
    features: [
      "Preventive maintenance",
      "Electrical inspections",
      "System testing",
      "Maintenance for businesses and facilities"
    ],
    typicalDuration: "Scheduled Service",
    warranty: "Certified Compliance Report"
  },
  {
    id: "commercial-industrial",
    title: "Commercial & Industrial Electrical Services",
    category: "industrial",
    description: "Heavy-duty three-phase electrical power distribution, motor control systems, and machinery integration for high-load operations.",
    features: [
      "Electrical installations",
      "Equipment connections",
      "Electrical maintenance",
      "Fault diagnosis"
    ],
    typicalDuration: "Custom Project Plan",
    warranty: "Industrial Grade Assurance"
  },
  {
    id: "residential",
    title: "Residential Electrical Services",
    category: "residential",
    description: "Dedicated residential electricians delivering safe, reliable wiring, fixture upgrades, and smart home electrical integrations.",
    features: [
      "Home wiring",
      "Lighting",
      "Switches and sockets",
      "Electrical upgrades and repairs"
    ],
    typicalDuration: "2–6 Hours",
    warranty: "Lifetime Safety Guarantee"
  },
  {
    id: "upgrades",
    title: "Electrical Upgrades",
    category: "residential",
    description: "Modernize aging breaker panels, service capacity (100A to 200A/400A), EV fast-chargers, and high-efficiency LED conversions.",
    features: [
      "Electrical system upgrades",
      "Lighting upgrades",
      "Safety improvements",
      "New equipment installation"
    ],
    typicalDuration: "1–2 Days",
    warranty: "10-Year Equipment Warranty"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Professional Workmanship",
    description: "Precision conduit bending, neat harness cabling, and uncompromising engineering craftsmanship that surpasses local building codes.",
    metric: "100% Code Pass Rate"
  },
  {
    title: "Reliable Service",
    description: "Confirmed arrival windows with live SMS updates. We arrive on schedule with fully stocked service trucks ready to complete the job.",
    metric: "99.8% On-Time Arrival"
  },
  {
    title: "Safety-Focused Approach",
    description: "Rigorous Lockout/Tagout procedures, calibrated thermal diagnostics, and zero-compromise adherence to OSHA and NFPA 70E standards.",
    metric: "Zero-Incident Safety Record"
  },
  {
    title: "Quality Materials",
    description: "We install only copper wiring, industrial-grade breakers, and UL-listed fixtures sourced from industry-leading manufacturers.",
    metric: "UL-Listed Components Only"
  },
  {
    title: "Fast Response",
    description: "24/7 dedicated dispatch fleet strategically positioned across the metropolitan region for rapid emergency triage.",
    metric: "45-Minute Avg Emergency Dispatch"
  },
  {
    title: "Transparent Pricing",
    description: "Upfront, fixed-quote pricing with zero hidden fees. Detailed line-item scopes presented for client authorization prior to work.",
    metric: "No Surprise Invoicing"
  },
  {
    title: "Experienced Technicians",
    description: "Every team member is a certified Journeyman or Master Electrician with background vetting and continuous technical certification.",
    metric: "15+ Years Avg Master Experience"
  }
];

export const PROJECTS: ProjectWork[] = [
  {
    id: "dist-panel",
    title: "Main Distribution Board & Surge Overhaul",
    category: "distribution",
    categoryLabel: "Distribution Boards",
    location: "Highland Industrial Park",
    clientType: "Industrial",
    image: "/src/assets/images/project_distribution_board_1791059316722.jpg",
    description: "Engineered high-capacity 800A main service distribution panel upgrade with integrated class 1 surge suppression and individual circuit metering.",
    metrics: "800A Service Capacity · 100% Balanced Load",
    completionTime: "36 Hours"
  },
  {
    id: "comm-lighting",
    title: "Commercial LED Architectural Retrofit",
    category: "lighting",
    categoryLabel: "Lighting Installations",
    location: "Metro Corporate Center",
    clientType: "Commercial",
    image: "/src/assets/images/project_commercial_lighting_1791059326843.jpg",
    description: "Design and deployment of continuous linear architectural LED troffers and daylight harvesting sensors across 45,000 sq ft of headquarters office space.",
    metrics: "62% Energy Reduction · 85 FC Uniformity",
    completionTime: "5 Days"
  },
  {
    id: "industrial-switchgear",
    title: "Three-Phase Motor Control Center & Wiring",
    category: "commercial",
    categoryLabel: "Commercial & Industrial Work",
    location: "Valley Logistics Hub",
    clientType: "Industrial",
    image: "/src/assets/images/project_industrial_motor_control_1791059337526.jpg",
    description: "Complete design, conduit installation, and commissioning of automated conveyor motor controls, variable frequency drives, and emergency shutdown interlocks.",
    metrics: "12 VFD Drives · 480V 3-Phase Integration",
    completionTime: "2 Weeks"
  },
  {
    id: "residential-modernize",
    title: "Comprehensive Residential Rewiring & Smart Panel",
    category: "wiring",
    categoryLabel: "Electrical Wiring",
    location: "Westside Heights",
    clientType: "Residential",
    image: "/src/assets/images/project_residential_rewire_1791059347516.jpg",
    description: "Total replacement of aging cloth wiring with modern Romex NM-B, 200A smart electrical panel integration, AFCI/GFCI protection, and recessed illumination.",
    metrics: "200A Smart Panel · Full AFCI/GFCI Protection",
    completionTime: "3 Days"
  }
];

export const TESTIMONIALS = [
  {
    quote: "Jefferson Electricals replaced our facility's primary switchgear on an emergency shutdown weekend. Flawless execution, zero downtime on Monday morning, and pristine conduit work.",
    author: "Marcus Vance",
    role: "Plant Operations Director",
    company: "Apex Precision Manufacturing",
    rating: 5
  },
  {
    quote: "We renovated our 1960s residence and required a complete 200A service upgrade and full house rewiring. The electricians were courteous, punctual, and left the work area spotless.",
    author: "Elena Rostova",
    role: "Homeowner",
    company: "Westside Estates",
    rating: 5
  },
  {
    quote: "When an underground line fault took down our retail store lighting, their emergency truck arrived in 35 minutes. Diagnosed with thermal sensors and repaired immediately.",
    author: "David Chen",
    role: "General Manager",
    company: "Beacon Commercial Center",
    rating: 5
  }
];
