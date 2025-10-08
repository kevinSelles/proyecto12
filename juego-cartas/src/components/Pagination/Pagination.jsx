import "./Pagination.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ page, totalPages, onPrev, onNext }) => {
  return (
    <div className="pagination">
      <button onClick={onPrev} disabled={page === 1}>
        <ChevronLeft size={22} />
      </button>
      <span>{page} / {totalPages}</span>
      <button onClick={onNext} disabled={page === totalPages}>
        <ChevronRight size={22} />
      </button>
    </div>
  );
};

export default Pagination;