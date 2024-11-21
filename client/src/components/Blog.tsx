

function Blog() {
    return (
        <div className='flex items-start max-w-full h-60'>
            <img className='h-full w-[30%] rounded-xl' src="https://imageresizer.com/social.png" alt="lodding..." />
            <div className='ml-5 py-2'>
                <h2 className='text-3xl font-semibold'>Title of the blog</h2>
                <p className='font-semibold text-gray-500 flex flex-col mb-2'><span className='text-base'>creater name</span> <span className='text-xs'>15/11/2024</span></p>
                <article>blog simapal summary for introduction and all importnt info and all</article>
            </div>
        </div>
    )
}

export default Blog
