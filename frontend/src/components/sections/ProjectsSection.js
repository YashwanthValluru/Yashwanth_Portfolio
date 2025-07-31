import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { mockData } from '../../data/mockData'; // Ensure this path is correct
import { Button } from '../ui/button'; // Ensure this path is correct

const ProjectCard = ({ project, index, isDark }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  // State to track if the project card's video container is in the viewport
  const [isInView, setIsInView] = useState(false);
  const videoContainerRef = useRef(null); // Ref for the video container for IntersectionObserver

  // State to manage whether the video is currently playing (autoplays when in view)
  const [isPlaying, setIsPlaying] = useState(false);
  // State to manage if the video is muted (starts muted for autoplay, user can unmute)
  const [isMuted, setIsMuted] = useState(true); 

  // Effect to set up and clean up the IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update isInView based on whether the element is intersecting
        setIsInView(entry.isIntersecting);
        // If the card enters view AND it has a YouTube video ID, start playing (muted by default)
        if (entry.isIntersecting && project.youtubeVideoId) {
          setIsPlaying(true);
          setIsMuted(true); // Ensure it starts muted for autoplay compliance
        } else {
          // If it leaves view, pause the video
          setIsPlaying(false);
          // Reset mute state when out of view if desired (optional, keeps it muted next time)
          setIsMuted(true); 
        }
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.5, // Trigger when 50% of the card is visible
      }
    );

    // Observe the video container if the ref is available
    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }

    // Cleanup observer on component unmount to prevent memory leaks
    return () => {
      if (videoContainerRef.current) {
        observer.unobserve(videoContainerRef.current);
      }
    };
  }, [project.youtubeVideoId]); // Re-run effect if project.youtubeVideoId changes

  // Handler for the "Live Demo" button
  const handleDemoClick = () => {
    window.open(project.liveDemo, '_blank');
  };

  // Handler for the "GitHub" button
  const handleGithubClick = () => {
    window.open(project.githubLink, '_blank');
  };

  // Construct the YouTube embed URL dynamically based on isPlaying and isMuted states
  // autoplay=1: attempts to autoplay
  // mute=1/0: controls mute state
  // modestbranding=1: removes YouTube logo
  // rel=0: no related videos from other channels
  // showinfo=0: hides video title/uploader
  // controls=0: hides video controls (for a cleaner auto-play experience)
  const youtubeEmbedUrl = project.youtubeVideoId && isPlaying
    ? `http://www.youtube.com/embed/${project.youtubeVideoId}?autoplay=1&mute=${isMuted ? 1 : 0}&modestbranding=1&rel=0&showinfo=0&controls=0`
    : '';

  // Construct the YouTube thumbnail URL
  const youtubeThumbnailUrl = project.youtubeVideoId
    ? `http://img.youtube.com/vi/${project.youtubeVideoId}/maxresdefault.jpg` // High-res thumbnail
    : ''; // Fallback to empty string if no video ID

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      viewport={{ once: true }}
      className="interactive-card rounded-2xl overflow-hidden shadow-lg transition-all duration-300 border border-yellow-500/30 bg-gradient-to-br from-gray-900/90 via-black to-gray-800/90"
    >
      <div className="grid md:grid-cols-2 gap-0">
        {/* Video/Image Section */}
        <div 
          ref={videoContainerRef} // Attach ref for IntersectionObserver
          className="relative group"
        >
          <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-gray-800/80 to-gray-900/80">
            {isPlaying && project.youtubeVideoId ? (
              // Render the YouTube iframe when the video should be playing
              // The iframe is absolutely positioned to fill its parent (aspect-video)
              <>
                <iframe
                  width="100%"
                  height="100%"
                  src={youtubeEmbedUrl}
                  title={`${project.title} Demo Video`} // Accessible title for the iframe
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  muted={isMuted} // Control mute state directly from component state
                  // Explicitly set display: block, and remove any margin/padding
                  // vertical-align: top helps prevent tiny gaps below inline-block elements
                  // object-fit: cover ensures the video scales nicely within the iframe
                  className="absolute top-0 left-0 w-full h-full block"
                  style={{ margin: 0, padding: 0, verticalAlign: 'top', objectFit: 'cover' }} 
                ></iframe>
                {/* Mute/Unmute Button - positioned relative to the aspect-video container */}
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="absolute bottom-2 right-2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
                >
                  {isMuted ? '🔇' : '🔊'}
                </button>
              </>
            ) : (
              // Display the thumbnail or a "No video demo available" message when not playing
              <div 
                className="w-full h-full flex items-center justify-center bg-cover bg-center" 
                style={{ 
                  backgroundImage: project.youtubeVideoId 
                    ? `url(${youtubeThumbnailUrl})` 
                    : 'none',
                  backgroundColor: project.youtubeVideoId ? 'transparent' : 'rgba(0,0,0,0.5)' 
                }}
              >
                {!project.youtubeVideoId ? (
                  // Message for projects without a video demo
                  <div className="text-center p-8 text-yellow-200">
                    <p>No video demo available</p>
                  </div>
                ) : (
                  // Play button and "Scroll to play" text for projects with a video demo
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto bg-yellow-500 text-black shadow-lg glow-pulse"
                      onClick={() => { // Allow click to play/unmute if not autoplayed by scroll
                        setIsPlaying(true);
                        setIsMuted(false); // Unmute on explicit click
                      }}
                    >
                      ▶️
                    </motion.div>
                    <p className="text-sm text-yellow-200 text-shadow-sm">
                      {isInView ? 'Playing (muted)' : 'Scroll to play'}
                    </p>
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent gradient-text">
              {project.title}
            </span>
          </h3>
          
          <p className="text-sm mb-6 leading-relaxed text-yellow-100">
            {project.description}
          </p>

          {/* Key Highlights */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold mb-3 text-yellow-400">
              Key Highlights:
            </h4>
            <div className="space-y-2">
              {project.highlights.slice(0, isExpanded ? project.highlights.length : 2).map((highlight, hIndex) => (
                <motion.div
                  key={hIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: hIndex * 0.1 }}
                  className="flex items-start space-x-2"
                >
                  <span className="text-yellow-500 text-xs mt-1">✓</span>
                  <span className="text-xs text-yellow-200">
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </div>
            
            {project.highlights.length > 2 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-xs mt-2 text-yellow-400 hover:underline hover:text-yellow-300 transition-colors"
              >
                {isExpanded ? 'Show less' : `Show ${project.highlights.length - 2} more...`}
              </button>
            )}
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold mb-3 text-yellow-400">
              Technologies:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, tIndex) => (
                <motion.span
                  key={tIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: tIndex * 0.05 }}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-400/20 text-yellow-300 border border-yellow-400/30"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={handleDemoClick}
                className="interactive-button w-full sm:w-auto"
              >
                🚀 Live Demo
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={handleGithubClick}
                variant="outline"
                className="w-full sm:w-auto border-yellow-500/50 text-yellow-300 hover:bg-yellow-500/20 hover:border-yellow-400 transition-all duration-300"
              >
                🐙 GitHub
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ProjectsSection component remains unchanged as it just maps ProjectCard
const ProjectsSection = () => {
  const { isDark } = useTheme();
  const { projects } = mockData;

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-black transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent gradient-text">
              Featured Projects 🌟
            </span>
          </h2>
          <p className="mt-4 text-lg text-yellow-200">
            Showcasing innovation in ML and Cloud Technologies
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isDark={true}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="interactive-card inline-flex items-center px-6 py-3 rounded-full bg-yellow-400/20 text-yellow-300 border border-yellow-400/30">
            <span className="mr-2">💡</span>
            More projects available on my GitHub profile
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
