<script setup>
import clView from "../components/View.vue";
import clSection from "../components/Section.vue";
</script>

<template>
  <cl-view
    name="Layout"
    description="A Layout is a more abstract concept. The general grid size, white-space, and gap distance for all pages will be defined here."
    class="container"
    content-class="container rg-5"
  >
    <cl-section
      name="Main container"
      description="The main container for the layout. This is where all content will be placed. Dotted lines indicate the boundaries of the container and are added for visual clarity. They will not be present in the final output."
      class="container"
      content-class="container"
    >
      <div class="full-width">
        <p class="font-weight-bold px-3">Full-width area</p>
      </div>
      <div class="full-width container py-5 focus">
        <div class="feature">
          <p class="font-weight-bold px-3">Feature area</p>
        </div>
        <div class="feature container focus py-5 g-5">
          <div class="breakout mb-n5">
            <p class="font-weight-bold px-3">Breakout area</p>
          </div>
          <div class="breakout container focus py-5">
            <p class="font-weight-bold px-3">Main content area</p>
            <div class="focus py-5"></div>
          </div>
          <div class="breakout mb-n5">
            <p class="font-weight-bold px-3">Breakout area</p>
          </div>
          <div class="breakout container focus py-5 sidebars">
            <div class="sidebar-left">
              <p class="font-weight-bold px-3">Sidebar area</p>
              <div class="focus py-5"></div>
            </div>
            <div class="inner-content">
              <p class="font-weight-bold px-3">Main content area</p>
              <div class="focus py-5"></div>
            </div>
            <div class="sidebar-right">
              <p class="font-weight-bold px-3">Sidebar area</p>
              <div class="focus py-5"></div>
            </div>
          </div>
          <div class="breakout mb-n5">
            <p class="font-weight-bold px-3">Breakout area</p>
          </div>
          <div class="breakout container focus py-5 sidebars">
            <div class="sidebar-left">
              <p class="font-weight-bold px-3">Sidebar area</p>
              <div class="focus py-5"></div>
            </div>
            <div class="content-right">
              <p class="font-weight-bold px-3">Main content area</p>
              <div class="focus py-5"></div>
            </div>
          </div>
          <div class="breakout mb-n5">
            <p class="font-weight-bold px-3">Breakout area</p>
          </div>
          <div class="breakout container focus py-5 sidebars">
            <div class="content-left">
              <p class="font-weight-bold px-3">Main content area</p>
              <div class="focus py-5"></div>
            </div>
            <div class="sidebar-right">
              <p class="font-weight-bold px-3">Sidebar area</p>
              <div class="focus py-5"></div>
            </div>
          </div>
        </div>
      </div>
    </cl-section>
    <cl-section
      name="Columns"
      description="Columns can be used to split the content area of a container into multiple sections. They will auto-adjust based on the size of the container they are in. Dotted lines indicate the boundaries of the container and are added for visual clarity. They will not be present in the final output."
      class="container"
      content-class="container"
    >
      <div class="columns">
        <div class="focus p-5"></div>
        <div class="focus p-5"></div>
        <div class="focus p-5"></div>
        <div class="focus p-5"></div>
        <div class="focus p-5"></div>
        <div class="focus p-5"></div>
        <div class="focus p-5"></div>
        <div class="focus p-5"></div>
        <div class="focus p-5"></div>
      </div>
    </cl-section>
    <cl-section
      name="Flex Columns"
      description="Flex columns are your standard bootstrap-style columns. They can be controlled through various classes to create responsive layouts and can be nested. Dotted lines indicate the boundaries of the container and are added for visual clarity. They will not be present in the final output."
      class="container"
      content-class="container"
    >
      <div class="flex-columns">
        <div class="focus p-5 col-4"></div>
        <div class="focus p-5 col-8 flex-columns">
          <div class="focus p-5 col-6"></div>
          <div class="focus p-5 col-6"></div>
        </div>
        <div class="focus p-5 col-6"></div>
        <div class="focus p-5 col-6"></div>
        <div class="focus p-5 col-3"></div>
        <div class="focus p-5 col-9 flex-columns">
          <div class="focus p-5 col-4"></div>
          <div class="focus p-5 col-8"></div>
        </div>
      </div>
    </cl-section>
  </cl-view>
</template>
