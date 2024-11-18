import type { categoryType } from "$lib/types/category";

const categories: categoryType[] = [
  {
    id: "0",
    heading: "Type 1",
    content: [
      {
        id: "0",
        label: "Category 1",
        link: "/category1",
      },
      {
        id: "1",
        label: "Category 2",
        link: "/category2",
      },
      {
        id: "2",
        label: "Category 3",
        link: "/category3",
      },
    ],
  },
  {
    id: "1",
    heading: "Type 2",
    content: [
      {
        id: "3",
        label: "Category 4",
        link: "/category1",
      },
      {
        id: "4",
        label: "Category 5",
        link: "/category2",
      },
      {
        id: "5",
        label: "Category 6",
        link: "/category3",
      },
    ],
  },
];

export default categories;
