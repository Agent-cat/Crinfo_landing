export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="w-16 h-16 border-4 border-amber-50/20 border-t-[#800020] rounded-full animate-spin"></div>
    </div>
  );
}
