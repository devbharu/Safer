import React, { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Hello! I\'m your cybersecurity assistant. I can help you with questions about phishing, password security, social engineering, and other cybersecurity topics. What would you like to know?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses = {
    'phishing': {
      content: 'Phishing is a cyber attack where attackers impersonate legitimate organizations to steal sensitive information like passwords, credit card numbers, or personal data. They often use fake emails, websites, or messages that look authentic. Always verify the sender\'s email address and never click on suspicious links.',
      suggestions: ['How to spot phishing emails?', 'What should I do if I clicked a phishing link?', 'Examples of phishing scams']
    },
    'password': {
      content: 'Strong passwords are essential for protecting your accounts. A good password should be at least 12 characters long and include uppercase letters, lowercase letters, numbers, and special characters. Avoid using personal information like birthdays or common words. Consider using a password manager to generate and store unique passwords for each account.',
      suggestions: ['Password manager recommendations', 'How to create strong passwords?', 'Two-factor authentication']
    },
    'social engineering': {
      content: 'Social engineering is when attackers manipulate people into giving up confidential information or performing actions that compromise security. Common tactics include pretexting (creating false scenarios), baiting (leaving infected devices), quid pro quo (offering services), and tailgating (following someone through secure areas). Always verify requests through official channels.',
      suggestions: ['Common social engineering tactics', 'How to protect against social engineering?', 'Real-world examples']
    },
    'malware': {
      content: 'Malware (malicious software) includes viruses, worms, trojans, ransomware, and spyware. It can steal data, damage systems, or hold files hostage. Protect yourself by keeping software updated, using antivirus software, avoiding suspicious downloads, and being careful with email attachments.',
      suggestions: ['Types of malware', 'How to remove malware?', 'Antivirus software recommendations']
    },
    'two factor': {
      content: 'Two-factor authentication (2FA) adds an extra layer of security by requiring a second form of verification beyond your password. This could be a code sent to your phone, a biometric scan, or a security key. Even if someone gets your password, they can\'t access your account without the second factor.',
      suggestions: ['How to set up 2FA?', 'Best 2FA methods', 'What if I lose my 2FA device?']
    },
    'vpn': {
      content: 'A VPN (Virtual Private Network) encrypts your internet connection and hides your IP address, making it harder for others to track your online activity. This is especially important when using public Wi-Fi networks. However, VPNs don\'t make you completely anonymous and won\'t protect against all threats.',
      suggestions: ['VPN recommendations', 'When to use a VPN?', 'Free vs paid VPNs']
    },
    'ransomware': {
      content: 'Ransomware is malicious software that encrypts your files and demands payment to restore access. It often spreads through phishing emails or compromised websites. Prevention includes regular backups, keeping software updated, and being cautious with email attachments. Never pay the ransom as it doesn\'t guarantee file recovery.',
      suggestions: ['How to prevent ransomware?', 'What to do if infected?', 'Backup strategies']
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse = generateBotResponse(inputMessage.toLowerCase());
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const generateBotResponse = (userInput) => {
    let response = {
      id: messages.length + 2,
      type: 'bot',
      timestamp: new Date()
    };

    // Check for keywords in user input
    if (userInput.includes('phishing') || userInput.includes('fake email') || userInput.includes('scam email')) {
      response.content = botResponses.phishing.content;
      response.suggestions = botResponses.phishing.suggestions;
    } else if (userInput.includes('password') || userInput.includes('passwords') || userInput.includes('login')) {
      response.content = botResponses.password.content;
      response.suggestions = botResponses.password.suggestions;
    } else if (userInput.includes('social engineering') || userInput.includes('manipulation') || userInput.includes('pretexting')) {
      response.content = botResponses.social_engineering.content;
      response.suggestions = botResponses.social_engineering.suggestions;
    } else if (userInput.includes('malware') || userInput.includes('virus') || userInput.includes('trojan')) {
      response.content = botResponses.malware.content;
      response.suggestions = botResponses.malware.suggestions;
    } else if (userInput.includes('two factor') || userInput.includes('2fa') || userInput.includes('authentication')) {
      response.content = botResponses.two_factor.content;
      response.suggestions = botResponses.two_factor.suggestions;
    } else if (userInput.includes('vpn') || userInput.includes('virtual private network')) {
      response.content = botResponses.vpn.content;
      response.suggestions = botResponses.vpn.suggestions;
    } else if (userInput.includes('ransomware') || userInput.includes('encrypted files')) {
      response.content = botResponses.ransomware.content;
      response.suggestions = botResponses.ransomware.suggestions;
    } else {
      response.content = 'I\'m not sure I understand. Could you please rephrase your question? I can help with topics like phishing, password security, social engineering, malware, two-factor authentication, VPNs, and ransomware.';
      response.suggestions = ['What is phishing?', 'How to create strong passwords?', 'What is social engineering?'];
    }

    return response;
  };

  const handleSuggestionClick = (suggestion) => {
    setInputMessage(suggestion);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cybersecurity Assistant
          </h1>
          <p className="text-xl text-gray-600">
            Get instant answers to your cybersecurity questions
          </p>
        </div>

        {/* Chat Container */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Chat Header */}
          <div className="bg-blue-600 px-6 py-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold">GuardianSphere Bot</h3>
                <p className="text-blue-100 text-sm">Online • Ready to help</p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p className={`text-xs mt-1 ${
                    message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {formatTime(message.timestamp)}
                  </p>
                  
                  {/* Bot Suggestions */}
                  {message.type === 'bot' && message.suggestions && (
                    <div className="mt-3 space-y-2">
                      <p className="text-xs font-medium text-gray-600">Quick questions:</p>
                      <div className="flex flex-wrap gap-2">
                        {message.suggestions.map((suggestion, index) => (
                          <button
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded hover:bg-blue-200 transition-colors duration-200"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 max-w-xs lg:max-w-md px-4 py-2 rounded-lg">
                  <div className="flex items-center space-x-1">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-xs text-gray-500 ml-2">Typing...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t bg-gray-50 p-4">
            <div className="flex space-x-4">
              <div className="flex-1">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your cybersecurity question here..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  rows="2"
                />
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            
            {/* Quick Actions */}
            <div className="mt-3">
              <p className="text-xs text-gray-500 mb-2">Quick topics:</p>
              <div className="flex flex-wrap gap-2">
                {['What is phishing?', 'Password security', 'Social engineering', 'Malware protection', 'Two-factor authentication'].map((topic) => (
                  <button
                    key={topic}
                    onClick={() => handleSuggestionClick(topic)}
                    className="text-xs bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-50 transition-colors duration-200"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Info Panel */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">About this Assistant</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">What I can help with:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Phishing email identification</li>
                <li>• Password security best practices</li>
                <li>• Social engineering awareness</li>
                <li>• Malware protection tips</li>
                <li>• Two-factor authentication setup</li>
                <li>• VPN recommendations</li>
                <li>• Ransomware prevention</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Remember:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Never share personal information</li>
                <li>• Always verify sources independently</li>
                <li>• Keep software updated</li>
                <li>• Use strong, unique passwords</li>
                <li>• Enable two-factor authentication</li>
                <li>• Be skeptical of urgent requests</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
