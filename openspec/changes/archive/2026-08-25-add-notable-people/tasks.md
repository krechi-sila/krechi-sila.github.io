## 1. Content

- [x] 1.1 Create `data/people/` and add 2–3 starter markdown files with front matter (`title`, optional `years` / `role`) and short biographies drawn from figures already mentioned on the site; verify each file has a unique slug filename and parses via `parseMarkdownFile`
- [x] 1.2 Optionally add portrait images under `public/images/people/` and reference them with `image` in front matter; verify images are reachable at the expected public URLs (or skip if no images yet)

## 2. Pages

- [x] 2.1 Add `pages/people/index.jsx` that lists all people from `data/people` (name + optional role/years, links to `/people/<slug>`); verify `getStaticProps` returns the catalog and the page renders heading «Известные люди»
- [x] 2.2 Add `pages/people/[slug].jsx` with `getStaticPaths` / `getStaticProps` mirroring memories; verify a known slug renders title + HTML body and an unknown slug is not in the static paths

## 3. Navigation

- [x] 3.1 Add menu item «Известные люди» → `/people` in `components/Menu/Menu.jsx` (near «Истории»); verify the link appears and `ActiveLink` highlights on `/people`

## 4. Smoke check

- [x] 4.1 Run `pnpm build` (or project build script) and confirm `/people` and `/people/<slug>` export successfully without build errors
