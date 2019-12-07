# sciolism 2019
**sciolism 2019** is a light-weighted and minimalistic theme for the static site generator [hugo](http://gohugo.io). The theme was designed for blogs.

[![Build Status](https://travis-ci.com/chemiker/sciolism-2019.svg?token=x4izkYqUsdzKvGgzFj4T&branch=master)](https://travis-ci.com/chemiker/sciolism-2019)

## Installation
1. Clone the repository to your theme directory: 

```cd themes && git clone https://github.com/chemiker/sciolism-2019.git```

2. Activate the theme by adjusting the theme option in your project's `config.toml` file: 

```theme = "enigma-2019"```

## Demo
A live-demo is available [here](https://sciolism.de).

## Features
**sciolism** features a content focused design and has a lot of features that yield a classy and well performing experience of your website. Here are some of the key features:

* *Accessibility-ready:* **sciolism 2019** complies with common accessibility guidelines
* *Customization:* The theme features several features to personalize your website and adjust it to your needs
* *Build-in search:* Let your visitors find everything they are looking for…
* *SEO friendly:* …including your website of course
* *Build-in functions:* Several functions (shortcodes) to ease your daily business featuring limited support for high-resolution graphics, multi-language content, stylish buttons etc. 
* *Night mode:* Individual look for the late hours 🦇

### Font Awesome Icons
The theme has a build-in support for the [FontAwesome](https://fontawesome.com) icon set. To place an icon pick the html code from the [icon gallery](https://fontawesome.com/icons?d=gallery) and place it. E.g. `<i class='fab fa-github'></i>`

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
The `quickfigure` shortcode has threi options. One for the filename, the second for the `alt` HTML attribute and the third for the `<figcaption>` html element. The fourth option can be used to provide a CSS class as described above:

```{{< quickfigure "timeline.png" "Release dates of several projects" "Timeline with release dates of several projects. Dragons included." "noShadow" >}}```

Please note that the CSS class `noShadow` can be used to remove the drop shadow from the images.

#### Menus
**sciolism 2019** features two menus in the footer. The first is the `main` menu thought for the website navigation. The second, `social` can be used to link to your social media accounts. The configuration is done in your website's `config.toml` file as demonstrated below:

```
[menu]
  [[menu.main]]
    name = "About"
    pre = "<i class='fas fa-info-circle'></i>"
    url = "/about/"
    weight = 1

  [[menu.social]]
    name = "Social"
    pre = "<i class='fas fa-comments'></i>"
    url = "#"
    identifier = "socialMediaHeading"

  [[menu.social]]
    name = "GitHub"
    pre = "<i class='fab fa-github'></i>"
    url = "https://github.com/chemiker"
    parent = "socialMediaHeading"
```

#### Theme options
**sciolism 2019** features several additional options as shown below. All options must be included in your `config.toml`.

```
[params.enigma]
  # GENERAL
  # Date format for your posts
  dateFormat = "January 2, 2006"
  blogPostType = "posts"
  # Enable search
  search = true
  # Enable use of favions. If set to true the theme expects the files favicon.ico and favicon-180x180.png in static/
  favIcons = true

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
  slogan = "Playing around with technology"
  # siteDescription is used to fill the <meta description> tag on your homepage
  siteDescription = "sciolism is a blog about software projects as well as other stuff like music, games etc."

  # CONTENT
  # If set to true this will display the whole content of a post as long as no summary was set manually (e.g. by <!--more-->)
  displayFullContentPerDefault = true

  # NAVIGATION
  # Strings for the website navigation
  pagesNextString = "Next"
  pagesPreviousString = "Previous"
```

## License
This project is released under the [MIT license](LICENSE).

It contains software and fonts released under individual licenses:

* *lunr* - Copyright (c) 2013 Oliver Nightingale is released under the MIT license 
* *normalize.css* - Copyright (c) Nicolas Gallagher and Jonathan Neal is released under the MIT license
* *Font Awesome* - Copyright (c) Fonticons, Inc. components are released under CC BY 4.0 license (Icons), SIL OFL 1.1 license (Fonts) and MIT license (Code)
* *Arvo (Font)* - Copyright (c) 2010-2013 Anton Koovit is released under the SIL OFL 1.1 license
* *Hack (Font)* - Copyright (c) 2018 Source Foundry Authors is released under an individual license
* *Open Sans (Font)* - Copyright (c) Google Corporation is released under the Apache License 2.0 