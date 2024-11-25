import type { categoryType } from "$lib/types/category";
import { v4 as uuid } from "uuid";

const categories: categoryType[] = [
  {
    id: uuid(),
    heading: "Heading 1",
    content: [
      {
        id: uuid(),
        label: "Category 1",
        link: "/category1",
      },
      {
        id: uuid(),
        label: "Category 2",
        link: "/category2",
      },
      {
        id: uuid(),
        label: "Category 3",
        link: "/category3",
      },
    ],
  },
  {
    id: uuid(),
    heading: "Heading 2",
    content: [
      {
        id: uuid(),
        label: "Category 4",
        link: "/category1",
      },
      {
        id: uuid(),
        label: "Category 5",
        link: "/category2",
      },
      {
        id: uuid(),
        label: "Category 6",
        link: "/category3",
      },
    ],
  },
];

export default categories;
