---
title: Members
nav:
  order: 1
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Members

{% include section.html %}

## Current Members

{% include list.html data="members" component="portrait" filters="role: pi" %}
{% include list.html  data="members"  component="portrait"  filters="role: current-postdoc" %}
{% include list.html  data="members"  component="portrait"  filters="role: current-phd-2025-1" %}
{% include list.html  data="members"  component="portrait"  filters="role: current-ms" %}
{% include list.html  data="members"  component="portrait"  filters="role: current-undergrad" %}

<!---
{% include list.html data="members" component="portrait" filters="role: ^(?!pi$)" %}
-->

{% include section.html %}

## Alumni

{% include list.html  data="members"  component="portrait"  filters="role: alum-postdoc" %}
{% include list.html  data="members"  component="portrait"  filters="role: alum-phd" %}
{% include list.html  data="members"  component="portrait"  filters="role: alum-ms" %}
{% include list.html  data="members"  component="portrait"  filters="role: alum-undergrad" %}

<!---
{% include list.html  data="members"  component="portrait"  filters="role: alum" %}
-->

<!---
{% capture content %}

{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}

{% endcapture %}

{% include grid.html style="square" content=content %}
-->
