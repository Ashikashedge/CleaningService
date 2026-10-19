const photo = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=85`;

export const services = [
  { id: 'home-cleaning', title: 'Home Cleaning', description: 'A regular reset for the rooms your household uses every day.', image: photo('photo-1600607687939-ce8a6c25118c'), imageAlt: 'Bright contemporary home interior with an open living and dining area' },
  { id: 'office-cleaning', title: 'Office Cleaning', description: 'Care for desks, meeting rooms and shared workspaces.', image: photo('photo-1497366754035-f200968a6e72'), imageAlt: 'Daylit office with glass meeting rooms and a long corridor' },
  { id: 'deep-cleaning', title: 'Deep Cleaning', description: 'A closer clean for surfaces and corners that need extra attention.', image: photo('photo-1620626011761-996317b8d101'), imageAlt: 'Bright, minimal bathroom with a clean tiled interior' },
  { id: 'move-cleaning', title: 'Move-In / Move-Out Cleaning', description: 'A clean slate before moving in or after moving out.', image: photo('photo-1600607687920-4e2a09cf159d'), imageAlt: 'Airy lounge with a neutral palette and open layout' },
];
