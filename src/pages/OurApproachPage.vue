<template>
  <q-page>
    <div class="row q-ma-lg justify-center">
      <div class="col-xs-12 col-md-8 text-grey-8">
        <q-markdown :plugins="plugins" :src="OurApproach" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import OurApproach from "assets/md/our-approach.md";

export default defineComponent({
  setup() {
    return {
      OurApproach,
    };
  },
});
</script>
