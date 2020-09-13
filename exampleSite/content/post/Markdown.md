---
title: "Markdown"
date: 2020-09-11
draft: false
categories:
 - Features
tags:
 - Markdown
 - Shortcode
#description:
#language: ""
#externalURL: ""
#image: [""]
---

### Text

This text *has* **several** [markdown](https://example.com) shortcodes but it also demonstrates the `highlightText` shortcode:

{{< highlightText >}}This text is highlighted using the highlightText shortcode.{{< /highlightText >}}<!--more-->

### Headlines

# H1
## H2
### H3
#### H4
##### H5
###### H6

### List Types

#### Unordered List

* Three
* One
* Two

#### Nested list

* Primary
	* Secondary
* Primary
* Primary

#### Ordered List

1. One
2. Two
3. Three

### Blockquotes

> **sciolism** (_countable and uncountable, plural sciolisms_)
>
> The practice, or an instance, of expressing opinions on something which one knows only superficially or has little real understanding of.<cite>Wiktionary[^1]</cite>

### Tables

| Column | Another column
| -|-
| Here | be
| | dragons

### Code with syntax highlighting

```php
<?php
	$generator = "hugo";

	if ( $generator == "hugo" ) {
		echo "🥳";
	}
?>
```

[^1]: https://en.wiktionary.org/wiki/sciolism