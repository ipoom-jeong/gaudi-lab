---
title: Contact
nav:
  order: 5
  tooltip: Email, address, and location
---

# {% include icon.html icon="fa-regular fa-envelope" %}Contact

Our lab is affiliated with [the Department of System Semiconductor Engineering](https://system.yonsei.ac.kr/index.php) at Yonsei University. If you're interested in our lab, please contact us in advance at [ipoom@yonsei.ac.kr](mailto:ipoom@yonsei.ac.kr).

Address: Room B171B-2, Engineering Research Park, Yonsei University, 50, Yonsei-ro, Seodaemun-gu, Seoul, Republic of Korea

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
  tooltip="Our location on Google Maps for easy navigation"
  link="https://www.google.com/maps/place/Yonsei+Engineering+Research+Park/data=!3m1!4b1!4m6!3m5!1s0x357c9913cd31e10d:0x2e862a8b6ba600ad!8m2!3d37.5608403!4d126.9354738!16s%2Fg%2F11p4frxt3k?entry=ttu"
%}

{% include section.html %}

{% capture col1 %}

{%
  include figure.html
  image="images/Yonsei_University_Campus.jpg"
  caption="Yonsei University (Seoul Campus)"
%}

{% endcapture %}

{% capture col2 %}

{%
  include figure.html
  image="images/Engineering_Park.png"
  caption="Engineering Research Park"
%}

{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}

{% include section.html dark=true %}

{% capture col1 %}
Lorem ipsum dolor sit amet  
consectetur adipiscing elit  
sed do eiusmod tempor
{% endcapture %}

{% capture col2 %}
Lorem ipsum dolor sit amet  
consectetur adipiscing elit  
sed do eiusmod tempor
{% endcapture %}

{% capture col3 %}
Lorem ipsum dolor sit amet  
consectetur adipiscing elit  
sed do eiusmod tempor
{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}
