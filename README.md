# Hemingway

Hemingway is a really minimal blog theme for hugo.

![](https://github.com/tanksuzuki/hemingway/blob/master/images/tn.png)

## Getting Started

Clone this repository to your hugo theme directory.

```
mkdir themes
cd themes
git clone https://github.com/tanksuzuki/hemingway.git
```

## Configuration

Take a look in the [exampleSite](https://github.com/tanksuzuki/hemingway/tree/master/exampleSite) folder.

This directory contains an example config file and the content for the demo.
It serves as an example setup for your documentation.

Copy the `config.toml` in the root directory of your website. Overwrite the existing config file if necessary.

__[config.toml](https://github.com/tanksuzuki/hemingway/blob/master/exampleSite/config.toml)__:

```toml
baseurl = "https://example.com"
languageCode = "en"
title = "Hemingway"
theme = "hemingway"
copyright = "&copy; <a href=\"https://github.com/tanksuzuki\">Asuka Suzuki</a> 2016"
disqusShortname = "shortname"
googleAnalytics = ""

[params]

[params.highlight]
style = "github"
languages = ["go", "dockerfile"]

[[params.social]]
url = "https://github.com/tanksuzuki"
fa_icon = "fa-github"

[[params.social]]
url = "https://twitter.com/tanksuzuki"
fa_icon = "fa-twitter"

[[params.social]]
url = "/index.xml"
fa_icon = "fa-rss"
```

## Build

```
hugo server
```

You can go to localhost:1313 and this theme should be visible.

## License

Hemingway is licensed under the [MIT License](LICENSE.md).

## Author

[Asuka Suzuki](https://github.com/tanksuzuki)
