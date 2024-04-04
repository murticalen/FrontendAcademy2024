Init a new next project called `next-app` using their official template. You will be using this project throughout all the lessons with Next.js, so it should be placed inside the Lessons folder.

Show how `pages` folder offers routing based on file-system. Explain the `_app.tsx` and `_document.tsx` files.

To show next features when it comes to statically generated pages, show 3 examples:
- `pages/static/about.tsx` - static page at fixed path (URI) without any dynamic data
- `pages/static/privacy.tsx` - static page at fixed path (URI) with data generated at build time
- `pages/static/country/[alpha2].tsx` - static page at dynamically generated paths (obtained via `getStaticPaths` method) with data generated at build time

Explain how those pages still support fully-functioning React despite being static, as they are not static in being HTML + CSS only pages, but pages generated at build time.
