---
---

# Welcome to GAUDI Lab!

GAUDI Lab is dedicated to exploring multi-directional innovations in **computer architectures and systems** through cutting-edge research and worldwide collaboration.

{: style="text-align: right" }
#### Join Us

We are looking for **enthusiastic** and **highly self-motivated** Postdoctoral researchers, Ph.D. candidates, and M.S. students to join our dynamic research team. Multiple scholarships are available for qualified applicants.
Prospective students are strongly encouraged to contact us at least **six months before admission** and are expected to complete an internship before enrollment.

If you're interested in becoming part of our lab, please reach out to us at [_ipoom@yonsei.ac.kr_](mailto:ipoom@yonsei.ac.kr).

{% include section.html %}

## Latest News

  {% assign sorted_news = site.data.news | sort: "date" | reverse %}
    {% for post in sorted_news limit:5 %}
    
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


<!--
## News
**[25.09]** **Jaehun Kim** has joined our lab as a PhD student. Welcome aboard!

**[25.08]** **Suhyeok Oh** has joined our lab as an undergraduate research intern. Welcome aboard!

**[25.07]** Our paper, *"Re-architecting End-host Networking with CXL: Coherence, Memory, and Offloading,"* has been accepted to the IEEE/ACM International Symposium on Microarchitecture **(MICRO, NRF BK21+ IF: 4)**. 

**[25.07]** **Seonghun Jeong** has joined our lab as an undergraduate research intern. Welcome aboard!

**[24.06]** Our paper, *"Time Series Machine Learning Models for Precise SSD Access Latency Prediction,"* has been accepted to the IEEE Computer Architecture Letters **(CAL, SCI(E) Q4)**. 

**[24.05]** Our research proposal, *"AI Semiconductor Innovation Lab (Yonsei University),"* has been accepted by the Institute for Information & communication Technology Planning & evaluation **(IITP)**.

**[24.05]** Our research proposal, *"Basic Research Laboratory for Energy-Efficient, General-Purpose Multi-Modal AI with Heterogeneous Computing Accelerators,"* has been accepted by the National Research Foundation of Korea **(NRF)**.

**[25.03]** Our paper, *"A4: Microarchitecture-Aware LLC Management for Datacenter Servers with Emerging I/O Devices,"* has been accepted to the ACM/IEEE International Symposium on Computer Architecture **(ISCA, NRF BK21+ IF: 4)**. 

**[25.03]** Our paper, *"UPP: Universal Predicate Pushdown to Smart Storage,"* has been accepted to the ACM/IEEE International Symposium on Computer Architecture **(ISCA, NRF BK21+ IF: 4)**. 

**[25.03]** **Yeonwoo Choi** has joined our lab as an undergraduate research intern. Welcome aboard!

**[25.03]** Our paper, *"Intel® In-Memory Analytics Accelerator: Performance Characterization and Guidelines,"* has been accepted to the IEEE International Symposium on Performance Analysis of Systems and Software **(ISPASS, NRF BK21+ IF: 1)** and nominated for **the Best Paper award**. 

**[25.03]** **Junhwan Lee** has joined our lab as a PhD student. Welcome aboard!

**[25.01]** **Jaehun Kim**, **Seongjun Hong**, **Eeyeon Goo** have joined our lab as undergraduate research interns. Welcome aboard!

**[24.11]** Our paper, *"Marching Page Walks: Batching and Concurrent Page Table Walks for Enhancing GPU Throughput,"* has been accepted to the IEEE International Symposium on High-Performance Computer Architecture **(HPCA, NRF BK21+ IF: 4)**. 

**[24.11]** Our paper, *"Warped-Compaction: Maximizing GPU Register File Bandwidth Utilization via Operand Compaction,"* has been accepted to the IEEE International Symposium on High-Performance Computer Architecture **(HPCA, NRF BK21+ IF: 4)**. 

**[24.07]** Our paper, *"Demystifying a CXL Type-2 Device: A Heterogeneous Cooperative Computing Perspective,"* has been accepted to the IEEE/ACM International Symposium on Microarchitecture **(MICRO, NRF BK21+ IF: 4)**. 

**[24.07]** **Junhwan Lee** has joined our lab as an undergraduate research intern. Welcome aboard!

**[24.04]** Our research proposal, *"Development of CXL-based PNM Architecture and Simulation Platform for LLM Acceleration,"* has been accepted by the Korea Evaluation Institute of Industrial Technology **(KEIT)**.

**[24.03]** Our paper, *"Intel Accelerators Ecosystem: An SoC-Oriented Perspective : Industry Product,"* has been accepted to the ACM/IEEE International Symposium on Computer Architecture **(ISCA, NRF BK21+ IF: 4)**. 

**[24.03]** Our paper, *"HAL: Hardware-assisted Load Balancing for Energy-efficient SNIC-Host Cooperative Computing,"* has been accepted to the ACM/IEEE International Symposium on Computer Architecture **(ISCA, NRF BK21+ IF: 4)**.

**[24.03]** **Dr. Ipoom Jeong** has joined the Department of System Semiconductor Engineering as an Assistant Professor, and **GAUDI Lab** is embarking on an exciting journey to explore innovative and intriguing computer architectures and systems!
-->

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
  image="images/main/our_team.jpg"
  link="team"
  title="Our Team"
  text=text
%}


{% capture text %}

Discover what our lab is all about! Our research focuses on high-performance and energy-efficient CPU/GPU microarchitectures, computing system orchestration, near-data processing, emerging interconnect technologies, _etc_.

{%
  include button.html
  link="research"
  text="See our research topics"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

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
  image="images/main/our_research.jpg"
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
  image="images/main/our_projects.jpg"
  link="projects"
  title="Our Projects"
  style="bare"
  text=text
%}
