import React from 'react'

const button = () => {
  return (
    <div>
      <input
      type="number"
      placeholder='enter amount'
      className='px-4 py-2 rounded-md text-black'
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
    />
    <button className='bg-[#9A3D50] hover:bg-[#872D42] text-white font-semibold text-lg py-3 px-6 rounded-lg shadow-md'>
        Book Now
    </button>
    </div>
  )
}

export default button
