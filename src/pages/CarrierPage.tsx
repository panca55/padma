import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, Banknote, ChevronDown, Filter, ChevronRight, CheckCircle2 } from 'lucide-react';

interface JobRequirement {
  id: string;
  requirement: string;
}

interface JobPosting {
  id: string;
  title: string;
  location: string;
  salaryMin: number;
  salaryMax: number;
  description: string;
  requirements: JobRequirement[];
  position?: string;
  branch?: string;
}

export default function CarrierPage() {
  const { t } = useTranslation();
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;
  
  // Filter states
  const selectedPosition = 'Administrator';
  const selectedBranch = 'DKI Jakarta';
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        // Replace with your actual API endpoint
        // const response = await fetch(`YOUR_API_ENDPOINT/jobs?page=${currentPage}&position=${selectedPosition}&branch=${selectedBranch}`);
        // const data = await response.json();
        // setJobs(data.jobs);
        // setTotalPages(data.totalPages);
        
        // Dummy data matching the design
        const dummyJobs: JobPosting[] = [
          {
            id: '1',
            title: 'Administrator',
            location: 'Jakarta Barat',
            salaryMin: 3000000,
            salaryMax: 4000000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
            requirements: [
              { id: '1', requirement: 'Windows 10 (64-bit) or Windows 11 (64-bit)' },
              { id: '2', requirement: 'Intel Core i5 9th-gen or AMD Ryzen 2700' },
              { id: '3', requirement: '16 GB RAM' }
            ],
            position: 'Administrator',
            branch: 'DKI Jakarta'
          },
          {
            id: '2',
            title: 'Administrator',
            location: 'Jakarta Barat',
            salaryMin: 3000000,
            salaryMax: 4000000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
            requirements: [
              { id: '1', requirement: 'Windows 10 (64-bit) or Windows 11 (64-bit)' },
              { id: '2', requirement: 'Intel Core i5 9th-gen or AMD Ryzen 2700' },
              { id: '3', requirement: '16 GB RAM' }
            ],
            position: 'Administrator',
            branch: 'DKI Jakarta'
          },
          {
            id: '3',
            title: 'Administrator',
            location: 'Jakarta Selatan',
            salaryMin: 3000000,
            salaryMax: 4000000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
            requirements: [
              { id: '1', requirement: 'Windows 10 (64-bit) or Windows 11 (64-bit)' },
              { id: '2', requirement: 'Intel Core i5 9th-gen or AMD Ryzen 2700' },
              { id: '3', requirement: '16 GB RAM' }
            ],
            position: 'Administrator',
            branch: 'DKI Jakarta'
          },
          {
            id: '4',
            title: 'Administrator',
            location: 'Jakarta Timur',
            salaryMin: 3000000,
            salaryMax: 4000000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
            requirements: [
              { id: '1', requirement: 'Windows 10 (64-bit) or Windows 11 (64-bit)' },
              { id: '2', requirement: 'Intel Core i5 9th-gen or AMD Ryzen 2700' },
              { id: '3', requirement: '16 GB RAM' }
            ],
            position: 'Administrator',
            branch: 'DKI Jakarta'
          },
          {
            id: '5',
            title: 'Administrator',
            location: 'Jakarta Utara',
            salaryMin: 3000000,
            salaryMax: 4000000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
            requirements: [
              { id: '1', requirement: 'Windows 10 (64-bit) or Windows 11 (64-bit)' },
              { id: '2', requirement: 'Intel Core i5 9th-gen or AMD Ryzen 2700' },
              { id: '3', requirement: '16 GB RAM' }
            ],
            position: 'Administrator',
            branch: 'DKI Jakarta'
          },
          {
            id: '6',
            title: 'Administrator',
            location: 'Jakarta Utara',
            salaryMin: 3000000,
            salaryMax: 4000000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
            requirements: [
              { id: '1', requirement: 'Windows 10 (64-bit) or Windows 11 (64-bit)' },
              { id: '2', requirement: 'Intel Core i5 9th-gen or AMD Ryzen 2700' },
              { id: '3', requirement: '16 GB RAM' }
            ],
            position: 'Administrator',
            branch: 'DKI Jakarta'
          }
        ];

        setJobs(dummyJobs);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setLoading(false);
      }
    };

    fetchJobs();
    window.scrollTo(0, 0);
  }, [currentPage, selectedPosition, selectedBranch]);

  const formatSalary = (min: number, max: number) => {
    const formatNumber = (num: number) => {
      return `Rp${(num / 1000000).toFixed(3).replace('.', ',')}`;
    };
    return `${formatNumber(min)} - ${formatNumber(max)}`;
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`w-10 h-10 rounded-lg font-semibold transition-all duration-300 ${
            currentPage === i
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-white/20 text-white hover:bg-white/30'
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            {t('carrier')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('carrierDescription')}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mt-8"></div>
        </div>
      </div>

      {/* Job Listings Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-12">
            {/* Search Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowSearchDropdown(!showSearchDropdown)}
                className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 font-medium"
              >
                {t('search')}
                <ChevronDown className="w-5 h-5" />
              </button>
              {showSearchDropdown && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-2xl shadow-xl py-2 z-10">
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white">
                    {t('allPositions')}
                  </button>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white">
                    Administrator
                  </button>
                </div>
              )}
            </div>

            {/* Filter Button */}
            <button className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 font-medium">
              {t('filter')}
              <Filter className="w-5 h-5" />
            </button>

            {/* Position Filter */}
            <div className="flex items-center gap-2 px-6 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full font-medium text-gray-900 dark:text-white">
              {t('position')}: {selectedPosition}
            </div>

            {/* Branch Filter */}
            <div className="flex items-center gap-2 px-6 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full font-medium text-gray-900 dark:text-white">
              {t('branch')}: {selectedBranch}
            </div>
          </div>

          {/* Job Cards Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-3xl p-8 animate-pulse">
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
                >
                  {/* Job Title */}
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                    {job.title}
                  </h3>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-3">
                    <MapPin className="w-5 h-5" />
                    <span className="font-medium">{job.location}</span>
                  </div>

                  {/* Salary */}
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-6">
                    <Banknote className="w-5 h-5" />
                    <span className="font-medium">{formatSalary(job.salaryMin, job.salaryMax)}</span>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2">
                      {t('description')}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                      {job.description}
                    </p>
                  </div>

                  {/* Requirements */}
                  <div className="mb-8 flex-grow">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3">
                      {t('requirements')}
                    </h4>
                    <div className="space-y-2">
                      {job.requirements.map((req) => (
                        <div key={req.id} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {req.requirement}
                          </span>
                        </div>
                      ))}
                      <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        +3
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <Link
                      to={`/carrier/${job.id}`}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 font-semibold rounded-full border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-600 transition-all duration-300"
                    >
                      {t('details')}
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                    <Link
                      to={`/carrier/${job.id}/apply`}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      {t('apply')}
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="flex items-center justify-center gap-3 mt-16">
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-2 text-white hover:bg-white/20 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronDown className="w-6 h-6 rotate-90" />
            </button>
            
            {renderPagination()}
            
            <button
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="p-2 text-white hover:bg-white/20 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronDown className="w-6 h-6 -rotate-90" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
