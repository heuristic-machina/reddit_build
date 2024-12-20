'use server'

export async function createTopic(formData: FormData) {
    const name = formData.get('topic');
    const description = formData.get('description');
    console.log(name, description);
}
//revalidate homepage