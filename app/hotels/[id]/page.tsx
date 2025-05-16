'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Calendar, Users, ArrowLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from 'sonner';

const hotels = {
  'sudarshan': {
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
  'inn': {
    name: 'Sudarshan INN',
    location: 'Historic District',
    description: 'A boutique experience combining modern comfort with traditional hospitality.',
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
  'shree': {
    name: 'Shreeji Dhaam',
    location: 'Riverside Area',
    description: 'Your sanctuary of peace and luxury.',
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
};

export default function HotelRoomsPage() {
  const params = useParams();
  const router = useRouter();
  const hotelId = params.id as string;
  const hotel = hotels[hotelId as keyof typeof hotels];

  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '',
    roomType: ''
  });

  if (!hotel) {
    router.push('/hotels');
    return null;
  }

  const handleBooking = () => {
    toast.success('Booking confirmed! Check your email for details.');
  };

  return (
    <main className="min-h-screen py-16 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <Button
          variant="ghost"
          className="mb-8"
          onClick={() => router.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Hotels
        </Button>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="aspect-video rounded-lg overflow-hidden"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="object-cover w-full h-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <h1 className="text-4xl font-bold">{hotel.name}</h1>
            <p className="text-muted-foreground">{hotel.location}</p>
            <p className="text-lg">{hotel.description}</p>
          </motion.div>
        </div>

        <h2 className="text-2xl font-semibold mb-8">Available Rooms</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {hotel.rooms.map((room) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <div className="aspect-video">
                  <img
                    src={room.image}
                    alt={room.type}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{room.type}</CardTitle>
                  <CardDescription>${room.price} per night</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{room.description}</p>
                  <div className="space-y-4">
                    <h4 className="font-medium">Amenities:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {room.amenities.map((amenity) => (
                        <li key={amenity} className="flex items-center text-sm">
                          <Check className="mr-2 h-4 w-4" />
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full mt-6">Book Now</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Book {room.type}</DialogTitle>
                        <DialogDescription>
                          Fill in the details below to complete your booking
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Check-in Date</label>
                          <Input
                            type="date"
                            value={bookingData.checkIn}
                            onChange={(e) => setBookingData({ ...bookingData, checkIn: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Check-out Date</label>
                          <Input
                            type="date"
                            value={bookingData.checkOut}
                            onChange={(e) => setBookingData({ ...bookingData, checkOut: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Number of Guests</label>
                          <Select
                            value={bookingData.guests}
                            onValueChange={(value) => setBookingData({ ...bookingData, guests: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select guests" />
                            </SelectTrigger>
                            <SelectContent>
                              {[1, 2, 3, 4].map((num) => (
                                <SelectItem key={num} value={num.toString()}>
                                  {num} {num === 1 ? 'Guest' : 'Guests'}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <Button className="w-full" onClick={handleBooking}>
                          Confirm Booking
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}