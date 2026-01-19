type NewsCardProps = {
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
};

const NewsCard = ({
  title,
  description,
  category,
  date,
  image,
}: NewsCardProps) => {
  return (
    <div className="group rounded-xl overflow-hidden bg-card border shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
          {category}
        </span>
      </div>

      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold leading-tight line-clamp-2">
          {title}
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>

        <div className="flex items-center justify-between text-xs text-muted-foreground pt-2">
          <span>{date}</span>
          <span className="text-primary font-medium cursor-pointer">
            Read more →
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
