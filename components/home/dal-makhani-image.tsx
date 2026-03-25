'use client';

import Image from 'next/image';

export function DalMakhaniImage() {
  return (
    <Image
      src="/images/dal-makhani.png"
      alt="Dal Makhani"
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-110"
    />
  );
}
