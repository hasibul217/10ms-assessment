

interface CourseBasicInfoProps {
  title?: string;
  description?: string;
}

export default function CourseBasicInfo({
  title,
  description,
}: CourseBasicInfoProps) {
  return (
    <div className="rounded max-w-2xl text-white mt-8 lg:mt-0">
      <h1 className="lg:text-4xl text-2xl font-bold mb-3 text-left">{title}</h1>
      <div
        className="text-left text-gray-200 text-sm lg:text-base"
        dangerouslySetInnerHTML={{ __html: description || "" }}
      />
    </div>
  );
}
