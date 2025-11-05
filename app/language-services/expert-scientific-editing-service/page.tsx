const ExpertScientificEditingServicePage = () => {
  return (
    <div className="min-h-screen bg-black text-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-amber-50">
            Expert Scientific Editing Service
          </h1>
          <div className="h-1 w-32 bg-[#800020] rounded"></div>
        </div>

        {/* Introduction */}
        <section className="mb-16">
          <div className="bg-amber-50/5 border border-amber-50/10 rounded-lg p-6 md:p-8">
            <p className="text-amber-50/80 leading-relaxed mb-6">
              Crinfo Global offers premium scientific editing services designed
              for authors tackling complex academic work, particularly those
              dealing with intricate or abstract subjects. Our expert service
              includes an in-depth critique of your research and significantly
              improves the readability of your manuscript. This premium editing
              should be your first choice for manuscripts requiring high-level
              editorial support prior to submission, especially when targeting
              high-impact journals.
            </p>
            <div className="bg-[#800020]/10 border-l-4 border-[#800020] p-4 rounded">
              <p className="text-amber-50/90 font-medium">
                Perfect for authors with less writing experience or those
                addressing highly complex research topics, aiming for submission
                to higher-impact journals.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-amber-50">
            Comprehensive Features
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Checking for the misuse of scientific and technical words",
              "Correcting errors in scientific terminology",
              "Enhancing consistency in word usage",
              "Checking for basic syntactic errors",
              "Checking for ambiguity or vague semantics",
              "Improve the written scientific logic",
              "Improve the clarity of paragraph structure rationality",
              "Provide in-depth critical comments from reviewers' perspective",
              "Extensive manuscript assessment, edits, and feedback",
              "Identify and correct errors, omissions, and deficiencies",
              "Provide scientific evaluation report and valuable feedback",
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

        {/* What's Specific */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-amber-50">
            What Makes Expert Scientific Editing Special?
          </h2>
          <div className="bg-[#800020]/10 border border-[#800020] rounded-lg p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Help modify paper according to review comments",
                "Free cover letter for editors",
                "Free re-edit of 30% content within one month",
                "Free journal format typesetting",
                "Free evaluation report",
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-amber-50/90 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Differences */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-amber-50">
            Understanding the Difference
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Standard Editing */}
            <div className="bg-amber-50/5 border border-amber-50/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-amber-50 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-50 rounded-full"></span>
                Standard Editing
              </h3>
              <p className="text-amber-50/70 leading-relaxed">
                Suitable for authors with considerable writing experience who can
                produce an initial draft in English but require language and
                grammar refinement. We ensure papers have no spelling, grammar,
                tense, punctuation errors, or inaccuracies in scientific
                terminology, meeting language requirements for international
                journal publication.
              </p>
            </div>

            {/* Expert Scientific Editing */}
            <div className="bg-[#800020]/10 border border-[#800020] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-amber-50 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#800020] rounded-full"></span>
                Expert Scientific Editing
              </h3>
              <p className="text-amber-50/70 leading-relaxed">
                Designed for authors with less writing experience or complex
                research topics targeting higher-impact journals. Includes
                in-depth proofreading, article structuring from reviewers'
                perspective, ensuring scientific accuracy, and enhancing overall
                coherence and logical structure. Features two rounds of service
                with academic suggestions and queries, significantly improving
                manuscript quality for high-impact journal submissions.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-amber-50">
            Detailed Service Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-amber-50/5 border border-amber-50/10 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#800020]/20 border-b border-amber-50/10">
                  <th className="text-left p-4 text-amber-50 font-semibold">
                    Features
                  </th>
                  <th className="text-center p-4 text-amber-50 font-semibold">
                    Standard
                  </th>
                  <th className="text-center p-4 text-amber-50 font-semibold">
                    Expert Scientific
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
                { range: "0-2,000 words", price: "$299" },
                { range: "2,000-4,000 words", price: "$598" },
                { range: "4,000-6,000 words", price: "$859" },
                { range: "Over 6,000 words", price: "$13 per 100 words" },
              ].map((tier, index) => (
                <div
                  key={index}
                  className="bg-black border border-[#800020] rounded-lg p-6 hover:border-[#800020]/50 transition-colors duration-300"
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
                  "Send your manuscript with document details, subject area, and target journal. We'll review and provide a detailed quotation.",
              },
              {
                step: "2",
                title: "Payment",
                description:
                  "Review the quotation and proceed with payment using our various accepted methods.",
              },
              {
                step: "3",
                title: "Expert Editing",
                description:
                  "An experienced scientific editor will comprehensively review your manuscript, addressing all aspects of scientific writing and logic.",
              },
              {
                step: "4",
                title: "Quality Assurance & Delivery",
                description:
                  "After rigorous quality checks, receive your edited manuscript with tracked changes, clean version, and evaluation report.",
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
                  "To place an order, review our service description and obtain a quote by providing your document's word count. Send us an email with details about your document, including the subject area and purpose. Once you've submitted your document and made payment, we will begin the editing process and deliver your revised document within the specified timeframe, complete with tracked and clean versions.",
              },
              {
                question:
                  "Will your language editing service increase the acceptance rate of articles?",
                answer:
                  "While our expert scientific editing service can significantly enhance the quality of your articles, acceptance ultimately depends on various factors including the novelty and significance of your research, adherence to journal guidelines, and evaluation by peer reviewers and editors. However, our comprehensive editing approach, including in-depth scientific review and structural improvements, substantially increases your manuscript's chances of acceptance in high-impact journals.",
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

export default ExpertScientificEditingServicePage;
