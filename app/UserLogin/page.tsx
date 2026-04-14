import {
  RedirectToSignIn,
  SignedIn,
  UserButton,
  SignedOut,
} from '@neondatabase/neon-js/auth/react/ui';
import React, { JSX } from 'react';
import { AuthSessionDebug } from '../components/AuthSessionDebug';


export default function Home(): JSX.Element {
  return (
    <>
      <SignedIn>
        {/* Debug auth option for development only <AuthSessionDebug /> */}
        <div>
          <div style={{ textAlign: 'center' }}>
            <h1>Welcome!</h1>
            <p>You're successfully authenticated.</p>
            <UserButton />
          </div>
        </div>
      </SignedIn>

      <SignedOut>
      <div>
        <RedirectToSignIn />
      </div>
      </SignedOut>
    </>
  );
}