interface Instructor {
  slug: string;
  image: string;
  name: string;
  short_description?: string;
  description?: string;
}

interface CourseInstructorProps {
  title?: string;
  instructors: Instructor[];
}

export default function CourseInstructor({
  title,
  instructors,
}: CourseInstructorProps) {
  if (!instructors.length) return null;

  return (
    <section className="lg:pt-26 mt-8 lg:mt-0">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {instructors.map((instructor) => (
        <div
          key={instructor.slug}
          className="flex gap-4 items-start border border-gray-300 p-3 lg:w-1/2"
        >
          <img
            src={instructor.image}
            alt={instructor.name}
            className="w-24 h-24 object-cover rounded-full"
          />
          <div>
            <h3 className="text-xl font-semibold">{instructor.name}</h3>
            <p className="text-sm text-gray-600">{instructor.short_description}</p>
            <div
              className="text-sm mt-2"
              dangerouslySetInnerHTML={{ __html: instructor.description || "" }}
            />
          </div>
        </div>
      ))}
    </section>
  );
}
