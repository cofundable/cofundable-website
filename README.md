# Cofundable Website

<details open="open">
<summary>Table of Contents</summary>

<!-- TOC -->

- [Cofundable Website](#cofundable-website)
  - [About this Repo](#about-this-repo)
    - [Built With](#built-with)
    - [Project Structure](#project-structure)
  - [Development](#development)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Start](#start)
  - [Deployment](#deployment)
  - [Contributing](#contributing)

<!-- /TOC -->

</details>

## About this Repo

This repository hosts the source code for Cofundable's static website and blog. The website is hosted on Netlify

### Built With

- Eleventy
- Nunjucks
- Netlify

### Project Structure

- src/
  - assets/
  - js/
  - \_includes/
  - scss/
- .eleventy.js

## Development

If you see a step below that could be improved (or is outdated), please update the instructions. We rarely go through this process ourselves, so your fresh pair of eyes and your recent experience with it, makes you the best candidate to improve them for other users. Thank you!

### Prerequisites

- Node.js version >= 14.0

In order to check that you have the correct version of node.js installed, run the following in your command line, and the output should look something like this:

> **NOTE**: in all of the code blocks below, lines preceded with $ indicate commands you should enter in your command line (excluding the $ itself), while lines that have no `$` indicate the expected output from the previous command.

```bash
$ node --version
v14.16.1
```

If you get an error or the version listed is less than 14.0, we recommend using [`nodenv`](https://github.com/nodenv/nodenv) or [`nvm`](https://github.com/nvm-sh/nvm) to install the correct version.

### Installation

1. [Fork the repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
1. [Clone the forked repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository) on your local machine: `git clone https://github.com/YOUR_USER/cofundable-website.git`
1. Change directory into the cloned project: `cd cofundable-website`
1. Install project dependencies: `npm install`

### Start

1. Launch the website locally: `npm start`
1. Go to the local port hosting the site: http://localhost:8080

## Deployment

TODO: Add instructions for deployment

## Contributing

Contributions are always welcome! We encourage contributions in the form of discussion on issues in this repo and pull requests for improvements to documentation and code.

See [CONTRIBUTING.md](CONTRIBUTING.md) for ways to get started.

##
