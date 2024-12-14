import { Keywords } from "./components/keywords";
import { ProfileCard } from "./components/profilecard";
import { Section } from "./components/section";

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

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <Section title="Mentor Details" className="space-y-6">
          <p className="text-gray-600">
            Here to help? Our Mentors are here to help you get all your doubts
            cleared and help you along your journey. Join in for our office
            hours and get all your doubts cleared.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mentors.map((mentor) => (
              <ProfileCard key={mentor.name} {...mentor} />
            ))}
          </div>
        </Section>

        <div className="grid gap-8 md:grid-cols-2">
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

        <div className="grid gap-8 md:grid-cols-3">
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
