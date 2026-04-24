import { FC } from 'react';

type BadgeProps = {
  text: string;
  colorStyles?: string;
};

export const Badge: FC<BadgeProps> = ({ text, colorStyles }) => (
  <li
    className={`rounded-full px-3 py-1 mb-3 mr-4 hover:bg-cyan-500 dark:hover:bg-cyan-500 dark:hover:text-white ${colorStyles}`}
  >
    {text}
  </li>
);
