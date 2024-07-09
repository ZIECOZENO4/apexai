// 'use client'

// import * as React from 'react'
// import { ThemeProvider as NextThemesProvider } from 'next-themes'
// import { ThemeProviderProps } from 'next-themes/dist/types'
// import { SidebarProvider } from '@/lib/hooks/use-sidebar'
// import { TooltipProvider } from '@/components/ui/tooltip'

// export function Providers({ children, ...props }: ThemeProviderProps) {
//   return (
//     <NextThemesProvider {...props}>
//       <SidebarProvider>
//         <TooltipProvider>{children}</TooltipProvider>
//       </SidebarProvider>
//     </NextThemesProvider>
//   )
// }


'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'
import { SidebarProvider } from '@/lib/hooks/use-sidebar'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Session } from '@/lib/types'
import { auth } from '@/auth'
import UserOrLogin from '@/app/UserProvider'
import {NextUIProvider} from "@nextui-org/react";
import Loader from './loader'

export function Providers({ children, ...props }: ThemeProviderProps) {
  const router = useRouter()
  const [session, setSession] = React.useState<Session | null>(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const fetchSession = async () => {
      const sessionData = (await auth()) as Session
      setSession(sessionData)
      if (sessionData?.user) {
        router.push('/')
      } else {
        setLoading(false)
      }
    }
    fetchSession()
  }, [router])

  if (loading) {
    return <p><Loader /></p>
  }

  return (
    <NextThemesProvider {...props}>
      <SidebarProvider>
        <TooltipProvider>
        <NextUIProvider>
          {!session?.user ? <UserOrLogin /> : children}
          </NextUIProvider>
        </TooltipProvider>
      </SidebarProvider>
    </NextThemesProvider>
  )
}
