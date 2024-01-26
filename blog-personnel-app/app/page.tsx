import Home from "./index"; 

export default function Main() {
  const articles: { id: number; title: string; excerpt: string; }[] = [];

  return (
    <div>
      <h1>Main Page</h1>
      <Home articles={articles} /> 
    </div>
  );
}
