'use client';

import Image from 'next/image';

export function HimalayanMomosImage() {
  return (
    <Image
      src="/images/Momo.png"
      alt="Himalayan Momos"
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-110"
    />
  );
}
