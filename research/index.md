---
title: Research
nav:
  order: 2
  tooltip: Research topics
---

# {% include icon.html icon="fa-solid fa-microscope" %}Research

{% include section.html %}

## Research Topics

Our research topics include, _but are not limited to_, the following areas:

{% capture text %}

### **Computer System Architectures and Resource Orchestration**

Modern computer systems have become larger and more complex, underscoring the need for designing highly efficient system architectures and effectively orchestrating shared resources, such as memory and Last-Level Cache (LLC). We are investigating cutting-edge systems and exploring diverse solutions to improve system-wide processing efficiency.

{% include button.html flip=true style="bare" %}

{% endcapture %}

{% include feature.html image="images/research/computer_system.png" flip=false text=text %}


{% capture text %}

### **CPU Core Microarchitectures and Multi-core Architectures**

The Central Processing Unit (CPU) plays a vital role in a system by running applications and system software, managing system resources, interacting with I/O devices, _etc_. We are exploring advanced microarchitectural techniques, such as dynamic scheduling and speculation, as well as innovative multi-core architectures like heterogeneous multi-core and simultaneous multi-threading, to enhance the CPU's performance and energy efficiency.

{% include button.html flip=true style="bare" %}

{% endcapture %}

{% include feature.html image="images/research/cpu_research.png" flip=true text=text %}


{% capture text %}

### **GPGPU and Accelerator Architectures**

Emerging applications with diverse computation patterns have driven the development of specialized hardware designed to deliver optimal performance per watt for these tasks. We are exploring energy-efficient architectures for General-Purpose Graphics Processing Units (GPGPUs) and Neural Processing Units (NPUs) while also investigating use cases for on-chip accelerators.

{% include button.html flip=true style="bare" %}

{% endcapture %}

{% include feature.html image="images/research/gpu_research.png" flip=false text=text %}


{% capture text %}

### **Near-Data Processing**

Recent data-centric applications face significant bottlenecks in transferring large volumes of data between processors and memory, storage, or networks. To tackle these challenges, we are exploring efficient near-data processing techniques across multiple layers of a system, including Processing-In-Memory (PIM), In-Storage Processing (ISP), and In-Network Computing (INC).

{% include button.html flip=true style="bare" %}

{% endcapture %}

{% include feature.html image="images/research/smart_ssd.png" flip=true text=text %}


{% capture text %}

### **Emerging Interconnect Technologies**

Compute eXpress Link (CXL) is an open standard for high-speed, efficient interconnect between CPUs and other devices like memory, accelerators (_e.g._, GPUs, FPGAs), and SmartNICs (Network Interface Cards). It is designed to improve performance and resource sharing in data centers, particularly in large-scale computing, AI, and machine learning environments. 

{% include button.html flip=true style="bare" %}

{% endcapture %}

{% include feature.html image="images/research/cxl_research.png" flip=false text=text %}


{% include section.html %}


## Collaboration

{%
  include figure.html
  image="images/group-photo.jpg"
  caption="Embedded Systems and Computer Architecture Lab (eSCaL) at Yonsei University"
  link="http://escal.yonsei.ac.kr/"
  width="400px"
%}

{%
  include figure.html
  image="images/group-photo.jpg"
  caption="Future Architecture and System Technology for Scalable Computing (FAST) at University of Illinois Urbana-Champaign (UIUC)"
  link="https://fast.ece.illinois.edu/index.html"
  width="400px"
%}
