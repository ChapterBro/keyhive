export type ServiceArea = {
  slug: string;
  name: string;
  type: 'city' | 'county';
  blurb?: string;
  landmarks?: string[];
  nearby: string[];
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'kansas-city-ks',
    name: 'Kansas City, KS',
    type: 'city',
    blurb:
      'From Village West to established neighborhoods along State Avenue, KeyHive delivers mobile locksmith support built for Kansas City, KS. We keep your access secure with fast response and careful work.',
    landmarks: ['The Legends / Village West', "Children's Mercy Park"],
    nearby: ['bonner-springs', 'shawnee', 'mission', 'merriam', 'overland-park', 'wyandotte-county']
  },
  {
    slug: 'bonner-springs',
    name: 'Bonner Springs',
    type: 'city',
    blurb:
      'KeyHive serves Bonner Springs with mobile locksmith help for homes, businesses, and vehicles. We stay ready for quick responses near the Kansas City Renaissance Festival grounds and beyond.',
    landmarks: ['Kansas City Renaissance Festival (seasonal)', 'National Agricultural Center & Hall of Fame'],
    nearby: ['kansas-city-ks', 'basehor', 'tonganoxie', 'shawnee', 'wyandotte-county']
  },
  {
    slug: 'basehor',
    name: 'Basehor',
    type: 'city',
    nearby: ['bonner-springs', 'tonganoxie', 'lansing', 'leavenworth', 'leavenworth-county']
  },
  {
    slug: 'lansing',
    name: 'Lansing',
    type: 'city',
    nearby: ['leavenworth', 'basehor', 'tonganoxie', 'leavenworth-county', 'kansas-city-ks']
  },
  {
    slug: 'leavenworth',
    name: 'Leavenworth',
    type: 'city',
    blurb:
      'KeyHive supports Leavenworth with dependable locksmith service for residents, businesses, and military families. We understand the pace of life near Fort Leavenworth and prioritize quick access solutions.',
    landmarks: ['Fort Leavenworth'],
    nearby: ['lansing', 'basehor', 'tonganoxie', 'leavenworth-county', 'kansas-city-ks']
  },
  {
    slug: 'tonganoxie',
    name: 'Tonganoxie',
    type: 'city',
    nearby: ['basehor', 'leavenworth', 'lansing', 'bonner-springs', 'leavenworth-county']
  },
  {
    slug: 'overland-park',
    name: 'Overland Park',
    type: 'city',
    blurb:
      'In Overland Park, KeyHive handles lockouts, rekeys, and upgrades for busy homes and workplaces. We keep response times tight near Oak Park Mall and the Overland Park Convention Center.',
    landmarks: ['Oak Park Mall', 'Overland Park Convention Center'],
    nearby: ['leawood', 'lenexa', 'olathe', 'shawnee', 'mission', 'johnson-county']
  },
  {
    slug: 'olathe',
    name: 'Olathe',
    type: 'city',
    blurb:
      'KeyHive brings mobile locksmith care to Olathe with a focus on secure, clean installations and prompt lockout help. We serve neighborhoods and commercial corridors with a 24/7 response mindset.',
    nearby: ['lenexa', 'overland-park', 'shawnee', 'johnson-county', 'leawood']
  },
  {
    slug: 'lenexa',
    name: 'Lenexa',
    type: 'city',
    blurb:
      'KeyHive supports Lenexa residents and businesses with on-site locksmith service, from rekeying to smart lock installs. We are familiar with service calls near Lenexa City Center and Sar-Ko-Par Trails Park.',
    landmarks: ['Lenexa City Center', 'Sar-Ko-Par Trails Park'],
    nearby: ['overland-park', 'shawnee', 'olathe', 'mission', 'johnson-county']
  },
  {
    slug: 'shawnee',
    name: 'Shawnee',
    type: 'city',
    nearby: ['lenexa', 'overland-park', 'kansas-city-ks', 'mission', 'johnson-county']
  },
  {
    slug: 'mission',
    name: 'Mission',
    type: 'city',
    nearby: ['merriam', 'leawood', 'prairie-village', 'kansas-city-ks', 'johnson-county']
  },
  {
    slug: 'merriam',
    name: 'Merriam',
    type: 'city',
    blurb:
      'KeyHive provides fast locksmith service throughout Merriam, with mobile technicians ready for lockouts, repairs, and rekeying. We work close to IKEA Kansas City and surrounding neighborhoods.',
    landmarks: ['IKEA Kansas City'],
    nearby: ['mission', 'shawnee', 'kansas-city-ks', 'lenexa', 'johnson-county']
  },
  {
    slug: 'leawood',
    name: 'Leawood',
    type: 'city',
    nearby: ['overland-park', 'prairie-village', 'mission', 'johnson-county', 'lenexa']
  },
  {
    slug: 'prairie-village',
    name: 'Prairie Village',
    type: 'city',
    nearby: ['leawood', 'mission', 'merriam', 'johnson-county', 'overland-park']
  },
  {
    slug: 'wyandotte-county',
    name: 'Wyandotte County',
    type: 'county',
    nearby: ['kansas-city-ks', 'bonner-springs', 'shawnee', 'mission', 'johnson-county']
  },
  {
    slug: 'johnson-county',
    name: 'Johnson County',
    type: 'county',
    nearby: ['overland-park', 'olathe', 'lenexa', 'shawnee', 'mission', 'leawood']
  },
  {
    slug: 'leavenworth-county',
    name: 'Leavenworth County',
    type: 'county',
    nearby: ['leavenworth', 'lansing', 'basehor', 'tonganoxie', 'bonner-springs']
  }
];

export const cityAreas = serviceAreas.filter((area) => area.type === 'city');
export const countyAreas = serviceAreas.filter((area) => area.type === 'county');
