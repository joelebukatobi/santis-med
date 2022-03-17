import classNames from 'classnames';
import React from 'react';

const Input = ({ label, id, type = 'text', className = '', ...props }) => {
  return (
    <div className={classNames('grid mb-4', className)}>
      <label
        className="uppercase font-trajan text-[12px] sm:text-[16px]"
        htmlFor={id}
      >
        {label}
      </label>
      {type === 'textarea' && (
        <textarea
          className="ring-1 text-[12px] mt-2  ring-[#D0D5DD] focus:outline-none py-2 px-1  rounded-md font-400"
          id={id}
          rows={4}
          {...props}
        />
      )}
      {type === 'select' && (
        <div className="pr-2 mt-2 ring-1 text-[12px] ring-[#D0D5DD] focus-within:outline-none py-2 px-1 bg-white rounded-md">
          <select
            className="w-full bg-white outline-none focus:outline-none font-400 "
            id={id}
            {...props}
          />
        </div>
      )}
      {!['textarea', 'select'].includes(type) && (
        <input
          className="ring-1 mt-2 rounded-md text-[12px] ring-[#D0D5DD] focus:outline-none py-2 px-1 font-400"
          type={type}
          id={id}
          {...props}
        />
      )}
    </div>
  );
};

export default Input;
