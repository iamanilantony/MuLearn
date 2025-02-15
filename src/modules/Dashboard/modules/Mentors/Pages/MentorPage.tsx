import type React from "react";
import { useState } from "react";
import styles from "./MentorPage.module.css";
import { FiSearch } from "react-icons/fi";
import profileImage from "../assets/ProfileImages/10496279.jpg";
import MentorCard from "../components/MentorCard";

// Mock mentor data
const mockMentors: Mentor[] = [
    {
        id: 1,
        name: "Awin Das R",
        role: "Founder @TechInnovate",
        expertise: ["Web Development", "Entrepreneurship", "Cyber Security"],
        image: profileImage
    },
    {
        id: 2,
        name: "Sarah Johnson",
        role: "CTO @AIStartup",
        expertise: ["AI", "Machine Learning", "Tech Leadership"],
        image: profileImage
    },
    {
        id: 3,
        name: "Mike Chen",
        role: "Director of Engineering @BigTech",
        expertise: [
            "System Architecture",
            "Team Management",
            "Cloud Computing"
        ],
        image: profileImage
    },
    {
        id: 4,
        name: "Elena Rodriguez",
        role: "Founder & CEO @CyberShield",
        expertise: ["Cyber Security", "Blockchain", "Business Strategy"],
        image: profileImage
    },
    {
        id: 5,
        name: "James Wilson",
        role: "Serial Entrepreneur",
        expertise: ["Entrepreneurship", "Product Strategy", "Venture Capital"],
        image: profileImage
    }
];

const MentorSearchPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const filteredMentors = mockMentors.filter(
        mentor =>
            mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            mentor.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
            mentor.expertise.some(exp =>
                exp.toLowerCase().includes(searchTerm.toLowerCase())
            )
    );

    return (
        <div className={styles.pageContainer}>
            <div className={styles.searchContainer}>
                <FiSearch className={styles.searchIcon} />
                <input
                    type="text"
                    placeholder="Search for Mentors"
                    className={styles.searchInput}
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </div>
            <div className={styles.mentorGrid}>
                {filteredMentors.length > 0 ? (
                    filteredMentors.map((mentor: Mentor) => (
                        <MentorCard key={mentor.id} mentor={mentor} />
                    ))
                ) : (
                    <p className={styles.noResultsText}>
                        No mentors found. Try a different search.
                    </p>
                )}
            </div>
        </div>
    );
};

export default MentorSearchPage;
