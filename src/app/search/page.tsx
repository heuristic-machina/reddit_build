// use searchParams prop to find relevant posts and show them to the screen

import { redirect } from 'next/navigation'

interface SearchPageProps {
    searchParams: {
        term: string;
    }
}

export default async function SearchPage({searchParams}: SearchPageProps) {
    const { term } = searchParams

    if (!term) {
        redirect('/')
    }

    return <div className='text-white'>{term}</div>
}