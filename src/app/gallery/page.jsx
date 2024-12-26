'use client';

import { useState } from 'react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalImage, setModalImage] = useState(null);

  const images = [
    // Rooms
    { id: 1, src: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1735200971/room1_b17ux9.png', category: 'Room' },
    { id: 2, src: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1735204132/room2_nqmklh.png', category: 'Room' },
    { id: 3, src: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1735205163/room3_u3ru5p.png', category: 'Room' },
    { id: 4, src: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1735205175/room4_sbznwy.png', category: 'Room' },
    { id: 5, src: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1735205184/room5_s5twil.png', category: 'Room' },
    { id: 6, src: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1735205198/room6_tg0jkj.png', category: 'Room' },
    { id: 7, src: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1735205205/room7_orkvml.png', category: 'Room' },
    { id: 8, src: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1735205206/room8_mlxgaq.png', category: 'Room' },
    { id: 9, src: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1735205218/room9_dxpccr.png', category: 'Room' },

    // Restaurant
    { id:10 , src: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1735203337/rest1_s6fayt.png', category: 'Restaurant' },
    { id:11 , src: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1735206506/rest2_kl72vs.png', category: 'Restaurant' },
    { id:12 , src: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1735206509/rest3_psbvol.png', category: 'Restaurant' },
    { id:13 , src: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1735206517/rest4_kdm7so.png', category: 'Restaurant' },
    { id:14 , src: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1735206521/rest5_bqe7xs.png', category: 'Restaurant' },
    { id:15 , src: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1735206527/rest6_bipezx.png', category: 'Restaurant' },
    { id:16 , src: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1735206535/rest7_phxasb.png', category: 'Restaurant' },
    { id:17 , src: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1735206539/rest8_paqzew.png', category: 'Restaurant' },
    { id:18 , src: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1735206545/rest9_gnw6le.png', category: 'Restaurant' },

    // View
    { id:19 , src: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1735207070/view2_nxk9cf.png', category: 'View' },
    { id:20 , src: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1735203371/View1_p913yw.png', category: 'View' },
    { id:21 , src: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1735207073/view3_zncwfw.png', category: 'View' },
    { id:22 , src: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1735207077/view4_dnao18.png', category: 'View' },
    { id:23 , src: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1735207079/view5_cxzcqs.png', category: 'View' },
    { id:24 , src: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1735207085/view6_wme6xy.png', category: 'View' },
    { id:25 , src: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1735207091/view7_ebucb8.png', category: 'View' },
    { id:26 , src: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1735207097/view8_fjbzsh.png', category: 'View' },
    { id:27 , src: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1735207101/view9_mgdwfp.png', category: 'View' },
  ];

  const filteredImages =
    selectedCategory === 'All'
      ? images
      : images.filter((image) => image.category === selectedCategory);

  return (
    <div>
      <div className="p-6">
        {/* Category Filters */}
        <div className="flex justify-center space-x-4 mb-6 mt-24">
          {['All', 'Room', 'Restaurant', 'View'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-lg transition ${
                selectedCategory === category
                  ? 'bg-red-500 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry-like Grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="break-inside-avoid mb-4 cursor-pointer"
              onClick={() => setModalImage(image.src)}
            >
              <div className="relative group overflow-hidden rounded-lg">
                <img
                  src={image.src}
                  alt={`${image.category} ${image.id}`}
                  className="w-full h-auto object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Improved Modal */}
        {modalImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={() => setModalImage(null)}
          >
            <div 
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalImage(null)}
                className="absolute top-0 right-0 text-white bg-red-500 rounded-full p-2 m-4 hover:bg-red-600 z-10"
              >
                ✕
              </button>
              <img
                src={modalImage}
                alt="Modal view"
                className="max-h-[90vh] max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;