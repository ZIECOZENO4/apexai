"use client"
import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { auth } from '@/auth'
import { IconNextChat } from '@/components/ui/icons'
import { Session } from '@/lib/types'
import Loader from '@/components/loader'
import HomeUi from '@/components/homeui'

const UserOrLogin: React.FC = () => {
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
    <>
      {session?.user ? (
        <p><Loader /></p>
      ) : (
<HomeUi />
      )}
    </>
  )
}

export default UserOrLogin
