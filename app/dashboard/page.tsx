
import Rate3 from "@/components/rate3"


export const metadata = {
  title: 'Next.js AI Chatbot'
}

export default async function IndexPage() {

  return (
    <div className='flex flex-col aligm-middle'>
      <Rate3 />
    </div>
  )
}
