'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Calendar, Search } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const hotels = [
  {
    id: 'sudarshan',
    name: 'Sudarshan Hotel',
    location: 'Downtown Business District',
    description: 'Experience luxury at its finest with our signature property featuring panoramic city views and world-class amenities.',
    image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rooms: [
      {
        id: 'deluxe-1',
        type: 'Deluxe Room',
        price: 299,
        description: 'Spacious room with city view, king-size bed, and modern amenities',
        image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        amenities: ['Free Wi-Fi', 'Mini Bar', 'Room Service', 'Smart TV']
      },
      {
        id: 'suite-1',
        type: 'Executive Suite',
        price: 499,
        description: 'Luxury suite with separate living area and premium services',
        image: 'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        amenities: ['Free Wi-Fi', 'Mini Bar', 'Room Service', 'Smart TV', 'Jacuzzi']
      }
    ]
  },
  {
    id: 'inn',
    name: 'Sudarshan INN',
    location: 'Historic District',
    description: 'A boutique experience combining modern comfort with traditional hospitality, perfect for both business and leisure.',
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rooms: [
      {
        id: 'standard-1',
        type: 'Standard Room',
        price: 199,
        description: 'Comfortable room with essential amenities',
        image: 'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        amenities: ['Free Wi-Fi', 'Room Service', 'Smart TV']
      },
      {
        id: 'deluxe-2',
        type: 'Deluxe Room',
        price: 299,
        description: 'Spacious room with premium furnishings',
        image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        amenities: ['Free Wi-Fi', 'Mini Bar', 'Room Service', 'Smart TV']
      }
    ]
  },
  {
    id: 'shree',
    name: 'Shreeji Dhaam',
    location: 'Riverside Area',
    description: 'Your sanctuary of peace and luxury, offering an unforgettable stay with personalized service and elegant accommodations.',
    image: 'https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rooms: [
      {
        id: 'deluxe-3',
        type: 'Deluxe Room',
        price: 249,
        description: 'Well-appointed room with river view',
        image: 'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        amenities: ['Free Wi-Fi', 'Room Service', 'Smart TV']
      },
      {
        id: 'suite-2',
        type: 'Luxury Suite',
        price: 449,
        description: 'Premium suite with panoramic river views',
        image: 'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        amenities: ['Free Wi-Fi', 'Mini Bar', 'Room Service', 'Smart TV', 'Jacuzzi']
      }
    ]
  }
];

export default function HotelsPage() {
  const [selectedHotel, setSelectedHotel] = useState<string | null>(null);
  const [showRooms, setShowRooms] = useState<string | null>(null);

  const filteredHotels = selectedHotel
    ? hotels.filter(hotel => hotel.id === selectedHotel)
    : hotels;

  return (
    <main className="min-h-screen py-16 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Our Hotels</h1>

        {/* Filters */}
        <div className="mb-12 bg-card p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Select Hotel</label>
              <Select
                value={selectedHotel || undefined}
                onValueChange={setSelectedHotel}
              >
                <SelectTrigger>
                  <SelectValue placeholder="All Hotels" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Hotels</SelectItem>{" "}
                  {/* Use a non-empty value like "all" */}
                  {hotels.map((hotel) => (
                    <SelectItem key={hotel.id} value={hotel.id}>
                      {hotel.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Check-in Date</label>
              <Input type="date" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Check-out Date</label>
              <Input type="date" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Guests</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select guests" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} {num === 1 ? "Guest" : "Guests"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Hotel Listings */}
        <div className="space-y-12">
          {filteredHotels.map((hotel) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg overflow-hidden shadow-lg"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{hotel.name}</h2>
                  <p className="text-muted-foreground mb-4">{hotel.location}</p>
                  <p className="mb-6">{hotel.description}</p>
                  <Button
                    onClick={() =>
                      setShowRooms(showRooms === hotel.id ? null : hotel.id)
                    }
                    className="w-full md:w-auto"
                  >
                    {showRooms === hotel.id ? "Hide Rooms" : "View Rooms"}
                  </Button>
                </div>
              </div>

              {/* Rooms Section */}
              {showRooms === hotel.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-t"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-6">
                      Available Rooms
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {hotel.rooms.map((room) => (
                        <Card key={room.id} className="overflow-hidden">
                          <div className="aspect-video">
                            <img
                              src={room.image}
                              alt={room.type}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <CardHeader>
                            <CardTitle>{room.type}</CardTitle>
                            <CardDescription>
                              ${room.price} per night
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="mb-4">{room.description}</p>
                            <div className="space-y-2">
                              <h4 className="font-medium">Amenities:</h4>
                              <ul className="grid grid-cols-2 gap-2">
                                {room.amenities.map((amenity) => (
                                  <li
                                    key={amenity}
                                    className="flex items-center text-sm"
                                  >
                                    <span className="mr-2">•</span>
                                    {amenity}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <Button className="w-full mt-6">Book Now</Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}