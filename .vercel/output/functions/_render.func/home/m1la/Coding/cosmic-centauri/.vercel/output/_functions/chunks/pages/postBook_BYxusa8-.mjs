import { normalizeDatabaseUrl, createLocalDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import '@astrojs/db/dist/runtime/virtual.js';

const dbUrl = normalizeDatabaseUrl(process.env.ASTRO_DATABASE_FILE, "file:///home/m1la/Coding/cosmic-centauri/.astro/content.db");
const db = createLocalDatabaseClient({ dbUrl });
const Books = asDrizzleTable("Books", { "columns": { "key": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "key", "collection": "Books", "primaryKey": true } }, "title": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "title", "collection": "Books", "primaryKey": false, "optional": false } }, "author_key": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "author_key", "collection": "Books", "primaryKey": false, "optional": false } }, "author_name": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "author_name", "collection": "Books", "primaryKey": false, "optional": false } } }, "deprecated": false, "indexes": {} }, false);

const POST = async ({ request }) => {
  try {
    const data = await request.json();
    await db.insert(Books).values({
      title: data.title,
      author_key: data.authorid,
      author_name: data.author,
      key: data.key
    });
    return new Response(JSON.stringify({ success: true }), {
      status: 201,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Failed to add book:", error);
    return new Response(JSON.stringify({ error: "Failed to add book" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

export { POST };
