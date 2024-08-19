<template>
  <div>
    <div class="chatbot-button">
      <v-btn icon large color="white" @click="toggleChat">
        <v-img
          min-width="35px"
          src="../../assets/images/singleLogo.png"
        ></v-img>
      </v-btn>
      <div v-if="isChatOpen" class="chatbox-wrapper">
        <div class="chat-header">
          <div class="avatar">
            <img src="https://via.placeholder.com/40" alt="Avatar" /><v-tooltip
              activator="parent"
              location="start"
              >Tooltip</v-tooltip
            >
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
            <p>{{ message.text }}</p>
          </div>
        </div>
        <v-divider color="black" class="mx-4 divider"></v-divider>
        <div class="chat-footer">
          <!-- <input
            type="text"
            v-model="newMessage"
            @keyup.enter="sendMessage"
            placeholder="Type your message..."
          /> -->
          <v-text-field
            class="prompt-field"
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
        {
          text: "Hello, I'm an AI assistant for Jackfruit Guys. How can I help you today?",
          type: "received",
        },
        {
          text: "I'm interested in learning more about your jackfruit products. What are the different varieties you offer?",
          type: "sent",
        },
        {
          text: "We offer several varieties of jackfruit, including the Honey Gold, Black Gold, and Dang Gui. Each has a unique flavor profile and culinary uses. Would you like me to provide more details on the different types?",
          type: "received",
        },
        {
          text: "Yes, please tell me more about the Honey Gold and Black Gold varieties.",
          type: "sent",
        },
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
  methods: {
    scrollToBottom() {
      console.log("scroling to the bottom");
      const chatBody = this.$refs.chatBody;
      chatBody.scrollTop = chatBody.scrollHeight;
    },
    toggleChat() {
      this.isChatOpen = !this.isChatOpen;
    },
    async sendMessage() {
      this.scrollToBottom();
      // let APIKEY = process.env.CHATGPTKEY;
      // require('dotenv').config();
      // console.log(process.env,'process');
      // console.log("APIKEY",APIKEY);

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
                Authorization: ` Bearer ${api}`, // Replace with your API key
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
  height: 80%;
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
  padding: 10px;
  /* border-top: 1px solid #ccc; */
  /* background-color: red; */
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
</style>
