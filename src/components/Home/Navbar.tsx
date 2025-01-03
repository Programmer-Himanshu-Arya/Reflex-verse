// import { Menu } from 'lucide-react';

// export default function Navbar() {
//   return (
//     <nav className="fixed w-full bg-forest-light/90 backdrop-blur-sm z-50 overflow-auto">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           <div className="flex items-center">
//             <a href="#">
//               <img src="/logo.png" className='w-56' alt="" />
//             </a>
//           </div>

//           <div className="hidden md:flex items-center space-x-8">
//             <a href="#how-it-works" className="text-mint/80 hover:text-mint-dark transition-colors">How it works</a>
//             <a href="#portfolio" className="text-mint/80 hover:text-mint-dark transition-colors">Portfolio</a>
//             <button className="bg-mint-dark text-forest-light px-6 py-2 rounded-lg hover:bg-mint-dark transition-all duration-300 font-medium" onClick={() => { window.location.href = '/form' }}>
//               Start Your Project
//             </button>
//           </div>

//           <div className="md:hidden">
//             <Menu className="h-6 w-6 text-mint-dark" />
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }



import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav className="bg-forest-light shadow-lg fixed w-full top-[-1px] z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and brand */}
            <div className="flex-shrink-0">
              {/* <span className="text-white text-xl font-bold">Brand</span> */}
              <a href="#">
                <img src="/logo.png" className='w-56' alt="" />
              </a>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-mint/80 hover:text-mint-dark transition-colors">How it works</a>
              <a href="#portfolio" className="text-mint/80 hover:text-mint-dark transition-colors">Portfolio</a>
              <button className="bg-mint-dark text-forest-light px-6 py-2 rounded-lg hover:bg-mint-dark transition-all duration-300 font-medium" onClick={() => { window.location.href = '/form' }}>
                Start Your Project
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-emerald-100 hover:text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X size={24} /> : <Menu size={24} color='#7AE695' />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile menu panel */}
        <div
          className={`fixed top-0 right-0 w-full h-full bg-forest-light transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="absolute top-0 right-0 p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center p-2 rounded-md text-emerald-100 hover:text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Close menu</span>
              <X size={32} />
            </button>
          </div>
          <div className="h-full flex flex-col pt-20 pb-6 space-y-6 justify-center">
            <div className="px-4 space-y-1 overflow-scroll">
              <ul className='text-6xl text-center flex flex-col gap-10 mb-12'>
                <li><a onClick={() => setIsOpen(false)} href="#how-it-works" className="text-mint/80 hover:underline transition-colors">How it works</a></li>
                <li><a onClick={() => setIsOpen(false)} href="#services" className="text-mint/80 hover:underline transition-colors">Services</a></li>
                <li><a onClick={() => setIsOpen(false)} href="#portfolio" className="text-mint/80 hover:underline transition-colors">Portfolio</a></li>
                <li><a onClick={() => setIsOpen(false)} href="#testimonials" className="text-mint/80 wrap hover:underline transition-colors">Testi-monials</a></li>
                <li><a onClick={() => setIsOpen(false)} href="#contact" className="text-mint/80 hover:underline transition-colors">Contact Us</a></li>
              </ul>
              <button className="bg-mint-dark text-3xl w-full min-h-20 text-forest-light px-6 py-2 rounded-lg hover:bg-mint-dark transition-all duration-300 font-medium" onClick={() => { window.location.href = '/form' }}>
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;