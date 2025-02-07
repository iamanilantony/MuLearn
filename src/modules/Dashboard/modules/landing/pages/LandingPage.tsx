import React, { useState } from "react";
import communityImg from "./images/community.png";
import mentorsImg from "./images/mentors.png";
import askImg from "./images/ask.png";
import roadmapsImg from "./images/roadmaps.png";
import problemsImg from "./images/problems.png";
import feedImg from "./images/feed.png";
import styles from "./LandingPage.module.css";
import { Navigate, useNavigate } from "react-router-dom";
import LearningPathList from "../../LearningPaths/services/LearningPathList";
import { FaLinkedin, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import LearningPathCard from "../../LearningPaths/components/LearningPathCard";

const data = [
    {
        "label": "Members",
        "value": "43,994+"
    },
    {
        "label": "Learning Circles",
        "value": "2,133+"
    },
    {
        "label": "Colleges",
        "value": "1,929+"
    },
    {
        "label": "Companies",
        "value": "213+"
    },
    {
        "label": "Communities",
        "value": "30+"
    },
    {
        "label": "Events",
        "value": "200+"
    },
    {
        "label": "Interest Groups",
        "value": "22+"
    },
    {
        "label": "Total Karma Mined",
        "value": "17,906,847"
    },
    {
        "label": "Number of Proof of Works",
        "value": "203,480+"
    },
    {
        "label": "Number of Internships",
        "value": "2,000+"
    },
    {
        "label": "Jobs",
        "value": "1,000+"
    },
    {
        "label": "Products",
        "value": "100+"
    },
    {
        "label": "Worth of Gig Works",
        "value": "1Cr+"
    },
    {
        "label": "Enablers",
        "value": "511+"
    },
    {
        "label": "Mentors",
        "value": "383+"
    }
]


const MuLearnLanding = () => {
    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function NavLinks() {
        return (
            <>
                <li onClick={() => navigate("/dashboard/home")}>
                    Home
                </li>
                <li onClick={() => navigate("/dashboard/mentors")}>
                    Mentorship
                </li>
                <li onClick={() => navigate("/dashboard/learning-paths")}>
                    Learning Paths
                </li>
                <li onClick={() => navigate("/dashboard/learning-circles")}>
                    Learning Circles
                </li>
                <li onClick={() => navigate("/")}>
                    Why μLearn
                </li>
                <li onClick={() => navigate("/")}>
                    How it Works
                </li>
            </>
        )
    }

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className={styles.landingContainer}>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <img src='src/modules/Public/LearningCircles/Assets/µLearn.webp' alt="logo" width={"130px"} />
                </div>
                <ul className={styles.navLinks}>
                    <NavLinks />
                </ul>
                <div style={{display:'flex', alignItems: 'center'}}>

                {isMenuOpen && <div className={styles.navButtons}>
                        <button className={styles.loginBtn} onClick={() => navigate('/login')}>Login</button>
                    </div> }
                    {
                        isMenuOpen && (
                            <div className={styles.mobileNavLinks}>
                                {/* Close Button */}
                                <button className={styles.closeBtn} onClick={() => setIsMenuOpen(false)}>
                                    &times;
                                </button>
                                <NavLinks />
                                <div className={styles.navButtons}>
                        <button className={styles.loginBtn} onClick={() => navigate('/login')}>Login</button>
                            </div>
                            </div>
                        )
                    }
                    <div className={styles.hamburger} onClick={() => setIsMenuOpen(true)}>
                        &#9776;
                    </div>
                </div>

            </nav>
            <header className={styles.heroSection}>
                <div className={styles.heroLeft}>
                    <h1>Your ultimate gateway to <span className={styles.highlight}>peer-driven learning</span></h1>
                    <ul className={styles.highlightPoints}>
                        <li className={styles.higlightPointItems}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none"><path stroke="#467BFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.135 11.437 3.33 4.629c-.437-.783-.656-1.175-.619-1.495a1 1 0 0 1 .41-.697c.26-.189.71-.189 1.606-.189h2.235c.333 0 .5 0 .65.048a1 1 0 0 1 .357.205c.118.104.202.248.372.535L12 9.248l3.659-6.212c.169-.287.254-.43.37-.535a1 1 0 0 1 .359-.205c.15-.048.316-.048.65-.048h2.234c.897 0 1.345 0 1.607.189a1 1 0 0 1 .41.697c.036.32-.183.712-.62 1.495l-3.805 6.808M10.5 14.248l1.5-1v5m-1.25 0h2.5m3.346-7.096a6.5 6.5 0 1 1-9.192 9.192 6.5 6.5 0 0 1 9.192-9.192"></path></svg>
                            </div>
                            <p>Work on jobs, gigs, and projects with peers</p>
                        </li>
                        <li className={styles.higlightPointItems}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none"><path stroke="#0F6D39" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13.124 15.093 4.878 7.155m-7.121-7.155-4.879 7.155m8-8.8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm3.149-8.668L5.367 7.938c-.27.072-.406.109-.495.189a.5.5 0 0 0-.155.268c-.025.117.011.252.084.523l.88 3.284c.072.27.109.406.189.495a.5.5 0 0 0 .268.154c.117.025.252-.011.523-.084L18.445 9.61l-1.294-4.83Zm4.644 4.968c-1.082.29-1.623.434-2.093.335a2 2 0 0 1-1.07-.618c-.322-.357-.466-.898-.756-1.98l-.156-.58c-.29-1.082-.435-1.623-.335-2.092a2 2 0 0 1 .618-1.07c.357-.322.898-.467 1.98-.757.27-.072.406-.109.523-.084a.5.5 0 0 1 .268.155c.08.09.116.224.189.495l1.397 5.216c.073.27.11.406.084.523a.5.5 0 0 1-.154.268c-.09.08-.225.116-.495.189m-18.29 2.83 1.351-.362c.27-.073.406-.109.495-.19a.5.5 0 0 0 .155-.267c.025-.117-.011-.253-.084-.523L5.06 9.884c-.073-.27-.109-.406-.19-.495a.5.5 0 0 0-.267-.155c-.117-.025-.253.011-.523.084l-1.352.362c-.27.073-.406.109-.495.19a.5.5 0 0 0-.155.267c-.025.117.011.253.084.523l.362 1.352c.073.27.109.406.19.495a.5.5 0 0 0 .267.155c.117.025.253-.012.523-.084Z"></path></svg>
                            </div>
                            <p>Grow your network and opportunities</p>
                        </li>
                        <li className={styles.higlightPointItems}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none"><path stroke="#FFAF3A" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 5.248 3-3m0 0 3 3m-3-3v6m3 4v5.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311c-.642.327-1.482.327-3.162.327H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 19.968 2 19.128 2 17.448v-10.4c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311c.642-.327 1.482-.327 3.162-.327H12M2.146 20.174A4.002 4.002 0 0 1 6 17.248h7c.93 0 1.394 0 1.78.077a4 4 0 0 1 3.143 3.143c.077.386.077.85.077 1.78m-4-12.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0"></path></svg>
                            </div>
                            <p>Peer Learning Groups</p>
                        </li>
                        <li className={styles.higlightPointItems}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none"><path stroke="#334155" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 20.248H5a2 2 0 0 1-2-2v-14a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-1.5m-5.5-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 0h.021L8.83 22.44 6 19.612l3.02-3.02M12 19.249l3.193 3.193 2.828-2.829-3.02-3.02M9 6.249h6m-8 3.5h10"></path></svg>
                            </div>
                            <p>Get expert advice for career success</p>
                        </li>
                    </ul>
                    <div className={styles.ctaButtons}>
                        <button className={styles.joinBtn} onClick={() => navigate('/register')}>Join Now</button>
                        <button className={styles.downloadBtn} onClick={() => navigate('/dashboard/learning-paths')}>Learning Paths</button>
                    </div>
                </div>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureCard} style={{ backgroundColor: 'rgb(233 252 241)' }}>
                        <div>
                            <h3>Community</h3>
                            <p>Join 40,000+ learners & innovators.</p>
                        </div>
                        <img src={"https://www.propeers.in/images/small-card-3.svg"} width={"90px"} alt="Community" />
                    </div>
                    <div className={styles.featureCard} style={{ backgroundColor: 'rgb(255 204 247)' }}>
                        <div>
                            <h3>Mentors</h3>
                            <p>Connect with industry experts & educators.</p>
                        </div>
                        <img src={"https://www.propeers.in/images/Mentors-cuate.svg"} width={"90px"} alt="Mentors" />
                    </div>
                    <div className={styles.featureCard} style={{ backgroundColor: 'rgb(255 229 230)' }}>
                        <div>
                            <h3>Ask Anything</h3>
                            <p>Get guidance from experienced mentors.</p>
                        </div>
                        <img src={"https://www.propeers.in/images/rafiki.svg"} width={"90px"} alt="Ask Anything" />
                    </div>
                    <div className={styles.featureCard} style={{ backgroundColor: 'rgb(255 245 229)' }}>
                        <div>
                            <h3>Roadmaps</h3>
                            <p>Structured learning paths for skill mastery.</p>
                        </div>
                        <img src={"https://www.propeers.in/images/big-card-2.svg"} width={"90px"} alt="Roadmaps" />
                    </div>
                    <div className={styles.featureCard} style={{ backgroundColor: 'rgb(229 237 255)' }}>
                        <div>
                            <h3>Challenges</h3>
                            <p>Engage in real-world problem-solving.</p>
                        </div>
                        <img src={"https://www.propeers.in/images/big-card-1.svg"} width={"90px"} alt="Challenges" />
                    </div>
                    <div className={styles.featureCard} style={{ backgroundColor: 'rgb(148 163 184)' }}>
                        <div>
                            <h3>Feed</h3>
                            <p>Discover skill-based posts & insights.</p>
                        </div>
                        <img src={"https://www.propeers.in/images/cuate.svg"} width={"90px"} alt="Feed" />
                    </div>
                </div>
            </header>

            <section className={styles.topBottomGrid}>
                <div className={styles.roadMaps}>
                    <h1>
                        Structured learning paths, <span className={styles.highlight} style={{ fontWeight: '800' }}>Crafted by experts</span>
                    </h1>
                    <p style={{ textAlign: 'center' }}>Expert-approved, structured learning paths designed to help you master key skills efficiently and advance in your career with guidance from industry professionals.</p>
                </div>
                <div className={styles.hackathonBox}>
                    {LearningPathList.slice(0, 6).map((lp, i) => (
                        <LearningPathCard key={i} learningPath={lp} />
                    ))}
                </div>
                <button className={styles.loginBtn} style={{ marginTop: '2rem', borderRadius: '10px' }} onClick={() => navigate('/dashboard/learning-paths')}>
                    Explore Learning Paths
                </button>
            </section>

            <section className={styles.leftRightGrid}>
                <div className={styles.storyTitle}>
                    <h1>
                        The Story of Aami <span className={styles.highlight}>MuStory</span>
                    </h1>
                    <p>
                        Meet Aami, an eager learner hungry for growth! Join her voyage through the captivating µVerse, where she seizes opportunities, builds learning circles, and immerses herself in events, emerging industry-ready with newfound skills and confidence.
                    </p>
                </div>
                <div className={styles.iframeContainer}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/M9serw-CLU0" title="YouTube video on M9serw-CLU0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
            </section>

            <section className={styles.topBottomGrid}>
                <div className={styles.camparison}>
                    <h1>
                        μLearn is here to solve all your learning problems
                    </h1>
                    <table className={styles.comparisonTable}>
                        <tr>
                            <th>
                                Problems with Existing Systems
                            </th>
                            <th>
                                How μLearn Works
                            </th>
                        </tr>
                        <tr>
                            <td>
                                Fragmented Resources
                            </td>
                            <td>
                                Structured <span className={styles.highlight}>Roadmaps</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Lack Of Right Advice
                            </td>
                            <td>
                                <span className={styles.highlight}>Mentorship</span> from industry veterans
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Lack of Access to Oppurtunities
                            </td>
                            <td>
                                <span className={styles.highlight}> Oppurtunities</span> from the best in every industries
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Limited Exposure
                            </td>
                            <td>
                                <span className={styles.highlight}> Exposure</span> to global leaders and thinkers
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Lack of motivation to learn
                            </td>
                            <td>
                                <span className={styles.highlight}> Gamified</span> platform to working based on Karma points
                            </td>
                        </tr>
                    </table>
                </div>
            </section>

            <section className={`${styles.topBottomGrid} ${styles.zeroTopPadding}`}>
                <div className={styles.oppurtunitiesTitle}>
                    <h1>
                        At The End Of a μLearners Journey
                    </h1>
                    <h6>He is offered</h6>
                </div>
                <div className={styles.oppurtunities}>
                    {
                        [
                            {
                                id: 1,
                                name: "Job",
                                icon:
                                    <img src={"https://www.propeers.in/images/rafiki.svg"} width={"120px"} alt="Ask Anything" />
                            },
                            {
                                id: 2,
                                name: "FreeLance",
                                icon:
                                    <img src={"https://www.propeers.in/images/Mentors-cuate.svg"} width={"90px"} alt="Mentors" />
                            },
                            {
                                id: 1,
                                name: "Research",
                                icon:
                                    <img src={"https://www.propeers.in/images/cuate.svg"} width={"90px"} alt="Feed" />
                            },
                            {
                                id: 1,
                                name: "Entreprenuership",
                                icon:
                                    <img src={"https://www.propeers.in/images/cuate.svg"} width={"90px"} alt="Feed" />
                            }
                        ].map(e => (
                            <div key={e.id} className={styles.cards}>
                                <span>{e.icon}</span>
                                <h6>{e.name}</h6>
                            </div>
                        ))
                    }
                </div>
            </section>
            <section className={`${styles.topBottomGrid} ${styles.zeroTopPadding}`}>
                <div className={styles.impact}>
                    <h1>The Impact of <span className={styles.highlight}>µLearn</span></h1>
                    <p>Over the last year, we as a community have made an impact on a significant number of students, mentors, and facilitators enabling them to gain more knowledge about the ecosystem of learning and was able to upskill themselves.</p>
                </div>
                <div className={styles.dataGrid}>
                    {
                        data.map(d => (
                            <div className={styles.dataCard}>
                                <h1>{d.value}</h1>
                                <p>{d.label}</p>
                            </div>
                        ))
                    }
                </div>

            </section>
            <section className={styles.leftRightGrid}>
                <div className={styles.community}>
                    <h1>Learn and Grow <span className={styles.highlight}>Together</span> as a <span className={styles.highlight}>Community</span></h1>
                    <h6>Are you ready to learn, grow and upskill yourself to the next level? Come, be a part of the community, and let's start learning in a new better way. Call in your friends as well, because things are going to change once you experience it and it is more effective when done with a group.</h6>
                    <button>Join Discord Server</button>
                </div>
                <div>

                </div>
                <div>
                    <img src="https://mulearn.org/assets/home/join.webp" alt="image" width="400px" />
                </div>
            </section>
            <footer className={styles.footer}>
                <div className={styles.footerContainer}>

                    {/* Navigation Links */}
                    <div className={styles.footerSection}>
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#">Career Labs</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Interest Groups</a></li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div className={styles.footerSection}>
                        <h3>Legal</h3>
                        <ul>
                            <li><a href="#">Terms and Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div className={styles.footerSection}>
                        <h3>Follow Us</h3>
                        <div className={styles.socialIcons}>
                            <a href="#"><FaLinkedin /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaYoutube /></a>
                            <a href="#"><FaFacebook /></a>
                        </div>
                    </div>

                    {/* Address */}
                    <div className={styles.footerSection}>
                        <h3>Contact</h3>
                        <p>Technopark Trivandrum, Kazhakkoottam,</p>
                        <p>Trivandrum - 695581, Kerala, India</p>
                    </div>

                </div>
            </footer>
        </div>
    );
};

export default MuLearnLanding;
