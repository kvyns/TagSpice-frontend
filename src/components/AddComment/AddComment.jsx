import React, { useState } from 'react';

function AddComment({setRefreshKey}) {
  const [comment, setComment] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://tag-spice-backend-tuhinanshumodgil-tuhinanshu-modgils-projects.vercel.app/comment/save-comment", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        commentBody: comment
      })

    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // const contentType = response.headers.get("content-type");
        // if (contentType && contentType.indexOf("application/json") !== -1) {
        //   return response.json();
        // } else {
          return response.text();
        // }
      })
      .then(data => {
        console.log('Comment saved:', data);
        setComment('');
        setRefreshKey((prev) => (prev+1)
        )
      })
      .catch(error => {
        console.error('Error saving comment:', error);
      });
  };

  return (
    <div className='mt-4'>
      <form onSubmit={handleSubmit}>
        <label className='align-middle' >
          <textarea
            className='rounded-md px-2 p-2'
            type="text"
            cols={50}
            rows={1}
            name="comments"
            id="comments"
            placeholder="Add new comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </label>
        <button className = "rounded-md bg-blue-500 hover:bg-blue-600 text-white mx-5 p-2" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddComment;
