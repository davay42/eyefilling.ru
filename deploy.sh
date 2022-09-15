cd _dist

git init
git remote add origin git@github.com:davay42/eyefilling.ru.git
git add . --force
git commit -m 'deploy now'

git push -f origin HEAD:gh-pages

cd -