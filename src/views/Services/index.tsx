import React from 'react'
import Card from '@/components/Card'

const Services = () => {
  const services = [
    { lineClamp: 5 },
    { lineClamp: 4 },
    { lineClamp: 3 },
    { lineClamp: 2 },
    { lineClamp: 5 },
    { lineClamp: 4 },
    { lineClamp: 3 },
    { lineClamp: 2 },
    { lineClamp: 5 },
    { lineClamp: 4 },
    { lineClamp: 3 },
    { lineClamp: 2 },
  ]

  return (
    <div className='container py-10'>
      <h2 className='text-title1 font-bold uppercase text-center mb-4 text-gray-900'>Dịch vụ chúng tôi cung cấp</h2>
      <div className='columns-4 gap-4'>
        {services.map((service, index) => (
          <div key={index} className='break-inside-avoid mb-4'>
            <Card 
              lineClamp={service.lineClamp}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
