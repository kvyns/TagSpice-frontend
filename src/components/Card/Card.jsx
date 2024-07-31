import React from "react";
import{
    PencilIcon,
    TrashIcon
} from '@heroicons/react/24/outline'

function Card() {
  return (
    <>
      <div className=" bg-card-bg outline outline-gray-800 hover:outline-gray-600 hover:outline-offset-1 outline-4 rounded-lg p-2 m-4 text-white">
        <div className="grid grid-cols-4 grid-flow-row justify-items-end">
          <div className="grid grid-flow-row grid-cols-3 justify-self-start col-span-3 gap-2">
            <div className="bg-green-800 outline outline-green-600  rounded-full px-2 py-1 w-min text-xs text-white text-center">
              #positive
            </div>
            <div className="bg-red-800 outline outline-red-600 rounded-full px-2 py-1 w-min text-xs text-white text-center">
              #negative
            </div>
            <div className="bg-red-800 outline outline-red-600 rounded-full px-2 py-1 w-min text-xs text-white text-center">
              #suggestion
            </div>
            <div className="bg-red-800 outline outline-red-600 rounded-full px-2 py-1 w-min text-xs text-white text-center">
              #suggestion
            </div>
            <div className="bg-red-800 outline outline-red-600 rounded-full px-2 py-1 w-min text-xs text-white text-center">
              #suggestion
            </div>
            <div className="bg-red-800 outline outline-red-600 rounded-full px-2 py-1 w-min text-xs text-white text-center">
              #suggestion
            </div>
          </div>
            <div className="grid grid-cols-2 pr-2 gap-3">
                <div className=""><PencilIcon className="h-5 hover:stroke-blue-800"/></div>
                <div className=""><TrashIcon className="h-5 hover:fill-red-500 hover:stroke-red-800"/></div>
            </div>
        </div>
        <hr className="mt-3 border-0 bg-gray-800 h-0.5 rounded"/>
        <div className="text-white text-sm p-2 text-justify">
          The product lack basic finishing, the edges are very sharp and can
          cause injury, also the wiring is not properly insulated. The charging
          socket is made of very weak material.
        </div>
      </div>
    </>
  );
}

export default Card;
