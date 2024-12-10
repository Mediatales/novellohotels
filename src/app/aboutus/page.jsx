import React from 'react'


const page = () => {
  return (
    <div className='w-full h-full'>
      {/* welcome section */}
      <div className="w-full">
        <img src="./assets/Welcome_img.png" alt='Welcome'/>
      </div>
      {/* the essence of use */}
      <div className="w-full mt-60 bg-[#F7ECEE] text-center mt-5 mb-5 flex flex-col justify-center items-center">
        <h1 className="pt-5 font-['Roboto_Serif'] text-3xl font-semibold leading-[48px]">The Essence of Us</h1>
       <div className='w-[70%] ' >
       <p className='font-open-sans p-5 text-xl font-light leading-8 text-center font-w-300'>
        Welcome to <span className='font-bold'>The Novello by evergreen</span>, you’re home away from home. Nestled in the Queen of hills <span className='font-bold'>Mussoorie Dehradun</span> , our hotel offers a perfect blend of modern comfort and warm, personalised service. Whether you're here for business, leisure, or a special occasion, we provide a unique experience that caters to your every need.
        <br/>
          Our beautifully designed rooms and suites, each thoughtfully equipped with state-of-the-art amenities and plush furnishings to ensure a relaxing and enjoyable stay. We strive to make every guest feel like family, offering exceptional hospitality with attention to detail.
          <br />
          At The Novello by evergreen, we believe in creating memories, not just stays. From our <span className='font-bold'>Roof top restaurant to Beautiful View</span>, we offer everything you need for a truly memorable experience. Our dedicated team is committed to delivering outstanding service and ensuring that your visit is as comfortable and enjoyable as possible.
          <br/>
          Whether you’re here to explore the vibrant local culture, relax and unwind, or attend a business meeting, we’re here to make your stay extraordinary.
          <br />
          Thank you for choosing <span className='font-bold'>The Novello by evergreen</span>.
          <br />
          We look forward to welcoming you!</p>
       </div>
      </div>
    </div>
  )
}

export default page
