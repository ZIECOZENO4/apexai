// app/dashboard/profile/page.tsx

import UserProfile from '@/components/UserProfile';

interface User {
  email: string;
}

interface ProfilePageProps {
  user: User;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ user }) => {
  return <UserProfile user={user} />;
};

export default ProfilePage;
