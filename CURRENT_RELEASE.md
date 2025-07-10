## [1.0.0-beta.16](https://github.com/Graupl/graupl/compare/v1.0.0-beta.15...v1.0.0-beta.16) (2025-07-10)


### Features

* **core:** add option for turning off base state class generation ([f4b2077](https://github.com/Graupl/graupl/commit/f4b2077da8111308567ca643df4d58193f73db6e))
* **core:** add option for turning off base typography generation ([7080d4e](https://github.com/Graupl/graupl/commit/7080d4e9d4a06a9cc3275e4883d4922393b6d3c2))
* **core:** add option to turn off base theme and colour generation ([42214a5](https://github.com/Graupl/graupl/commit/42214a5fa115a947e3902cc88aa5f3f5825b792a))
* **core:** implement option for generating base theme state maps ([2d8e047](https://github.com/Graupl/graupl/commit/2d8e04701e893651448b5661766eecc791075c1b))
* **functions:** rename theme.variants to theme.get-theme ([2040b47](https://github.com/Graupl/graupl/commit/2040b4756f3048d7c5de445c3b861ada977dd0aa))
* **package:** add navigation shelf component package ([ac13f02](https://github.com/Graupl/graupl/commit/ac13f027a06640c4a8a0c7ed23671ab3d54033af))
* support default colours ([0a8b76f](https://github.com/Graupl/graupl/commit/0a8b76f8cd5bf2f3473854b12479b8650d8c59bb))
* **utilities:** implement base generation flag ([57727d9](https://github.com/Graupl/graupl/commit/57727d9bb7c769d3c8d08f3cec1d5548e19187dd))


### Bug Fixes

* correctly merge custom state selectors ([50fb41a](https://github.com/Graupl/graupl/commit/50fb41a4bff13d278b29ddfeec4f77592c485a4b))


### Documentation

* **navigation-shelf:** remove private member references from code comments ([4d96941](https://github.com/Graupl/graupl/commit/4d969412a12496d269a53f88c4e3622d5330b375))
* **utilities:** remove reference to private members in comments ([5811896](https://github.com/Graupl/graupl/commit/581189616d2f500767181b7cf36baad697e56860))


### Code Refactoring

* **base:** deprecate -button-state-theme-map ([e792f90](https://github.com/Graupl/graupl/commit/e792f90a68cf3ef655077e28bea9d5b39b0e09d8))
* **base:** deprecate -container-size-triggers ([2243815](https://github.com/Graupl/graupl/commit/224381527bd000c1564042d726deb1185ec3f132))
* **base:** deprecate -container-sizes ([6169dc2](https://github.com/Graupl/graupl/commit/6169dc2c28be2ff3f4a95c8431c8f031f9e28f0b))
* **base:** deprecate -screen-size-triggers ([6d6877e](https://github.com/Graupl/graupl/commit/6d6877e133fd6ec35e2fe936dd788c78c50a657b))
* **base:** deprecate -screen-sizes ([1cf3827](https://github.com/Graupl/graupl/commit/1cf382749e9c9a9c2d77fe7deadd531390547121))
* **base:** deprecate -spacer-multipliers ([a2fd711](https://github.com/Graupl/graupl/commit/a2fd71199f852834da84c34194861555588e6624))
* **base:** deprecate -state-selectors ([9363c26](https://github.com/Graupl/graupl/commit/9363c26b7541a76c945908f9cb7a0925f3323ec8))
* **base:** deprecate -table-state-theme-map ([9b5c8ea](https://github.com/Graupl/graupl/commit/9b5c8ea7c847fea8586e028b981d5e3db5b8493b))
* **base:** deprecate -transition-durations ([0e98d8b](https://github.com/Graupl/graupl/commit/0e98d8bcd9a226b81eb62f09edf5bad825a4feba))
* **component:** deprecate -alert-state-theme-map ([1158ea0](https://github.com/Graupl/graupl/commit/1158ea09833450d3ca625c967845eedfbd30a79b))
* **core:** convert all base variables to private members ([0d66245](https://github.com/Graupl/graupl/commit/0d662455738e84b7d173dcf5f56f530db32c31c8))
* **icons:** deprecate -icons ([2b4a387](https://github.com/Graupl/graupl/commit/2b4a387b558d93c8a21d05b6dfbcb0a9906f4b0c))
* **navigation-shelf:** make base values private members ([b0872b6](https://github.com/Graupl/graupl/commit/b0872b6ee9d81a86145266fd8fd708f24c82d86c))
* **theme:** deprecate -colors ([af16ed4](https://github.com/Graupl/graupl/commit/af16ed429508a3a92a1dc7886e638fbaf6453378))
* **theme:** deprecate -font-size-multipliers ([af97910](https://github.com/Graupl/graupl/commit/af979106940e9ec1094e56079d61fec02371d107))
* **theme:** deprecate -font-weights ([22d4fc8](https://github.com/Graupl/graupl/commit/22d4fc8860782082f6eac958756a14a457d34b7b))
* **theme:** deprecate -theme-map ([2ae82a9](https://github.com/Graupl/graupl/commit/2ae82a9dd5caed09caa23bb0797ad37ce72c08fa))
* **theme:** deprecate -theme-mappings ([24f83ff](https://github.com/Graupl/graupl/commit/24f83ff24e6d2ea04c4286ab3e51a64f2e5260e5))
* **theme:** deprecate -themes ([9643580](https://github.com/Graupl/graupl/commit/9643580902688c55b5c3d75a79b51860fbc3bc1e))
* **utilities:** make base values private members ([fcc195f](https://github.com/Graupl/graupl/commit/fcc195f507e75293c244004ee48788b1659bbffb))
* **utility:** set up navigation shelf width utility as full utility ([9954ce8](https://github.com/Graupl/graupl/commit/9954ce88910f312118e97a2bf1e99825fd5ffe4d)), closes [#183](https://github.com/Graupl/graupl/issues/183)


### Build System

* **lint:** adjust lint rules to account for code changes ([a126c0c](https://github.com/Graupl/graupl/commit/a126c0c8d56ee28693a17048f55e431970becda1))
* **npm:** upgrade vite to v7 ([93b1a68](https://github.com/Graupl/graupl/commit/93b1a68f0b57303984859245a2503c2f0adefc60))