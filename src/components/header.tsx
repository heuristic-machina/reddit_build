import Link from 'next/link';
import HeaderAuth from '@/components/header-auth'

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Input,
} from '@nextui-org/react';


export default function Header() {

    
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
                    <HeaderAuth />
            </NavbarContent>
        </Navbar>
    )
    
}


