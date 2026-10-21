import { Suspense } from 'react';
import { blogPosts } from '@/data/siteData';
import { SinglePostClient } from './SinglePostClient';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function SinglePostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <Suspense fallback={<div className="p-12 text-center text-sm font-bold text-gray-500">Loading Article Details...</div>}>
      <SinglePostClient slug={slug} />
    </Suspense>
  );
}
