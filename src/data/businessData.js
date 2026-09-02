export const businessInfo = {
  name: "Levernasia",
  tagline: "Lounge & Bar • High-Energy Nightlife & Global Gastronomy",
  shortDescription: "Experience the vibrant pulse of nightlife at Gardens Galleria Mall, Noida. Featuring artisanal mixology, Pan-Asian & Royal North Indian cuisines, and electrifying live VDJ sets in an LA-inspired luxury lounge.",
  address: "Unit No. 205-206C, 1st Floor, Gardens Galleria Mall, Sector 38A, Noida, Uttar Pradesh 201303, India",
  shortAddress: "1st Floor, Gardens Galleria Mall, Sector 38A, Noida",
  coordinates: {
    lat: 28.56478,
    lng: 77.32179
  },
  phone: "+91 74289 64646",
  phoneDisplay: "+91 74289 64646",
  email: "reservations@levernasia.com",
  mapsUrl: "https://maps.app.goo.gl/wX54nGvyj6dGH1bL8",
  googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=28.56478,77.32179&destination_place_id=Gardens+Galleria+Mall+Noida",
  whatsAppUrl: "https://wa.me/917428964646?text=Hi%20Levernasia%20Team%2C%20I%20would%20like%20to%20reserve%20a%20table.",
  averageCostForTwo: "₹1,800 - ₹2,400 (with alcohol)",
  rating: 4.3,
  reviewCount: 1540,
  operatingHours: {
    monday: "12:00 PM – 02:00 AM",
    tuesday: "12:00 PM – 02:00 AM",
    wednesday: "12:00 PM – 02:00 AM",
    thursday: "12:00 PM – 02:00 AM",
    friday: "12:00 PM – 02:00 AM",
    saturday: "12:00 PM – 02:00 AM",
    sunday: "12:00 PM – 02:00 AM",
    kitchenCloses: "01:30 AM",
    happyHours: "12:00 PM – 07:00 PM (Mon-Thu)"
  },
  amenities: [
    "High-Energy VDJ & DJ Console",
    "VIP Private Cabana Seating",
    "Full Bar & Molecular Mixology",
    "Outdoor Terrace & Indoor Lounge",
    "Live Sports Screening",
    "Valet Parking at Mall",
    "Smoking Zone",
    "Shisha & Hookah Lounge"
  ]
};

export const businessHighlights = [
  {
    id: 1,
    title: "Artisanal Molecular Mixology",
    description: "Curated by master bartenders with smoked infusions, edible gold dust, and rare botanicals.",
    icon: "GlassWater",
    tag: "Signature Bar"
  },
  {
    id: 2,
    title: "Global Culinary Symphony",
    description: "From Japanese Truffle Sushi & Mezze Platters to royal Old Delhi Dum Biryani & Dumpling baskets.",
    icon: "UtensilsCrossed",
    tag: "Chef's Specials"
  },
  {
    id: 3,
    title: "Electrifying LA Nightlife",
    description: "State-of-the-art Martin audio sound system, 3D laser visual projection, and celebrity VDJ sessions.",
    icon: "Music",
    tag: "Live Experience"
  },
  {
    id: 4,
    title: "VIP Cabanas & Private Lounges",
    description: "Ultra-exclusive private booths with dedicated bottle service, personal mixologist, and custom lighting.",
    icon: "Crown",
    tag: "Exclusive"
  }
];

export const reviewsData = [
  {
    id: 1,
    author: "Rohan Malhotra",
    rating: 5,
    date: "1 week ago",
    badge: "Local Guide • 48 reviews",
    text: "Hands down the most energetic party spot in Gardens Galleria! The cocktails are on another level — try the Smoked Bourbon Passion. The Duo of Chaap and Sushi were extraordinary.",
    source: "Google Reviews"
  },
  {
    id: 2,
    author: "Ananya Sharma",
    rating: 5,
    date: "2 weeks ago",
    badge: "Verified Diner",
    text: "Celebrated my birthday in the VIP cabana at Levernasia. The staff went above and beyond, the DJ played absolute bangers, and the lighting gave us the best photos. 10/10 recommend!",
    source: "Google Reviews"
  },
  {
    id: 3,
    author: "Dr. Vikram Sethi",
    rating: 5,
    date: "3 weeks ago",
    badge: "Local Guide • 112 reviews",
    text: "Stunning interiors and luxurious vibes. We visited for late night dinner after 11 PM and the food was fresh, piping hot, and beautifully plated. The Galouti Kebabs melt in your mouth.",
    source: "Google Reviews"
  },
  {
    id: 4,
    author: "Priya Sengupta",
    rating: 5,
    date: "a month ago",
    badge: "Google Verified Reviewer",
    text: "Gardens Galleria has lots of lounges, but Levernasia stands out for premium hospitality and crowd quality. Great cocktail deals and phenomenal Lebanese platters.",
    source: "Google Reviews"
  },
  {
    id: 5,
    author: "Karan Joharvi",
    rating: 4.5,
    date: "a month ago",
    badge: "Food Critic",
    text: "Superb aesthetic with gold accents and neon velvet. The mixology bar is genuine artistry. Make sure to book ahead on Friday and Saturday nights as it gets packed!",
    source: "Google Reviews"
  }
];

