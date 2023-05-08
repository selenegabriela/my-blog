import PostContext from '@/contexts/PostContext';
import Link from 'next/link';
import React, { useContext } from 'react';

const SearchModal = ({ results, isModalOpen }) => {
    const { setSearchResults, setIsModalOpen } = useContext(PostContext);

    const onClose = () => {
        setIsModalOpen(false);
        setSearchResults([])
    }
    return (
      <div
        className={`${
          isModalOpen ? 'block' : 'hidden'
        } fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center`}
      >
        <div className="bg-white rounded-md w-3/4">

          <div
  className="fixed z-10 inset-0 overflow-y-auto"
  aria-labelledby="modal-title"
  role="dialog"
  aria-modal="true"
>
  <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      aria-hidden="true"
    ></div>

    <div
      className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-yellow-500 sm:mx-0 sm:h-10 sm:w-10">
            <svg
              className="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3
              className="text-lg leading-6 font-medium text-gray-900"
              id="modal-title"
            >
              Search Results
            </h3>
            <div className="mt-2 flex gap-3">
              {results.map((result) => (
                <Link href={`http://localhost:3000/posts/${result.id}`}>
                    <div
                    onClick={() => setIsModalOpen(false)}
                    key={result.id}
                    className="bg-white min-h-full rounded-lg shadow-lg p-4 flex flex-col hover:bg-gray-100"
                    >
                    <img
                        src="/images/1.jpg"
                        alt=""
                        className="w-full rounded-t-lg"
                    />
                    <div>
                        <h3 className="font-semibold text-lg my-2">
                        {result.title}
                        </h3>
                        <p>
                        {result.content.split(" ").slice(0, 30).join(" ")}
                        </p>
                    </div>
                    </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button
          type="button"
          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-500 text-base font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    );
  };
  

export default SearchModal;
