import { ArticleData } from "../../data/articlesTypes";
import { ArticleCard } from "../../components/ArticleCard/ArticleCard";
import mockData from "../../data/articles.json";

export const Home = () => {
  const data = JSON.parse(JSON.stringify(mockData)) as ArticleData;

  return (
    <div className="bg-teal-400 w-full rounded-sm py-4 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
      {data.map((data, index) => (
        <ArticleCard key={index} data={data} />
      ))}
    </div>
  );
};

export default Home;