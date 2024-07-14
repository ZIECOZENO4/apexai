import BottomNavigation from "@/components/bottombar"

interface ChatLayoutProps {
  children: React.ReactNode
}

export default async function ChatL ayout({ children }: ChatLayoutProps) {
  return (
    <div className="relative flex flex-col w-[100vw]">
 {children}
 <div className="align-middle items-center">
 <BottomNavigation />
 </div>
    </div>
  )
}
