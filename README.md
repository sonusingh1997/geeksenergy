### Git Setup 
git init 
git add .
git commit -m"first commit"

<!-- git remote set-url origin https://github.com/jailogix1983/deshbandhu.git -->
git branch -M main
git remote add origin https://github.com/sonusingh1997/geeksenergy.git
git pull origin main --allow-unrelated-histories
git push -u origin main

### How to create branch 
git checkout main
git pull origin main 
git checkout -b sonu/implement-home page

### How to push
git add .
git commit -m"your proper message what you have done"
git pull origin main
git push origin main (or)
git push origin branch-name(sonu/implement-home page)

### How to pull
git add .
git commit -m"your proper message what you have done"
git pull origin main

### How to change branch
git add .
git commit -m"your proper message what you have done"
git checkout branch-name

### Note 
- Don't make any changes in main branch.
- Before create any branch go to main branch & pull
