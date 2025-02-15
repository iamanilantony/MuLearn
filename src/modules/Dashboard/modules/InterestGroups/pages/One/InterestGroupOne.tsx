import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Rocket, Calendar, Users, Trophy, BookOpen, Building } from 'lucide-react';
import styles from './InterestGroup.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function InterestGroupOne() {
  const upcomingEvents = [
    {
      title: "Space Exploration Summit 2024",
      date: "April 15, 2024",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920",
    },
    {
      title: "Mars Colony Workshop",
      date: "May 1, 2024",
      image: "https://images.unsplash.com/photo-1614728894747-a83421789f10?q=80&w=1920",
    },
    {
      title: "Astronomy Night",
      date: "May 15, 2024",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1920",
    },
  ];

  const meetups = [
    {
      title: "Weekly Space Tech Discussion",
      date: "Every Thursday",
      location: "Virtual",
      attendees: 45,
      description: "Join us for weekly discussions about latest developments in space technology.",
    },
    {
      title: "Telescope Workshop",
      date: "March 20, 2024",
      location: "City Observatory",
      attendees: 30,
      description: "Hands-on workshop about telescope operation and maintenance.",
    },
    {
      title: "Space Photography Session",
      date: "March 25, 2024",
      location: "Dark Sky Park",
      attendees: 25,
      description: "Learn astrophotography techniques from experts.",
    },
  ];

  const mentors = [
    {
      name: "Dr. Sarah Johnson",
      role: "Astrophysicist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400",
      expertise: "Planetary Science",
    },
    {
      name: "Prof. Michael Chen",
      role: "Aerospace Engineer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400",
      expertise: "Rocket Propulsion",
    },
    {
      name: "Dr. Emily Williams",
      role: "Astrobiologist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400",
      expertise: "Extraterrestrial Life",
    },
  ];

  const achievements = [
    {
      title: "NASA Partnership",
      description: "Official partnership with NASA for educational programs",
      date: "2023",
    },
    {
      title: "Space Research Grant",
      description: "Secured $1M research grant for community projects",
      date: "2023",
    },
    {
      title: "Student Success",
      description: "5 members accepted to Space Studies Program",
      date: "2024",
    },
  ];

  const blogs = [
    {
      title: "The Future of Space Travel",
      author: "Dr. Sarah Johnson",
      date: "March 1, 2024",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=400",
    },
    {
      title: "Living on Mars: Challenges and Solutions",
      author: "Prof. Michael Chen",
      date: "February 15, 2024",
      image: "https://images.unsplash.com/photo-1672363103461-b144d53b5589?q=80&w=400",
    },
    {
      title: "Discovering Exoplanets",
      author: "Dr. Emily Williams",
      date: "February 1, 2024",
      image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=400",
    },
  ];

  const partners = [
    {
      name: "NASA",
      logo: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?q=80&w=200",
    },
    {
      name: "SpaceX",
      logo: "https://images.unsplash.com/photo-1517976547714-720226b864c1?q=80&w=200",
    },
    {
      name: "ESA",
      logo: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?q=80&w=200",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Slider */}
      <div className={styles.banner}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
        >
          {upcomingEvents.map((event, index) => (
            <SwiperSlide key={index}>
              <div
                className={styles.slide}
                style={{ backgroundImage: `url(${event.image})` }}
              >
                <div className={styles.slideContent}>
                  <h2 className="text-4xl font-bold mb-2">{event.title}</h2>
                  <p className="text-xl">{event.date}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Partners Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Building className="w-6 h-6 mr-2" />
            <h2 className="text-2xl font-bold">Our Partners</h2>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={`h-20 object-contain ${styles.partnerLogo}`}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Meetups Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Calendar className="w-6 h-6 mr-2" />
            <h2 className="text-2xl font-bold">Upcoming Meetups</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {meetups.map((meetup, index) => (
              <div
                key={index}
                className={`${styles.card} bg-white rounded-lg shadow-lg p-6`}
              >
                <h3 className="text-xl font-bold mb-2">{meetup.title}</h3>
                <p className="text-gray-600 mb-2">{meetup.date}</p>
                <p className="text-gray-600 mb-2">{meetup.location}</p>
                <p className="text-gray-600 mb-4">
                  <Users className="inline w-4 h-4 mr-1" />
                  {meetup.attendees} attendees
                </p>
                <p className="text-gray-700">{meetup.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mentors Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Users className="w-6 h-6 mr-2" />
            <h2 className="text-2xl font-bold">Our Mentors</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className={`${styles.mentorCard} bg-white rounded-lg shadow-lg overflow-hidden`}
              >
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{mentor.name}</h3>
                  <p className="text-gray-600 mb-2">{mentor.role}</p>
                  <p className="text-gray-700">{mentor.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Trophy className="w-6 h-6 mr-2" />
            <h2 className="text-2xl font-bold">Achievements</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`${styles.achievementCard} bg-white rounded-lg shadow-lg p-6`}
              >
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-600 mb-2">{achievement.date}</p>
                <p className="text-gray-700">{achievement.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <BookOpen className="w-6 h-6 mr-2" />
            <h2 className="text-2xl font-bold">Latest Blog Posts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className={`${styles.blogCard} bg-white rounded-lg shadow-lg overflow-hidden`}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-1">By {blog.author}</p>
                  <p className="text-gray-500">{blog.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default InterestGroupOne;