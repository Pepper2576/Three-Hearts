import { blogData } from '@/lib/data/blog-data';
import { BlogCard } from '@/components/blog-card';

export default function BlogPage() {
  return (
    <main className='font-sans min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-50 to-pink-100 p-0'>
      <section className='w-full flex flex-col items-center justify-center py-16 px-4 text-center bg-gradient-to-r from-pink-200 via-yellow-100 to-red-100 shadow-md mb-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {blogData.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              imageUrl={post.imageUrl}
              text={post.text}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
