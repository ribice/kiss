# Kiss

![](https://www.ribice.ba/img/2/hugo-kiss.png)

Kiss is a stupidly simple blog theme for Hugo. It's a fork of [Hemingway theme](https://github.com/tanksuzuki/hemingway) - [read why](https://www.ribice.ba/hugo-kiss/).

![](https://github.com/ribice/kiss/blob/master/images/screenshot.png)

## Getting Started

Clone this repository to your hugo theme directory.

```bash
mkdir themes
cd themes
git clone https://github.com/ribice/kiss.git
```

## Site Configuration

Take a look in the [exampleSite](https://github.com/ribice/kiss/tree/master/exampleSite) folder.

This directory contains an example config file and the content for the demo.
It serves as an example setup for your documentation.

Copy the `config.toml` in the root directory of your website. Overwrite the existing config file if necessary.

__[config.toml](https://github.com/ribice/kiss/blob/master/exampleSite/config.toml)__:

```toml
baseurl = "https://example.com"
languageCode = "en"
title = "Hugo Kiss theme"
theme = "kiss"
copyright = "&copy; <a href=\"https://github.com/ribice\">Emir Ribic</a> 2017"
disqusShortname = "shortname"
googleAnalytics = ""
# Number of posts per page
Paginate = 5
enableRobotsTXT = true


[params.assets]
customCSS = ["css/custom.css"]

[params.info]
adsense = "" # Adsense ID (ID only, without ca-pub-)
enableSocial = true # Adds OpenGraph and Twitter cards
homeTitle = "" # Title for home page
poweredby = true # Adds powered by hugo and kiss below Copyright
related = true # Includes related articles at the bottom of the article


[params.opengraph.facebook]
admins = [] # array of Facebook IDs
appID = ""
pageID = ""

[params.opengraph.twitter]
page = "" # Twitter Page username. If not set, params.social.twitter will be used.

[params.social]

twitter = "ribicemir"
github = "ribice"
email = "ribice@gmail.com"
linkedin = "ribice"
facebook = "ribice"
instagram = ""
codepen = ""

[taxonomies]
tag ="tags"

[blackfriday]
hrefTargetBlank = true
```

To change color of titles, add in static/css/custom.css

```css
.content h1,
.content h2,
.content h3,
.content h4,
.content h5,
.content h6 {
    color: #F52AA3; // Custom Color
}
```

To align images, add #c for center, #r/l for right/left.

```md
![](/img/1/image.jpg#c)
```

## Related Articles

To include related articles in the bottom of the content, set params.info.related to true.
By default up to 5 articles will be shown (can be changed by cloning related.html) and only older ones.

To change the behaviour of how related articles are generated, check [official docs on Related Content](https://gohugo.io/content-management/related/).

## Single Page Configuration

```
tags: ["Android", "Apple", "iPhone"] # Adds tags to the post
cover: https://example.com/img/1/image.jpg # Cover used for OpenGraph and Twitter Cards
adsenseTop: true # If adsense property is set (params.info.adsense) include an ad above content
adsenseBottom: true # If adsense property is set (params.info.adsense) include an ad below content
```

## Build

```
hugo server
```

You can go to localhost:1313 and this theme should be visible.

## License

Kiss is licensed under the MIT license. Check the [LICENSE](LICENSE.md) file for details.

The following resources are included in the theme:

- [Feather](https://feather.netlify.com/) by Cole Bemis - Licensed under the [MIT License](https://github.com/colebemis/feather/blob/master/LICENSE).

## Author

[Emir Ribic](https://github.com/ribice)