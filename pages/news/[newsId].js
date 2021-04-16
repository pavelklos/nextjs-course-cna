// DOMAIN/news/[newsId]
// rafce
import { useRouter } from "next/router";

const NewsDetailPage = () => {
  const router = useRouter();
  // const { query } = router;
  // const { newsId } = query;
  const newsId = router.query?.newsId;
  // console.log({ router, query, newsId });

  // send a request to the backend API (file system, database, ...)
  // to fetch the news item with newsId

  return (
    <section>
      <h1>The News Detail Page : {newsId}</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis odio
        qui voluptate nihil ducimus amet aliquam earum unde animi at illum
        corrupti, suscipit recusandae tempora alias molestias, perspiciatis
        cumque culpa illo iusto fugiat quod omnis necessitatibus. Debitis
        dolores eaque quae, reprehenderit enim vero. Pariatur quasi optio harum
        debitis fuga voluptas. Officia et repudiandae minus delectus in saepe!
      </p>
    </section>
  );
};

export default NewsDetailPage;
