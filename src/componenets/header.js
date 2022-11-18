import React from 'react'


const header = () => {
  return (
    <div>
        <div className=' flex flex-row '>
            <img src="https://images.pexels.com/photos/14059675/pexels-photo-14059675.jpeg?cs=srgb&dl=pexels-leonardo-dourado-14059675.jpg&fm=jpg&_gl=1*1bbtpd7*_ga*NDQ4MDA1MDYuMTY2ODc1NjIyNA..*_ga_8JE65Q40S6*MTY2ODc1NjIyNC4xLjEuMTY2ODc1NzM3NS4wLjAuMA.." className="w-10 h-10 mr-4 rounded-full"></img>
            <div className=''>
                <p className=' font-bold'>Wade Warren</p>
                <p className='text-slate-500'>July 17, 2018</p>
            </div>
      </div>
    </div>
  )
}

export default header