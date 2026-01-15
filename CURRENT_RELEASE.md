## [1.0.0-beta.33](https://github.com/Graupl/graupl/compare/v1.0.0-beta.32...v1.0.0-beta.33) (2026-01-15)


### ⚠ BREAKING CHANGES

* **accordion:** This will break functionality of any accordion using the original name

### Features

* **accordion:** rename allowNoExpand and allowMultipleExpand to allowCollapseAll and allowExpandMultiple respectively ([0a5a2bf](https://github.com/Graupl/graupl/commit/0a5a2bfd9dd9ce57d1696aff1c021b3da176a106))
* **component:** add a standardized way to register custom events ([73ad30a](https://github.com/Graupl/graupl/commit/73ad30ae94fcd3ab8a69a957e8ff92fe9c49ac81))
* **component:** use new event registration and clean up constructor and validate functions ([174855e](https://github.com/Graupl/graupl/commit/174855ebd2faee6835bd6db70cf1e3a2edd66d32))


### Bug Fixes

* **component:** correct import for TransactionalValue ([12f4ed7](https://github.com/Graupl/graupl/commit/12f4ed70bbdd6ce79f0fc9402c77ce8ca54f23ae))
* **component:** properly validate breakpoint values ([8b6c54f](https://github.com/Graupl/graupl/commit/8b6c54f0762aad21f314fcd563ba02d165ec1ba0))
* **component:** store components in GrauplStorage to avoid name conflicts ([4cfdf56](https://github.com/Graupl/graupl/commit/4cfdf562b84da6d85da8a7e81e380b85a8bc5370))
* **component:** use _addEventListner for mediaQueryList change event ([3901fb3](https://github.com/Graupl/graupl/commit/3901fb33122ff09df39b54247e4943072f0395a2))


### Performance Improvements

* clean up TransactionalValue code and tests ([e27f548](https://github.com/Graupl/graupl/commit/e27f548a3694cc4b75fabe5fce61d6ea02c34972))
* **component:** merge all string checks into one ([768e3e3](https://github.com/Graupl/graupl/commit/768e3e3e19672dff3782ce5498f7b2a5991c0509))


### Documentation

* fix type on errors ([5e2bc6b](https://github.com/Graupl/graupl/commit/5e2bc6b55250ac571b7f4dda9f9ac0b338d7a705))


### Code Refactoring

* **component:** clean up validation error list ([950cc9a](https://github.com/Graupl/graupl/commit/950cc9a73e105135a076edef1305fe6fa3c30a16))
