import type { APIRoute } from "astro";
import { Books, db, eq } from "astro:db";

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const bookId = url.searchParams.get("id");

    if (bookId) {
      const singleBook = await db
        .select()
        .from(Books)
        .where(eq(Books.key, bookId));

      if (singleBook.length === 0) {
        return new Response(JSON.stringify({ error: 'Book not found' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
      }

      return new Response(JSON.stringify(singleBook), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const allBooks = await db.select().from(Books);
    return new Response(JSON.stringify(allBooks), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Failed to fetch books:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch books' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
