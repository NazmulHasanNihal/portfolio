"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Icon, Menu } from 'lucide-react';
import { useTheme } from "next-themes";
import Image from 'next/image'; // Import Next.js Image component
import { useEffect } from 'react';

const experiences = [
  { period: "2022 - Present", title: "Full Stack Developer", company: "Tech Solutions Inc." },
  { period: "2020 - 2021", title: "Freelance Web Developer", company: "E-commerce Startup" },
  { period: "Summer 2021", title: "Front-End Developer Intern", company: "Web Design Studio" },
  { period: "2019 - 2020", title: "Teaching Assistant", company: "Tech Academy" },
];

const education = [
  { period: "2021 - Present", degree: "Bachelor of Science in Computer Science and Engineering", school: "College of Technology" },
  { period: "2018 - 2020", degree: "Higher Secondary Certificate in Science", school: "Govt. Tolaram College" },
  { period: "2016-2018", degree: "Secondary School Certificate in Science", school: "Deabhog Hazi Uzir Ali High School" },
];

const personalInfo = {
  name: "Md. Nazmul", phone: "(+880) 195 300 3115", email: "nazmulhas36@gmail.com",
  nationality: "Bangladeshi", languages: "English, Bangla", freelance: "Available",
};

const tabs = ["Experience", "Education", "Skills", "About"];

