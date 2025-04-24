"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
interface Project {
  title: string;
  description: string;
  date: string;
  image: string;
  link: string; 
}

const projects = {
  // "Machine Learning & AI": [],
  // "Data Engineering & Pipelines": [],
  // "Data Visualization & BI": [],
  // "Time Series & Forecasting": [],
  // "Web Scraping & Data Collection": [],
  // "Cloud & Scalable Data Systems": [],
  "SQL & Data Querying": [
    {
    title: "Customer Segmentation using RFM Segmentation in SQL",
    description: "Customer segmentation using RFM analysis on Superstore Sales Data. Cleaned data, performed exploratory analysis, and segmented customers based on Recency, Frequency, and Monetary metrics in SQL. Visualized findings and shared insights.",
    image: "./project_images/Customer-Segmentation-using-RFM-Segmentation-in-SQL.png",
    link: "https://github.com/NazmulHasanNihal/Customer-Segmentation-using-RFM-Segmentation-in-SQL",
    tools: [
      { name: "SQL", color: "bg-green-500" },
    ],
  },
    {
    title: "Sales Data Analysis and Forecasting Using Excel",
    description: "This project demonstrates the process of sales data analysis and forecasting using Microsoft Excel. The goal of this project is to analyze historical sales data, identify trends and seasonal patterns, and apply time series forecasting techniques to predict future sales.",
    image: "./project_images/Sales-Data-Analysis-and-Forecasting-Using-Excel.png",
    link: "https://github.com/NazmulHasanNihal/Sales-Data-Analysis-and-Forecasting-Using-Excel",
    tools: [
      { name: "Excel", color: "bg-gray-600" },
    ],
  },
],
"Statistical Analysis & EDA": [
  {
    title: "Advanced Statistical Methods for A/B and Hypothesis Testing Methods of Experimentations",
    description: "This project will showcase advanced statistical methods for A/B testing and hypothesis testing, applying various techniques to experimentations, statistical and data analysis. This project covers Normality tests, Variance tests, T-tests, Non-parametric, Parametric, Chi-Square tests to help make data-driven decisions in experiments.",
    image: "./project_images/Advanced-Statistical-Methods-for-AB-and-Hypothesis-Testing-Methods-of-Experimentations.webp",
    link: "https://github.com/NazmulHasanNihal/Advanced-Statistical-Methods-for-AB-and-Hypothesis-Testing-Methods-of-Experimentations",
    tools: [
      { name: "A/B Testing", color: "bg-bulegray-500" },
      { name: "Hypothesis Testing", color: "bg-pink-900" },
    ],
  },
],
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof projects>("SQL & Data Querying");

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
