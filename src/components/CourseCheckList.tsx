interface ChecklistItem {
  id: string | number;
  icon: string;
  text: string;
}

interface CourseCheckListProps {
  checklist?: ChecklistItem[];
}

export default function CourseCheckList({ checklist }: CourseCheckListProps) {
  if (!checklist || checklist.length === 0) return null;

  return (
    <div className="my-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-900">এই কোর্সে যা থাকছে</h2>
      <div className="flex flex-col gap-4">
        {checklist.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            <img src={item.icon} alt="icon" className="w-6 h-6" />
            <span className="text-sm text-gray-800">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
