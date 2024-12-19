<template>
  <div>
    <div class="chatbot-button">
      <v-btn large :ripple="false" color="white" class="borderCHatbot" @click="toggleChat">
        <v-img
         
          class="mr-auto spacingImg jiggle-effect"
          src="../../assets/images/singleLogo.png"
        ></v-img>
       <span class="askAi"> Ask AI</span>
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
            <p>Ask me Anything</p>
          </div>
        </div>
        <div class="chat-body" ref="chatBody">
          <div
            v-for="(message, index) in messages"
            :key="index"
            :class="['message', message.type]"
          >
            <p class="chatMessage" v-html="message.text"></p>
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

  if (this.newMessage.trim() !== "") {
    // Push the user's message to the chat
    this.messages.push({ text: this.newMessage, type: "sent" });

    // Save the user's message and convert to lowercase for easier matching
    const userMessage = this.newMessage.toLowerCase();

    // Clear the input
    this.newMessage = "";

    // Check if this is the user's first message
    if (this.messages.length === 1) {
      this.messages.push({
        text: "Hello! Welcome to Jackfruit Guys. I’m here to assist you with any questions about our products, recipes, health benefits, or orders. Let me know how I can help!",
        type: "received",
      });
      this.apiLoading = false;
      this.scrollToBottom();
      return;
    }

    // Define specific responses for each question
    let response = "";

    // General inquiries and product-specific responses
    if (userMessage.includes("jackfruit")) {
      if (userMessage.includes("what is") || userMessage.includes("tell me about")) {
        response =
          "Jackfruit is a tropical fruit known for its large size and meat-like texture, making it a popular plant-based meat substitute. It's versatile, delicious, and packed with nutrients!";
      }
    }

    // Check for inquiries about price or buying
    if (userMessage.includes("price") || userMessage.includes("buy") || userMessage.includes("purchase")) {
      response = `For inquiries about prices or purchasing, please contact us directly through our <a href="https://www.jackfruitguys.com/contact" target="_blank">Contact Page</a>, email us at info@jackfruitguys.com, or call us at +52 555 501 5010. We're here to help!`;
    }

    if (response) {
      // If there's a predefined response, send it
      this.messages.push({ text: response, type: "received" });
    } else {
      
      // No predefined response, call ChatGPT API
      try {
        this.apiLoading = true;
        const gptResponse = await axios.post(
          "https://api.openai.com/v1/chat/completions",
          {
            model: "gpt-4",
            messages: [
              {
                role: "system",
                content:
                  'You are a helpful assistant for Jackfruit Guys. Answer questions about jackfruit products, health benefits, recipes, and orders. For inquiries about pricing or purchasing, direct users to the contact page at <a href="https://www.jackfruitguys.com/contact" target="_blank">Contact Page</a>, email info@jackfruitguys.com, or call +52 555 501 5010. If uncertain, advise contacting customer support.',
              },
              { role: "user", content: userMessage },
            ],
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${api}`, // Replace with your actual OpenAI API key
            },
          }
        );

        const chatGptMessage = gptResponse.data.choices[0].message.content;

        // Determine if the response is specific enough
        if (chatGptMessage && chatGptMessage.toLowerCase().includes("jackfruit")) {
          this.messages.push({ text: chatGptMessage, type: "received" });
        } else {
          // Provide fallback contact information
          this.messages.push({
            text:
              'For more specific details, please contact us through our <a href="https://www.jackfruitguys.com/contact" target="_blank">Contact Page</a>, email us at info@jackfruitguys.com, or call us at +52 555 501 5010',
            type: "received",
          });
        }
      } catch (error) {
        console.error("Error calling GPT API:", error);
        this.messages.push({
          text: "Oops! Something went wrong. Please try again or contact us at info@jackfruitguys.com.",
          type: "received",
        });
      }
    }

    this.apiLoading = false;
    this.scrollToBottom();
  }

  if (this.newMessage.trim() !== "") {
    // Push the user's message to the chat
    this.messages.push({ text: this.newMessage, type: "sent" });

    // Save the user's message and convert to lowercase for easier matching
    const userMessage = this.newMessage.toLowerCase();

    // Clear the input
    this.newMessage = "";

    // Define specific responses for each question
    let response = "";

    // General inquiries and product-specific responses (similar to your initial structure)
    if (userMessage.includes("jackfruit")) {
      // Checking for specific words in user message
      if (userMessage.includes("what is") || userMessage.includes("tell me about")) {
        response = "Jackfruit is a tropical fruit known for its large size and meat-like texture, often used as a plant-based meat substitute.";
      } 
      // More conditions for predefined responses here...
    }

    if (response) {
      // If there's a predefined response, send it
      this.messages.push({ text: response, type: "received" });
    } else {
      // No predefined response, call ChatGPT API
      try {
        const gptResponse = await axios.post(
          "https://api.openai.com/v1/chat/completions",
          {
            model: "gpt-4",
            messages: [
              {
                role: "system",
                content: "You are a helpful assistant for Jackfruit Guys. Answer questions about jackfruit products, health benefits, recipes, and orders. If uncertain, advise contacting customer support at info@jackfruitguys.com or +52 555 501 5010.",
              },
              { role: "user", content: userMessage },
            ],
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${api}`, // Replace with your actual OpenAI API key
            },
          }
        );

        const chatGptMessage = gptResponse.data.choices[0].message.content;

        // Determine if the response is specific enough
        if (chatGptMessage && chatGptMessage.includes("jackfruit")) {
          this.messages.push({ text: chatGptMessage, type: "received" });
        } else {
          // If the response from ChatGPT is too general, provide contact information
          this.messages.push({
            text: "For more specific details, please contact us at info@jackfruitguys.com or call +52 555 501 5010.",
            type: "received",
          });
        }
      } catch (error) {
        console.error("Error calling GPT API:", error);
        this.messages.push({
          text: "Oops! Something went wrong. Please try again or contact info@jackfruitguys.com.",
          type: "received",
        });
      }
    }

    this.apiLoading = false;
    this.scrollToBottom();
  }
}

  },
};
</script>

<style scoped>
@keyframes jiggle {
  0%, 10% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(5deg);
  }
  75% {
    transform: rotate(-5deg);
  }
  90%, 100% {
    transform: rotate(0deg);
  }
}

.jiggle-effect {
  animation: jiggle 2s ease-in-out infinite; /* 3s jiggle + 3s pause */
}

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
.askAi{
  text-transform: capitalize;
    font-family: "Poppins";
    /* font-family: DM Sans, sans-serif; */
    font-weight: 600;
    font-size: 15px;
    color: rgb(125 160 13);
}
.spacingImg{
  min-width: 40px;
    margin-left: -22px;
    margin-top: -11px;
}
.borderCHatbot {
  /* border: 1px solid #9fc43c !important; */
  border-radius: 100px;
  width: 90px;
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
