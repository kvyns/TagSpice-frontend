import React, { useEffect, useId, useState } from "react";
import{
    BarsArrowUpIcon,
    BarsArrowDownIcon
}
from '@heroicons/react/24/outline'
import TableElement from "./TableElement";

function DataTable({data, setDeleted}) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(true)
  const [filterData, setFilterData] = useState(data.data)

  const handleSort = (column) => {
    if(sort === true){
        const sortedData = [...filterData].sort((a, b) =>
            a[column].toString().localeCompare(b[column])
          )
          setFilterData(sortedData)
          setSort((sort)=>(!sort))
    }
    else{
        const sortedData = [...filterData].sort((a, b) =>
            b[column].toString().localeCompare(a[column])
          )
          setFilterData(sortedData)
          setSort((sort)=>(!sort))
    }
  }

  const deleteComment = (commentID)=>{
    fetch(`https://tag-spice-backend-hz2vfqdjq-tuhinanshu-modgils-projects.vercel.app/comment/delete-comment/${commentID}`, {
      method : "DELETE"
    }).then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        return response.json();
      } else {
        return response.text();
      }
    })
    .then(data => {
      console.log(`Deleted ${commentID}.`)
      setDeleted((prev) => (prev+1)
      )
    })
    .catch(error => {
      console.error('Error saving comment:', error);
    })
  }

  const updateComment = (commentID, updatedComment)=>{
    fetch(`https://tag-spice-backend-hz2vfqdjq-tuhinanshu-modgils-projects.vercel.app/comment/edit-comment/${commentID}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        commentBody: updatedComment
      })

    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          return response.json();
        } else {
          return response.text();
        }
      })
      .then(data => {
        console.log('Comment updated:', data);
        // setRefreshKey((prev) => (prev+1)
        // )
      })
      .catch(error => {
        console.error('Error updating comment:', error);
      });
  }

  useEffect(() => {
    const newArr = data.data.filter(
      (data) => (data.commentBody.toLowerCase().includes(search) || data.tags.toString().toLowerCase().includes(search))
      // (data)=>(console.log(data))

    );
    setFilterData(newArr);
  }, [search, setSearch, data]);

  return (
    <div>
      <label className="flex justify-start">
        <input
          className="bg-white rounded-md p-2 text-xs"
          placeholder="Search the store"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>

      <table className="p-2 mt-2 text-sm text-white">
        <thead>
          <tr className="rounded-md flex space-x-5 bg-slate-500 p-2 text-center">
            <th className="flex flex-row justify-center content-center w-60">
              <span>Tags</span>
              <button className="text-white ml-2 mt-1.5" onClick={() => handleSort('tags')}>
                {sort ? <BarsArrowDownIcon className="h-4 w-4"/> : <BarsArrowUpIcon className="h-4 w-4"/>}
              </button>
            </th>
            <th className="flex flex-row justify-center content-center w-60">
              Comments
              <button className="text-white ml-2 mt-1.5" onClick={() => handleSort('commentBody')}>
              {sort ? <BarsArrowDownIcon className="h-4 w-4"/> : <BarsArrowUpIcon className="h-4 w-4"/>}
              </button>
            </th>
            <th className="flex flex-row justify-center content-center w-40">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((entry) => (
            <TableElement key = {entry._id} data = {entry} deleteComment={deleteComment} updateComment={updateComment}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
