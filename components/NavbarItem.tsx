import Link from 'next/link';
import { FC } from 'react'
import { twMerge } from 'tailwind-merge';

interface NavbarItemProps {
  label:string;
  active?:boolean;
  href:string;
}

const NavbarItem: FC<NavbarItemProps> = ({label,active,href}) => {
  return (
    <Link
        href={href}
        className = {twMerge(`
            flex
            flex-row
            h-auto
            items-center
            w-full
            gap-x-16
            text-md
            font-medium
            cursor-pointer
            hover:text-white transition text-neutral-500
            py-1
            bg-transparent
        `,
            active && "text-white"
        )}
    >
      {label}
    </Link>);
}

export default NavbarItem