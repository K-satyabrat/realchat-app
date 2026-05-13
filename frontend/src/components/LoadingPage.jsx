import { Loader2 } from "lucide-react";
function LoadingPage() {
  return (
    <div className="min-h-screen  flex items-center justify-center p-4 overflow-hidden">
      <div className="text-white text-xl font-bold flex items-center gap-2 animate-pulse">
        <Loader2 className="animate-spin text-pink-500" size={28} />
        Authenticating...
      </div>
    </div>
  );
}

export default LoadingPage;
