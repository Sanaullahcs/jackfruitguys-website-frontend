<template>
  <v-container fluid class="pa-0">
    <v-card class="ma-16">
      <v-row no-gutters>
        <!-- Left Image Section -->
        <v-col cols="12" md="6" class="d-flex justify-center align-center">
          <div class="image-section">
            <img
              src="@/assets/images/contact.png"
              alt="Jackfruit Guys"
              class="img-fluid"
            />
          </div>
        </v-col>

        <!-- Right Form Section -->
        <v-col
          cols="12"
          md="6"
          class="d-flex justify-center align-center"
          style="background-color: #87c540"
        >
          <div class="form-section pa-6">
            <h2 class="white--text mb-4 contact-heading">
              We'd love to hear from you!
            </h2>
            <v-form>
              <v-text-field
                label="Your Name"
                outlined
                dense
                class="mb-4"
                hide-details
              ></v-text-field>
              <v-text-field
                label="Your Name"
                outlined
                dense
                class="mb-4"
                hide-details
              ></v-text-field>
              <v-text-field
                label="Your Name"
                outlined
                dense
                class="mb-4"
                hide-details
              ></v-text-field>
              <v-text-field
                label="Phone"
                outlined
                dense
                class="mb-4"
                hide-details
              ></v-text-field>
              <v-textarea
                label="Message"
                outlined
                dense
                rows="4"
                class="mb-4"
                hide-details
              ></v-textarea>
              <v-btn class="submit" color="white" elevation="0" text large
                >Submit</v-btn
              >
            </v-form>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "ContactForm",
};
</script>

<style scoped>
.submit {
  color: #9fc43d;
  width: 100%;
  border-radius: 0;
}
.contact-heading {
  font-family: "Poppins";
  font-size: 30px;
  font-weight: 700;
  line-height: 50px;
  text-align: left;
}
.image-section {
  background-color: #f5f3dc; /* This color is similar to the one in your image */
}

.img-fluid {
  width: 100%;
  max-width: 100%;
  height: auto;
}

.form-section {
  width: 100%;
}

.v-text-field__details {
  display: none !important;
}
</style>
