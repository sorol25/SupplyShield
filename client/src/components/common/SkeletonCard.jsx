import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonCard() {
  return (
    <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-3xl border border-white/10">
      <Skeleton height={20} width={120} />
      <Skeleton height={40} className="mt-4" />
    </div>
  );
}

export default SkeletonCard;
