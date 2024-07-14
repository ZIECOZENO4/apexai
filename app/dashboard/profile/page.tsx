import { Session } from '@/lib/types'
import { auth } from '@/auth'
import * as React from 'react'
import Link from 'next/link'
import UserProfile from '@/components/UserProfile'
import { Button } from '@/components/ui/button'

const ProfilePage = async () => {
  const session = (await auth()) as Session;
  return (
    <div>
      {session?.user ? (
        <UserProfile user={session.user} />
      ) : (
        <Link href="/signup">
          <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-[#1a1b1e] px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-md flex-col items-center text-center">
              <div className="rounded-full bg-[#2b2c31] p-4">
                <svg
                  className="h-12 w-12 text-[#9ca3af]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  key="lock-icon"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#f3f4f6] sm:text-4xl">
                Unauthorized Access
              </h1>
              <p className="mt-4 text-[#9ca3af]">
                You are not logged in. Please sign in to access this page.
              </p>
              <Link href="/login">
                <Button className="mt-6">Sign In</Button>
              </Link>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default ProfilePage;
