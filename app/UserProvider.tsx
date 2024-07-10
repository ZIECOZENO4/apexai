"use client"
import * as React from 'react'
import { useRouter } from 'next/navigation'

import { auth } from '@/auth'
import Loader from '@/components/loader'

const NoUser: React.FC = () => {
  const router = useRouter()
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await auth()
      if (sessionData?.user) {
        router.push('/dashboard')
      } else {
        router.push('/new')
      }
    }
    fetchSession()
  }, [router])

  if (loading) {
    return <Loader />
  }

  return null
}

export default NoUser
