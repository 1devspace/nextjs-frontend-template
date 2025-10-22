'use client';

import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from '@/components/ui/toaster';
import { useAuthStore } from '@/state/useAuthStore';
import { useEffect } from 'react';
import { useUser } from '@clerk/nextjs';

interface AppProvidersProps {
  children: React.ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  const { setUser, setLoaded, setSignedIn } = useAuthStore();
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (isLoaded) {
      setUser(user);
      setSignedIn(!!user);
      setLoaded(true);
    }
  }, [user, isLoaded, setUser, setSignedIn, setLoaded]);

  return (
    <ClerkProvider>
      {children}
      <Toaster />
    </ClerkProvider>
  );
}
