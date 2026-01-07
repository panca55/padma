import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, Banknote, ChevronDown, Filter, ChevronRight, CheckCircle2 } from 'lucide-react';

interface PIC {
  id: number;
  name: string;
}

interface JobPosting {
  id: string;
  title: string;
  position: string;
  location: string;
  min_salary: number;
  max_salary: number;
  salary_range: string;
  status: string;
  kategori: string;
  date: string;
  pic: PIC;
  requirements: string[];
}

export default function CarrierPage() {
  const { t } = useTranslation();
  const [allJobs, setAllJobs] = useState<JobPosting[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<JobPosting[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPosition, setSelectedPosition] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [selectedKategori, setSelectedKategori] = useState<string>('all');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false); 

  // Fetch jobs from API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://www.admin.padmaraharjasentosa.co.id/api/v1/karir/open');
        const result = await response.json();
        
        if (result.data && Array.isArray(result.data)) {
          const jobsData: JobPosting[] = result.data.map((job: any) => ({
            id: String(job.id),
            title: job.title,
            position: job.position,
            location: job.location,
            min_salary: job.min_salary,
            max_salary: job.max_salary,
            salary_range: job.salary_range,
            status: job.status,
            kategori: job.kategori,
            date: job.date,
            pic: job.pic || { id: 0, name: 'HR Team' },
            requirements: job.requirements || []
          }));
          setAllJobs(jobsData);
          setFilteredJobs(jobsData);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setLoading(false);
      }
    };

    fetchJobs();
    window.scrollTo(0, 0);
  }, []);

  // Apply filters whenever filter states change
  useEffect(() => {
    let filtered = [...allJobs];

    // Search filter (by title or position)
    if (searchQuery) {
      filtered = filtered.filter(job => 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.position.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Position filter
    if (selectedPosition !== 'all') {
      filtered = filtered.filter(job => job.position === selectedPosition);
    }

    // Location filter
    if (selectedLocation !== 'all') {
      filtered = filtered.filter(job => job.location === selectedLocation);
    }

    // Kategori filter
    if (selectedKategori !== 'all') {
      filtered = filtered.filter(job => job.kategori === selectedKategori);
    }

    setFilteredJobs(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchQuery, selectedPosition, selectedLocation, selectedKategori, allJobs]);

  // Get unique values for filters
  const uniquePositions = Array.from(new Set(allJobs.map(job => job.position))).sort();
  const uniqueLocations = Array.from(new Set(allJobs.map(job => job.location))).sort();
  const uniqueKategori = Array.from(new Set(allJobs.map(job => job.kategori))).sort();

  const formatSalary = (salaryRange?: string, minSalary?: number, maxSalary?: number) => {
    // Use salary_range from API if available
    if (salaryRange) {
      return salaryRange;
    }
    // Otherwise format from min/max
    if (minSalary && maxSalary) {
      const formatNumber = (num: number) => {
        return `Rp ${(num / 1000000).toFixed(1).replace('.', ',')} jt`;
      };
      return `${formatNumber(minSalary)} - ${formatNumber(maxSalary)}`;
    }
    return 'Negotiable';
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentJobs = filteredJobs.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPagination = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
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

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedPosition('all');
    setSelectedLocation('all');
    setSelectedKategori('all');
  };

  const activeFiltersCount = 
    (searchQuery ? 1 : 0) +
    (selectedPosition !== 'all' ? 1 : 0) +
    (selectedLocation !== 'all' ? 1 : 0) +
    (selectedKategori !== 'all' ? 1 : 0);

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
          <div className="space-y-4 mb-12">
            <div className="flex flex-wrap gap-4">
              {/* Search Input */}
              <div className="relative flex-1 min-w-[250px]">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('searchJobs') || 'Search jobs...'}
                  className="w-full px-6 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-900 dark:text-white rounded-full border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
                />
              </div>

              {/* Filter Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                  className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 font-medium"
                >
                  <Filter className="w-5 h-5" />
                  {t('filter')}
                  {activeFiltersCount > 0 && (
                    <span className="ml-1 px-2 py-0.5 bg-blue-600 text-white text-xs rounded-full">
                      {activeFiltersCount}
                    </span>
                  )}
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${showFilterDropdown ? 'rotate-180' : ''}`} />
                </button>
                
                {showFilterDropdown && (
                  <div className="absolute top-full right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 z-20">
                    <div className="space-y-4">
                      {/* Position Filter */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          {t('position')}
                        </label>
                        <select
                          value={selectedPosition}
                          onChange={(e) => setSelectedPosition(e.target.value)}
                          className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                          <option value="all">{t('allPositions') || 'All Positions'}</option>
                          {uniquePositions.map((position) => (
                            <option key={position} value={position}>
                              {position}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Location Filter */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          {t('location')}
                        </label>
                        <select
                          value={selectedLocation}
                          onChange={(e) => setSelectedLocation(e.target.value)}
                          className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                          <option value="all">{t('allLocations') || 'All Locations'}</option>
                          {uniqueLocations.map((location) => (
                            <option key={location} value={location}>
                              {location}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Kategori Filter */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          {t('jobType') || 'Job Type'}
                        </label>
                        <select
                          value={selectedKategori}
                          onChange={(e) => setSelectedKategori(e.target.value)}
                          className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                          <option value="all">{t('allTypes') || 'All Types'}</option>
                          {uniqueKategori.map((kategori) => (
                            <option key={kategori} value={kategori}>
                              {kategori === 'fulltime' ? 'Full Time' : kategori === 'parttime' ? 'Part Time' : kategori}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Clear Filters Button */}
                      {activeFiltersCount > 0 && (
                        <button
                          onClick={clearAllFilters}
                          className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 font-medium"
                        >
                          {t('clearFilters') || 'Clear All Filters'}
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Clear All Button (visible when filters active) */}
              {/* {activeFiltersCount > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="px-6 py-3 bg-red-500/20 backdrop-blur-sm text-white rounded-full border border-red-400/30 hover:bg-red-500/30 transition-all duration-300 font-medium"
                >
                  {t('clearAll') || 'Clear All'}
                </button>
              )} */}
            </div>

            {/* Active Filters Display */}
            {activeFiltersCount > 0 && (
              <div className="flex flex-wrap gap-2">
                {searchQuery && (
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-900 dark:text-white">
                    {t('search')}: "{searchQuery}"
                    <button onClick={() => setSearchQuery('')} className="hover:text-red-500 transition-colors">
                      ×
                    </button>
                  </span>
                )}
                {selectedPosition !== 'all' && (
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-900 dark:text-white">
                    {t('position')}: {selectedPosition}
                    <button onClick={() => setSelectedPosition('all')} className="hover:text-red-500 transition-colors">
                      ×
                    </button>
                  </span>
                )}
                {selectedLocation !== 'all' && (
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-900 dark:text-white">
                    {t('location')}: {selectedLocation}
                    <button onClick={() => setSelectedLocation('all')} className="hover:text-red-500 transition-colors">
                      ×
                    </button>
                  </span>
                )}
                {selectedKategori !== 'all' && (
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-900 dark:text-white">
                    {t('jobType')}: {selectedKategori === 'fulltime' ? 'Full Time' : selectedKategori === 'parttime' ? 'Part Time' : selectedKategori}
                    <button onClick={() => setSelectedKategori('all')} className="hover:text-red-500 transition-colors">
                      ×
                    </button>
                  </span>
                )}
              </div>
            )}

            {/* Results Count */}
            <div className="text-white font-medium">
              {t('showing') || 'Showing'} {currentJobs.length} {t('of') || 'of'} {filteredJobs.length} {t('jobs') || 'jobs'}
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
          ) : filteredJobs.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-white text-xl font-semibold mb-4">
                {t('noJobsFound') || 'No jobs found'}
              </div>
              <p className="text-white/80 mb-6">
                {t('tryDifferentFilters') || 'Try adjusting your filters or search query'}
              </p>
              <button
                onClick={clearAllFilters}
                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
              >
                {t('clearFilters') || 'Clear All Filters'}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
                >
                  {/* Job Title */}
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {job.title}
                  </h3>

                  {/* Position */}
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">
                    {job.position}
                  </p>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-3">
                    <MapPin className="w-5 h-5" />
                    <span className="font-medium">{job.location}</span>
                  </div>

                  {/* Salary */}
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-6">
                    <Banknote className="w-5 h-5" />
                    <span className="font-medium">{formatSalary(job.salary_range, job.min_salary, job.max_salary)}</span>
                  </div>

                  {/* Requirements */}
                  <div className="mb-8 flex-grow">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3">
                      {t('requirements')}
                    </h4>
                    <div className="space-y-2">
                      {job.requirements.slice(0, 3).map((req, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {req}
                          </span>
                        </div>
                      ))}
                      {job.requirements.length > 3 && (
                        <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                          +{job.requirements.length - 3}
                        </div>
                      )}
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
          {totalPages > 1 && (
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
          )}
        </div>
      </div>
    </div>
  );
}
