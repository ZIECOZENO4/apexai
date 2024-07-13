
import Rate from "@/components/rate"
import Rate3 from "@/components/rate3"
import { SearchInput } from "@/components/SearchInput"


export const metadata = {
  title: 'Dashboard: AI Chatbot'
}

export default async function IndexPage() {

  return (
    <div className='flex flex-col aligm-middle items-center w-screen'>
<Rate />
<SearchInput />
    </div>
  )
}
