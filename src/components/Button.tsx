import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
    return (
        <button 
            {...props} 
            className={`bg-green-600 hover:bg-green-500 text-white px-8 py-6 text-lg rounded-md transition-all duration-300 !rounded-button whitespace-nowrap cursor-pointer ${className}`}
        >
            {children}
        </button>
    );
};

export default Button; 