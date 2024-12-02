import Link from 'next/link';
import { createNews } from '../actions/news';

export default function CreateNewsPage() {
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
          <h1 className="text-2xl font-bold text-center flex-1">Добавить новость</h1>
        </div>
      </header>

      <main className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <form action={createNews} className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-6">
              <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
                Заголовок
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                placeholder="Введите заголовок новости"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="content" className="block text-gray-700 font-medium mb-2">
                Содержание
              </label>
              <textarea
                id="content"
                name="content"
                required
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                placeholder="Введите текст новости"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="imageUrl" className="block text-gray-700 font-medium mb-2">
                Ссылка на изображение (необязательно)
              </label>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                placeholder="https://example.com/image.jpg"
              />
              <p className="mt-1 text-sm text-gray-500">
                Если не указано, будет использовано изображение по умолчанию
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Добавить новость
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
