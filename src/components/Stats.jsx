import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const lineChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Campaign Performance',
      data: [30, 45, 60, 70, 85, 95, 110],
      borderColor: 'rgba(255, 255, 255, 1)',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      fill: true,
      tension: 0.4,
      borderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6,
    }
  ]
};

const doughnutData = {
  labels: ['Email', 'Social', 'Search', 'Display'],
  datasets: [
    {
      data: [35, 25, 25, 15],
      backgroundColor: [
        'rgba(255, 255, 255, 0.9)',
        'rgba(255, 255, 255, 0.7)',
        'rgba(255, 255, 255, 0.5)',
        'rgba(255, 255, 255, 0.3)',
      ],
      borderColor: 'rgba(0, 0, 0, 1)',
      borderWidth: 2,
    }
  ]
};

const barChartData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    {
      label: 'Revenue Growth',
      data: [120, 150, 180, 220],
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderColor: 'rgba(255, 255, 255, 1)',
      borderWidth: 1,
    }
  ]
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      titleColor: 'white',
      bodyColor: 'white',
      borderColor: 'rgba(255, 255, 255, 0.2)',
      borderWidth: 1,
    }
  },
  scales: {
    x: {
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
      ticks: {
        color: 'rgba(255, 255, 255, 0.7)',
      }
    },
    y: {
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
      ticks: {
        color: 'rgba(255, 255, 255, 0.7)',
      }
    }
  }
};

const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: 'white',
        padding: 15,
        font: {
          size: 12
        }
      }
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      titleColor: 'white',
      bodyColor: 'white',
      borderColor: 'rgba(255, 255, 255, 0.2)',
      borderWidth: 1,
    }
  }
};

export default function Stats() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
            <span className="gradient-text">Data-Driven Results</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See how our platform drives measurable growth and ROI
          </p>
        </motion.div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Line Chart */}
          <motion.div
            className="stat-card glass-effect p-8 rounded-2xl h-80"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-white">Growth Trajectory</h3>
            <div className="h-60">
              <Line data={lineChartData} options={chartOptions} />
            </div>
          </motion.div>

          {/* Doughnut Chart */}
          <motion.div
            className="stat-card glass-effect p-8 rounded-2xl h-80"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-white">Channel Distribution</h3>
            <div className="h-60">
              <Doughnut data={doughnutData} options={doughnutOptions} />
            </div>
          </motion.div>
        </div>

        {/* Bar Chart - Full Width */}
        <motion.div
          className="stat-card glass-effect p-8 rounded-2xl h-96"
          whileHover={{ scale: 1.01 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-white">Quarterly Performance</h3>
          <div className="h-72">
            <Bar data={barChartData} options={chartOptions} />
          </div>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { value: "350%", label: "ROI Increase" },
            { value: "2.5x", label: "Lead Generation" },
            { value: "65%", label: "Cost Reduction" },
            { value: "24/7", label: "Automation" }
          ].map((metric, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="glass-effect p-6 rounded-xl text-center"
            >
              <div className="text-4xl font-bold mb-2 gradient-text">{metric.value}</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
    </section>
  );
}
