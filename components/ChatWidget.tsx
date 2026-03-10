import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'INIT_SEQUENCE_COMPLETE. Hello! I am Ari\'s Digital Twin. Ask me anything.', timestamp: Date.now() }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Prepare history for API (simplified for this demo)
    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const responseText = await sendMessageToGemini(history, userMsg.text);

    const modelMsg: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Chat Window */}
      {isOpen && (
        <div className="pointer-events-auto mb-4 w-[90vw] sm:w-[350px] bg-white border-2 border-neu-border shadow-neu flex flex-col animate-in slide-in-from-bottom-10 fade-in duration-200">
          {/* Header */}
          <div className="bg-neu-purple p-3 border-b-2 border-neu-border flex justify-between items-center">
            <div className="flex items-center gap-2 font-bold font-mono text-sm">
              <Bot size={18} />
              <span>DIGITAL_TWIN_V1.0</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-white border-2 border-transparent hover:border-neu-border p-1 transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="h-80 overflow-y-auto p-4 flex flex-col gap-3 bg-white">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'self-end flex-row-reverse' : 'self-start'}`}
              >
                <div className={`w-8 h-8 rounded-none border-2 border-neu-border flex-shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-neu-yellow' : 'bg-neu-lime'}`}>
                  {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div className={`p-2 border-2 border-neu-border text-sm font-mono shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${msg.role === 'user' ? 'bg-white' : 'bg-neu-bg'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="self-start flex gap-2">
                 <div className="w-8 h-8 border-2 border-neu-border bg-neu-lime flex items-center justify-center">
                  <Bot size={16} />
                </div>
                <div className="p-2 border-2 border-neu-border bg-neu-bg text-sm font-mono animate-pulse">
                  PROCESSING...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-3 border-t-2 border-neu-border bg-gray-50 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Ari..."
              className="flex-1 bg-white border-2 border-neu-border p-2 font-mono text-sm focus:outline-none focus:shadow-neu-sm transition-shadow"
            />
            <button 
              type="submit"
              disabled={isLoading}
              className="bg-neu-blue p-2 border-2 border-neu-border hover:shadow-neu-sm active:translate-x-[1px] active:translate-y-[1px] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto bg-neu-yellow hover:bg-neu-pink border-2 border-neu-border p-4 shadow-neu hover:shadow-neu-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-neu-pressed transition-all duration-200 group"
        aria-label="Chat with AI"
      >
        {isOpen ? <X size={24} /> : <Sparkles size={24} className="group-hover:rotate-12 transition-transform" />}
      </button>
    </div>
  );
};