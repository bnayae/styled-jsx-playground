# Guidelines

* We're open to discuss you idea and suggestion.
* Guide line isn't a bible, it can be changed, yet it should be followed.
* Anybody who's doing may do mistake except those who don't do anything. 

* DRY: Don't Repeat Yourself.
  * Break the UI into components.
  * Style (css)
    * Global aspects: should be encapsulate within a Theme [Styled-Components](https://styled-components.com/docs/advanced).
    * Component level: should be private to the component (get the Theme via useTheme).
* KISS (Keep It Simple or better Keep It Smart and Simple).
  * Make everything as simple as possible but not simpler (for example don't simplify by repetitive code Keep It DRY too).
  * Always think on maintainability and that thing kept .
* Multi Language (next stage).
  * Multi language will be conduct via i18n.
  * Language loading from service: TBD.
  * LTR / RTL layout switching: TBD.
* Typescript.
* Use Hooks.
* Don't use export explicitly (not default)
* use index.ts in order to encapsulate exports from multiple files
* Use Next.js routing instead of react-router-dom 
* ESLint, TSLint.
* Prettier.
* NPM packages should be approved by Bnaya .
    * In general only MIT / Apache 2.0 license will be used.
    * You can use new MIT / Apache 2.0 NPM if it block you as long as you send approval request via mail (if it don't block you work wit for approval before usage).
* Avoid REDUX / MobX (KISS: keep it simple).
  * Prefer context reduce.
  * It's open for discussion but don't use it automatically .



## Coding Standard
* Interface: Start with capital I, example: IFoo
* Method: arrow style, camel case, example: const foo = (i:int) => 'hi'; 
* Class should be Pascal case.
* Parameter should be camel case.