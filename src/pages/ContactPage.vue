<template>
  <form ref="form" @submit.prevent="sendEmail">
    <label>Subject</label>
    <input type="text" v-model="subject" />
    <label>Body</label>
    <textarea v-model="body"></textarea>
    <input type="submit" value="Send" />
  </form>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

// Data
const subject = ref("");
const body = ref("");

function sendEmail() {
  const webhook_url =
    "http://128.199.141.217:5678/webhook/0af775cd-ce45-49cc-84db-23b4c2421ec2?";
  axios.get(webhook_url + "subject=" + subject.value + "&body=" + body.value);
  alert("Thank you");
}
</script>
