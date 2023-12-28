'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';

type NavLinkProps = {
  href: string;
  label: string;
  onClick: Function;
  target?: string;
};

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  target,
  onClick,
}) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`link-item flex items-center font-bold hover-highlight text-xl py-4 md:py-2 hover:underline hover:underline-offset-4 ${
        pathname === href ? 'active-link' : ''
      }`}
      aria-current='page'
      target={target}
      onClick={() => onClick(false)}
    >
      <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        {label}
      </motion.span>
    </Link>
  );
};
