<template>
  <v-container fluid class="pa-0">
    <div class="margin-div">
      <v-card class="margin-div">
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
              <!-- <MotionGroup preset="slideVisibleLeft" :duration="1000"> -->
              <h2 class="white--text mb-4 contact-heading">
                We'd love to hear from you!
              </h2>
              <!-- </MotionGroup> -->
              <v-form ref="form" v-model="isFormValid" @submit.prevent="submit">
                <!-- <MotionGroup preset="slideVisibleLeft" :duration="1200"> -->
                <v-text-field
                  v-model="form.name"
                  label="Your Name"
                  outlined
                  dense
                  class="mb-4"
                  hide-details
                  :rules="nameRules"
                ></v-text-field>
                <!-- </MotionGroup> -->
                <!-- <MotionGroup preset="slideVisibleLeft" :duration="1400"> -->
                <v-text-field
                  v-model="form.company_name"
                  label="Company Name"
                  outlined
                  dense
                  class="mb-4"
                  hide-details
                  :rules="companyNameRules"
                ></v-text-field>
                <!-- </MotionGroup> -->
                <!-- <MotionGroup preset="slideVisibleLeft" :duration="1600"> -->
                <v-text-field
                  v-model="form.email"
                  label="Email"
                  outlined
                  dense
                  class="mb-4"
                  hide-details
                  :rules="emailRules"
                ></v-text-field>
                <!-- </MotionGroup> -->
                <!-- <MotionGroup preset="slideVisibleLeft" :duration="1800"> -->
                <v-text-field
                  v-model="form.phone"
                  label="Phone"
                  outlined
                  dense
                  class="mb-4"
                  hide-details
                  :rules="phoneRules"
                ></v-text-field>
                <!-- </MotionGroup> -->
                <!-- <MotionGroup preset="slideVisibleLeft" :duration="2000"> -->
                <v-textarea
                  v-model="form.message"
                  label="Message"
                  outlined
                  dense
                  rows="4"
                  class="mb-4"
                  hide-details
                  :rules="messageRules"
                ></v-textarea>
                <!-- </MotionGroup> -->
                <!-- <MotionGroup preset="slideVisibleLeft" :duration="1200"> -->
                <v-btn
                  class="submit"
                  color="white"
                  elevation="0"
                  text
                  large
                  :disabled="!isFormValid"
                  @click="submit"
                >
                  <span v-if="logoutText">Submit</span>
                  <span v-if="logoutLoader">
                    <v-progress-circular
                      :size="20"
                      color="rgb(135, 197, 64)"
                      indeterminate
                    ></v-progress-circular>
                  </span>
                </v-btn>
                <!-- </MotionGroup> -->
              </v-form>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { HTTP } from "../../common/commom-http";

export default {
  name: "ContactForm",
  data() {
    return {
      isFormValid: false,
      logoutText: true,
      logoutLoader: false,
      form: {
        name: "",
        company_name: "",
        email: "",
        phone: "",
        message: "",
      },
      // Validation Rules
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length >= 3 || "Name must be at least 3 characters",
      ],
      companyNameRules: [(v) => !!v || "Company name is required"],
      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      phoneRules: [
        (v) => !!v || "Phone number is required",
        (v) => /^\d{10,15}$/.test(v) || "Phone number must be valid",
      ],
      messageRules: [
        (v) => !!v || "Message is required",
        (v) => v.length >= 10 || "Message must be at least 10 characters",
      ],
    };
  },
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        this.logoutText = false;
        this.logoutLoader = true;
        try {
          const response = await HTTP.post("contacts", this.form);
          console.log("Form submitted successfully", response);
          window.alert("Form Submitted");
          this.resetForm();
        } catch (error) {
          console.error("Error submitting the form", error);
          window.alert("Error submitting form");
        } finally {
          this.logoutText = true;
          this.logoutLoader = false;
        }
      }
    },
    resetForm() {
      this.form = {
        name: "",
        company_name: "",
        email: "",
        phone: "",
        message: "",
      };
    },
  },
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
  height: 100%;
}

.img-fluid {
  width: 100%;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
}

.form-section {
  width: 100%;
}

.v-text-field__details {
  display: none !important;
}
.margin-div {
  margin: 64px;
}
@media (max-width: 960px) {
  /* For medium screens and smaller */
  .margin-div {
    margin: 0;
  }
}
</style>
