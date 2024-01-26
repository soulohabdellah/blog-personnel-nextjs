import { useRouter } from 'next/router';

const ArticleDetail = ({ article }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export async function getStaticPaths() {
  const prisma = new PrismaClient();
  const articles = await prisma.article.findMany();
  const paths = articles.map((article) => ({ params: { id: article.id.toString() } }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const prisma = new PrismaClient();
  const article = await prisma.article.findUnique({
    where: { id: Number(params.id) },
  });
  return {
    props: { article },
  };
}

export default ArticleDetail;
