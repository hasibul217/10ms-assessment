interface CtaText {
  name?: string;
  value?: string;
}

interface CourseEnrollProps {
  ctaText?: CtaText | null;
}

export default function CourseEnroll({ ctaText }: CourseEnrollProps) {
  return (
    <div className="my-6 mt-16 lg:mt-4">
      <span className="block text-2xl font-semibold mb-2 text-gray-800">1000 BDT</span>
      <button className="bg-green-600 hover:bg-green-700 text-white w-full font-semibold py-2 px-6 rounded">
        {ctaText?.name || "Enroll"}
      </button>
    </div>
  );
}
