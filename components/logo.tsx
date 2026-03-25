import Link from 'next/link';

export function Logo({ className = '', href = '/' }: { className?: string; href?: string }) {
  return (
    <Link href={href} className={`flex items-center ${className}`}>
      <span className="text-2xl md:text-3xl font-heading font-bold text-accent tracking-widest uppercase">
        Doaba
      </span>
    </Link>
  );
}
