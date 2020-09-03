# sciolism 2019
**sciolism 2019** is a light-weighted and minimalistic theme for the static site generator [hugo](http://gohugo.io). The theme was designed for blogs.

[![Maintainability](https://api.codeclimate.com/v1/badges/66a76207d5ec38570681/maintainability)](https://codeclimate.com/github/chemiker/sciolism-2019/maintainability) [![Build Status](https://travis-ci.com/chemiker/sciolism-2019.svg?token=x4izkYqUsdzKvGgzFj4T&branch=master)](https://travis-ci.com/chemiker/sciolism-2019)

![sciolism 2019](https://github.com/chemiker/sciolism-2019/raw/master/images/screenshot.png)

## Installation
1. Download the latest [release](https://github.com/chemiker/sciolism-2019/releases) of the theme or clone this repository and move the files in the `theme` folder of your Hugo instance.
2. Activate the theme by adjusting the theme option and insert all necessary [theme options](#theme-options) in your project's `config.toml` file:

```theme = "sciolism-2019"```

## Demo
A live-demo is available [here](https://sciolism.de).

## Features
**sciolism** features a content focused design and has a lot of features that yield a modern and well performing experience of your website. Here are some of the key features:

* *Accessibility-ready:* **sciolism 2019** complies with common accessibility guidelines
* *Customization:* The theme features several features to personalize your website and adjust it to your needs 🔧
* *Build-in search:* Let your visitors find everything they are looking for… 🔎
* *SEO friendly:* …including your website of course 🌍
* *Build-in functions:* Several functions (shortcodes) to ease your daily business featuring limited support for high-resolution graphics, multi-language content, stylish buttons etc.
* *Night mode:* Individual look for the late hours 🦇

### Font Awesome Icons
The theme has a build-in support for the [FontAwesome](https://fontawesome.com) icon set. To place an icon pick the html code from the [icon gallery](https://fontawesome.com/icons?d=gallery) and place it. E.g. `<i class='fab fa-github'></i>`

### (Blog) posts

The theme supports add. meta information for the archetype "post". Posts created by e.g. `hugo new post/myPost.md` do also have their own archetype template which have all add. fields listed:

```yaml
---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
#categories: -
#tags: -
#description:
#language: ""
#externalURL: ""
#image: [""]
---
```

Most of them are built-in resources but a few are additional:

#### Description

Description is used to fill the `<meta description>` tag for the post's site.

#### Language

You can use this if your site has multilingual content and you want to overwrite the default language code for the article.

#### externalURL

This allows you to overwrite the URL used for the headline link. The headline will also get a symbol to indicate that the headline links to an external resource. This can e.g. be used if the main purpose of the post is to link to a article, video or whatever.

### Internationalization

The theme is ready for internationalization and comes with translations into English and German.

### Shortcodes
#### Buttons
Buttons can be placed by using the `button` shortcode. An example of the buttons in action can be found [here](https://sciolism.de/projects/e.nigma-2015/). They can be customized by using the `url`, `title`, `icon` and `color` attributes. E.g.

```{{< button url="//github.com/chemiker/e.nigma2015" title="Fork on GitHub" icon="<i class='fab fa-github'></i>" color="purple" >}}#```

For the `icon` attribute you can use the FontAwesome icons as described above. For the `color` attribute you can pick from `green`, `orange`, `purple`, `blue` or `red`.

#### Images
In addition to the [built-in shortcodes](https://gohugo.io/content-management/shortcodes/#use-hugos-builtin-shortcodes) for including images **sciolism 2019** has build in two additional shortcodes: `img` and `quickfigure`. The main difference is that `quickfigure` makes use of the `<figcaption>` html element.

##### img
The `img` shortcode has two main options. One for the filename, the second for the `alt` HTML attribute:

```{{< img "picture.png" "Text for alt attribute" >}}```

You can further provide a CSS class by using the third option:

```{{< img "picture.png" "Text for alt attribute" "noShadow" >}}```

##### quickfigure
The `quickfigure` shortcode has three options. One for the filename, the second for the `alt` HTML attribute and the third for the `<figcaption>` html element. The fourth option can be used to provide a CSS class as described above:

```{{< quickfigure "timeline.png" "Release dates of several projects" "Timeline with release dates of several projects. Dragons included." "noShadow" >}}```

Please note that the CSS class `noShadow` can be used to remove the drop shadow from the images.

#### Others

`left`, `right` and `center` shortcodes can be used to change the text-align. `highlighText` can be used to visually highlight text.

### Abbreviations

The theme comes with support for automatically replacing abbreviation or acronyms with their expansion or description. To do so the theme will read the file `abbr.toml` placed in your `data` folder. Add entries as follows:

```toml
"HTML" = "HyperText Markup Language"
```

### Search

If enabled in the theme options, the theme has a build in search. In order to enable search one additional step is necessary. In your `config.toml` file you need to enable the JSON output:

```toml
[outputs]
  blog = ["HTML", "JSON"]
```

This will provide an index file which is used by the search engine.

### Menus
**sciolism 2019** features two menus in the footer. The first is the `main` menu thought for the website navigation. The second, `aside` can be e.g. be used to link to your social media accounts. The configuration is done in your website's `config.toml` file as demonstrated below:

```toml
[menu]
  [[menu.main]]
    name = "About"
    pre = "<i class='fas fa-info-circle'></i>"
    url = "/about/"
    weight = 1

  [[menu.aside]]
    name = "GitHub"
    pre = "<i class='fab fa-github'></i>"
    url = "https://mygithubprofile"
    parent = "socialMediaHeading"
```

### Theme options
**sciolism 2019** features several additional options as shown below. Include options in your `config.toml` as needed. While the theme has fallbacks if options are not set it is recommended to copy the configuration below and adjust it to your needs. Further documentation about the settings is available from the comments:

```toml
[params.sciolism]
  # GENERAL
  # Date format for your posts
  dateFormat = "January 2, 2006"
  # Enable search
  search = true
  # Enable use of favions. If set to true the theme expects the files favicon.ico and favicon-180x180.png in static/
  favIcons = true
  # You can use this setting to list all partials (e.g. whatever.html) that you want to include in the header. Thus you don't have to modify the theme's code.
  headerPartials = []

  # SEO
  # Enable support for openGraph and twitterCards integration
  # If you want to provide a default image for openGraph you can place an image with the name ogImage.png in static/
  openGraph = true
  twitterCards = true

  # HEADER
  # If set to true, this will use the image provided in logoPath as logo in the header. If set to false, it will show you sites title instead
  logo = false
  # If logo is set to true, the logo url must be provided
  logoPath = "logo.png"
  # Slogan for your website
  slogan = "My slogan"
  # siteDescription is used to fill the <meta description> tag on your homepage
  siteDescription = "My site deals with stuff"

  # CONTENT
  # If set to true this will display the whole content of a post as long as no summary was set manually (e.g. by <!--more-->)
  displayFullContentPerDefault = true

  # NAVIGATION
  # Strings for the website navigation
  mainMenuString = "<i class='fas fa-bars'></i>Navigation"
  asideMenuString = "<i class='fas fa-users'></i>Social"
```

## Development
### Requirements
* yarn

### Installation
1. Download the zip archive or clone the repository to your hugo development environment
2. run `yarn install`
3. run `yarn run gulp renderStatics` to compile all files required for development
4. run `hugo server`

For distribution you can run `yarn run gulp make`. This will create a `dist/` folder ready for production.

## License
This project is released under the [MIT license](LICENSE).

It contains software and fonts released under individual licenses:

* *lunr* - Copyright (c) 2013 Oliver Nightingale is released under the MIT license
* *normalize.css* - Copyright (c) Nicolas Gallagher and Jonathan Neal is released under the MIT license
* *Font Awesome* - Copyright (c) Fonticons, Inc. components are released under CC BY 4.0 license (Icons), SIL OFL 1.1 license (Fonts) and MIT license (Code)
* *Hack (Font)* - Copyright (c) 2018 Source Foundry Authors is released under an individual license
* *Open Sans (Font)* - Copyright (c) Google Corporation is released under the Apache License 2.0
* *npm-font-open-sans* - Copyright (c) Enrico Hoffmann is released under the Apache License 2.0
* *Roboto Slab (Font)* - Copyright (c) Google Corporation is released under the Apache License 2.0
* *roboto-slab_all* - Copyright (c) 2019 Jan Bednar is released under the MIT license
