---
title: "Search"
date: 2020-09-02
draft: false
categories:
 - Features
tags:
 - Search
description: "This is an example to overwrite the site description"
#language: ""
#externalURL: ""
#image: [""]
---

If enabled in the theme options, the theme has a build in search. In order to enable search two additional steps are necessary. In your `config.toml` file you need to enable the JSON output:

```
[outputs]
  blog = ["HTML", "JSON"]
```

This will provide an index file which is used by the search engine. In case you want to tweak the search (e.g. add other page types or other fields to be included in the search) you can grab the `index.json` file and place a modified copy in your `layouts/` folder. In addition you need to create a `search.md` site and set the type to "search":

```
---
type: search
---
```