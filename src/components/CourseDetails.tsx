interface CourseDetailsProps {
  title?: string;
  details: string[];
}

export default function CourseDetails({ title, details }: CourseDetailsProps) {
  return (
    <div className="pb-10">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {details.length === 0 ? (
        <p className="text-gray-600">No details provided.</p>
      ) : (
        <ul className="list-disc list-inside space-y-2">
          {details.map((item, index) => (
            <li key={index} className="text-gray-800">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
