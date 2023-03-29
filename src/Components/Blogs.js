import React, { useContext } from 'react'
import Spinner from './Spinner'
import { AppContext } from '../Context/AppContext'

function Blogs() {

  const{ posts,loading }=useContext(AppContext)

  return (
    <div className='w-11/12 max-w-[670px]w-11/12 max-w-[670px] flex flex-col py-3 gap-y-7 mt-[60px] mb-[70px] '>

    {
      loading? (<Spinner/>):(
        posts.length === 0 ? (
          <div>No Post Found</div>
        ):( posts.map( (post) => (
          <div key={post.id}>
            <p className='font-bold text-lg'>{post.title}</p>
            <p className='text-sm mt-[4px]'>
            By <span className='italic'>{post.author}</span>on <span className='underline font-bold'> {post.category}</span>
            </p>
            <p className='text-sm mt-[6px]'>Posted on {post.date}</p>
            <p className='text-md  mt-[14px]'>{post.content}</p>
            <div className='flex gap-x-3'>
              {post.tags.map((tag)=>{
                return <span className='text-blue-700 underline font-bold text-sm mt-[4px]'>{`#{tag}`}</span>
              })}
            </div>
          </div>

        )))
      )
    }

    </div>
  )
}

export default Blogs