import { useState, useEffect } from 'react'
import './index.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [headerVisible, setHeaderVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHeaderVisible(false)
      } else {
        setHeaderVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Olive & Avery color palette
  const colors = {
    sage: '#8B9A7B',
    sageLight: '#A8B89A',
    sageDark: '#6B7A5B',
    cream: '#F5F2ED',
    creamDark: '#EDE8E0',
    beige: '#D4C8B8',
    brown: '#8B7355',
    charcoal: '#4A4A4A'
  }

  const categories = [
    { name: 'LIVE ROSIN', image: 'https://images.unsplash.com/photo-1603909223429-69bb7101f420?w=400&h=400&fit=crop' },
    { name: 'ICE HASH', image: 'https://images.unsplash.com/photo-1543642178-9b3e6f9e9c76?w=400&h=400&fit=crop' },
    { name: 'FRESH FROZEN', image: 'https://images.unsplash.com/photo-1515446134809-993c501ca304?w=400&h=400&fit=crop' },
    { name: 'FULL MELT', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop' }
  ]

  const products = [
    {
      id: 1,
      name: 'Premium Live Rosin',
      price: '$65.00',
      image: 'https://i.pinimg.com/1200x/6b/3c/34/6b3c341670c8860414f7982a74ebe5f8.jpg',
      tag: 'Best Seller'
    },
    {
      id: 2,
      name: 'Live Rosin Sauce',
      price: '$75.00',
      image: '/1000002375.png',
      tag: 'New'
    },
    {
      id: 3,
      name: 'Diamond Live Rosin',
      price: '$85.00',
      image: 'https://i.pinimg.com/1200x/58/37/4b/58374b3b5d665d38a7c4d27d99d8df8d.jpg',
      tag: 'Premium'
    },
    {
      id: 4,
      name: 'Live Rosin Badder',
      price: '$70.00',
      image: 'https://i.pinimg.com/1200x/51/81/12/51811274baa4132d1bf29367021fe6a1.jpg',
      tag: null
    }
  ]

  const features = [
    { icon: <svg className="w-8 h-8 mx-auto" viewBox="0 0 24 24" fill="none" stroke={colors.brown} strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>, title: '100% Organic', desc: 'Grown without pesticides' },
    { icon: <svg className="w-8 h-8 mx-auto" viewBox="0 0 24 24" fill="none" stroke={colors.brown} strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>, title: 'Sustainable', desc: 'Eco-friendly methods' },
    { icon: <svg className="w-8 h-8 mx-auto" viewBox="0 0 24 24" fill="none" stroke={colors.brown} strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, title: 'CA Made', desc: 'Locally crafted' }
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.cream }}>
      {/* Elegant Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${headerVisible ? 'translate-y-0' : '-translate-y-full'}`}
        style={{ 
          backgroundColor: scrollY > 50 ? 'rgba(245, 242, 237, 0.95)' : 'transparent',
          backdropFilter: scrollY > 50 ? 'blur(10px)' : 'none'
        }}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/1000000472-removebg-preview.png"
                alt="Next Leaf Logo"
                className="w-20 h-20 object-contain"
              />
            </div>

            {/* Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity"
                  style={{ color: colors.charcoal }}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:opacity-70 transition-opacity">
                <svg className="w-5 h-5" style={{ color: colors.charcoal }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="p-2 hover:opacity-70 transition-opacity relative">
                <svg className="w-5 h-5" style={{ color: colors.charcoal }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span 
                  className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-xs flex items-center justify-center text-white"
                  style={{ backgroundColor: colors.sage }}
                >
                  2
                </span>
              </button>
              <button 
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-5 h-5" style={{ color: colors.charcoal }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col space-y-3">
                {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-sm tracking-widest uppercase py-2"
                    style={{ color: colors.charcoal }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section - Olive & Avery Style */}
      <section id="home" className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div 
            className="relative rounded-[3rem] overflow-hidden p-8 md:p-16"
            style={{ backgroundColor: colors.sageLight }}
          >
            {/* Decorative leaf shapes */}
            <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
              <svg viewBox="0 0 100 100" fill="white">
                <path d="M50 0 C20 0 0 30 0 60 C0 85 20 100 50 100 C80 100 100 85 100 60 C100 30 80 0 50 0 Z" />
              </svg>
            </div>
            <div className="absolute bottom-0 right-0 w-48 h-48 opacity-20">
              <svg viewBox="0 0 100 100" fill="white">
                <path d="M50 0 C20 0 0 30 0 60 C0 85 20 100 50 100 C80 100 100 85 100 60 C100 30 80 0 50 0 Z" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                <p 
                  className="text-sm tracking-widest uppercase mb-4"
                  style={{ color: 'rgba(255,255,255,0.8)' }}
                >
                  Premium Organic
                </p>
                <h1 
                  className="font-serif text-4xl md:text-6xl leading-tight mb-6"
                  style={{ color: 'white' }}
                >
                  Nature's Finest
                  <br />
                  <span className="italic">Cannabis</span>
                </h1>
                <p className="text-white/80 mb-8 max-w-md">
                  Fresh frozen live extracts. Solventless hash and rosin crafted with care in California.
                </p>
                <button 
                  className="px-8 py-4 rounded-full text-sm tracking-widest uppercase transition-all hover:scale-105"
                  style={{ 
                    backgroundColor: colors.charcoal,
                    color: 'white'
                  }}
                >
                  Shop Now
                </button>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div 
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl"
                  style={{ border: `8px solid ${colors.cream}` }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1603909223429-69bb7101f420?w=600&h=600&fit=crop"
                    alt="Cannabis plant"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories - Olive & Avery Style */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['LIVE ROSIN', 'ICE HASH', 'FRESH FROZEN', 'FULL MELT'].map((cat, idx) => (
              <div 
                key={idx}
                className="aspect-square flex items-center justify-center cursor-pointer transition-all hover:scale-[1.02]"
                style={{ 
                  backgroundColor: idx % 4 === 0 ? colors.sage : idx % 4 === 1 ? colors.sageLight : idx % 4 === 2 ? colors.sageDark : colors.charcoal
                }}
              >
                <span 
                  className="text-sm tracking-[0.2em] font-medium text-center px-4 text-white"
                >
                  {cat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect Gift Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div 
            className="rounded-[3rem] p-8 md:p-16 relative overflow-hidden"
            style={{ backgroundColor: colors.creamDark }}
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <p 
                  className="text-sm tracking-widest uppercase mb-4"
                  style={{ color: colors.sageDark }}
                >
                  Discover
                </p>
                <h2 
                  className="font-serif text-3xl md:text-5xl mb-6"
                  style={{ color: colors.charcoal }}
                >
                  The Perfect
                  <br />
                  <span className="italic">Extract</span>
                </h2>
                <p className="mb-8" style={{ color: colors.brown }}>
                  Premium solventless concentrates for the discerning connoisseur. Experience the purest form of cannabis.
                </p>
                <button 
                  className="px-8 py-3 rounded-full text-sm tracking-widest uppercase border-2 transition-all hover:bg-opacity-10"
                  style={{ 
                    borderColor: colors.sage,
                    color: colors.sage
                  }}
                >
                  Explore
                </button>
              </div>
              <div className="md:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  <div 
                    className="aspect-[3/4] rounded-2xl overflow-hidden"
                    style={{ backgroundColor: colors.sage }}
                  >
                    <img 
                      src="https://i.pinimg.com/1200x/53/b5/ef/53b5efb2a3c01e3c9c1f27dc16cef785.jpg"
                      alt="Premium cannabis extract"
                      className="w-full h-full object-cover opacity-90"
                    />
                  </div>
                  <div 
                    className="aspect-[3/4] rounded-2xl overflow-hidden mt-8"
                    style={{ backgroundColor: colors.sageLight }}
                  >
                    <img 
                      src="https://i.pinimg.com/1200x/13/13/2b/13132bd6df5949e4386defdbf247a207.jpg"
                      alt="Cannabis extract product"
                      className="w-full h-full object-cover opacity-90"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our New Favorites */}
      <section id="shop" className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p 
              className="text-sm tracking-widest uppercase mb-3"
              style={{ color: colors.sageDark }}
            >
              Shop
            </p>
            <h2 
              className="font-serif text-3xl md:text-4xl"
              style={{ color: colors.charcoal }}
            >
              Our New <span className="italic">Favorites</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div 
                  className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4"
                  style={{ backgroundColor: colors.creamDark }}
                >
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {product.tag && (
                    <span 
                      className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs tracking-wider"
                      style={{ 
                        backgroundColor: colors.sage,
                        color: 'white'
                      }}
                    >
                      {product.tag}
                    </span>
                  )}
                  <button 
                    className="absolute bottom-3 left-3 right-3 py-3 rounded-full text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ 
                      backgroundColor: colors.charcoal,
                      color: 'white'
                    }}
                  >
                    Quick Add
                  </button>
                </div>
                <h3 
                  className="text-sm mb-1"
                  style={{ color: colors.charcoal }}
                >
                  {product.name}
                </h3>
                <p 
                  className="text-sm font-medium"
                  style={{ color: colors.sageDark }}
                >
                  {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Row */}
      <section className="py-12 px-6 border-t border-b" style={{ borderColor: colors.creamDark }}>
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center max-w-xs">
                <div className="mb-3">
                  {feature.icon}
                </div>
                <h4 
                  className="text-sm font-medium mb-1"
                  style={{ color: colors.charcoal }}
                >
                  {feature.title}
                </h4>
                <p 
                  className="text-xs"
                  style={{ color: colors.brown }}
                >
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <p 
            className="text-sm tracking-widest uppercase mb-4"
            style={{ color: colors.sageDark }}
          >
            Our Story
          </p>
          <h2 
            className="font-serif text-3xl md:text-4xl mb-6"
            style={{ color: colors.charcoal }}
          >
            Cultivating <span className="italic">Excellence</span>
          </h2>
          <p 
            className="leading-relaxed mb-8"
            style={{ color: colors.brown }}
          >
            Next Leaf Cannabis is an organic cannabis company providing high quality, fresh frozen live extract hash and rosin. 
            We're focused on providing you the best quality and cleanest products. We are based out of California and look 
            forward to expanding to multiple States.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['100% Organic', 'Solventless', '6-Star Full Melt'].map((tag) => (
              <span 
                key={tag}
                className="px-4 py-2 rounded-full text-xs tracking-wider"
                style={{ 
                  backgroundColor: colors.sageLight,
                  color: 'white'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div 
            className="rounded-[3rem] p-8 md:p-12"
            style={{ backgroundColor: colors.sage }}
          >
            <div className="text-center mb-8">
              <h2 
                className="font-serif text-3xl text-white mb-2"
              >
                Get in Touch
              </h2>
              <p className="text-white/80">
                We'd love to hear from you
              </p>
            </div>

            <div className="flex flex-col items-center space-y-8 text-center text-white">
              <div>
                <div 
                  className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="text-sm">1-888-581-4899</p>
              </div>
              <div>
                <div 
                  className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm">ryan@nextleafcannabis.com</p>
              </div>
              <div>
                <div 
                  className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <p className="text-sm">California</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6" style={{ backgroundColor: colors.charcoal }}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-2xl backdrop-blur-md" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
                  <img 
                    src="/1000000472-removebg-preview.png"
                    alt="Next Leaf Logo"
                    className="w-24 h-24 object-contain"
                  />
                </div>
              </div>
              <p className="text-white/60 text-sm">
                Premium organic cannabis extracts.
              </p>
            </div>
            <div>
              <h4 className="text-white text-sm mb-4">Shop</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Live Rosin</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ice Hash</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fresh Frozen</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Full Melt</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm mb-4">Company</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Wholesale</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm mb-4">Connect</h4>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/40 text-sm">
              © 2024 Next Leaf Cannabis. All rights reserved.
            </p>
            <p className="text-white/40 text-sm">
              nextleafcannabis.com
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
