import { auth } from '@/firebaseConfig';
import { GoogleAuthProvider, signInWithPopup, signOut, User, UserCredential } from 'firebase/auth';
import posthog from 'posthog-js';
import { createContext, SetStateAction, useContext, useEffect, useState } from 'react';

interface AuthContextInterface {
  currentUser: User | null;
  isAuthLoading: boolean;
  signInWithGoogle: () => Promise<UserCredential>;
  logout: () => Promise<void>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextInterface>({} as AuthContextInterface);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  // Sign in with any firebase social sign in (google, github, etc)
  const signInWithGoogle = async () => {
    setIsAuthLoading(true);
    return await signInWithPopup(auth, new GoogleAuthProvider());
  };

  // Logout of firebase
  const logout = async () => {
    setIsAuthLoading(true);
    return await signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user: SetStateAction<User | null>) => {
      if (user) {
        setIsAuthLoading(true);
        setCurrentUser(user);

        // @ts-expect-error
        posthog.identify(user.uid);
        posthog.capture('set user props on login', {
          // @ts-expect-error
          $set: { email: user.email }
        });

        setIsAuthLoading(false);
      } else {
        setCurrentUser(null);
        setIsAuthLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  const providerValue: AuthContextInterface = {
    currentUser,
    isAuthLoading,
    signInWithGoogle,
    logout
  };

  return <AuthContext.Provider value={providerValue}>{children}</AuthContext.Provider>;
};
