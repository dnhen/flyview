import { LoadingScreen } from '@/components/LoadingScreen';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/router';
import { ComponentType } from 'react';

export const withAuth = <T,>(Component: ComponentType<T>) => {
  const AuthProtected = (hocProps: T) => {
    const router = useRouter();
    const { isAuthLoading, currentUser } = useAuth();

    // Redirect to login page if user is not logged in
    if (!isAuthLoading && !currentUser) {
      router.replace('/login');
      return <LoadingScreen />;
    }

    // Render a loading screen if auth state is not determined yet (prevents flashing)
    if (isAuthLoading || !currentUser) {
      return <LoadingScreen />;
    }

    return <Component {...hocProps} />;
  };

  return AuthProtected;
};
