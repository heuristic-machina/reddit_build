import Link from 'next/link';
import { Chip } from '@nextui-org/react';
import { db } from '@/db';
import paths from '@/paths';

export default async function TopicList() {
    const topics = await db.topic.findMany();

    const renderedTopics = topics.map((topic) => {
        return (
            <div key={topic.id}>
                <Link href={paths.topicShow(topic.slug)}>
                    <Chip color='default'>
                        {topic.slug}
                    </Chip>
                </Link>
            </div>
        )
    })

    return <div className='mt-8 flex flex-row flex-wrap gap-2'>
        {renderedTopics}
    </div>

}