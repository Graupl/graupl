/**
 * @file
 * PostCSS plugin to combine multiple at-rules into a single at-rule.
 *
 * This will go through each at-rule, save each as a key in an object, and then combine all of the at-rules into a single at-rule.
 */

const plugin = (options = {}) => {
  const atRules = {};
  const atRulesToProcess = options.atRules || [];

  return {
    postcssPlugin: "combine-at-rules",
    AtRule(atRule) {
      if (atRule.processed) {
        return;
      }

      if (
        (atRulesToProcess.length < 1 ||
          atRulesToProcess.includes(atRule.name)) &&
        atRule.nodes &&
        atRule.nodes.length > 0
      ) {
        // Save the at-rule for later
        if (atRules[atRule.name]) {
          if (atRules[atRule.name][atRule.params]) {
            atRules[atRule.name][atRule.params].append(atRule.nodes);
          } else {
            atRules[atRule.name][atRule.params] = atRule.clone();
          }
        } else {
          atRules[atRule.name] = {
            [atRule.params]: atRule.clone(),
          };
        }

        // Remove the at-rule from the tree
        atRule.processed = true;
        atRule.remove();

        return;
      }
    },
    Root(root) {
      // Combine all of the at-rules into a single at-rule
      // Only do this for rules found in the current file.
      for (const atRuleName in atRules) {
        for (const atRuleParams in atRules[atRuleName]) {
          const atRule = atRules[atRuleName][atRuleParams];

          console.log(atRule);

          root.append(atRule);
        }
      }
    },
  };
};

plugin.postcss = true;

module.exports = plugin;
