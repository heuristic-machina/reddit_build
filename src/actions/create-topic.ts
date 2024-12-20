'use server'
import {z} from 'zod';
import { auth } from '@/auth';
import type { Topic } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { db } from '@/db';
import paths from '@/paths';

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

    //declare with let variable
    let topic: Topic;
    //must get Topic.id once the topic is saved to the database
    try {
        topic = await db.topic.create({
            data: {
                slug: result.data.name,
                description: result.data.description
            }
        })

    } catch (err:unknown) {
        if (err instanceof Error) {
            return {
                errors: {
                    _form: [err.message]
                }
            }
        } else {
            return {
                errors: {
                    _form: ['Something went wrong']
                }
            }
        }
    }
    //redirect works by throwing an error so cannot be called in the catch block
    //redirect to topicShow by accessing topic id from try block
    //revalidate homepage
    revalidatePath('/')
    redirect(paths.topicShow(topic.slug))

    return {
        errors: {},
    };
}