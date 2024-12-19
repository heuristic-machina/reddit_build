import Link from 'next/link';

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Input,
    Button,
    Avatar
} from '@nextui-org/react';

import { auth } from '@/auth';

export default async function Header() {
    const session = await auth();

    let authContent: React.ReactNode;
    if (session?.user) {
      authContent = <div><Avatar src={session.user.image || ''} /></div>
  } else {
    authContent = <>
        <NavbarItem>
            <Button  
            type='submit' 
            color='secondary' 
            variant='bordered'>
            Sign In
            </Button>
        </NavbarItem>
            <Button 
            type='submit' 
            color='primary' 
            variant='flat'>
            Sign Up
            </Button>
    </>
  }

    return (
        <Navbar className='shadow mb-6'>
            <NavbarBrand>
                <Link href='/' className='font-bold'>
                Reddit Home
                </Link>
            </NavbarBrand>
            <NavbarContent justify='center'>
                <NavbarItem>
                    <Input
                    placeholder='Search'
                     />
                </NavbarItem>
            </NavbarContent >

            <NavbarContent justify='end'>
                    {authContent}
            </NavbarContent>
        </Navbar>
    )

}

