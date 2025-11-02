import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "This platform transformed our marketing operations. We've seen a 300% increase in qualified leads within just 3 months.",
    author: "Sarah Johnson",
    role: "CMO",
    company: "TechCorp Solutions",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    quote: "The AI-powered insights are game-changing. We're making data-driven decisions faster than ever before.",
    author: "Michael Chen",
    role: "VP of Marketing",
    company: "GrowthLabs Inc",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
  },
  {
    quote: "Best marketing automation platform we've used. The ROI speaks for itself - we've cut costs by 60% while improving results.",
    author: "Emily Rodriguez",
    role: "Marketing Director",
    company: "InnovateCo",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily"
  },
  {
    quote: "The team collaboration features and automation capabilities have made our marketing team 5x more productive.",
    author: "David Kim",
    role: "Head of Growth",
    company: "ScaleUp Ventures",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
  },
  {
    quote: "Finally, a platform that understands B2B marketing. The precision targeting has dramatically improved our conversion rates.",
    author: "Jennifer Walsh",
    role: "Chief Marketing Officer",
    company: "Enterprise Solutions Group",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer"
  },
  {
    quote: "From campaign creation to analysis, everything is seamless. This is the future of marketing automation.",
    author: "Robert Taylor",
    role: "Marketing Manager",
    company: "CloudTech Systems",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert"
  }
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="relative py-32 px-6 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Loved by Marketing Teams</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join hundreds of companies already transforming their marketing
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-effect p-8 rounded-2xl relative group"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                <Quote className="w-6 h-6 text-black" />
              </div>

              {/* Testimonial Content */}
              <div className="relative z-10">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-full overflow-hidden bg-white/10"
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 glass-effect p-8 rounded-2xl"
        >
          {[
            { value: "4.9/5", label: "Average Rating" },
            { value: "500+", label: "Happy Clients" },
            { value: "10M+", label: "Campaigns Run" },
            { value: "99.9%", label: "Uptime" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold mb-2 gradient-text">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2" />
    </section>
  );
}
