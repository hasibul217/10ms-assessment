import { Check } from "lucide-react";

interface Pointer {
  id: string | number;
  text: string;
}

interface CoursePointersProps {
  pointers?: Pointer[];
  title?: string;
}

export default function CoursePointers({ pointers, title }: CoursePointersProps) {
  if (!pointers || pointers.length === 0) return null;

  return (
    <div className="py-10">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border p-4 border-gray-300">
        {pointers.map((pointer) => (
          <div key={pointer.id} className="flex items-start gap-3">
            <Check className="w-6 h-6 text-gray-500 flex-shrink-0 mt-1" />
            <p className="text-gray-800">{pointer.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
