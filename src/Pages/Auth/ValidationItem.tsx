import React from 'react'



const ValidationItem = ({
    isValid,
    text,
  }: {
    isValid: boolean;
    text: string;
  }) => {
    return (
      <li className={`flex items-center gap-x-2 ${isValid ? "text-teal-500" : ""}`}>
        <span>
          <svg
            className="shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isValid ? (
              <polyline points="20 6 9 17 4 12" />
            ) : (
              <>
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </>
            )}
          </svg>
        </span>
        {text}
      </li>
    );
  };
  
  export default ValidationItem;
