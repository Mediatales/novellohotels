import React from 'react';

const TestimonialCard = () => {
  return (
    <section className="px-4 py-8 md:px-16 lg:px-24">
      <h2 className="text-center text-4xl font-bold mb-8">
        <span className="text-4xl text-rose-600">Experiences</span> that Speak
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 shadow-lg rounded-lg bg-white"
            >
              <div className="flex mb-4">
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-5 h-5 text-green-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.571 8.332 1.151-6.063 5.857 1.515 8.241-7.452-3.957-7.452 3.957 1.515-8.241-6.063-5.857 8.332-1.151z" />
                    </svg>
                  ))}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5 h-5 text-gray-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.571 8.332 1.151-6.063 5.857 1.515 8.241-7.452-3.957-7.452 3.957 1.515-8.241-6.063-5.857 8.332-1.151z" />
                </svg>
              </div>
              <p className="text-center text-sm mb-4">
                Impressive luxury vibes and great visuals! Adding a virtual
                tour feature would elevate the booking experience.
              </p>
              <p className="text-center font-semibold">-Priya Sharma</p>
              <div className="mt-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-rose-200 text-rose-600 text-lg font-bold">
                  P
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default TestimonialCard;
