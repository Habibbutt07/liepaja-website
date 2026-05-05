// Store API functions for search and product browsing
import { products, categories, getCategoryById } from '../data/storeProducts';

/**
 * Search products by query
 * @param {string} query - Search query
 * @returns {Array} Array of matching products with formatted data
 */
export const searchStoreProducts = (query) => {
  if (!query || query.trim() === '') return [];

  const lowerQuery = query.toLowerCase().trim();
  const matchingProducts = products.filter(product =>
    product.name.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery) ||
    getCategoryById(product.category_id)?.name.toLowerCase().includes(lowerQuery)
  );

  // Format results for API response
  return matchingProducts.map(product => ({
    id: product.id,
    name: product.name,
    image: product.images[0] || '',
    price: product.price,
    old_price: product.old_price,
    link: `/store/product/${product.id}`,
    category: getCategoryById(product.category_id)?.name || 'Unknown',
    category_slug: getCategoryById(product.category_id)?.slug || '',
    stock: product.stock,
    description: product.description.substring(0, 100) + '...'
  }));
};

/**
 * Get all products (for API)
 * @returns {Array} All products
 */
export const getAllStoreProducts = () => {
  return products.map(product => ({
    id: product.id,
    name: product.name,
    image: product.images[0] || '',
    price: product.price,
    old_price: product.old_price,
    link: `/store/product/${product.id}`,
    category: getCategoryById(product.category_id)?.name || 'Unknown',
    category_slug: getCategoryById(product.category_id)?.slug || '',
    stock: product.stock,
    description: product.description.substring(0, 100) + '...'
  }));
};

/**
 * Get products by category
 * @param {string} categorySlug - Category slug
 * @returns {Array} Products in category
 */
export const getProductsByCategorySlug = (categorySlug) => {
  const category = categories.find(cat => cat.slug === categorySlug);
  if (!category) return [];

  const categoryProducts = products.filter(product => product.category_id === category.id);
  return categoryProducts.map(product => ({
    id: product.id,
    name: product.name,
    image: product.images[0] || '',
    price: product.price,
    old_price: product.old_price,
    link: `/store/product/${product.id}`,
    category: category.name,
    category_slug: category.slug,
    stock: product.stock,
    description: product.description.substring(0, 100) + '...'
  }));
};

/**
 * Get product by ID
 * @param {number} id - Product ID
 * @returns {Object|null} Product object or null
 */
export const getStoreProductById = (id) => {
  const product = products.find(p => p.id === parseInt(id));
  if (!product) return null;

  return {
    id: product.id,
    name: product.name,
    images: product.images,
    price: product.price,
    old_price: product.old_price,
    link: `/store/product/${product.id}`,
    category: getCategoryById(product.category_id)?.name || 'Unknown',
    category_slug: getCategoryById(product.category_id)?.slug || '',
    stock: product.stock,
    description: product.description,
    is_featured: product.is_featured
  };
};

// Export for use in components
const storeApi = {
  searchStoreProducts,
  getAllStoreProducts,
  getProductsByCategorySlug,
  getStoreProductById
};

export default storeApi;

