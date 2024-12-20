'use client'

import { useFormState } from 'react-dom';
import {
    Input,
    Button,
    Textarea,
    Popover,
    PopoverTrigger,
    PopoverContent,
} from '@nextui-org/react';
import * as actions from '@/actions';

export default function TopicCreateForm() {
    const [formState, action] = useFormState(actions.createTopic, {
        errors: {}
    });
    return (
        <Popover placement='left'>
            <PopoverTrigger>
                <Button color='primary'>Topic Create Form</Button>
            </PopoverTrigger>
            <PopoverContent>
                <form action={action}>
                    <div className='flex flex-col gap-4 p-4 w-80'>
                        <h3 className='text-lg'>Create a Topic</h3>
                        <Input 
                        name='name' 
                        label='Topic' 
                        labelPlacement='outside' 
                        placeholder='Topic'
                        isInvalid={!!formState.errors.name}
                        errorMessage={formState.errors.name?.join(', ')}
                        />
                        <Textarea 
                        name='description'
                        label='Description' 
                        labelPlacement='outside' 
                        placeholder='Describe your topic' 
                        isInvalid={!!formState.errors.description}
                        errorMessage={formState.errors.description?.join(', ')}
                        />

                        {formState.errors._form ? (
                        <div className='rounded p-2 bg-red-200 border border-red-400'>
                            {formState.errors._form?.join(', ')}
                        </div>
                        ) : null}

                        <Button type='submit'>Submit</Button>
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    )
}