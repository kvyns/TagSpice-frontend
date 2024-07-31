import React, { useState } from 'react';

function TableElement({ data, deleteComment, updateComment}) {
  const [editable, setEditable] = useState(false)
  const entry = data;
  const [editedComment, setEditedComment] = useState(entry.commentBody)

  return (
    <>
      <div className="group">
        <div className='flex flex-col bg-gray-950 rounded-md my-2 p-2 group-hover:shadow-[0_5px_9px_1px_rgba(168,168,168,0.3)]'>
          <div className="flex justify-between items-center">
            <div className='flex flex-wrap'>
              {entry.tags.map((tag, index) => (
                <div key={index} className={(tag === "negative") ? "bg-red-900 hover:bg-red-700 rounded-md m-2 p-2 w-min text-xs" : (tag === "positive") ? "bg-green-900 hover:bg-green-700 rounded-md m-2 p-2 w-min text-xs" : "bg-yellow-900 hover:bg-yellow-700 rounded-md m-2 p-2 w-min text-xs"}>
                  #{tag}
                </div>
              ))}
            </div>
            <div className="flex space-x-2">
              <button 
              onClick={()=>{
                if(editable){
                    updateComment(entry._id, editedComment)
                }

                setEditable((prev)=>(!prev))}}
              className="rounded-md bg-blue-500 hover:bg-blue-600 text-xs text-white p-2">{editable? "Save" : "Edit"}</button>
              <button 
                className="rounded-md bg-red-500 hover:bg-red-600 text-xs text-white p-2"
                onClick={() => deleteComment(entry._id)}
              >
                Delete
              </button>
            </div>
          </div>
          <div className='bg-gray-900 rounded-md m-2 p-2'>
            <label>
                <input 
                className = "bg-gray-900 w-full"
                disabled = {!editable}
                onChange = {(e)=>setEditedComment(e.target.value)}
                value = {editedComment}/>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default TableElement;
