import React from 'react';
import { UIMessage } from 'ai';
import { motion } from 'framer-motion';

interface ChatMessageProps {
  message: UIMessage;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div
        className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm shadow-sm ${
          isUser
            ? 'bg-primary text-white rounded-tr-none'
            : 'bg-gray-100 text-gray-800 rounded-tl-none'
        }`}
      >
        {message.parts
          .filter((part) => part.type === 'text')
          .map((part, i) => (
            <span key={i}>{part.text}</span>
          ))}
      </div>
    </motion.div>
  );
};
