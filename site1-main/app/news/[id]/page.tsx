"use server";
import Link from 'next/link';
import Image from 'next/image';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';

export default async function NewsPage({ params }: { params: { id: string } }) {
  const newsItem = await prisma.news.findUnique({
    where: {
      id: parseInt(params.id)
    }
  });

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 mb-6">
        <div className="container mx-auto flex items-center">
          <Link 
            href="/" 
            className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
          >
            ← На главную
          </Link>
          <h1 className="text-2xl font-bold text-center flex-1">Новости</h1>
        </div>
      </header>
      
      <main className="container mx-auto px-4">
        <article className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <div className="aspect-video relative mb-6 rounded-lg overflow-hidden">
            <Image
              src={newsItem.imageUrl || '/images/default-news.jpg'}
              alt={newsItem.title}
              fill
              className="object-contain bg-gray-100"
            />
          </div>
          <h1 className="text-3xl font-bold mb-4 text-black">{newsItem.title}</h1>
          <p className="text-black mb-4">{newsItem.content}</p>
          <time className="text-sm text-gray-500">
            {newsItem.date.toLocaleDateString('ru-RU')}
          </time>
        </article>
      </main>
    </div>
  );
}
