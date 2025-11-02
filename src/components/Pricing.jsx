import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { useRef } from 'react';

const plans = [
  {
    name: "Starter",
    price: "$299",
    period: "/month",
    description: "Perfect for small teams getting started",
    features: [
      { name: "Up to 5 team members", included: true },
      { name: "10,000 monthly campaigns", included: true },
      { name: "Basic analytics", included: true },
      { name: "Email support", included: true },
      { name: "API access", included: false },
      { name: "Custom integrations", included: false },
      { name: "Dedicated account manager", included: false },
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Professional",
    price: "$799",
    period: "/month",
    description: "For growing businesses with advanced needs",
    features: [
      { name: "Up to 25 team members", included: true },
      { name: "Unlimited campaigns", included: true },
      { name: "Advanced analytics & AI insights", included: true },
      { name: "Priority support", included: true },
      { name: "Full API access", included: true },
      { name: "Custom integrations", included: true },
      { name: "Dedicated account manager", included: false },
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations",
    features: [
      { name: "Unlimited team members", included: true },
      { name: "Unlimited campaigns", included: true },
      { name: "Enterprise-grade analytics", included: true },
      { name: "24/7 premium support", included: true },
      { name: "Full API access", included: true },
      { name: "Custom integrations", included: true },
      { name: "Dedicated account manager", included: true },
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="relative py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Simple, Transparent Pricing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your business needs
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 glass-effect rounded-full p-2">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-full font-medium transition-all relative ${
                billingCycle === 'annual'
                  ? 'bg-white text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Annual
              <span className="absolute -top-2 -right-2 bg-white text-black text-xs px-2 py-0.5 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-2xl ${
                plan.popular
                  ? 'bg-white text-black'
                  : 'glass-effect'
              } ${plan.popular ? 'scale-105 shadow-2xl' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-black' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.popular ? 'text-gray-700' : 'text-gray-400'}`}>
                  {plan.description}
                </p>
                <div className="flex items-end gap-1">
                  <span className={`text-5xl font-bold ${plan.popular ? 'text-black' : 'text-white'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg mb-2 ${plan.popular ? 'text-gray-600' : 'text-gray-400'}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-lg font-semibold mb-8 transition-all ${
                  plan.popular
                    ? 'bg-black text-white hover:bg-gray-900'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                {plan.cta}
              </motion.button>

              {/* Features List */}
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.popular ? 'text-green-600' : 'text-white'
                      }`} />
                    ) : (
                      <X className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.popular ? 'text-gray-400' : 'text-gray-600'
                      }`} />
                    )}
                    <span className={`text-sm ${
                      feature.included
                        ? plan.popular ? 'text-black' : 'text-white'
                        : plan.popular ? 'text-gray-500' : 'text-gray-600'
                    }`}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center text-gray-500 mt-12"
        >
          All plans include a 14-day free trial. No credit card required.
        </motion.p>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
    </section>
  );
}
