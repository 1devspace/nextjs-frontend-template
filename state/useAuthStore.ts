import { create } from 'zustand';
import { produce } from 'immer';
import { User } from '@clerk/nextjs/server';

interface AuthState {
  user: User | null;
  isLoaded: boolean;
  isSignedIn: boolean;
  setUser: (user: User | null) => void;
  setLoaded: (loaded: boolean) => void;
  setSignedIn: (signedIn: boolean) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoaded: false,
  isSignedIn: false,
  setUser: (user) =>
    set(
      produce((state) => {
        state.user = user;
        state.isSignedIn = !!user;
      })
    ),
  setLoaded: (loaded) =>
    set(
      produce((state) => {
        state.isLoaded = loaded;
      })
    ),
  setSignedIn: (signedIn) =>
    set(
      produce((state) => {
        state.isSignedIn = signedIn;
      })
    ),
  clearAuth: () =>
    set(
      produce((state) => {
        state.user = null;
        state.isSignedIn = false;
        state.isLoaded = false;
      })
    ),
}));
