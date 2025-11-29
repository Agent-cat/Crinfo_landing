const AcademicTranslationServicePage = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Academic Translation Service
          </h1>
          <div className="h-1 w-32 bg-blue-600 rounded"></div>
        </div>

        {/* Introduction */}
        <section className="mb-16">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 md:p-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              Crinfo Global offers professional translation services for authors
              who need to translate their Chinese manuscripts into authentic
              English. Simply provide your Chinese manuscript, and we will match
              you with overseas Chinese researchers who have extensive academic
              experience in related fields. Our experts will translate your
              content into fluent English, ensuring precision and authenticity.
              Our dedicated quality control editors meticulously review the
              translated manuscripts, focusing on eliminating grammatical
              errors, spelling mistakes, tense issues, and any morphological
              inconsistencies, ensuring the final English version is flawless
              and meets the requirements for publication in international
              journals.
            </p>
            <div className="bg-blue-600/10 border-l-4 border-blue-600 p-4 rounded">
              <p className="text-gray-800 font-medium">
                Perfect for authors with complete Chinese academic articles who
                need professional translation into authentic English for
                international publication.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-black">
            Why Choose Our Translation Service?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Dedicated Chinese to English Experts",
                description:
                  "Overseas Chinese researchers with rich academic experience in your field",
              },
              {
                title: "Stringent Quality Control",
                description:
                  "Meticulous review process ensuring flawless English translation",
              },
              {
                title: "Preserving Your Academic Integrity",
                description:
                  "Maintaining the precision and authenticity of your research",
              },
              {
                title: "Timely Delivery",
                description: "Reliable turnaround time of 9-10 business days",
              },
              {
                title: "Confidentiality and Trust",
                description:
                  "Your manuscripts are handled with utmost confidentiality",
              },
              {
                title: "International Standards",
                description:
                  "Meeting publication requirements for international journals",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What We Ensure */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-black">
            Quality Assurance
          </h2>
          <div className="bg-blue-600/10 border border-blue-600 rounded-lg p-6 md:p-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              Our quality control process ensures your translated manuscript is
              publication-ready:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Elimination of grammatical errors",
                "Correction of spelling mistakes",
                "Proper tense consistency",
                "Complete morphological accuracy",
                "Authentic English expression",
                "Scientific terminology precision",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-blue-600 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-black">
            Pricing Structure
          </h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {[
                { range: "0-2,000 words", price: "$203" },
                { range: "2,000-4,000 words", price: "$401" },
                { range: "4,000-6,000 words", price: "$586" },
                { range: "Over 6,000 words", price: "$9.2 per 100 words" },
              ].map((tier, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-300 rounded-lg p-6 hover:border-blue-600 transition-colors duration-300"
                >
                  <div className="text-gray-600 text-sm mb-2">{tier.range}</div>
                  <div className="text-3xl font-bold text-blue-600">
                    {tier.price}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              * Standard turnaround time: 9-10 business days
            </p>
          </div>
        </section>

        {/* Service Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-black">
            Service Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Contact via Email",
                description:
                  "Send your Chinese manuscript with document details, subject area, and target journal. We'll provide a quotation.",
              },
              {
                step: "2",
                title: "Payment",
                description:
                  "Review and accept the quotation, then proceed with payment using our accepted methods.",
              },
              {
                step: "3",
                title: "Translation & Editing",
                description:
                  "Expert translators and editors work on your manuscript, ensuring authentic English and scientific accuracy.",
              },
              {
                step: "4",
                title: "Quality Check & Delivery",
                description:
                  "After thorough quality assurance, receive your translated manuscript in tracked and clean versions.",
              },
            ].map((process, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Translation Workflow */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-black">
            Our Translation Workflow
          </h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 md:p-8">
            <div className="space-y-6">
              {[
                {
                  phase: "Initial Translation",
                  description:
                    "Overseas Chinese researchers with field expertise translate your manuscript into fluent, authentic English.",
                },
                {
                  phase: "Quality Control Review",
                  description:
                    "Dedicated editors meticulously review for grammar, spelling, tense, and morphological accuracy.",
                },
                {
                  phase: "Scientific Verification",
                  description:
                    "Ensuring scientific terminology and concepts are accurately conveyed in English.",
                },
                {
                  phase: "Final Polishing",
                  description:
                    "Final review to ensure the manuscript meets international journal publication standards.",
                },
              ].map((workflow, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 pb-6 border-b border-gray-200 last:border-0 last:pb-0"
                >
                  <div className="shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-2">
                      {workflow.phase}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {workflow.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-black">Contact Us</h2>
          <div className="bg-blue-600/10 border border-blue-600 rounded-lg p-6 md:p-8">
            <div className="flex items-center gap-3">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                href="mailto:authorservices@crinfoglobal.com"
                className="text-xl text-black hover:text-blue-600 transition-colors duration-300"
              >
                authorservices@crinfoglobal.com
              </a>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-black">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                question: "What paper formats are accepted?",
                answer:
                  "We accept Microsoft Word documents (.doc or .docx format) for both Chinese manuscripts and final delivery.",
              },
              {
                question:
                  "Whom should I contact if I have questions or feedback?",
                answer:
                  "If you have any questions or feedback, please reach out to our dedicated editorial team at Crinfo Global. Our team thoroughly reviews every translated manuscript to ensure the highest quality. Contact us via email, and we will promptly respond within 1 business day.",
              },
              {
                question: "How can I place an order with Crinfo Global?",
                answer:
                  "To place an order, review our service description and obtain a quote by providing your document's word count. Send us an email with your Chinese manuscript and details including the subject area and target journal. Once you've submitted your document and made payment, we will begin the translation process and deliver your manuscript within 9-10 business days, complete with tracked and clean versions.",
              },
              {
                question:
                  "Will your translation service increase the acceptance rate of articles?",
                answer:
                  "While our professional translation service ensures your manuscript is linguistically flawless and meets international publication standards, acceptance ultimately depends on various factors including the novelty and significance of your research, adherence to journal guidelines, and evaluation by peer reviewers and editors. However, a well-translated manuscript with authentic English significantly improves your chances of successful publication.",
              },
              {
                question: "Who will translate my manuscript?",
                answer:
                  "Your manuscript will be translated by overseas Chinese researchers with extensive academic experience in your specific field. This ensures not only linguistic accuracy but also proper understanding and translation of technical and scientific concepts.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-black mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AcademicTranslationServicePage;
