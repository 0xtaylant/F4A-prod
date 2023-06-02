import React, { FC } from 'react'
import { twMerge } from 'tailwind-merge';

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box: FC<BoxProps> = ({children,className}) => {
  return (
    <div className={twMerge(`
     bg-transparent
      rounded-lg
      h-full
      w-fit`,className)}>
      {children}
    </div>
  );
}

export default Box