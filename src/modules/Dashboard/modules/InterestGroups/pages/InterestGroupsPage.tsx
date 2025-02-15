import React, { useState } from 'react';
import { Search, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './InterestGroupsPage.module.css';

function InterestGroupsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'space', name: 'Space & Astronomy' },
    { id: 'tech', name: 'Technology' },
    { id: 'gaming', name: 'Gaming' },
    { id: 'art', name: 'Art & Design' },
    { id: 'science', name: 'Science' },
  ];

  const interestGroups = [
    {
      id: 1,
      title: "Space Explorers",
      category: "space",
      participants: 1250,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920",
    },
    {
      id: 2,
      title: "AI Innovators",
      category: "tech",
      participants: 890,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad095?q=80&w=1920",
    },
    {
      id: 3,
      title: "Gaming League",
      category: "gaming",
      participants: 2100,
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1920",
    },
    {
      id: 4,
      title: "Digital Artists",
      category: "art",
      participants: 750,
      image: "https://images.unsplash.com/photo-1561740031-3edeb7da8511?q=80&w=1920",
    },
    {
      id: 5,
      title: "Quantum Physics",
      category: "science",
      participants: 430,
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1920",
    },
    {
      id: 6,
      title: "Web3 Developers",
      category: "tech",
      participants: 680,
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1920",
    },
    {
      id: 7,
      title: "Mars Society",
      category: "space",
      participants: 920,
      image: "https://images.unsplash.com/photo-1614728894747-a83421789f10?q=80&w=1920",
    },
    {
      id: 8,
      title: "Esports Team",
      category: "gaming",
      participants: 1500,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1920",
    },
    {
      id: 9,
      title: "3D Modeling",
      category: "art",
      participants: 640,
      image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=1920",
    },
    {
      id: 10,
      title: "Biology Research",
      category: "science",
      participants: 380,
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1920",
    },
    {
      id: 11,
      title: "Robotics Club",
      category: "tech",
      participants: 520,
      image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=1920",
    },
    {
      id: 12,
      title: "Astronomy Club",
      category: "space",
      participants: 850,
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1920",
    },
  ];

  // Filter groups based on search and category
  const filteredGroups = interestGroups.filter(group => {
    const matchesSearch = group.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || group.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination
  const totalPages = Math.ceil(filteredGroups.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedGroups = filteredGroups.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.MainWrapper}>
      {/* Banner */}
      <div className={styles.Banner}>
        <div className={styles.BannerContent}>
          <h1 className={styles.BannerTitle}>Discover Interest Groups</h1>
          <p className={styles.BannerSubtitle}>Join communities that share your passion</p>
        </div>
      </div>

      <div className={styles.Container}>
        {/* Search and Filter Section */}
        <div className={styles.SearchFilterWrapper}>
          <div className={styles.SearchFilterInner}>
            {/* Search Bar */}
            <div className={styles.SearchBar}>
              <Search className={styles.SearchIcon} />
              <input
                type="text"
                placeholder="Search interest groups..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.SearchInput}
              />
            </div>

            {/* Category Filter */}
            <div className={styles.CategoryFilter}>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={
                    selectedCategory === category.id
                      ? styles.CategoryButtonActive
                      : styles.CategoryButton
                  }
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Interest Groups Grid */}
        <div className={styles.Grid}>
          {paginatedGroups.map((group) => (
            <div key={group.id} className={styles.GroupCard}>
              <div className={styles.GroupImageWrapper}>
                <img src={group.image} alt={group.title} className={styles.GroupImage} />
                <div className={styles.GroupOverlay}>
                  <span className={styles.GroupCategory}>
                    {categories.find(c => c.id === group.category)?.name}
                  </span>
                </div>
              </div>
              <div className={styles.GroupDetails}>
                <h3 className={styles.GroupTitle}>{group.title}</h3>
                <div className={styles.GroupParticipants}>
                  <Users className={styles.ParticipantsIcon} />
                  <span>{group.participants.toLocaleString()} participants</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className={styles.Pagination}>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={styles.PaginationButton}
            >
              <ChevronLeft className={styles.PaginationIcon} />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={
                  currentPage === page
                    ? styles.PaginationButtonActive
                    : styles.PaginationButton
                }
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={styles.PaginationButton}
            >
              <ChevronRight className={styles.PaginationIcon} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default InterestGroupsPage;
