<template>
  <q-page class="text-grey-8">
    <div v-if="content == null" class="row q-ma-xl justify-center">
      <q-spinner-facebook color="primary" size="2em" />
    </div>
    <div v-if="content">
      <div class="row q-ma-lg justify-center">
        <div class="text-h4 text-bold">{{ title }}</div>
      </div>
      <div class="row q-ma-lg justify-center">
        <div>
          <q-chip class="col-xs-12 col-md-8">
            <q-avatar>
              <img :src="'https:' + author_url" />
            </q-avatar>
            {{ author }}
          </q-chip>
        </div>
      </div>
      <div class="row q-ma-lg flex flex-center">
        <div class="col-xs-12 col-md-8">
          <div v-html="content"></div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const title = ref(null);
const content = ref(null);
const author = ref(null);
const author_url = ref(null);

axios
  .get(
    `${process.env.BLOG_URL}/posts/${route.params.id}?key=${process.env.BLOG_KEY}`
  )
  .then((response) => {
    content.value = response.data.content;
    title.value = response.data.title;
    author.value = response.data.author.displayName;
    author_url.value = response.data.author.image.url;
  });
</script>
