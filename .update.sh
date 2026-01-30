git checkout main
git pull --ff-only
git branch old-main
git push origin old-main

git checkout --orphan new-main

git rm -r --cached .
git add -A

git commit -m "Update Webpage"

git branch -M main
git push -f origin main

git push origin --delete old-main
git branch -D old-main
