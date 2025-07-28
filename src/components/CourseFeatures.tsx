interface Feature {
  icon: string;
  title: string;
  subtitle?: string;
}

interface CourseFeaturesProps {
  title?: string;
  features?: Feature[];
}

export default function CourseFeatures({ title, features }: CourseFeaturesProps) {
  if (!features || features.length === 0) return null;

  return (
    <section>
      <div className="py-6">
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>

      <div className="py-10 px-4 bg-[#111827]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="p-4 flex items-start gap-4">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-lg font-bold mb-1 text-white">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
