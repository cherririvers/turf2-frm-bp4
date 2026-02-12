import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, TrendingUp, Search } from 'lucide-react';
import PageHero from '../components/PageHero';
import BlogCard from '../components/blog/BlogCard';
import { blogPosts, categories, getBlogPostsByCategory } from '../data/blogData';
import { useSEO, seoConfig } from '../utils/seo';

export default function BlogPage() {
  useSEO(seoConfig.blog);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredByCategory = getBlogPostsByCategory(selectedCategory);

  const filteredPosts = searchQuery
    ? filteredByCategory.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : filteredByCategory;

  const featuredPost = blogPosts[0];

  return (
    <>
      <PageHero
        title="Turf 360 Blog"
        subtitle="Tips, guides, and insights for sports enthusiasts"
        backgroundImage="https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="mb-12">
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="group block bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-full min-h-[300px] overflow-hidden">
                  <img
                    src={featuredPost.featuredImage}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 text-white text-sm font-bold rounded-full">
                      <TrendingUp className="w-4 h-4" />
                      Featured
                    </span>
                  </div>
                </div>

                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="text-emerald-600 font-semibold text-sm mb-3">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-3">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>
                      {new Date(featuredPost.publishDate).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                    <span>{featuredPost.readTime} min read</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 mb-10">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-emerald-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="relative lg:ml-auto w-full lg:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-2.5 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No articles found</h3>
              <p className="text-gray-500">
                Try adjusting your search or browse a different category.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-emerald-600">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience Turf 360?
          </h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            Stop reading and start playing. Book your slot now and discover why we're Noida's
            favorite sports destination.
          </p>
          <Link to="/contact" className="btn-gold text-lg px-8 py-4">
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
}
