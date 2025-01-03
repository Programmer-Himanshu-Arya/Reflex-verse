import { Mail } from 'lucide-react'

export default function ContactSection() {
    return (
        <section className="w-full bg-white py-16" id="contact">
            <div className="container mx-auto max-w-6xl px-4">
                {/* Header with Arrows */}
                <div className="relative mb-12 text-center">
                    <h1 className="text-5xl font-bold text-forest-light md:text-6xl">Contact Us</h1>
                    <p className="mt-4 text-gray-600">
                        Let's discuss your project and see how we can help you grow your business
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Contact Form */}
                    <div className="lg:col-span-2 text-forest-light">
                        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full rounded-2xl border bg-white p-4 focus:outline-forest-light"
                            />
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full rounded-2xl border bg-white p-4 focus:outline-forest-light"
                            />
                            <textarea
                                placeholder="Message"
                                rows={6}
                                className="w-full rounded-2xl border bg-white p-4 focus:outline-forest-light"
                            />
                            <button
                                type="submit"
                                className="rounded-2xl bg-forest-light px-8 py-4 text-[#98FFB3] transition-colors hover:bg-forest-light/90"
                            >
                                Submit Message
                            </button>
                        </form>
                    </div>

                    {/* Newsletter Section */}
                    <div className="rounded-2xl bg-forest-light p-8 flex flex-col items-center justify-center">
                        <Mail className="mb-4 h-8 w-8 text-[#98FFB3]" />
                        <div className="text-lg font-semibold text-[#98FFB3]">mail@influenca.id</div>
                        <p className="mt-2 text-[#98FFB3]/80">
                            We usually respond within 24 hours
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

