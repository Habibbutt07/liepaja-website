import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within SearchProvider');
  }
  return context;
};

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Website content data for search
  const websiteContent = [
    { id: 1, title: 'Welcome to Liepaja', content: 'The City Where the Wind is Born', page: '/', type: 'home' },
    { id: 2, title: 'About Liepaja', content: 'Liepaja is a beautiful coastal city located in western Latvia', page: '/about', type: 'about' },
    { id: 3, title: 'Document Services', content: 'Get official documents, certificates, and permits', page: '/services', type: 'service' },
    { id: 4, title: 'Housing Services', content: 'Information and assistance with housing matters', page: '/services', type: 'service' },
    { id: 5, title: 'Social Services', content: 'Support services for families, elderly, and individuals', page: '/services', type: 'service' },
    { id: 6, title: 'Education Services', content: 'Information about schools and educational programs', page: '/services', type: 'service' },
    { id: 7, title: 'Health Services', content: 'Healthcare information and clinic locations', page: '/services', type: 'service' },
    { id: 8, title: 'Business Services', content: 'Support for businesses including registration', page: '/services', type: 'service' },
    { id: 9, title: 'New Community Center Opens', content: 'The city has opened a new state-of-the-art community center', page: '/news', type: 'news' },
    { id: 10, title: 'Winter Festival 2024', content: 'Join us for the annual Winter Festival', page: '/news', type: 'news' },
    { id: 11, title: 'Infrastructure Improvements', content: 'Major road improvements and infrastructure upgrades', page: '/news', type: 'news' },
    { id: 12, title: 'Contact Information', content: 'Get in touch with the city administration', page: '/contact', type: 'contact' },
  ];

  const search = (query) => {
    if (!query || query.trim() === '') {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const lowerQuery = query.toLowerCase().trim();
    
    const results = websiteContent.filter(item => {
      return (
        item.title.toLowerCase().includes(lowerQuery) ||
        item.content.toLowerCase().includes(lowerQuery)
      );
    });

    setSearchResults(results);
    setIsSearching(false);
    return results;
  };

  const clearSearch = () => {
    setSearchResults([]);
    setIsSearching(false);
  };

  return (
    <SearchContext.Provider value={{ search, searchResults, isSearching, clearSearch }}>
      {children}
    </SearchContext.Provider>
  );
};


