import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
function SignButton() {
  return (
    <div>
      
      <style>
        {`
          .top-right {
            position: fixed;
            top: 30px;
            right: 30px;
          }
        `}
      </style>
      <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
    </div>
  );
}

export default SignButton;
