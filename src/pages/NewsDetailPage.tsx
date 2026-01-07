import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Calendar, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  image: string;
  description: string;
  content?: string;
  tags: string[];
  date: string;
  author?: string;
}

export default function NewsDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const [news, setNews] = useState<NewsItem | null>(null);
  const [relatedNews, setRelatedNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        // Fetch news detail
        const response = await fetch(`https://www.admin.padmaraharjasentosa.co.id/api/v1/news/${id}`);
        const result = await response.json();
        
        if (result.data) {
          const newsData: NewsItem = {
            id: String(result.data.id),
            title: result.data.title,
            image: result.data.image,
            description: result.data.description,
            content: result.data.content || result.data.description,
            tags: result.data.tags || [],
            date: result.data.date,
            author: result.data.author || 'PT Padma Raharja Sentosa'
          };
          setNews(newsData);
        }

        // Fetch related news (latest news excluding current)
        const relatedResponse = await fetch('https://www.admin.padmaraharjasentosa.co.id/api/v1/news');
        const relatedResult = await relatedResponse.json();
        
        if (relatedResult.data && Array.isArray(relatedResult.data)) {
          const relatedData: NewsItem[] = relatedResult.data
            .filter((item: any) => String(item.id) !== id)
            .slice(0, 3)
            .map((item: any) => ({
              id: String(item.id),
              title: item.title,
              image: item.image,
              description: item.description,
              tags: item.tags || [],
              date: item.date
            }));
          setRelatedNews(relatedData);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news detail:', error);
        setLoading(false);
      }
    };

    fetchNewsDetail();
    window.scrollTo(0, 0);
  }, [id]);

  const shareUrl = window.location.href;

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
            <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!news) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t('newsNotFound')}
          </h2>
          <Link to="/news" className="text-blue-600 hover:text-blue-700">
            {t('backToNews')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 pt-20">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <Link
            to="/news"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            {t('backToNews')}
          </Link>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              {new Date(news.date).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </div>
            {news.author && (
              <div className="flex items-center">
                <span className="mr-2">•</span>
                <span>{t('by')} {news.author}</span>
              </div>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {news.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {news.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full"
              >
                <Tag className="w-4 h-4 mr-2" />
                {tag}
              </span>
            ))}
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-3 pb-8 border-b border-gray-200 dark:border-gray-700">
            <span className="text-gray-600 dark:text-gray-400 font-medium flex items-center">
              <Share2 className="w-5 h-5 mr-2" />
              {t('share')}:
            </span>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 hover:scale-110"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${news.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-sky-500 hover:bg-sky-600 text-white rounded-full transition-all duration-300 hover:scale-110"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-blue-700 hover:bg-blue-800 text-white rounded-full transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-6xl mx-auto px-6 -mt-12">
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        <div 
          className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-ul:my-6 prose-li:my-2"
          dangerouslySetInnerHTML={{ __html: news.content || news.description }}
        />
      </article>

      {/* Related News */}
      {relatedNews.length > 0 && (
        <section className="bg-gray-50 dark:bg-gray-800 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              {t('relatedNews')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedNews.map((item) => (
                <Link
                  key={item.id}
                  to={`/news/${item.id}`}
                  className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs mb-3">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
