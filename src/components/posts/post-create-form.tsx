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
import FormButton from '@/components/common/form-button';

interface PostCreatePageProps {
    slug: string
}


export default function PostCreateForm({ slug } :
    PostCreatePageProps) {
    const [formState, action] = useFormState(actions.createPost.bind(null, slug), {
        errors: {}
    });
    return (
        // <div className="font-bold text-white">
        //     Post create form
        // </div>
        <Popover placement='left'>
                    <PopoverTrigger>
                        <Button className='text-white' color='primary'>Create Post</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <form action={action}>
                        {/* <form> */}
                            <div className='flex flex-col gap-4 p-4 w-80'>
                                <h3 className='text-lg'>Create a Post</h3>
                                <Input 
                                name='title' 
                                label='Title' 
                                labelPlacement='outside' 
                                placeholder='Title'
                                isInvalid={!!formState.errors.title}
                                errorMessage={formState.errors.title?.join(', ')}
                                />
                                <Textarea 
                                name='content'
                                label='Content' 
                                labelPlacement='outside' 
                                placeholder='Describe your post' 
                                isInvalid={!!formState.errors.content}
                                errorMessage={formState.errors.content?.join(', ')}
                                />
        
                                {formState.errors._form ? (
                                <div className='rounded p-2 bg-red-200 border border-red-400'>
                                    {formState.errors._form?.join(', ')}
                                </div>
                                ) : null}
        
                                {/* <Button type='submit'>Submit</Button> */}
                                <FormButton>Save</FormButton>
                            </div>
                        </form>
                    </PopoverContent>
                </Popover>

    ) 
}