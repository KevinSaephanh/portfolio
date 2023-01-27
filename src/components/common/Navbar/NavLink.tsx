import Link from 'next/link';
import React from 'react';

type NavLinkProps = {
  href: string;
  label: string;
  active?: boolean;
  target?: string;
  styles?: string;
};

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  active,
  target,
  styles,
}: NavLinkProps) => {
  return (
    <Link
      href={href}
      target={target}
      className={`link-item flex items-center hover-highlight text-xl py-2 hover:underline hover:underline-offset-4 ${
        active ? 'active-link' : ''
      } ${styles}`}
      aria-current='page'
    >
      {label}
    </Link>
  );
};
