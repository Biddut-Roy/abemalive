"use client";

type Props = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ page, totalPages, onPageChange }: Props) => {
  return (
    <div className="flex justify-center gap-3 mt-10">
      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
          className={`h-9 w-9 rounded-md border text-sm transition
            ${
              page === i + 1
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted"
            }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
