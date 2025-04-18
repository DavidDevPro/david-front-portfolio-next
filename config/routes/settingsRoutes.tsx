import { NavBarLink } from '@/lib/types';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { HiOutlineTag } from 'react-icons/hi';


// Les routes spécifiques à la section Settings
export const settingsLinks: NavBarLink[] = [
  {
    title: 'Liste des xxxx',
    href: '/dashboard/settings',
    icon: <FaRegCalendarAlt size={18} />,
  },
  {
    title: 'Liste des xxxx',
    href: '/dashboard/settings/categories',
    icon: <HiOutlineTag size={18} />,
  },
  {
    title: 'Liste des xxxx',
    href: '/dashboard/settings/subcategories',
    icon: <HiOutlineTag size={18} />,
  },
];