import React from 'react';
import ImageWithFallback from '../components/ImageWithFallback';
import { fallbackImages } from '../utils/imageLoader';
import './News.css';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: 'New Community Center Opens in Downtown',
      date: 'December 10, 2024',
      category: 'Community',
      image: fallbackImages.news1,
      fallback: '/images/news-1.jpg',
      excerpt: 'The city has opened a new state-of-the-art community center in the heart of downtown. The facility features modern amenities including meeting rooms, recreational areas, and spaces for community events.',
      content: 'The new community center represents a significant investment in our city\'s infrastructure. Located in the heart of downtown, the facility spans over 5,000 square meters and includes multiple meeting rooms, a large event hall, recreational areas, and spaces designed for various community activities. The center will serve as a hub for local organizations, community groups, and residents looking to connect and engage with their neighbors. Mayor John Smith expressed excitement about the opening, stating that this center will strengthen community bonds and provide valuable resources for all residents.'
    },
    {
      id: 2,
      title: 'Winter Festival 2024 Announced',
      date: 'December 8, 2024',
      category: 'Events',
      image: fallbackImages.news2,
      fallback: '/images/news-2.jpg',
      excerpt: 'Join us for the annual Winter Festival featuring local artists, food vendors, and live music. The festival will take place in the city center from December 20-22.',
      content: 'The annual Winter Festival is back and bigger than ever! This year\'s festival will feature over 50 local vendors, including food stalls, artisan crafts, and holiday decorations. The main stage will host live performances from local musicians and dance groups throughout the weekend. Special attractions include an ice skating rink, holiday market, and children\'s activities. The festival is free to attend and open to all ages. Food vendors will offer a variety of local and international cuisine, and there will be plenty of opportunities to find unique holiday gifts from local artisans.'
    },
    {
      id: 3,
      title: 'Major Infrastructure Improvements Planned',
      date: 'December 5, 2024',
      category: 'Infrastructure',
      image: fallbackImages.news3,
      fallback: '/images/news-3.jpg',
      excerpt: 'The city council has approved a comprehensive infrastructure improvement plan that will upgrade roads, public transportation, and utilities over the next three years.',
      content: 'The city council has unanimously approved a comprehensive infrastructure improvement plan that will invest over 50 million euros in upgrading the city\'s roads, public transportation systems, and utilities. The three-year plan includes resurfacing major roadways, expanding public transportation routes, upgrading water and sewage systems, and improving pedestrian and cycling infrastructure. The first phase of improvements will begin in spring 2025, focusing on the downtown area and main thoroughfares. These improvements are expected to enhance traffic flow, improve public safety, and support the city\'s growing population.'
    },
    {
      id: 4,
      title: 'New Park Opens in Residential District',
      date: 'November 28, 2024',
      category: 'Community',
      image: fallbackImages.news4,
      fallback: '/images/news-4.jpg',
      excerpt: 'A new 5-hectare park has opened in the northern residential district, featuring playgrounds, walking trails, and green spaces for families to enjoy.',
      content: 'Residents of the northern district now have a beautiful new park to enjoy. The 5-hectare park features modern playground equipment for children, well-maintained walking and jogging trails, picnic areas, and extensive green spaces. The park was designed with sustainability in mind, featuring native plant species and eco-friendly landscaping. Local residents have already begun using the park for morning walks, family outings, and community gatherings. The park is open daily from dawn to dusk and includes parking facilities and restroom amenities.'
    },
    {
      id: 5,
      title: 'City Library Launches Digital Services',
      date: 'November 20, 2024',
      category: 'Services',
      image: fallbackImages.news5,
      fallback: '/images/news-5.jpg',
      excerpt: 'The city library has launched new digital services, including e-book lending, online databases, and virtual programming for residents.',
      content: 'The Liepaja City Library has expanded its services with a comprehensive digital platform. Residents can now access thousands of e-books and audiobooks, research databases, online courses, and virtual programming from the comfort of their homes. The library has also introduced a mobile app that allows users to browse the catalog, reserve books, and access digital resources. Library cardholders can borrow up to 10 digital items at a time, with automatic returns after the lending period. The library staff has also increased virtual programming, including online book clubs, author talks, and educational workshops.'
    },
    {
      id: 6,
      title: 'Sustainability Initiative Launched',
      date: 'November 15, 2024',
      category: 'Environment',
      image: fallbackImages.news6,
      fallback: '/images/news-6.jpg',
      excerpt: 'The city has launched a new sustainability initiative focused on reducing carbon emissions, improving recycling programs, and promoting green energy.',
      content: 'The city has announced a comprehensive sustainability initiative aimed at reducing carbon emissions by 40% over the next decade. The initiative includes expanding recycling programs, installing solar panels on municipal buildings, promoting electric vehicle use, and implementing energy-efficient practices across city operations. The program also includes educational components to help residents reduce their environmental impact. The city has partnered with local businesses and organizations to create a network of sustainability champions who will help spread awareness and implement green practices throughout the community.'
    }
  ];

  return (
    <div className="news-page">
      <section className="page-hero">
        <div className="container">
          <h1>News & Updates</h1>
          <p>Stay informed about what's happening in our city</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="news-grid">
            {newsItems.map(item => (
              <article key={item.id} className="news-card">
                <div className="news-card-image">
                  <ImageWithFallback src={item.image} alt={item.title} fallback={item.fallback} />
                  <span className="news-category">{item.category}</span>
                </div>
                <div className="news-card-content">
                  <span className="news-date">{item.date}</span>
                  <h2>{item.title}</h2>
                  <p className="news-excerpt">{item.excerpt}</p>
                  <div className="news-full-content">
                    <p>{item.content}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;


