import { useState } from 'react';
import { PrismaClient } from '@prisma/client';
import { useRouter } from 'next/router';

const CreateArticle = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleCreate = async () => {
    const prisma = new PrismaClient();
    await prisma.article.create({
      data: { title, content },
    });
    router.push('/');
  };

  return (
    <div>
      <h1>Create Article</h1>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default CreateArticle;
