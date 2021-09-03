import Login from '../../components/auth/Login';
import useLogin from './hooks/useLogin';

function DreamPage() {
  const login = useLogin();

  return (
    <Login
      password={login.password}
      onChange={login.onChange}
      onLogin={login.onLogin}
      onKeyPress={login.onKeyPress}
    />
  );
}

export default DreamPage;
