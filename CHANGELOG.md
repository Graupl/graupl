# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [1.0.0-beta.34](https://github.com/Graupl/graupl/compare/v1.0.0-beta.33...v1.0.0-beta.34) (2026-01-16)


### Features

* implement event based system for init and validate ([058d9ca](https://github.com/Graupl/graupl/commit/058d9cadcc3b430007485477ae28935520f02575))
* **navigation shelf:** upgrade to event-based component system ([e95f90b](https://github.com/Graupl/graupl/commit/e95f90bea19e41ebe7ae771496457f23d75a3908))


### Bug Fixes

* **accordion:** correct call to setCustomProps ([9058bd2](https://github.com/Graupl/graupl/commit/9058bd2f586bd9b7dd7f5656e207a759ebcc1668))
* **disclosure:** correct logic on opening on initialize ([799ebff](https://github.com/Graupl/graupl/commit/799ebff7bab06436ab2aeb20dfdb5d0e17f17168)), closes [#222](https://github.com/Graupl/graupl/issues/222)

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

## [1.0.0-beta.32](https://github.com/Graupl/graupl/compare/v1.0.0-beta.31...v1.0.0-beta.32) (2026-01-09)


### Bug Fixes

* **dist:** add missing tabs files ([4eb33b5](https://github.com/Graupl/graupl/commit/4eb33b56fff7fa302ef97597ba4a28bb701479d8))

## [1.0.0-beta.31](https://github.com/Graupl/graupl/compare/v1.0.0-beta.30...v1.0.0-beta.31) (2026-01-09)


### Features

* **components:** add initialized flag ([0572405](https://github.com/Graupl/graupl/commit/0572405c08abf409a45a139c08384f0d29958d00))
* **navigation shelf:** update js to use new component base class ([d6f0943](https://github.com/Graupl/graupl/commit/d6f0943b9db527da1bca6dd2228dc5931da0dd94))


### Bug Fixes

* **accessibility:** use click events instead of pointerup events ([507f50d](https://github.com/Graupl/graupl/commit/507f50d522a37032c8b39df985c0204e337dc85a))
* **component:** do not force strict element generation ([5fdcad6](https://github.com/Graupl/graupl/commit/5fdcad6857aa05c69a5f0d561f95a9ec36c0139d))

## [1.0.0-beta.30](https://github.com/Graupl/graupl/compare/v1.0.0-beta.29...v1.0.0-beta.30) (2026-01-09)


### Bug Fixes

* **icons:** restore icon spacer ([8b59009](https://github.com/Graupl/graupl/commit/8b5900956a7a46bfbc1a973f321533eae18793cd))


### Build System

* **release:** ensure all tests succeed before a release is allowed to be tagged ([3d999b4](https://github.com/Graupl/graupl/commit/3d999b449f11edc5b6dd5f67465e20ace829fb83))


### Continuous Integration

* add packages write permission to release action ([ee41900](https://github.com/Graupl/graupl/commit/ee41900ee0d87d140dc76a8f52261fcdaa6fb11e))

## [1.0.0-beta.29](https://github.com/Graupl/graupl/compare/v1.0.0-beta.28...v1.0.0-beta.29) (2026-01-07)


### Bug Fixes

* **components:** adjust media match rules to work on custom media queries ([6c68b7f](https://github.com/Graupl/graupl/commit/6c68b7f58eeded9f26f799adedf462a690320732))


### Continuous Integration

* change gh_token to github_token ([997cc7e](https://github.com/Graupl/graupl/commit/997cc7e518a126d950bfed7456a1d1f0e4d8bd71))

## [1.0.0-beta.28](https://github.com/Graupl/graupl/compare/v1.0.0-beta.27...v1.0.0-beta.28) (2026-01-07)


### Features

* add id and isValid getters ([462bc4d](https://github.com/Graupl/graupl/commit/462bc4dc64da6b426498a014f6f9baf2f7f18427))
* **component:** add clearIntervals method and add it to dispose ([34f3bf3](https://github.com/Graupl/graupl/commit/34f3bf39585a228a487e35c31488c5c09fb237c4))
* **component:** add clearTimeouts function ([c056c26](https://github.com/Graupl/graupl/commit/c056c26f8ce4a86bf62dfbe78de7b564ee6d54b0))
* **components:** implement more robust StorageManager class ([5d892dd](https://github.com/Graupl/graupl/commit/5d892dd5eb3e6bfc93bb2c9a063c4da653061687))


### Bug Fixes

* **accordion:** use proper inheritence for accordion control border props ([f68abda](https://github.com/Graupl/graupl/commit/f68abdac652dac352ed535165a430b6c863c3daa))
* **component:** correct logic for removing event listeners ([8f2f2cb](https://github.com/Graupl/graupl/commit/8f2f2cbf74dc60bb7ed10e807128f264567b4a62))
* **components:** add missing key types to event handlers ([bc1d093](https://github.com/Graupl/graupl/commit/bc1d093720b76c232480d421d1155ebd3c187424))
* **components:** do not validate null dom elements by default ([701d029](https://github.com/Graupl/graupl/commit/701d02991a871b275461d5bccd07cbcb79a518dc))


### Documentation

* **packages:** update license for subpackages ([7687333](https://github.com/Graupl/graupl/commit/76873335e4a568c58e5e8c1e79ed2db4eaf9f4a5))


### Code Refactoring

* **accordion:** pluralize selector option names ([bce16a6](https://github.com/Graupl/graupl/commit/bce16a66c86070e437ef4ae458bdeff2720c77e7))
* **carousel:** pluralize selector option names ([87385d3](https://github.com/Graupl/graupl/commit/87385d3f830e2d6736b3a6adf592b5eb1b0b1408))
* **components:** overhaul error handling and validation ([5efb9de](https://github.com/Graupl/graupl/commit/5efb9de307c9bc08cd78fca8d85b483346464d08))
* **tabs:** pluralize selector option names and elements ([1867da2](https://github.com/Graupl/graupl/commit/1867da2ecef89069ca1843779a1499dd56e2d9f9))


### Build System

* **script:** update current release with better version identification ([25071ac](https://github.com/Graupl/graupl/commit/25071ace3d0e880a98aa456d14178225a273b24a))


### Continuous Integration

* add vitest to test actions ([879ac91](https://github.com/Graupl/graupl/commit/879ac91a07d64b419188f210f1510f5774330302))

## [1.0.0-beta.27](https://github.com/Graupl/graupl/compare/v1.0.0-beta.26...v1.0.0-beta.27) (2025-12-29)


### Features

* **utility:** add object fit and position utilities ([0aa16aa](https://github.com/Graupl/graupl/commit/0aa16aa9f30dbce3c19006f972945a76baed8250)), closes [#147](https://github.com/Graupl/graupl/issues/147)
* **utility:** replace custom ratio handling with native aspect ratio property ([ef8ee01](https://github.com/Graupl/graupl/commit/ef8ee01a747d697f81f3e110669c008f61884fed)), closes [#166](https://github.com/Graupl/graupl/issues/166)


### Documentation

* add gpl 3 license ([c889bfb](https://github.com/Graupl/graupl/commit/c889bfbd848671c6bc8ab0bfb7f7106e083be07f))


### Build System

* **node:** upgrade to node 24 and npm 11 ([f2119d8](https://github.com/Graupl/graupl/commit/f2119d8deda4e97f7b9fa294cd8b450b851d2e29))

## [1.0.0-beta.26](https://github.com/Graupl/graupl/compare/v1.0.0-beta.25...v1.0.0-beta.26) (2025-12-29)


### Features

* **accordion:** add expand and collapse all functionality ([d7c1775](https://github.com/Graupl/graupl/commit/d7c17758ba82f962eb7a45dd604d0614984ed359))
* **icons:** update to latest themeable standards ([6d3660c](https://github.com/Graupl/graupl/commit/6d3660c081c4f866410e84a1ad89b9d16768da9c))
* **js:** add disposal methods for removing components after initialization ([cf38c39](https://github.com/Graupl/graupl/commit/cf38c394191a8f2a09fcf34befb2e40fb5d3f9b9)), closes [#190](https://github.com/Graupl/graupl/issues/190)
* **js:** implement base component class ([a2889e8](https://github.com/Graupl/graupl/commit/a2889e855137a9b372df59e72fea0768be9c0b6e))


### Bug Fixes

* **Disclosure:** use proper event system ([58a95a1](https://github.com/Graupl/graupl/commit/58a95a178ceb2731e32e26a1a1cf999c92d189c7))


### Code Refactoring

* **Tabs:** update toggle scripts ([9eedf17](https://github.com/Graupl/graupl/commit/9eedf17876db165d1f2185bebf469317f0eaccd7))


### Continuous Integration

* merge release and prerelease into single pipeline ([2a638a7](https://github.com/Graupl/graupl/commit/2a638a7a36bcf1778fb605f6589d30e1ec6cd770))

## [1.0.0-beta.25](https://github.com/Graupl/graupl/compare/v1.0.0-beta.24...v1.0.0-beta.25) (2025-12-16)


### Bug Fixes

* **disclosure:** handle resize events properly ([10d4d4f](https://github.com/Graupl/graupl/commit/10d4d4f71ab1868ffc868924f42fb5249d7d9022))
* **navigation shelf:** handle resize events properly ([0daefa0](https://github.com/Graupl/graupl/commit/0daefa06d26b48e4cacc33960675edb6f109e1fc))

## [1.0.0-beta.24](https://github.com/Graupl/graupl/compare/v1.0.0-beta.23...v1.0.0-beta.24) (2025-12-16)


### Features

* **accordion:** implement selector base overhaul ([b5fef42](https://github.com/Graupl/graupl/commit/b5fef42f421750df4568ab65ffa73ead43e87d5f))
* **accordions:** add more consistant themeable colouring ([c024e67](https://github.com/Graupl/graupl/commit/c024e67b2de4c8e8109f03919e98dd7bf6623634))
* **accordions:** add themeability ([b11d6a5](https://github.com/Graupl/graupl/commit/b11d6a51111aca39fb009ebcf3ab4d3585c9bde3))
* **accordion:** use standardized transitions ([5ba5454](https://github.com/Graupl/graupl/commit/5ba54548ef155c08cee7f3474a000de55e0dd8d2))
* **alert:** implement selector base overhaul ([9f8ee7b](https://github.com/Graupl/graupl/commit/9f8ee7b34c8768e682fed7845f9662eee5fad5d0))
* **alert:** use new theme mixins for alerts ([9e1db2d](https://github.com/Graupl/graupl/commit/9e1db2d569cb09ea798554387a71789d8342438d))
* **badge:** use new theme mixins for badges ([d408c04](https://github.com/Graupl/graupl/commit/d408c04910faa97314ddef71c18eb69b6010ee3c))
* **base:** make form elements themeable ([0a1ecc6](https://github.com/Graupl/graupl/commit/0a1ecc66e0c9d9ffd7885395f47d60058d5252e5))
* **base:** make links themeable ([27d2b02](https://github.com/Graupl/graupl/commit/27d2b024a8c24c97127469e7eaf1efbd1fc3be4e))
* **button:** use new theme and state mixins for buttons ([b63ad00](https://github.com/Graupl/graupl/commit/b63ad00ed6c33af40424446616886ddb68656ac2))
* **cards:** add themeability ([4e16748](https://github.com/Graupl/graupl/commit/4e167488885a040ae9f324861bf689c158119e3b))
* **cards:** implement selector base overhaul ([4411a6a](https://github.com/Graupl/graupl/commit/4411a6a1d1023af45359d7408e53470c96df716f))
* **carousel:** allow carousels to be themeable ([258e9b6](https://github.com/Graupl/graupl/commit/258e9b611e68039a2a48339cdfc7deda5edca40e))
* **carousel:** implement selector base overhaul ([dbd60b9](https://github.com/Graupl/graupl/commit/dbd60b947a34634857073ca87b4599a2d56eab4a))
* **color:** implement new selector-base system ([7ee1edb](https://github.com/Graupl/graupl/commit/7ee1edbbcb007f4ec1a084780f7471eb757157a7))
* **component:** add tabs component ([9d21c69](https://github.com/Graupl/graupl/commit/9d21c690b355170bfe8393a4740f46a23484ea5a))
* **component:** make menu themeable ([8eccaaf](https://github.com/Graupl/graupl/commit/8eccaaff70274f2f9f81fa2b04d6b1eaa6531e90))
* **component:** make navigation themeable ([acc4885](https://github.com/Graupl/graupl/commit/acc48854fa6c6b9ae8f7c71996566ce8cdc2a089))
* **container:** add ability to force container chaining ([2dd00a5](https://github.com/Graupl/graupl/commit/2dd00a53bb35c3c14564f1949fe13dea00b6dc37))
* **container:** make sidebars more explicit, predictable, and easy to use ([828ed67](https://github.com/Graupl/graupl/commit/828ed67d9984a279cfb01c5830478d300e779d7c))
* **deprecations:** remove all deprecated variables ([97a6ff0](https://github.com/Graupl/graupl/commit/97a6ff0fd80e0bd5ad5f71a2f9bfb9bfdffd33ad))
* implement selector base proper ([57b5de1](https://github.com/Graupl/graupl/commit/57b5de12f0c2552b0d1e8fe78e072477bfe60354))
* **list:** allow lists to be themeable ([9567fd6](https://github.com/Graupl/graupl/commit/9567fd65ee2e5b8a55e44fb6249007fe1f9d1a02))
* **list:** implement selector base overhaul ([0b8abe1](https://github.com/Graupl/graupl/commit/0b8abe157dc46b66d58ffe4c6841404290a3f276))
* **navigation:** implement selector base overhaul ([b55eea8](https://github.com/Graupl/graupl/commit/b55eea805b420bf3605455dc77e2929463fe37e7))
* **scripts:** add additional filter options to focusable dom helpers ([06563d5](https://github.com/Graupl/graupl/commit/06563d59372de51a7bd27dba00975f1a7ee7aa8e))
* **table:** use new state mixins for tables ([9f8d120](https://github.com/Graupl/graupl/commit/9f8d120eaa5ce55678d7176e18ff5547cf55d74e))
* **table:** use new theme mixins for tables ([0671831](https://github.com/Graupl/graupl/commit/067183199063df5b0c64502c4ecefba79e40e8f9))
* **tabs:** allow individual tab components to be themeable ([ffa50da](https://github.com/Graupl/graupl/commit/ffa50da0f5092dd249a868ce252f61db12b53d64))
* **tabs:** disable themeability by default ([a7b7671](https://github.com/Graupl/graupl/commit/a7b7671c5bf653cacb3de9461f35b0f6cb56db9f))


### Bug Fixes

* **accordion:** correct transition custom prop naming ([5820c08](https://github.com/Graupl/graupl/commit/5820c08de983a7f3c2d8837a1674a903bd0aeda2))
* **accordion:** properly implement reduced motion transitions ([bc6c18a](https://github.com/Graupl/graupl/commit/bc6c18a1d4f354bb980f66aebb3f37c951aa11a1))
* add overflow-wrap to prevent long text chains from breaking out ([54abfa5](https://github.com/Graupl/graupl/commit/54abfa5d1caaadef5827d786bf3bbb77105ba8e1))
* **alerts:** correct fallbacks for alert link color props ([68e2d32](https://github.com/Graupl/graupl/commit/68e2d32bab384b2287644f457a53655ee73817cd))
* **badges:** add badges to demo with proper theming ([8c1b90b](https://github.com/Graupl/graupl/commit/8c1b90b681c3facf5e01d41e7ad7911e9ac90c20))
* **carousel:** add missing transition duration custom prop ([a4c67c1](https://github.com/Graupl/graupl/commit/a4c67c16758188c8b4df36fe12b70f37e8ed087e))
* **carousels:** return tab layout to original position ([c1b7cfe](https://github.com/Graupl/graupl/commit/c1b7cfe8765f0d97d07b5e3a1e04538896005592))
* **container:** correct typo in custom prop names ([bd32800](https://github.com/Graupl/graupl/commit/bd328005d38d0f56c186d9a2c4ed6fe3dcedf8d1))
* correct themeable border bug ([c9fa27f](https://github.com/Graupl/graupl/commit/c9fa27f50cf682d51281327077cbc98dfd3ccfff))
* **defaults:** correct naming of theme selector base ([5a62b1c](https://github.com/Graupl/graupl/commit/5a62b1cf93b0c811cf1a0933e47cac5033b0e2c2))
* **disclosures:** correct naming of custom props ([d5a1b85](https://github.com/Graupl/graupl/commit/d5a1b85f38f2e298e15e45e6bfd346aad38cf8c3))
* **menu:** correct how custom props are used in menu links ([ff6f28c](https://github.com/Graupl/graupl/commit/ff6f28cd6150d8088ad5f93a5a36ae3fd03a3f0d)), closes [#194](https://github.com/Graupl/graupl/issues/194)
* **scss:** add var wrapper ([e6105d1](https://github.com/Graupl/graupl/commit/e6105d1d406f4b3c286385a4df0c5e5a53790ecb))
* **tables:** add missing padding props ([348811d](https://github.com/Graupl/graupl/commit/348811df6d6fdb7f64847bc6a036b62da40eba23))
* **tabs:** correct padding shorthands ([789bef2](https://github.com/Graupl/graupl/commit/789bef271f1d3d9ba1272f3712b155fb2bf32026))


### Performance Improvements

* **carousel:** remove redundant themeable check ([30e4ebd](https://github.com/Graupl/graupl/commit/30e4ebd2b1dc8e85821b983619063f78cec0d593))
* **disclosure:** use media match over observer for opening and closing ([1df16cd](https://github.com/Graupl/graupl/commit/1df16cd13bff465ce42821f1bc4f45ab80be2e64))
* **focus:** remove unused variables ([6a8a3a3](https://github.com/Graupl/graupl/commit/6a8a3a3e229e8aa172b2ba53fad5d20320acdc0a))
* **navigation shelf:** use media match over observer for opening and closing ([8b132f0](https://github.com/Graupl/graupl/commit/8b132f001b135c058031603aab6c010b80fa1f43))


### Documentation

* adjust alignment of default tables for readability ([f2ccc06](https://github.com/Graupl/graupl/commit/f2ccc062198cc0ac7435c8cad6fbf5ad3d173e3f))
* adjust warning for forced container chaining ([455ce82](https://github.com/Graupl/graupl/commit/455ce8283283aa409565f4bba63750b23e678fe6))
* **base:** accuracy review ([5bf6a2f](https://github.com/Graupl/graupl/commit/5bf6a2ff8543ec4e3b9006744065cd3148c7ad53))
* **base:** update to match new format ([204c893](https://github.com/Graupl/graupl/commit/204c893afd8eb21ea64b910493a3b90a637931ce))
* **button:** correct theme example ([5d0f4e8](https://github.com/Graupl/graupl/commit/5d0f4e8cb64b1a492998d2fec110b73892e8abc4))
* **component:** accuracy review ([8278f0b](https://github.com/Graupl/graupl/commit/8278f0b314709f91b1eb20b02df638db1863c249))
* **components:** update to latest doc templates ([56bfcff](https://github.com/Graupl/graupl/commit/56bfcff24b4cca9e1273185c903acf28b2154898))
* fix spacing of tables ([6e0ad5a](https://github.com/Graupl/graupl/commit/6e0ad5a0060e5735e4cae9d54c33e62dd812d979))
* **layout:** update to match new format ([24cf71e](https://github.com/Graupl/graupl/commit/24cf71e23aede6af33cef829c1a919ef647186d5))
* **layout:** update to proper format ([c11069e](https://github.com/Graupl/graupl/commit/c11069e2efb5eab77e2de9b1e14ae2f1ecbb3bd8))
* **props:** add in-file documentation to all custom props ([fbcc75b](https://github.com/Graupl/graupl/commit/fbcc75bc865e9a6cf0c772e4cd711c4c1dedad93))
* **theme:** accuracy review ([1d34526](https://github.com/Graupl/graupl/commit/1d34526ae0ca5d8d3fcea7c705da148d94c5d149))
* **theme:** update to latest template ([e171432](https://github.com/Graupl/graupl/commit/e1714323f9900aba8afccc04951b5ecaf9ac2254))
* **utilities:** update to latest template ([3fc419c](https://github.com/Graupl/graupl/commit/3fc419cf3925da7be8dbb562b913f0b30b168890))


### Build System

* **npm:** replace postcss with lightningcss ([7215012](https://github.com/Graupl/graupl/commit/7215012dad0349ad0d114832ecbdcaa3090863ad)), closes [#149](https://github.com/Graupl/graupl/issues/149)
* **vite:** don't use lightning for docs ([4fe0da4](https://github.com/Graupl/graupl/commit/4fe0da40da7013f441b4b737af1615dbe70054c4))

## [1.0.0-beta.23](https://github.com/Graupl/graupl/compare/v1.0.0-beta.22...v1.0.0-beta.23) (2025-10-28)


### Bug Fixes

* **breakpoints:** use pixels for all breakpoints to fix resizing bug ([2bf8319](https://github.com/Graupl/graupl/commit/2bf8319295445d636dc7f7c6715c244e3a2ef02e))

## [1.0.0-beta.22](https://github.com/Graupl/graupl/compare/v1.0.0-beta.21...v1.0.0-beta.22) (2025-10-28)


### Bug Fixes

* **component:** correct disclosure selector validation ([44eb3de](https://github.com/Graupl/graupl/commit/44eb3de4f590b55835015765b4f58dbbef1b64e5))
* **component:** hand disclosure key generation, expanding, and collapsing properly ([bb81d06](https://github.com/Graupl/graupl/commit/bb81d061d8f01f28e92dfbf15cd15b839537ce77))


### Build System

* **rolldown:** add missing disclosure scripts ([5539ed0](https://github.com/Graupl/graupl/commit/5539ed06e2b07032b54ebb7b6b8e95d743dba35b))

## [1.0.0-beta.21](https://github.com/Graupl/graupl/compare/v1.0.0-beta.20...v1.0.0-beta.21) (2025-10-22)


### Features

* **component:** add ability for disclosures to for auto open ([9b51722](https://github.com/Graupl/graupl/commit/9b51722c85373a76cd1d398521f6b0755428444d))


### Bug Fixes

* **component:** do not trigger disclosure resizeObserver on height change ([514b7b5](https://github.com/Graupl/graupl/commit/514b7b536f78256f6525b1583a3fc2f55f7b6d54))
* **component:** do not trigger navigation shelf resizeObserver on height change ([9079e29](https://github.com/Graupl/graupl/commit/9079e2979b2666cc8cf06e36b7e7c9036e6f7119))

## [1.0.0-beta.20](https://github.com/Graupl/graupl/compare/v1.0.0-beta.19...v1.0.0-beta.20) (2025-10-21)


### Features

* **component:** add disclosure ([ee892ff](https://github.com/Graupl/graupl/commit/ee892ff2bb6611b7e70fdc00457d6669d7400656)), closes [#153](https://github.com/Graupl/graupl/issues/153)
* **component:** implement badges ([5ba63f4](https://github.com/Graupl/graupl/commit/5ba63f4ff8f1986fb12a42605ec0dd0bf40611a0))
* **navigation shelf:** add auto collapsing functionality ([ccf0211](https://github.com/Graupl/graupl/commit/ccf021135b08e97276ad27f6982879e682f90c9a))


### Bug Fixes

* correct typo in constructor that caused errors in validation ([84cf093](https://github.com/Graupl/graupl/commit/84cf0938a112deab9a015898dae04a3a9a2f96d4))
* **navigation shelf:** make sure shelf doesn't close if locked ([fd1121a](https://github.com/Graupl/graupl/commit/fd1121a4d7ac0b9771e818fb8c883576873326bb))


### Documentation

* change structure and begin itemizing what needs to be written ([c792efe](https://github.com/Graupl/graupl/commit/c792efe037dde27d2e072db4a246666dc342330f))
* implement early styling for new look and feel of docs site ([3662292](https://github.com/Graupl/graupl/commit/366229213d7a46ce21ed6a700a917405ccb5b0e8))
* **readme:** add logo and badges ([fa65159](https://github.com/Graupl/graupl/commit/fa65159f2a0ecdf4e1e6de1caf7765a83d076b49))

## [1.0.0-beta.19](https://github.com/Graupl/graupl/compare/v1.0.0-beta.18...v1.0.0-beta.19) (2025-07-22)


### Bug Fixes

* **utility:** change bordered utilities to work with tables ([d615af5](https://github.com/Graupl/graupl/commit/d615af5242c6970fc1ca2d0e388b7b9d0ac7a916)), closes [#191](https://github.com/Graupl/graupl/issues/191)

## [1.0.0-beta.18](https://github.com/Graupl/graupl/compare/v1.0.0-beta.17...v1.0.0-beta.18) (2025-07-14)


### Features

* **core:** implement new theme property maps in buttons, tables, and alerts ([cd93f65](https://github.com/Graupl/graupl/commit/cd93f657645bd33209be3ab3552e4eaa9e61de3d))

## [1.0.0-beta.17](https://github.com/Graupl/graupl/compare/v1.0.0-beta.16...v1.0.0-beta.17) (2025-07-11)


### Bug Fixes

* **icons:** add missing map module to defaults ([ca7d0f1](https://github.com/Graupl/graupl/commit/ca7d0f17784766a3a5152bd36bd17aa06dc25afc))

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

## [1.0.0-beta.15](https://github.com/Graupl/graupl/compare/v1.0.0-beta.14...v1.0.0-beta.15) (2025-06-30)


### Documentation

* correct return information for helper function ([5e36cb0](https://github.com/Graupl/graupl/commit/5e36cb0b5a67e38aea1cd2eadf240fd0aead213e))


### Build System

* **release:** fix post changelog script ([20e8da9](https://github.com/Graupl/graupl/commit/20e8da904eb08bebb73a7f44e901f380cfdd296f))


### Continuous Integration

* **release:** correct body path ([054f361](https://github.com/Graupl/graupl/commit/054f36191a76b4c2dcd5bdc6e012bef5fb55b7ca))

## [1.0.0-beta.14](https://github.com/Graupl/graupl/compare/v1.0.0-beta.13...v1.0.0-beta.14) (2025-06-27)


### Features

* **js:** add functions for finding focusable elements ([196e47e](https://github.com/Graupl/graupl/commit/196e47ec2c1f51cb61b97500ee212c61c2c9654e))
* **js:** add new validation helpers ([0d41fb1](https://github.com/Graupl/graupl/commit/0d41fb115dfdccf5ea1126425d50d8b35d66885e))


### Bug Fixes

* **accordion:** correct default prefix value ([fc63113](https://github.com/Graupl/graupl/commit/fc63113abe0018ebc053d4f70c996ef08e32fce5))


### Documentation

* add basic readmes ([5519d43](https://github.com/Graupl/graupl/commit/5519d431957a204a93da43cde1f7f6657cb3a0dc))


### Build System

* **npm:** allow packages to not have the same scripts ([3862381](https://github.com/Graupl/graupl/commit/3862381b182478823a8efcd9bedaeb94b2717ca6))
* **release:** add a way to get the current release notes into a separate file ([2110c03](https://github.com/Graupl/graupl/commit/2110c03d153430eb96fba20aca160096bfad3af6))


### Continuous Integration

* **release:** add body to github releases ([2c929c6](https://github.com/Graupl/graupl/commit/2c929c6163d5878e4216c742e0d72ee8e2d76031))

## [1.0.0-beta.13](https://github.com/Graupl/graupl/compare/v1.0.0-beta.12...v1.0.0-beta.13) (2025-06-25)


### Bug Fixes

* **core:** correct how source and generator scripts are exported ([8e590f1](https://github.com/Graupl/graupl/commit/8e590f13da490a5789cb01c075ad7de0a2bc7218))


### Continuous Integration

* **release:** use classic access token for github publishing ([967dd47](https://github.com/Graupl/graupl/commit/967dd473f08a1b4e8809f640e99c0a3983ea2990))

## [1.0.0-beta.12](https://github.com/Graupl/graupl/compare/v1.0.0-beta.11...v1.0.0-beta.12) (2025-06-25)


### Bug Fixes

* properly compile alert generator ([3d92023](https://github.com/Graupl/graupl/commit/3d92023007be2ef7aace0f8fa2c7a5ceccc502a5))


### Continuous Integration

* **release:** remove addition conditions from publishing ([a33f456](https://github.com/Graupl/graupl/commit/a33f45673e3aaef43fd4ea2df1f51c26560b3dfe))

## [1.0.0-beta.11](https://github.com/Graupl/graupl/compare/v1.0.0-beta.10...v1.0.0-beta.11) (2025-06-24)


### Features

* **core:** add import require rules for new scripts ([287be8b](https://github.com/Graupl/graupl/commit/287be8b5f06d9140c1cffcf355641c8c13af6d33))


### Build System

* correct files including when installing through npm ([50b347f](https://github.com/Graupl/graupl/commit/50b347fcc125d6b957a5807970c958be3cfb7148))
* implement rolldown for js bundling ([8b11c7a](https://github.com/Graupl/graupl/commit/8b11c7a5095b22d3e85ce913eea9aa9937c92c65))
* standardize directories to match the rest of the project ([cdda81e](https://github.com/Graupl/graupl/commit/cdda81e2e41025e21f6fc81665c238fd3fcfec86))


### Continuous Integration

* **release:** get proper prerelease type ([e1e28a4](https://github.com/Graupl/graupl/commit/e1e28a45fa42087f141a8a03cee2a732cb080726))

## [1.0.0-beta.10](https://github.com/Graupl/graupl/compare/v1.0.0-beta.9...v1.0.0-beta.10) (2025-06-23)


### Bug Fixes

* **icons:** correct mixin call to reflect new mixins ([5d8cb33](https://github.com/Graupl/graupl/commit/5d8cb33c134795f75d158b814b98ac23d5601c8a))


### Continuous Integration

* **github:** setup workflow call triggers on test ([6ac48d4](https://github.com/Graupl/graupl/commit/6ac48d41e906a27a466d6103901b53cd6a9604a4))

## [1.0.0-beta.9](https://github.com/Graupl/graupl/compare/v1.0.0-beta.8...v1.0.0-beta.9) (2025-06-23)


### Features

* **package:** integrate icons into main repo ([b7dfbda](https://github.com/Graupl/graupl/commit/b7dfbdac321b1cf66b5d899203e3cfb2b2951cbf))


### Code Refactoring

* **menu:** change default toggle content ([2389b0b](https://github.com/Graupl/graupl/commit/2389b0b962ca70c83d3e00363ea39c44162d2e89))


### Build System

* **container:** add docker environment for development ([d4358ae](https://github.com/Graupl/graupl/commit/d4358ae2580faccfd9735fd9cd475aaba33c7bf1))
* **graupl:** set up namespaces and sub packaging ([7e5bfaa](https://github.com/Graupl/graupl/commit/7e5bfaaea03963aefb87417b77b888761e5223f4))
* **npm:** replace standard-version with commit-and-tag-version ([d8ceddc](https://github.com/Graupl/graupl/commit/d8ceddc8e9cf7eeacc7af2f6f08fbbf5ac076404))
* **release:** update all package versions when release is run ([e0af825](https://github.com/Graupl/graupl/commit/e0af8254bea76f13628d8fde1393751aaa37d939))
* **sass:** use node importer ([74301c0](https://github.com/Graupl/graupl/commit/74301c00da97d75354cfe42cde40b8ebe4c38073))


### Continuous Integration

* add release workflows ([0c03570](https://github.com/Graupl/graupl/commit/0c035700c044c9ffbd8f4262003e45db4b4c7edd))
* **prerelease:** fix logic ([6b340f8](https://github.com/Graupl/graupl/commit/6b340f80ba6856ccb0bbb7d1863e373ff2b5f888))
* **prerelease:** fix logic ([a191379](https://github.com/Graupl/graupl/commit/a191379d87bd640376be90cda94bc39cf2f7659c))
* **release:** fix formatting ([63bc38b](https://github.com/Graupl/graupl/commit/63bc38bcecec4cc91787a1486b5f2d492dece987))
* **release:** fix triggers ([f3194f3](https://github.com/Graupl/graupl/commit/f3194f31e8352ce71b2a341a6339d837f787b6b8))
* **release:** update workflows to handle workspaces ([27eebf5](https://github.com/Graupl/graupl/commit/27eebf501002ea4aad2432467dee00677f5e743e))
* standard ci names, permissions, and formats ([85b5a6d](https://github.com/Graupl/graupl/commit/85b5a6d4142cecb1ad0c7b15b7bf9e1861ba8c42))

## [1.0.0-beta.8](https://github.com/Graupl/graupl/compare/v1.0.0-beta.7...v1.0.0-beta.8) (2025-06-04)


### Features

* add inital logo ([d7a2b55](https://github.com/Graupl/graupl/commit/d7a2b5540cf6a5e9d6d6947082a47342b9103ae8))
* add logo stuff ([c79bca3](https://github.com/Graupl/graupl/commit/c79bca3a9635d266fb8bab9854e656977fe12dcf))
* **base:** add new border radius custom props to buttons ([cea4075](https://github.com/Graupl/graupl/commit/cea40753c0045c246274d826f71f6f0f9d14f625))
* **base:** add new border radius custom props to links ([08cc74e](https://github.com/Graupl/graupl/commit/08cc74e56ef81ab6b05e7f5d541b5cd4f09be7f7))
* **base:** use latest standards for various properties and documentation ([54814bf](https://github.com/Graupl/graupl/commit/54814bf7aa3044a77efd8c59d1156f397accef25)), closes [#156](https://github.com/Graupl/graupl/issues/156) [#157](https://github.com/Graupl/graupl/issues/157) [#136](https://github.com/Graupl/graupl/issues/136)
* **columns:** add new columns max content width custom prop ([f88d865](https://github.com/Graupl/graupl/commit/f88d86501a7ee67b4a22f40b26c625065a1c9820))
* **component:** handle menu and navigation similar to new links and buttons ([22dc6ad](https://github.com/Graupl/graupl/commit/22dc6ad5aa6b50fa80597b8a554b528b1525ce12))
* implement container query support ([e4ef996](https://github.com/Graupl/graupl/commit/e4ef996288edccb258cd8506b3ab9cae93615ec3))
* implement new border standardization across all components ([dbaaed2](https://github.com/Graupl/graupl/commit/dbaaed273f90b9b5094756395742c3644916cddd))
* **layout:** add container query classes to flex-columns ([17799a2](https://github.com/Graupl/graupl/commit/17799a22b08619ea08b880784bbe23af181ab830))
* **theme:** implement new color custom props ([2dd4d89](https://github.com/Graupl/graupl/commit/2dd4d895735c590aa4cfebb25d9f6fd2720983a4))
* **utility:** add container type classes ([0a1efb7](https://github.com/Graupl/graupl/commit/0a1efb775f4fc8a07c0541849c6f1b2844d30002)), closes [#161](https://github.com/Graupl/graupl/issues/161)


### Bug Fixes

* **accordion:** correct border defaults ([34eccb4](https://github.com/Graupl/graupl/commit/34eccb4017275a1818f892fa57cf44b22a81add8))
* **card:** correct grid layout ([cbb2785](https://github.com/Graupl/graupl/commit/cbb2785c6000e63075fa6ed6faee6a07d10a59c2))
* **container:** correct sidebar media queries ([f0be06f](https://github.com/Graupl/graupl/commit/f0be06f2c828c2fc70d9fe835e74c88a0c39a410))
* **demo:** correct broken html ([2faa489](https://github.com/Graupl/graupl/commit/2faa489a59a905b8979455be851b5f36d08f3d95))
* **lists:** correct border defaults ([e066101](https://github.com/Graupl/graupl/commit/e0661010405605d6eef8803aa6688afb3fbcdb00))
* **menu:** correct border defaults ([c4184bf](https://github.com/Graupl/graupl/commit/c4184bfc815e87ce10ac7b33b3b9d1fbf67443bb))
* **menu:** use selector base for buttons ([c36ed16](https://github.com/Graupl/graupl/commit/c36ed16e9e551c0a22d0576f49c996fa3ee1435f))
* **sp:** correct typo in property name ([46757b9](https://github.com/Graupl/graupl/commit/46757b9b6e028859117145e81a17be0257d76ead))
* **utility:** use graupl color and background props in color utilities ([dcfe3a5](https://github.com/Graupl/graupl/commit/dcfe3a51495ec216034026ec22dc3e0d2c50e8bc))


### Performance Improvements

* **base:** greatly simplify and standardize links and buttons ([1176330](https://github.com/Graupl/graupl/commit/1176330fb406bc587f68711342fc97a5a10f2bc8))

## [1.0.0-beta.7](https://github.com/Graupl/graupl/compare/v1.0.0-beta.6...v1.0.0-beta.7) (2025-05-01)


### Bug Fixes

* **utility:** correct z-index property ([3d7168c](https://github.com/Graupl/graupl/commit/3d7168ca2da2b11bc8d25cbd928631490cc4ae54))

## [1.0.0-beta.6](https://github.com/Graupl/graupl/compare/v1.0.0-beta.5...v1.0.0-beta.6) (2025-04-30)


### Features

* **container:** add sidebar functionality ([ec64613](https://github.com/Graupl/graupl/commit/ec64613f8a9b9de5907dd8c339be743cf7703685))
* **utility:** add z-index ([88890e5](https://github.com/Graupl/graupl/commit/88890e552450cb0419c939e5b8c2555746fe939b))


### Performance Improvements

* **background:** remove unused utilities ([466732f](https://github.com/Graupl/graupl/commit/466732f1b68aa7c7c7fd32959718610b10eaf667))


### Build System

* **docs:** update server host for docs dev ([d63ce32](https://github.com/Graupl/graupl/commit/d63ce3251a6ee68181b8f1f6e66e6e77e5dbd529))


### Documentation

* improve existing docs begin utility overhaul ([b291618](https://github.com/Graupl/graupl/commit/b29161871624bb1dfa90efa62ab24f26303f069f))
* remove base dir ([3a124a7](https://github.com/Graupl/graupl/commit/3a124a71233dedcf8fce11c9f488eabca425249e))
* touch up color docs ([c0eced5](https://github.com/Graupl/graupl/commit/c0eced5a745348d7df86326945f70a2d9dd1db68))
* **utlities:** add background, border, and color utilities ([0594a77](https://github.com/Graupl/graupl/commit/0594a772db7ed28b0de8ec4f374a0615626bf0b2))

## [1.0.0-beta.5](https://github.com/Graupl/graupl/compare/v1.0.0-beta.4...v1.0.0-beta.5) (2025-03-10)


### Features

* add control over container min widths and make it easier to cascade containers ([8de27f0](https://github.com/Graupl/graupl/commit/8de27f01abba42c2729539f3992e5375bcf2e55c))
* container code and documentation improvements ([f25a063](https://github.com/Graupl/graupl/commit/f25a0639cff5031d41d7af817e9a1d3bbcfc7add))
* **utilities:** add more customization options and documentation ([36f5387](https://github.com/Graupl/graupl/commit/36f5387d4ce038d40fc54830424193a0513541a3))


### Documentation

* **layout:** add descriptions, available options, and examples ([e0d1c28](https://github.com/Graupl/graupl/commit/e0d1c2816188428580b4fccea1e983f760c806c7))
* standardize wording and structure of current documented files ([433c7be](https://github.com/Graupl/graupl/commit/433c7be6b04c8c98ea7e83bcb6226d2cd0e55c6b))
* **state:** properly document focus ([8f1b1dc](https://github.com/Graupl/graupl/commit/8f1b1dcd36f56b00425e72a9e406dac4b2ff23a5))

## [1.0.0-beta.4](https://github.com/Graupl/graupl/compare/v1.0.0-beta.3...v1.0.0-beta.4) (2025-02-14)


### Bug Fixes

* **layers:** use id in layer initialization ([f09a3ae](https://github.com/Graupl/graupl/commit/f09a3aeffdfe2bc0c781fa2a29aac1cd2f15e484))
* **utility:** update gap to account for selector base ([550136b](https://github.com/Graupl/graupl/commit/550136b822959c1db1113f19a90ffe377315b270))


### Build System

* **git:** update pages job to use latest versions ([79a1d18](https://github.com/Graupl/graupl/commit/79a1d18bf12573b0885621aa3b5132136c623150))

## [1.0.0-beta.3](https://github.com/Graupl/graupl/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2025-02-12)


### Features

* **layout:** implement graupl-structured flex columns and new selector base ([684f715](https://github.com/Graupl/graupl/commit/684f71529a80cacaa24cc0ca4ace8300e21576a3)), closes [#136](https://github.com/Graupl/graupl/issues/136)
* **layout:** implement selector-base ([cc70559](https://github.com/Graupl/graupl/commit/cc705592ddb289970d7276d380223bdaaba2c3a8)), closes [#136](https://github.com/Graupl/graupl/issues/136)
* **utilities:** add gradients and background options ([75a1708](https://github.com/Graupl/graupl/commit/75a1708748793ff33736144c7046dde64845b51c))
* **utilities:** add radial gradient options ([38bc6df](https://github.com/Graupl/graupl/commit/38bc6df42e09e6ed7873f9d3bed1577bfa6f86b5))


### Bug Fixes

* **utilities:** correct generation for gradient aware-variant classes ([b69d1ff](https://github.com/Graupl/graupl/commit/b69d1ff1a68863f41b5a5c35d8ab1329dfeb0221))


### Performance Improvements

* **utilities:** disable default aware-variants for gradient and background ([0f04459](https://github.com/Graupl/graupl/commit/0f04459d79b7dcd80900427339ac65e52cb7ed33))


### Build System

* **postcss:** add custom postcss plugin to merge layers ([#134](https://github.com/Graupl/graupl/issues/134)) ([0382d07](https://github.com/Graupl/graupl/commit/0382d076f11b416008d7d4076331452c66834939))

## [1.0.0-beta.2](https://github.com/Graupl/graupl/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2024-12-13)


### Features

* **component:** add list and list item ([98f899c](https://github.com/Graupl/graupl/commit/98f899c1555277145271ac65060105d3d1ace1b0))
* implement id and layer control ([2b39b73](https://github.com/Graupl/graupl/commit/2b39b73fac4aed26eb8f49da5e66e625b6936263))
* **utilities:** add theme and state aware utilities ([fa835cb](https://github.com/Graupl/graupl/commit/fa835cb98c877a14653686569f44f3a553cb1d92))
* **utility:** add border classes ([5a408df](https://github.com/Graupl/graupl/commit/5a408dfdfa01daa37210cf5aecbbe6e3fe708715))
* **utility:** add flex basis and fix generation of existing flex classes ([05499f7](https://github.com/Graupl/graupl/commit/05499f79773bcc90b5d59f1a5b74d86f26aeb2bf))
* **utility:** add text transform classes ([0f2e074](https://github.com/Graupl/graupl/commit/0f2e07403e884c42eb21fb4d4bc0dcfd426d96eb))


### Bug Fixes

* **component:** use correct screen mixin for input group inline ([73ac6cb](https://github.com/Graupl/graupl/commit/73ac6cb58684d2c4f6eea82a507b721359bed9ae))
* **utilities:** correct selector for display classes ([65c5052](https://github.com/Graupl/graupl/commit/65c5052311382f8c25eb9f89edd1faade42b7901))


### Performance Improvements

* **screen:** add error checking for mixins and functions ([3130bce](https://github.com/Graupl/graupl/commit/3130bce2e43d43194c56b983b755d8a0acd13500))


### Code Refactoring

* **border:** use rem for default width ([8ef867f](https://github.com/Graupl/graupl/commit/8ef867f30860134a59fa4bf147d05d618a7cbfcb))

## [1.0.0-beta.1](https://github.com/Graupl/graupl/compare/v1.0.0-beta.0...v1.0.0-beta.1) (2024-12-06)


### Code Refactoring

* **prefix:** move dash separator to be included in prefix ([cb537b7](https://github.com/Graupl/graupl/commit/cb537b78c17e38a8afeeccabe75bb1136491aa47))

## [1.0.0-beta.0](https://github.com/Graupl/graupl/compare/v1.0.0-alpha.16...v1.0.0-beta.0) (2024-12-05)


### Features

* **theme:** overhaul theme system to allow for fine-tuned control ([b433cd2](https://github.com/Graupl/graupl/commit/b433cd2ecac040a12e0b20cff91f90479aeff38e))
* **utilities:** add ability to have responsive variations on all utilities ([#122](https://github.com/Graupl/graupl/issues/122)) ([ba8ffdf](https://github.com/Graupl/graupl/commit/ba8ffdfc8a48415b25e0c9eaefccdda4b41b0e5b))


### Code Refactoring

* **breakpoints:** change entire breakpoint system to be smarter ([f87f01c](https://github.com/Graupl/graupl/commit/f87f01cdbe10768270a6ae0359440bbf821c9bf6))
* **navigation:** make js structure the same as other custom scripts ([f26534a](https://github.com/Graupl/graupl/commit/f26534ada58b32e48ce91d99574da089dc823f12))

## [1.0.0-alpha.16](https://github.com/Graupl/graupl/compare/v1.0.0-alpha.15...v1.0.0-alpha.16) (2024-10-22)


### Features

* add force-single-column screen trigger ([dad9253](https://github.com/Graupl/graupl/commit/dad92531fa9a273b223f062dca6bba0d60321942))
* **build:** add compiled versions of js ([1e2939b](https://github.com/Graupl/graupl/commit/1e2939bc0c17ed7ad62dd47460cf42c3d9ae13e6))
* **component:** implement accordion ([fdbc7c1](https://github.com/Graupl/graupl/commit/fdbc7c1aee4e8b87384c42cff11f7408f3743d47)), closes [#67](https://github.com/Graupl/graupl/issues/67)
* fix accordion sizing and add new open close methods ([8a5420c](https://github.com/Graupl/graupl/commit/8a5420c22700162f359eab951e8ee09766d3d408))
* **js:** implement new storage into all js components ([#114](https://github.com/Graupl/graupl/issues/114)) ([7747617](https://github.com/Graupl/graupl/commit/7747617102b10e9a23e2406162c26ca22c84f3b9))


### Bug Fixes

* **carousel:** remove pointer events from containers ([922167a](https://github.com/Graupl/graupl/commit/922167a69434dbdf657b46e729b483a62c7a71d9))
* correct accordion typo ([#115](https://github.com/Graupl/graupl/issues/115)) ([35ad3d7](https://github.com/Graupl/graupl/commit/35ad3d73bf92cb9bf961fb12b24be050d4a648e8))

## [1.0.0-alpha.15](https://github.com/Graupl/graupl/compare/v1.0.0-alpha.14...v1.0.0-alpha.15) (2024-09-24)


### Build System

* **stylelint:** fix broken rules ([891807f](https://github.com/Graupl/graupl/commit/891807f0a618be0966fb9a6de9a3ee83a23c09a1))

## [1.0.0-alpha.14](https://github.com/Graupl/graupl/compare/v1.0.0-alpha.13...v1.0.0-alpha.14) (2024-09-24)


### Features

* add basic template for documentation ([2a71c52](https://github.com/Graupl/graupl/commit/2a71c525ef4c7ec57faefce1c4658f9a0d8e45e1))
* **button:** add state classes ([1018e3b](https://github.com/Graupl/graupl/commit/1018e3b8c88ed1fc93565e6f642cba81b08cf1e3))
* **component:** add top bottom and inverse classes to cards ([3199410](https://github.com/Graupl/graupl/commit/3199410c1cb925d2ba485899b0a039c802388e7b))
* **component:** add transition custom props for alerts and fix markup ([b3c479f](https://github.com/Graupl/graupl/commit/b3c479fa351cfdbbfa4b877a2d5481cd6c5859ee))
* **component:** implement alerts ([d493a7f](https://github.com/Graupl/graupl/commit/d493a7fdd58a1f3476988e4162078dbf4d9700eb)), closes [#65](https://github.com/Graupl/graupl/issues/65)
* **component:** implement carousel ([ea613c1](https://github.com/Graupl/graupl/commit/ea613c14b98ddea04a4c3024adcf1b34aca3cfe0)), closes [#87](https://github.com/Graupl/graupl/issues/87)
* **utilities:** add width and height classes ([5d93ed6](https://github.com/Graupl/graupl/commit/5d93ed6e8e85dd553543289db29d8a833b874afd))
* **utility:** add visually hidden classes ([4c7cecc](https://github.com/Graupl/graupl/commit/4c7ceccd14194ccfbb1f67fba8f332f499a3e6db))


### Bug Fixes

* **menu:** adjust min/max width on menu items ([cff88ec](https://github.com/Graupl/graupl/commit/cff88eccb2dada10d98b48595b742ef08b79dc40))


### Code Refactoring

* **alerts:** use new button mixin ([2fe35eb](https://github.com/Graupl/graupl/commit/2fe35ebfd5ade483463f80e5688db976e938301c))


### Build System

* **npm:** update eslint and plugins to latest ([d927eaa](https://github.com/Graupl/graupl/commit/d927eaa7f70da62aad1aa766e32dace8668bb3dc))
* **npm:** update husky ([678341c](https://github.com/Graupl/graupl/commit/678341cca8faa205f75e8a32826bbd1542c93587))
* **npm:** update stylelint plugins ([f54942d](https://github.com/Graupl/graupl/commit/f54942d25b6c094bb8b27b5cae695984b46f4326))

## [1.0.0-alpha.13](https://github.com/Graupl/graupl/compare/v1.0.0-alpha.12...v1.0.0-alpha.13) (2024-06-04)


### Features

* **base:** add stretched link class ([fc5e4b6](https://github.com/Graupl/graupl/commit/fc5e4b661adcb1141432542a4b93dbaa30d4d154))
* **base:** implement states and extras into both buttons and links ([161b34b](https://github.com/Graupl/graupl/commit/161b34b7dc83b4964cd75a1426dc4a8168d06ced))
* **component:** implement cards  ([34e9d08](https://github.com/Graupl/graupl/commit/34e9d08dcf0eb46970bbdeb2a30346dcf03421ed)), closes [#63](https://github.com/Graupl/graupl/issues/63)
* **component:** implement flex columns component ([6373947](https://github.com/Graupl/graupl/commit/6373947a1d844a9dec0f4cd18837aa5768a804a8))
* **component:** implement menu and navigation components ([ce93a72](https://github.com/Graupl/graupl/commit/ce93a72f6154211f2ae48efb6e0e0b551bb66e24))
* **function:** handle transparent and other standard colors in theme.get() ([3c3a7cf](https://github.com/Graupl/graupl/commit/3c3a7cf70fb0df8a58f6668ce4a0b620353985fc))
* **props:** add new border prop to all elements ([d7de8c2](https://github.com/Graupl/graupl/commit/d7de8c223293fefec10d29e012172abb256f767d))
* **utility:** add order utilities ([24c7026](https://github.com/Graupl/graupl/commit/24c7026cfdbcf02de3ef86b07e0ecad68b3b4751))
* **utility:** add ratio classes ([526197d](https://github.com/Graupl/graupl/commit/526197db0dcae9ff426619853261024244f30620))


### Bug Fixes

* **buttons:** use proper theme get function for button variants ([7baa57a](https://github.com/Graupl/graupl/commit/7baa57a211e34fc1b0650e47f7cd8222e0c732a2))
* rename font-size to font-size-base for consistency ([3537141](https://github.com/Graupl/graupl/commit/35371415ccd1a875b045d71fc5ddc4998be37870))
* use unset for flex columns fill ([fdaa10b](https://github.com/Graupl/graupl/commit/fdaa10b0cfcab8fbf5652f7a5aaa40dddb917059))


### Performance Improvements

* **button:** simplify disabled button code ([582bcac](https://github.com/Graupl/graupl/commit/582bcacae7abc3b92d5bb58943ca25033f90f720))
* **columns:** adjust both normal and flex columns to work better in various screen sizes ([16c133b](https://github.com/Graupl/graupl/commit/16c133b060e3fd9eecd677d91c861d15033dda6c))


### Documentation

* add mode toggle to html ([a22f12d](https://github.com/Graupl/graupl/commit/a22f12dbace5bcc6119c3588c5ed9ff494fe9fd1))
* add spacing to example html ([3758642](https://github.com/Graupl/graupl/commit/37586421220f9dc97a083bc51d10038028fe3219))

## [1.0.0-alpha.12](https://github.com/Graupl/graupl/compare/v1.0.0-alpha.11...v1.0.0-alpha.12) (2024-05-24)


### Features

* allow all selectors to be customized ([270d3f4](https://github.com/Graupl/graupl/commit/270d3f4fca5c218ecba3831a24e0cbedb009c469))
* **base:** add collapsed option for tables ([5f86b6d](https://github.com/Graupl/graupl/commit/5f86b6d82430de9d99c33359fbf36fa450fd98bf))
* implement normalize.css into library ([f4b4614](https://github.com/Graupl/graupl/commit/f4b4614f475aa601f986de4e5bbe7b62a24797eb))
* **utilities:** add auto spacers ([d5893bb](https://github.com/Graupl/graupl/commit/d5893bb41b4bfea776c6760b7117de404e7d84e8))


### Bug Fixes

* **buttons:** remove text decoration and add cursor for links that are buttons ([844dd10](https://github.com/Graupl/graupl/commit/844dd1072d92af34cb9f19b5eea4227b523c860b))


### Documentation

* **comments:** standardize file comments ([659e1ac](https://github.com/Graupl/graupl/commit/659e1acd8112620a9ed1e577df053e648687e7ac))

## [1.0.0-alpha.11](https://github.com/Graupl/graupl/compare/v1.0.0-alpha.10...v1.0.0-alpha.11) (2024-05-21)


### Features

* allow buttons and links to look like eachother ([87aae2f](https://github.com/Graupl/graupl/commit/87aae2f87e2c3ea76fda1938345dec936b3ace8b))


### Code Refactoring

* **tables:** sync default colours with root colours ([b91f59c](https://github.com/Graupl/graupl/commit/b91f59c1c10953c41208b53f92a519195f1bacf9))
* **variable:** change root-font-color to root-color ([4b04a5c](https://github.com/Graupl/graupl/commit/4b04a5c67c3187f48351eb5b0edf7aaf646c0dd8))

## [1.0.0-alpha.10](https://github.com/Graupl/graupl/compare/v1.0.0-alpha.9...v1.0.0-alpha.10) (2024-05-14)


### Features

* link button and form backgrounds to root background ([cbfc6e5](https://github.com/Graupl/graupl/commit/cbfc6e5bc9f37e5a72042185c5f3b7f6a5be58ed))
* **utility:** add alignment utilities ([5183e13](https://github.com/Graupl/graupl/commit/5183e137ef130c3d4f45f92a132bb98fdf1748ac))
* **utility:** add display utilities ([490748d](https://github.com/Graupl/graupl/commit/490748dc92e267be8df6af9c1935a8154481547a))
* **utility:** add flex utilities ([fc85be3](https://github.com/Graupl/graupl/commit/fc85be3b7de06a0294705895e83ae5293ffd3103))
* **utility:** add inset utilities ([f148b50](https://github.com/Graupl/graupl/commit/f148b504c6e21382100f16f9c5ed4d5d203f1dcc))
* **utility:** add justification utilities ([92ae016](https://github.com/Graupl/graupl/commit/92ae01677797e3284edd463d1c5b2e34a6cd7da0))
* **utility:** add list utilities ([8867ace](https://github.com/Graupl/graupl/commit/8867acec69845264726397bfa6a7202655865231))
* **utility:** add position utilities ([0ec0f89](https://github.com/Graupl/graupl/commit/0ec0f89a8a8d89d0a486be609f5b3d30369570b4))
* **utility:** add visibility utilities ([6c5dcd2](https://github.com/Graupl/graupl/commit/6c5dcd256c7255db7c5cff9d39a0debf198910a6))
* **utility:** allow class customization and standardize color classes ([708c8c3](https://github.com/Graupl/graupl/commit/708c8c352e6713b3ab382e93c6ccf396a113368d))
* **utility:** allow class customization for typography classes ([9bc66b6](https://github.com/Graupl/graupl/commit/9bc66b689dca897bb64a779e910402bdad141c98))

## [1.0.0-alpha.9](https://github.com/Graupl/graupl/compare/v1.0.0-alpha.8...v1.0.0-alpha.9) (2024-05-13)


### Build System

* **npm:** refine exports ([8f40fe8](https://github.com/Graupl/graupl/commit/8f40fe88234032cff2782622a348dcb4cbf42541))

## [1.0.0-alpha.8](https://github.com/Graupl/graupl/compare/v1.0.0-alpha.7...v1.0.0-alpha.8) (2024-05-03)


### Features

* **button:** add sass map to control theme shades for each variant ([e94f530](https://github.com/Graupl/graupl/commit/e94f530c78d82cef20a509816adac805e30735f4))
* **screen:** reduce and modernize media queries and mixins ([7b5fc3c](https://github.com/Graupl/graupl/commit/7b5fc3c3e7a2fd2ca6001a8a16a6e58d78d4da3f))
* **table:** add sass map to control theme shades for each variant ([64f36e2](https://github.com/Graupl/graupl/commit/64f36e2bf8da79ba2f149202d573cca9a28fd041))


### Bug Fixes

* **sass:** correct table caption side variable name ([d958294](https://github.com/Graupl/graupl/commit/d958294347ead86528123b5056193721563bd7b2))
* **sass:** remove defaults from custom prop variables ([151ad89](https://github.com/Graupl/graupl/commit/151ad8905a435ab631714ebf6a98a8107fac5c9e))
* **sass:** remove defaults from variables and fix transition name ([55e4a2e](https://github.com/Graupl/graupl/commit/55e4a2e21acad2fd26e02e7834c37c9bfcec100f))

## [1.0.0-alpha.7](https://github.com/Graupl/graupl/compare/v1.0.0-alpha.6...v1.0.0-alpha.7) (2024-05-01)


### Features

* add top margin to headings ([9fc42f1](https://github.com/Graupl/graupl/commit/9fc42f19e4a524279c1107201799035f109b8e5b))
* **component:** add input groups ([bf7ecd2](https://github.com/Graupl/graupl/commit/bf7ecd2b36d9bc49ae530a36a5fb6c961203619d))
* implement table base and component styles ([7cb1552](https://github.com/Graupl/graupl/commit/7cb15522922189e0f17851260da81677acca6abc)), closes [#24](https://github.com/Graupl/graupl/issues/24)
* **mixin:** implement proper screen media queries ([6c4f6d6](https://github.com/Graupl/graupl/commit/6c4f6d6738c876ef8a6f4273375155eb21f0aa55))
* use theme-specific button text colours ([d6b3276](https://github.com/Graupl/graupl/commit/d6b327692dab24c1dbc0d169e4c98a8685ad4745))
* **utility:** add writing direction specific spacers ([73b43ce](https://github.com/Graupl/graupl/commit/73b43ce3d87d5d5c6f285cb906ccb8ee0f5c47d5)), closes [#40](https://github.com/Graupl/graupl/issues/40)


### Bug Fixes

* **component:** correct field group column width ([6488aa5](https://github.com/Graupl/graupl/commit/6488aa52eafc3a6d61ce89327a3f32f17be42073)), closes [#44](https://github.com/Graupl/graupl/issues/44)
* **docs:** correct path to functions ([e75207c](https://github.com/Graupl/graupl/commit/e75207c088604485764b01045521471aabecb2dd))
* **typography:** use correct index for small text ([1685433](https://github.com/Graupl/graupl/commit/1685433c80a1d10b9355312b296a5eba7f959fd1))


### Code Refactoring

* **layout:** move container custom props to proper file ([4f4acde](https://github.com/Graupl/graupl/commit/4f4acded89c5b072f21d636e53fa8810e87e9972))
* **maps:** add custom versions of maps to override ([6150442](https://github.com/Graupl/graupl/commit/61504424120300e94cdb409e9912cd4c3692ff9d))
* **scss:** separate compiled and source scss ([4ce7bbb](https://github.com/Graupl/graupl/commit/4ce7bbb882e4b46c47ab64f56080d7f68a27d50c))
* **typography:** rename bold-font-weight to font-weight-bold ([b9d7c04](https://github.com/Graupl/graupl/commit/b9d7c04a25a8c8c1a3a883871c5017e396fd4cf4))


### Build System

* **npm:** add postbuild script to ensure docs build during tests ([54b5e18](https://github.com/Graupl/graupl/commit/54b5e18eff9e183030817f037aac329bd15b2239))

## [1.0.0-alpha.6](https://github.com/Graupl/graupl/compare/v1.0.0-alpha.5...v1.0.0-alpha.6) (2024-04-29)


### Features

* add typography theme and utility styles ([b60f500](https://github.com/Graupl/graupl/commit/b60f500e78fe79edd8dede398633d73041140d3d))
* **utilities:** add spacer utilities and replace gap with spacers ([f4a49f8](https://github.com/Graupl/graupl/commit/f4a49f8d21a56121afe7ad5ea060307cc1a5909d))


### Bug Fixes

* **layout:** split columns gap into row and column ([9b42185](https://github.com/Graupl/graupl/commit/9b42185d0990839b58bdef947e404d838af7f9c3))


### Reverts

* Revert "chore(release): 1.0.0" ([014c9ec](https://github.com/Graupl/graupl/commit/014c9eca1096234c7bd71ecc787a30129982493d))


### Build System

* bump cssnano from 6.1.2 to 7.0.1 ([489c460](https://github.com/Graupl/graupl/commit/489c4605705d1af4cffc504a3eeef63911afad7e))
* bump postcss-discard-comments from 6.0.2 to 7.0.0 ([1c39c0e](https://github.com/Graupl/graupl/commit/1c39c0e421eba6231114e1f553811400e909b979))

## [1.0.0-alpha.5](https://github.com/Graupl/graupl/compare/v1.0.0-alpha.4...v1.0.0-alpha.5) (2024-04-23)


### Bug Fixes

* allow multiple default files to accept overrides ([#28](https://github.com/Graupl/graupl/issues/28)) ([da7ffa0](https://github.com/Graupl/graupl/commit/da7ffa0685e70cf90645c77148171ec505b6455b))


### Build System

* **npm:** remove dist before compiling sass ([02505b7](https://github.com/Graupl/graupl/commit/02505b761c8197ea8acb928cccce02ca2a4404d9))

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
