---
---

# Welcome to GAUDI Lab!

GAUDI Lab is dedicated to exploring multi-directional innovations in **computer architectures and systems** through cutting-edge research and worldwide collaboration.

{%
  include button.html
  link="research"
  text="See our research topics"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}


#### Join Us

We are looking for **enthusiastic** and **highly self-motivated** Postdoctoral researchers, Ph.D. candidates, and M.S. students to join our dynamic research team. Multiple scholarships are available for qualified applicants.
Prospective students are strongly encouraged to contact us at least **six months before admission** and are expected to complete an internship before enrollment.

{%
  include button.html
  link="contact"
  text="Contact information"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}


{% include section.html %}

## Latest News

  {% assign sorted_news = site.data.news | sort: "date" | reverse %}
    {% for post in sorted_news limit:7 %}
    
  <div class="news-card">
    <div class="news-header">
        <span class="news-title">{{ post.title }}</span>
        <span class="news-date">{% include icon.html icon="fa-regular fa-calendar" %} {{ post.date | date: "%B %d, %Y" }} </span>
    </div>
    <div class="news-description">
        {{ post.description }} 
            {% if post.url %}
            <a href="{{ post.url }}" target="_blank">More...</a>
            {% endif %}
    </div>
  </div>

  {% endfor %}  

{%
  include button.html
  link="news"
  text="View all news"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% include section.html %}

## Who We Are

{% capture text %}

Interested in meeting the faces behind our research? Click through and say hello to our team! We’re excited to welcome versatile researchers like you to join us.

{%
  include button.html
  link="team"
  text="Meet our team"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/main/our_team.png"
  link="team"
  title="Our Team"
  text=text
%}


{% capture text %}

Discover what our lab is all about! Our research focuses on high-performance and energy-efficient CPU/GPU microarchitectures, computing system orchestration, near-data processing, emerging interconnect technologies, _etc_.

{%
  include button.html
  link="blogs"
  text="See our publications"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/main/our_research.png"
  link="research"
  title="Our Research"
  flip=true
  text=text
%}


{% capture text %}

Explore detailed descriptions of the cutting-edge research and innovative initiatives we are currently working on. Each project reflects our commitment to advancing technology and addressing complex challenges in computer systems and architectures.

{%
  include button.html
  link="projects"
  text="Browse our projects"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/main/our_projects.png"
  link="projects"
  title="Our Projects"
  style="bare"
  text=text
%}
