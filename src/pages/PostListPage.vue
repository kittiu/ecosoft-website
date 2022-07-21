<template>
  <q-page class="text-grey-8">
    <div class="row q-ma-lg justify-center">
      <q-item-label class="text-h4 text-bold">Blogs</q-item-label>
    </div>
    <div v-if="items.length == 0" class="row q-ma-xl justify-center">
      <q-spinner-facebook color="primary" size="2em" />
    </div>
    <div class="row q-ma-lg justify-center">
      <div class="col-xs-12 col-md-8 col-lg-6">
        <q-list v-if="items" unbordered separator>
          <q-item v-for="item in items" :key="item.id" :to="'/post/' + item.id">
            <q-item-section top avatar>
              <q-avatar
                ><q-img :src="'http://' + item.author.image.url"></q-img
              ></q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ item.author.displayName }} </q-item-label>
              <q-item-label
                ><div class="text-subtitle1 text-dark">
                  {{ item.title }}
                </div>
              </q-item-label>
            </q-item-section>
            <q-item-section side top>
              <q-badge label="12/12/2020" />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

const items = ref([]);

axios
  .get(`${process.env.BLOG_URL}/posts?key=${process.env.BLOG_KEY}`)
  .then((response) => {
    items.value = response.data.items;
  });
</script>
