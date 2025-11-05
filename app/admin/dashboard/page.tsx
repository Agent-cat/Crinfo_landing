"use client";

import { useState } from "react";
import { logout } from "@/app/actions/auth";
import { deleteJournal, deleteBook, deleteNews } from "@/app/actions/crud";
import JournalForm from "@/components/admin/JournalForm";
import BookForm from "@/components/admin/BookForm";
import NewsForm from "@/components/admin/NewsForm";
import JournalsConstants from "@/constants/JournalsConstants";
import BooksConstants from "@/constants/BooksConstants";
import NewsConstants from "@/constants/NewsConstants";
import {
  BookOpen,
  FileText,
  Newspaper,
  Plus,
  Trash2,
  LogOut,
  X,
  Edit,
} from "lucide-react";

type Tab = "journals" | "books" | "news";
type ModalType = "journal" | "book" | "news" | null;

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<Tab>("journals");
  const [showModal, setShowModal] = useState<ModalType>(null);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteItem, setDeleteItem] = useState<{type: Tab, id: number} | null>(null);

  const handleSuccess = () => {
    setShowModal(null);
    setEditingItem(null);
    setRefreshKey((prev) => prev + 1);
    window.location.reload();
  };

  const handleEdit = (type: ModalType, item: any) => {
    setEditingItem(item);
    setShowModal(type);
  };

  const handleDeleteRequest = (type: Tab, id: number) => {
    setDeleteItem({ type, id });
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (!deleteItem) return;

    try {
      if (deleteItem.type === "journals") await deleteJournal(deleteItem.id);
      if (deleteItem.type === "books") await deleteBook(deleteItem.id);
      if (deleteItem.type === "news") await deleteNews(deleteItem.id);
      window.location.reload();
    } catch (error) {
      alert("Error deleting item");
    } finally {
      setShowDeleteModal(false);
      setDeleteItem(null);
    }
  };

  return (
    <div className="min-h-screen bg-black text-amber-50">
      {/* Header */}
      <div className="bg-amber-50/5 border-b border-amber-50/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <button
              onClick={() => logout()}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-amber-50/10">
          <button
            onClick={() => setActiveTab("journals")}
            className={`flex items-center gap-2 px-6 py-3 font-semibold transition-colors ${
              activeTab === "journals"
                ? "text-[#800020] border-b-2 border-[#800020]"
                : "text-amber-50/60 hover:text-amber-50"
            }`}
          >
            <BookOpen className="w-5 h-5" />
            Journals ({JournalsConstants.length})
          </button>
          <button
            onClick={() => setActiveTab("books")}
            className={`flex items-center gap-2 px-6 py-3 font-semibold transition-colors ${
              activeTab === "books"
                ? "text-[#800020] border-b-2 border-[#800020]"
                : "text-amber-50/60 hover:text-amber-50"
            }`}
          >
            <FileText className="w-5 h-5" />
            Books ({BooksConstants.length})
          </button>
          <button
            onClick={() => setActiveTab("news")}
            className={`flex items-center gap-2 px-6 py-3 font-semibold transition-colors ${
              activeTab === "news"
                ? "text-[#800020] border-b-2 border-[#800020]"
                : "text-amber-50/60 hover:text-amber-50"
            }`}
          >
            <Newspaper className="w-5 h-5" />
            News ({NewsConstants.length})
          </button>
        </div>

        {/* Add Button */}
        <div className="mb-6">
          <button
            onClick={() => setShowModal(activeTab === "journals" ? "journal" : activeTab === "books" ? "book" : "news")}
            className="flex items-center gap-2 px-6 py-3 bg-[#800020] text-amber-50 rounded-lg hover:bg-[#600018] transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add {activeTab === "journals" ? "Journal" : activeTab === "books" ? "Book" : "News"}
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4" key={refreshKey}>
          {activeTab === "journals" &&
            JournalsConstants.map((journal) => (
              <div
                key={journal.id}
                className="bg-amber-50/5 border border-amber-50/10 rounded-lg p-6 flex justify-between items-start"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-amber-50 mb-2">
                    {journal.title}
                  </h3>
                  <p className="text-amber-50/60 text-sm">{journal.issn}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit("journal", journal)}
                    className="p-2 text-blue-500 hover:bg-blue-500/10 rounded transition-colors"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDeleteRequest("journals", journal.id)}
                    className="p-2 text-red-500 hover:bg-red-500/10 rounded transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}

          {activeTab === "books" &&
            BooksConstants.map((book) => (
              <div
                key={book.id}
                className="bg-amber-50/5 border border-amber-50/10 rounded-lg p-6 flex justify-between items-start"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-amber-50 mb-2">
                    {book.title}
                  </h3>
                  <p className="text-amber-50/60 text-sm">
                    {book.authors.join(", ")}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit("book", book)}
                    className="p-2 text-blue-500 hover:bg-blue-500/10 rounded transition-colors"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDeleteRequest("books", book.id)}
                    className="p-2 text-red-500 hover:bg-red-500/10 rounded transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}

          {activeTab === "news" &&
            NewsConstants.map((news) => (
              <div
                key={news.id}
                className="bg-amber-50/5 border border-amber-50/10 rounded-lg p-6 flex justify-between items-start"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-amber-50 mb-2">
                    {news.title}
                  </h3>
                  <p className="text-amber-50/60 text-sm">{news.date}</p>
                </div>
                <button
                  onClick={() => handleDeleteRequest("news", news.id)}
                  className="p-2 text-red-500 hover:bg-red-500/10 rounded transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-black border border-amber-50/20 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-black border-b border-amber-50/10 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-amber-50">
                {editingItem ? "Edit" : "Add"} {showModal === "journal" ? "Journal" : showModal === "book" ? "Book" : "News"}
              </h2>
              <button
                onClick={() => {
                  setShowModal(null);
                  setEditingItem(null);
                }}
                className="p-2 hover:bg-amber-50/10 rounded transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              {showModal === "journal" && <JournalForm onSuccess={handleSuccess} editData={editingItem} />}
              {showModal === "book" && <BookForm onSuccess={handleSuccess} editData={editingItem} />}
              {showModal === "news" && <NewsForm onSuccess={handleSuccess} />}
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-black border border-amber-50/20 rounded-lg max-w-md w-full">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-amber-50 mb-4">Confirm Deletion</h2>
              <p className="text-amber-50/70 mb-6">Are you sure you want to delete this item?</p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
