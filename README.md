# Teresia Kemunto Omae — Portfolio

A fast, dependency-free portfolio (plain HTML, CSS and JavaScript). No build step, so it works directly on GitHub Pages.

## Publish it on GitHub Pages (about 5 minutes)

1. Sign in to GitHub and click **New repository**.
2. Name it **`omae26.github.io`** (exactly this name). Make it **Public**. Do not add a README. Click **Create repository**.
3. On the empty repo page click **uploading an existing file**. Drag in **everything inside this folder** (`index.html`, `css`, `js`, `data`, `assets`, `.nojekyll`, `README.md`). Click **Commit changes**.
   - Make sure `index.html` sits at the top level of the repo, not inside another folder.
4. Go to **Settings → Pages**. Under *Build and deployment*, set **Source: Deploy from a branch**, **Branch: main**, folder **/ (root)**, then **Save**.
5. Wait 1–2 minutes. Your site is live at `https://omae26.github.io`.

## Everyday updates (no coding)

Everything you'd change is in **`data/content.js`**.

1. Open the repo on GitHub, go to `data/content.js`, and click the **pencil icon** (Edit).
2. Copy an existing `{ ... },` block (for example a certificate), paste it underneath, and change the text.
3. Click **Commit changes**. The live site refreshes in about a minute.

### Add a certificate or short course
Copy a line in `certificates`. Set `type` to `"certification"` or `"course"`, `status` to `"Completed"` or `"Ongoing"`. Optional: `link` (credential URL) and `image` (upload the picture to `assets/certs/` and use `"assets/certs/name.png"`).

### Add a project
Copy a block in `projects`. `category` can be `networking`, `security`, `development`, `systems` or `design`. Add GitHub links in `links`. The filter buttons update automatically.

### Add graphic design work
Upload images to `assets/designs/` (GitHub: **Add file → Upload files**), then add a line in `designs`:
`{ title: "Event poster", type: "Poster", image: "assets/designs/poster-1.jpg" },`

### Add your photo
Upload a square-ish photo named `profile.jpg` into `assets/`. It replaces the TK initials automatically.

### Add your GitHub / Behance links
Fill in `github` and `behance` in the `profile` section. Empty links stay hidden.

### Replace your CV
Upload a new PDF into `assets/` with the **same name** (`Teresia_Kemunto_Omae_CV.pdf`) to overwrite it.

### Contact form
By default it opens the visitor's email app. To receive messages directly, create a free form at formspree.io and paste its URL into `formEndpoint`.

## Make it yours
- Visitors can switch the accent colour (emerald / teal / burgundy) from the dots in the menu. To change the default, edit the `:root` colours at the top of `css/style.css`.
- Update the title and description in `index.html` (`<title>` and `<meta name="description">`) when your focus changes.
- Update the hero animation text in `js/main.js` (the `lines` list).

## Preview on your computer (optional)
Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.
