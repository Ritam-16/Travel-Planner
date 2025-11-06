// === POPULAR PACKAGES ===
export const popularPackages = [
  {
    id: 'pkg1',
    title: 'Paris Getaway',
    price: 899,
    items: ['3 Nights at 4-Star Hotel', 'Eiffel Tower Tour', 'Seine River Cruise', 'Breakfast Included']
  },
  {
    id: 'pkg2',
    title: 'Tokyo Adventure',
    price: 1299,
    items: ['4 Nights at Ryokan', 'Mt. Fuji Day Trip', 'Sushi Making Class', 'Airport Transfers']
  },
  {
    id: 'pkg3',
    title: 'Bali Bliss',
    price: 699,
    items: ['5 Nights at Beach Villa', 'Spa Treatment', 'Ubud Monkey Forest', 'Daily Breakfast']
  }
];

// === EXTENDED SITES FOR MOCK DATA ===
export const destinations = [
  {
    id: 'd1',
    name: 'Paris',
    description: 'The City of Light awaits with romance and culture.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
    hotels: [
      {
        id: 'h1',
        name: 'Grand Plaza Hotel',
        price: 189,
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
        images: [
          'https://images.unsplash.com/photo-1566073771259-6a8506099945',
          'https://images.unsplash.com/photo-1611892440504-42a7920534ed',
          'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
          'https://images.unsplash.com/photo-1549638441-b787d2e11f14'
        ],
        location: 'Champs-Élysées, Paris',
        description: 'A 5-star luxury hotel with panoramic city views, rooftop pool, and award-winning restaurant.',
        amenities: [
          'Free WiFi', 'Rooftop Pool', 'Spa & Sauna', 'Gym',
          'Fine Dining', 'Concierge', 'Room Service', 'Valet Parking'
        ],
        rating: 4.9,
        reviews: [
          { name: 'Alex', rating: 5, text: 'Amazing stay! The rooftop pool was incredible.', date: '2025-07-10' },
          { name: 'Sarah', rating: 4, text: 'Great location and friendly staff!', date: '2025-06-22' },
          { name: 'John', rating: 5, text: 'Best hotel in Paris. Will come back!', date: '2025-05-15' }
        ],
        policies: {
          checkIn: '3:00 PM',
          checkOut: '11:00 AM',
          cancellation: 'Free cancellation within 48 hours of booking',
        },
        contact: {
          phone: '+33 1 23 45 67 89',
          email: 'info@grandplazaparis.com'
        },
        coordinates: { lat: 48.8698, lng: 2.3076 },
        nearbyAttractions: ['Arc de Triomphe', 'Louvre Museum', 'Eiffel Tower'],
        roomTypes: [
          { type: 'Deluxe Room', price: 189, beds: '1 Queen Bed', capacity: 2 },
          { type: 'Executive Suite', price: 259, beds: '1 King Bed + Living Area', capacity: 3 },
          { type: 'Penthouse', price: 399, beds: '2 King Beds', capacity: 4 }
        ]
      },
      {
        id: 'h2',
        name: 'Le Petit Château',
        price: 142,
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
        images: [
          'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
          'https://images.unsplash.com/photo-1564501049412-90c2a5d59926',
          'https://images.unsplash.com/photo-1578683015151-7a75b7e9d7b7'
        ],
        location: 'Montmartre, Paris',
        description: 'Charming boutique hotel in the heart of artistic Montmartre. Cozy rooms with vintage decor.',
        amenities: ['Free WiFi', 'Breakfast Included', 'Terrace', 'Library', 'Bicycle Rental'],
        rating: 4.7,
        reviews: [
          { name: 'Emma', rating: 5, text: 'Felt like home! Beautiful decor and cozy atmosphere.', date: '2025-06-11' },
          { name: 'Leo', rating: 4, text: 'Lovely view and close to local cafés.', date: '2025-05-03' }
        ],
        policies: {
          checkIn: '2:00 PM',
          checkOut: '10:00 AM',
          cancellation: 'Full refund before 24 hours of check-in'
        },
        contact: {
          phone: '+33 1 88 77 66 55',
          email: 'contact@lepetitchateau.fr'
        },
        coordinates: { lat: 48.8867, lng: 2.3431 },
        nearbyAttractions: ['Sacré-Cœur Basilica', 'Moulin Rouge'],
        roomTypes: [
          { type: 'Standard Room', price: 142, beds: '1 Double Bed', capacity: 2 },
          { type: 'Balcony Suite', price: 179, beds: '1 King Bed', capacity: 2 }
        ]
      }
    ],
    restaurants: [
      { id: 'r1', name: 'Café de Flore' },
      { id: 'r2', name: 'Le Jules Verne' }
    ],
    sites: [
      { id: 's1', name: 'Eiffel Tower' },
      { id: 's2', name: 'Louvre Museum' }
    ],
    foodPlaces: [
      {
        id: 'bistro1',
        name: 'Le Petit Bistro',
        location: 'Rue de Rivoli, Paris',
        images: ['/images/bistro1.jpg', '/images/bistro1_2.jpg'],
        rating: 4.7,
        description: 'Cozy bistro serving classic French cuisine.',
        specialties: ['Croissants', 'Escargot', 'Duck Confit', 'Crème Brûlée'],
        reviews: [
          { name: 'Alice', rating: 5, text: 'Delicious food and amazing ambiance!' },
          { name: 'Michael', rating: 4, text: 'Great service and tasty meals.' }
        ],
        cleanlinessScore: 9.2,
        averagePrice: 20
      },
      {
        id: 'cafe1',
        name: 'Café de Flore',
        location: 'Saint-Germain-des-Prés, Paris',
        images: ['/images/cafe1.jpg', '/images/cafe1_2.jpg'],
        rating: 4.8,
        description: 'Historic café with a rich cultural vibe.',
        specialties: ['Coffee', 'Pastries', 'Quiche', 'Macarons'],
        cleanlinessScore: 9.5,
        averagePrice: 15
      }
    ],
    sites: [
      {
        id: 's1',
        name: 'Eiffel Tower',
        description: 'An iconic Paris landmark offering breathtaking views of the city. A must-visit for first-time travelers and photography lovers.',
        images: [
          'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
          'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba'
        ],
        rating: 4.9,
        highlights: ['Scenic Views', 'Cultural Landmark', 'Romantic Spot'],
        tips: ['Book tickets online', 'Best time: Sunset', 'Avoid weekends'],
        reviews: [
          { name: 'Liam', rating: 5, text: 'Incredible views at sunset!', date: '2025-06-10' },
          { name: 'Sophia', rating: 4, text: 'Long queues but worth it.', date: '2025-06-18' }
        ],
        coordinates: { lat: 48.8584, lng: 2.2945 },
        wiki: 'https://en.wikipedia.org/wiki/Eiffel_Tower'
      },
      {
        id: 's2',
        name: 'Louvre Museum',
        description: 'Home to thousands of works of art including the Mona Lisa. A paradise for art lovers and historians.',
        images: [
          'https://images.unsplash.com/photo-1534791547705-7f87f0d4a7c6',
          'https://images.unsplash.com/photo-1528892952291-009c663ce843'
        ],
        rating: 4.8,
        highlights: ['Art Masterpieces', 'Historical Architecture', 'Guided Tours Available'],
        tips: ['Arrive early', 'Book tickets online', 'Wear comfortable shoes'],
        reviews: [
          { name: 'Emma', rating: 5, text: 'Amazing collection of art!', date: '2025-07-01' },
          { name: 'Noah', rating: 4, text: 'Huge museum, plan at least 3-4 hours.', date: '2025-06-22' }
        ],
        coordinates: { lat: 48.8606, lng: 2.3376 },
        wiki: 'https://en.wikipedia.org/wiki/Louvre'
      }
    ]
  },
  {
    id: 'd2',
    name: 'Tokyo',
    description: 'Modern meets tradition in the world\'s largest metropolis.',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf',
    hotels: [
      {
        id: 'h3',
        name: 'Imperial Tower Hotel',
        price: 298,
        image: 'https://images.unsplash.com/photo-1610538601799-3b8f35ede5b0',
        images: [
          'https://images.unsplash.com/photo-1610538601799-3b8f35ede5b0',
          'https://images.unsplash.com/photo-1621293904840-8f9b1b3a1e8a',
          'https://images.unsplash.com/photo-1571896349842-33faaad3ad5a'
        ],
        location: 'Shibuya, Tokyo',
        description: 'Ultra-modern skyscraper hotel with panoramic views of Tokyo skyline and Mount Fuji.',
        amenities: ['Free WiFi', 'Sky Lounge', 'Onsen Bath', 'Gym', '24h Room Service', 'Airport Shuttle'],
        rating: 4.8,
        reviews: [
          { name: 'Haruto', rating: 5, text: 'Spectacular view of the city! The onsen was a dream.', date: '2025-07-01' },
          { name: 'Mia', rating: 4, text: 'Very comfortable and clean. Great breakfast options.', date: '2025-06-18' }
        ],
        policies: {
          checkIn: '3:00 PM',
          checkOut: '12:00 PM',
          cancellation: 'Full refund before 48 hours of check-in'
        },
        contact: {
          phone: '+81 3-1234-5678',
          email: 'info@imperialtokyo.jp'
        },
        coordinates: { lat: 35.6586, lng: 139.7013 },
        nearbyAttractions: ['Shibuya Crossing', 'Meiji Shrine'],
        roomTypes: [
          { type: 'Superior Room', price: 298, beds: '1 King Bed', capacity: 2 },
          { type: 'Skyline Suite', price: 389, beds: '1 King Bed + Lounge', capacity: 3 }
        ]
      }
    ],
    restaurants: [
      { id: 'r3', name: 'Sushi Saito' },
      { id: 'r4', name: 'Ramen Street' }
    ],
    sites: [
      { id: 's3', name: 'Tokyo Skytree' },
      { id: 's4', name: 'Senso-ji Temple' }
    ],
    restaurants: [ /* ... */ ],
    sites: [
      {
        id: 's3',
        name: 'Tokyo Skytree',
        description: 'Tallest tower in Japan offering panoramic views of Tokyo. Observation decks provide stunning day and night views.',
        images: [
          'https://images.unsplash.com/photo-1510563803297-98e88a1a2b33',
          'https://images.unsplash.com/photo-1526483360613-75f5c5f7d06f'
        ],
        rating: 4.8,
        highlights: ['Panoramic Views', 'Observation Decks', 'Restaurants & Shops'],
        tips: ['Buy combo tickets', 'Visit at sunset', 'Weekdays are less crowded'],
        reviews: [
          { name: 'Haruto', rating: 5, text: 'Amazing skyline view!', date: '2025-07-01' },
          { name: 'Mia', rating: 4, text: 'Great but very busy on weekends.', date: '2025-06-18' }
        ],
        coordinates: { lat: 35.7100, lng: 139.8107 }
      },
      {
        id: 's4',
        name: 'Senso-ji Temple',
        description: 'Tokyo’s oldest temple and a major cultural landmark. Famous for its giant lantern and traditional shopping street.',
        images: [
          'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d',
          'https://images.unsplash.com/photo-1511451250547-cd771e1a7b6b'
        ],
        rating: 4.7,
        highlights: ['Historic Temple', 'Cultural Experience', 'Shopping Street'],
        tips: ['Visit early morning', 'Respect local customs', 'Try street food nearby'],
        reviews: [
          { name: 'Yuki', rating: 5, text: 'Beautiful traditional temple.', date: '2025-05-20' },
          { name: 'Ken', rating: 4, text: 'Crowded but worth visiting.', date: '2025-05-22' }
        ],
        coordinates: { lat: 35.7148, lng: 139.7967 }
      }
    ]
  },
  {
    id: 'd3',
    name: 'Bali',
    description: 'Tropical paradise with beaches, temples, and rice terraces.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
    hotels: [
      {
        id: 'h4',
        name: 'Oceanfront Villa Resort',
        price: 259,
        image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9',
        images: [
          'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9',
          'https://images.unsplash.com/photo-1520250497591-7f0b7d1c7b7f',
          'https://images.unsplash.com/photo-1570214476894-2d6b2b967d7a'
        ],
        location: 'Seminyak Beach, Bali',
        description: 'Private villas with infinity pools overlooking the Indian Ocean. Perfect for romance and relaxation.',
        amenities: ['Private Pool', 'Beach Access', 'Spa', 'Yoga Classes', 'Daily Breakfast', 'Airport Transfer'],
        rating: 4.9,
        reviews: [
          { name: 'Liam', rating: 5, text: 'Absolutely paradise! The private pool villa was stunning.', date: '2025-06-10' },
          { name: 'Sophia', rating: 4, text: 'Peaceful retreat. Loved the ocean view.', date: '2025-05-20' }
        ],
        policies: {
          checkIn: '2:00 PM',
          checkOut: '11:00 AM',
          cancellation: 'Free cancellation before 72 hours of check-in'
        },
        contact: {
          phone: '+62 361-555-789',
          email: 'stay@oceanfrontbali.com'
        },
        coordinates: { lat: -8.6781, lng: 115.1628 },
        nearbyAttractions: ['Seminyak Beach', 'Tanah Lot Temple', 'Ubud Rice Terraces'],
        roomTypes: [
          { type: 'Garden Villa', price: 259, beds: '1 King Bed', capacity: 2 },
          { type: 'Ocean Villa', price: 329, beds: '1 King Bed + Private Pool', capacity: 3 }
        ]
      }
    ],
    restaurants: [
      { id: 'r5', name: 'Locavore' },
      { id: 'r6', name: 'Warung Makan' }
    ],
    sites: [
      { id: 's5', name: 'Tanah Lot Temple' },
      { id: 's6', name: 'Ubud Rice Terraces' }
    ],
    restaurants: [ /* ... */ ],
    sites: [
      {
        id: 's5',
        name: 'Tanah Lot Temple',
        description: 'A picturesque sea temple perched on a rock. Famous for stunning sunsets and cultural significance.',
        images: [
          'https://images.unsplash.com/photo-1560343090-f0409e92791a',
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
        ],
        rating: 4.9,
        highlights: ['Sunset Views', 'Sea Temple', 'Cultural Experience'],
        tips: ['Visit at sunset', 'Wear comfortable shoes', 'Stay on marked paths'],
        reviews: [
          { name: 'Liam', rating: 5, text: 'Magical sunset spot!', date: '2025-06-10' },
          { name: 'Sophia', rating: 4, text: 'Crowded but beautiful.', date: '2025-05-20' }
        ],
        coordinates: { lat: -8.6219, lng: 115.0865 }
      },
      {
        id: 's6',
        name: 'Ubud Rice Terraces',
        description: 'Lush green rice terraces in Ubud offering peaceful walks and amazing photos. Perfect for nature lovers.',
        images: [
          'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
        ],
        rating: 4.8,
        highlights: ['Scenic Nature', 'Peaceful Walks', 'Photography Spot'],
        tips: ['Early morning visit', 'Respect farmers’ land', 'Bring water and sun protection'],
        reviews: [
          { name: 'Aiden', rating: 5, text: 'Absolutely serene and beautiful.', date: '2025-06-15' },
          { name: 'Olivia', rating: 4, text: 'Amazing scenery, very relaxing.', date: '2025-05-25' }
        ],
        coordinates: { lat: -8.427, lng: 115.262 }
      }
    ]
  }
];
