'use client'

import { useSession } from 'next-auth/react'

export default function Profile() {
  const session = useSession()

  if (session.data?.user) {
    return <div className='text-white'>From client: {JSON.stringify(session.data.user)}</div>
  }

  return <div className='text-white'>From client: user is NOT signed in</div>
}
