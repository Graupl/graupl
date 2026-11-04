/**
 * Three accordion items with bulk controls and initially collapsed panels.
 */
export const threeItemAccordion = `
  <div class="accordion">
    <div class="accordion-control-container">
      <button type="button" class="accordion-control expand-all">Expand all</button>
      <button type="button" class="accordion-control collapse-all">Collapse all</button>
    </div>
    <div class="accordion-item">
      <h3 class="accordion-item-header">
        <button type="button" class="accordion-item-toggle" aria-expanded="false">Accordion Heading</button>
      </h3>
      <div class="accordion-item-content">
        <p>Accordion Body</p>
      </div>
    </div>
    <div class="accordion-item">
      <h3 class="accordion-item-header">
        <button type="button" class="accordion-item-toggle" aria-expanded="false">Second heading</button>
      </h3>
      <div class="accordion-item-content"><p>Second panel</p></div>
    </div>
    <div class="accordion-item">
      <h3 class="accordion-item-header">
        <button type="button" class="accordion-item-toggle" aria-expanded="false">Third heading</button>
      </h3>
      <div class="accordion-item-content"><p>Third panel</p></div>
    </div>
  </div>
`;
