import { Menu, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { Fragment, memo } from 'react';
import useUserStore from '../../pages/AuthPage/store/user.ts';
import useUserDataQuery from '../../pages/AuthPage/queryHooks/useUserInfoQuery.tsx';
import Loader from '../Loader/Loader.tsx';

const UserProfile = memo(() => {
  const { isLoggedIn, logout } = useUserStore();

  const { data, isLoading } = useUserDataQuery();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {isLoggedIn ? (
        <div className="ml-4 flex items-center md:ml-6">
          <Menu as="div" className="relative ml-3">
            <div>
              <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <img className="h-8 w-8 rounded-full" src={data?.imageUrl} alt="" />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className={`block px-4 py-2 text-md text-black-700`}>{data?.name}</div>
                <Menu.Item>
                  {({ active }) => (
                    <Link to={'/profile'} className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}>
                      Your Profile
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link onClick={logout} to={'/'} className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}>
                      Sign out
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      ) : (
        <Link
          to={'/auth'}
          className={`text-gray-300 hover:bg-gray-700 hover:text-white
        rounded-md px-3 py-2 text-sm font-medium
      `}
        >
          Login
        </Link>
      )}
    </>
  );
});

export default UserProfile;
