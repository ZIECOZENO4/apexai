// app/dashboard/profile/page.tsx

import UserProfile from '@/components/UserProfile';
import { FC } from 'react';

interface User {
  email: string;
}

interface ProfilePageProps {
  user: User;
}

const ProfilePage: FC<ProfilePageProps> = ({ user }) => {
  return <UserProfile user={user} />;
};

export default ProfilePage;
