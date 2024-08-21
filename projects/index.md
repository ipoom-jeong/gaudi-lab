---
title: Projects
nav:
  order: 4
  tooltip: Software, datasets, and more
---

# {% include icon.html icon="fa-solid fa-wrench" %}Projects

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

{% include tags.html tags="publication, resource, website" %}

{% include search-info.html %}

{% include section.html %}

## Featured

{% include list.html component="card" data="projects" filters="group: featured" %}

{% include section.html %}

## More

{% capture text %}

**Developing Low-Power Mobile Computing Platform**

- Research project at Yonsei University joint with LG Electronics (2014.07 - 2017.11)

- Inter- and Intra-core optimization techniques for higher energy efficiency of mobile APs (Application Processors)

{% include button.html flip=true style="bare" %}

{% endcapture %}

{% include feature.html image="images/dopamine.png" flip=true text=text %}
