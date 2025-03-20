
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">P</div>
          PurpleBank
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/personal" 
            className={`hover:text-primary hover-underline-animation font-medium ${
              location.pathname === '/personal' ? 'text-primary' : 'text-gray-700'
            }`}
          >
            Personal
          </Link>
          <Link 
            to="/investments" 
            className={`hover:text-primary hover-underline-animation font-medium ${
              location.pathname === '/investments' ? 'text-primary' : 'text-gray-700'
            }`}
          >
            Investments
          </Link>
          <Link 
            to="/loans" 
            className={`hover:text-primary hover-underline-animation font-medium ${
              location.pathname === '/loans' ? 'text-primary' : 'text-gray-700'
            }`}
          >
            Loans
          </Link>
          <Link 
            to="/about" 
            className={`hover:text-primary hover-underline-animation font-medium ${
              location.pathname === '/about' ? 'text-primary' : 'text-gray-700'
            }`}
          >
            About
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="rounded-lg">Log In</Button>
          <Button className="rounded-lg">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden py-0"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex flex-col space-y-4">
          <Link 
            to="/personal" 
            className={`hover:text-primary py-2 font-medium ${
              location.pathname === '/personal' ? 'text-primary' : 'text-gray-700'
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Personal
          </Link>
          <Link 
            to="/investments" 
            className={`hover:text-primary py-2 font-medium ${
              location.pathname === '/investments' ? 'text-primary' : 'text-gray-700'
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Investments
          </Link>
          <Link 
            to="/loans" 
            className={`hover:text-primary py-2 font-medium ${
              location.pathname === '/loans' ? 'text-primary' : 'text-gray-700'
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Loans
          </Link>
          <Link 
            to="/about" 
            className={`hover:text-primary py-2 font-medium ${
              location.pathname === '/about' ? 'text-primary' : 'text-gray-700'
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <div className="flex flex-col space-y-3 pt-2">
            <Button variant="outline" className="w-full rounded-lg">Log In</Button>
            <Button className="w-full rounded-lg">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
