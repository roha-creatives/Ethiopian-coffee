export type Faq = {
  question: string;
  answer: string;
};

// The kit (home.json, faqs.json) only ships an answer for the first question. Answers 2–5
// are drafted from facts stated elsewhere in the kit — service-detail key features,
// project-detail features, the Lawn Care service and the pricing plans — so the accordion
// works; replace them with the client's own wording when available.
export const faqs: Faq[] = [
  {
    question: "How long does a landscaping project usually take?",
    answer:
      "The timeline depends on the project size and complexity. Small gardens may take a few days, while larger landscapes can take several weeks.",
  },
  {
    question: "Do you provide custom garden designs?",
    answer:
      "Yes. Every plan is tailored to your space and taste, with personalized design concepts and 2D & 3D visualizations so you can see your future garden before construction begins.",
  },
  {
    question: "Can you work with eco-friendly and sustainable solutions?",
    answer:
      "Absolutely. We favour native plants chosen for low maintenance and high adaptability, water-efficient designs, and recycled, eco-friendly materials wherever possible.",
  },
  {
    question: "Do you offer maintenance services after installation?",
    answer:
      "Yes. Our Lawn Care & Maintenance service covers reliable mowing, fertilizing, and trimming to keep your lawn fresh, green, and beautifully maintained all year.",
  },
  {
    question: "What is included in your pricing plans?",
    answer:
      "The Essential Plan ($399 / project) includes a design consultation of up to 3 hours, basic plant selection & layout, garden design up to 80 m², and a maintenance guide. The Premium Plan ($999 / project) adds a consultation of up to 6 hours, 2D & 3D landscape concepts, full yard design up to 250 m², a planting, eco-lighting & irrigation plan, and 1-month post-project support. Custom plans are tailored to you.",
  },
];
