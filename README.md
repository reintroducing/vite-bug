# Vite Bug
This bug is evident in any version of Vite after v2.9.1.

When you have an external npm module (in this case, @reintroducing/my-package) that loads its own Sass file as a CSS module, using that file in dev mode works perfectly fine and you can see the CSS associated with the external module reflected in your dev server. But if you build and preview that code, you will see that the CSS for the external module is there but the class is not applied to the element and there is no mention of the module name in the output JS bundle.

## Steps to Reproduce Working Version
1. Clone repo and `npm i`.
1. Run `npm run dev`. Observe the Test button and its blue background.
1. Inspect the blue button and in dev tools verify that it has the class `Button-module-root` as expected.
1. Stop the dev server and run `npm run preview`. Observe the Test button and its blue background.
1. Inspect the blue button and in dev tools verify that it has the class `Button-module-root` as expected.
1. In the generated `dist`, open `assets/index[hash].js` and search for `Button-module-root` to verify it is there.
1. In the generated `dist`, open `assets/index[hash].css` and search for `Button-module-root` to verify it is there.

## Steps to Reproduce Non-Working Version
1. Upgrade Vite to any version after 2.9.1 (2.9.2+, although 2.9.2 is when this bug starts showing up).
1. Run `npm i`.
1. Run `npm run dev`. Observe the Test button and its blue background.
1. Inspect the blue button and in dev tools verify that it has the class `Button-module-root` as expected.
1. Stop the dev server and run `npm run preview`. Observe the Test button and the missing blue background.
2. Inspect the button and in dev tools verify that it no longer has the class `Button-module-root` as expected.
3. In the generated `dist`, open `assets/index[hash].js` and search for `Button-module-root` to verify it is no longer there.
4. In the generated `dist`, open `assets/index[hash].css` and search for `Button-module-root` to verify it is there.

The code for the external `Button` is super simple and can be found [here](https://github.com/reintroducing/my-package).
