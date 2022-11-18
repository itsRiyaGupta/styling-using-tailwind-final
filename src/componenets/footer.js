import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import {faSmile} from "@fortawesome/free-regular-svg-icons";

const footer = () => {
  return (
    <div>
      <div className="mb-10">

            <div className="bg-blue-100 rounded-lg h-12 ">
            <input
                type="text"
                className="bg-blue-100 my-4 text-left  pl-2 placeholder-black outline-none border-none w-72 "
                placeholder="Write a comment"
            ></input>
            <FontAwesomeIcon icon={faSmile} className="pt-2  "/>
            <FontAwesomeIcon icon={faPaperPlane} className="pt-2 text-blue-500 px-2"/>
            </div>

            {/* <div> */}
            <div className="pt-6">
                <div className="mt-2 flex flex-row ">
                    <img
                        src="https://images.pexels.com/photos/14059683/pexels-photo-14059683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="w-10 h-10 mr-4 rounded-full"
                    ></img>
                    <div className="">
                        
                        <div className="flex"><h2 className='font-bold'>Leslie Alexander</h2><span className="ml-2 text-slate-500">25 minutes ago</span></div>
                        <p className='font-semibold'>It is a  layout. The point of u .</p>
                        <div>
                        <FontAwesomeIcon icon={faHeart} className="text-red-500 mr-2" />  <span className='mt-4 font-bold mr-4'>12</span><span className='mt-4 font-bold'>Reply</span></div>
                           
                            
                        
                    </div>
                </div>

                <div>
                    <div className="mt-2 flex pt-4 flex-row ">
                         <img
                            src="https://images.pexels.com/photos/9763639/pexels-photo-9763639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            className="w-10 h-10 mr-4 rounded-full"
                        ></img>
                        <div>
                            <div className="flex"><h2 className='font-bold'>Tina Mills</h2><span className="ml-2 text-slate-500">25 minutes ago</span></div>
                            <p className='font-semibold'>It is a  layout. The point of u .</p>
                            <div>
                        <FontAwesomeIcon icon={faHeart} className="text-red-500 mr-2" />  <span className='mt-4 font-bold mr-4'>2</span><span className='mt-4 font-bold'>Reply</span></div>
                        </div>
                   </div>
                </div>
            </div>
            {/* </div> */}

        </div>

        <div className="bg-blue-100 my-4 text-center py-2 placeholder-black  text-bold w-full  h-10 rounded-lg">
            <div>Show more comments</div>
        </div>

    </div>
  );
};

export default footer;
