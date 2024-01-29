import { Button } from '../../components/Button/Button.tsx';
import { ChangeEvent, FormEvent, memo, useState } from 'react';
import Input from '../../components/Input/Input.tsx';
import useUserStore from './store/user.ts';
import { Navigate } from 'react-router';
import useUserMutation from './queryHooks/useUserMutation.tsx';
import Loader from '../../components/Loader/Loader.tsx';

const AuthForm = memo(() => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const { isLoggedIn } = useUserStore();

  const usePostData = useUserMutation();

  const handleFunction = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = { email, password };
    usePostData.mutate(data);
  };

  const { isLoading } = usePostData;

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <>
      {isLoading && <Loader />}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleFunction}>
            <>
              <div className="mt-2">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleChangeEmail}
                  label="Email address"
                />
              </div>
            </>
            <>
              <div className="mt-2">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={handleChangePassword}
                  label="Password"
                />
              </div>
            </>
            <>
              <Button text="Sign in" />
            </>
          </form>
        </div>
      </div>
    </>
  );
});

export default AuthForm;
