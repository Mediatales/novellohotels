import React from 'react';

const TestimonialCard = () => {
  const testimonials = [
    {
      text: "The stay at Novello Hotel was a dream! The staff was incredibly courteous, and the rooms were spotless.",
      name: "Rohit Kumar",
      initial: "R",
    },
    {
      text: "Amazing ambiance and top-notch service. The breakfast buffet was the highlight of my stay. I’ll definitely visit again!",
      name: "Aarushi Mehta",
      initial: "A",
    },
    {
      text: "From check-in to check-out, everything was seamless. The attention to detail in decor and comfort made my trip unforgettable.",
      name: "Vikram Singh",
      initial: "V",
    },
  ];

  return (
    <section className="px-4 py-8 md:px-16 lg:px-24">
      <h2 className="text-center text-4xl font-bold mb-8">
        <span className="text-4xl text-rose-600">Experiences</span> that Speak
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 shadow-lg rounded-lg bg-white"
          >
            <div className="flex mb-4">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5 text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.571 8.332 1.151-6.063 5.857 1.515 8.241-7.452-3.957-7.452 3.957 1.515-8.241-6.063-5.857 8.332-1.151z" />
                  </svg>
                ))}
            </div>
            <p className="text-center text-sm mb-4">{testimonial.text}</p>
            <p className="text-center font-semibold">-{testimonial.name}</p>
            <div className="mt-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-rose-200 text-rose-600 text-lg font-bold">
                {testimonial.initial}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialCard;
