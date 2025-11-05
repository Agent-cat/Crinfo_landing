const StandardEditingServicePage = () => {
  return (
    <div className="min-h-screen bg-black text-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-amber-50">
            Standard Editing Service
          </h1>
          <div className="h-1 w-32 bg-[#800020] rounded"></div>
        </div>

        {/* Introduction */}
        <section className="mb-16">
          <div className="bg-amber-50/5 border border-amber-50/10 rounded-lg p-6 md:p-8">
            <p className="text-amber-50/80 leading-relaxed mb-6">
              Crinfo Global offers professional English editing services tailored
              to authors and researchers seeking to enhance the quality and
              impact of their scholarly articles. Our team of experienced editors
              diligently refines the language, grammar, and organization of your
              manuscripts, ensuring clarity, coherence, and adherence to academic
              writing conventions. With a focus on providing valuable feedback and
              suggestions, we strive to help authors improve their writing skills
              while maintaining their unique voices. Our commitment to
              confidentiality, efficient turnaround time, and excellent customer
              support make us a trusted partner in facilitating successful
              publication journeys.
            </p>
            <div className="bg-[#800020]/10 border-l-4 border-[#800020] p-4 rounded">
              <p className="text-amber-50/90 font-medium">
                Ideal for authors who have experience writing in English and can
                draft their papers independently, but require assistance with
                language refinement and grammar correction.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-amber-50">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Checking for the misuse of scientific and technical words",
              "Correcting errors in scientific terminology",
              "Enhancing consistency in word usage",
              "Checking for basic syntactic errors",
              "Checking for ambiguity or vague semantics",
              "Grammar and punctuation corrections",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-amber-50/5 border border-amber-50/10 rounded-lg p-4 hover:bg-amber-50/10 transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6 text-[#800020] shrink-0 mt-0.5"
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
                <span className="text-amber-50/80">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-amber-50">
            Service Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-amber-50/5 border border-amber-50/10 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#800020]/20 border-b border-amber-50/10">
                  <th className="text-left p-4 text-amber-50 font-semibold">
                    Features
                  </th>
                  <th className="text-center p-4 text-amber-50 font-semibold">
                    Standard Editing
                  </th>
                  <th className="text-center p-4 text-amber-50 font-semibold">
                    Expert Scientific Editing
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Misuse of tense", standard: true, expert: true },
                  { name: "Grammar mistakes", standard: true, expert: true },
                  { name: "Mispunctuation", standard: true, expert: true },
                  { name: "Spelling mistakes", standard: true, expert: true },
                  { name: "Case errors", standard: true, expert: true },
                  {
                    name: "Singular and plural errors",
                    standard: true,
                    expert: true,
                  },
                  {
                    name: "Check for misuse of scientific words",
                    standard: true,
                    expert: true,
                  },
                  {
                    name: "Correcting scientific terminology",
                    standard: true,
                    expert: true,
                  },
                  {
                    name: "Enhancing consistency in word usage",
                    standard: true,
                    expert: true,
                  },
                  {
                    name: "Check for basic syntactic errors",
                    standard: true,
                    expert: true,
                  },
                  {
                    name: "Checking for ambiguity or vague semantics",
                    standard: true,
                    expert: true,
                  },
                  {
                    name: "Enhance accuracy of expression",
                    standard: false,
                    expert: true,
                  },
                  {
                    name: "Improve fluency of sentence expression",
                    standard: false,
                    expert: true,
                  },
                  {
                    name: "Improve sentence coherence",
                    standard: false,
                    expert: true,
                  },
                  {
                    name: "Correct statement structure errors",
                    standard: false,
                    expert: true,
                  },
                  {
                    name: "Check vague statements",
                    standard: false,
                    expert: true,
                  },
                  {
                    name: "Improve paragraph structure rationality",
                    standard: false,
                    expert: true,
                  },
                  {
                    name: "Improve logic of writing",
                    standard: false,
                    expert: true,
                  },
                  {
                    name: "Check rigor of scientific content",
                    standard: false,
                    expert: true,
                  },
                  {
                    name: "Help modify paper per review comments",
                    standard: false,
                    expert: true,
                  },
                  {
                    name: "Compose cover letter for editors",
                    standard: false,
                    expert: true,
                  },
                  {
                    name: "Academic evaluation report",
                    standard: false,
                    expert: true,
                  },
                  {
                    name: "Journal format typesetting",
                    standard: false,
                    expert: true,
                  },
                  {
                    name: "Re-edit of 30% content in one month",
                    standard: false,
                    expert: true,
                  },
                ].map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-amber-50/10 hover:bg-amber-50/5 transition-colors"
                  >
                    <td className="p-4 text-amber-50/80">{row.name}</td>
                    <td className="p-4 text-center">
                      {row.standard ? (
                        <svg
                          className="w-6 h-6 text-[#800020] mx-auto"
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
                      ) : (
                        <span className="text-amber-50/30">—</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.expert ? (
                        <svg
                          className="w-6 h-6 text-[#800020] mx-auto"
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
                      ) : (
                        <span className="text-amber-50/30">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-amber-50">
            Pricing Structure
          </h2>
          <div className="bg-amber-50/5 border border-amber-50/10 rounded-lg p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {[
                { range: "0-2,000 words", price: "$188" },
                { range: "2,000-4,000 words", price: "$347" },
                { range: "4,000-6,000 words", price: "$492" },
                { range: "Over 6,000 words", price: "$7.5 per 100 words" },
              ].map((tier, index) => (
                <div
                  key={index}
                  className="bg-black border border-amber-50/20 rounded-lg p-6 hover:border-[#800020] transition-colors duration-300"
                >
                  <div className="text-amber-50/70 text-sm mb-2">
                    {tier.range}
                  </div>
                  <div className="text-3xl font-bold text-[#800020]">
                    {tier.price}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-amber-50/60 text-sm">
              * Standard turnaround time: 5-7 business days
            </p>
          </div>
        </section>

        {/* Service Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-amber-50">
            Service Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Contact via Email",
                description:
                  "Send your manuscript to our designated email address with details about your document, subject area, and target journal. We'll review it and provide a quotation.",
              },
              {
                step: "2",
                title: "Payment",
                description:
                  "Review and accept the quotation, then proceed with payment using our various accepted payment methods.",
              },
              {
                step: "3",
                title: "Editing Process",
                description:
                  "An experienced editor will be assigned to carefully review your manuscript, addressing grammar, clarity, and overall coherence.",
              },
              {
                step: "4",
                title: "Quality Check & Delivery",
                description:
                  "After thorough quality assurance, receive your edited manuscript via email in both tracked and clean versions.",
              },
            ].map((process, index) => (
              <div
                key={index}
                className="bg-amber-50/5 border border-amber-50/10 rounded-lg p-6 hover:bg-amber-50/10 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-[#800020] rounded-full flex items-center justify-center text-amber-50 font-bold text-xl mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-amber-50 mb-3">
                  {process.title}
                </h3>
                <p className="text-amber-50/70 text-sm leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-amber-50">Contact Us</h2>
          <div className="bg-[#800020]/10 border border-[#800020] rounded-lg p-6 md:p-8">
            <div className="flex items-center gap-3">
              <svg
                className="w-6 h-6 text-[#800020]"
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
                className="text-xl text-amber-50 hover:text-[#800020] transition-colors duration-300"
              >
                authorservices@crinfoglobal.com
              </a>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-amber-50">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                question: "What paper formats are accepted?",
                answer:
                  "We accept Microsoft Word documents (.doc or .docx format).",
              },
              {
                question: "Whom should I contact if I have questions or feedback?",
                answer:
                  "If you have any questions or feedback, please reach out to our dedicated editorial team at Crinfo Global. Our team thoroughly reviews every edited manuscript to ensure the highest quality. Contact us via email, and we will promptly respond within 1 business day.",
              },
              {
                question: "How can I place an order with Crinfo Global?",
                answer:
                  "To place an order, review our service description, obtain a quote by providing your document's word count, then send us an email with details about your document including the subject area and purpose. Once you've submitted your document and made payment, we will begin the editing process and deliver your revised document within the specified timeframe, complete with tracked and clean versions.",
              },
              {
                question:
                  "Will your language editing service increase the acceptance rate of articles?",
                answer:
                  "While our language editing service can significantly enhance the quality of your articles, the acceptance ultimately depends on various factors including the novelty and significance of your research, adherence to journal guidelines, and evaluation by peer reviewers and editors. However, well-edited manuscripts with clear, professional language presentation have a better chance of making a positive impression on reviewers and editors.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-amber-50/5 border border-amber-50/10 rounded-lg p-6 hover:bg-amber-50/10 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-amber-50 mb-3">
                  {faq.question}
                </h3>
                <p className="text-amber-50/70 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default StandardEditingServicePage;
