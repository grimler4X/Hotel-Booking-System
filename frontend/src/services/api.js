// Mock API for now
export const getHotels = async () => {
    return [
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
  };
  
  export const getRooms = async (hotelId) => {
    const mockRooms = [
      { _id: '101', hotelId: '1', roomNumber: '101', type: 'Single', price: 100, isAvailable: true },
      { _id: '102', hotelId: '1', roomNumber: '102', type: 'Double', price: 150, isAvailable: false },
      { _id: '201', hotelId: '2', roomNumber: '201', type: 'Suite', price: 200, isAvailable: true },
    ];
    return mockRooms.filter((room) => room.hotelId === hotelId);
  };