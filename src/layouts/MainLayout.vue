<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar class="bg-white">
        <q-toolbar-title>
          <div>
            <img
              alt="Ecosoft logo"
              src="~assets/pics/ecosoft-logo.png"
              style="height: 70px"
            />
          </div>
        </q-toolbar-title>
        <q-btn-group flat class="text-grey-6 text-bold text-subtitle1 gt-sm">
          <q-item to="/" exact>HOME </q-item>
          <q-separator vertical inset />
          <q-item to="/our-approach" exact>OUR APPROACH</q-item>
          <q-separator vertical inset />
          <q-item to="/post-list" exact>BLOGS</q-item>
          <q-separator vertical inset />
          <q-item to="/sign-in" exact>SIGN IN</q-item>
          <q-separator vertical inset />
        </q-btn-group>
        <q-btn rounded @click="contactUs" class="bg-primary text-white q-ml-md"
          >Contact Us</q-btn
        >
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
      <q-list bordered separator>
        <q-item-section class="q-ma-md" avatar>
          <q-icon color="primary" name="menu" />
        </q-item-section>
        <q-item to="/" exact>HOME</q-item>
        <q-item to="/our-approach">OUR APPROACH</q-item>
        <q-item to="/post-list">BLOGS</q-item>
        <q-item to="/sign-in">SIGN IN</q-item>
      </q-list>
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

  <q-dialog v-model="showForm" persistent>
    <q-card>
      <q-bar class="bg-primary text-white"
        >Hello
        <q-space />
        <q-btn dense round icon="close" flat v-close-popup></q-btn>
      </q-bar>
      <q-card-section style="max-height: 60vh" class="scroll"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, id alias.
        Laudantium alias cum dolore nisi corporis. Expedita inventore unde odio
        obcaecati asperiores quibusdam aperiam, quos id, voluptates laborum
        non!</q-card-section
      >
      <q-card-actions>
        <q-btn label="Accept">Accept</q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";
import axios from "axios";

const $q = useQuasar();
const rightDrawerOpen = ref(false);
const showForm = ref(false);

function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value;
}

function testNotify() {
  $q.notify("Message");
}

function contactUs() {
  $q.dialog({
    title: "กรุณาใส่ข้อมูลเพื่อการติดต่อกลับ (ชื่อ, อีเมล์, เบอร์โทรศัพท์)",
    prompt: {
      model: "",
      isValid: (val) => val.length > 2, // << here is the magic
      type: "text", // optional
    },
    cancel: true,
    persistent: true,
  }).onOk((data) => {
    axios
      .get(process.env.MAIL_URL + "?subject=New lead from website&body=" + data)
      .then(
        $q.notify({
          message: "ขอบคุณสำหรับข้อมูลการติดต่อ",
          color: "secondary",
          position: "top",
        })
      );
  });
}
</script>
