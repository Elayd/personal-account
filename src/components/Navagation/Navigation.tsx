import { useCallback, useEffect, useState } from 'react';
import NavigationBar from '../NavigationBar/NavigationBar.tsx';
import useUserStore from '../../pages/AuthPage/store/user.ts';

const Navigation = () => {
  const [navigation, setNavigation] = useState([
    { name: 'About', href: '/', current: false },
    { name: 'Statuses', href: '/statuses', current: true },
    { name: 'Applications', href: '/applications', current: false }
  ]);

  const NotLoggedNavPanel = [{ name: 'About', href: '/', current: false }];
  const handleNavigationClick = useCallback((clickedIndex: number) => {
    setNavigation((prevNavigation) =>
      prevNavigation.map((item, index) => ({
        ...item,
        current: index === clickedIndex
      }))
    );
  }, []);

  useEffect(() => {
    setNavigation((prevNavigation) =>
      prevNavigation.map((item) => ({
        ...item,
        current: item.href === window.location.pathname
      }))
    );
  }, [window.location.pathname]);

  const { isLoggedIn } = useUserStore();
  return (
    <>
      <NavigationBar navigation={isLoggedIn ? navigation : NotLoggedNavPanel} handleNavigationClick={handleNavigationClick} />
    </>
  );
};

export default Navigation;
