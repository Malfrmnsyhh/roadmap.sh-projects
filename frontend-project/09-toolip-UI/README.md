# CSS-Only Tooltip UI

This repository contains a solution for the **"Tooltip UI"** frontend challenge from [roadmap.sh](https://roadmap.sh/projects/tooltip-ui). The project focuses on creating interactive, informational pop-ups for navigation items using **pure HTML and CSS** without relying on JavaScript.

## 🎯 Project Goals

The primary objective of this project is to master **CSS positioning** and **dynamic UI effects**. By completing this challenge, the implementation demonstrates:

1.  **CSS Positioning:** Learning how to position elements relative to each other (parent-child relationships) to ensure the tooltip appears exactly above the specific navigation item.
2.  **Hover Effects:** Implementing state changes that trigger the tooltip visibility only when a user hovers over a target element.
3.  **Smooth Transitions:** Creating visually appealing animations (such as fade-in, slide-in, or scale-in effects) to make the UI feel modern and fluid.
4.  **No JavaScript:** Achieving interactive functionality solely through CSS styling rules.

## 🛠️ Implementation Details

* **Structure:** A clean navigation menu (e.g., Home, Projects, Blog).
* **Tooltip Logic:**
    * The tooltip is hidden by default using `opacity: 0` and `visibility: hidden`.
    * Upon hovering the parent container (`:hover`), the tooltip becomes visible.
    * The "arrow" pointing down to the menu item is created using CSS pseudo-elements (`::after` or `::before`).

## 🚀 Link Project
https://roadmap.sh/projects/tooltip-ui



---
*Developed as part of the roadmap.sh frontend learning path.*