import Link from 'next/link';
import React from 'react';

type NavLinkProps = {
  href: string;
  label: string;
  target?: string;
  styles?: string;
};

export const NavLink: React.FC<NavLinkProps> = ({ href, label, target, styles }: NavLinkProps) => {
  return (
    <Link
      href={href}
      target={target}
      className={`link-item themed-text text-xl block py-2 hover:underline hover:underline-offset-4 ${styles}`}
      aria-current='page'
    >
      {label}
    </Link>
  );
};
