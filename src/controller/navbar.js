// Navbar component configuration
import Navbar1 from '../ui/navbar/navbar1';
import navbar1Code from '../ui/navbar/code/navbar1.txt?raw';
import navbar1Dependencies from '../ui/navbar/dependencies/navbar1.txt?raw';
import EcoNavbar from '../ui/navbar/EcoNavbar.jsx';
import EcoNavbarCode from '../ui/navbar/code/EcoNavbar.txt?raw';
import EcoNavbarDependencies from '../ui/navbar/dependencies/EcoNavbar.txt?raw';

export const navbarComponents = [
  {
    id: 'navbar1',
    name: 'Navbar 1',
    displayName: 'Navbar 1',
    component: Navbar1,
    code: navbar1Code,
    dependencies: navbar1Dependencies,
    category: 'navbar'
  },
  
  // Add more navbar components here as you create them
  // {
  //   id: 'navbar2',
  //   name: 'Navbar 2',
  //   displayName: 'Navbar 2',
  //   component: Navbar2,
  //   code: navbar2Code,
  //   dependencies: navbar2Dependencies,
  //   category: 'navbar'
  // },
  {
    id: 'eco-navbar',
    name: 'EcoNavbar',
    displayName: 'Eco Navbar',
    component: EcoNavbar,
    code: EcoNavbarCode,
    dependencies: EcoNavbarDependencies,
    category: 'navbar',
  },
];

export default navbarComponents;