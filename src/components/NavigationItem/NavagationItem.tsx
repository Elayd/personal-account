import { Link } from 'react-router-dom';
import { memo } from 'react';

interface NavigationItemProps {
  item: { name: string; href: string; current: boolean };
  onClick: () => void;
}

const NavigationItem = memo(({ item, onClick }: NavigationItemProps) => {
  return (
    <Link
      to={item.href}
      onClick={onClick}
      className={`
        ${item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}
        rounded-md px-3 py-2 text-sm font-medium
      `}
      aria-current={item.current ? 'page' : undefined}
    >
      {item.name}
    </Link>
  );
});

export default NavigationItem;
