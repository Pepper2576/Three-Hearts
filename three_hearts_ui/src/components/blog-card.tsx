import * as React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

interface BlogCardProps {
  title: string;
  imageUrl: string;
  text: string;
}

export function BlogCard({ title, imageUrl, text }: BlogCardProps) {
  return (
    <Card className='w-full max-w-xs shadow-lg hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-pink-200 via-yellow-100 to-blue-200 border-2 border-pink-300'>
      <CardHeader className='flex flex-col items-center bg-pink-100 rounded-t-lg'>
        <CardTitle className='text-2xl font-bold text-pink-700 drop-shadow-sm'>
          {title}
        </CardTitle>
      </CardHeader>
      <div className='flex justify-center bg-white py-2'>
        <div className='w-32 h-32 rounded-full overflow-hidden border-4 border-pink-300 shadow-md bg-pink-50'>
          <img
            src={imageUrl}
            alt={title}
            className='object-cover w-full h-full hover:scale-110 transition-transform duration-300'
          />
        </div>
      </div>
      <CardContent className='p-4 text-center'>
        <p className='text-base text-gray-700 font-medium'>{text}</p>
        <p className='text-sm text-gray-500'>Love you all</p>
        <p className='text-sm text-gray-500 font-signature italic'>
          Three Hearts &lt;3 &lt;3 &lt;3
        </p>
      </CardContent>
    </Card>
  );
}
