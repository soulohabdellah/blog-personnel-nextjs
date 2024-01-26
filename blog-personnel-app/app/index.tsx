import { PrismaClient } from '@prisma/client';

type HomeProps = {
  articles: {
    id: number;
    title: string;
    excerpt: string;
  }[];
};

const Home: React.FC<HomeProps> = ({ articles }) => {
  return (
    <div>
      <h1>Articles</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const articles = await prisma.article.findMany();
  return {
    props: { articles },
  };
}

export default Home;
