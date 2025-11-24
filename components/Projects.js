const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with a custom CMS, built with Next.js, Node.js, and deployed on AWS for scalability.',
    image: '/Screenshot_3.png',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'AWS'],
    liveUrl: 'https://ecom-front-end-next.vercel.app',
    caseStudyUrl: '#'
  },
  {
    title: 'User Dashboard',
    description: 'A real-time data visualization tool for a SaaS company, using React, Python, and WebSocket for live updates.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    technologies: ['React',  'WebSocket', 'D3.js'],
    liveUrl: 'https://dashboard-application-using-react.vercel.app',
    caseStudyUrl: '#'
  },


  {
    title: 'Woo Commerce Website : Gosto Bari',
    description: 'GostoBari is an online fresh chicken delivery platform offering customizable chicken cuts exactly the way customers prefer. The website showcases premium-quality chicken selections—from whole skin-on birds to curry cuts—professionally chosen and delivered fresh to customers’ doorsteps.',
    image: '/Screenshot_1.png',
    technologies: ['WordPress'],
    liveUrl: 'https://gostobari.com',
    caseStudyUrl: '#'
  },



  {
    title: 'SaaS Application',
    description: 'A multi-tenant SaaS application with focus on scalability and security, deployed on cloud infrastructure.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    technologies: ['Angular', '.NET Core', 'Azure', 'SQL Server'],
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    title: 'Mobile-First Web App',
    description: 'A responsive web application designed for seamless mobile experience, leveraging server-side rendering.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    technologies: ['Next.js', 'Firebase', 'PWA', 'Tailwind CSS'],
    liveUrl: '#',
    caseStudyUrl: '#'
  },
];

export default function Projects() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A selection of our work. Each project is a testament to our commitment to quality and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="flex flex-col rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden transition-all hover:shadow-xl"
              >
                <div 
                  className="w-full h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                
                <div className="p-6 flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 mt-2">
                    <a 
                      href={project.liveUrl}
                      className="text-blue-600 font-bold text-sm hover:underline dark:text-blue-400"
                    >
                      View Live
                    </a>
                    <a 
                      href={project.caseStudyUrl}
                      className="text-blue-600 font-bold text-sm hover:underline dark:text-blue-400"
                    >
                      Case Study
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="inline-flex h-12 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-blue-600 px-8 text-base font-bold text-white transition-colors hover:bg-blue-700">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}