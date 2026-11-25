import { memo } from 'react';

import { CareerData } from '../constants';

import { NewTabLabel } from '@/cores/NewTabLabel';
import { Period } from '@/cores/Period';

export const CareerList = memo(() => {
  return (
    <ul className="w-full max-w-2xl" role="list">
      {CareerData.map((career) => (
        <li key={career.label} className="flex sm:gap-16 gap-6 py-6 border-b border-b-zinc-300">
          <span className="shrink-0 whitespace-nowrap w-32 sm:w-44 text-sm sm:text-md tabular-nums text-zinc-600">
            <Period {...career.period} />
          </span>
          <span className="text-sm sm:text-md">
            {career.href ? (
              <a
                className="text-blue-600 underline underline-offset-4 decoration-blue-600/40 hover:text-blue-800 hover:decoration-blue-800 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-800"
                href={career.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {career.label}
                <NewTabLabel />
              </a>
            ) : (
              career.label
            )}
            {career.note && <span className="ml-2 text-xs text-zinc-500">{career.note}</span>}
          </span>
        </li>
      ))}
    </ul>
  );
});
