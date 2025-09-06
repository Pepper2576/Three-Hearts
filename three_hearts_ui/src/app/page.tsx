import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { saleItems } from '@/lib/data/items';

export default function Home() {
  return (
    <main className='font-sans min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-50 to-pink-100 p-0'>
      <section className='w-full flex flex-col items-center justify-center py-16 px-4 text-center bg-gradient-to-r from-pink-200 via-yellow-100 to-red-100 shadow-md mb-8'>
        <h1 className='text-4xl sm:text-5xl font-extrabold text-pink-700 mb-4 drop-shadow-lg'>
          Welcome to Three Hearts
        </h1>
        <p className='max-w-2xl text-lg sm:text-xl text-gray-700 mb-6'>
          Discover the warmth of handmade artistry. At{' '}
          <span className='font-semibold text-pink-600'>Three Hearts</span>, we
          create unique, lovingly crafted knitted dolls that bring joy to every
          home. Each doll is a story, a memory, and a treasure—made with care,
          passion, and a touch of magic.
        </p>
        <a
          href='/shop'
          className='inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full shadow transition-colors duration-200 text-lg mt-2'
        >
          Shop Handmade Dolls
        </a>
      </section>
      <div className='w-full flex flex-row items-center justify-center gap-16'>
        <section className='w-full flex flex-col items-center justify-center gap-8 px-4'>
          <h2 className='text-2xl sm:text-3xl font-bold text-pink-600 mb-2'>
            Featured Dolls
          </h2>
          <Carousel className='w-full max-w-xs'>
            <CarouselContent>
              {saleItems.map((item, index) => (
                <CarouselItem key={index}>
                  <div className='p-1'>
                    <Card>
                      <CardContent className='flex aspect-square items-center justify-center p-6'>
                        <img
                          src={item.image}
                          alt={item.name}
                          className='object-cover rounded-lg shadow-md border border-pink-200'
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        <section className='w-full flex flex-col items-center justify-center py-12 px-4 mt-12 bg-white/70 border-t border-pink-100 mr-15'>
          <h3 className='text-xl font-semibold text-pink-700 mb-2'>
            Why Choose Three Hearts?
          </h3>
          <ul className='max-w-2xl text-gray-700 text-base sm:text-lg list-disc list-inside space-y-2'>
            <li>Handmade with love and attention to detail</li>
            <li>Unique designs you won’t find anywhere else</li>
            <li>Perfect gifts for children and collectors alike</li>
            <li>Support a small business and artisan community</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
