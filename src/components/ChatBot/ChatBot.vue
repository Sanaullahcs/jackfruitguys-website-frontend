<template>
  <div>
    <div class="chatbot-button">
      <v-btn icon large color="white" class="borderCHatbot" @click="toggleChat">
        <v-img
          min-width="35px"
          src="../../assets/images/singleLogo.png"
        ></v-img>
      </v-btn>
      <div v-motion-slide-bottom v-if="isChatOpen" class="chatbox-wrapper">
        <div class="chat-header">
          <div class="avatar">
            <v-btn elevation="0" icon large color="white">
              <v-img
                min-width="35px"
                src="../../assets/images/singleLogo.png"
              ></v-img>
            </v-btn>
          </div>
          <div class="header-info ms-4">
            <h3>Jackfruit Guys</h3>
            <p>AI Chatbot</p>
          </div>
        </div>
        <div class="chat-body" ref="chatBody">
          <div
            v-for="(message, index) in messages"
            :key="index"
            :class="['message', message.type]"
          >
            <p class="chatMessage">{{ message.text }}</p>
          </div>
        </div>

        <div class="chat-footer">
          <v-divider color="black" class="mx-4 divider"></v-divider>
          <!-- <input
            type="text"
            v-model="newMessage"
            @keyup.enter="sendMessage"
            placeholder="Type your message..."
          /> -->
          <div class="d-flex px-5">
            <div class="textField-Holder">
              <v-text-field
                class="prompt-field"
                color="#ADBB3A"
                :loading="apiLoading"
                v-model="newMessage"
                @keyup.enter="sendMessage"
                placeholder="Type your message..."
                density="compact"
              ></v-text-field>
            </div>

            <!-- <button @click="sendMessage"> -->
            <!-- <FontAwesomeIcon :icon="['fas', 'paper-plane']" /> -->
            <v-icon
              left
              class="mt-2 ml-1"
              color="rgb(186, 218, 84)"
              @click="sendMessage"
              >mdi-send</v-icon
            >
          </div>
          <!-- <v-img
            src="../../assets/images/send.png"
            @click="sendMessage"
            max-width="30px"
            class="mb-5 ml-2"
          ></v-img> -->
          <!-- </button> -->
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'
// import NavigationDrawer from "./NavigationDrawer.vue";
// import ToolBar from "./ToolBar.vue";
import axios from "axios";

