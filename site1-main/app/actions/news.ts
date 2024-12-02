'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function createNews(formData: FormData) {
  const title = formData.get('title') as string
  const content = formData.get('content') as string
  const imageUrl = formData.get('imageUrl') as string

  if (!title || !content) {
    throw new Error('Title and content are required')
  }

  await prisma.news.create({
    data: {
      title,
      content,
      imageUrl: imageUrl || '/images/default-news.jpg',
    },
  })

  revalidatePath('/')
}
