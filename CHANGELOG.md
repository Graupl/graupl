# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.0.0-alpha.4](https://github.com/Graupl/graupl/compare/v1.0.0-alpha.3...v1.0.0-alpha.4) (2024-04-22)


### Features

* **theme:** add variables for root font and background ([a7997e8](https://github.com/Graupl/graupl/commit/a7997e85b939dac5a2105d931d3a97010de14a6a))


### Code Refactoring

* **utilities:** use bg- and text- for color utilities ([9709b32](https://github.com/Graupl/graupl/commit/9709b32a6651b92dd49d5a151cf13d94ca3720bf))

## [1.0.0-alpha.3](https://github.com/Graupl/graupl/compare/v1.0.0-alpha.2...v1.0.0-alpha.3) (2024-04-20)


### Features

* **theme:** add ability to generate new theme colours automatically ([df0ad39](https://github.com/Graupl/graupl/commit/df0ad391ff0b122c55867b518ccfaa7cd6141ced))
* **utilities:** add background and color utilities ([ef14a15](https://github.com/Graupl/graupl/commit/ef14a15e0d5934249829a9d6ef04014aa63a0e08)), closes [#11](https://github.com/Graupl/graupl/issues/11)


### Bug Fixes

* **accessibility:** add reduced motion handling on buttons ([2a33df0](https://github.com/Graupl/graupl/commit/2a33df00ddddf267f813160644b1f8c6a847e7a4))
* **buttons:** handle disabled state ([1b2e859](https://github.com/Graupl/graupl/commit/1b2e859d57cdad9a3f2021ff6c7917800f80f34a)), closes [#9](https://github.com/Graupl/graupl/issues/9)
* **state:** correct layer order for states to override ([afd87e4](https://github.com/Graupl/graupl/commit/afd87e4ec7c3957040b3701eaeb482768a366083))


### Code Refactoring

* change .columns- to .count- ([45d0970](https://github.com/Graupl/graupl/commit/45d0970fcca3c39a57a10e0cb7c4c18a2b36f31e))


### Documentation

* add basic example of how to override defaults ([a808eeb](https://github.com/Graupl/graupl/commit/a808eebfd7ab7e97be6b491b94886c68757bde1a)), closes [#10](https://github.com/Graupl/graupl/issues/10)
* correct link to github ([847c074](https://github.com/Graupl/graupl/commit/847c07413ebdcbc32009e3b51f77eb1e2e5e4481))


### Build System

* **npm:** define exports ([e321b9c](https://github.com/Graupl/graupl/commit/e321b9c54a608795badc1f1f2f1468583694ccff))
* **postcss:** re-enable cssnano ([cdd9cfc](https://github.com/Graupl/graupl/commit/cdd9cfc29a2c2d57447da86ba9258714070e61fd))

## [1.0.0-alpha.2](https://github.com/Graupl/graupl/compare/v1.0.0-alpha.1...v1.0.0-alpha.2) (2024-04-18)


### Features

* use full spectrum of available colour shades ([24ed3f3](https://github.com/Graupl/graupl/commit/24ed3f370ea43cc2454fd664a87eb83c9c9d00db))


### Bug Fixes

* **form:** handle disabled fieldsets ([5a50979](https://github.com/Graupl/graupl/commit/5a50979d52461ecd46b303d353ab10f5fc67fafb))

## [1.0.0-alpha.1](https://github.com/Graupl/graupl/compare/v1.0.0-alpha.0...v1.0.0-alpha.1) (2024-04-17)


### Features

* add form base styles and components ([daee446](https://github.com/Graupl/graupl/commit/daee4461842c2a412f45478035855bb3a6a65ee5))
* add tertiary colour for more options ([37cb0de](https://github.com/Graupl/graupl/commit/37cb0de0ba2162b5640ee64a41e000a1758fd591))
* **layout:** add ability to span columns ([677c781](https://github.com/Graupl/graupl/commit/677c7811f6edd59df58e8ba727220624c74d1d52))


### Bug Fixes

* **theme:** add correct color scheme to theme modes ([b740200](https://github.com/Graupl/graupl/commit/b7402007ee889082a729d7dd7f8dec63c08bf0c8))

## 1.0.0-alpha.0 (2024-04-15)


### Features

* add components ([12c2e48](https://github.com/Graupl/graupl/commit/12c2e4867df28695f9c5b6134a1a6c227072d507))
* add link base styles ([c3a9bc1](https://github.com/Graupl/graupl/commit/c3a9bc110c6223ae9fc6248b05f1566589e9586c))
* **columns:** add column count classes ([50dbc6c](https://github.com/Graupl/graupl/commit/50dbc6cd85b1f57cc336c2e4ce665d413803800c))
* **component:** implement buttons ([6d747b3](https://github.com/Graupl/graupl/commit/6d747b338f4a4d6acc2575ac62e548c7fae11ba3))
* fix buttons and structure ([aa8f62e](https://github.com/Graupl/graupl/commit/aa8f62e82d265dc93dc48ea8b70e3cd1694924c9))
* implement layer mixin ([2014476](https://github.com/Graupl/graupl/commit/20144761d8a405a40f8e94def84f605e1412cc3e))
* implement prefix into all custom props ([73fb04e](https://github.com/Graupl/graupl/commit/73fb04ea2601ae6169ea81f4ccab1ef001b7c4ec))
* implement theme ([40b4931](https://github.com/Graupl/graupl/commit/40b493151607fc22992500c5ac60bc577e403388))
* initial commit ([f457139](https://github.com/Graupl/graupl/commit/f457139a66dfcfde82fad6dd28754d266d337ab0))


### Bug Fixes

* use interpolation in all custom prop declarations ([a7d347c](https://github.com/Graupl/graupl/commit/a7d347c5b6b0f321511cb3e8006fc10fcc640dfa))


### Code Refactoring

* change name of default file ([238a878](https://github.com/Graupl/graupl/commit/238a8788bb0a4f0425a8d9aa58129d402dfee8ee))
* merge components ([aec50a0](https://github.com/Graupl/graupl/commit/aec50a057cfe63d3d7b05afb7d2f156bc56b1596))


### Build System

* **npm:** add lint and release scripts ([2c074d6](https://github.com/Graupl/graupl/commit/2c074d65b3401b5e0474945bc215c405bd3bc064))
* **npm:** add remaining dev and build tools ([1ceac67](https://github.com/Graupl/graupl/commit/1ceac67c8cd2eddc5ad5c49cbd7d82a88729d940))
* **npm:** setup package ([be78d5b](https://github.com/Graupl/graupl/commit/be78d5ba5d6bfae27267f5c1cf454173ea41e7cb))


### Documentation

* add custom theme ([af0ddf2](https://github.com/Graupl/graupl/commit/af0ddf29c652e04e2ca15708911384e197fc9dc3))
* add github and vitepress docs ([964b932](https://github.com/Graupl/graupl/commit/964b932b89a39e2c7f841547a12b356b068bb216))
* **base:** update to proper base ([8474ee4](https://github.com/Graupl/graupl/commit/8474ee483204a0c153bba706fcc77e91d032a991))
