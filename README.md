# Personal Portfolio — Dhandy Joenathan

Static dark portfolio site for Software Quality Assurance / SDET work.

## Stack
- HTML + Bootstrap 4 + jQuery
- Isotope (project filters)
- AOS (scroll animation)
- Custom dark navy CSS

## Pages
- `index.html` — projects
- `about.html` — profile, skills, resume
- `contact.html` — contact form via client `mailto` (no PHP backend)

## Run locally
Open `index.html` in a browser, or:

```bash
python3 -m http.server 8080
```

Then visit http://localhost:8080

## Notes
- Contact form opens the user's email app. No server mail library required.
- Template origin: BootstrapMade MyPortfolio (heavily restyled).

## Project image standard
All portfolio cards use a fixed **16:10** media frame.

| Type | Rule | Class |
|---|---|---|
| App / UI screenshot | fill frame (`object-fit: cover`, focus top-center) | default |
| Logo / tool mark | centered, ~58% size (`object-fit: contain`) | add `is-logo` on `.item` |

Recommended export before adding a new project:
- size **1280×800** (or any 16:10)
- PNG/JPG/WebP
- avoid large empty margins on screenshots
- logos on transparent PNG work best

