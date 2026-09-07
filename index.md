---
---

<div class="home-page">
  <div class="home-hero">
    <div class="home-hero__copy">
      <p class="home-eyebrow">GAUDI LAB · YONSEI UNIVERSITY</p>
      <h1>Architecting the future<br>of intelligent computing.</h1>
      <p class="home-fullname">General-Purpose Architectures with Unleashed Design Innovations</p>
      <p class="home-lead">We build high-performance, energy-efficient computer architectures—from CPU and GPU microarchitecture to heterogeneous AI systems, CXL, and near-data processing.</p>
      <div class="home-actions">
        <a class="home-button home-button--primary" href="{{ 'research' | relative_url }}">Explore our research <span aria-hidden="true">→</span></a>
        <a class="home-button" href="{{ 'blogs' | relative_url }}">View publications</a>
      </div>
    </div>
    <div class="home-brandmark" aria-label="GAUDI Lab logo">
      <div class="home-brandmark__halo"></div>
      <img src="{{ 'images/GAUDI_logo.svg' | relative_url }}" alt="GAUDI Lab logo combining Antoni Gaudí's profile with computer circuit traces">
      <div class="home-brandmark__caption"><strong>Art × Architecture × Computing</strong><span>Organic imagination, engineered systems</span></div>
    </div>
  </div>
</div>

{% include section.html %}

<div class="home-page">
  <div class="home-heading">
    <p class="home-eyebrow">RESEARCH AREAS</p>
    <h2>From microarchitecture to complete systems</h2>
    <p>Our research spans the computing stack, connecting fundamental architecture ideas with emerging platforms and real workloads.</p>
  </div>

  <div class="research-grid">
    <a class="research-card" href="{{ 'research' | relative_url }}"><span class="research-card__number">01</span><h3>CPU Microarchitecture</h3><p>Speculation, dynamic scheduling, SMT, and heterogeneous multi-core architectures.</p><span class="research-card__link">Explore →</span></a>
    <a class="research-card" href="{{ 'research' | relative_url }}"><span class="research-card__number">02</span><h3>GPU &amp; Accelerators</h3><p>Energy-efficient GPGPU, NPU, virtual memory, and on-chip accelerator architectures.</p><span class="research-card__link">Explore →</span></a>
    <a class="research-card" href="{{ 'research' | relative_url }}"><span class="research-card__number">03</span><h3>Memory &amp; CXL</h3><p>Emerging interconnects, memory expansion, and heterogeneous cooperative computing.</p><span class="research-card__link">Explore →</span></a>
    <a class="research-card" href="{{ 'research' | relative_url }}"><span class="research-card__number">04</span><h3>System Orchestration</h3><p>Resource management across CPUs, accelerators, memory, cache, and I/O devices.</p><span class="research-card__link">Explore →</span></a>
    <a class="research-card" href="{{ 'research' | relative_url }}"><span class="research-card__number">05</span><h3>Near-Data Processing</h3><p>Processing in memory, storage, and networks for data-intensive applications.</p><span class="research-card__link">Explore →</span></a>
  </div>
</div>

{% include section.html %}

<div class="home-page">
  <div class="home-heading home-heading--split">
    <div><p class="home-eyebrow">SELECTED IMPACT</p><h2>Research recognized at leading venues</h2></div>
    <a class="home-text-link" href="{{ 'blogs' | relative_url }}">All publications →</a>
  </div>
  <div class="impact-list">
    <a class="impact-item" href="{{ 'blogs' | relative_url }}"><span class="impact-venue">MICRO 2026</span><strong>Non-Speculative Redundant Load Elimination</strong><span class="impact-topic">CPU Microarchitecture</span></a>
    <a class="impact-item" href="{{ 'blogs' | relative_url }}"><span class="impact-venue">ISCA 2025</span><strong>UPP: Universal Predicate Pushdown to Smart Storage</strong><span class="impact-topic">Near-Data Processing</span></a>
    <a class="impact-item" href="{{ 'blogs' | relative_url }}"><span class="impact-venue">ISCA 2025</span><strong>A4: Microarchitecture-Aware LLC Management</strong><span class="impact-topic">System Architecture</span></a>
    <a class="impact-item" href="{{ 'blogs' | relative_url }}"><span class="impact-venue">MICRO 2024</span><strong>Demystifying a CXL Type-2 Device</strong><span class="impact-topic">CXL &amp; Heterogeneous Computing</span></a>
  </div>
</div>

{% include section.html %}

<div class="home-page">
  <div class="home-heading home-heading--split">
    <div><p class="home-eyebrow">LATEST</p><h2>News from the lab</h2></div>
    <a class="home-text-link" href="{{ 'news' | relative_url }}">All news →</a>
  </div>
  {% assign sorted_news = site.data.news | sort: "date" | reverse %}
  <div class="home-news">
    {% for post in sorted_news limit:4 %}
    <article class="home-news__item">
      <time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: "%b %d, %Y" }}</time>
      <h3>{{ post.title }}</h3>
      <p>{{ post.description }}</p>
      {% if post.url %}<a href="{{ post.url }}" target="_blank" rel="noopener">Read more ↗</a>{% endif %}
    </article>
    {% endfor %}
  </div>
</div>

{% include section.html %}

<div class="home-page">
  <div class="join-banner">
    <div>
      <p class="home-eyebrow">JOIN GAUDI LAB</p>
      <h2>Build the next computing architecture with us.</h2>
      <p>We welcome highly motivated postdoctoral researchers, Ph.D. candidates, and M.S. students. Scholarships are available for qualified applicants.</p>
    </div>
    <a class="home-button home-button--primary" href="{{ 'contact' | relative_url }}">Contact us →</a>
  </div>
</div>