export default {
  components: {
    // FontAwesomeIcon,
    // ToolBar,
    // NavigationDrawer,
  },
  data() {
    return {
      isChatOpen: false,
      apiLoading: false,
      messages: [
        {
          text: "Hello, I'm an AI assistant for Jackfruit Guys. How can I help you today?",
          type: "received",
        },
        // {
        //   text: "I'm interested in learning more about your jackfruit products. What are the different varieties you offer?",
        //   type: "sent",
        // },
        // {
        //   text: "We offer several varieties of jackfruit, including the Honey Gold, Black Gold, and Dang Gui. Each has a unique flavor profile and culinary uses. Would you like me to provide more details on the different types?",
        //   type: "received",
        // },
        // {
        //   text: "Yes, please tell me more about the Honey Gold and Black Gold varieties.",
        //   type: "sent",
        // },
      ],
      newMessage: "",
    };
  },
  // watch: {
  //   messages(newVal, oldVal) {
  //     if (newVal.length > oldVal.length) {
  //       console.log("A new message has been added:", newVal[newVal.length - 1]);
  //     }
  //     console.log("scroling to the bottom in wtch");
  //     this.$nextTick(() => {
  //       this.scrollToBottom();
  //     });
  //   },
  // },
  // updated() {
  //   // Scroll to the bottom whenever the component updates
  //   this.scrollToBottom();
  // },
  // mounted() {
  //   // Scroll to the bottom when the component is mounted
  //   this.scrollToBottom();
  // },
  methods: {
    scrollToBottom() {
      const chatBody = this.$refs.chatBody;
      this.$nextTick(() => {
        if (chatBody) {
          // Smooth scroll to the bottom
          chatBody.scrollTo({
            top: chatBody.scrollHeight,
            behavior: "smooth",
          });
        }
      });
    },
    toggleChat() {
      this.isChatOpen = !this.isChatOpen;
    },
    async sendMessage() {
      this.apiLoading = true;

      if (this.newMessage.trim() !== "") {
        // Push the user's message to the chat
        this.messages.push({ text: this.newMessage, type: "sent" });

        // Save the user's message and convert to lowercase for easier matching
        const userMessage = this.newMessage.toLowerCase();

        // Clear the input
        this.newMessage = "";

        // Define specific responses for each question
        let response = "";

        // General Inquiries
        if (userMessage.includes("what is jackfruit")) {
          response =
            "Jackfruit is a tropical fruit known for its large size and meat-like texture, often used as a plant-based meat substitute in various dishes.";
        } else if (userMessage.includes("where does jackfruit come from")) {
          response =
            "Jackfruit is native to regions in South and Southeast Asia. We source our jackfruit sustainably from tropical farms ideal for its growth.";
        } else if (userMessage.includes("types of jackfruit")) {
          response =
            "We offer several varieties of jackfruit, including ripe and unripe options, as well as jackfruit flour and pre-cut pieces for convenience.";
        } else if (userMessage.includes("health benefits of jackfruit")) {
          response =
            "Jackfruit is rich in vitamins A and C, fiber, and antioxidants. It supports immune health, digestion, and can be a low-calorie meat alternative.";
        } else if (userMessage.includes("use jackfruit in cooking")) {
          response =
            "Jackfruit can be used in savory dishes like tacos, curries, and stir-fries, and as a meat substitute due to its texture. You can also add it to desserts when ripe.";
        } else if (userMessage.includes("offer any recipes")) {
          response =
            "Yes! We have several recipes to help you cook with jackfruit, from savory dishes to desserts. Contact our sales team at +52 644 246 6071 to receive some exclusive recipes!";
        } else if (userMessage.includes("shipping policies")) {
          response =
            "We offer standard and express shipping options. Shipping costs vary by location and order size. For detailed info, visit our shipping policy page or call +52 644 246 6071.";
        } else if (userMessage.includes("return policy")) {
          response =
            "Our return policy allows for returns within 30 days of purchase if you are not satisfied. Contact customer support at +52 644 246 6071 for more assistance.";
        } else if (userMessage.includes("contact customer service")) {
          response =
            "You can reach our customer service team via email at info@jackfruitguys.com or call us directly at +52 644 246 6071.";

          // Product-Specific Inquiries
        } else if (userMessage.includes("jackfruit products do you offer")) {
          response =
            "We offer whole jackfruit, pre-cut jackfruit, jackfruit flour, and dried mango as additional options.";
        } else if (userMessage.includes("sizes and weights")) {
          response =
            "Our products come in various sizes and weights to suit different needs. Contact our sales team at +52 644 246 6071 for specifics.";
        } else if (
          userMessage.includes("difference between ripe and unripe jackfruit")
        ) {
          response =
            "Ripe jackfruit is sweet and can be used in desserts, while unripe jackfruit has a neutral taste and is ideal for savory dishes as a meat substitute.";
        } else if (userMessage.includes("tell if a jackfruit is ripe")) {
          response =
            "A ripe jackfruit will have a strong, fruity aroma, a slightly soft texture, and a yellowish color on the outside.";
        } else if (userMessage.includes("how long does jackfruit last")) {
          response =
            "Whole jackfruit lasts 5-7 days at room temperature. Once cut, store in the fridge and consume within 3-5 days for best quality.";
        } else if (userMessage.includes("discounts or promotions")) {
          response =
            "We periodically offer promotions. For current offers, please contact our sales team at +52 644 246 6071.";
        } else if (userMessage.includes("sourcing of your jackfruit")) {
          response =
            "Our jackfruit is sourced sustainably from farms in Southeast Asia, ensuring quality and freshness for every product.";

          // Order-related Inquiries
        } else if (userMessage.includes("how to place an order")) {
          response =
            "Orders can be placed directly on our website. For assistance, call us at +52 644 246 6071.";
        } else if (userMessage.includes("payment methods")) {
          response =
            "We accept various payment methods including credit cards, PayPal, and more. For details, visit our payment page or call us at +52 644 246 6071.";
        } else if (userMessage.includes("how long to arrive")) {
          response =
            "Delivery times vary by location and shipping method. Standard shipping usually takes 5-7 business days. Contact our sales team for expedited options.";
        } else if (userMessage.includes("track my order")) {
          response =
            "You will receive a tracking link upon shipment. For assistance, contact customer service at +52 644 246 6071.";
        } else if (userMessage.includes("received a damaged product")) {
          response =
            "We’re here to help. Please contact us immediately at +52 644 246 6071 or info@jackfruitguys.com to resolve any issues with damaged products.";
        } else if (userMessage.includes("cancel my order")) {
          response =
            "Orders can be canceled within 24 hours of placement. Contact customer support at +52 644 246 6071 for assistance.";

          // Advanced Inquiries
        } else if (userMessage.includes("sustainability practices")) {
          response =
            "We prioritize sustainable sourcing and eco-friendly packaging. Contact sales@jackfruitguys.com for detailed information.";
        } else if (userMessage.includes("future product offerings")) {
          response =
            "We are expanding our product line! Stay tuned or contact +52 644 246 6071 for future product announcements.";
        } else if (userMessage.includes("wholesale")) {
          response =
            "Yes, we offer wholesale options. For bulk orders, please contact sales@jackfruitguys.com or call +52 644 246 6071.";
        } else if (userMessage.includes("representative for bulk orders")) {
          response =
            "Our sales team can assist with bulk orders. Contact them at sales@jackfruitguys.com or +52 644 246 6071.";

          // Open-Ended/Conversational
        } else if (userMessage.includes("meat substitute")) {
          response =
            "Jackfruit is an excellent meat substitute due to its texture. We recommend our unripe jackfruit for savory dishes. Contact us at +52 644 246 6071 for more suggestions.";
        } else if (userMessage.includes("popular ways to use jackfruit")) {
          response =
            "Jackfruit is popular in tacos, curries, and BBQ recipes. Try our recipes for inspiration! Call +52 644 246 6071 for exclusive recipes.";
        } else if (userMessage.includes("never cooked with jackfruit")) {
          response =
            "No worries! Jackfruit is versatile. Start with simple dishes like tacos or stir-fry. Contact us for beginner-friendly recipes.";
        } else if (userMessage.includes("favorite jackfruit recipes")) {
          response =
            "Our team loves jackfruit tacos and curries! For more recipes, call our sales team at +52 644 246 6071.";

          // Default response if no keywords match - GPT API call
        } else {
          try {
            const gptResponse = await axios.post(
              "https://api.openai.com/v1/chat/completions",
              {
                model: "gpt-4",
                messages: [
                  {
                    role: "system",
                    content: "You are a helpful assistant for Jackfruit Guys.",
                  },
                  { role: "user", content: userMessage },
                ],
              },
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${API_KEY}`, // Replace with your actual OpenAI API key
                },
              }
            );

            // Extract the response and add to chat
            const chatGptMessage = gptResponse.data.choices[0].message.content;
            this.messages.push({ text: chatGptMessage, type: "received" });
          } catch (error) {
            console.error("Error calling GPT API:", error);
            this.messages.push({
              text: "Oops! Something went wrong. Please try again.",
              type: "received",
            });
          } finally {
            this.apiLoading = false;
            this.scrollToBottom();
          }
          return; // Exit the function here since the GPT API already handled the response
        }

        // Push the predefined response to the chat
        this.messages.push({ text: response, type: "received" });
        this.apiLoading = false;
        this.scrollToBottom();
      }
    },
  },
};
</script>

<style scoped>
.textField-Holder {
  position: relative;
  width: 100%;
  bottom: 0;
}
.prompt-field input {
  font-size: 12px;
}
.chatMessage {
  font-size: 14px;
}
.open-chat-button {
  background-color: #adbb3a; /* green color */
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  position: fixed;
  bottom: 20px;
  right: 20px;
}
.divider {
  border-top: 2px solid black;
  /* background: green; */
  margin: 0px 51px;
  min-height: 3px;
}
.open-chat-button:hover {
  background-color: #adbb3a;
}

.chatbox-wrapper {
  width: 340px;
  /* border: 1px solid transparent; */
  border-radius: 40px;
  overflow: hidden;
  margin: 20px auto;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 52px; /* Adjust position if necessary */
  right: 20px; /* Adjust position if necessary */
  min-height: 390px;
  /* position: relative; */
}

.chat-header {
  /* background-color: rgb(24, 175, 186); */
  background: linear-gradient(360deg, #9fc43d 0%, #df992d 100%);
  padding: 10px;
  display: flex;
  align-items: center;
  color: #fff;
}

.avatar img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.header-info h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  font-family: Helvetica;
}

.header-info p {
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  font-family: Helvetica;
}

.chat-body {
  max-height: 300px;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;
}

.message {
  margin: 10px 0;
  padding: 10px;
  border-radius: 10px;
  max-width: 80%;
}

.message.received {
  background-color: rgb(249, 186, 89);
  align-self: flex-start;
}

.message.sent {
  background-color: #adbb3a;
  color: white;
  align-self: flex-end;
}

.chat-footer {
  display: flex;
  padding-top: 10px;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
  /* border-top: 1px solid #ccc; */
  /* background-color: red; */
  position: absolute;
  bottom: 0px;
  width: 100%;
}

.chat-footer input {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  border: 1px solid #ccc;
}

.chat-footer button {
  background-color: #adbb3a;
  border: none;
  color: white;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.chat-footer button:hover {
  background-color: #adbb3a;
}

.chatbot-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}
.borderCHatbot {
  border: 2px solid #9fc43c !important;
}
.chatbot-button v-btn {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  background-color: #4caf50;
  color: white;

  border-radius: 50%;
}

.chatbot-button v-btn:hover {
  background-color: rgb(24, 175, 186);
}
/* ============= */
@media screen and (max-width: 768px) {
  .chatbox-wrapper {
    width: 274px;
  }
}
</style>
