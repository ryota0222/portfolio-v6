import { memo } from 'react';

import { CareerData } from '../constants';

export const CareerList = memo(() => {
  return (
    <ul>
      {CareerData.map((career, index) => (
        <li key={index} className="flex sm:gap-20 gap-10 py-6 border-b border-b-zinc-300 sample">
          <span className=" w-20 text-sm sm:text-md">
            <time dateTime={career.date}>{career.date}</time>
          </span>
          <span className="text-sm sm:text-md">{career.label}</span>
        </li>
      ))}
    </ul>
  );
});
