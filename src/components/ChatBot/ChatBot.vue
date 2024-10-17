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

        // Save the user's message
        const userMessage = this.newMessage;

        // Clear the input
        this.newMessage = "";

        // Define keywords related to jackfruits
        const jackfruitKeywords = [
          "jackfruit",
          "fruit",
          "health benefits",
          "recipe",
          "varieties",
          "buy",
          "purchase",
        ];

        // Check if the prompt contains any jackfruit-related keywords
        let isJackfruitRelated = false;
        let isBuyingRelated = false;
        for (const keyword of jackfruitKeywords) {
          if (userMessage.toLowerCase().includes(keyword.toLowerCase())) {
            isJackfruitRelated = true;
            if (
              userMessage.toLowerCase().includes("buy") ||
              userMessage.toLowerCase().includes("purchase")
            ) {
              isBuyingRelated = true;
            }
            break;
          }
        }

        // Define system message based on whether the prompt is related to jackfruits and buying
        const systemMessage = isJackfruitRelated
          ? isBuyingRelated
            ? "You are a helpful assistant specialized in jackfruit-related information. If the user asks to buy jackfruits, refer them to the WhatsApp number +156546456. Also, let them know we have dried mangos available. For any other questions, respond with 'I'm sorry, I can only provide information about jackfruits. Please contact +139475345 for other inquiries.'"
            : "You are a helpful assistant specialized in jackfruit-related information. Respond with 'I'm sorry, I can only provide information about jackfruits. Please contact +139475345 for other inquiries.'"
          : "You are a helpful assistant specialized in jackfruit-related information. Respond with 'I'm sorry, I can only provide information about jackfruits. Please contact +139475345 for other inquiries.'";

        // Set loading to true
        this.loading = true;
        // require('dotenv').config();
        // Call the ChatGPT API
        let API_KEY = process.env.VUE_APP_CHATGPT_KEY;
        console.log("API_KEY", API_KEY);
        try {
          const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
              model: "gpt-4",
              messages: [
                { role: "system", content: systemMessage },
                { role: "user", content: userMessage },
              ],
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${API_KEY}`, // Replace with your API key
              },
            }
          );

          // Extract the ChatGPT response
          const chatGptMessage = response.data.choices[0].message.content;

          // Push the ChatGPT response to the chat
          this.messages.push({ text: chatGptMessage, type: "received" });
        } catch (error) {
          console.error("Error calling ChatGPT API:", error);
          this.messages.push({
            text: "Oops! Something went wrong. Please try again.",
            type: "received",
          });
        } finally {
          this.apiLoading = false;
          this.scrollToBottom();
        }
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
  min-height: 360px;
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
