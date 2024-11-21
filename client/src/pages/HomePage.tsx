import Blog from '../components/Blog'

function HomePage() {
    return (
        <div className='flex flex-col gap-10 py-5 w-full'>
            <Blog />
            <Blog />
            <Blog />
            <Blog />
        </div>
    )
}

export default HomePage
