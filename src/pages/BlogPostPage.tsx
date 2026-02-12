import { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  Check,
  ChevronRight,
  Home,
} from 'lucide-react';
import BlogCard from '../components/blog/BlogCard';
import {
  getBlogPostBySlug,
  getAuthorById,
  getRelatedPosts,
  BlogPost,
  Author,
} from '../data/blogData';
import { parseMarkdown } from '../utils/markdownParser';
import { useArticleSEO, useBreadcrumbSEO, BASE_URL } from '../utils/seo';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const post = useMemo(() => {
    if (!slug) return null;
    return getBlogPostBySlug(slug);
  }, [slug]);

  const author = useMemo(() => {
    if (!post) return null;
    return getAuthorById(post.authorId);
  }, [post]);

  useArticleSEO({
    title: post?.title || 'Blog Post',
    description: post?.excerpt || '',
    keywords: post?.tags.join(', '),
    canonical: post ? `${BASE_URL}/blog/${post.slug}` : undefined,
    ogImage: post?.featuredImage,
    publishDate: post?.publishDate || '',
    authorName: author?.name || 'Turf 360 Team',
    category: post?.category || 'Sports',
    tags: post?.tags || [],
    readTime: post?.readTime || 5,
  });

  useBreadcrumbSEO([
    { name: 'Home', url: BASE_URL },
    { name: 'Blog', url: `${BASE_URL}/blog` },
    { name: post?.title || 'Article', url: post ? `${BASE_URL}/blog/${post.slug}` : '' },
  ]);

  if (!slug || !post) {
    if (slug && !post) {
      navigate('/blog', { replace: true });
    }
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse text-gray-400">Loading...</div>
      </div>
    );
  }

  if (!author) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse text-gray-400">Loading...</div>
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(post.id, 3);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `${post.title} - Turf 360 Blog`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error('Failed to copy link');
    }
  };

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${shareText}\n\n${shareUrl}`)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
  };

  const parsedContent = parseMarkdown(post.content);

  return (
    <>
      <div className="relative h-[50vh] min-h-[400px] lg:h-[60vh] bg-gray-900">
        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/30" />

        <div className="absolute inset-0 flex flex-col justify-end pb-12 lg:pb-16">
          <div className="section-container">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-white/70">
                <li>
                  <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
                    <Home className="w-3.5 h-3.5" />
                    Home
                  </Link>
                </li>
                <li className="text-white/50">/</li>
                <li>
                  <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
                </li>
                <li className="text-white/50">/</li>
                <li className="text-white truncate max-w-[200px]">{post.title}</li>
              </ol>
            </nav>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-4 py-1.5 bg-emerald-600 text-white text-sm font-semibold rounded-full">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-white/80 text-sm">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishDate).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-1.5 text-white/80 text-sm">
                <Clock className="w-4 h-4" />
                {post.readTime} min read
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      <article className="py-12 lg:py-16 bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-4 mb-8 p-5 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-100">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/20">
                  <User className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{author.name}</p>
                  <p className="text-sm text-emerald-600">{author.designation}</p>
                </div>
              </div>

              <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: parsedContent }}
              />

              <div className="mt-12 pt-8 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-emerald-50 hover:text-emerald-700 transition-colors cursor-default"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/20">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-emerald-600 font-medium mb-1">Written by</p>
                    <p className="font-bold text-gray-900 text-lg">{author.name}</p>
                    <p className="text-sm text-gray-600 mb-3">{author.designation}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{author.bio}</p>
                  </div>
                </div>
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Share2 className="w-5 h-5 text-emerald-600" />
                    Share this article
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={shareLinks.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-500 text-white hover:bg-green-600 transition-all hover:scale-105 shadow-md shadow-green-500/20"
                      aria-label="Share on WhatsApp"
                    >
                      <WhatsAppIcon className="w-5 h-5" />
                    </a>
                    <a
                      href={shareLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-all hover:scale-105 shadow-md shadow-gray-900/20"
                      aria-label="Share on X/Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={shareLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all hover:scale-105 shadow-md shadow-blue-600/20"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <button
                      onClick={handleCopyLink}
                      className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all hover:scale-105 ${
                        copied
                          ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      aria-label="Copy link"
                    >
                      {copied ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <LinkIcon className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-6 text-white shadow-xl shadow-emerald-600/20">
                  <h3 className="font-bold text-xl mb-2">Ready to Play?</h3>
                  <p className="text-emerald-100 text-sm mb-5 leading-relaxed">
                    Book your slot at Turf 360 and experience premium sports facilities in Noida.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-white text-emerald-600 font-semibold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-all hover:shadow-lg group"
                  >
                    Book Now
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="bg-gray-50 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Sports at Turf 360"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-5">
                    <h4 className="font-semibold text-gray-900 mb-2">Explore Our Facilities</h4>
                    <p className="text-sm text-gray-600 mb-4">Football, Cricket, Pickleball, Snooker and more.</p>
                    <Link
                      to="/gallery"
                      className="text-emerald-600 font-medium text-sm hover:text-emerald-700 inline-flex items-center gap-1"
                    >
                      View Gallery
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="section-container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Related Articles</h2>
              <Link
                to="/blog"
                className="text-emerald-600 font-medium hover:text-emerald-700 inline-flex items-center gap-1"
              >
                View All
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
