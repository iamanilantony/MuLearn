import { Keywords } from "./components/keywords";
import { ProfileCard } from "./components/profilecard";
import { Section } from "./components/section";
import fvimg from "../assets/fvimg.png";
import pygammerLogo from "../assets/pygammer.png";
import styles from "./index.module.css";
import { BiCalendar, BiTime, BiMap } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Dashboard() {
  const mentors = [
    {
      name: "Shameem Hyder",
      role: "Founder & CEO, Programmer",
      imageUrl: "/placeholder.svg?height=48&width=48",
    },
    {
      name: "Arjun A G",
      role: "Software Engineer (Lead/Sr), Programmer",
      imageUrl: "/placeholder.svg?height=48&width=48",
    },
    {
      name: "Altaf Shaikh",
      role: "Web Development",
      imageUrl: "/placeholder.svg?height=48&width=48",
    },
    {
      name: "Ganesh Kumar",
      role: "Web Development",
      imageUrl: "/placeholder.svg?height=48&width=48",
    },
    {
      name: "Mujeed Rahman",
      role: "Web Development",
      imageUrl: "/placeholder.svg?height=48&width=48",
    },
  ];

  const groupLeads = [
    {
      name: "Aswini Anil",
      role: "Mobile Engineering College,Thiruvananthapuram",
      imageUrl: "/placeholder.svg?height=48&width=48",
    },
    {
      name: "Adil S",
      role: "Govt Engineering College,Idukki",
      imageUrl: "/placeholder.svg?height=48&width=48",
    },
  ];

  const opportunities = [
    "Full Stack Web Developer",
    "Android Developer",
    "Frontend Developer",
    "Web Designer",
    "Backend Developer",
  ];

  const topPeople = [
    { name: "Alex Simons", link: "Click Here" },
    { name: "Ty Bertram", link: "Click Here" },
    { name: "Guillermo Rauch", link: "Click Here" },
    { name: "FreeCodeCamp", link: "Click Here" },
    { name: "100DaysOfCode", link: "Click Here" },
  ];

  const topBlogs = [
    { name: "A List Apart", link: "Click Here" },
    { name: "Codrops", link: "Click Here" },
    { name: "CSS-Tricks", link: "Click Here" },
  ];

  const keywords = [
    "APIs",
    "Algorithm",
    "API",
    "Infrastructure",
    "Deployment",
    "Domain Name",
    "HTTP",
    "SSL",
    "DNS",
    "Domain Name",
    "MVC",
    "SSL",
  ];

  // code for learning circles start
  const learningCircles = [
    {
      id: 1,
      title: "Title 1",
      description:
        "In feugiat orci condimentum. Integer suscipit sollicitudin odis, non vulputat neque tempus ut.",
      date: "12 Dec 2024",
      time: "10:00 AM",
      location: "Room 101",
    },
    {
      id: 2,
      title: "Title 2",
      description:
        "In feugiat orci condimentum. Integer suscipit sollicitudin odis, non vulputat neque tempus ut.",
      date: "13 Dec 2024",
      time: "2:00 PM",
      location: "Room 102",
    },
    {
      id: 3,
      title: "Title 3",
      description:
        "In feugiat orci condimentum. Integer suscipit sollicitudin odis, non vulputat neque tempus ut.",
      date: "14 Dec 2024",
      time: "3:00 PM",
      location: "Room 103",
    },
    {
      id: 4,
      title: "Title 4",
      description:
        "In feugiat orci condimentum. Integer suscipit sollicitudin odis, non vulputat neque tempus ut.",
      date: "15 Dec 2024",
      time: "4:00 PM",
      location: "Room 104",
    },
    //create more objects
    {
      id: 5,
      title: "Title 5",
      description:
        "In feugiat orci condimentum. Integer suscipit sollicitudin odis, non vulputat neque tempus ut.",
      date: "16 Dec 2024",
      time: "5:00 PM",
      location: "Room 105",
    },
    {
      id: 6,
      title: "Title 6",
      description:
        "In feugiat orci condimentum. Integer suscipit sollicitudin odis, non vulputat neque tempus ut.",
      date: "17 Dec 2024",
      time: "6:00 PM",
      location: "Room 106",
    },
  ];
  // code for learning circles end

  return (
    <div className={`${styles.container} min-h-screen p-4 md:p-8`}>
      {/* new code start */}
      <div className="flex">
        <div className={styles.contentSide}>
          <h1 className={styles.title}>Web Development</h1>

          <p className={styles.description}>
            Ever wondered how web development works? Learn everything about how
            all your get lectures from A to Z. Direct student's work management
            system along with scheduling and time save lectures. Our development
            team has taken care and understand your needs to providing better
            data functionalities.
          </p>

          <div className={styles.offerInfo}>
            <span className={styles.highlight}>Offers From:</span> Display Till
            All Sit Record Lobby
            <br />
            <span className={styles.highlight}>Last Week Record:</span> Today
            And Till Storage Week
          </div>

          <button className={styles.primaryButton}>Discover More</button>
        </div>
        <div className={styles.imageSide}>
          <div className={styles.heroImage}>
            <img
              src={fvimg}
              alt="Web Development Illustration"
              className={`${styles.mainImage}`}
            />
          </div>
        </div>
      </div>
      <div className="py-4 md:py-8">
        {/* Section Title */}
        <h2 className="text-2xl font-bold text-orange-500 mb-4 md:mb-6 ml-0 text-left">
          Community Partners
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {/* Placeholder Boxes */}
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center shadow-lg rounded-lg p-2 md:p-4"
            >
              <img
                className="w-full max-w-[200px]"
                src={pygammerLogo}
                alt="Pygrammers Logo"
              />
            </div>
          ))}
        </div>
      </div>

      {/* learning circle div */}
      <div className="w-full max-w-[90rem]">
        <h2 className="text-2xl font-bold text-orange-500 mb-4 md:mb-6 ml-0 text-left">
          Learning Circles
        </h2>

        <div className="">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation
            modules={[Navigation, Pagination]}
          >
            {learningCircles.map((circle) => (
              <SwiperSlide>
                <div
                  key={circle.id}
                  className="w-full  flex-shrink-0 bg-white rounded-lg drop-shadow-xl my-4 p-6"
                >
                  <h3 className="text-xl font-semibold mb-2">{circle.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {circle.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <BiCalendar className="w-5 h-5" />
                      <span className="text-sm">{circle.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <BiTime className="w-5 h-5" />
                      <span className="text-sm">{circle.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <BiMap className="w-5 h-5" />
                      <span className="text-sm">{circle.location}</span>
                    </div>
                  </div>

                  <button className="bg-[#FF6B35] text-white px-4 py-2 rounded hover:bg-[#e85f2f] transition-colors">
                    Join Now
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* muchallengs */}
      <div className="py-4 md:py-8 w-full">
        <h2 className="text-2xl font-bold text-orange-500 mb-4 md:mb-6 ml-0 text-left">
          µ Challenges
        </h2>
        <div className="flex gap-4 md:gap-6 w-full">
          {/* Placeholder Boxes */}
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center shadow-xl rounded-lg p-4 md:p-8 w-full gap-4 md:gap-8"
            >
              <div className="text-2xl md:text-4xl font-bold text-orange-500 text-center">
                Preview card <br />
                component
              </div>
              <div className="flex justify-end w-full">
                <button className="bg-[#FF6B35] text-white px-3 py-1.5 md:px-4 md:py-2 rounded hover:bg-[#e85f2f] transition-colors">
                  Join Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Section
        className="text-left flex flex-col justify-start items-start py-4 md:py-8 space-y-4 md:space-y-8"
        title="Pre-requisites"
      >
        <p className="text-gray-600">
          Lorem ipsum dolor rt Suspendisse vitae risus euismod, viverra eros ut,
          aliquet nunc. Proin aliquet malesuada tincidunt. Sed euismod erat sit
          amet tortor rhoncus suscipit. Etiam sed enim non felis auctor cursus.
          Integer nec augue nec purus auctor tristique. Mauris at ullamcorper
          leo. Sed vitae metus felis. Nullam tincidunt ipsum sit amet nisl
          condimentum sollicitudin. Nam non mauris ut odio convallis convallis.
          Ut laoreet, lorem eget suscipit pharetra, purus felis pharetra odio,
          non tincidunt erat lorem at orci. Sed et augue auctor, efficitur ante
          nec, cursus felis. Pellentesque et nunc vel nunc accumsan fermentum.
          Cras in lorem euismod, condimentum urna at, fermentum sapien.
        </p>
      </Section>
      {/* new code end */}

      <div className="max-w-7xl mx-auto space-y-4 md:space-y-8">
        <Section title="Mentor Details" className="space-y-4 md:space-y-6">
          <p className="text-gray-600">
            Here to help? Our Mentors are here to help you get all your doubts
            cleared and help you along your journey. Join in for our office
            hours and get all your doubts cleared.
          </p>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {mentors.map((mentor) => (
              <ProfileCard key={mentor.name} {...mentor} />
            ))}
          </div>
        </Section>

        <div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2">
          <Section title="Interest Group Leads">
            <p className="text-gray-600">
              Interest group leads manage the activities and events within
              interest groups and serve as a point of contact for students. They
              help coordinate activities and provide information about new
              interests.
            </p>
            <div className="space-y-4 mt-4">
              {groupLeads.map((lead) => (
                <ProfileCard key={lead.name} {...lead} />
              ))}
            </div>
          </Section>

          <Section title="Interest Group Leaderboard">
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur vitae duis eu turpis
              vitae. Ut aliquet tristique ullamcorper. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Integer dictum vel purus ut porta.
            </p>
            <div className="aspect-square bg-white rounded-lg border mt-4" />
          </Section>
        </div>

        <div className="grid gap-4 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <Section title="Opportunities">
            <p className="text-gray-600">
              Getting a new skill always brings in possible opportunities. Here
              are possible opportunities that you could grab by learning this
              skill.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              {opportunities.map((opportunity) => (
                <li key={opportunity} className="text-gray-600">
                  {opportunity}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Top People to Follow">
            <p className="text-gray-600">
              These are list of people you should be following/connecting to
              learn as well as stay updated!
            </p>
            <ul className="space-y-1">
              {topPeople.map((person) => (
                <li key={person.name} className="text-gray-600">
                  {person.name} -{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    {person.link}
                  </a>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Top Blogs to Follow">
            <p className="text-gray-600">
              Learning through reading is a great way to improve your knowledge
              base. These are trusted blogs and have quality content and have
              lots of them!
            </p>
            <ul className="space-y-1">
              {topBlogs.map((blog) => (
                <li key={blog.name} className="text-gray-600">
                  {blog.name} -{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    {blog.link}
                  </a>
                </li>
              ))}
            </ul>
          </Section>
        </div>

        <Section title="Top Keywords">
          <p className="text-gray-600">
            Listed below are the top keywords that you should be looking out for
            while searching through internet!
          </p>
          <Keywords keywords={keywords} />
        </Section>
      </div>
    </div>
  );
}
