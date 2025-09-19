import React, { useState } from 'react';
import { 
  Heart, Truck, Users, Calendar, MapPin, Phone, Clock, Package, 
  CheckCircle, AlertCircle, User, Settings, BarChart3, Plus, 
  Search, Filter, Download, Star, Shield, Camera
} from 'lucide-react';
import './App.css';

const App = () => {
  const [activeRole, setActiveRole] = useState('donor');
  const [donationForm, setDonationForm] = useState({
    donorName: '', contactPhone: '', foodType: '', quantity: '', 
    description: '', pickupAddress: '', preferredTime: '', 
    expiryTime: '', urgency: 'medium', photos: []
  });

  const [donations] = useState([
    {
      id: 'DON001',
      donor: 'Green Valley Restaurant',
      foodType: 'Cooked Meals',
      quantity: '50 portions',
      pickupTime: '6:00 PM',
      location: '123 Main St',
      status: 'pending',
      urgency: 'high',
      expiry: '2 hours',
      phone: '+1234567890'
    },
    {
      id: 'DON002',
      donor: 'Fresh Market',
      foodType: 'Fresh Vegetables',
      quantity: '25 kg',
      pickupTime: '4:00 PM',
      location: '456 Oak Ave',
      status: 'assigned',
      urgency: 'medium',
      expiry: '6 hours',
      phone: '+1234567891'
    }
  ]);

  // Donor Dashboard
  const DonorDashboard = () => (
    <div className="dashboard">
      <div className="donor-hero">
        <h2>Make a Food Donation</h2>
        <p>Help reduce food waste and feed those in need</p>
      </div>

      <div className="stats-grid">
        <div className="stats-card">
          <Heart />
          <div>
            <h3>156</h3>
            <p>People Fed Today</p>
          </div>
        </div>
        <div className="stats-card">
          <Package />
          <div>
            <h3>23</h3>
            <p>Active Donations</p>
          </div>
        </div>
        <div className="stats-card">
          <CheckCircle />
          <div>
            <h3>89%</h3>
            <p>Success Rate</p>
          </div>
        </div>
      </div>

      <div className="donor-form">
        <h3><Plus /> New Food Donation</h3>
        <form>
          <input type="text" placeholder="Donor Name/Organization" 
            value={donationForm.donorName}
            onChange={(e) => setDonationForm({...donationForm, donorName: e.target.value})}
          />
          <input type="tel" placeholder="Contact Phone"
            value={donationForm.contactPhone}
            onChange={(e) => setDonationForm({...donationForm, contactPhone: e.target.value})}
          />
          <select
            value={donationForm.foodType}
            onChange={(e) => setDonationForm({...donationForm, foodType: e.target.value})}
          >
            <option value="">Select food type</option>
            <option value="cooked-meals">Cooked Meals</option>
            <option value="fresh-produce">Fresh Produce</option>
            <option value="packaged-food">Packaged Food</option>
            <option value="bakery">Bakery Items</option>
            <option value="dairy">Dairy Products</option>
          </select>
          <input type="text" placeholder="Quantity"
            value={donationForm.quantity}
            onChange={(e) => setDonationForm({...donationForm, quantity: e.target.value})}
          />
          <textarea placeholder="Description"
            value={donationForm.description}
            onChange={(e) => setDonationForm({...donationForm, description: e.target.value})}
          />
          <textarea placeholder="Pickup Address"
            value={donationForm.pickupAddress}
            onChange={(e) => setDonationForm({...donationForm, pickupAddress: e.target.value})}
          />
          <input type="time"
            value={donationForm.preferredTime}
            onChange={(e) => setDonationForm({...donationForm, preferredTime: e.target.value})}
          />
          <select
            value={donationForm.expiryTime}
            onChange={(e) => setDonationForm({...donationForm, expiryTime: e.target.value})}
          >
            <option value="">Best Before</option>
            <option value="1">1 hour</option>
            <option value="2">2 hours</option>
            <option value="4">4 hours</option>
            <option value="8">8 hours</option>
            <option value="24">24 hours</option>
          </select>
          <select
            value={donationForm.urgency}
            onChange={(e) => setDonationForm({...donationForm, urgency: e.target.value})}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <div className="upload-box">
            <Camera />
            <p>Click to upload food photos</p>
          </div>

          <button type="button" onClick={() => {
            alert("Donation submitted successfully!");
            setDonationForm({
              donorName: '', contactPhone: '', foodType: '', quantity: '', 
              description: '', pickupAddress: '', preferredTime: '', 
              expiryTime: '', urgency: 'medium', photos: []
            });
          }}>Submit Donation</button>
        </form>
      </div>
    </div>
  );

  // Manager Dashboard
  const ManagerDashboard = () => (
    <div className="dashboard">
      <div className="manager-hero">
        <h2>Manager Dashboard</h2>
        <p>Monitor and assign donation deliveries</p>
      </div>
      <div className="stats-grid">
        <div className="stats-card">
          <Heart />
          <div>
            <h3>250</h3>
            <p>People Fed Today</p>
          </div>
        </div>
        <div className="stats-card">
          <Package />
          <div>
            <h3>100</h3>
            <p>Active Donations</p>
          </div>
        </div>
        <div className="stats-card">
          <CheckCircle />
          <div>
            <h3>89%</h3>
            <p>Success Rate</p>
          </div>
        </div>
      </div>

      <div className="donation-list">
        {donations.map((d) => (
          <div key={d.id} className="donation-card">
            <h4>{d.donor}</h4>
            <p><strong>Food:</strong> {d.foodType} | {d.quantity}</p>
            <p><MapPin size={14} /> {d.location}</p>
            <p><Clock size={14} /> Pickup: {d.pickupTime}</p>
            <p><Phone size={14} /> {d.phone}</p>
            <p>Status: <span className={d.status}>{d.status}</span></p>
            <button>Assign Delivery</button>
          </div>
        ))}
      </div>
    </div>
  );

  // Delivery Partner Dashboard
  const DeliveryDashboard = () => (
    <div className="dashboard">
      <div className="delivery-hero">
        <h2>Delivery Partner</h2>
        <p>Pick up and deliver food donations</p>
      </div>

      <div className="donation-list">
        {donations.map((d) => (
          <div key={d.id} className="donation-card">
            <h4>{d.donor}</h4>
            <p><Package size={14} /> {d.foodType} | {d.quantity}</p>
            <p><MapPin size={14} /> {d.location}</p>
            <p><Clock size={14} /> Pickup: {d.pickupTime}</p>
            <button>Mark as Picked</button>
            <button>Mark as Delivered</button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <Heart />
          <span>FoodShare Network</span>
        </div>
        <div className="role-switcher">
          <button onClick={() => setActiveRole('donor')}>Donor Portal</button>
          <button onClick={() => setActiveRole('manager')}>Manager Dashboard</button>
          <button onClick={() => setActiveRole('delivery')}>Delivery Partner</button>
        </div>
      </header>

      <main className="main">
        {activeRole === 'donor' && <DonorDashboard />}
        {activeRole === 'manager' && <ManagerDashboard />}
        {activeRole === 'delivery' && <DeliveryDashboard />}
      </main>
    </div>
  );
};

export default App;
