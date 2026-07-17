import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-gray-100 bg-gray-50">
      <ol className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-sm text-gray-500 sm:px-6 lg:px-8">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-gray-300" aria-hidden="true" />}
              {item.href && !isLast ? (
                <Link href={item.href} className="transition-colors hover:text-amber-600">
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-gray-900" aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
