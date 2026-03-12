'use client';

import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

type Question = {
  id: string;
  question: string;
  options?: string[];
  type: 'choice' | 'text';
};

const qualificationFlow: Question[] = [
  {
    id: 'budget',
    question: "What's your budget range for solar installation?",
    options: ['£3,000-£5,000', '£5,000-£8,000', '£8,000-£12,000', '£12,000+'],
    type: 'choice'
  },
  {
    id: 'timeline',
    question: "When are you looking to install?",
    options: ['Within 1 month', '1-3 months', '3-6 months', 'Just researching'],
    type: 'choice'
  },
  {
    id: 'property',
    question: "What type of property do you have?",
    options: ['Detached house', 'Semi-detached', 'Terraced', 'Bungalow'],
    type: 'choice'
  },
  {
    id: 'orientation',
    question: "Which direction does your roof face?",
    options: ['South', 'South-East/South-West', 'East/West', 'North'],
    type: 'choice'
  }
];

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Sophie, your 24/7 solar assistant 👋 I'm here to help you find the perfect solar solution. Let me ask you a few quick questions to understand your needs better.",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [qualificationData, setQualificationData] = useState<Record<string, string>>({});
  const [isQualified, setIsQualified] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && currentQuestionIndex === 0 && messages.length === 1) {
      // Ask first question after welcome message
      setTimeout(() => {
        addBotMessage(qualificationFlow[0].question);
      }, 1000);
    }
  }, [isOpen]);

  const addBotMessage = (text: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        text,
        sender: 'bot',
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 800);
  };

  const addUserMessage = (text: string) => {
    setMessages(prev => [...prev, {
      id: prev.length + 1,
      text,
      sender: 'user',
      timestamp: new Date()
    }]);
  };

  const handleOptionClick = (option: string) => {
    const currentQuestion = qualificationFlow[currentQuestionIndex];
    addUserMessage(option);
    
    // Save the answer
    setQualificationData(prev => ({
      ...prev,
      [currentQuestion.id]: option
    }));

    // Move to next question or complete
    if (currentQuestionIndex < qualificationFlow.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
        addBotMessage(qualificationFlow[currentQuestionIndex + 1].question);
      }, 1000);
    } else {
      // Qualification complete
      setTimeout(() => {
        setIsQualified(true);
        addBotMessage("Perfect! Based on your answers, you're an excellent candidate for solar. I'd love to schedule a free consultation with one of our experts. What's the best time to call you?");
      }, 1000);
    }
  };

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    addUserMessage(userInput);
    
    if (isQualified) {
      // After they provide contact time
      setTimeout(() => {
        addBotMessage("Excellent! I've booked you in. One of our solar specialists will call you to discuss your personalized quote. In the meantime, feel free to explore our ROI calculator above! 🌞");
      }, 1000);
    }
    
    setUserInput('');
  };

  const currentQuestion = qualificationFlow[currentQuestionIndex];
  const showOptions = !isQualified && currentQuestion && currentQuestion.type === 'choice';

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 z-50 group"
          aria-label="Open chat"
        >
          <MessageCircle className="w-8 h-8" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
          <span className="absolute bottom-full right-0 mb-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Talk to Sophie 24/7
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold">Sophie</h3>
                <p className="text-xs opacity-90">Solar Assistant • Online 24/7</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 rounded-lg p-1 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.sender === 'user'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-white text-gray-900 shadow-sm border border-gray-100'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-900 rounded-2xl px-4 py-3 shadow-sm border border-gray-100">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            {/* Quick Reply Options */}
            {showOptions && !isTyping && (
              <div className="flex flex-col gap-2">
                {currentQuestion.options?.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className="bg-white hover:bg-emerald-50 text-gray-900 border-2 border-emerald-600 rounded-xl px-4 py-3 text-sm font-medium transition-colors text-left"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none text-gray-900"
              />
              <button
                onClick={handleSendMessage}
                className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-lg transition-colors"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Powered by Cold Lava AI
            </p>
          </div>
        </div>
      )}
    </>
  );
}
