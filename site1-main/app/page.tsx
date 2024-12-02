import Image from "next/image";
import Link from 'next/link';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';


export default async function Home() {
  const news = await prisma.news.findMany({
    orderBy: {
      date: 'desc'
    }
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 mb-6">
        <div className="container mx-auto flex items-center">
          <div className="w-36">
            {/* Пустой div для баланса */}
          </div>
          <h1 className="text-2xl font-bold flex-1 text-center">Новости</h1>
          <div className="w-36 text-right">
            <Link
              href="/create"
              className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors inline-block"
            >
              + Добавить новость
            </Link>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4">
        <div className="space-y-6">
          {news.map((item) => (
            <Link 
              href={`/news/${item.id}`}
              key={item.id}
              className="block"
            >
              <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className="flex">
                  <div className="relative w-48 h-48 flex-shrink-0">
                    <Image
                      src={item.imageUrl || '/images/default-news.jpg'}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h2 className="text-xl font-bold mb-2 text-black">{item.title}</h2>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                    <time className="text-sm text-gray-500 mt-4">
                      {item.date.toLocaleDateString('ru-RU')}
                    </time>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
