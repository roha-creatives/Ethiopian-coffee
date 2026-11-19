export type Faq = {
  question: string;
  answer: string;
};

// Answers use only facts published on ethiopiancoffee.net.
export const faqs: Faq[] = [
  {
    question: "What grades of coffee do you export?",
    answer:
      "Specialty only. Grade 1 is our standard export grade, with Grade 2 available on request — every lot is cupped and certified before it ships.",
  },
  {
    question: "Can I request cupping samples?",
    answer:
      "Yes. We offer cupping samples for qualified buyers, green or roasted. Tell us your market and volumes and we will arrange samples from the lots that fit.",
  },
  {
    question: "What documentation comes with a shipment?",
    answer:
      "Full farm-to-port documentation: ECX grading, ICO certification, and phytosanitary compliance, handled in-house for seamless import into your market.",
  },
  {
    question: "Which markets do you ship to?",
    answer:
      "The United States, Germany and the EU, Saudi Arabia and the GCC, the wider Middle East, and China and East Asia. If your market is not listed, talk to us — we ship worldwide.",
  },
  {
    question: "Do you offer private label?",
    answer:
      "Yes. Green or roasted, packed under your own brand — we handle sourcing, roasting, packaging, and export documentation end to end.",
  },
];
