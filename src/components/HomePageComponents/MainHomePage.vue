<template>
  <div>
    <v-row class="minHeight100">
      <v-col
        class="ma-0"
        style="
          background: #bada54;
          display: flex;
          align-items: center;
          justify-content: end;
        "
        cols="6"
      >
        <div
          style="
            display: flex;
            justify-content: end;

            width: 100%;
          "
          class="line-height-sm pt-16 Font-Size-Large styling mr-3"
        >
          <span style="max-width: 443px; margin-left: 25%">{{
            sectionOne?.section_1_title_1
          }}</span>
        </div>
      </v-col>
      <v-col
        class="ma-0"
        style="
          background-color: #f9ba59;
          display: flex;
          align-items: center;
          justify-content: start;
        "
        cols="6"
      >
        <!-- <transition name="slide-fade" mode="out-in">
          <div :key="currentItem" class="sliding-text mainSectionTxt">
            {{ currentItem }}
          </div>
        </transition> -->
        <!-- "Organic.", "Social Projects.", "Healthy.", "Fair Trade.","Good Practice","Sustainable" -->
        <div class="words words-1 mt-n9 removeMarginTopOnSmall">
          <!-- {{ sectionTwo }} -->
          <span
            v-for="(item, index) in sectionTwo"
            :key="item.id"
            :class="[
              'mainSectionTxt',
              'bgTxtSet',
              'removeMarginTopOnSmall',
              { 'mt-n6': index % 2 !== 0 },
              { removeMarginTopOnSmall: index % 2 !== 0 },
            ]"
          >
            {{ item.text_name }}
          </span>
          <!-- <span class="mainSectionTxt bgTxtSet">Organic.</span>
          <span class="mainSectionTxt bgTxtSet mt-n6"
            >Social <br />
            Projects.</span
          >
          <span class="mainSectionTxt bgTxtSet">Healthy.</span>
          <span class="mainSectionTxt bgTxtSet mt-n6"
            >Fair <br />
            Trade.</span
          >
          <span class="mainSectionTxt bgTxtSet mt-n6"
            >Good <br />
            Practice.</span
          >
          <span class="mainSectionTxt bgTxtSet">Sustainable.</span> -->
        </div>
      </v-col>
    </v-row>
  </div>
  <div>
    <v-row class="minHeight100">
      <v-col
        style="background: #bada54; padding: 0"
        class="dividerImg1 pt-16 pb-16"
      >
        <div class="d-flex justify-end align-center position-relative">
          <div style="position: absolute; right: 0; z-index: 99">
            <MotionGroup preset="slideVisibleLeft" :duration="1200"
              ><p class="mainSectionTxt Font-Size-Large mr-3 text-right">
                {{ sectionOne?.section_1_title_2 }}
              </p></MotionGroup
            >

            <!-- <MotionGroup preset="slideVisibleLeft" :duration="1500"
              ><p class="mainSectionTxt Font-Size-Large">Happy</p></MotionGroup
            > -->
          </div>
          <div>
            <MotionGroup preset="slideVisibleLeft" :duration="900">
              <v-img
              class="widthRight"
                style="min-width: 199px"
                src="../../assets/images/midimg1.png"
              ></v-img>
            </MotionGroup>
          </div>
        </div>
      </v-col>
      <v-col
        class="dividerImg2"
        style="background: #f9ba59; position: relative; padding: 0"
      >
        <div class="d-flex justify-start align-center">
          <div class="mt-16">
            <MotionGroup preset="slideVisibleRight" :duration="900">
              <v-img
                class="widthleft"
                style="min-width: 195px"
                src="../../assets/images/midimg2.png"
              ></v-img>
            </MotionGroup>
          </div>
          <div
            class="d-flex justify-start align-center"
            style="position: absolute; left: 0; z-index: 99; margin-top: 5%"
          >
            <MotionGroup preset="slideVisibleRight" :duration="1300">
              <p class="mainSectionTxt Font-Size-Large ml-3 mb-n11">
                {{ sectionOne?.section_1_title_3 }}
              </p></MotionGroup
            >
          </div>
        </div>
        <!-- <div style="">
          <v-img
            style="max-height: 60vh; min-height: 60vh"
            src="../../assets/midimg2.png"
          ></v-img>
        </div> -->
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "MainComponent",
  props: {
    sectionOne: {
      type: Object,
      required: true, // Set to true if the prop is required
    },
    sectionTwo: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      items: [
        "Organic.",
        "Social Projects.",
        "Healthy.",
        "Fair Trade.",
        "Good Practice",
        "Sustainable",
      ],
      currentIndex: 0,
    };
  },
  computed: {
    currentItem() {
      return this.items[this.currentIndex];
    },
  },
  mounted() {
    this.startSliding();
  },
  methods: {
    startSliding() {
      this.interval = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
      }, 2000); // Change 2000 to the desired delay in milliseconds
    },
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>
<style scoped>
.minHeight100 {
  min-height: 100vh;
}
.styling {
  font-family: "Poppins", sans-serif;
  line-height: 73px;
  font-weight: 600;
}
.Font-Size-Large {
  /* font-size: 132px !important;
  line-height: 103px !important; */
  font-size: 93px !important;
  line-height: 88px !important;
  /* text-align: end; */
}
.bgTxtSet {
  background-image: url(../../assets/txtbg.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.words {
  font-size: 40px;
  font-weight: bolder;
  text-align: left;
  letter-spacing: 3px;
}
.words-1 span {
  position: absolute;
  opacity: 0;
  overflow: hidden;
  -webkit-animation: rotateWord 18s ease-in-out infinite 0s;
  -ms-animation: rotateWord 18s ease-in-out infinite 0s;
  animation: rotateWord 18s ease-in-out infinite 0s;
}
.words-1 span:nth-child(2) {
  -webkit-animation-delay: 3s;
  -ms-animation-delay: 3s;
  animation-delay: 3s;
}
.words-1 span:nth-child(3) {
  -webkit-animation-delay: 6s;
  -ms-animation-delay: 6s;
  animation-delay: 6s;
}
.words-1 span:nth-child(4) {
  -webkit-animation-delay: 9s;
  -ms-animation-delay: 9s;
  animation-delay: 9s;
}
.words-1 span:nth-child(5) {
  -webkit-animation-delay: 12s;
  -ms-animation-delay: 12s;
  animation-delay: 12s;
}
.words-1 span:nth-child(6) {
  -webkit-animation-delay: 15s;
  -ms-animation-delay: 15s;
  animation-delay: 15s;
}
@-webkit-keyframes rotateWord {
  0% {
    opacity: 0;
  }
  2% {
    opacity: 0;
    -webkit-transform: translateX(30px);
  }
  5% {
    opacity: 1;
    -webkit-transform: translateX(0px);
  }
  17% {
    opacity: 1;
    -webkit-transform: translateX(0px);
  }
  20% {
    opacity: 0;
    -webkit-transform: translateX(-30px);
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@-ms-keyframes rotateWord {
  0% {
    opacity: 0;
  }
  2% {
    opacity: 0;
    -ms-transform: translateX(30px);
  }
  5% {
    opacity: 1;
    -ms-transform: translateX(0px);
  }
  17% {
    opacity: 1;
    -ms-transform: translateX(0px);
  }
  20% {
    opacity: 0;
    -ms-transform: translateX(-30px);
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes rotateWord {
  0% {
    opacity: 0;
  }
  2% {
    opacity: 0;
    -webkit-transform: translateX(30px);
    transform: translateX(30px);
  }
  5% {
    opacity: 1;
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
  }
  17% {
    opacity: 1;
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
  }
  20% {
    opacity: 0;
    -webkit-transform: translateX(-30px);
    transform: translateX(-30px);
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@media screen and (max-width: 768px) {
  .Font-Size-Large {
    font-size: 9vw !important;
    line-height: 60px !important;
  }
  .words {
    font-size: 30px;
    line-height: 40px;
  }
  .mainSectionTxt {
    font-size: 44px !important;
    line-height: 58px !important;
  }
  .sentence span {
    font-size: 20px;
  }
}

@media screen and (max-width: 480px) {
  .Font-Size-Large {
    font-size: 8vw !important;
    line-height: 40px !important;
  }
  .removeMarginTopOnSmall {
    margin-top: 0px !important;
  }
  .widthleft {
    min-width: 147px !important;
  }
  .widthRight{
    min-width: 151px !important;
  }
  .minHeight100 {
    min-height: 20vh;
  }
  .words {
    font-size: 25px;
    line-height: 30px;
  }
  .mainSectionTxt {
    font-size: 22px !important;
    line-height: 35px !important;
    margin-top: -1px !important;
  }
  .sentence span {
    font-size: 18px;
  }
}

.hero_wrapper {
  margin-left: 10%;
}

.hero_image {
  background: #fff
    url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/250215/Artboard_1.png)
    no-repeat right top;
}

.mainSectionTxt {
  font-family: "Poppins", sans-serif;
  font-size: 6.5vw;
  line-height: 104px;
  font-weight: 600;
}

.dividerImg1 {
  /* background-image: url(../../assets/midimg1.png) !important;
  background-repeat: no-repeat !important;
  background-position: right !important;
  background-size: contain !important; */
}

.dividerImg2 {
  /* background-image: url(../../assets/midimg2.png) !important;
  background-repeat: no-repeat !important;
  background-position: left !important;
  background-size: contain !important; */
}

.sliding-text {
  overflow: hidden;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: transform 1s ease-out, opacity 1s ease-out;
}

.slide-fade-enter {
  transform: translateX(100%);
  opacity: 0;
}

.slide-fade-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.slide-fade-leave {
  transform: translateX(0);
  opacity: 1;
}

.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>

<!-- <style scoped>
.Font-Size-Large {
  font-size: 8vw !important;
  line-height: 83px !important;
}
/* .line-height-sm{
  line-height: 50px !important;
} */
.bgTxtSet {
  background-image: url(../../assets/txtbg.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.words {
  font-size: 40px;
  font-weight: bolder;
  text-align: left;
  letter-spacing: 3px;
}
.words-1 span {
  /* color: #ed8100; */
  position: absolute;
  opacity: 0;
  overflow: hidden;
  -webkit-animation: rotateWord 18s ease-in-out infinite 0s;
  -ms-animation: rotateWord 18s ease-in-out infinite 0s;
  animation: rotateWord 18s ease-in-out infinite 0s;
}
.words-1 span:nth-child(2) {
  -webkit-animation-delay: 3s;
  -ms-animation-delay: 3s;
  animation-delay: 3s;
  /* color: #ed8100; */
}
.words-1 span:nth-child(3) {
  -webkit-animation-delay: 6s;
  -ms-animation-delay: 6s;
  animation-delay: 6s;
  /* color: #ed8100; */
}
.words-1 span:nth-child(4) {
  -webkit-animation-delay: 9s;
  -ms-animation-delay: 9s;
  animation-delay: 9s;
  /* color: #ed8100; */
}
.words-1 span:nth-child(5) {
  -webkit-animation-delay: 12s;
  -ms-animation-delay: 12s;
  animation-delay: 12s;
  /* color: #ed8100; */
}
.words-1 span:nth-child(6) {
  -webkit-animation-delay: 15s;
  -ms-animation-delay: 15s;
  animation-delay: 15s;
  /* color: #ed8100; */
}
@-webkit-keyframes rotateWord {
  0% {
    opacity: 0;
  }
  2% {
    opacity: 0;
    -webkit-transform: translateX(30px);
  }
  5% {
    opacity: 1;
    -webkit-transform: translateX(0px);
  }
  17% {
    opacity: 1;
    -webkit-transform: translateX(0px);
  }
  20% {
    opacity: 0;
    -webkit-transform: translateX(-30px);
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@-ms-keyframes rotateWord {
  0% {
    opacity: 0;
  }
  2% {
    opacity: 0;
    -ms-transform: translateX(30px);
  }
  5% {
    opacity: 1;
    -ms-transform: translateX(0px);
  }
  17% {
    opacity: 1;
    -ms-transform: translateX(0px);
  }
  20% {
    opacity: 0;
    -ms-transform: translateX(-30px);
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes rotateWord {
  0% {
    opacity: 0;
  }
  2% {
    opacity: 0;
    -webkit-transform: translateX(30px);
    transform: translateX(30px);
  }
  5% {
    opacity: 1;
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
  }
  17% {
    opacity: 1;
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
  }
  20% {
    opacity: 0;
    -webkit-transform: translateX(-30px);
    transform: translateX(-30px);
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@media screen and (max-width: 768px) {
  .sentence span {
    font-size: 30px;
  }
  .words {
    font-size: 35px;
  }
  .hero_wrapper {
    margin-left: 10%;
  }
  .hero_image {
    background: #fff
      url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/250215/Artboard_1.png)
      no-repeat right top;
  }
  /* @media screen and (max-width: 320px){
	.sentence span { font-size: 20px; }
  .words{font-size: 20px;}
  .hero_wrapper{margin-left:10%;}
} */
}
.mainSectionTxt {
  font-family: "Poppins", sans-serif;
  font-size: 4.5vw;
  line-height: 73px;
  font-weight: 600;
}
.dividerImg1 {
  /* background-image: url(../../assets/midimg1.png) !important;
  background-repeat: no-repeat !important;
  background-position: right !important;
  background-size: contain !important; */
}
.dividerImg2 {
  /* background-image: url(../../assets/midimg2.png) !important;
  background-repeat: no-repeat !important;
  background-position: left !important;
  background-size: contain !important; */
}
.sliding-text {
  overflow: hidden;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: transform 1s ease-out, opacity 1s ease-out;
}

.slide-fade-enter {
  transform: translateX(100%);
  opacity: 0;
}

.slide-fade-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.slide-fade-leave {
  transform: translateX(0);
  opacity: 1;
}

.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style> -->
