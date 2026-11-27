# St. John the Baptist Greek Orthodox Church: website redesign concept

A design concept for **Saint John the Baptist Greek Orthodox Church**, 143 East 17th Street, New York, NY. It answers the parish's request for a modern, photo-led, easy-to-manage website.

> **This is a concept, not the parish's official website.** The live site is https://stjohn.ny.goarch.org/. Photos are loaded from that site and belong to the parish.

## Pages

| Page | File | What's on it |
|---|---|---|
| Home | `index.html` | Hero photo, service times, welcome from Fr. Samaras, Preservation Fund band, upcoming feasts, social strip |
| About Our Church | `about.html` | History, restoration timeline, mission, clergy, patron saint |
| Worship & Visit | `worship.html` | Service schedule, feasts, map and directions, first-visit FAQ |
| Iconography & Gallery | `gallery.html` | Filterable photo grid with full-screen viewer |
| News & Events | `news.html` | Events, articles, weekly bulletin, Facebook link |
| Support St. John's | `support.html` | Donation form (one-time or monthly, choice of fund), Preservation Fund, other ways to give |

## How the brief maps to the build

- **Platform:** the parish prefers Squarespace. Each section here corresponds to a standard Squarespace block (image, gallery, events, blog, form), so volunteers can edit everything without code.
- **Donations:** the Support page form sends donors to the parish's existing secure donation page today; for launch it would be swapped for an embedded **Givebutter** form, with one-time and recurring gifts, separate funds for parish operations and the Preservation Fund, card and digital-wallet payments, and automatic receipts.
- **Email:** the newsletter sign-up currently opens an email to the parish office asking to join the list; for launch it becomes a **Constant Contact** form.
- **Social:** the site links to the parish's Facebook page. Instagram, YouTube, and TikTok can be added once the parish opens those accounts.
- **Placeholders:** text in `[brackets]`, "Times TBA" labels, and striped photo tiles mark content the parish needs to supply.

## Run it locally

No build step. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8642
```

## Tech

Plain HTML, CSS, and a little JavaScript. Fonts are Cormorant Garamond and Source Sans 3 from Google Fonts. The pages are marked `noindex` so search engines don't confuse this concept with the parish's real site.
