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
              <h2 class="white--text mb-4 contact-heading">
                {{ translations.heading }}
              </h2>
              <v-form ref="form" v-model="isFormValid" @submit.prevent="submit">
                <v-text-field
                  v-model="form.name"
                  :label="translations.name"
                  outlined
                  dense
                  class="mb-4"
                  hide-details
                  :rules="nameRules"
                ></v-text-field>
                <v-text-field
                  v-model="form.company_name"
                  :label="translations.companyName"
                  outlined
                  dense
                  class="mb-4"
                  hide-details
                  :rules="companyNameRules"
                ></v-text-field>
                <v-text-field
                  v-model="form.email"
                  :label="translations.email"
                  outlined
                  dense
                  class="mb-4"
                  hide-details
                  :rules="emailRules"
                ></v-text-field>
                <v-text-field
                  v-model="form.phone"
                  :label="translations.phone"
                  outlined
                  dense
                  class="mb-4"
                  hide-details
                  :rules="phoneRules"
                ></v-text-field>
                <v-textarea
                  v-model="form.message"
                  :label="translations.message"
                  outlined
                  dense
                  rows="4"
                  class="mb-4"
                  hide-details
                  :rules="messageRules"
                ></v-textarea>
                <v-btn
                  class="submit"
                  color="white"
                  elevation="0"
                  text
                  large
                  :disabled="!isFormValid"
                  @click="submit"
                >
                  <span v-if="logoutText">{{ translations.submit }}</span>
                  <span v-if="logoutLoader">
                    <v-progress-circular
                      :size="20"
                      color="rgb(135, 197, 64)"
                      indeterminate
                    ></v-progress-circular>
                  </span>
                </v-btn>
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
        (v) => !!v || this.translations.nameRequired,
        (v) => v.length >= 3 || this.translations.nameMinLength,
      ],
      companyNameRules: [(v) => !!v || this.translations.companyNameRequired],
      emailRules: [
        (v) => !!v || this.translations.emailRequired,
        (v) => /.+@.+\..+/.test(v) || this.translations.emailInvalid,
      ],
      phoneRules: [
        (v) => !!v || this.translations.phoneRequired,
        (v) => /^\d{10,15}$/.test(v) || this.translations.phoneInvalid,
      ],
      messageRules: [
        (v) => !!v || this.translations.messageRequired,
        (v) => v.length >= 10 || this.translations.messageMinLength,
      ],
      languageId: 1, // Default language
      translations: {
        heading: '',
        name: '',
        companyName: '',
        email: '',
        phone: '',
        message: '',
        submit: '',
        nameRequired: '',
        nameMinLength: '',
        companyNameRequired: '',
        emailRequired: '',
        emailInvalid: '',
        phoneRequired: '',
        phoneInvalid: '',
        messageRequired: '',
        messageMinLength: '',
      },
      translationData: {
        1: { // English
          heading: "We'd love to hear from you!",
          name: "Your Name",
          companyName: "Company Name",
          email: "Email",
          phone: "Phone",
          message: "Message",
          submit: "Submit",
          nameRequired: "Name is required",
          nameMinLength: "Name must be at least 3 characters",
          companyNameRequired: "Company name is required",
          emailRequired: "Email is required",
          emailInvalid: "E-mail must be valid",
          phoneRequired: "Phone number is required",
          phoneInvalid: "Phone number must be valid",
          messageRequired: "Message is required",
          messageMinLength: "Message must be at least 10 characters",
        },
        2: { // French
          heading: "Nous serions ravis de vous entendre!",
          name: "Votre nom",
          companyName: "Nom de l'entreprise",
          email: "E-mail",
          phone: "Téléphone",
          message: "Message",
          submit: "Soumettre",
          nameRequired: "Le nom est requis",
          nameMinLength: "Le nom doit comporter au moins 3 caractères",
          companyNameRequired: "Le nom de l'entreprise est requis",
          emailRequired: "L'e-mail est requis",
          emailInvalid: "L'e-mail doit être valide",
          phoneRequired: "Le numéro de téléphone est requis",
          phoneInvalid: "Le numéro de téléphone doit être valide",
          messageRequired: "Le message est requis",
          messageMinLength: "Le message doit comporter au moins 10 caractères",
        },
        3: { // German
          heading: "Wir würden gerne von Ihnen hören!",
          name: "Ihr Name",
          companyName: "Firmenname",
          email: "E-Mail",
          phone: "Telefon",
          message: "Nachricht",
          submit: "Einreichen",
          nameRequired: "Name ist erforderlich",
          nameMinLength: "Der Name muss mindestens 3 Zeichen enthalten",
          companyNameRequired: "Der Firmenname ist erforderlich",
          emailRequired: "E-Mail ist erforderlich",
          emailInvalid: "Die E-Mail muss gültig sein",
          phoneRequired: "Telefonnummer ist erforderlich",
          phoneInvalid: "Die Telefonnummer muss gültig sein",
          messageRequired: "Nachricht ist erforderlich",
          messageMinLength: "Die Nachricht muss mindestens 10 Zeichen lang sein",
        },
        4: { // Spanish
          heading: "¡Nos encantaría saber de ti!",
          name: "Tu nombre",
          companyName: "Nombre de la empresa",
          email: "Correo electrónico",
          phone: "Teléfono",
          message: "Mensaje",
          submit: "Enviar",
          nameRequired: "El nombre es obligatorio",
          nameMinLength: "El nombre debe tener al menos 3 caracteres",
          companyNameRequired: "El nombre de la empresa es obligatorio",
          emailRequired: "El correo electrónico es obligatorio",
          emailInvalid: "El correo electrónico debe ser válido",
          phoneRequired: "El número de teléfono es obligatorio",
          phoneInvalid: "El número de teléfono debe ser válido",
          messageRequired: "El mensaje es obligatorio",
          messageMinLength: "El mensaje debe tener al menos 10 caracteres",
        },
      },
    };
  },
  mounted() {
    this.updateLanguageIdFromURL();
  },
  watch: {
    '$route': 'updateLanguageIdFromURL',
  },
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        this.logoutText = false;
        this.logoutLoader = true;
        try {
          const response = await HTTP.post("contacts", this.form);
          console.log("Form submitted successfully", response);
          window.alert(this.translations.submitSuccess);
          this.resetForm();
        } catch (error) {
          console.error("Error submitting the form", error);
          window.alert(this.translations.submitError);
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
    updateLanguageIdFromURL() {
      const params = new URLSearchParams(window.location.search);
      const langId = parseInt(params.get('language_id')) || 1;
      this.languageId = langId;
      this.updateTranslations();
    },
    updateTranslations() {
      this.translations = this.translationData[this.languageId];
    },
  },
};
</script>

<style scoped>
.v-btn--disabled.v-btn--variant-elevated,
.v-btn--disabled.v-btn--variant-flat {
  background-color: #9fc43d !important;
  color: white !important;
}
.submit {
  background-color: #f6ae42 !important;
  color: white !important;
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
  background-color: #f5f3dc;
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
  .margin-div {
    margin: 0;
  }
}
</style>
