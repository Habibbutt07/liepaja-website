import React from 'react';
import './Documents.css';

const Documents = () => {
  const documentCategories = [
    {
      id: 1,
      title: 'City Regulations',
      icon: '📜',
      documents: [
        'City Charter',
        'Municipal Code',
        'Zoning Regulations',
        'Building Codes',
        'Traffic Regulations'
      ]
    },
    {
      id: 2,
      title: 'Annual Reports',
      icon: '📊',
      documents: [
        'Annual Budget Report 2024',
        'Annual Activity Report 2024',
        'Financial Statements 2024',
        'Strategic Plan 2024-2027',
        'Sustainability Report 2024'
      ]
    },
    {
      id: 3,
      title: 'Meeting Minutes',
      icon: '📝',
      documents: [
        'City Council Minutes - December 2024',
        'City Council Minutes - November 2024',
        'Planning Commission Minutes',
        'Budget Committee Minutes',
        'Public Hearing Records'
      ]
    },
    {
      id: 4,
      title: 'Official Forms',
      icon: '📋',
      documents: [
        'Building Permit Application',
        'Business License Application',
        'Event Permit Application',
        'Parking Permit Application',
        'Freedom of Information Request'
      ]
    },
    {
      id: 5,
      title: 'Policies & Procedures',
      icon: '📖',
      documents: [
        'Public Safety Policy',
        'Environmental Policy',
        'Procurement Policy',
        'Human Resources Policy',
        'IT Security Policy'
      ]
    },
    {
      id: 6,
      title: 'Legal Documents',
      icon: '⚖️',
      documents: [
        'City Contracts',
        'Service Agreements',
        'Land Use Agreements',
        'Legal Opinions',
        'Court Documents'
      ]
    }
  ];

  return (
    <div className="documents-page">
      <section className="page-hero">
        <div className="container">
          <h1>Documents</h1>
          <p>Official documents, forms, and publications</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="documents-intro">
            <p>
              Access official city documents, forms, reports, and publications. All documents 
              are available for public review and download.
            </p>
          </div>
          <div className="documents-grid">
            {documentCategories.map(category => (
              <div key={category.id} className="document-category-card">
                <div className="document-category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
                <ul className="document-list">
                  {category.documents.map((doc, index) => (
                    <li key={index}>
                      <a href="#" className="document-link">
                        {doc}
                        <span className="download-icon">⬇</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documents;


