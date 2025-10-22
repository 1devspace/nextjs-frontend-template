'use client';

import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/state/useAuthStore';
import { SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';

export function HeroActions() {
  const { isSignedIn, isLoaded } = useAuthStore();

  if (!isLoaded) {
    return (
      <div className="flex gap-4">
        <Button disabled>Loading...</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      {isSignedIn ? (
        <div className="flex items-center gap-4">
          <UserButton afterSignOutUrl="/" />
          <Button variant="outline" onClick={() => window.location.reload()}>
            Refresh Page
          </Button>
        </div>
      ) : (
        <div className="flex gap-4">
          <SignInButton mode="modal">
            <Button>Sign In</Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button variant="outline">Sign Up</Button>
          </SignUpButton>
        </div>
      )}
    </div>
  );
}
