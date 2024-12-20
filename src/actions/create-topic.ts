'use server'
import {z} from 'zod';
import { auth } from '@/auth';

const createTopicSchema = z.object({
    name: z
        .string()
        .min(3)
        .regex(/^[a-z-]+$/, {
        message: 'Must be lower case letter or dashes without spaces'
        }),
    description: z.string().min(10),
})

interface CreateTopicFormState {
    errors: {
        name?: string[];
        description?: string[];
        _form?: string[];
    }
}

export async function createTopic(
    formState: CreateTopicFormState, 
    formData: FormData
) : Promise<CreateTopicFormState> {
    const result = createTopicSchema.safeParse({
        name: formData.get('name'),
        description: formData.get('description')
    });
    if (!result.success) {
        // console.log(result.error.flatten().fieldErrors);
        return {
            errors: result.error.flatten().fieldErrors,
        };
    }

    const session = await auth();
    //if there is no session or the session user is undefined
    if (!session || !session.user) {
        return {
            errors: {
                _form: ['You must be signed in to do this.'],
            }
        }
    }

    return {
        errors: {},
    };
}
//revalidate homepage