
import { useState, useEffect } from 'react';
import TaskManager from '../components/TaskManager';
import Card from '../components/Card';
import Button from '../components/Button';
import { fetchPosts } from '../api/api';
import { truncateText } from '../utils/helpers'; // Import utility

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadPosts = async (pageNum) => {
    try {
      setLoading(true);
      const data = await fetchPosts(pageNum);
      setPosts(prev => pageNum === 1 ? data : [...prev, ...data]);
      setHasMore(data.length === 10);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts(1);
  }, []);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    loadPosts(nextPage);
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.body.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <TaskManager />
      
      <Card className="mt-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">API Data (Posts)</h2>
          <input
            type="text"
            placeholder="Search posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white w-64"
          />
        </div>

        {error && <p className="text-red-500 mb-4">Error: {error}</p>}
        {loading && page === 1 && <p className="text-gray-500">Loading posts...</p>}

        <div className="grid gap-4">
          {filteredPosts.map(post => (
            <div 
              key={post.id} 
              className="p-4 border rounded-lg dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 transition"
            >
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                {truncateText(post.title, 60)} {/* Truncate title if too long */}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {truncateText(post.body, 120)} {/* Cleaner, consistent preview */}
              </p>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && !loading && !error && (
          <p className="text-gray-500 dark:text-gray-400 py-4">No posts found.</p>
        )}

        {hasMore && !loading && (
          <div className="mt-6 text-center">
            <Button onClick={handleLoadMore} variant="primary">
              Load More
            </Button>
          </div>
        )}

        {loading && page > 1 && <p className="text-center mt-4">Loading more...</p>}
      </Card>
    </>
  );
}