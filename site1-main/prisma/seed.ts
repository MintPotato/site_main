import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Очищаем существующие данные
  await prisma.news.deleteMany({})

  // Создаем тестовые новости
  const news = [
    {
      title: "Важное научное открытие",
      content: "Ученые обнаружили новый вид бабочек в тропических лесах Амазонки. Это открытие может помочь лучше понять эволюцию насекомых в данном регионе.",
      date: new Date('2024-01-20'),
      imageUrl: "/images/science-news.jpg"
    },
  ]

  for (const item of news) {
    await prisma.news.create({
      data: item
    })
  }

  console.log('База данных успешно заполнена тестовыми данными')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
