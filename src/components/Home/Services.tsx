import { Box, Building2, Film, Palette } from "lucide-react"

const services = [
  {
    title: 'Video Editing',
    description: 'Professional video editing to bring your vision to life.',
    icon: Film,
  },
  {
    title: 'Color Grading',
    description: 'Enhance your footage with expert color correction and grading.',
    icon: Palette,
  },
  {
    title: 'Motion Graphics & Animation',
    description: 'Captivating motion graphics and animations to elevate your content.',
    icon: Box,
  },
  {
    title: 'Corporate/Commercial Editing',
    description: 'Polished editing for corporate videos and commercials.',
    icon: Building2,
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white" id="services">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-light mb-6">
          Services
        </h2>
        <p className="text-lg text-forest/80 mb-12">
          Our streamlined process is designed to save you time and hassle, allowing you to focus on what
          matters most while we take care of the video production details
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border text-forest-light hover:text-mint-dark border-[#0B3B2D] p-6 rounded-lg transition-all duration-300 hover:bg-forest-light group"
            >
              <div className="mb-4 w-16 h-16 mx-auto">
                <service.icon className="w-12 h-12  mb-4" />

              </div>
              <h3 className="text-xl font-semibold text-forest-light mb-2 text-center group-hover:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center group-hover:text-[#a3cfbe]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

