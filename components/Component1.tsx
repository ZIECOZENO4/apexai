import React from 'react'

const Component1 = () => {
  return (
    <div>
  <div className="relative mx-auto w-[80vw]">
    <div className="group relative flex cursor-pointer after:shadow-lg after:shadow-black">
    
      <div className="relative -left-16 top-0 z-10 w-96 rounded-xl bg-[#3d348b] px-5 py-3 text-base font-semibold leading-7 transition-all duration-700 group-hover:-left-14">
        <div className="flex flex-col gap-4">
        
          <div className="flex items-center gap-2">
          <svg width="64px" height="64px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill-rule="evenodd" clip-rule="evenodd" stroke="none" stroke-width="1"> <path fill-rule="evenodd" clip-rule="evenodd" d="M746.667 106.667V1493.33H1173.33V106.667H746.667ZM1056 224H864V1376H1056V224ZM106.667 533.333H533.333V1493.33H106.667V533.333ZM224 650.667H416V1376H224V650.667Z"></path> <path d="M1920 1706.67H0V1824H1920V1706.67Z"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1386.67 746.667H1813.33V1493.33H1386.67V746.667ZM1504 864H1696V1376H1504V864Z"></path> </g> </g></svg>
          </div>
        </div>
      </div>
   
      <div className="absolute -right-14 top-0 flex w-96 flex-col gap-4 self-end rounded-xl rounded-l-2xl border-none bg-[#7678ed] px-5 py-3 text-base font-semibold leading-7 transition-all duration-700 group-hover:-right-14 group-hover:w-64 group-hover:rounded-l-lg">
        <p className="text-[#fff]">Achivements unlocked</p>
        <p className="text-[#fff]">Records sold</p>
        <p>
          <a href="/dashboard" className="text-white/50 hover:underline">Visit &rarr;</a>
        </p>
      </div>
      <div className="h-16 bg-[#3d348b] w-[28rem] -left-10 shadow-2xl shadow-[#3d348b] absolute bottom-0"></div>
    </div>
  </div>
</div>

  )
}

export default Component1