<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep storefront product data in one shared browser-safe module so homepage and store listings stay consistent.
- Use the shared storefront shell for navigation and product dialogs; content pages retain their own route metadata.
- Reference imagery is served through asset pointers rather than embedded screenshot files.
- Navigation destinations each have a content route; wallet and order pages show unavailable states until real account services are connected.
