
// Create the chat widget
function createChatWidget() {
  const fontAwesomeLink = document.createElement('link');
  fontAwesomeLink.rel = 'stylesheet';
  fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
  document.head.appendChild(fontAwesomeLink);

  // Create the necessary HTML elements through JavaScript
  const body = document.body;

  // Create the floating action button (FAB)
  const chatFab = document.createElement('div');
  chatFab.id = 'chat-fab';
  chatFab.classList.add('chat-fab');
  const fabIcon = document.createElement('i');
  fabIcon.classList.add('fas', 'fa-comments');
  chatFab.appendChild(fabIcon);
  body.appendChild(chatFab);

  // Create the full-screen chat widget container
  const chatWidget = document.createElement('div');
  chatWidget.id = 'chat-widget';
  chatWidget.classList.add('chat-widget');
  body.appendChild(chatWidget);

  // Chat header with close button
  const chatHeader = document.createElement('div');
  chatHeader.id = 'chat-header';
  chatHeader.classList.add('chat-header');
  chatHeader.textContent = 'Chat with Bot!';
  const closeChat = document.createElement('span');
  closeChat.id = 'close-chat';
  closeChat.innerHTML = '&#10006;';
  chatHeader.appendChild(closeChat);
  chatWidget.appendChild(chatHeader);

  // Chat messages area
  const chatBody = document.createElement('div');
  chatBody.id = 'chat-body';
  chatBody.classList.add('chat-body');
  chatWidget.appendChild(chatBody);

  // Chat input area with message input and send button
  const chatInput = document.createElement('div');
  chatInput.id = 'chat-input';
  chatInput.classList.add('chat-input');
  const messageInput = document.createElement('input');
  messageInput.type = 'text';
  messageInput.id = 'message-input';
  messageInput.placeholder = 'Type a message...';
  const sendButton = document.createElement('button');
  sendButton.id = 'send-button';
  sendButton.textContent = 'Send';
  chatInput.appendChild(messageInput);
  chatInput.appendChild(sendButton);
  chatWidget.appendChild(chatInput);

  // Clear Chat Button
  const clearChatButton = document.createElement('button');
  clearChatButton.id = 'clear-chat';
  clearChatButton.textContent = 'Clear Chat';
  chatWidget.appendChild(clearChatButton);

  // Add event listener to FAB to open chat widget
  chatFab.addEventListener('click', () => {
    chatWidget.style.display = 'flex';
  });

  // Add event listener to close button to close chat widget
  closeChat.addEventListener('click', () => {
    chatWidget.style.display = 'none';
  });

  // Add event listener to send button
  sendButton.addEventListener('click', sendMessage);
  messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });

  // Add event listener to clear chat button
  clearChatButton.addEventListener('click', () => {
    chatBody.innerHTML = ''; // Clear chat messages
  });
  
  // Function to add messages to the chat
  function addMessage(text, isUser) {
    const message = document.createElement('div');
    message.classList.add('message');
    message.classList.add(isUser ? 'user-message' : 'bot-message');
    message.textContent = text;
    chatBody.appendChild(message);
    chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll to bottom
  }

  // Simulate bot typing indicator
  function simulateTyping() {
    const typingIndicator = document.createElement('div');
    typingIndicator.classList.add('bot-typing');
    typingIndicator.textContent = '○○○';
    chatBody.appendChild(typingIndicator);
    chatBody.scrollTop = chatBody.scrollHeight;

    // Remove typing indicator after a delay
    setTimeout(() => {
      typingIndicator.remove();
    }, 2000);
  }

  // Simulate bot response with a delay
  function simulateBotResponse() {
    setTimeout(() => {
      addMessage("Hello! How can I assist you today?", false); // Bot's reply
    }, 3000); // 3 seconds delay for a more natural response
  }

  // Send user message
  function sendMessage() {
    const userMessage = messageInput.value.trim();
    if (userMessage) {
      addMessage(userMessage, true); // Add user's message to chat
      messageInput.value = ''; // Clear input field

      simulateTyping(); // Show bot typing indicator
      simulateBotResponse(); // Simulate bot's response after delay
    }
  }

  // Apply styles dynamically
  const style = document.createElement('style');
  style.textContent = `
    /* Floating action button style */
    .chat-fab {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 60px;
      height: 60px;
      border-radius: 100%;
      background-color: #0078d7;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
     
      z-index: 1000;
    }

    /* Full-screen chat container */
    .chat-widget {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #f9f9f9;
      display: none;
      flex-direction: column;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      z-index: 9999;
    }

    /* Chat header */
    .chat-header {
      background-color: #0078d7;
      color: white;
      padding: 15px;
      text-align: center;
      font-size: 20px;
      
    }

    /* Close button */
    #close-chat {
      position: absolute;
      top: 15px;
      right: 20px;
      font-size: 25px;
      color: white;
     
    }

    /* Chat body */
    .chat-body {
      flex: 1;
      padding: 10px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      overflow-y: auto;
    }

    .message {
      max-width: 80%;
      padding: 8px 15px;
      border-radius: 15px;
      word-wrap: break-word;
      font-size: 14px;
    }

    .user-message {
      background-color: #0078d7;
      color: white;
      align-self: flex-end;
    }

    .bot-message {
      background-color: #f0f0f0;
      color: #333;
      align-self: flex-start;
    }

    /* Bot typing indicator */
    .bot-typing {
      font-size: 14px;
      color: #888;
      align-self: flex-start;
    }

    /* Chat input section */
    .chat-input {
      display: flex;
      border-top: 1px solid #ddd;
      padding: 10px;
    }

    #message-input {
      flex: 1;
      padding: 10px;
      border: none;
      border-radius: 20px;
      outline: none;
    }

    #send-button {
      padding: 10px;
      margin-left: 5px;
      background-color: #0078d7;
      color: white;
      border: none;
      border-radius: 20px;
      
    }

    #clear-chat {
      margin-left: 10px;
      padding: 8px;
      width:50%;
      background-color: #f44336;
      color: white;
      border: none;
      border-radius: 20px;
    
    }

    #clear-chat:hover {
      background-color: #e53935;
    }
  `;
  body.appendChild(style);
}

// Initialize the chat widget
createChatWidget();
