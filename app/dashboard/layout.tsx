import BottomNavigation from "@/components/bottombar"
import MdLeftSideBar from "@/components/MdLeftSideBar"
import MdSideBar from "@/components/MdSideBar"

interface ChatLayoutProps {
  children: React.ReactNode
}

export default async function ChatLayout({ children }: ChatLayoutProps) {
  return (
    <div className="relative flex flex-col w-[100vw]">
      <div className="flex flex-col w-[100vw] md:flex-row">
        <div className=" hidden md:flex md:w-[10vw]">
        <MdSideBar />
        </div>
 {children}
 <div className="hidden md:flex md:w-[50vw]">
<MdLeftSideBar />
 </div>
 
      </div>

 <div className="align-middle items-center">
 <BottomNavigation />
 </div>
    </div>
  )
}
