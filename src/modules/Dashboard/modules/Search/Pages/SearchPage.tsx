import type React from "react";
import { useState } from "react";
import styles from "./SearchPage.module.css";
import { FiSearch } from "react-icons/fi";
import profileImage from "../assets/ProfileImages/10496279.jpg";
import UserCard from "../components/UserCard";

// Define the User interface
interface User {
    id: number;
    name: string;
    college: string;
    interests: string[];
    karma: number;
    image: string;
}

// Mock user data
const mockUsers: User[] = [
    {
        id: 1,
        name: "AwinDas R",
        college: "St. Joseph's College of Engineering",
        interests: ["Web Dev", "AI", "Cyber Security"],
        karma: 15000,
        image: profileImage
    },
    {
        id: 2,
        name: "Bob Smith",
        college: "Stanford",
        interests: ["AI", "Machine Learning"],
        karma: 22000,
        image: "/placeholder.svg?height=100&width=100"
    },
    {
        id: 3,
        name: "Charlie Brown",
        college: "Harvard",
        interests: ["Web Dev", "UI/UX"],
        karma: 18000,
        image: "/placeholder.svg?height=100&width=100"
    },
    {
        id: 4,
        name: "Diana Prince",
        college: "CalTech",
        interests: ["Cyber Security", "Blockchain"],
        karma: 25000,
        image: "/placeholder.svg?height=100&width=100"
    },
    {
        id: 5,
        name: "Ethan Hunt",
        college: "Carnegie Mellon",
        interests: ["AI", "Robotics"],
        karma: 30000,
        image: "/placeholder.svg?height=100&width=100"
    }
];

const SearchPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const filteredUsers = mockUsers.filter(
        user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.college.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.interests.some(interest =>
                interest.toLowerCase().includes(searchTerm.toLowerCase())
            )
    );

    return (
        <div className={styles.pageContainer}>
            <div className={styles.searchContainer}>
                <FiSearch className={styles.searchIcon} />
                <input
                    type="text"
                    placeholder="Search for users"
                    className={styles.searchInput}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className={styles.userGrid}>
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
                ) : (
                    <p className={styles.noResultsText}>
                        No users found. Try a different search.
                    </p>
                )}
            </div>
        </div>
    );
};

export default SearchPage;
