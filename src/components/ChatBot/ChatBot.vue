<template>
  <div>
    <div class="chatbot-button">
      <v-btn icon large color="rgb(24, 175, 186)" @click="toggleChat">
        <v-icon>mdi-robot</v-icon>
      </v-btn>
      <div v-if="isChatOpen" class="chatbox-wrapper">
        <div class="chat-header">
          <div class="avatar">
            <img src="https://via.placeholder.com/40" alt="Avatar" />
          </div>
          <div class="header-info ms-4">
            <h3>Jackfruit Guys</h3>
            <p>AI Chatbot</p>
          </div>
        </div>
        <div class="chat-body">
          <div
            v-for="(message, index) in messages"
            :key="index"
            :class="['message', message.type]"
          >
            <p>{{ message.text }}</p>
          </div>
        </div>
        <v-divider class="mx-4"></v-divider>
        <div class="chat-footer">
          <!-- <input
            type="text"
            v-model="newMessage"
            @keyup.enter="sendMessage"
            placeholder="Type your message..."
          /> -->
          <v-text-field
            color="#ADBB3A"
            :loading="apiLoading"
            v-model="newMessage"
            @keyup.enter="sendMessage"
            placeholder="Type your message..."
          ></v-text-field>
          <!-- <button @click="sendMessage"> -->
          <!-- <FontAwesomeIcon :icon="['fas', 'paper-plane']" /> -->
          <v-img
            src="../../assets/images/send.png"
            @click="sendMessage"
            max-width="30px"
            class="mb-5 ml-2"
          ></v-img>
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
        { text: "Hello, I'm an AI assistant for Jackfruit Guys. How can I help you today?", type: "received" },
        { text: "I'm interested in learning more about your jackfruit products. What are the different varieties you offer?", type: "sent" },
        { text: "We offer several varieties of jackfruit, including the Honey Gold, Black Gold, and Dang Gui. Each has a unique flavor profile and culinary uses. Would you like me to provide more details on the different types?", type: "received" },
        { text: "Yes, please tell me more about the Honey Gold and Black Gold varieties.", type: "sent" }
      ],
      newMessage: "",
    };
  },
  methods: {
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

        // Set loading to true
        this.loading = true;

        // Call the ChatGPT API
        try {
          const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
              model: "gpt-4o",
              messages: [{ role: "user", content: userMessage }],
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: ` Bearer ${APIKEY}`, // Replace with your API key
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
        }
      }
    },
  },
};
</script>

<style scoped>
.open-chat-button {
  background-color: #ADBB3A; /* green color */
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

.open-chat-button:hover {
  background-color: #ADBB3A;
}
   
.chatbox-wrapper {
  width: 400px;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  margin: 20px auto;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 80px; /* Adjust position if necessary */
  right: 20px; /* Adjust position if necessary */
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
}

.message {
  margin: 10px 0;
  padding: 10px;
  border-radius: 10px;
  max-width: 80%;
}

.message.received {
  background-color: #f1f1f1;
  align-self: flex-start;
}

.message.sent {
  background-color: #ADBB3A;
  color: white;
  align-self: flex-end;
}

.chat-footer {
  display: flex;
  padding: 10px;
  /* border-top: 1px solid #ccc; */
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
  background-color: #ADBB3A;
  border: none;
  color: white;
  padding: 10px;
  border-radius: 5px;  
  cursor: pointer;
}

.chat-footer button:hover {
  background-color: #ADBB3A;
}
/* ============= */
</style>