* Overview
This project uses a linear history workflow, with /rebase/ instead of /merge/.

** Style Guide
This project uses the Airbnb style guide. Refer to: https://github.com/airbnb/javascript.

**  Definitions
Upstream: corekoans/tradehouse
Origin: your github/tradehouse
Local: Local files in git.

* Workflow
** 1. Update the local master branch.
#+BEGIN_SRC bash
git checkout master
git pull --rebase upstream master
#+END_SRC

** 2. Create a new feature-branch, or check out an existing one.
#+BEGIN_SRC bash
git checkout -b feature-branch-name
#+END_SRC

** 3. Edit your code, commit and pull from upstream/master regularly.
#+BEGIN_SRC bash
git status
git add
git commit
#+END_SRC

** 4. Make sure you are still up-to-date with master before pushing.
#+BEGIN_SRC bash
git pull --rebase upstream master
#+END_SRC

** 5. Push your branch to github.
#+BEGIN_SRC bash
git push origin feature-branch
#+END_SRC

** 6. Make a pull request on github.

*** Rejected
If your pull request was rejected, return to step 3.

*** Merged
Update your local master branch, then your github master branch.
#+BEGIN_SRC bash
git checkout master
git pull --rebase upstream master
git push origin master -f
#+END_SRC
