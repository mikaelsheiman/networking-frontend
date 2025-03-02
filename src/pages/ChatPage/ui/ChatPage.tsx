// src/components/Chat.tsx
import React, { useState } from "react";
import "../style/ChatPage.sass";

interface Message {
  id: number;
  text: string;
  sender: string;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState<string>("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim() === "") return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: "User", // You can replace this with dynamic sender info
    };

    setMessages([...messages, newMessage]);
    setInputText("");
  };

  return (
    <div className="chat-container">
      <div className="messages-container">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="sender">{message.sender}:</span>
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="message-form">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
