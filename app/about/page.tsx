import React from "react";
import Link from "next/link";
import {
  BookOpen,
  Award,
  Globe,
  Users,
  FileText,
  CheckCircle,
  ExternalLink,
  Shield,
  Archive,
} from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white text-black text-justify">
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              About Crinfo Global
            </h1>
            <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-white/90">
              A leading academic publisher dedicated to advancing Open Access
              journals across core disciplines such as science, technology,
              medicine, and social sciences.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12 mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Crinfo Global is a leading academic publisher dedicated to
              advancing Open Access journals across core disciplines such as
              science, technology, medicine, and social sciences. Founded in
              January 1997, Crinfo Global has upheld rigorous publishing
              standards, building strong collaborations with scholars,
              researchers, and academic institutions worldwide.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Currently, Crinfo Global publishes fully peer-reviewed Open Access
              online journals, offering global access to cutting-edge research.
              In addition to journals, our portfolio includes academic books,
              monographs, and conference proceedings.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              As a proud member of Committee on Publication Ethics (COPE),
              Society for Scholarly Publishing (SSP), Association of Learned and
              Professional Society Publishers (ALPSP), Council of Science
              Editors (CSE), and International Association of Scientific,
              Technical and Medical Publishers (STM), Crinfo Global continuously
              works to support open science while upholding the highest
              standards of research integrity.
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-200 hover:shadow-lg hover:shadow-blue-600/20 transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white mb-4">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Open Access</h3>
              <p className="text-gray-600">
                Free access to all published research for global readership
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-200 hover:shadow-lg hover:shadow-blue-600/20 transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">
                Peer Reviewed
              </h3>
              <p className="text-gray-600">
                Rigorous peer review process ensuring quality research
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-200 hover:shadow-lg hover:shadow-blue-600/20 transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">
                Ethical Standards
              </h3>
              <p className="text-gray-600">
                Zero tolerance policy for ethical violations and plagiarism
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-200 hover:shadow-lg hover:shadow-blue-600/20 transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white mb-4">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">
                Global Reach
              </h3>
              <p className="text-gray-600">
                Indexed in major databases for worldwide visibility
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Access Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Open Access
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Journals published by Crinfo Global are fully open access;
              research articles, reviews or any other content on this platform
              are available to everyone free-of-charge. To be able to provide
              open access journals, we finance publication through article
              processing charges (APC); these are usually covered by the
              authors' institutes or research funding bodies.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are committed to open access publishing as a means to foster
              the exchange of research among scientists, especially across
              disciplines.
            </p>
          </div>
        </div>
      </section>

      {/* Publication Ethics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Publication Ethics Statement
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As a member of the Committee on Publication Ethics (COPE), Crinfo
              Global is committed to maintaining the highest ethical standards
              in scholarly publishing. We take the responsibility to enforce a
              rigorous peer-review together with strict ethical policies and
              standards to ensure adding the highest quality scientific works to
              the field of scholarly publication.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Crinfo Global takes publishing ethics issues very seriously on
              every level. Our staff are trained to identify and report any
              irregularities. Our editors proceed with a zero tolerance policy
              for ethical violations, including plagiarism, data falsification
              and authorship misconduct.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              To confirm the originality of all submitted manuscripts, we use
              iThenticate for similarity checks against prior publications.
            </p>
          </div>
        </div>
      </section>

      {/* License and APC */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* License */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:shadow-blue-600/20 transition-all">
              <h3 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6" />
                License
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Crinfo Global publishes articles under a Creative Commons
                Attribution (CC BY) License. We are committed to open access
                publishing as a means to foster the exchange of research among
                scientists, especially across disciplines.
              </p>
            </div>

            {/* APC */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:shadow-blue-600/20 transition-all">
              <h3 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6" />
                Article Processing Charges
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Crinfo Global publishes all its journals as fully open access.
                An Article Processing Charge (APC) is required to cover the
                costs associated with peer review management, copyediting,
                production services, data conversion, and content dissemination.
              </p>
              <p className="text-gray-700 leading-relaxed">
                There are no charges for declined articles. Some items
                (Editorials, Corrections, Retractions, etc.) are published free
                of charge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Archiving & Repository */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Archiving & Repository Policy
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <Archive className="w-8 h-8 text-blue-600 shrink-0 mt-1" />
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  All journals published by Crinfo Global are assigned Digital
                  Object Identifiers (DOIs) and registered with Crossref, a
                  nonprofit organization that provides DOI registration and
                  metadata linking services to enhance the discoverability and
                  accessibility of scholarly content.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Additionally, all published content is archived in Portico,
                  ensuring permanent digital preservation for scholarly
                  journals.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Crinfo Global allows and encourages authors to post both their
                  pre- and post-publication manuscripts including published
                  version, accepted version and submitted version for
                  self-archiving and/or archiving in an institutional repository
                  without embargo time. These practices benefit authors with
                  productive exchanges as well as earlier and greater citation
                  of published work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Memberships and Partnerships
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Crinfo Global is a proud member of leading international
              organizations committed to excellence in scholarly publishing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:shadow-blue-600/20 transition-all">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">COPE</h3>
                  <p className="text-gray-600 text-sm">
                    Committee on Publication Ethics
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:shadow-blue-600/20 transition-all">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">SSP</h3>
                  <p className="text-gray-600 text-sm">
                    Society for Scholarly Publishing
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:shadow-blue-600/20 transition-all">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">ALPSP</h3>
                  <p className="text-gray-600 text-sm">
                    Association of Learned and Professional Society Publishers
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:shadow-blue-600/20 transition-all">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">CSE</h3>
                  <p className="text-gray-600 text-sm">
                    Council of Science Editors
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:shadow-blue-600/20 transition-all">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">STM</h3>
                  <p className="text-gray-600 text-sm">
                    International Association of Scientific, Technical and
                    Medical Publishers
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:shadow-blue-600/20 transition-all">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    Crossref
                  </h3>
                  <p className="text-gray-600 text-sm">
                    DOI Registration and Metadata Services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
