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
      '24/7 mobile emergency locksmith in Kansas City, KS for home, car, and business lockouts, broken keys, and urgent access issues with damage-aware entry.',
    overview:
      'Locked out? KeyHive provides fast, mobile emergency locksmith service for homes, vehicles, and businesses across the Kansas City area. We respond quickly and use professional, damage-aware entry methods to restore access without unnecessary damage.',
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
      'Residential locksmith in Kansas City, KS for lock changes, rekeying, repairs, smart locks, and lockouts. Practical upgrades without upsells or pressure.',
    overview:
      'KeyHive secures homes with lock changes, rekeying, lock repairs, smart lock installation, and home lockout service. We focus on real security improvements, not upsells.',
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
      'Residential lockout service in Kansas City, KS with fast, damage-aware entry, clear verification, and careful handling to get you back inside safely.',
    overview:
      'Locked out of your home? KeyHive responds quickly in Kansas City, KS with damage-aware entry methods to restore access while protecting your doors and hardware.',
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
      'Lock repair in Kansas City, KS for homes and businesses. On-site fixes for worn or malfunctioning locks that restore security without replacements when possible.',
    overview:
      'Malfunctioning or worn locks weaken security. KeyHive repairs residential and commercial locks on-site whenever possible, restoring proper function without pushing full replacements.',
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
      'Residential lock installation in Kansas City, KS with proper alignment, smooth operation, and dependable long-term security with reliable hardware fit.',
    overview:
      'KeyHive installs residential locks with proper alignment and smooth operation to ensure dependable, long-term security.',
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
      'Lock rekeying in Kansas City, KS so old keys stop working. Ideal after moves, tenant changes, or lost keys with fast, on-site mobile service and clear options.',
    overview:
      'KeyHive rekeys existing locks so old keys no longer work, making this ideal after moves, tenant changes, or lost keys.',
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
      'Commercial locksmith in Kansas City, KS for lock installs, rekeying, master key systems, and access control that keep operations secure and moving daily.',
    overview:
      'KeyHive helps businesses control access and reduce risk with commercial lock installation, rekeying, master key systems, and access control solutions designed to keep operations running smoothly.',
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
      'Commercial lockout help in Kansas City, KS with fast, damage-aware entry so businesses regain access without unnecessary door damage or downtime on-site.',
    overview:
      'KeyHive restores business access fast in Kansas City, KS with professional, damage-aware entry that protects doors and keeps downtime to a minimum.',
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
      'Mobile automotive locksmith in Kansas City, KS for lockouts, key replacement, fob programming, ignition issues, and broken key removal for most vehicles.',
    overview:
      'KeyHive offers full mobile automotive locksmith services, including lockouts, key replacement, key fob programming, ignition issues, and broken key removal for most vehicles.',
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
      'Car lockout service in Kansas City, KS with non-destructive entry, fast response, and damage-aware care so you are back on the road quickly, 24/7 today.',
    overview:
      'Locked out of your vehicle? KeyHive provides professional car unlocking using non-destructive techniques to get you back on the road quickly.',
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
      'Mobile car key programming in Kansas City, KS for transponder keys and fobs. We verify compatibility and get keys working fast for many makes on-site.',
    overview:
      'KeyHive programs transponder keys and key fobs so they communicate correctly with your vehicle. Mobile service is available for many makes and models.',
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
  },
  {
    slug: 'high-security-lock-installation',
    name: 'High-Security Lock Installation',
    title: 'Mobile High-Security Lock Installation in Kansas City, KS',
    description:
      'High-security lock installation in Kansas City, KS for homes and businesses needing stronger protection against picking, drilling, and forced entry.',
    overview:
      'KeyHive installs high-security locks designed to resist picking, drilling, and forced entry for homes and businesses that require stronger protection.',
    bullets: [
      'Install high-security deadbolts and cylinders',
      'Reinforced hardware to deter drilling and picking',
      'Upgrades for homes, offices, and storefronts',
      'Professional alignment and verification'
    ],
    process: [
      'Review doors and security goals',
      'Recommend high-security hardware options',
      'Install and align locksets on-site',
      'Test operation and provide keys'
    ],
    idealFor: [
      'Homes needing stronger entry protection',
      'Businesses with higher security requirements',
      'Upgrades after a break-in'
    ]
  },
  {
    slug: 'garage-door-lock-service',
    name: 'Garage Door Lock Service',
    title: 'Mobile Garage Door Lock Service in Kansas City, KS',
    description:
      'Garage door lock service in Kansas City, KS for repairs, upgrades, and replacements on garage and side-door entry points.',
    overview:
      'Garage access is a common weak point. KeyHive installs, repairs, and upgrades garage and side-door locks to improve overall security.',
    bullets: [
      'Repair and replace garage door locks',
      'Upgrade side-door entry hardware',
      'Improve alignment and latch security',
      'Mobile service at your location'
    ],
    process: [
      'Inspect garage and side-door locks',
      'Explain repair vs upgrade options',
      'Complete service with proper alignment',
      'Test locks and confirm secure closure'
    ],
    idealFor: [
      'Aging or loose garage locks',
      'New move-ins needing reset keys',
      'Security upgrades for attached garages'
    ]
  },
  {
    slug: 'home-lockout-prevention',
    name: 'Home Lockout Prevention',
    title: 'Mobile Home Lockout Prevention in Kansas City, KS',
    description:
      'Home lockout prevention in Kansas City, KS through rekeying, smart key control, and keyless entry solutions built for daily use.',
    overview:
      'KeyHive helps homeowners reduce repeat lockouts through rekeying, smarter key control, and keyless entry solutions built for everyday use.',
    bullets: [
      'Rekey existing locks after changes',
      'Create reliable spare key plans',
      'Keyless and smart lock options',
      'Guidance on key control habits'
    ],
    process: [
      'Review doors and current access',
      'Identify repeat lockout causes',
      'Recommend rekeying or keyless upgrades',
      'Implement changes and test access'
    ],
    idealFor: [
      'Families with frequent lockouts',
      'New homeowners setting up access',
      'Rental owners reducing lockout calls'
    ]
  },
  {
    slug: 'smart-lock-installation',
    name: 'Smart Lock Installation',
    title: 'Mobile Smart Lock Installation in Kansas City, KS',
    description:
      'Smart lock installation in Kansas City, KS with secure setup, reliable configuration, and easy-to-use keyless access for homes.',
    overview:
      'KeyHive installs and configures smart and keyless locks to ensure they are secure, reliable, and easy to use.',
    bullets: [
      'Install and configure smart locks',
      'Pair devices and set access codes',
      'Verify door alignment and security',
      'Teach operation and backup access'
    ],
    process: [
      'Confirm door type and compatibility',
      'Install and align smart lock hardware',
      'Configure app or keypad settings',
      'Test access and provide guidance'
    ],
    idealFor: [
      'Homeowners upgrading to keyless access',
      'Busy households needing shared codes',
      'Rentals with changing access needs'
    ]
  },
  {
    slug: 'home-security-improvements',
    name: 'Home Security Improvements',
    title: 'Mobile Home Security Improvements in Kansas City, KS',
    description:
      'Home security improvements in Kansas City, KS with upgraded locks and door hardware to strengthen entry points without overcomplication.',
    overview:
      'KeyHive upgrades locks and door hardware to strengthen entry points and improve overall home security.',
    bullets: [
      'Upgrade deadbolts and latch hardware',
      'Improve strike plates and door fit',
      'Add key control or rekey options',
      'Recommendations for vulnerable doors'
    ],
    process: [
      'Assess entry points and hardware',
      'Prioritize improvements by risk',
      'Install upgrades with clean finish',
      'Test doors and review changes'
    ],
    idealFor: [
      'Older homes with worn hardware',
      'New move-ins seeking better security',
      'Families wanting stronger entry points'
    ]
  },
  {
    slug: 'broken-key-removal',
    name: 'Broken Key Removal',
    title: 'Mobile Broken Key Removal in Kansas City, KS',
    description:
      'Broken key removal in Kansas City, KS when keys snap in locks or ignitions, plus replacement assistance when needed.',
    overview:
      'If a key breaks inside a lock or ignition, KeyHive safely removes it and assists with replacement when needed.',
    bullets: [
      'Safe extraction from locks and ignitions',
      'Assess damage to lock or cylinder',
      'Replacement keys when needed',
      'On-site mobile service'
    ],
    process: [
      'Inspect the broken key and lock',
      'Extract pieces with proper tools',
      'Test lock function and alignment',
      'Provide replacement key options'
    ],
    idealFor: [
      'Keys snapped in door locks',
      'Broken keys in car ignitions',
      'Stuck fragments preventing access'
    ]
  },
  {
    slug: 'sliding-door-window-lock-service',
    name: 'Sliding Door and Window Lock Service',
    title: 'Mobile Sliding Door and Window Lock Service in Kansas City, KS',
    description:
      'Sliding door and window lock service in Kansas City, KS to repair or replace hardware and restore smooth, secure operation.',
    overview:
      'KeyHive repairs and replaces sliding door and window locks to restore proper function and security to often-overlooked entry points.',
    bullets: [
      'Repair worn sliding door locks',
      'Replace window latches and hardware',
      'Improve alignment and smooth operation',
      'Security checks for weak points'
    ],
    process: [
      'Inspect doors, tracks, and latches',
      'Recommend repair or replacement',
      'Install or adjust hardware',
      'Test smooth movement and security'
    ],
    idealFor: [
      'Sticking or loose sliding doors',
      'Windows with failing latches',
      'Homes with aging hardware'
    ]
  },
  {
    slug: 'residential-safe-opening',
    name: 'Residential Safe Opening',
    title: 'Mobile Residential Safe Opening in Kansas City, KS',
    description:
      'Residential safe opening in Kansas City, KS with professional access methods that prioritize non-destructive entry whenever possible.',
    overview:
      'Locked out of a home safe? KeyHive provides professional safe access services while prioritizing non-destructive methods whenever possible.',
    bullets: [
      'Non-destructive safe access when possible',
      'Handle keypad or key lock issues',
      'Careful entry to protect contents',
      'Guidance on reset or replacement'
    ],
    process: [
      'Confirm safe type and access issue',
      'Attempt non-destructive entry first',
      'Open safely and verify access',
      'Provide reset or upgrade options'
    ],
    idealFor: [
      'Lost safe keys or codes',
      'Battery or keypad failures',
      'New homeowners with inherited safes'
    ]
  },
  {
    slug: 'master-key-systems',
    name: 'Master Key Systems',
    title: 'Mobile Master Key Systems in Kansas City, KS',
    description:
      'Master key systems in Kansas City, KS for offices and rentals to control access across multiple doors with clear separation.',
    overview:
      'KeyHive designs master key systems for offices, rentals, and multi-door properties while maintaining proper access separation and security control.',
    bullets: [
      'Design master and sub-master levels',
      'Rekey doors into organized system',
      'Maintain access separation by role',
      'Documentation for future changes'
    ],
    process: [
      'Map doors and access needs',
      'Design the key hierarchy',
      'Rekey and label cylinders',
      'Test access and review control plan'
    ],
    idealFor: [
      'Offices with multiple departments',
      'Property managers and landlords',
      'Businesses with controlled access'
    ]
  }
];
