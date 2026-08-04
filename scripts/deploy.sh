#!/usr/bin/env bash
# Rebuild the static export and publish it to the gh-pages branch.
#
# We push the built `out/` directory as its own orphan history rather than
# using a GitHub Actions workflow, because the local gh token does not carry
# the `workflow` scope needed to push .github/workflows files.
set -euo pipefail

REPO_URL="https://github.com/hari-learns/kishore-portfolio.git"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

cd "$ROOT"
npm run build:pages

# Fall back to a sensible identity when git has no global user configured.
NAME="$(git config user.name || echo 'Portfolio Deploy')"
EMAIL="$(git config user.email || echo 'deploy@localhost')"

cd out
rm -rf .git
git init -q -b gh-pages
git add -A
git -c user.name="$NAME" -c user.email="$EMAIL" \
  commit -q -m "Deploy portfolio — $(date -u '+%Y-%m-%d %H:%M UTC')"
git push --force --quiet "$REPO_URL" gh-pages:gh-pages

echo "Deployed → https://kishorekumardoc.com/"
