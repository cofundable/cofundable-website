# Contributing Guidelines

🎉 First off, thanks for taking the time to contribute! 🎉

The following is a set of guidelines for contributing to this repository.

Before contributing, we encourage you to also read our [LICENSE](LICENSE),  [README](README.md), and [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md) files, also found in this repository. If you have any questions not answered by the content of this repository, please don't hesitate to post in the discussions thread.

## To fork or not to fork

If you want to change a simple thing, for example, fix a typo or update copy, feel free to use the GitHub web interface, that's perfect. Under the hood, it will do complex things but you don't need to think about it!

For all other contributions please [fork the repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo) and follow the steps below before submitting a pull request.

## Contributing code: a journey

### Issues and branches

We like to track changes to our code base using GitHub issues. Before proposing a change, make sure there is a corresponding issue (i.e. Bug Fix, Task, Feature Request) that describes the contribution you'll be making. If there isn't an [existing issue](https://github.com/cofundable/cofundable/issues), please [create a new one](https://github.com/cofundable/cofundable/issues/new/choose) by selecting and filling out a template from the issue tab.

Once you've found or created an issue related to your contribution, create a feature branch on your forked repository with a descriptive name, ideally one that references the issue number that your contribution is related to (e.g., issue-10-unit-testing).

### Style

For formatting and code style, we use [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/). Before committing, please run:

- `npm run prettier:write`
- `npm run lint:fix`

For the long run, we suggest to integrate these tools in your favorite code editor:

- check [Prettier Editor Integration](https://prettier.io/docs/en/editors.html)
- check [ESLint Editor Integrations](https://eslint.org/docs/user-guide/integrations)

### Commit convention

Your commit messages should conform to the [Angular convention](https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog-angular/README.md).

To help you follow this convention, this project is using [commitizen](https://github.com/commitizen/cz-cli). To use it:

1. run `git add` first to add your changes to Git staging area
2. use `npm run commit` to commit

Note: it's not mandatory to always commit with this tool (we don't), but it's great to get introduced to the commit conventions.

### Git guidelines

We do aim having a clean Git history! When submitting a Pull Request, make sure:

- each commit make sense and have a self-explaining message
- there is no unnecessary commits (such as "typo", "fix", "fix again", "eslint", "eslint again" or merge commits)

Some tips to keep a clean Git history while working on your feature branch:

- always update from main with `git pull --rebase origin main` or similar
- you might have to `git push origin --force`, that's all right if you're the only one working on the feature branch
- `git commit --amend` to modify your last commit with "fix", "typo", "prettier" or "eslint" modifications
- `git rebase --interactive` to rewrite the history

We understand Git is not always easy for everyone and want to be inclusive. If it's difficult for you to submit a Pull request with a clean Git history, that's all right, we can always [squash and merge](https://help.github.com/articles/about-pull-request-merges/#squash-and-merge-your-pull-request-commits) it.

### Pull requests

If you've gotten to this step, it means you've followed all of the steps above. Congrats, that's no small feat! Now you're ready to submit your proposed changes. To do so, [create a pull request against the upstream repo.](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) and fill out the PR template sections so that we can begin to review your contribution.

As we review your code, we may request specific changes. If so, simply add and commit those changes to the feature branch directly and they'll automatically show up on the PR. Once all of the requested changes are made, your commits will be merged into the `main` branch. Time to give yourself a hand because you just added to this project!!!

## Resources

To learn more about contributing best practices or how to use GitHub for code collaboration, don't hesitate to check these resources out:

- [Cofundable's main issue repository](https://github.com/cofundable/cofundable)
- [GitHub Tutorials](https://lab.github.com/)
- [How to contribute to open source software](https://opensource.guide/how-to-contribute/)
