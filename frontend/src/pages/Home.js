import React from 'react';
import { Link } from 'react-router-dom';

// Mock hotel data
const mockHotels = [
  {
    _id: '1',
    name: 'Grand Hotel',
    location: 'New York',
    description: 'Luxury hotel with great amenities',
    amenities: ['WiFi', 'Pool'],
  },
  {
    _id: '2',
    name: 'Ocean View Resort',
    location: 'Miami',
    description: 'Beachfront resort',
    amenities: ['Beach Access', 'Spa'],
  },
];

function Home() {
  return (
    <div>
      <h1>Hotel Booking System</h1>
      <h2>Available Hotels</h2>
      {mockHotels.length === 0 ? (
        <p>No hotels available</p>
      ) : (
        <ul>
          {mockHotels.map((hotel) => (
            <li key={hotel._id}>
              <h3>
                <Link to={`/rooms/${hotel._id}`}>{hotel.name}</Link>
              </h3>
              <p>Location: {hotel.location}</p>
              <p>Description: {hotel.description}</p>
              <p>Amenities: {hotel.amenities.join(', ')}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;