<template>
  <q-page>
    <!-- Banner -->
    <div
      class="row"
      style="background-image: linear-gradient(#6495ed, #b7d7e8)"
    >
      <div class="col q-ma-lg" style="text-align: center">
        <img
          alt="Ecosoft logo"
          src="~assets/balloon.png"
          style="height: 200px"
          class="q-ml-xl"
        />
      </div>
      <div
        class="col q-ma-lg text-white"
        style="
          text-align: center;
          margin-left: auto;
          margin-right: auto;
          display: block;
        "
      >
        <div class="text-h3 q-pt-lg">
          <b>Digital Transformation Solutions</b>
        </div>
        <div class="text-h3 q-pa-xs">100% Open Source</div>
        <br />
        <div class="text-h5 q-pa-xs">
          <span class="bg-secondary q-pa-xs"
            >&nbsp;No license cost, only quality services&nbsp;
          </span>
        </div>
      </div>
    </div>

    <!-- Second Banner -->
    <div class="row">
      <div class="col text-center">
        <q-banner class="bg-grey-8 text-white">
          <div class="text-h6 text-grey-4">
            Odoo – ERP โอเพ่นซอร์สอันดับหนึ่งที่มีผู้ใช้งานมากที่สุดในโลก
            <br />ERPNext – ERP แนว Low Code Platform ที่ดีที่สุดตอนนี้
          </div>
        </q-banner>
      </div>
    </div>

    <!-- Second Banner -->
    <div class="row text-grey-8 justify-center">
      <div class="col-auto"></div>
      <div class="col-xs-12 col-sm-6 col-md-4 q-pa-lg">
        <div class="text-h6 text-primary">
          ทำ Digital Transformation ด้วยโอเพ่นซอร์ส
        </div>
        <div class="text-body1 q-pt-sm">
          หากคุณต้องการเพิ่มความสามารถในการแข่งขันด้วยระบบ ERP
          แต่กังวลกับลิขสิทธ์ซอฟต์แวร์ราคาแพง – Open Source ERP คือคำตอบ
          เพื่อการปรับตัวสู่อนาคต ไม่มีข้อจำกัดด้านจำนวนผู้ใช้งาน
          และด้วยมีชุมชนนักพัฒนาขนาดใหญ่
          จึงขยายความสามารถได้ด้วยนวัตกรรมที่เกิดขึ้นตลอดเวลา
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 q-pa-lg">
        <div class="text-h6 text-primary">Business | Technology Partner</div>
        <div class="text-body1 q-pt-sm">
          ปัญหาของการวางระบบ ERP คือความไม่เข้าใจในภาษาธุรกิจ ทั้งที่หัวใจของ
          ERP คือ กระบวนการทางธุรกิจ บัญชีและการเงิน ที่ Ecosoft
          เรามีประสบการณ์กว่า 10 ปีในการวางระบบ ERP
          ให้กับธุรกิจไทยที่มีพนักงานตั้งแต่ 10 คนถึง 1,000 คน
          เราจึงเข้าใจถึงความท้าทายของการวางระบบในหลายมิติ
        </div>
      </div>
      <div class="col-auto"></div>
    </div>

    <q-separator inset />
    <!-- our Expertise -->
    <div class="row">
      <div class="col-2 gt-sm" />
      <div class="col q-pa-lg">
        <div class="text-h4 text-bold text-primary text-center">
          Our Services
        </div>
      </div>
      <div class="col-2 gt-sm" />
    </div>

    <!-- pictures -->
    <div class="row text-grey-8 justify-center">
      <div class="col-auto"></div>
      <div class="col-xs-6 col-sm-3 col-md-2 q-pa-lg">
        <q-card class="my-card">
          <q-img src="~assets/accounting.jpg">
            <div class="absolute-bottom text-subtitle1 text-bold text-center">
              Accounting
            </div>
          </q-img>
        </q-card>
      </div>
      <div class="col-xs-6 col-sm-3 col-md-2 q-pa-lg">
        <q-card class="my-card">
          <q-img src="~assets/operations.jpg">
            <div class="absolute-bottom text-subtitle1 text-bold text-center">
              Operations
            </div>
          </q-img>
        </q-card>
      </div>
      <div class="col-xs-6 col-sm-3 col-md-2 q-pa-lg">
        <q-card class="my-card">
          <q-img src="~assets/inventory.jpg">
            <div class="absolute-bottom text-subtitle1 text-bold text-center">
              Inventory
            </div>
          </q-img>
        </q-card>
      </div>
      <div class="col-xs-6 col-sm-3 col-md-2 q-pa-lg">
        <q-card class="my-card">
          <q-img src="~assets/mrp.jpg">
            <div class="absolute-bottom text-subtitle1 text-bold text-center">
              Production
            </div>
          </q-img>
        </q-card>
      </div>
      <div class="col-auto"></div>
    </div>
    <div class="row justify-center">
      <div class="col-xs-12 col-md-8 q-pa-sm">
        <q-list>
          <q-expansion-item default-opened group="somegroup">
            <template v-slot:header>
              <q-item-section avatar>
                <img src="~assets/odoo.svg" style="height: 40px" />
              </q-item-section>
              <q-item-section />
            </template>

            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex
                numquam, dolorum officiis modi facere maiores architecto
                suscipit iste eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-separator />

          <q-expansion-item group="somegroup">
            <template v-slot:header>
              <q-item-section avatar>
                <img src="~assets/erpnext.png" style="height: 40px" />
              </q-item-section>
              <q-item-section />
            </template>

            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex
                numquam, dolorum officiis modi facere maiores architecto
                suscipit iste eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-separator />

          <q-expansion-item group="somegroup">
            <template v-slot:header>
              <q-item-section avatar>
                <img src="~assets/appsmith.png" style="height: 40px" />
              </q-item-section>
              <q-item-section />
            </template>

            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex
                numquam, dolorum officiis modi facere maiores architecto
                suscipit iste eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-separator />

          <q-expansion-item group="somegroup">
            <template v-slot:header>
              <q-item-section avatar>
                <img src="~assets/n8n.png" style="height: 40px" />
              </q-item-section>
              <q-item-section />
            </template>

            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex
                numquam, dolorum officiis modi facere maiores architecto
                suscipit iste eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </div>
    </div>

    <q-separator inset />
    <!-- our Customers -->
    <div class="row">
      <div class="col-2 gt-sm" />
      <div class="col q-pa-lg">
        <div class="text-h4 text-bold text-primary text-center">Customers</div>
      </div>
      <div class="col-2 gt-sm" />
    </div>

    <div class="row justify-center">
      <div class="col-xs-12 col-md-8">
        <q-img alt="Ecosoft logo" src="~assets/customers.png" />
      </div>
    </div>

    <div class="row q-pa-md justify-center">
      <div class="col-xs-12 col-md-8">
        <q-carousel
          v-model="slide"
          transition-prev="fade"
          transition-next="fade"
          transition-duration="500"
          swipeable
          animated
          control-color="white"
          navigation
          padding
          arrows
          height="270px"
          class="bg-primary text-white shadow-1 rounded-borders"
        >
          <q-carousel-slide name="slide1" class="column no-wrap">
            <div class="q-mt-md text-h6 text-bold">
              คุณวารุณี ลีละธนาวิทย์ (Vice President, ICT - NSTDA)
            </div>
            <div class="q-mt-md text-body1">
              สำนักงานพัฒนาวิทยาศาสตร์และเทคโนโลยีแห่งชาติ (สวทช.)
              ก่อตั้งขึ้นตั้งแต่ปี 1991
              เราเป็นองค์กรวิจัยขนาดใหญ่ของประเทศมีหน้าที่ในการถ่ายทอดเทคโนโลยีสู่สังคม
              ระบบสารสนเทศที่ทันสมัยและยืดหยุ่นมีส่วนสำคัญให้เราสามารถตอบสนองความต้องการที่เปลี่ยนแปลงไปตลอดเวลา
              เราได้ศึกษาหาตัวเลือกที่จะมาทดแทนระบบดั้งเดิมขององค์กร
              ให้เป็นระบบที่ตอบโจทย์ทั้งด้านเทคโนโลยีและด้านงบประมาณ
              ตลอดหลายปีที่ผ่านมา บริษัท Ecosoft ได้เข้ามาช่วยเราพัฒนาระบบ Odoo
              ERP ในหลายๆส่วนขององค์กร จนในปี 2018 ที่ผ่านมา Odoo ERP
              ได้รับการพัฒนามาเป็นระบบ ERP หลักแทนที่ระบบ Legacy เดิม
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="slide2" class="column no-wrap">
            <div class="q-mt-md text-h6 text-bold">
              คุณสมบูรณ์ ธัญญะวัน (Director - Square Panel Systems)
            </div>
            <div class="q-mt-md text-body1">
              บริษัทเราใช้บริการวางระบบ Odoo ERP จาก Ecosoft มาตั้งแต่ปี 2014
              และใช้ในเกือบทุกส่วนขององค์กร
              ตั้งแต่ระบบขายถึงระบบการผลิตไปจนถึงงานบริการติดตั้ง
              และเนื่องจากจุดแข็งของเราคือสูตรการผลิตที่ปรับเปลี่ยนไปได้ตามความต้องการของลูกค้า
              เราได้ย้ายการทำงานทุกอย่างที่เคยอยู่ใน Spreadsheet
              มาเป็นระบบซอฟต์แวร์ที่ทันสมัยทำให้เราสามารถย่นเวลาและความผิดพลาดในการออกแบบและผลิตไปได้อย่างมาก
              การวางระบบ ERP ต้องการความร่วมมือจากหลายฝ่าย
              แม้ว่าจะยากในช่วงต้นแต่ผลลัพธ์ที่ได้ก็คุ้มค่า
              ทุกวันนี้เราสามารถทำงานได้มากขึ้น ผิดพลาดน้อยลง
              และผู้บริหารสามารถเห็นภาพสะท้อนการทำงานรวมของทั้งองค์กรได้อย่างชัดเจน
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="slide3" class="column no-wrap">
            <div class="q-mt-md text-h6 text-bold">
              คุณนันทชัย ศิระพรประสาร (Managing Director - Raja Cycle)
            </div>
            <div class="q-mt-md text-body1">
              Ecosoft ถือเป็น Technology Partner ที่สำคัญของเรา
              เราใช้บริการวางระบบมาตั้งแต่ปี 2013 ในขณะนั้น Odoo ยังเป็น OpenERP
              อยู่ ระบบ ERP ที่เราได้รับ
              ทำให้ผู้บริหารสามารถติดตามการผลิตและบริหารสินค้าคงคลังในแบบที่เราไม่เคยทำได้มาก่อน
              หลังจากนั้นเราจึงได้ใช้บริการของ Ecosoft กับบริษัทในเครือ Raja
              Engineering ด้วย Odoo V8 และมาถึงปัจจุบันปี 2019
              เรามีแผนการอัพเกรดระบบของ Raja Cycle มาเป็น Odoo V12
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>

    <!-- <div class="row justify-center">
      <div class="col-xs-12 col-md-8 q-pa-sm">
        <q-card>
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab name="mails" label="Mails" />
            <q-tab name="alarms" label="Alarms" />
            <q-tab name="movies" label="Movies" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="mails">
              <div class="text-h6">Mails</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="alarms">
              <div class="text-h6">Alarms</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="movies">
              <div class="text-h6">Movies</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div> -->
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "IndexPage",
  setup() {
    return {
      // tab: ref("mails"),
      slide: ref("slide1"),
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
    };
  },
});
</script>
