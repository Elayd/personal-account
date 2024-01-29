import NavigationItem from '../NavigationItem/NavagationItem.tsx';
import { memo } from 'react';

interface NavigationBarProps {
  navigation: { name: string; href: string; current: boolean }[];
  handleNavigationClick: (clickedIndex: number) => void;
}

const NavigationBar = memo(({ navigation, handleNavigationClick }: NavigationBarProps) => {
  return (
    <div className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-4">
        {navigation.map((item, index) => (
          <NavigationItem key={item.name} item={item} onClick={() => handleNavigationClick(index)} />
        ))}
      </div>
    </div>
  );
});

export default NavigationBar;
