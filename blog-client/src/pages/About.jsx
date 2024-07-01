import React from 'react'

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Shreya's Blog
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
            Welcome to Shreya's Blog! Created by Shreya Pandey, this personal project serves as a platform to share thoughts and ideas with the world. Shreya, a passionate developer, writes extensively on topics ranging from technology and coding to travel and poetry. Whether you're here to explore tech insights, gain inspiration for your writing, or plan your next adventure, Shreya's diverse content is designed to inform and inspire you.
            </p>

            <p>
            On this blog, you'll find weekly articles and tutorials covering a wide range of topics, including web development, software engineering, programming languages, travel, and poetry. Shreya is constantly learning and exploring new technologies and experiences, so be sure to check back often for fresh, insightful content!
            </p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well. We believe that a community of learners can help
              each other grow and improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
