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
      authContent = <div>Avatar</div>
  } else {
    authContent = <div>Signin Signout</div>
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
                <NavbarItem>
                    {authContent}
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )

}

