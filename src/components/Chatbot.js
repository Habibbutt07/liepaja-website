import React, { useState, useEffect, useRef } from 'react';
import { searchStoreProducts } from '../api/storeApi';
import { allServices } from '../data/servicesData';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Auto-popup after 3 seconds on page load (every time page refreshes)
    const timer = setTimeout(() => {
      setIsOpen(true);
      setMessages([
        {
          type: 'bot',
          text: "Hello! I'm Liepu, your AI assistant. I'm here to help you learn more about Liepaja city website, its features, services, and other information. How can I assist you today?",
          timestamp: new Date()
        }
      ]);
    }, 3000);

    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this runs once on mount (every page refresh)

  useEffect(() => {
    // Scroll to bottom when new messages are added
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase().trim();

    // Greetings
    if (lowerMessage.match(/^(hi|hello|hey|greetings|good morning|good afternoon|good evening)/)) {
      return "Hello! Welcome to Liepaja city website. I'm Liepu, your assistant. How can I help you today?";
    }

    // Website features
    if (lowerMessage.match(/(feature|what can|what does|capabilities|what is available)/)) {
      return "Our website offers several features:\n\n• Search functionality to find information quickly\n• Multiple pages: Home, About, Services, News, Contact\n• Special sections for Residents, Entrepreneurs, and Guests\n• Procurement information and Documents\n• Responsive design for mobile and desktop\n• Side menu navigation for easy access\n\nWhat would you like to know more about?";
    }

    // Services - General
    if (lowerMessage.match(/(service|what services|available services|help with|pakalpojumi)/)) {
      let response = "Liepaja offers various e-services. Here are the main categories:\n\n";
      const categories = [...new Set(allServices.map(s => s.category))];
      const categoryIcons = {
        'documents': '📋',
        'education': '📚',
        'transport': '🚌',
        'sports': '⚽',
        'environment': '🌳',
        'appointments': '📅',
        'events': '🎉',
        'participation': '🗳️'
      };
      
      categories.forEach(cat => {
        const count = allServices.filter(s => s.category === cat).length;
        response += `${categoryIcons[cat] || '•'} ${cat.charAt(0).toUpperCase() + cat.slice(1)} (${count} services)\n`;
      });
      
      response += "\nYou can ask me about specific services like:\n";
      response += "• Birth certificate\n• Library registration\n• Building permit\n• Transport discount\n• Sports support\n• Online appointment\n\nOr visit /services to see all services with step-by-step guides!";
      return response;
    }

    // Specific service matching
    const serviceKeywords = {
      'birth-certificate': ['birth certificate', 'dzimšanas apliecība', 'birth', 'dzimšana'],
      'marriage-certificate': ['marriage certificate', 'laulības apliecība', 'marriage', 'laulība'],
      'building-permit': ['building permit', 'būvatļauja', 'construction', 'būvniecība', 'permit'],
      'library-registration': ['library', 'bibliotēka', 'library registration', 'bibliotēkas reģistrācija'],
      'student-transport-discount': ['student transport', 'student discount', 'student e-ticket', 'studenta atvieglojums'],
      'large-family-discount': ['large family', 'daudzbērnu ģimene', 'family discount', 'family transport'],
      'sports-achievement-support': ['sports achievement', 'sporta sasniegumi', 'sports support', 'sporta atbalsts'],
      'sports-investment': ['sports investment', 'ieguldījums sportā', 'sports funding'],
      'tree-cutting-discussion': ['tree cutting', 'koku ciršana', 'tree', 'koks'],
      'online-appointment': ['appointment', 'pieraksts', 'book appointment', 'tiešsaistes pieraksts'],
      'event-registration': ['event registration', 'pasākumu reģistrācija', 'register event', 'event'],
      'resident-involvement': ['resident involvement', 'iedzīvotāju iesaiste', 'vote', 'balsošana', 'opinion']
    };

    for (const [serviceId, keywords] of Object.entries(serviceKeywords)) {
      if (keywords.some(keyword => lowerMessage.includes(keyword))) {
        const service = allServices.find(s => s.id === serviceId);
        if (service) {
          let response = `${service.icon} ${service.title}\n${service.titleEn}\n\n`;
          response += `${service.description}\n${service.descriptionEn}\n\n`;
          response += `📋 Processing time: ${service.processingTime}\n\n`;
          response += `🔗 View detailed step-by-step guide: /services/${service.id}\n`;
          response += `🌐 E-services portal: ${service.externalLink}\n\n`;
          response += `Contact: ${service.contactInfo.phone} | ${service.contactInfo.email}`;
          return response;
        }
      }
    }

    // Residents
    if (lowerMessage.match(/(resident|for residents|citizen|living in)/)) {
      return "For Liepaja residents, we provide:\n\n• Housing and property services\n• Document services (certificates, permits)\n• Social services and support programs\n• Health services information\n• Education and school services\n• Transportation and parking information\n\nVisit the 'For Liepaja residents' page in the side menu for more details!";
    }

    // Entrepreneurs
    if (lowerMessage.match(/(entrepreneur|business|start business|company|commercial)/)) {
      return "For entrepreneurs, we offer:\n\n• Business registration services\n• Licenses and permits\n• Financial support and grants\n• Economic development programs\n• Tax information and assistance\n• Business consultation services\n\nCheck out the 'For entrepreneurs' page in the side menu!";
    }

    // Parking
    if (lowerMessage.match(/(parking|stāvvieta|park|where to park|parking zone|mobilly)/)) {
      return "Parking information for Liepaja:\n\n🅿️ Multiple parking zones available\n📍 City Center Zones A & B\n🚂 Station Zone\n🏛️ Old Town Zone\n⚓ Port Zone\n\n💰 Rates: €0.60 - €1.50/hour\n📱 Book via Mobilly app\n🗺️ View map and availability: /parking\n\nVisit the Parking page to see all zones, prices, and real-time availability!";
    }

    // Guests/Tourists
    if (lowerMessage.match(/(guest|tourist|visitor|visit|travel|attraction|tour)/)) {
      return "Welcome to Liepaja! For guests and tourists:\n\n🗺️ Tourist information and city guides\n🏖️ Beaches and natural areas\n🎭 Culture, events, and festivals\n🍽️ Dining and accommodation guides\n🚗 Transportation information\n🅿️ Parking information\nℹ️ Visitor services\n\nExplore the 'For guests' page in the side menu for more!";
    }

    // News
    if (lowerMessage.match(/(news|update|announcement|recent|latest|what's new)/)) {
      return "Stay updated with the latest news from Liepaja:\n\n• City announcements and updates\n• Community events\n• Infrastructure projects\n• Cultural events and festivals\n• Public notices\n\nVisit the News page to see all recent updates!";
    }

    // Contact
    if (lowerMessage.match(/(contact|phone|email|address|location|where|office|reach)/)) {
      return "You can contact us:\n\n📍 Address: Rožu iela 6, Liepāja, LV-3401, Latvia\n📞 Phone: +371 12 345 678\n✉️ Email: info@liepaja.lv\n🕒 Office Hours: Monday-Friday 8:00-17:00, Saturday 9:00-13:00\n\nVisit the Contact page for more information or to send us a message!";
    }

    // About
    if (lowerMessage.match(/(about|history|information|tell me about|what is liepaja)/)) {
      return "Liepaja is a beautiful coastal city in western Latvia:\n\n• Population: Over 70,000 residents\n• Founded: 1253\n• Known as 'The City Where the Wind is Born'\n• Rich cultural heritage and history\n• Beautiful beaches and natural areas\n• Vibrant cultural scene with festivals and events\n\nVisit the About page to learn more about our city!";
    }

    // Procurement
    if (lowerMessage.match(/(procurement|tender|bid|contract|opportunity)/)) {
      return "Public procurement opportunities:\n\n• Road maintenance services\n• IT equipment supply\n• Building services\n• Waste management\n• Public transportation vehicles\n• Various goods and services\n\nCheck the Procurement page for current opportunities and deadlines!";
    }

    // Documents
    if (lowerMessage.match(/(document|form|download|file|report|regulation)/)) {
      return "We provide various documents:\n\n📜 City Regulations and Codes\n📊 Annual Reports and Budgets\n📝 Meeting Minutes\n📋 Official Forms and Applications\n📖 Policies and Procedures\n⚖️ Legal Documents\n\nVisit the Documents page to access all available documents!";
    }

    // Store/Shopping
    if (lowerMessage.match(/(store|shop|buy|purchase|souvenir|product|merchandise|gift|item for sale)/)) {
      // Try to search for products
      const storeResults = searchStoreProducts(lowerMessage);
      if (storeResults.length > 0) {
        let response = "Here are the best matches from the Liepāja Store:\n\n";
        storeResults.slice(0, 5).forEach((product, index) => {
          response += `${index + 1}. ${product.name} - €${product.price.toFixed(2)}\n   ${product.description}\n   Category: ${product.category}\n\n`;
        });
        response += "Visit /store to see all products and make a purchase!";
        return response;
      }
      return "Welcome to the Liepāja Store! We offer:\n\n🛍️ Souvenirs - postcards, mugs, posters\n👕 Clothing - t-shirts, hoodies\n🎨 Handmade - jewelry, crafts, scarves\n🏖️ Beach Items - towels, bags\n🍵 Food - herbal teas, local products\n📚 Books - city history and guides\n\nYou can search for specific products or visit /store to browse all items!";
    }

    // Navigation/How to use
    if (lowerMessage.match(/(navigate|how to|use|find|where is|menu|search)/)) {
      return "Here's how to navigate our website:\n\n🔍 Use the search bar to find information quickly\n📱 Click the menu icon (☰) to open the side menu\n📄 Browse pages: Home, About, Services, News, Contact\n🛍️ Visit the Liepāja Store for souvenirs and products\n👥 Special sections: Residents, Entrepreneurs, Guests\n\nYou can also ask me questions about any topic!";
    }

    // Help
    if (lowerMessage.match(/(help|assist|support|don't know|confused|stuck)/)) {
      return "I'm here to help! You can ask me about:\n\n• Website features and navigation\n• City services and information (ask about specific services!)\n• Parking zones and prices\n• Contact details and office hours\n• News and updates\n• Documents and forms\n• Tourism and attractions\n• Business services\n• Store products and souvenirs\n• Step-by-step guides for e-services\n\nTry asking: 'How do I get a birth certificate?' or 'Where can I park?' or 'Parking zones'!";
    }

    // Default responses
    if (lowerMessage.match(/(thank|thanks|appreciate|grateful)/)) {
      return "You're welcome! Is there anything else I can help you with?";
    }

    if (lowerMessage.match(/(bye|goodbye|see you|farewell)/)) {
      return "Goodbye! Feel free to come back anytime if you need assistance. Have a great day!";
    }

    // Try store search as fallback
    const storeResults = searchStoreProducts(userMessage);
    if (storeResults.length > 0) {
      let response = "I found these products in the Liepāja Store:\n\n";
      storeResults.slice(0, 3).forEach((product, index) => {
        response += `${index + 1}. ${product.name} - €${product.price.toFixed(2)}\n   ${product.description}\n\n`;
      });
      response += "Visit /store to see more products!";
      return response;
    }

    // Try to find matching service
    const matchingService = allServices.find(service => {
      const searchTerms = [
        service.title.toLowerCase(),
        service.titleEn.toLowerCase(),
        service.description.toLowerCase(),
        service.descriptionEn.toLowerCase()
      ];
      return searchTerms.some(term => lowerMessage.includes(term) || term.includes(lowerMessage));
    });

    if (matchingService) {
      let response = `${matchingService.icon} ${matchingService.title}\n${matchingService.titleEn}\n\n`;
      response += `${matchingService.description}\n${matchingService.descriptionEn}\n\n`;
      response += `📋 Processing: ${matchingService.processingTime}\n\n`;
      response += `🔗 Full guide with steps: /services/${matchingService.id}\n`;
      response += `🌐 Apply online: ${matchingService.externalLink}`;
      return response;
    }

    // Default fallback
    return "I understand you're asking about: '" + userMessage + "'. I can help you with:\n\n• All e-services with step-by-step guides (visit /services)\n• Website features and services\n• City information and history\n• Contact details\n• News and updates\n• Documents and forms\n• Tourism information\n• Business services\n• Store products and souvenirs\n\nTry asking about a specific service like 'birth certificate' or 'library registration'!";
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = {
      type: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot thinking delay
    setTimeout(() => {
      const responseText = getBotResponse(inputValue);
      const botResponse = {
        type: 'bot',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 500);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Add welcome message when opening
      if (messages.length === 0) {
        setMessages([
          {
            type: 'bot',
            text: "Hello! I'm Liepu, your AI assistant. I'm here to help you learn more about Liepaja city website, its features, services, and other information. How can I assist you today?",
            timestamp: new Date()
          }
        ]);
      }
    }
  };

  const handleMinimize = () => {
    setIsOpen(false);
  };

  return (
    <>
      {!isOpen && (
        <button className="chatbot-toggle" onClick={handleToggle} aria-label="Open chatbot">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <span className="chatbot-badge">Liepu</span>
        </button>
      )}

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar">L</div>
              <div>
                <h3>Liepu</h3>
                <p>AI Assistant</p>
              </div>
            </div>
            <div className="chatbot-header-actions">
              <button className="chatbot-minimize" onClick={handleMinimize} aria-label="Minimize">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
              <button className="chatbot-close" onClick={handleToggle} aria-label="Close">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`chatbot-message ${message.type}`}>
                {message.type === 'bot' && (
                  <div className="chatbot-avatar-small">L</div>
                )}
                <div className="chatbot-message-content">
                  <p>{message.text.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < message.text.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}</p>
                  <span className="chatbot-timestamp">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form className="chatbot-input-form" onSubmit={handleSendMessage}>
            <input
              type="text"
              className="chatbot-input"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              autoFocus
            />
            <button type="submit" className="chatbot-send" aria-label="Send message">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;

