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
Paginate = 5 # Number of posts per page
enableRobotsTXT = true

[params.rss] # Adding this tag enables RSS feed
includeContent = true # Includes whole content in rss
authorName = "Emir Ribic" # Author full name
authorEmail = "ribice@gmail.com" # Author email

[params.assets]
customCSS = ["css/custom.css"]

[params.info]
adsense = "" # Adsense ID (ID only, without ca-pub-)
enableSocial = true # Adds OpenGraph and Twitter cards
homeTitle = "" # Title for home page
poweredby = true # Adds powered by hugo and kiss below Copyright
related = true # Includes related articles at the bottom of the article
codeCopy = true # Add copy button above code blocks

[params.features]
disqusOnDemand = true  # Load Disqus comments on click


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
rss = "index.xml" # Add this to show RSS button in social.

[params.social.config]
platforms = ["github","facebook","twitter","instagram","email","codepen","linkedin"]

[params.matomoAnalytics]
siteID = 1
rootURL = "//matomo.example.com/"

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

#### Changing Social Menu Icons Order

If you want to change the order of the social menu icons, modify the `[params.social.config]` section of your `config.toml` file:

```toml
[params.social.config]
platforms = ["github","facebook","twitter","instagram","email","codepen","linkedin"]
```

The social menu icons will appear in the order you specify in the `platforms` array.

## Add sections
Links can be added to the navbar (below the blog name and social links).
There are two positions:

- `[params.sections_left]` that will add links in the left side (under the blog title)
- `[params.sections_right]` that will add links in the right side (under the social links)

```toml
[params.sections_left]
"/special-page" = "Special page"
"https://example.com" = "Example"

[params.sections_right]
"http://example.com/special-page" = "Example"
```

## Favicons, Browserconfig, Manifest

It is recommended to put your own favicons

- `apple-touch-icon.png` (180x180)
- `favicon-32x32.png` (32x32)
- `favicon-16x16.png` (16x16)
- `mstile-150x150.png` (150x150)
- `android-chrome-192x192.png` (192x192)
- `android-chrome-512x512.png` (512x512)

in `/static` directory. They're easily created via [Favicon Generator](https://realfavicongenerator.net/).

Customize `browserconfig.xml` and `site.webmanifest` to set `theme-color` and `background-color` for example.

## Related Articles

To include related articles in the bottom of the content, set params.info.related to true.
By default up to 5 articles will be shown (can be changed by cloning related.html) and only older ones.

To change the behaviour of how related articles are generated, check [official docs on Related Content](https://gohugo.io/content-management/related/).

## Disqus Comments

Hugo has a built-in support for [Disqus comments](https://gohugo.io/content-management/comments/#configure-disqus).
In order to speed up your site full loading time you could load comments only after visitor
requests them via clicking on the "Show comments" button. Use the following in the configuration to enable
on demand loading:

```toml
[params.features]
disqusOnDemand = true 
```

## Single Page Configuration

```
tags: ["Android", "Apple", "iPhone"] # Adds tags to the post
image: https://example.com/img/1/image.jpg # Cover used for OpenGraph and Twitter Cards
adsenseTop: true # If adsense property is set (params.info.adsense) include an ad above content
adsenseBottom: true # If adsense property is set (params.info.adsense) include an ad below content
hidden: true # If true, page will not be shown in the list view
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
