# 41 Club 4, Biratnagar — website

A multi-page React app (Vite + React Router) for 41 Club 4, Biratnagar, Nepal.

Access the live site here: [41 Club 4, Brt](https://41club4-brt.vercel.app/)

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL. For a production build:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  main.jsx                # entry point, wraps App in BrowserRouter
  App.jsx                 # all routes are defined here
  components/             # shared UI (Header, Footer, Layout, Avatar, ...)
  pages/                  # one file per route
  data/                   # content as plain JS — edit these to update the site
  styles/index.css        # design tokens + all styles
```

## Routes

| Path                           | Page                            |
| ------------------------------ | --------------------------------|
| `/`                            | Home                            |
| `/about`                       | About / 41 Clubs Nepal          |
| `/about/chairmans-gallery`     | Chairman's Gallery              |
| `/about/board`                 | Board                           |
| `/about/national-board`        | National Board                  |
| `/office-bearers`              | Club 4's 2025–26 office bearers |
| `/members`                     | Members & their families        |
| `/events`                      | Events                          |
| `/links`                       | Sister clubs & associations     |
| `/contact`                     | Contact Us                      |

<!-- | `/blog`                        | Blog                            |
| `/downloads`                   | Downloads                       | -->


## Design

Colors, fonts and spacing are defined as CSS custom properties at the top of
`src/styles/index.css`
- change the values to retheme the whole site from one place.
