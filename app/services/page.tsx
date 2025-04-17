"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const projects = {
  "Machine Learning & AI": [
    // {
    //   title: "Sales Dashboard with Power BI",
    //   description: "A dynamic sales dashboard built using Power BI to track key performance indicators.",
    //   image: "https://images.unsplash.com/photo-1565812164-b63b173218db?w=800&auto=format&fit=crop&q=60",
    //   link: "https://github.com/yourusername/sales-dashboard",
    //   tools: [
    //     { name: "Power BI", color: "bg-blue-500" },
    //     { name: "Excel", color: "bg-gray-600" },
    //     { name: "SQL", color: "bg-green-500" },
    //   ],
    // },
    // {
    //   title: "Market Analysis Report",
    //   description: "A comprehensive market analysis report using SQL and Excel for insights on market trends.",
    //   image: "https://images.unsplash.com/photo-1523180085855-5c4993e1a542?w=800&auto=format&fit=crop&q=60",
    //   link: "https://github.com/yourusername/market-analysis-report",
    //   tools: [
    //     { name: "SQL", color: "bg-green-500" },
    //     { name: "Excel", color: "bg-gray-600" },
    //     { name: "Tableau", color: "bg-blue-500" },
    //   ],
    // },
  ],
  "Data Engineering & Pipelines": [],
  "Data Visualization & BI": [],
  "Time Series & Forecasting": [],
  "Statistical Analysis & EDA": [],
  "Web Scraping & Data Collection": [],
  "Cloud & Scalable Data Systems": [],
  "SQL & Data Querying": [],
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof projects>("Machine Learning & AI");

  return (
    <main className="min-h-screen pt-16 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">My Data Projects</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Explore my portfolio of data science, engineering, and analysis projects.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-8 sm:mb-12">
          {Object.keys(projects).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as keyof typeof projects)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-colors text-sm sm:text-base ${
                activeCategory === category
                  ? 'bg-emerald-400 text-background'
                  : 'bg-card hover:bg-accent'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {projects[activeCategory].map((project, index) => (
            <Link href={project.link} key={project.title} target="_blank" rel="noopener noreferrer">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm sm:text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-white ${tool.color}`}
                      >
                        {tool.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
