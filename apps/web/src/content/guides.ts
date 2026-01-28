export type GuideSection = {
  heading: string;
  paragraphs: string[];
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  sections: GuideSection[];
};

export const guides: Guide[] = [
  {
    slug: 'home-lockout-steps',
    title: 'What to Do During a Home Lockout',
    description:
      'Stay calm and get back inside safely with these steps for a home lockout in Kansas City, KS.',
    intro:
      'Home lockouts happen to everyone. The key is staying calm and protecting your door and hardware while you get help.',
    sections: [
      {
        heading: 'Check safe entry options first',
        paragraphs: [
          'Look for a spare key with a trusted neighbor or family member if you have one set up.',
          'Avoid forcing windows or doors. It can lead to expensive repairs and safety risks.'
        ]
      },
      {
        heading: 'Gather key details before calling',
        paragraphs: [
          'Share your location, door type, and any lock brand details when possible.',
          'If you rent, confirm you have access authority to the property.'
        ]
      },
      {
        heading: 'Consider rekeying after entry',
        paragraphs: [
          'If a key is lost or stolen, rekeying is often the fastest way to restore security.',
          'Ask about matching multiple doors to a single key for convenience.'
        ]
      }
    ]
  },
  {
    slug: 'rekey-vs-replace',
    title: 'Rekey vs. Replace: Which Is Right for You?',
    description:
      'Understand the difference between rekeying and replacing locks so you can pick the right security option.',
    intro:
      'Both rekeying and replacement improve security, but the best choice depends on hardware condition and your goals.',
    sections: [
      {
        heading: 'Rekeying keeps existing hardware',
        paragraphs: [
          'Rekeying changes the internal pins so old keys stop working.',
          'It is typically faster and more cost-effective when hardware is in good shape.'
        ]
      },
      {
        heading: 'Replacement upgrades security',
        paragraphs: [
          'Replacing the lock is ideal when hardware is worn, outdated, or damaged.',
          'You can upgrade to higher-grade deadbolts or smart locks for added features.'
        ]
      },
      {
        heading: 'A quick assessment helps',
        paragraphs: [
          'A locksmith can inspect your doors and recommend the best option for your budget.',
          'Many homes combine rekeying with selective upgrades on high-traffic doors.'
        ]
      }
    ]
  },
  {
    slug: 'car-key-programming-basics',
    title: 'Car Key Programming Basics',
    description:
      'Learn how modern car keys work and what you need before scheduling a key programming service.',
    intro:
      'Most modern vehicles use transponder chips or smart fobs that require programming. Knowing what you need helps the process go quickly.',
    sections: [
      {
        heading: 'Have your vehicle info ready',
        paragraphs: [
          'Provide the year, make, model, and current key status when you call.',
          'Some vehicles require proof of ownership for new key programming.'
        ]
      },
      {
        heading: 'Programming is not one-size-fits-all',
        paragraphs: [
          'Each manufacturer uses different key systems and protocols.',
          'A locksmith will confirm compatibility before arriving on-site.'
        ]
      },
      {
        heading: 'Test before leaving',
        paragraphs: [
          'Always test door locks, ignition start, and remote functions.',
          'Ask about getting a spare to avoid future lockouts.'
        ]
      }
    ]
  }
];
