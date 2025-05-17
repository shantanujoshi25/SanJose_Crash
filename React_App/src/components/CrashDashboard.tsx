import React, { useState } from 'react';
import { Visualizations, YearOption, AreaOption, SeverityOption } from '../types';

const CrashDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('map');
  
  
  const visualizations: Visualizations = {
    map: {
      title: "Crash Hotspots Map",
      description: "Map visualization showing the most dangerous intersections in San Jose",
      svg: "/images/crash_hotspots_map.svg",
      alt: "Map of crash hotspots in San Jose"
    },
    hourly: {
      title: "Crashes by Hour of Day",
      description: "Distribution of crashes throughout the day showing peak hours",
      svg: "/images/crashes_by_hour.svg",
      alt: "Bar chart showing crashes by hour of day"
    },
    heatmap: {
      title: "Day & Hour Heatmap",
      description: "Heatmap showing crash patterns by day of week and hour of day",
      svg: "/images/crash_heatmap_day_hour.svg",
      alt: "Heatmap of crashes by day and hour"
    },
    monthly: {
      title: "Monthly Crash Trends",
      description: "Crash frequency for each month of the year",
      svg: "/images/crash_frequency_by_month.svg",
      alt: "Line chart showing monthly crash trends"
    },
    seasonal: {
      title: "Seasonal Crash Patterns",
      description: "Distribution of crashes by season",
      svg: "/images/crash_frequency_by_season.svg",
      alt: "Chart showing seasonal crash patterns"
    }
  };

  const yearOptions: YearOption[] = [2020, 2021, 2022, 2023];
  const areaOptions: AreaOption[] = ['Downtown', 'Eastside', 'North San Jose', 'South San Jose', 'West San Jose'];
  const severityOptions: SeverityOption[] = ['All', 'Fatal', 'Severe', 'Moderate', 'Minor'];

  const [selectedYear, setSelectedYear] = useState<YearOption>(2023);
  const [selectedArea, setSelectedArea] = useState<AreaOption>('All');
  const [selectedSeverity, setSelectedSeverity] = useState<SeverityOption>('All');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-5 shadow-md">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight">San Jose Crash Data Analysis</h1>
          <p className="text-blue-100 mt-1">Visualization of Traffic Collision Patterns</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4 md:p-6 max-w-7xl mx-auto w-full">
        {/* Controls Bar */}
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 mb-6 flex flex-wrap gap-6 items-center">
          <div className="min-w-[120px]">
            <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
            <div className="relative">
              <select 
                className="w-full border border-gray-200 rounded-md p-2 pl-3 pr-8 bg-white shadow-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none appearance-none"
                value={selectedYear}
                onChange={(e) => setSelectedYear(Number(e.target.value) as YearOption)}
              >
                {yearOptions.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="min-w-[180px]">
            <label className="block text-sm font-medium text-gray-700 mb-1">Area</label>
            <div className="relative">
              <select 
                className="w-full border border-gray-200 rounded-md p-2 pl-3 pr-8 bg-white shadow-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none appearance-none"
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value as AreaOption)}
              >
                <option value="All">All Areas</option>
                {areaOptions.map(area => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="min-w-[150px]">
            <label className="block text-sm font-medium text-gray-700 mb-1">Severity</label>
            <div className="relative">
              <select 
                className="w-full border border-gray-200 rounded-md p-2 pl-3 pr-8 bg-white shadow-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none appearance-none"
                value={selectedSeverity}
                onChange={(e) => setSelectedSeverity(e.target.value as SeverityOption)}
              >
                {severityOptions.map(severity => (
                  <option key={severity} value={severity}>{severity}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs with subtle indicators */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex flex-wrap -mb-px">
              {Object.keys(visualizations).map(key => (
                <button
                  key={key}
                  className={`relative py-3 px-4 text-center border-b-2 font-medium text-sm transition-colors duration-200 ${
                    activeTab === key
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab(key)}
                >
                  {activeTab === key && (
                    <span className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-blue-400/0 via-blue-400/70 to-blue-400/0"></span>
                  )}
                  {visualizations[key].title}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-6">
          <div className="p-5 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
            <h2 className="text-xl font-bold text-gray-800">{visualizations[activeTab].title}</h2>
            <p className="text-gray-600 mt-1">{visualizations[activeTab].description}</p>
          </div>
          
          <div className="px-5 py-2 bg-blue-50 border-b border-blue-100 text-sm text-blue-800">
            <div className="flex items-center">
              <svg className="h-4 w-4 mr-1.5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
              </svg>
              Showing data for {selectedYear}, {selectedArea === 'All' ? 'All Areas' : selectedArea}, 
              {selectedSeverity === 'All' ? ' All Severity Levels' : ` ${selectedSeverity} Crashes`}
            </div>
          </div>

          <div className="p-4 bg-white flex justify-center items-center overflow-hidden">
            <div className="w-full h-full rounded-md overflow-hidden shadow-inner bg-gradient-to-br from-gray-50 to-gray-100 p-3">
              <img 
                src={visualizations[activeTab].svg} 
                alt={visualizations[activeTab].alt}
                className="max-w-full max-h-[600px] object-contain mx-auto"
              />
            </div>
          </div>
        </div>
        

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
          <div className="flex items-center mb-3">
            <svg className="h-5 w-5 text-yellow-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <h3 className="text-lg font-bold text-gray-800">Key Insights</h3>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Crash frequency peaks during evening rush hour (5-6 PM)</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Monterey Road & Curtner Avenue is the most dangerous intersection</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Fall months have the highest number of crashes</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Friday evenings show significantly more crashes than other weekday evenings</span>
            </li>
          </ul>
        </div>
      </main>
      

      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4 text-center">
        <p>San Jose Crash Data Analysis</p>
        <p className="text-sm text-gray-400 mt-1">Shantanu Joshi • Data from San Jose Crash Dataset</p>
      </footer>
    </div>
  );
};

export default CrashDashboard;