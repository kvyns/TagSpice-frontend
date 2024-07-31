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
      {filterData.map((entry) => (
            <TableElement key = {entry._id} data = {entry} deleteComment={deleteComment} updateComment={updateComment}/>
          ))}
    </div>
  );
}

export default DataTable;
