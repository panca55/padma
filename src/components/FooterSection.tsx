import logo from '../assets/clients/logo.png';
function FooterSection() {
  return (
    <footer className="bg-gray-900/95 dark:bg-black/95 backdrop-blur-lg text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8" data-aos="fade-up">
            <div>
            <img src={logo} alt="Logo Padma Raharja Sentosa" style={{ width: '80px', height: '80px' }} className="mb-4"/>

              <p className="text-gray-400">
                PT Padma Raharja Sentosa<br />
                Trusted and Excellent Partner<br />
                since 2020
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition">Home</a></li>
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#services" className="hover:text-white transition">Services</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Business Process Outsourcing</li>
                <li>Man Power Outsourcing</li>
                <li>Headhunter Services</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400" data-aos="fade-up" data-aos-delay="200">
            <p>&copy; 2020 PT Padma Raharja Sentosa. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default FooterSection
