'use client';

import { useSession } from 'next-auth/react';

export default function Profile() {
    const session = useSession();

    if (session.data?.user) {
        return <div className='text-green-400'>User signed in: {JSON.stringify(session.data.user)}</div>;
    }
    return <div className='text-white'>User is not signed in</div>;
}