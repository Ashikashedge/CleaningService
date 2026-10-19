const image = (id, width = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export const siteConfig = {
  companyName: 'SparkClean',
  tagline: 'Cleaning support for the spaces you use.',
  logo: { src: '', monogram: '', icon: 'sparkle', showWordmark: true },
  brand: { primary: '#153B50', accent: '#0D9488', accentDark: '#08786F', background: '#FFFFFF', soft: '#F3F7F7', muted: '#64748B' },
  contact: {
    phoneDisplay: '+971 50 000 0000',
    phoneLink: '+971500000000',
    whatsappNumber: '971500000000',
    email: 'hello@sparkclean.example',
    address: 'Example service locations across the UAE',
    demoNotice: 'Sample contact details — replace before launch.',
  },
  socialLinks: [],
  privacyPolicyUrl: '',
  serviceAreas: ['Dubai', 'Abu Dhabi', 'Sharjah'],
  hero: {
    eyebrow: 'Cleaning for homes and workplaces',
    title: 'A Cleaner Space. A Better Day.',
    description: 'From the weekly reset to a full refresh, tell us what needs attention at home or at work.',
    image: image('photo-1600210492486-724fe5c67fb0', 1500),
    imageAlt: 'Sunlit modern living room with a calm, uncluttered interior',
  },
  about: {
    intro: 'Some weeks call for a quick reset; others need a closer clean. SparkClean keeps the choices clear, so you can describe your space and decide what suits it.',
    image: image('photo-1581578949510-fa7315c4c350', 1200),
    imageAlt: 'Cleaner mopping the floor of a home entryway',
  },
  gallery: [
    { title: 'A calm living room', category: 'Living spaces', src: image('photo-1600210492486-724fe5c67fb0', 1200), alt: 'Warm, bright living room with natural light and clear surfaces' },
    { title: 'The heart of the home', category: 'Kitchens', src: image('photo-1556911220-e15b29be8c8f', 1000), alt: 'Daylit kitchen with a clear countertop and someone preparing a meal' },
    { title: 'A considered workspace', category: 'Workspaces', src: image('photo-1497366754035-f200968a6e72', 1000), alt: 'Organized contemporary office with desks and abundant daylight' },
    { title: 'A restful retreat', category: 'Bedrooms', src: image('photo-1616486338812-3dadae4b4ace', 1000), alt: 'Neutral bedroom arranged with crisp linens and soft textures' },
    { title: 'Clean, simple lines', category: 'Bathrooms', src: image('photo-1620626011761-996317b8d101', 1000), alt: 'Minimal bathroom with a bright, polished interior' },
  ],
  testimonials: [
    { quote: 'I asked for extra attention in the kitchen and bathroom. It felt good to come home to a proper reset.', name: 'Sample customer', detail: 'Home cleaning · Demo testimonial' },
    { quote: 'We wanted the shared areas ready before Monday. Sorting out the details in one enquiry was simple.', name: 'Sample customer', detail: 'Office cleaning · Demo testimonial' },
    { quote: 'With most of the apartment empty, I could finally see what still needed doing. A thorough clean helped me hand it over.', name: 'Sample customer', detail: 'Move-in cleaning · Demo testimonial' },
  ],
  faqs: [
    { question: 'What cleaning services do you offer?', answer: 'This demo lists home, office, deep and move-in / move-out cleaning. Ask SparkClean which services are currently available.' },
    { question: 'How can I request a quotation?', answer: 'Use the form below and include the service, property type and anything else the team should know. They can confirm the details in a reply.' },
    { question: 'Do I need to provide cleaning supplies?', answer: 'Please check with the team when discussing your quote. Supply arrangements can vary by service and booking.' },
    { question: 'Can I book a one-time deep cleaning?', answer: 'Deep cleaning is listed as an option here. Ask the team about availability and what the visit would include.' },
    { question: 'Which areas do you serve?', answer: 'The locations shown on this demo are examples. Contact SparkClean to check whether your address is within its service area.' },
    { question: 'How can I reschedule a booking?', answer: 'Contact the team as soon as your plans change. They can explain the options under the business’s current booking policy.' },
  ],
};
