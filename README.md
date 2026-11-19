# Paul de Font-Reaulx — personal website

Published by GitHub Pages from `master` at https://www.pauldfr.com/.

## Editing

Edit `build.py` for page content and navigation, `content/publications.json` for publication metadata, and `assets/style.css` for styling. Run `python3 build.py` and commit the generated HTML alongside its source. `.nojekyll` enables direct static hosting. No dependencies are required.

The Research page includes category filters in `assets/research.js`. CV links point to `files/policy-cv.pdf`. Original public files and images are retained so existing asset links continue to work.

## Restoring the previous website

The complete original AcademicPages/Jekyll site is preserved on branch `backup/academic-site-2026-11-19`, at commit `8127752`. This includes its content, styling, configuration, and history.

To restore it from a clean checkout of master:

```sh
git fetch origin
git restore --source=origin/backup/academic-site-2026-11-19 --staged --worktree .
git commit -m "Restore previous academic website"
git push origin master
```

GitHub Pages will redeploy the old site. This preserves the newer site's history too; no force push is needed.
