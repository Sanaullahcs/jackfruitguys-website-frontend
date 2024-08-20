<template>
  <div class="bg-main">
    <div>
      <v-row>
        <v-col>
          <div>
            <v-img
              class="mx-auto"
              src="../../assets/images/health.png"
              max-width="80px"
            ></v-img>
            <h1 class="header">Health</h1>
            <p class="header-text">
              A Meat Substitute Packed with Health Benefits
            </p>
          </div>
        </v-col>
        <v-col>
          <div>
            <v-img
              src="../../assets/images/sus.png"
              class="mx-auto"
              max-width="80px"
            ></v-img>
            <h1 class="header">Sustainbility</h1>
            <p class="header-text">
              A Sustainable Choice for you and the Planet
            </p>
          </div>
        </v-col>
        <v-col>
          <div>
            <v-img
              class="mx-auto"
              src="../../assets/images/in.png"
              max-width="80px"
            ></v-img>
            <h1 class="header">Social</h1>
            <p class="header-text">Social Benefits of our mexican Jackfruit</p>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<style scoped>
.bg-main {
  /* background-image: url(../../assets/images/bg-health.png);
  background-size: cover; */
  background-color: black;
}
.header {
  font-family: "Poppins";
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: -0.03em;
  text-align: center;
}
.header-text {
  font-family: Poppins;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  text-align: center;
}
</style>
