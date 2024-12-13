import { Button } from '@nextui-org/react';
import * as actions from '@/actions';
import { auth } from '@/auth';
import Profile from '@/components/profile';


export default async function Home() {
  const session = await auth();


  return (
    <div>
      <form action={actions.signIn}>
        <Button className='mb-2' type='submit'>
          Sign In
        </Button>
      </form>
      <form action={actions.signOut}>
        <Button type='submit'>
          Sign Out
        </Button>
      </form>

      {session?.user ? (
        <div className='text-green-600'>Signed In: {JSON.stringify(session.user)}</div>
      ) : (
        <div className='text-red-600'>Signed Out</div>
      )}
        <Profile />
    </div>
  );
}
