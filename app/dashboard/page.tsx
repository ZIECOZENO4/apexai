
import Rate from "@/components/rate"
import Rate3 from "@/components/rate3"
import { SearchInput } from "@/components/SearchInput"
import ScrollableTabs from "../../components/ScrollableTabs"


export const metadata = {
  title: 'Dashboard: AI Chatbot'
}

export default async function IndexPage() {

  return (
    <div className='flex flex-col aligm-middle items-center mb-32 w-[100vw]  overflow-x-hidden min-h-screen'>
<Rate />
<SearchInput />
<ScrollableTabs />
    </div>
  )
}
