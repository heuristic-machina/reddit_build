'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '@nextui-org/react';

interface FormButtonProps {
    children: React.ReactNode;
}

export default function FormButton({children}: FormButtonProps) {
    //pending initially false
    //submitting form changes to true & when sign to show loading spinner to user
    const { pending } = useFormStatus();

    return <Button type='submit' isLoading={pending} >
        {children}
    </Button>

}