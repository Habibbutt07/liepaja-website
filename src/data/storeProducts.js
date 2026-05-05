// Demo products for Liepāja Store
export const categories = [
  { id: 1, name: 'Souvenirs', slug: 'souvenirs' },
  { id: 2, name: 'Clothing', slug: 'clothing' },
  { id: 3, name: 'Handmade', slug: 'handmade' },
  { id: 4, name: 'Beach Items', slug: 'beach-items' },
  { id: 5, name: 'Food', slug: 'food' },
  { id: 6, name: 'Books', slug: 'books' }
];

export const products = [
  {
    id: 1,
    name: 'Liepāja T-shirt',
    category_id: 2,
    description: 'Comfortable cotton t-shirt featuring the Liepāja city logo. Available in multiple sizes. Made from 100% organic cotton.',
    price: 24.99,
    old_price: 29.99,
    stock: 45,
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    is_featured: true,
    created_at: '2024-01-15',
    updated_at: '2024-12-10'
  },
  {
    id: 2,
    name: 'Liepāja Skyline Poster',
    category_id: 1,
    description: 'Beautiful high-quality poster featuring the iconic Liepāja skyline. Perfect for decorating your home or office. Printed on premium paper.',
    price: 12.99,
    old_price: null,
    stock: 30,
    images: [
      'https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    is_featured: true,
    created_at: '2024-02-01',
    updated_at: '2024-12-10'
  },
  {
    id: 3,
    name: 'Amber Jewelry Set',
    category_id: 3,
    description: 'Handcrafted amber jewelry set including necklace and earrings. Made from authentic Baltic amber found on Liepāja beaches.',
    price: 89.99,
    old_price: 119.99,
    stock: 15,
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    is_featured: true,
    created_at: '2024-03-10',
    updated_at: '2024-12-10'
  },
  {
    id: 4,
    name: 'Liepāja Beach Towel',
    category_id: 4,
    description: 'Large, soft beach towel with Liepāja city design. Quick-drying and sand-resistant. Perfect for beach days!',
    price: 19.99,
    old_price: null,
    stock: 50,
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    is_featured: false,
    created_at: '2024-04-05',
    updated_at: '2024-12-10'
  },
  {
    id: 5,
    name: 'Handmade Wooden Crafts',
    category_id: 3,
    description: 'Beautiful handcrafted wooden items made by local artisans. Each piece is unique and represents Liepāja craftsmanship.',
    price: 34.99,
    old_price: null,
    stock: 20,
    images: [
      'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    is_featured: false,
    created_at: '2024-05-12',
    updated_at: '2024-12-10'
  },
  {
    id: 6,
    name: 'Liepāja Postcards Set',
    category_id: 1,
    description: 'Set of 10 beautiful postcards featuring Liepāja landmarks and scenic views. Perfect for sending memories home.',
    price: 8.99,
    old_price: 12.99,
    stock: 100,
    images: [
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    is_featured: false,
    created_at: '2024-06-01',
    updated_at: '2024-12-10'
  },
  {
    id: 7,
    name: 'Latvian Herbal Tea Box',
    category_id: 5,
    description: 'Premium collection of Latvian herbal teas. Includes 6 different flavors: chamomile, mint, linden, rosehip, and more.',
    price: 16.99,
    old_price: null,
    stock: 35,
    images: [
      'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    is_featured: false,
    created_at: '2024-07-15',
    updated_at: '2024-12-10'
  },
  {
    id: 8,
    name: 'Liepāja History Book',
    category_id: 6,
    description: 'Comprehensive book about Liepāja history, culture, and landmarks. Written by local historians. 200+ pages with photos.',
    price: 22.99,
    old_price: null,
    stock: 25,
    images: [
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    is_featured: false,
    created_at: '2024-08-20',
    updated_at: '2024-12-10'
  },
  {
    id: 9,
    name: 'Liepāja Hoodie',
    category_id: 2,
    description: 'Warm and cozy hoodie with Liepāja city design. Perfect for cool evenings. Available in multiple colors and sizes.',
    price: 39.99,
    old_price: 49.99,
    stock: 30,
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    is_featured: true,
    created_at: '2024-09-10',
    updated_at: '2024-12-10'
  },
  {
    id: 10,
    name: 'Beach Bag with Liepāja Logo',
    category_id: 4,
    description: 'Stylish and spacious beach bag featuring Liepāja logo. Water-resistant material, perfect for carrying beach essentials.',
    price: 18.99,
    old_price: null,
    stock: 40,
    images: [
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    is_featured: false,
    created_at: '2024-10-05',
    updated_at: '2024-12-10'
  },
  {
    id: 11,
    name: 'Ceramic Liepāja Mug',
    category_id: 1,
    description: 'Beautiful ceramic mug with Liepāja city design. Dishwasher safe. Perfect for your morning coffee or tea.',
    price: 14.99,
    old_price: null,
    stock: 60,
    images: [
      'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    is_featured: false,
    created_at: '2024-11-01',
    updated_at: '2024-12-10'
  },
  {
    id: 12,
    name: 'Handwoven Scarf',
    category_id: 3,
    description: 'Elegant handwoven scarf made by local artisans. Soft, warm, and featuring traditional Latvian patterns.',
    price: 29.99,
    old_price: null,
    stock: 18,
    images: [
      'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    is_featured: false,
    created_at: '2024-11-15',
    updated_at: '2024-12-10'
  }
];

// Helper function to get category by id
export const getCategoryById = (id) => {
  return categories.find(cat => cat.id === id);
};

// Helper function to get category by slug
export const getCategoryBySlug = (slug) => {
  return categories.find(cat => cat.slug === slug);
};

// Helper function to get products by category
export const getProductsByCategory = (categoryId) => {
  return products.filter(product => product.category_id === categoryId);
};

// Helper function to get featured products
export const getFeaturedProducts = () => {
  return products.filter(product => product.is_featured);
};

// Helper function to get product by id
export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

