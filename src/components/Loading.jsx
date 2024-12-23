import { Html } from '@react-three/drei';
import React from 'react';

const Loading = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce delay-150"></div>
          <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce delay-300"></div>
        </div>
      </div>
    </Html>
  );
};

export default Loading;
