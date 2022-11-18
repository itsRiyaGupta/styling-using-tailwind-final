import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {faSmile} from "@fortawesome/free-regular-svg-icons";

const body = () => {
  return (
    <div>
        <div className='my-4'>
            <h1 className='font-extrabold text-3xl'>Web Design templates</h1>
            <h1 className='font-extrabold text-3xl'>Selection</h1>
        </div>

      <div>
        <div className='grid grid-cols-3 gap-2'>
            <img src="https://images.pexels.com/photos/13737986/pexels-photo-13737986.jpeg?auto=compress&cs=tinysrgb&w=400" className="rounded-tl-lg"></img>
            <img src="https://images.pexels.com/photos/10981525/pexels-photo-10981525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
            <img src="https://images.pexels.com/photos/3288854/pexels-photo-3288854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-tr-lg"></img>
        </div>


        <div className='grid grid-cols-2 gap-2 mt-2 rounded'>
            <img src="https://images.pexels.com/photos/210012/pexels-photo-210012.jpeg" className="rounded-bl-lg"></img>
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-br-lg"></img>
        </div>
        
      </div>

      <div className='my-4'>
        <p className='font-semibold mb-3'>It is a  layout. The point of usin  distribution of letters, 'Content here, content here', making it look like readable English.</p>
        <FontAwesomeIcon icon={faHeart} className="text-red-500" /> <span className='mt-4 font-bold'>34</span>
      </div>
    </div>
  )
}

export default body