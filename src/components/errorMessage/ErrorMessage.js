import React from 'react';

const ErrorMessage = ({ children }) => {
  return (
    <div className="bg-red-500 text-white rounded py-2 px-4 text-center">
      {children}
    </div>
  );
};

export default ErrorMessage;
