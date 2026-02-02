"use client";

import { useState } from "react";
import { addNews, updateNews } from "@/app/actions/crud";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

export default function NewsForm({ onSuccess, editData }: { onSuccess: () => void, editData?: any }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: editData?.title || "",
    date: editData?.date || new Date().toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    excerpt: editData?.excerpt || "",
    content: editData?.content || "",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      if (editData) {
        await updateNews(editData.id, data);
      } else {
        await addNews(data);
      }
      onSuccess();
    } catch (error) {
      alert("Error saving news");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Progress Indicator */}
      <div className="flex items-center justify-between mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center flex-1">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                step >= s
                  ? "bg-[#800020] text-amber-50"
                  : "bg-amber-50/10 text-amber-50/40"
              }`}
            >
              {step > s ? <Check className="w-5 h-5" /> : s}
            </div>
            {s < 3 && (
              <div
                className={`flex-1 h-1 mx-2 ${
                  step > s ? "bg-[#800020]" : "bg-amber-50/10"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Basic Info */}
      {step === 1 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-amber-50 mb-4">
            Basic Information
          </h3>
          <div>
            <label className="block text-sm font-medium text-amber-50 mb-2">
              News Title *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => updateField("title", e.target.value)}
              className="w-full px-4 py-3 bg-black border border-amber-50/20 rounded-lg text-amber-50 focus:outline-none focus:ring-2 focus:ring-[#800020]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-amber-50 mb-2">
              Date *
            </label>
            <input
              type="text"
              value={formData.date}
              onChange={(e) => updateField("date", e.target.value)}
              placeholder="e.g., 15 August 2025"
              className="w-full px-4 py-3 bg-black border border-amber-50/20 rounded-lg text-amber-50 focus:outline-none focus:ring-2 focus:ring-[#800020]"
              required
            />
          </div>
        </div>
      )}

      {/* Step 2: Excerpt */}
      {step === 2 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-amber-50 mb-4">Excerpt</h3>
          <div>
            <label className="block text-sm font-medium text-amber-50 mb-2">
              Short Excerpt *
            </label>
            <textarea
              value={formData.excerpt}
              onChange={(e) => updateField("excerpt", e.target.value)}
              rows={4}
              placeholder="Brief summary for the listing page"
              className="w-full px-4 py-3 bg-black border border-amber-50/20 rounded-lg text-amber-50 focus:outline-none focus:ring-2 focus:ring-[#800020]"
              required
            />
          </div>
        </div>
      )}

      {/* Step 3: Full Content */}
      {step === 3 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-amber-50 mb-4">
            Full Content
          </h3>
          <div>
            <label className="block text-sm font-medium text-amber-50 mb-2">
              Article Content (HTML) *
            </label>
            <textarea
              value={formData.content}
              onChange={(e) => updateField("content", e.target.value)}
              rows={12}
              placeholder="<h2>Title</h2><p>Content...</p>"
              className="w-full px-4 py-3 bg-black border border-amber-50/20 rounded-lg text-amber-50 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#800020]"
              required
            />
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-6">
        {step > 1 && (
          <button
            onClick={() => setStep(step - 1)}
            className="flex items-center gap-2 px-6 py-3 bg-amber-50/10 text-amber-50 rounded-lg hover:bg-amber-50/20 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </button>
        )}
        {step < 3 ? (
          <button
            onClick={() => setStep(step + 1)}
            className="flex items-center gap-2 px-6 py-3 bg-[#800020] text-amber-50 rounded-lg hover:bg-[#600018] transition-colors ml-auto"
          >
            Next
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="flex items-center gap-2 px-6 py-3 bg-[#800020] text-amber-50 rounded-lg hover:bg-[#600018] transition-colors ml-auto disabled:opacity-50"
          >
            {loading ? (editData ? "Updating..." : "Publishing...") : (editData ? "Update News" : "Publish News")}
          </button>
        )}
      </div>
    </div>
  );
}
