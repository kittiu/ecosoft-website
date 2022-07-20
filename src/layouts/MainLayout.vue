<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar class="bg-white">
        <q-toolbar-title>
          <div>
            <img
              alt="Ecosoft logo"
              src="~assets/ecosoft-logo.png"
              style="height: 70px"
            />
          </div>
        </q-toolbar-title>
        <q-btn-group flat class="text-grey-6 gt-sm">
          <q-btn to="/">Home</q-btn>
          <q-separator vertical inset />
          <q-btn to="/our-approach">Our Approach</q-btn>
          <q-separator vertical inset />
          <q-btn>Odoo ERP</q-btn>
          <q-separator vertical inset />
          <q-btn>FAQ</q-btn>
          <q-separator vertical inset />
          <q-btn to="/post">Blogs</q-btn>
          <q-separator vertical inset />
          <q-btn>Workshop</q-btn>
        </q-btn-group>
        <q-btn to="/contact" class="bg-primary">Contact Us</q-btn>
        <q-btn
          dense
          flat
          round
          icon="menu"
          @click="toggleRightDrawer"
          class="text-grey-6 lt-md"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
    </q-drawer>
    <!-- <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>

    <div class="col text-grey-4">
      <q-banner class="bg-grey-9">
        <div class="row justify-center">
          <div class="col-auto" />
          <div class="col-4 q-pa-lg">
            <div class="text-h5 text-bold">ECOSOFT CO., LTD.</div>
            <div class="text-body1 q-mt-lg">
              6/F NST One Building, 281/19-23, Room 604, Silom Road, Silom,
              Bangrak, Bangkok Thailand 10500
            </div>
          </div>
          <div class="col-4 q-pa-lg">
            <div class="text-h5 text-bold">CONTACT US</div>
            <div class="text-body1 q-mt-lg">
              Phone: +66 (8) 1 841 7480, +66 (6) 1 860 1994<br />Email:
              sales@ecosoft.co.th
            </div>
          </div>
          <div class="col-auto" />
        </div>
      </q-banner>
    </div>
    <div class="row">
      <div class="col">
        <q-banner class="bg-dark text-white">
          <div class="text-grey-4">© Copyright - Ecosoft Co., Ltd.</div>
        </q-banner>
      </div>
    </div>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    const rightDrawerOpen = ref(false);

    return {
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
});
</script>
