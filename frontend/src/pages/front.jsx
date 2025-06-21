import React, { useState } from 'react';
import './front.css'; 
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import About from './about';
import { Link } from "react-router-dom";


const PitchPilot = () => {
  const [companies] = useState([
    {
      name: "F1Soft International",
      industry: "Financial Technology",
      employees: "500+ employees",
      location: "Kathmandu, Nepal",
      description: "Leading digital payment and financial software solutions provider in Nepal"
    },
    {
      name: "eSewa",
      industry: "Digital Payments",
      employees: "200-300 employees",
      location: "Kathmandu, Nepal",
      description: "Nepal's pioneering digital wallet and payment gateway platform"
    },
    {
      name: "Leapfrog Technology",
      industry: "Software Development",
      employees: "400+ employees",
      location: "Kathmandu, Nepal",
      description: "Custom software development and technology services with global clients"
    },
    {
      name: "CloudFactory",
      industry: "Business Process Outsourcing",
      employees: "2000+ employees",
      location: "Kathmandu, Nepal & Global",
      description: "Provides cloud-based workforce solutions for data labeling and processing"
    },
    {
      name: "Verisk Nepal",
      industry: "Data Analytics & Software",
      employees: "500+ employees",
      location: "Kathmandu, Nepal",
      description: "Global analytics and software solutions provider with large presence in Nepal"
    },
    {
      name: "Deerwalk",
      industry: "Healthcare Analytics",
      employees: "150-200 employees",
      location: "Kathmandu, Nepal & USA",
      description: "Healthcare analytics and software company focused on improving health outcomes"
    },
    {
      name: "ebank",
      industry: "Banking & Finance",
      employees: "100-150 employees",
      location: "Kathmandu, Nepal",
      description: "Nepali digital bank offering modern banking services and solutions"
    },
    {
      name: "IME Group",
      industry: "Financial Services & Remittance",
      employees: "500+ employees",
      location: "Kathmandu, Nepal",
      description: "Leading remittance, foreign exchange, and financial services provider in Nepal"
    },
    {
      name: "CloudAssist Nepal",
      industry: "IT Services & Cloud Solutions",
      employees: "50-100 employees",
      location: "Kathmandu, Nepal",
      description: "Providing cloud infrastructure, managed IT services, and consulting"
    },
    {
      name: "Pathao Nepal",
      industry: "Ride-Sharing & Logistics",
      employees: "100+ employees",
      location: "Kathmandu, Nepal",
      description: "Ride-sharing, delivery, and logistics platform expanding in Nepal"
    },
    {
      name: "Wlink Technology",
      industry: "Telecommunication & IT",
      employees: "200+ employees",
      location: "Kathmandu, Nepal",
      description: "Internet Service Provider and IT solutions company in Nepal"
    },
    {
      name: "Daraz Nepal",
      industry: "E-commerce",
      employees: "150-200 employees",
      location: "Kathmandu, Nepal",
      description: "Leading online marketplace and e-commerce platform in Nepal"
    },
    {
      name: "NepBay",
      industry: "E-commerce & Marketplace",
      employees: "50-100 employees",
      location: "Kathmandu, Nepal",
      description: "One of the earliest and popular e-commerce platforms in Nepal"
    }
  ]);

  return (
    <div className="front1">
      {/* Navigation */}
      <nav className="front2">
        <div className="front3">
          <div className="front4"></div>
          <div className="front5">
            <h1 className="front6">PitchPilot</h1>
            <p className="front7">Turn Any Company Into a Customer – In Seconds</p>
          </div>
        </div>
        
        <div className="front28">
  <Link to="/" className="front29">Home</Link>
  <Link to="/dashboard" className="front29">Dashboard</Link>
  <Link to="/about" className="front29">About Us</Link>
  <Link to="/login" className="front29">Login</Link>
  <Link to="/signup" className="front29">Signup</Link>
  
</div>
        
        {/* <div className="front8">
          <div className="front9">
            <span className="front10 front11">1</span>
            <span className="front10">2</span>
            <span className="front10">3</span>
          </div>
        </div> */}
        
        {/* <div className="front12">MVP Demo</div> */}
      </nav>

      {/* Header */}
      <header className="front13">
        <h2 className="front14">Find Your Target Companies</h2>
        <p className="front15">Search and filter companies to create personalized outreach</p>
      </header>

      {/* Filters */}
      <div className="front16">
        <input className="front17" type="text" placeholder="🔍 Search companies..." />
        <select className="front18">
          <option> All Locations</option>
          <option>San Francisco, CA</option>
          <option>New York, NY</option>
          <option>Austin, TX</option>
        </select>
        <select className="front18">
          <option>🏢 All Industries</option>
          <option>Software Development</option>
          <option>Financial Technology</option>
          <option>Healthcare Technology</option>
        </select>
      </div>

      {/* Company Grid */}
      <div className="front19">
        {companies.map((company, index) => (
          <div key={index} className="front20">
            <div className="front21">
              <h3 className="front22">{company.name}</h3>
              <span className="front23">{company.employees}</span>
            </div>
            
            <div className="front24">{company.industry}</div>
            <p className="front25">{company.description}</p>
            
            <div className="front26">{company.location}</div>
            
            <button className="front27">Select Company</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PitchPilot;