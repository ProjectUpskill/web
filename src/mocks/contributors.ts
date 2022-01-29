import { Contributor } from "../models/contributor";

const contributors: Contributor[] = [
  {
    name: "Emily",
    username: "@Emily",
    image: "/profile.png",
    points: 5,
    url: "#foo",
  },
  {
    name: "Emily",
    username: "@Emily",
    image: "/profile.png",
    points: 5,
    url: "#foo",
  },
  {
    name: "Emily",
    username: "@Emily",
    image: "/profile.png",
    points: 5,
    url: "#foo",
  },
  {
    name: "Emily",
    username: "@Emily",
    image: "/profile.png",
    points: 5,
    url: "#foo",
  },
];

export default function getContributors() {
  return contributors;
}
