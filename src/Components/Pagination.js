import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

function Pagination() {

  const { page, handlePageChange, totalPages } = useContext(AppContext)
  return (
    <div className=' flex justify-center items-center  w-full bg-white fixed bottom-0 py-3 border'>
    <div className=' flex justify-between w-11/12 max-w-[670px]'>
    <div className=' flex gap-4'>
        {page > 1 &&
          (
            <button onClick={() => handlePageChange(page - 1)}
              className="rounded-md border px-4 py-1">
              Previous
            </button>
          )


        }

        {page < totalPages &&
          (
            <button onClick={() => handlePageChange(page + 1)}
              className="rounded-md border px-4 py-1">
              Next
            </button>
          )



        }


      </div>
      <p className='font-bold text-sm'>
        Page {page} of {totalPages}
      </p>
    </div>
      


    </div>
  )
}

export default Pagination