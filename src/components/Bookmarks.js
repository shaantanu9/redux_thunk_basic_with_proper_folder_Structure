//import {useState, useEffect,useRef} from 'react'
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeRequest } from "../redux/actions/creators";
import { getData } from "../api";
//import Bookmarks from './components/Bookmarks'
const Bookmarks = (props) => {
  // const [bookmarks, setBookmarks] = useState([]);
  const signal = new AbortController();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setlimit] = useState(10);
  const [hasMore, setHasMore] = useState(false);

  const dispatch = useDispatch();
  const { bookmarks, totalPages } = useSelector(
    (state) => state.bookmarkReducer
  );
  console.log(bookmarks, "bookmarks from BookMarkComponent");

  useEffect(() => {
    dispatch(makeRequest(limit, page));
    return () => {
      console.log("unmounted");
      signal.abort();
      console.log("aborted");
    };
  }, [page]);

  return (
    <>
      <p className="animate-bounce bg-indigo-700">
        Checking Bookmarks Component Working{" "}
      </p>
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      <p>This is page no {page}</p>
      <button
        disabled={1 == page}
        onClick={() => setPage((prev) => prev - 1)}
        className="px-1 m-1 rounded  border-2 border-blue-500 hover:bg-white hover:text-blue-500 text-white bg-blue-500"
      >
        Prev
      </button>
      <button
        disabled={totalPages == page}
        onClick={() => setPage((prev) => prev + 1)}
        className="px-1 m-1 rounded  border-2 border-blue-500 hover:bg-white hover:text-blue-500 text-white bg-blue-500"
      >
        Next
      </button>
      {bookmarks.map((bookmark) => (
        <div key={bookmark._id}>
          <p>{bookmark.title}</p>
          <p>{bookmark.url}</p>
        </div>
      ))}
      <p>totalPages {totalPages}</p>
    </>
  );
};

export default React.memo(Bookmarks);
