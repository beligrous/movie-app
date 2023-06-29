import { useState, useEffect, useCallback } from "react";
import { getTrending } from "../../service/api";
import TrendingCard from "../../components/trendingCard";

const Trending = () => {
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);

  const getData = useCallback(async () => {
    try {
      const data = await getTrending();
      setList(data.results);
    } catch (error) {
      setError(error);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const cardList = list.map((item) => {
    return (
      <li key={item.id}>
        <TrendingCard data={item} />
      </li>
    );
  });

  return (
    <>
      {error ? (
        alert(error.message)
      ) : (
        <ul className={"flex flex-wrap gap-1"}>{cardList}</ul>
      )}
    </>
  );
};

export default Trending;
