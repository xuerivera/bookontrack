/* empty css                           */
import { c as createComponent, r as renderTemplate, h as addAttribute, i as renderHead, d as createAstro } from '../astro_C_lKRqWe.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const bookres = await fetch(`${Astro2.url.origin}/api/getBooks.json`);
  await bookres.json();
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro Book Tracker</title><link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">${renderHead()}</head> <body class="bg-gradient-to-r from-blue-50 to-blue-200 min-h-screen"> <h1 class="text-4xl font-bold text-center my-8 text-blue-700">Astro Book Tracker</h1> <div class="container mx-auto p-4"> <form id="book-form" class="mb-8"> <label for="book-search" class="block text-lg font-medium text-gray-700">Search for Book</label> <input id="book-search" type="text" class="border-2 border-blue-300 p-2 w-full rounded-md shadow-sm" placeholder="Enter your search"> </form> <div id="books-wrapper" class="flex flex-wrap gap-6 justify-center"></div> <h2 class="text-3xl font-bold text-center my-8 text-blue-700">Selected Books</h2> <div id="selected-books-wrapper" class="flex flex-wrap gap-6 justify-center"></div> </div> <!-- Modal --> <div id="book-modal" class="fixed inset-0 bg-gray-900 bg-opacity-50 hidden flex justify-center items-center z-50"> <div class="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative"> <button id="close-modal" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl">
&times;
</button> <h2 id="modal-title" class="text-2xl font-bold mb-4 text-center text-blue-700"></h2> <img id="modal-image" src="" alt="Book cover" class="w-full h-64 object-cover rounded-t-lg mb-4"> <p id="modal-description" class="text-gray-600 mb-4"></p> <p id="modal-author" class="text-gray-600 mb-2"></p> <p id="modal-pages" class="text-gray-600 mb-2"></p> <p id="modal-year" class="text-gray-600 mb-2"></p> <p id="modal-rating" class="text-gray-600 mb-2"></p> <p id="modal-language" class="text-gray-600 mb-2"></p> <a id="modal-link" href="#" target="_blank" class="inline-block mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 text-center">Buy this book</a> </div> </div>  </body> </html>`;
}, "/home/m1la/Coding/cosmic-centauri/src/pages/index.astro", void 0);

const $$file = "/home/m1la/Coding/cosmic-centauri/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