export const menuCategories = [
  { id: "cocktails", label: "Artisanal Cocktails" },
  { id: "pan-asian", label: "Pan-Asian & Sushi" },
  { id: "north-indian", label: "Royal North Indian" },
  { id: "continental", label: "Continental & Lebanese" },
  { id: "platters", label: "Sharing Platters & Tandoor" },
  { id: "desserts", label: "Decadent Desserts" }
];

export const menuItems = [
  // Artisanal Cocktails
  {
    id: "c1",
    category: "cocktails",
    name: "Smoked Beverly Hills Sunset",
    price: 695,
    diet: "cocktail",
    isSignature: true,
    isPopular: true,
    description: "Bourbon whisky infused with charred blood orange, Madagascar vanilla bitters, and applewood smoke.",
    ingredients: "Bourbon, Blood Orange Cordial, Vanilla Bitters, Applewood Smoke, 24K Gold Leaf",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "c2",
    category: "cocktails",
    name: "Tokyo Neon Yuzu Highball",
    price: 645,
    diet: "cocktail",
    isSignature: true,
    isPopular: false,
    description: "Japanese Gin, freshly squeezed Yuzu citrus, sparkling elderflower tonic, and edible orchid blossom.",
    ingredients: "Roku Gin, Yuzu Extract, Elderflower Liqueur, Fever-Tree Tonic, Butterfly Pea Essence",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "c3",
    category: "cocktails",
    name: "Levernasia Velvet Passion",
    price: 625,
    diet: "cocktail",
    isSignature: true,
    isPopular: true,
    description: "Ketel One vodka shaken with fresh passion fruit puree, kaffir lime, and prosecco foam float.",
    ingredients: "Ketel One Vodka, Fresh Passionfruit, Kaffir Lime, Prosecco, Hibiscus Dust",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "c4",
    category: "cocktails",
    name: "Oaxaca Chipotle Mezcalita",
    price: 745,
    diet: "cocktail",
    isSignature: false,
    isPopular: false,
    description: "Artisanal Mezcal, agave nectar, roasted jalapeno syrup, and pink Himalayan smoked salt rim.",
    ingredients: "Mezcal Joven, Agave, Chipotle-Infused Lime, Black Salt Rim",
    image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&w=800&q=80"
  },

  // Pan-Asian & Sushi
  {
    id: "pa1",
    category: "pan-asian",
    name: "Truffle Cream Cheese & Avocado Roll",
    price: 595,
    diet: "veg",
    isSignature: true,
    isPopular: true,
    description: "Hand-rolled sushi with hass avocado, Philadelphia cream cheese, black summer truffle oil, and tempura crisps.",
    ingredients: "Sushi Rice, Avocado, Cream Cheese, Truffle Glaze, Tanuki Crisps",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pa2",
    category: "pan-asian",
    name: "Flamed Salmon Aburi Nigiri",
    price: 745,
    diet: "non-veg",
    isSignature: true,
    isPopular: true,
    description: "Norwegian salmon lightly torched with spicy Japanese Kewpie mayo and tobiko caviar pearls.",
    ingredients: "Fresh Norwegian Salmon, Sushi Rice, Kewpie Mayo, Flying Fish Roe, Sweet Teriyaki",
    image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pa3",
    category: "pan-asian",
    name: "Edamame & Water Chestnut Dim Sum",
    price: 525,
    diet: "veg",
    isSignature: false,
    isPopular: false,
    description: "Translucent crystal dumplings stuffed with crushed young edamame, water chestnut, and chili dip.",
    ingredients: "Young Edamame, Water Chestnut, Sesame Oil, Crispy Garlic, Scallion Oil",
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pa4",
    category: "pan-asian",
    name: "Spicy Schezwan Prawn Dumplings",
    price: 645,
    diet: "non-veg",
    isSignature: false,
    isPopular: true,
    description: "Succulent sea prawns wrapped in fine pastry, drizzled with house-made Chengdu burnt chili oil.",
    ingredients: "Tiger Prawns, Scallions, Ginger, Chengdu Chili Oil, Toasted Sesame",
    image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80"
  },

  // Royal North Indian
  {
    id: "ni1",
    category: "north-indian",
    name: "Levernasia Signature Duo of Chaap",
    price: 495,
    diet: "veg",
    isSignature: true,
    isPopular: true,
    description: "Famous tandoori soya chaap served in two distinct marinades: Malai Cashew Velvet and Angara Smoked Tikka.",
    ingredients: "Soya Chaap, Cashew Paste, Royal Saffron, Smoked Mustard Oil, Mint Chutney",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ni2",
    category: "north-indian",
    name: "Melt-in-Mouth Awadhi Galouti Kebab",
    price: 695,
    diet: "non-veg",
    isSignature: true,
    isPopular: true,
    description: "Fine minced tender lamb infused with 32 secret Lucknowi spices, served on mini saffron sheermal flatbreads.",
    ingredients: "Tender Lamb, Potli Masala, Rose Petals, Saffron Sheermal, Clarified Butter",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ni3",
    category: "north-indian",
    name: "Grand Old Delhi Butter Chicken",
    price: 645,
    diet: "non-veg",
    isSignature: false,
    isPopular: true,
    description: "Char-grilled clay oven chicken simmered in rich velvety tomato, cashew and butter gravy with kasuri methi.",
    ingredients: "Tandoori Chicken, San Marzano Tomatoes, Amul Butter, Dairy Cream, Dried Fenugreek",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ni4",
    category: "north-indian",
    name: "Dal Makhani 24-Hour Slow Simmered",
    price: 475,
    diet: "veg",
    isSignature: false,
    isPopular: true,
    description: "Black lentils slow-cooked overnight on charcoal with churned white butter and aromatic spices.",
    ingredients: "Urad Dal, Churned White Butter, Kashmiri Chili, Fresh Tomato Puree",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
  },

  // Continental & Lebanese
  {
    id: "cl1",
    category: "continental",
    name: "Grand Lebanese Mezze Platter",
    price: 745,
    diet: "veg",
    isSignature: true,
    isPopular: true,
    description: "Silky roasted garlic hummus, babaganoush, tzatziki, crispy herb falafel, pickled vegetables, and warm za'atar pita.",
    ingredients: "Chickpeas, Tahini, Charred Eggplant, Greek Yogurt, Falafel, Za'atar Pita",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cl2",
    category: "continental",
    name: "Wild Forest Mushroom & Truffle Pizza",
    price: 695,
    diet: "veg",
    isSignature: true,
    isPopular: false,
    description: "Hand-stretched sourdough crust, porcini cream base, fior di latte mozzarella, assorted mushrooms, and white truffle oil.",
    ingredients: "Sourdough, Porcini, Button Mushroom, Mozzarella, Truffle Oil, Fresh Thyme",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cl3",
    category: "continental",
    name: "Peri Peri Grilled Chicken Skewers",
    price: 625,
    diet: "non-veg",
    isSignature: false,
    isPopular: true,
    description: "Tender chicken fillets marinated in African bird's eye chili, served with garlic herb aioli and fries.",
    ingredients: "Chicken Breast, African Bird's Eye Chili, Bell Peppers, Garlic Aioli",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80"
  },

  // Desserts
  {
    id: "d1",
    category: "desserts",
    name: "Flaming Belgian Dark Chocolate Sphere",
    price: 495,
    diet: "veg",
    isSignature: true,
    isPopular: true,
    description: "70% Callebaut chocolate dome flambéed tableside with spiced Grand Marnier, revealing vanilla bean gelato.",
    ingredients: "Callebaut Dark Chocolate, Madagascar Vanilla Gelato, Grand Marnier, Hazelnut Praline",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "d2",
    category: "desserts",
    name: "Levernasia Saffron Milk Cake Tres Leches",
    price: 425,
    diet: "veg",
    isSignature: false,
    isPopular: false,
    description: "Sponge cake soaked in three rich milks infused with Kashmiri saffron, topped with edible gold leaf and pistachio.",
    ingredients: "Saffron Sponge, Condensed Milk, Evaporated Milk, Heavy Cream, Silver Vark",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80"
  }
];

