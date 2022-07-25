<template>
  <q-page class="text-grey-8">
    <div class="row q-ma-xl justify-center">
      <q-item-label>{{ session.token }}</q-item-label>
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="login"
          label="Login"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <q-input
          filled
          v-model="password"
          label="Password"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script setup>
import axios from "axios";
import { useQuasar } from "quasar";
import { ref } from "vue";
import { useSessionStore } from "stores/session";

const $q = useQuasar();
const session = useSessionStore();
const login = ref(null);
const password = ref(null);
const database = "devel";

function onSubmit() {
  axios
    .post("/web/session/authenticate", {
      jsonrpc: "2.0",
      params: {
        login: login.value,
        password: password.value,
        db: database,
      },
    })
    .then((response) => {
      // router.push to logged in page
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  $q.notify({
    color: "green-4",
    textColor: "white",
    icon: "cloud_done",
    message: "You are logged in",
  });
}

function onReset() {
  login.value = null;
  password.value = null;
}
</script>
