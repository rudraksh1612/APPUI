// Central component registry

import navbarComponents from './navbar';
import heroComponents from './hero';
import cardComponents from './card';

// Aggregate all component categories
export const componentRegistry = {
  navbar: navbarComponents,
  hero: heroComponents,
  card: cardComponents,
  // Add more categories as you create them
  // footer: footerComponents,
  // etc.
};

// Get all components from a specific category
export const getComponentsByCategory = (category) => {
  return componentRegistry[category] || [];
};

// Get a specific component by category and id
export const getComponentById = (category, id) => {
  const components = getComponentsByCategory(category);
  return components.find(comp => comp.id === id);
};

// Get all categories
export const getAllCategories = () => {
  return Object.keys(componentRegistry);
};

export default componentRegistry;