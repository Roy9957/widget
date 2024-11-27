// Create floating button
const floatingBtn = document.createElement('div');
floatingBtn.classList.add('floating-btn');
floatingBtn.innerHTML = '<i class="fas fa-comments"></i>';
document.body.appendChild(floatingBtn);

// Create chat box
const chatBox = document.createElement('div');
chatBox.classList.add('chat-box');
chatBox.id = 'chatBox';

const chatHeader = document.createElement('div');
chatHeader.classList.add('chat-header');
chatHeader.textContent = 'Chat with Us';

const chatMessages = document.createElement('div');
chatMessages.classList.add('chat-messages');
chatMessages.id = 'chatMessages';
chatMessages.innerHTML = '<div class="chat-message bot">Hello! How can I help you?</div>';

const chatInput = document.createElement('div');
chatInput.classList.add('chat-input');

const inputField = document.createElement('input');
inputField.type = 'text';
inputField.id = 'userInput';
inputField.placeholder = 'Type your message...';

const sendButton = document.createElement('button');
sendButton.textContent = 'Send';
sendButton.onclick = sendMessage;

chatInput.appendChild(inputField);
chatInput.appendChild(sendButton);

chatBox.appendChild(chatHeader);
chatBox.appendChild(chatMessages);
chatBox.appendChild(chatInput);

document.body.appendChild(chatBox);

// Add style dynamically
const style = document.createElement('style');
style.innerHTML = `
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    height: 100vh;
    overflow: hidden;
    background-color: #f5f5f5;
  }

  /* Floating Button */
  .floating-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background-color: #1abc9c;
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s;
  }

  .floating-btn:hover {
    transform: scale(1.1);
  }

  /* Fullscreen Chat Box */
  .chat-box {
    position: fixed;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
    transition: top 0.4s;
    display: flex;
    flex-direction: column;
  }

  .chat-box.open {
    top: 0;
  }

  /* Chat Header */
  .chat-header {
    background-color: #1abc9c;
    color: white;
    padding: 15px;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
  }

  /* Chat Messages */
  .chat-messages {
    flex: 1;
    padding: 10px;
    overflow-y: auto;
    background: #f9f9f9;
  }

  .chat-message {
    margin: 10px 0;
    padding: 10px;
    border-radius: 10px;
    max-width: 70%;
  }

  .chat-message.user {
    background: #1abc9c;
    color: white;
    margin-left: auto;
  }

  .chat-message.bot {
    background: #ddd;
  }

  /* Input Box */
  .chat-input {
    display: flex;
    padding: 10px;
    border-top: 1px solid #ccc;
  }

  .chat-input input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    outline: none;
  }

  .chat-input button {
    background-color: #1abc9c;
    color: white;
    border: none;
    padding: 10px 15px;
    margin-left: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .chat-input button:hover {
    background-color: #16a085;
  }
`;

document.head.appendChild(style);

// Toggle Chat Box
function toggleChat() {
  const chatBox = document.getElementById('chatBox');
  chatBox.classList.toggle('open');
}

// Send Message Function
function sendMessage() {
  const userInput = document.getElementById('userInput');
  const message = userInput.value.trim();
  if (message) {
    const chatMessages = document.getElementById('chatMessages');

    // Add user message
    const userMessage = document.createElement('div');
    userMessage.classList.add('chat-message', 'user');
    userMessage.textContent = message;
    chatMessages.appendChild(userMessage);

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Clear input
    userInput.value = '';

    // Bot response (example)
    setTimeout(() => {
      const botMessage = document.createElement('div');
      botMessage.classList.add('chat-message', 'bot');
      botMessage.textContent = "Thanks for your message!";
      chatMessages.appendChild(botMessage);

      // Scroll to bottom
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
  }
}

// Bind the floating button to toggle the chat
floatingBtn.onclick = toggleChat;
