"use client";

import React, { useRef, useEffect } from 'react';
import { useChat } from '@ai-sdk/react';
import { ChatMessage } from './ChatMessage';
import { Send, X, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface ChatWindowProps {
  onClose: () => void;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({ onClose }) => {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      className="bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col w-[350px] sm:w-[400px] h-[500px] sm:h-[600px] overflow-hidden"
    >
      {/* Header */}
      <div className="bg-primary px-6 py-4 flex items-center justify-between text-white">
        <div>
          <h3 className="font-black tracking-tight text-lg">Asistente Aconiño</h3>
          <p className="text-xs text-white/70 font-medium">Estamos aquí para ayudarte</p>
        </div>
        <button 
          onClick={onClose}
          className="p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
            <div className="bg-accent/20 p-4 rounded-full">
              <span className="text-3xl">👋</span>
            </div>
            <div>
              <p className="font-bold text-gray-800">¡Hola! Soy tu asistente de Aconiño.</p>
              <p className="text-sm text-gray-500 mt-1">¿En qué puedo ayudarte hoy?</p>
            </div>
          </div>
        )}
        {messages.map((m) => (
          <ChatMessage key={m.id} message={m} />
        ))}
        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-tl-none">
              <Loader2 className="w-4 h-4 animate-spin text-primary" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-100 bg-gray-50/50">
        <div className="relative flex items-center">
          <input
            value={input || ''}
            onChange={handleInputChange}
            placeholder="Escribe tu mensaje..."
            className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
          />
          <button
            type="submit"
            disabled={!input?.trim() || isLoading}
            className="absolute right-2 p-2 bg-primary text-white rounded-xl disabled:opacity-50 disabled:bg-gray-400 hover:bg-primary-dark transition-all"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </motion.div>
  );
};
