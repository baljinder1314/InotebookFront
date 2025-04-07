import React from 'react'

function AddButton() {
  return (
    <div className='flex text-white justify-between mt-4 flex-wrap  flex-row-reverse'>
      <a href='/add' className='text-3xl px-10  border mr-5 rounded-4xl cursor-pointer hover:bg-indigo-500 text-center hover:border-none'>+</a>
      <p className='text-4xl font-extrabold'>Notes</p>
      <button className='text-3xl' ></button>
    </div>
  )
}

export default AddButton
