import React from 'react';
import { useParams } from 'react-router-dom';

const mockRooms = [
  {
    _id: '101',
    hotelId: '1',
    roomNumber: '101',
    type: 'Single',
    price: 100,
    isAvailable: true,
  },
  {
    _id: '102',
    hotelId: '1',
    roomNumber: '102',
    type: 'Double',
    price: 150,
    isAvailable: false,
  },
  {
    _id: '201',
    hotelId: '2',
    roomNumber: '201',
    type: 'Suite',
    price: 200,
    isAvailable: true,
  },
];

function Rooms() {
  const { hotelId } = useParams();
  const rooms = mockRooms.filter((room) => room.hotelId === hotelId);

  return (
    <div className="container">
      <h2 className="my-4">Rooms for Hotel</h2>
      {rooms.length === 0 ? (
        <p>No rooms available</p>
      ) : (
        <ul className="list-group">
          {rooms.map((room) => (
            <li key={room._id} className="list-group-item">
              <p>Room Number: {room.roomNumber}</p>
              <p>Type: {room.type}</p>
              <p>Price: ${room.price}/night</p>
              <p>Status: {room.isAvailable ? 'Available' : 'Booked'}</p>
              {room.isAvailable && (
                <button
                  className="btn btn-primary mt-2"
                  onClick={() => alert(`Booked Room ${room.roomNumber}!`)}
                >
                  Book
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Rooms;