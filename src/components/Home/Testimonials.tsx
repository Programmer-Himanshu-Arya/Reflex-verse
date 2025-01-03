'use client'

const testimonials = [
  {
    text: "Their team took our wellness brand and elevated it to new heights with their thoughtful designs and strategic branding, they've helped us create a cohesive and compelling brand identity.",
    author: "Mark Ramirez",
    role: "Owner of Luna Inc",
    rating: 5,
    // bgColor: "bg-[#0B3B2D]",
    // textColor: "text-[#98FFB3]"
    textColor: "text-[#0B3B2D]",
    borderColor: "border-[#0B3B2D]"
  },
  {
    text: "As a fellow creative professional, I have high standards when it comes to design. Kekia not only met but exceeded those standards. Kekia also optimized it for a seamless user experience.",
    author: "Thomas Gala",
    role: "Founder Zentech Wellness",
    rating: 4,
    bgColor: "bg-white",
    textColor: "text-[#0B3B2D]",
    borderColor: "border-[#0B3B2D]"
  },
  {
    text: "Their team took our wellness brand and elevated it to new heights with their thoughtful designs and strategic branding, they've helped us create a cohesive and compelling brand identity.",
    author: "Sarah Chen",
    role: "Creative Director",
    rating: 5,
    // bgColor: "bg-[#0B3B2D]",
    // textColor: "text-[#98FFB3]"
    textColor: "text-[#0B3B2D]",
    borderColor: "border-[#0B3B2D]"
  }
]

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-white py-16 px-4" id="testimonials">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-[2rem] bg-forest-light shadow-lg">
            <div className="relative aspect-[16/9] w-full h-12">
            </div>
            <div className="p-8">
              <h2 className="text-4xl text-mint-dark font-bold leading-tight md:text-5xl lg:text-6xl">
                Hear From Our <br />
                Satisfied Clients <br />
                Have To Say ❤️
              </h2>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${testimonial.bgColor} ${testimonial.borderColor ? 'border-2' : ''} 
                overflow-hidden rounded-[2rem] shadow-lg transition-transform hover:scale-105`}
            >
              <div className="p-6">
                <div className="mb-4 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-5 w-5 ${testimonial.textColor}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className={`mb-6 text-lg ${testimonial.textColor}`}>
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className={`font-semibold ${testimonial.textColor}`}>
                      {testimonial.author}
                    </h4>
                    <p className={`text-sm ${testimonial.textColor} opacity-80`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 overflow-hidden rounded-[2rem] bg-forest-light p-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <h3 className="text-3xl font-bold text-[#98FFB3]">Are u The Next One!</h3>
            <button
              className="rounded-full bg-[#98FFB3] px-8 py-3 font-semibold text-[#0B3B2D] 
                transition-colors hover:bg-white"
                onClick={() => {window.location.href = '/form'}}
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

