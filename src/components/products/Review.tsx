import { Star, StarHalf, StarBorder } from "@mui/icons-material";

const Review = ({ rating, review }: { rating: number; review: number }) => {
  const fullStars = Math.floor(rating); // To'liq yulduzlar
  const decimalPart = rating % 1; // Kasr qismi
  const hasHalfStar = decimalPart >= 0.25 && decimalPart < 0.75; // Yarim yulduz sharti
  const extraFullStar = decimalPart >= 0.75 ? 1 : 0; // Agar 0.75 dan yuqori bo'lsa, yana bitta to'liq yulduz qo'shamiz
  const emptyStars = 5 - fullStars - extraFullStar - (hasHalfStar ? 1 : 0); // Bo'sh yulduzlar

  return (
    <div className="flex items-center gap-1 text-yellow-500">
      {[...Array(fullStars + extraFullStar)].map((_, i) => (
        <Star key={`full-${i}`} fontSize="small" />
      ))}

      {hasHalfStar && <StarHalf fontSize="small" />}

      {[...Array(emptyStars)].map((_, i) => (
        <StarBorder key={`empty-${i}`} fontSize="small" />
      ))}

      <span className="text-gray-700 text-sm ml-1">({review})</span>
    </div>
  );
};

export default Review;
