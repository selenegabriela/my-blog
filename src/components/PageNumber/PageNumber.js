const PageNumber = ({ number, currentPage, onClick }) => {
    const active = number === currentPage ? "bg-yellow-500" : "";
  
    return (
      <button
        onClick={() => onClick(number)}
        className={`mx-1 px-3 py-1 rounded-lg bg-white text-black ${active}`}
      >
        {number}
      </button>
    );
  };

  export default PageNumber;