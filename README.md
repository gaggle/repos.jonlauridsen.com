# repos.jonlauridsen.com [![Build Status](https://travis-ci.org/gaggle/repos.jonlauridsen.com.svg?branch=master)](https://travis-ci.org/gaggle/repos.jonlauridsen.com)

This relies on [repo-lister][repo-lister] and [repo-scraper][repo-scraper] to generate an overview of my repositories, available at http://repos.jonlauridsen.com.

Master commits trigger a fresh site re-export, which is automatically deployed. And once a day my repositories are re-scraped and the `data.json` payload pushed up.

[repo-lister]: https://github.com/gaggle/repo-lister
[repo-scraper]: https://github.com/gaggle/repo-scraper
