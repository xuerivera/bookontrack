import type { APIRoute } from "astro";
import { Books, db } from "astro:db";

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    await db.insert(Books).values({
      title: data.title,
      author_key: data.authorid,
      author_name: data.author,
      key: data.key,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Failed to add book:', error);
    return new Response(JSON.stringify({ error: 'Failed to add book' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
