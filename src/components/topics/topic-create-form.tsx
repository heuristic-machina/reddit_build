import * as actions from '@/actions';
import {
    Input,
    Button,
    Textarea,
    Popover,
    PopoverTrigger,
    PopoverContent
} from '@nextui-org/react';

export default function TopicCreateForm() {
    return (
        <Popover placement='left'>
            <PopoverTrigger>
                <Button color='primary'>Topic Create Form</Button>
            </PopoverTrigger>
            <PopoverContent>
                <form action={actions.createTopic}>
                    <div className='flex flex-col gap-4 p-4 w-80'>
                        <h3 className='text-lg'>Create a Topic</h3>
                        <Input label='Topic' labelPlacement='outside' placeholder='Topic' />
                        <Textarea label='Description' labelPlacement='outside' placeholder='Describe your topic' />
                        <Button type='submit'>Submit</Button>
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    )
}