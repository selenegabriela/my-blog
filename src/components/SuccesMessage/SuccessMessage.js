import React from 'react';

const SuccessMessage = ({ children }) => {
  return (
    <div className="bg-blue-500 text-white rounded py-2 px-4 text-center">
      {children}
    </div>
  );
};

export default SuccessMessage;
