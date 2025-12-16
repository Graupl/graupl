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