export const galleryItems = [
  {
    id: 1,
    title: "The Main Lounge & DJ Arena",
    category: "ambiance",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80",
    description: "Immersive neon acoustics and plush seating at Gardens Galleria Mall."
  },
  {
    id: 2,
    title: "Master Bartender Smoked Mixology",
    category: "cocktails",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1000&q=80",
    description: "Table-side infusions crafted by our resident flair mixologists."
  },
  {
    id: 3,
    title: "Gourmet Pan-Asian Creations",
    category: "gastronomy",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1000&q=80",
    description: "Artfully plated truffle rolls and fresh sashimi."
  },
  {
    id: 4,
    title: "VIP Gold Cabana Section",
    category: "ambiance",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
    description: "Intimate private booths for birthdays, celebrations, and corporate gatherings."
  },
  {
    id: 5,
    title: "Weekend High-Energy VDJ Nights",
    category: "events",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80",
    description: "Live sets, visual mappings, and Noida's premier party crowd."
  },
  {
    id: 6,
    title: "Outdoor Terrace & Starlit Nights",
    category: "ambiance",
    image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1000&q=80",
    description: "Breezy terrace seating with panoramic Gardens Galleria views."
  }
];

export const teamMembers = [
  {
    name: "Chef Harish Rawat",
    role: "Executive Head Chef",
    bio: "Over 16 years perfecting Indian royal feasts and global fusion across luxury 5-star properties.",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80",
    specialty: "Awadhi Kebabs & Progressive Fusion"
  },
  {
    name: "Julian Sterling",
    role: "Beverage Director & Chief Mixologist",
    bio: "World-class bar artist known for molecular infusions, smoked botanicals, and bespoke cocktails.",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&q=80",
    specialty: "Smoked Bourbon & Yuzu Elixirs"
  },
  {
    name: "DJ Rohit (VDJ Rave)",
    role: "Resident Music Director",
    bio: "Setting the sonic tone with deep house, commercial club bangers, and visual sync performances.",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    specialty: "High-Energy Live VDJ Sets"
  }
];

