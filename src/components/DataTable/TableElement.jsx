import React, { useState } from 'react';
import{
    PencilIcon,
    TrashIcon
} from '@heroicons/react/24/outline'

function TableElement({ data, deleteComment, updateComment}) {
  const [editable, setEditable] = useState(false)
  const entry = data;
  const [editedComment, setEditedComment] = useState(entry.commentBody)

  return (
    // <>
    //   <div className="group">
    //     <div className='flex flex-col bg-gray-950 rounded-md my-2 p-2 group-hover:shadow-[0_5px_9px_1px_rgba(168,168,168,0.3)]'>
    //       <div className="flex justify-between items-center">
    //         <div className='flex flex-wrap'>
            //   {entry.tags.map((tag, index) => (
            //     <div key={index} className={(tag === "negative") ? "bg-red-900 hover:bg-red-700 rounded-md m-2 p-2 w-min text-xs" : (tag === "positive") ? "bg-green-900 hover:bg-green-700 rounded-md m-2 p-2 w-min text-xs" : "bg-yellow-900 hover:bg-yellow-700 rounded-md m-2 p-2 w-min text-xs"}>
            //       #{tag}
            //     </div>
            //   ))}
    //         </div>
    //         <div className="flex space-x-2">
            //   <button 
            //   onClick={()=>{
            //     if(editable){
            //         updateComment(entry._id, editedComment)
            //     }

            //     setEditable((prev)=>(!prev))}}
            //   className="rounded-md bg-blue-500 hover:bg-blue-600 text-xs text-white p-2">{editable? "Save" : "Edit"}</button>
    //           <button 
    //             className="rounded-md bg-red-500 hover:bg-red-600 text-xs text-white p-2"
    //             onClick={() => deleteComment(entry._id)}
    //           >
    //             Delete
    //           </button>
    //         </div>
    //       </div>
    //       <div className='bg-gray-900 rounded-md m-2 p-2'>
    //         <label>
    //             <input 
    //             className = "bg-gray-900 w-full"
    //             disabled = {!editable}
    //             onChange = {(e)=>setEditedComment(e.target.value)}
    //             value = {editedComment}/>
    //         </label>
    //       </div>
    //     </div>
    //   </div>
    // </>

    <>
      <div className=" bg-card-bg outline outline-gray-800 hover:outline-gray-600 hover:outline-offset-1 outline-4 rounded-lg p-2 m-4 text-white">
        <div className="grid grid-cols-4 gap-2 grid-flow-row justify-items-end">
          <div className="grid grid-flow-row grid-cols-3 justify-self-start col-span-3 gap-2">
          {entry.tags.map((tag, index) => (
                <div key={index} className={(tag === "negative") ? "bg-red-800 outline outline-red-600 rounded-full px-2 py-1 w-min text-xs text-white text-center" : (tag === "positive") ? "bg-green-800 outline outline-green-600  rounded-full px-2 py-1 w-min text-xs text-white text-center" : "bg-red-800 outline outline-red-600 rounded-full px-2 py-1 w-min text-xs text-white text-center"}>
                  #{tag}
                </div>
              ))}
            {/* <div className="bg-green-800 outline outline-green-600  rounded-full px-2 py-1 w-min text-xs text-white text-center">
              #positive
            </div>
            <div className="bg-red-800 outline outline-red-600 rounded-full px-2 py-1 w-min text-xs text-white text-center">
              #negative
            </div> */}
          </div>
            <div className="grid grid-cols-2 pr-2 gap-3">
                {/* Edit Comment Button */}
                
                <div className="">
                    <button onClick={()=>{
                    if(editable){
                    updateComment(entry._id, editedComment)
                }
                setEditable((prev)=>(!prev))}}>
                    {editable? "Save" : <PencilIcon className="h-5 hover:stroke-blue-800"/>}
                </button></div>
                {/* Delete Comment Button */}
                <div className=""><button onClick={() => deleteComment(entry._id)}>
                <TrashIcon className="h-5 hover:fill-red-500 hover:stroke-red-800"/>
              </button></div>
            </div>
        </div>
        <hr className="mt-3 border-0 bg-gray-800 h-0.5 rounded"/>
        <div className="text-white p-2 text-justify">
        <label>
            <input 
                className = "bg-transparent w-full"
                disabled = {!editable}
                onChange = {(e)=>setEditedComment(e.target.value)}
                value = {editedComment}/>
            </label>
        </div>
      </div>
    </>
  );
}

export default TableElement;
