# Harsh Desai Personal Website

This repository contains the source for my personal portfolio website, hosted on GitHub Pages at [harshdesai.cv](https://harshdesai.cv). The site highlights my background, projects, technical skills, experience, and contact information.

## Overview

The site is built with [Jekyll](https://jekyllrb.com/), GitHub Pages' native static site generator:
- HTML layouts + [Liquid](https://shopify.github.io/liquid/) templating for page structure
- YAML data files and a Jekyll collection for content
- CSS for styling and responsive layout
- JavaScript for small interactive behaviors (mobile nav, smooth scrolling)

## Project Structure

- `_config.yml` — site metadata and collection configuration
- `_layouts/default.html` — shared page shell (header, nav, footer) every page renders into
- `_data/` — structured content rendered into pages via Liquid loops:
  - `about.yml` — hero tagline and About Me bio
  - `skills.yml` — skills list
  - `experiences.yml` — work/research experience timeline
  - `_projects/` — one file per project (a Jekyll collection); looped over in `index.html` to render the Projects section (projects is a collection in case of future expansion into each project)
- `index.html` — homepage: hero, about, projects, skills, experience, contact
- `css/styles.css` — site styling and layout
- `js/script.js` — button functionality, nav functionality, footer year
- `assets/` — images and icons
- `Harsh-Desai-Resume.pdf` — downloadable resume

## Deployment

This site is deployed through GitHub Pages. Any updates pushed to the `main` branch are built with Jekyll and reflected on the live site.

## Contact

If you’d like to connect, you can reach me at:
- Email: desai.harsh.747@gmail.com
- GitHub: https://github.com/Harsh-D20
- LinkedIn: https://www.linkedin.com/in/harsh-desai-23b5002a4/
