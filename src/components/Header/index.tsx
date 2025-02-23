import React from 'react'
import Link from 'next/link'
import { Phone } from '@mui/icons-material'

const Header = () => {
  const navLinks = [
    // { href: '/', label: 'Trang chủ' },
    { href: '/gioi-thieu', label: 'Giới thiệu' },
    { href: '/dich-vu', label: 'Dịch vụ' },
    { href: '/san-pham', label: 'Sản phẩm' },
    { href: '/du-an', label: 'Dự án' },
    { href: '/lien-he', label: 'Liên hệ' },
  ];

  return (
    <div className='sticky top-0 z-50 border-b border-gray-800 backdrop-blur-md'>
      <div className='flex items-center justify-between py-4 container mx-auto max-w-screen-xl'>
        {/* <Image src={logo} alt='logo' width={100} height={100} /> */}
        <Link href='/' className='w-10 h-10 bg-black rounded-full'></Link>
        <div className='flex items-center gap-6'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='text-gray-800 hover:text-gray-600 font-bold transition-colors uppercase'
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="tel:0909090909" 
            className='py-2 px-4 rounded-full bg-gray-400 hover:bg-gray-500 text-gray-800 hover:text-white font-bold transition-all duration-300 hover:shadow-lg hover:scale-105'
          >
            <div className="flex items-center gap-2">
              <Phone fontSize="small" className="animate-bounce" />
              <p>0909090909</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
