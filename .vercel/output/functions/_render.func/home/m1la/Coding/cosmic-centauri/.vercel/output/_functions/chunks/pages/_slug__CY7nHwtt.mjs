/* empty css                           */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as createAstro } from '../astro_C_lKRqWe.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (!slug) {
    return Astro2.redirect("/");
  }
  const bookres = await fetch(`${Astro2.url.origin}/api/getBooks.json?id=${slug}`);
  if (!bookres) {
    return Astro2.redirect("/");
  }
  const [book] = await bookres.json();
  return renderTemplate`${maybeRenderHead()}<div> <h1>${book.title}</h1> <p>${book.author_name}</p> </div>`;
}, "/home/m1la/Coding/cosmic-centauri/src/pages/book/[slug].astro", void 0);

const $$file = "/home/m1la/Coding/cosmic-centauri/src/pages/book/[slug].astro";
const $$url = "/book/[slug]";

export { $$slug as default, $$file as file, $$url as url };
