import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`w-full mx-auto max-w-screen-2xl ${className}`}>
      {children}
    </div>
  );
};

export default Container;
