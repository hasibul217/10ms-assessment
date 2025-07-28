interface Feature {
  id: string | number;
  title: string;
  checklist: string[];
  file_type: "image" | "video" | string;
  file_url: string;
}

interface ExclusiveFeatureProps {
  title?: string;
  features?: Feature[];
}

export default function ExclusiveFeature({ title, features }: ExclusiveFeatureProps) {
  if (!features || features.length === 0) return null;

  return (
    <div className="py-4">
      {title && <h2 className="text-2xl font-semibold mb-8 text-gray-900">{title}</h2>}
      {features.map(({ id, title, checklist, file_type, file_url }) => (
        <div
          key={id}
          className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center border p-3 border-gray-300"
        >
          {/* Left: Title + Checklist */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {checklist.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Right: Image or Video */}
          <div className="flex justify-center">
            {file_type === "image" && (
              <img
                src={file_url}
                alt={title}
                className="rounded-lg shadow-md w-full max-w-sm object-cover max-h-48"
              />
            )}
            {file_type === "video" && (
              <video controls className="rounded-lg shadow-md w-full max-w-sm max-h-48">
                <source src={file_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
