---
title: Contact
nav:
  order: 6
  tooltip: Email, address, and location
---

# {% include icon.html icon="fa-regular fa-bell" %}Before You Contact

{% include section.html %}

# {% include icon.html icon="fa-regular fa-envelope" %}Contact

GAUDI Lab is affiliated with [the Department of System Semiconductor Engineering](https://system.yonsei.ac.kr/index.php) at Yonsei University. If you're interested in our lab, please contact us in advance at [_ipoom@yonsei.ac.kr_](mailto:ipoom@yonsei.ac.kr).

GAUDI Lab: Room D506, Engineering Building IV, Yonsei University, 50, Yonsei-ro, Seodaemun-gu, Seoul, Republic of Korea <br>
PI Office: Room B171B-2, Engineering Research Park, Yonsei University, 50, Yonsei-ro, Seodaemun-gu, Seoul, Republic of Korea

{%
  include button.html
  type="email"
  text="ipoom@yonsei.ac.kr"
  link="ipoom@yonsei.ac.kr"
%}
{%
  include button.html
  type="phone"
  text="(02) 2123-5853"
  link="+82-2-2123-5853"
%}
{%
  include button.html
  type="address"
  tooltip="PI office on Google Maps for easy navigation"
  link="https://www.google.com/maps/place/Yonsei+Engineering+Research+Park/data=!3m1!4b1!4m6!3m5!1s0x357c9913cd31e10d:0x2e862a8b6ba600ad!8m2!3d37.5608403!4d126.9354738!16s%2Fg%2F11p4frxt3k?entry=ttu"
%}

{% include section.html %}

{% capture col1 %}

{%
  include figure.html
  image="images/contact/campus.jpg"
  caption="Yonsei University (Seoul Campus)"
%}

{% endcapture %}

{% capture col2 %}

{%
  include figure.html
  image="images/contact/eng_research_park.png"
  caption="Engineering Research Park"
%}

{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}
