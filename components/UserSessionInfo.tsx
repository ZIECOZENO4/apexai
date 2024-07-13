// components/UserSessionInfo.tsx
"use client"

import * as React from 'react'
import Link from 'next/link'
import { IconSeparator } from '@/components/ui/icons'
import { SidebarMobile } from './sidebar-mobile'
import { SidebarToggle } from './sidebar-toggle'
import { ChatHistory } from './chat-history'
import { Session } from '@/lib/types'
import { usePathname } from 'next/navigation'
import { auth } from '@/auth'

const UserSessionInfo: React.FC = () => {
  const [session, setSession] = React.useState<Session | null>(null)
  const pathname = usePathname()
  const isRootPage = pathname === '/'

  React.useEffect(() => {
    const fetchSession = async () => {
      const session = (await auth()) as Session
      setSession(session)
    }

    fetchSession()
  }, [])

  return (
    <>
      {isRootPage && session?.user ? (
        <>
          <SidebarMobile>
            <ChatHistory userId={session.user.id} /> 
          </SidebarMobile>
          <SidebarToggle />
        </>
      ) : (
        <Link href="/dashboard">
          <img
            alt="forex bot"
            className="size-8 rounded-full mr-2"
            src="https://uoppdgbycojkpcadszya.supabase.co/storage/v1/object/public/documents/forex_bot.jpg"
          />
        </Link>
      )}
      <div className="flex items-center">
        <IconSeparator className="size-6 text-muted-foreground/50" />
        <p className="font-bold text-white font-serif text-pretty">FOREX BOT</p>
      </div>
    </>
  )
}

export default UserSessionInfo