export const vipPackages = [
  {
    id: "silver",
    name: "Sunset Social",
    price: "₹3,999",
    target: "Couples & Small Groups (2-4 Pax)",
    features: [
      "Reserved Premium Lounge Table",
      "2 Signature Cocktails / Premium Drinks per person",
      "Choice of 2 Chef's Gourmet Appetizers",
      "1 Artisanal Mezze or Sushi Platter",
      "Priority Table Service"
    ],
    popular: false
  },
  {
    id: "gold",
    name: "VIP Nightlife Cabana",
    price: "₹11,999",
    target: "Party Groups (6-8 Pax)",
    features: [
      "Exclusive Elevated VIP Cabana Seating",
      "1 Premium Bottle of Choice (Imported Spirits)",
      "Unlimited Mixers & Bar Snacks",
      "Choice of 4 Chef's Special Starters (Veg / Non-Veg)",
      "Dedicated Private Mixologist & Steward",
      "Complimentary Celebration Cake & Sparkler"
    ],
    popular: true
  },
  {
    id: "platinum",
    name: "Grand Levernasia Corporate / Gala",
    price: "Custom",
    target: "Corporate, Birthdays & Large Events (15+ Pax)",
    features: [
      "Full Section / Terrace Buyout Options",
      "Bespoke Multi-Course Buffet or Pass-Around Gourmet Menu",
      "Unlimited Top-Shelf Premium Bar Package",
      "Custom DJ Playlist & Personalized LED Screen Branding",
      "Valet Parking Passes for All Guests",
      "Dedicated Event Coordinator"
    ],
    popular: false
  }
];

export const faqsData = [
  {
    question: "Where exactly is Levernasia located inside Gardens Galleria Mall?",
    answer: "Levernasia is located on the 1st Floor, Unit No. 205-206C, Gardens Galleria Mall, Sector 38A, Noida (right next to Great India Place and Worlds of Wonder). You can take the main mall elevators or central escalators to the 1st floor."
  },
  {
    question: "Do I need prior reservations, especially on weekends?",
    answer: "Table reservations are highly recommended, especially on Friday, Saturday, and Sunday nights or for groups of 4+. You can book directly through our online reservation form or call us at +91 74289 64646."
  },
  {
    question: "Is valet parking available at Gardens Galleria?",
    answer: "Yes, Gardens Galleria Mall provides multi-level secured parking with dedicated valet service right at the main mall entrance."
  },
  {
    question: "What is the dress code and age policy at Levernasia?",
    answer: "We follow a Smart Casual / Glamour dress code in the evening. Guests under 21 must be accompanied by adults, and alcohol service is strictly reserved for guests meeting the legal drinking age (21+ in UP/NCR) with valid government ID."
  },
  {
    question: "Can I host private birthday parties or corporate mixers?",
    answer: "Absolutely! We offer dedicated VIP Cabana packages and semi-private lounge zones with custom food & beverage packages, decor, and audio-visual setups. Please submit an inquiry via our contact form or contact our events team."
  }
];
