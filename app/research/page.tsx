// "use client"

// import { motion } from 'framer-motion';
// import Link from 'next/link'; // Import Link from Next.js

// const researchProjects = [
//   {
//     title: "Machine Learning in Healthcare",
//     description: "Research on implementing ML algorithms for early disease detection",
//     date: "2023",
//     image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&auto=format&fit=crop&q=60",
//     link: "https://github.com/yourusername/ml-healthcare-research",
//   },
//   {
//     title: "Quantum Computing Applications",
//     description: "Exploring practical applications of quantum algorithms",
//     date: "2022",
//     image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=60",
//     link: "https://github.com/yourusername/quantum-computing-research",
//   },
//   {
//     title: "Sustainable Energy Systems",
//     description: "Research on optimizing renewable energy distribution",
//     date: "2021",
//     image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop&q=60",
//     link: "https://github.com/yourusername/sustainable-energy-research",
//   },
//   {
//     title: "AI in Education",
//     description: "Developing adaptive learning systems using AI",
//     date: "2020",
//     image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=60",
//     link: "https://github.com/yourusername/ai-education-research",
//   },
// ];

// export default function Research() {
//   return (
//     <main className="min-h-screen pt-16 bg-background text-foreground">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-12 sm:mb-16"
//         >
//           <h1 className="text-3xl sm:text-4xl font-bold mb-4">Research Work</h1>
//           <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
//             Exploring the frontiers of technology through innovative research projects.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
//           {researchProjects.map((project, index) => (
//             <Link href={project.link} key={project.title} target="_blank" rel="noopener noreferrer">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 whileHover={{ scale: 1.02 }}
//                 className="bg-card rounded-lg overflow-hidden shadow-lg cursor-pointer"
//               >
//                 <div className="aspect-video relative overflow-hidden">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//                   />
//                 </div>
//                 <div className="p-4 sm:p-6">
//                   <div className="flex justify-between items-start mb-4">
//                     <h3 className="text-lg sm:text-xl font-bold">{project.title}</h3>
//                     <span className="text-xs sm:text-sm text-emerald-400">{project.date}</span>
//                   </div>
//                   <p className="text-muted-foreground text-sm sm:text-base">{project.description}</p>
//                 </div>
//               </motion.div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }

"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Research() {
  return (
    <main className="min-h-screen pt-16 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Research Work</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Exploring the frontiers of technology through innovative research projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {/* Placeholder for when there are no research projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-lg overflow-hidden shadow-lg p-4 sm:p-6 text-center"
          >
            <div className="h-48 bg-gray-300 rounded-lg mb-4"></div> {/* Placeholder image */}
            <p className="text-muted-foreground text-sm sm:text-base">
              No research projects available at the moment. Please check back later.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
