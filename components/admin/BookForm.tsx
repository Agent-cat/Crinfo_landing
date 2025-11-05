"use client";

import { useState } from "react";
import { addBook, updateBook } from "@/app/actions/crud";
import { ArrowLeft, ArrowRight, Check, Upload, X } from "lucide-react";
import Image from "next/image";

interface BookFormProps {
  onSuccess: () => void;
  editData?: {
    id: number;
    title: string;
    categories: string[];
    authors: string[];
    description: string;
    image: string;
  };
}

export default function BookForm({ onSuccess, editData }: BookFormProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState(editData?.image || "");
  const [formData, setFormData] = useState({
    title: editData?.title || "",
    categories: editData?.categories.join(", ") || "",
    authors: editData?.authors.join(", ") || "",
    description: editData?.description || "",
    image: editData?.image || "",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const uploadData = new FormData();
      uploadData.append("file", file);
      uploadData.append("type", "books");

      const response = await fetch("/api/upload", {
        method: "POST",
        body: uploadData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Upload failed");
      }

      const { url } = await response.json();
      setImagePreview(url);
      updateField("image", url);
    } catch (error) {
      alert(error instanceof Error ? error.message : "Error uploading image");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      if (editData) {
        await updateBook(editData.id, data);
      } else {
        await addBook(data);
      }
      onSuccess();
    } catch (error) {
      alert(`Error ${editData ? "updating" : "adding"} book`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Progress Indicator */}
      <div className="flex items-center justify-between mb-8">
        {[1, 2].map((s) => (
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
            {s < 2 && (
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
              Book Title *
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
              Categories (comma-separated) *
            </label>
            <input
              type="text"
              value={formData.categories}
              onChange={(e) => updateField("categories", e.target.value)}
              placeholder="e.g., LITERATURE, HISTORY"
              className="w-full px-4 py-3 bg-black border border-amber-50/20 rounded-lg text-amber-50 focus:outline-none focus:ring-2 focus:ring-[#800020]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-amber-50 mb-2">
              Authors (comma-separated) *
            </label>
            <input
              type="text"
              value={formData.authors}
              onChange={(e) => updateField("authors", e.target.value)}
              placeholder="e.g., John Doe, Jane Smith"
              className="w-full px-4 py-3 bg-black border border-amber-50/20 rounded-lg text-amber-50 focus:outline-none focus:ring-2 focus:ring-[#800020]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-amber-50 mb-2">
              Book Cover Image *
            </label>
            
            {/* Image Preview */}
            {imagePreview && (
              <div className="mb-4 relative w-48 h-64 bg-amber-50/5 border border-amber-50/10 rounded-lg overflow-hidden">
                <Image
                  src={imagePreview}
                  alt="Preview"
                  fill
                  className="object-cover"
                />
                <button
                  type="button"
                  onClick={() => {
                    setImagePreview("");
                    updateField("image", "");
                  }}
                  className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Upload Button */}
            <div className="flex gap-4">
              <label className="flex-1 cursor-pointer">
                <div className="flex items-center justify-center gap-2 px-4 py-3 bg-amber-50/10 border border-amber-50/20 rounded-lg hover:bg-amber-50/20 transition-colors">
                  <Upload className="w-5 h-5" />
                  <span>{uploading ? "Uploading..." : "Upload Image"}</span>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={uploading}
                  className="hidden"
                />
              </label>
            </div>
            <p className="text-xs text-amber-50/60 mt-2">
              Supported: JPEG, PNG, WebP (Max 5MB)
            </p>
          </div>
        </div>
      )}

      {/* Step 2: Description */}
      {step === 2 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-amber-50 mb-4">Description</h3>
          <div>
            <label className="block text-sm font-medium text-amber-50 mb-2">
              Book Description *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => updateField("description", e.target.value)}
              rows={8}
              className="w-full px-4 py-3 bg-black border border-amber-50/20 rounded-lg text-amber-50 focus:outline-none focus:ring-2 focus:ring-[#800020]"
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
        {step < 2 ? (
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
            {loading ? (editData ? "Updating..." : "Adding...") : (editData ? "Update Book" : "Add Book")}
          </button>
        )}
      </div>
    </div>
  );
}
