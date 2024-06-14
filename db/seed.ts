import { Books, db } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Books).values([
    {
      key: "1",
      title: "title",
      author_key: "1",
      author_name: "kawaii",
    },
  ]);
}