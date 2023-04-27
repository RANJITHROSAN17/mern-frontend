import React from 'react';

const Button = ({ className, onClick, children} :{
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;


}) => {
  return <button className={className} onClick={onClick}>{children}</button>;
};

export default Button;
