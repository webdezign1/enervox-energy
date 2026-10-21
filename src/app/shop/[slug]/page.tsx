import { Suspense } from 'react';
import { shopProducts } from '@/data/siteData';
import { SingleProductClient } from './SingleProductClient';

export function generateStaticParams() {
  return shopProducts.map((p) => ({
    slug: p.slug,
  }));
}

export default async function SingleProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <Suspense fallback={<div className="p-12 text-center text-sm font-bold text-gray-500">Loading Product Specifications...</div>}>
      <SingleProductClient slug={slug} />
    </Suspense>
  );
}
