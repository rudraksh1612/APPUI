// Hero component configuration
//imports for hero_1
import Hero1 from '../ui/hero/hero_1.jsx';
import hero1Code from '../ui/hero/code/hero_1.txt?raw';
import hero1Dependencies from '../ui/hero/dependencies/hero_1.txt?raw';
//imports for hero_2
import Hero_2 from '../ui/hero/hero_2.jsx';
import hero2Code from '../ui/hero/code/hero_2.txt?raw';
import hero2Dependencies from '../ui/hero/dependencies/hero_2.txt?raw';
//imports for hero_3
import Hero_3 from '../ui/hero/hero_3.jsx';
import hero3Code from '../ui/hero/code/hero_3.txt?raw';
import hero3Dependencies from '../ui/hero/dependencies/hero_3.txt?raw';
//imports for hero_4
import Hero_4 from '../ui/hero/hero_4.jsx';
import hero4Code from '../ui/hero/code/hero_4.txt?raw';
import hero4Dependencies from '../ui/hero/dependencies/hero_4.txt?raw';

export const heroComponents = [
  {
    id: 'hero1',
    name: 'Hero 1',
    displayName: 'Hero 1',
    component: Hero1,
    code: hero1Code,
    dependencies: hero1Dependencies,
    category: 'hero'
  },
  {
    id: 'hero2',
    name: 'Hero 2',
    displayName: 'Hero 2',
    component: Hero_2,
    code: hero2Code,
    dependencies: hero2Dependencies,
    category: 'hero'
  },
   {
    id: 'hero3',
    name: 'Hero 3',
    displayName: 'Hero 3',
    component: Hero_3,
    code: hero3Code,
    dependencies: hero3Dependencies,
    category: 'hero'
  },
 {
    id: 'hero4',
    name: 'Hero 4',
    displayName: 'Hero 4',
    component: Hero_4,
    code: hero4Code,
    dependencies: hero4Dependencies,
    category: 'hero'
  },
  
];

export default heroComponents;
