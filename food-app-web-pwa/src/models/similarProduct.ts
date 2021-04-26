import { Dish } from "context";

// tf-idf Indexing
export const tfidfVectorizer = (dishes: Dish[]) => {
  const ingredientsMapping: {
    [key: string]: { [key: number]: { gram: number; tfidf?: number } };
  } = {};
  const dishesWithTfidf: {
    [key: string]: { name: string; tfidf: number }[];
  } = {};
  const df: { [key: string]: number } = {};
  const d = dishes.length;
  dishes.forEach((dish) => {
    dish.ingredients!!.forEach((ingr) => {
      const name = ingr.name.toLocaleLowerCase();
      if (!ingredientsMapping[name]) {
        ingredientsMapping[name] = {};
        df[name] = 0;
      }
      df[name]++;
      ingredientsMapping[name][dish.id] = { gram: ingr.gram };
    });
  });
  for (const ingr in ingredientsMapping) {
    const dfi = df[ingr];
    const idf = Math.log(d / dfi);
    for (const d in ingredientsMapping[ingr]) {
      const { gram } = ingredientsMapping[ingr][d];
      if (!dishesWithTfidf[d]) {
        dishesWithTfidf[d] = [];
      }
      dishesWithTfidf[d].push({ name: ingr, tfidf: idf * gram });
    }
  }
  return dishesWithTfidf;
};

// Item to Item Similarity
export const compare = (
  dish1: string,
  dish2: string,
  dishesWithTfidf: {
    [key: string]: { name: string; tfidf: number }[];
  }
) => {
  let similarity;
  // Cosine Similarity
  if (!dishesWithTfidf[dish1] || !dishesWithTfidf[dish2]) {
    return -1;
  }
  const d1abs = Math.sqrt(
    dishesWithTfidf[dish1].reduce((prev, cur) => {
      return prev + Math.pow(cur.tfidf, 2);
    }, 0)
  );
  const d2abs = Math.sqrt(
    dishesWithTfidf[dish2].reduce((prev, cur) => {
      return prev + Math.pow(cur.tfidf, 2);
    }, 0)
  );
  const d1d2 = dishesWithTfidf[dish1].reduce((prev, cur) => {
    const d2 = dishesWithTfidf[dish2].find((d) => {
      return d.name === cur.name;
    });
    if (d2) {
      return prev + cur.tfidf * d2.tfidf;
    }
    return prev;
  }, 0);
  similarity = d1d2 / (d1abs * d2abs);
  return similarity;
};

export const recommend = (dishID: string, dishes: Dish[]) => {
  const size = 6;
  const dishesWithTfidf = tfidfVectorizer(dishes);
  const recommendList: { id: number; similarity: number }[] = [];
  dishes.forEach((dish) => {
    if (dishID !== dish.id + "") {
      const similarity = compare(dishID, dish.id + "", dishesWithTfidf);
      recommendList.push({ id: dish.id, similarity });
    }
  });
  recommendList.sort((a, b) => b.similarity - a.similarity);
  return recommendList.slice(0, size).map((d) => ({ id: d.id + "" }));
};
