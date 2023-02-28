# [hginit.github.io](https://hginit.github.io)

This is the original hginit.com website by [Joel Spolsky](https://www.joelonsoftware.com/). This is like an archival mirror of the original, since hginit.com is no longer up. Source code was fetched using the Wayback Machine, converted to a minimal Jekyll website, and published via GitHub Pages.

The copyright situation is confusing, but I'd love to get this on the original website (hginit.com).

# Changes from original

You can visit the original website via [The Web Archive](https://web.archive.org/web/20180926172759/http://hginit.com/). Important Changes:

- Switched to [System Font Stack](https://systemfontstack.com/)
- Switched to semantic HTML wherever possible:
  - Use clean (no wrapper divs) `<pre>` tags with `<samp>` and `<kbd>` tags to denote
    sample output text and input commands typed within a terminal session.
  - Avoid using `img` tags for border images (pre tags, and cheat tips)
  - Use `dfn` tags for cheat tips which define hg commands
  - Use `<footer>` instead of `<div>`
- Improved favicons
- Added open-graph meta tags.
- Switched to markdown (WIP 🚧)
- Removed references to Kiln
- Fixed external links
- Removed Google Analytics and other tracking
- Jekyll-ized for easier edits, using includes and layouts
- [Removed all javascript](https://github.com/hginit/hginit.github.io/commit/9224bd8dc466ea264c9c275343509f2bfd2e5325).
- [Added translation links](https://github.com/hginit/hginit.github.io/commit/2a7d7ab1db0935c1ad7ac12d225cd7cedb36a778) in navigation bar (Japenese, Chinese)
- [Added translation links](https://github.com/hginit/hginit.github.io/commit/7910cb82eff9dc32c74227ca22f80db72ecff15d) in [Sitemap](https://hginit.github.io/sitemap.xml)
- [Reduced image sizes](https://github.com/hginit/hginit.github.io/commit/af01f5252abe904136e7252e9e519d1f4804554a) by optimizing the PNG files

# LICENSE

Copyright Joel Spolsky. This is just a mirror to keep it alive on the internet.
