# repos.jonlauridsen.com [![Build Status](https://travis-ci.org/gaggle/repos.jonlauridsen.com.svg?branch=master)](https://travis-ci.org/gaggle/repos.jonlauridsen.com)

This relies on https://github.com/gaggle/repo-lister and https://github.com/gaggle/repo-scraper to generate an overview of my repositories, available at http://repos.jonlauridsen.com.

On master commit a fresh site is re-exported and pushed, and once a day my repositories are re-scraped and the `data.json` payload is pushed.
