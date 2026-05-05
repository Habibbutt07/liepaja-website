import React from 'react';
import './Procurement.css';

const Procurement = () => {
  const procurements = [
    {
      id: 1,
      title: 'Road Maintenance Services',
      number: 'PR-2024-001',
      status: 'Open',
      deadline: '2024-12-31',
      description: 'Annual road maintenance and repair services for city streets.'
    },
    {
      id: 2,
      title: 'IT Equipment Supply',
      number: 'PR-2024-002',
      status: 'Open',
      deadline: '2024-12-20',
      description: 'Supply of computer equipment and IT infrastructure for city offices.'
    },
    {
      id: 3,
      title: 'Building Cleaning Services',
      number: 'PR-2024-003',
      status: 'Closed',
      deadline: '2024-11-30',
      description: 'Professional cleaning services for municipal buildings.'
    },
    {
      id: 4,
      title: 'Waste Management Services',
      number: 'PR-2024-004',
      status: 'Open',
      deadline: '2025-01-15',
      description: 'Comprehensive waste collection and management services.'
    },
    {
      id: 5,
      title: 'Public Transportation Vehicles',
      number: 'PR-2024-005',
      status: 'Open',
      deadline: '2025-02-01',
      description: 'Procurement of new buses for public transportation system.'
    },
    {
      id: 6,
      title: 'Park Maintenance Equipment',
      number: 'PR-2024-006',
      status: 'Closed',
      deadline: '2024-10-15',
      description: 'Garden and park maintenance equipment and tools.'
    }
  ];

  return (
    <div className="procurement-page">
      <section className="page-hero">
        <div className="container">
          <h1>Procurement</h1>
          <p>Public procurement opportunities and tenders</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="procurement-intro">
            <p>
              The City of Liepaja regularly publishes procurement opportunities for various goods, 
              services, and works. All procurement procedures are conducted in accordance with 
              applicable laws and regulations.
            </p>
          </div>
          <div className="procurement-grid">
            {procurements.map(item => (
              <div key={item.id} className="procurement-card">
                <div className="procurement-header">
                  <span className={`procurement-status ${item.status.toLowerCase()}`}>
                    {item.status}
                  </span>
                  <span className="procurement-number">{item.number}</span>
                </div>
                <h3>{item.title}</h3>
                <p className="procurement-description">{item.description}</p>
                <div className="procurement-footer">
                  <span className="procurement-deadline">
                    <strong>Deadline:</strong> {item.deadline}
                  </span>
                  <button className="btn btn-secondary">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Procurement;


