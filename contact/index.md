---
title: Contact
nav:
  order: 5
  tooltip: Email, address, and location
---

# {% include icon.html icon="fa-regular fa-envelope" %}Contact

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

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
  link="https://www.google.com/maps/place/Yonsei+University,+Sinchon+Campus/data=!3m1!4b1!4m6!3m5!1s0x357c988ea13e280f:0xb7b75243ec5a638e!8m2!3d37.5663937!4d126.9387066!16zL20vMDNrd2xz?entry=ttu"
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
  caption="Engineering Park"
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
