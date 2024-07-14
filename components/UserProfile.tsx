"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { handleSignOut } from '@/app/dashboard/profile/signOutAction';


interface User {
  email: string;
}

interface UserProfileProps {
  user: User | null;
}

function getUserInitials(name: string) {
  const [firstName, lastName] = name.split(' ');
  return lastName ? `${firstName[0]}${lastName[0]}` : firstName.slice(0, 2);
}

function getUserName(email: string) {
  const namePart = email.split('@')[0];
  return namePart.charAt(0).toUpperCase() + namePart.slice(1);
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div
      className="mx-auto align-middle mt-2 md:w-60 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white rounded overflow-hidden shadow-lg align-middle w-[100vw]">
        <div className="text-center p-6 bg-gray-800 border-b">
          <div className="flex size-7 shrink-0 select-none items-center justify-center h-24 w-24 rounded-full bg-muted/50 text-xs font-medium uppercase text-muted-foreground">
            {getUserInitials(user.email)}
          </div>
          <p className="pt-2 text-lg font-semibold text-gray-50">
            {getUserName(user.email)}
          </p>
          <p className="text-sm text-gray-100">{user.email}</p>
          <div className="mt-5">
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                Manage your account
              </div>
            </button>
          </div>
        </div>
        <div className="border-b">
          <Link href="/account/campaigns">
            <div className="px-4 py-2 hover:bg-gray-100 flex">
              <div className="text-green-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div className="pl-3">
                <p className="text-sm font-medium text-gray-800 leading-none">
                  Campaigns
                </p>
                <p className="text-xs text-gray-500">View your campaigns</p>
              </div>
            </div>
          </Link>
          <Link href="/account/donations">
            <div className="px-4 py-2 hover:bg-gray-100 flex">
              <div className="text-gray-800">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="pl-3">
                <p className="text-sm font-medium text-gray-800 leading-none">
                  Donations
                </p>
                <p className="text-xs text-gray-500">View your last donations</p>
              </div>
            </div>
          </Link>
          <form action={handleSignOut}>
            <button className="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-xs outline-none transition-colors hover:bg-red-500 hover:text-white focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
              Sign Out
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default UserProfile;
