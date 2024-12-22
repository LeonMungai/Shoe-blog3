
import { useParams } from "react-router-dom";
import mockData from "../../data/articles.json";

type Article = {
    slug: string;
    title: string;
    content: string;
    image: string;
  };

const data: Article[] = mockData as Article[];

export const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = data.find((article) => article.slug === slug);

  if (!article) {
    return <div>Article not found</div>;
  }


  return (
    <div className="my-5">
      <div className="mx-auto container border border-[#c5c5c5] rounded-lg shadow-sm shadow-[#c5c5c5]">
        <img
          className="w-full h-[300px] object-cover rounded-t-lg"
          src={article.image}
          alt={article.slug}
        />
        <div className="p-4 text-black">
          <h2>{article.title}</h2>
          <p className="text-white">{article.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