export default function Resume() {
  const [activeTab, setActiveTab] = useState("Experience");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const renderContent = () => {
    switch (activeTab) {
      case "Experience":
        return (
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative pl-6 border-l-2 border-emerald-400">
                <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-emerald-400" />
                <span className="text-emerald-400 text-sm sm:text-base">{exp.period}</span>
                <h3 className="text-lg sm:text-xl font-bold mt-2">{exp.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{exp.company}</p>
              </motion.div>
            ))}
          </div>
        );
      case "Education":
        return (
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative pl-6 border-l-2 border-emerald-400">
                <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-emerald-400" />
                <span className="text-emerald-400 text-sm sm:text-base">{edu.period}</span>
                <h3 className="text-lg sm:text-xl font-bold mt-2">{edu.degree}</h3>
                <p className="text-muted-foreground text-sm:text-base">{edu.school}</p>
              </motion.div>
            ))}
          </div>
        );
      case "Skills":
        return <Skills />;

      case "About":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {Object.entries(personalInfo).map(([key, value]) => (
              <div key={key} className="flex justify-between text-sm sm:text-base"><span className="capitalize">{key}</span><span className="text-emerald-400">{value}</span></div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen pt-16 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex flex-col lg:flex-row gap-8">
          <button className="lg:hidden px-4 py-2 bg-card rounded-lg mb-4 text-left flex items-center justify-between" onClick={() => setIsSidebarOpen(!isSidebarOpen)}><span>{activeTab}</span><Menu className="h-5 w-5" /></button>
          <div className={`lg:w-1/4 ${isSidebarOpen ? 'block' : 'hidden'} lg:block bg-white dark:bg-gray-900`}>
            <div className="lg:sticky lg:top-24 space-y-2">
              {tabs.map((tab) => (
                <button key={tab} onClick={() => { setActiveTab(tab); setIsSidebarOpen(false); }} className={`w-full text-left px-4 py-2 transition-colors text-sm sm:text-base text-gray-800 dark:text-gray-200 ${activeTab === tab ? 'bg-emerald-400 text-black' : 'hover:bg-gray-200 dark:hover:bg-gray-800'}`}>
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="lg:w-3/4">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="p-4 sm:p-6">{renderContent()}</motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
const Skills = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const skillsList = [
    // Data Scientist/Engineer/Analyst Core Skills (Highest Priority)
    { name: "Python", icon: "./icon/python.svg" },
    { name: "SQL", icon: "./icon/PostgresSQL.svg" },
    { name: "Pandas", icon: "./icon/pandas.svg" },
    { name: "NumPy", icon: "./icon/numpy.svg" },
    { name: "Jupyter", icon: "./icon/Jupyter.svg" },
    { name: "Matplotlib", icon: "./icon/Matplotlib.svg" },
    { name: "Seaborn", icon: "./icon/seaborn-icon.svg" },
    { name: "Plotly", icon: "./icon/Ploty.svg" },
    { name: "PowerBi", icon: "./icon/powerbi.svg" },
    { name: "TensorFlow", icon: "./icon/TensorFlow.svg" },
    { name: "PyTorch", icon: "./icon/PyTorch.svg" },
    { name: "Keras", icon: "./icon/Keras.svg" },
    { name: "Scikit-learn", icon: "./icon/scikit-learn.svg" },
    { name: "Apache Spark", icon: "./icon/Apache Spark.svg" },
    { name: "Apache Hadoop", icon: "./icon/Apache Hadoop.svg" },
    { name: "Apache Kafka", icon: "./icon/Apache Kafka.svg" },
    { name: "Dask", icon: "./icon/dask.svg" },
    { name: "Docker", icon: "./icon/Docker.svg" },
    { name: "Git", icon: "./icon/Git.svg" },
    { name: "Linux", icon: "./icon/Linux.svg" },
    { name: "Visual Studio Code", icon: "./icon/Visual Studio Code (VS Code).svg" },
    { name: "AWS", icon: "./icon/AWS.svg" },
    { name: "Azure", icon: "./icon/Azure.svg" },
    { name: "GCP", icon: "./icon/Google_Cloud_logo.svg" },
    { name: "Data Bricks", icon: "./icon/databricks-icon.svg" },

    // Data Engineering Heavy Skills
    { name: "Apache Airflow", icon: "./icon/Apache Airflow.svg" },
    { name: "Apache Nifi", icon: "./icon/apache_nifi-icon.svg" },
    { name: "Apache Flink", icon: "./icon/apache-flink-icon.svg" },
    { name: "Apache Hive", icon: "./icon/apache_hive-icon.svg" },
    { name: "Apache Cassandra", icon: "./icon/Apache Cassandra.svg" },
    { name: "MongoDB", icon: "./icon/MongoDB.svg" },
    { name: "MySQL", icon: "./icon/MySQL.svg" },
    { name: "PostgreSQL", icon: "./icon/PostgresSQL.svg" },

    // Data Analysis / Reporting Specific
    { name: "Tableau", icon: "./icon/tableau-icon.svg" },
    { name: "Google Sheets", icon: "./icon/google-sheets.svg" },
    { name: "Excel", icon: "./icon/excel.svg" },

    // Less Core but still relevant skills (Lower Priority)
    { name: "R", icon: "./icon/r.svg" },
    { name: "Scala", icon: "./icon/scala.svg" },
    { name: "Neo4j", icon: "./icon/New4j.svg" },
    { name: "Streamlit", icon: "./icon/Streamlit.svg" },
    { name: "SQLite", icon: "./icon/SQLite.svg" },
    { name: "Ubuntu", icon: "./icon/Ubuntu.svg" },
    { name: "Github", icon: "./icon/Github.svg" },
    { name: "GitLab", icon: "./icon/GitLab.svg" },
    { name: "PyCharm", icon: "./icon/PyCharm.svg" },
    { name: "DataSpell", icon: "./icon/DataSpell.svg" },
    { name: "DBeaver", icon: "./icon/DBeaver.svg" },
    { name: "Microsoft Word", icon: "./icon/ms-word.svg" },
    { name: "Microsoft PowerPoint", icon: "./icon/powerpoint-2.svg" },
    { name: "MATLAB", icon: "./icon/MATLAB.svg" },
    { name: "Julia", icon: "./icon/Julia.svg" },
    { name: "C++", icon: "./icon/C++ (CPlusPlus).svg" },
    { name: "Adobe Illustrator", icon: "./icon/Adobe Illustrator.svg" },
    { name: "Adobe Photoshop", icon: "./icon/Adobe Photoshop.svg" },
    { name: "Kaggle", icon: "./icon/Kaggle.svg" },
  ];

  // Ensure component is mounted before accessing theme
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch in Next.js

  // Get the effective theme (system or user preference)
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDarkMode = currentTheme === "dark";

  return (
    <div className="p-4 sm:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white">My Skills</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-8">
        I'm a data scientist with experience in machine learning, data engineering, and cloud computing. I love using data to drive business decisions.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skillsList.map((skill, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center justify-center rounded-lg p-4 transition-all duration-200 cursor-pointer 
                      ${isDarkMode ? "bg-gray-800 text-white shadow-md" : "bg-white text-black shadow-lg border border-gray-200"}`}
            whileHover={{ scale: 1.1 }}
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              width={50}
              height={50}
              className="drop-shadow-md"
            />
            <span className="mt-2 text-sm">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
