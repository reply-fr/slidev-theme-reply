# slidev-theme-reply

This is the theme used for the presentation made by [Reply](https://www.reply.com/).

## Usage

To use the theme, you have to initialize a new Slidev project with the following command:

```bash
yarn create slidev
```

You will be asked to pick a name for your project, and then the package manager you want to use (`yarn` is a great start).

You can now install the theme with the following command:

```bash
git submodule add git@github.com:reply-fr/slidev-theme-reply.git theme
```

You can now edit the `slides.md` file to create your presentation to set the theme in the `slides.md` file:

```md
---
...
theme: ./theme
---
...
```