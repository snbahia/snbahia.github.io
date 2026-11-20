# Salwan Bahia’s portfolio

An Angular single-page portfolio with section navigation, expandable experience details, and project image galleries.

## Run locally

Install Node.js 22 (the tested version is in `.nvmrc`). If you use nvm, run `nvm install` and `nvm use` in this directory first.

```sh
npm ci
npm start
```

Open http://localhost:4200. Source changes reload automatically. Press Ctrl+C to stop. To use another port, run `npm start -- --port 4300`.

The npm scripts include the OpenSSL compatibility flag required by Angular 11’s Webpack tooling on recent Node versions. You do not need a global Angular CLI or a separate backend.

## Verify and build

```sh
npm test -- --watch=false --browsers=ChromeHeadless
npm run build
```

Tests require Google Chrome. If it is installed in a custom location, set `CHROME_BIN` to its executable. On macOS the usual path is `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`.

The optimized static build is written to `dist/my-portfolio/`. To preview it:

```sh
python3 -m http.server 8080 --directory dist/my-portfolio
```

Then open http://localhost:8080.

## GitHub Pages

The workflow in `.github/workflows/jekyll-gh-pages.yml` installs, tests, and builds Angular before uploading `dist/my-portfolio/`. Choose **GitHub Actions** as the Pages source in repository settings. It runs on pushes to `master` or a manual workflow dispatch.

Before the first push with this workflow, open **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**. If it currently says “Deploy from a branch” with `/docs` or `gh-pages`, switch it so the new build is used.

After committing and pushing to `master`, open the repository’s **Actions** tab. The “Build Angular portfolio and deploy to GitHub Pages” workflow runs `npm ci`, browser tests, and the production build, then publishes the build to https://snbahia.github.io/. Later pushes to `master` repeat the process automatically; pushes to other branches do not deploy. A failed test or build prevents the deployment job from running.

You do not need to run `npm run deploy` or manually commit generated `docs/` or `dist/` files when using this workflow. Commit the source, assets, lockfile, scripts, `.nvmrc`, and workflow changes.

The base URL is `/`, appropriate for `snbahia.github.io`. For a repository hosted under a subpath, build with `npm run build -- --base-href /repository-name/` instead. `npm run deploy` is an alternative that publishes the same build through `angular-cli-ghpages`; do not mix the two deployment methods.

## Editing content

- Projects: `src/app/api/projectsEn.ts`
- Experience: `src/app/api/experiencesEn.ts`
- Text: `src/app/shared/i18n/en.ts` and component templates
- Images and videos: `src/assets/`
- Shared styling: `src/styles.css`

The site uses the English content. Legacy French data is retained in the repository but is not offered as a language switch because it describes unrelated template projects.

Bootstrap and icons are bundled locally so layout does not depend on external CDNs. Project images can be opened at full size through their native links, including on touch devices.

The application still uses Angular 11 and its legacy build dependencies. A framework upgrade is separate follow-up work; the compatibility script makes this checkout runnable on the tested Node version without claiming the dependency stack is current.
