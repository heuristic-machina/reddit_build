'use client';

import { useSession } from 'next-auth/react';

export default function Profile() {
    const session = useSession();

    // '?' denotes that session may be undefined
    if (session.data?.user) {
        return <div className='text-green-400'>User signed in</div>;
    }
    //browser must be refreshed to show
    //todo: revalidate() form 
    return <div className='text-white'>User is NOT signed in</div>;
}