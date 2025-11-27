import { Mail, MapPin, Phone } from 'lucide-react'

function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Let's Grow Together!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12" data-aos="fade-up" data-aos-delay="200">
              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Head Office</h3>
                
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Address</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Ruko Harvest Bintaro, Blok R No.9,<br />
                      Jl. Merpati Raya, Sawah Lama,<br />
                      Tangerang Selatan, Banten, 15413
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-400">(021) 7486 7140</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400">prs@padmaraharjasentosa.com</p>
                  </div>
                </div>

                <div className="pt-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Other Offices</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <div>• Surabaya</div>
                    <div>• Medan</div>
                    <div>• Bandung</div>
                    <div>• Bekasi</div>
                    <div>• Semarang</div>
                    <div>• Kediri</div>
                    <div>• Yogyakarta</div>
                    <div>• Jember</div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 p-8 rounded-xl shadow-2xl" data-aos="fade-up" data-aos-delay="200">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a message</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button
                    onClick={() => alert('Form submitted! In production, this would send your message.')}
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
      </section>
  )
}

export default ContactSection
