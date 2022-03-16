import classNames from 'classnames';
import React from 'react';

const Input = ({ label, id, type = 'text', className = '', ...props }) => {
  return (
    <div className={classNames('grid', className)}>
      <label className="uppercase font-trajan" htmlFor={id}>
        {label}
      </label>
      {type === 'textarea' && (
        <textarea
          className="ring-1  mt-2  ring-[#D0D5DD] focus:outline-none p-2 rounded-md font-400"
          id={id}
          rows={4}
          {...props}
        />
      )}
      {type === 'select' && (
        <div className="pr-2 mt-2 ring-1 ring-[#D0D5DD] focus-within:outline-none p-2 bg-white rounded-md">
          <select
            className="w-full bg-white outline-none focus:outline-none font-400 "
            id={id}
            {...props}
          />
        </div>
      )}
      {!['textarea', 'select'].includes(type) && (
        <input
          className="ring-1 mt-2 rounded-md ring-[#D0D5DD] focus:outline-none p-2 font-400"
          type={type}
          id={id}
          {...props}
        />
      )}
    </div>
  );
};

export default Input;
