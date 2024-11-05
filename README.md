# Astro error handling, page -vs- component frontmatter

```sh
npm install
```

then

```sh
npm run build && npm run preview
```

-or-

```sh
npm run dev
```

## Good scenario (page frontmatter throwing)

```sh
curl -s http://localhost:4321/good -v
```

This returns a 500 as expected, and the logs from the middleware capture that error.

## Bad scenario (component frontmatter throwing)

```sh
curl -s http://localhost:4321/bad -v
```

This returns a 200, despite emitting the text "Internal server error", the middleware is unable to capture that error.
