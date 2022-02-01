import { Article } from "../models/article";

const articles: Article[] = [
  {
    title: "How to train your peggyHow to train your peggy",
    likes: [1, 2, 3, 4, 5],
    url: "#foo",
  },
  {
    title: "How to train your peggyHow to train your peggy",
    likes: [1, 2, 3, 4, 5],
    url: "#foo",
  },
  {
    title: "How to train your peggy",
    likes: [1, 2, 3, 4, 5],
    url: "#foo",
  },
  {
    title: "How to train your peggy",
    likes: [1, 2, 3, 4, 5],
    url: "#foo",
  },
  {
    title: "How to train your peggy",
    likes: [1, 2, 3, 4, 5],
    url: "#foo",
  },
  {
    title: "How to train your peggy",
    likes: [1, 2, 3, 4, 5],
    url: "#foo",
  },
  {
    title: "How to train your peggy",
    likes: [1, 2, 3, 4, 5],
    url: "#foo",
  },
  {
    title: "How to train your peggy",
    likes: [1, 2, 3, 4, 5],
    url: "#foo",
  },
  {
    title: "How to train your peggy",
    likes: [1, 2, 3, 4, 5],
    url: "#foo",
  },
  {
    title: "How to train your peggy",
    likes: [1, 2, 3, 4, 5],
    url: "#foo",
  },
  {
    title: "How to train your peggy",
    likes: [1, 2, 3, 4, 5],
    url: "#foo",
  },
  {
    title: "How to train your peggy",
    likes: [1, 2, 3, 4, 5],
    url: "#foo",
  },
  {
    title: "How to train your peggy",
    likes: [1, 2, 3, 4, 5],
    url: "#foo",
  },
  {
    title: "How to train your peggy",
    likes: [1, 2, 3, 4, 5],
    url: "#foo",
  },
  {
    title: "How to train your peggy",
    likes: [1, 2, 3, 4, 5],
    url: "#foo",
  },
];

export default function getArticles(amount = 16) {
  return articles.slice(0, amount);
}
