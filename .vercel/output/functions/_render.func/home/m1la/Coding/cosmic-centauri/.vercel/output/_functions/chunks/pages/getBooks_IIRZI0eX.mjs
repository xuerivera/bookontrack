import { normalizeDatabaseUrl, createLocalDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';

const dbUrl = normalizeDatabaseUrl(process.env.ASTRO_DATABASE_FILE, "file:///home/m1la/Coding/cosmic-centauri/.astro/content.db");
const db = createLocalDatabaseClient({ dbUrl });
const Books = asDrizzleTable("Books", { "columns": { "key": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "key", "collection": "Books", "primaryKey": true } }, "title": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "title", "collection": "Books", "primaryKey": false, "optional": false } }, "author_key": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "author_key", "collection": "Books", "primaryKey": false, "optional": false } }, "author_name": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "author_name", "collection": "Books", "primaryKey": false, "optional": false } } }, "deprecated": false, "indexes": {} }, false);

const GET = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const bookId = url.searchParams.get("id");
    if (bookId) {
      const singleBook = await db.select().from(Books).where(eq(Books.key, bookId));
      if (singleBook.length === 0) {
        return new Response(JSON.stringify({ error: "Book not found" }), { status: 404, headers: { "Content-Type": "application/json" } });
      }
      return new Response(JSON.stringify(singleBook), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    const allBooks = await db.select().from(Books);
    return new Response(JSON.stringify(allBooks), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Failed to fetch books:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch books" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

export { GET };
