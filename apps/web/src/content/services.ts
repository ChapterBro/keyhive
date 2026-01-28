export type Service = {
  slug: string;
  name: string;
  title: string;
  description: string;
  overview: string;
  bullets: string[];
  process: string[];
  idealFor: string[];
};

export const services: Service[] = [
  {
    slug: 'emergency-locksmith',
    name: 'Emergency Locksmith',
    title: 'Emergency Locksmith in Kansas City, KS',
    description:
      'Fast 24/7 emergency locksmith help for lockouts, broken keys, and urgent security issues in Kansas City, KS and nearby areas.',
    overview:
      'When something breaks at the worst time, you need a mobile locksmith who answers quickly and arrives ready to solve the issue. We handle urgent home, business, and vehicle situations with clear estimates and clean, professional work.',
    bullets: [
      'Rapid response for lockouts and urgent security issues',
      'Non-destructive entry whenever possible',
      'On-site solutions for doors, locks, and keys',
      'Transparent options before work begins'
    ],
    process: [
      'Call and share your location and lock type',
      'We provide an ETA and upfront range',
      'Technician arrives with mobile tools',
      'We restore access and verify security'
    ],
    idealFor: [
      'After-hours lockouts',
      'Broken or jammed locks',
      'Lost keys and urgent rekey needs'
    ]
  },
  {
    slug: 'residential-locksmith',
    name: 'Residential Locksmith',
    title: 'Residential Locksmith Services',
    description:
      'Home locksmith services for lock upgrades, rekeying, repairs, and security improvements throughout Kansas City, KS and nearby neighborhoods.',
    overview:
      'Protecting your home starts with dependable locks and smart access control. We work with doors, deadbolts, and smart lock setups to keep your home secure without the stress.',
    bullets: [
      'Deadbolt and handle set upgrades',
      'Smart lock setup and troubleshooting',
      'Repair for sticking or misaligned doors',
      'Key control recommendations'
    ],
    process: [
      'Walk-through of doors and access points',
      'Discuss budget and security goals',
      'Install or repair with clean finish work',
      'Test every lock and provide new keys'
    ],
    idealFor: [
      'Homeowners and renters',
      'New move-ins or remodels',
      'Security-focused upgrades'
    ]
  },
  {
    slug: 'residential-lockout',
    name: 'Residential Lockout',
    title: 'Residential Lockout Help',
    description:
      'Locked out of your house? We provide quick, careful home lockout service across Kansas City, KS and surrounding areas.',
    overview:
      'Getting locked out is stressful. We aim for fast arrival times and gentle entry techniques to protect your door, frame, and hardware.',
    bullets: [
      'Careful, non-destructive entry methods',
      'Available 24/7 for urgent situations',
      'Verification for occupant access',
      'Optional rekeying after entry'
    ],
    process: [
      'Confirm location and lock type',
      'Arrive and verify access',
      'Restore entry and test hardware',
      'Offer rekey or spare key options'
    ],
    idealFor: [
      'Keys locked inside',
      'Lost or misplaced house keys',
      'Stuck locks or broken keys'
    ]
  },
  {
    slug: 'lock-repair',
    name: 'Lock Repair',
    title: 'Lock Repair for Homes and Businesses',
    description:
      'Repair jammed, loose, or misaligned locks with reliable on-site service in Kansas City, KS and nearby areas.',
    overview:
      'A lock that sticks or fails can compromise security. We diagnose the issue and restore smooth operation with minimal disruption.',
    bullets: [
      'Fix sticking, loose, or misaligned locks',
      'Adjust door hardware and strike plates',
      'Replace worn internal components',
      'Improve latch and bolt alignment'
    ],
    process: [
      'Inspect door alignment and lock condition',
      'Explain the repair options',
      'Complete the repair and adjustments',
      'Test for smooth, secure operation'
    ],
    idealFor: [
      'Sticky or hard-to-turn locks',
      'Door alignment problems',
      'Hardware showing wear'
    ]
  },
  {
    slug: 'lock-installation',
    name: 'Lock Installation',
    title: 'New Lock Installation',
    description:
      'Install new deadbolts, lever sets, and smart locks for improved security in Kansas City, KS and surrounding areas.',
    overview:
      'New locks give you a fresh start and better security. We install high-quality hardware with clean finishes and proper alignment.',
    bullets: [
      'Deadbolts, levers, and knob sets',
      'Smart lock setup and pairing',
      'Security-focused hardware recommendations',
      'Clean installation with tested fit'
    ],
    process: [
      'Review doors and desired hardware',
      'Confirm compatibility and layout',
      'Install and align new lockset',
      'Test operation and provide keys'
    ],
    idealFor: [
      'New construction or remodels',
      'Replacing outdated hardware',
      'Adding smart access'
    ]
  },
  {
    slug: 'rekeying-services',
    name: 'Rekeying Services',
    title: 'Lock Rekeying Services',
    description:
      'Rekey your locks for a fresh key set without replacing hardware in Kansas City, KS and nearby communities.',
    overview:
      'Rekeying updates the internal pins so old keys stop working. It is a fast, cost-effective way to reset access after a move or key loss.',
    bullets: [
      'Change keys without replacing hardware',
      'Match multiple locks to one key',
      'Ideal after move-ins or staff changes',
      'Quick, on-site service'
    ],
    process: [
      'Confirm the existing lock brands',
      'Re-pin cylinders on-site',
      'Issue new keys and test each door',
      'Confirm key control for all users'
    ],
    idealFor: [
      'New homeowners and renters',
      'Lost keys or security concerns',
      'Businesses changing access'
    ]
  },
  {
    slug: 'commercial-locksmith',
    name: 'Commercial Locksmith',
    title: 'Commercial Locksmith for Kansas Businesses',
    description:
      'Commercial locksmith service for offices, storefronts, and facilities across Kansas City, KS and nearby areas.',
    overview:
      'Your business needs reliable access control and secure entry points. We support offices, retail, and light industrial spaces with modern hardware and key control.',
    bullets: [
      'Master key and rekeying support',
      'Door hardware repair and replacement',
      'High-traffic lock upgrades',
      'Access control planning'
    ],
    process: [
      'Assess traffic flow and security goals',
      'Recommend hardware options',
      'Install or rekey on-site',
      'Test access for staff and managers'
    ],
    idealFor: [
      'Storefronts and offices',
      'Property managers',
      'Facilities with multiple entries'
    ]
  },
  {
    slug: 'commercial-lockout',
    name: 'Commercial Lockout',
    title: 'Commercial Lockout Assistance',
    description:
      'Locked out of your business? We provide fast commercial lockout help in Kansas City, KS and surrounding areas.',
    overview:
      'Downtime is costly. We help businesses regain access quickly while keeping doors and hardware intact whenever possible.',
    bullets: [
      'Rapid response for business lockouts',
      'Careful entry to protect hardware',
      'Verification for authorized access',
      'Optional rekey or upgrade after entry'
    ],
    process: [
      'Confirm location and authorization',
      'Arrive with commercial entry tools',
      'Restore access with minimal disruption',
      'Secure the entry after completion'
    ],
    idealFor: [
      'Lost staff keys',
      'Stuck or malfunctioning locks',
      'After-hours access issues'
    ]
  },
  {
    slug: 'automotive-locksmith',
    name: 'Automotive Locksmith',
    title: 'Automotive Locksmith Services',
    description:
      'Mobile automotive locksmith services for keys, locks, and ignition issues in Kansas City, KS and nearby cities.',
    overview:
      'From lockouts to key replacements, we handle many makes and models on-site. Our mobile setup lets us solve most issues without towing.',
    bullets: [
      'Vehicle lockout assistance',
      'Key cutting and programming options',
      'Ignition and key extraction help',
      'Mobile service at your location'
    ],
    process: [
      'Confirm vehicle make, model, and year',
      'Provide options and ETA',
      'Arrive with mobile tools',
      'Test keys and verify access'
    ],
    idealFor: [
      'Lost or broken car keys',
      'Locked keys in the vehicle',
      'Ignition issues'
    ]
  },
  {
    slug: 'car-lockout',
    name: 'Car Lockout',
    title: 'Car Lockout Service',
    description:
      'Locked out of your car? We provide quick, careful entry in Kansas City, KS and nearby service areas.',
    overview:
      'Car lockouts are common and frustrating. We use safe entry techniques to get you back in without damaging the vehicle.',
    bullets: [
      'Non-destructive vehicle entry',
      'Fast response across service areas',
      'Support for many makes and models',
      'Clear ETA and pricing range'
    ],
    process: [
      'Confirm location and vehicle details',
      'Arrive and verify access',
      'Restore entry and check locks',
      'Recommend spare key options'
    ],
    idealFor: [
      'Keys locked inside the car',
      'Lost key scenarios',
      'Remote or fob issues'
    ]
  },
  {
    slug: 'car-key-programming',
    name: 'Car Key Programming',
    title: 'Car Key Programming and Replacement',
    description:
      'Mobile car key programming and replacement services for select vehicles in Kansas City, KS and nearby areas.',
    overview:
      'Modern vehicles rely on chip keys and fobs. We program compatible keys on-site so you can avoid long dealership delays.',
    bullets: [
      'Chip key and fob programming',
      'Mobile service at your location',
      'Compatibility guidance by vehicle',
      'Testing for start and lock functions'
    ],
    process: [
      'Verify vehicle year and key type',
      'Provide programming options',
      'Program and test the new key',
      'Confirm locks and ignition start'
    ],
    idealFor: [
      'Lost or damaged key fobs',
      'Need for an extra key',
      'Replacing worn or failing keys'
    ]
  }
];
