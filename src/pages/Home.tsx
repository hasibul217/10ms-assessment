import React from "react";
import useFetch from "../hooks/useFetch";
import CourseBasicInfo from "../components/CourseBasicInfo";
import CourseTrailer from "../components/CourseTrailer";
import CourseInstructor from "../components/CourseInstructor";
import CourseFeatures from "../components/CourseFeatures";
import CoursePointers from "../components/CoursePointers";
import ExclusiveFeature from "../components/ExclusiveFeature";
import CourseDetails from "../components/CourseDetails";
import CourseCheckList from "../components/CourseCheckList";
import CourseEnroll from "../components/CourseEnroll";

interface Section {
  type: string;
  name?: string;
  values?: any[];
}

interface CourseData {
  title?: string;
  description?: string;
  media?: any;
  cta_text?: any;
  checklist?: any[];
  sections?: Section[];
}

interface ApiResponse {
  data?: CourseData;
}

export default function Home() {
  const URL =
    "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=en";

  // Tell useFetch what type to expect
  const { data: courseData, loading, error } = useFetch<ApiResponse>(URL);

  if (loading) return null;
  if (error) return <p>Error loading data</p>;

  const title = courseData?.data?.title;
  const description = courseData?.data?.description;
  const media = courseData?.data?.media || null;
  const ctaText = courseData?.data?.cta_text || null;
  const checklist = courseData?.data?.checklist || [];
  const sections = courseData?.data?.sections || [];

  // Instructors
  const instructorSection = sections.find(
    (section) => section.type === "instructors"
  );
  const instructors = instructorSection?.values || [];
  const instructorTitle = instructorSection?.name || "Instructor(s)";

  // Course Features
  const featuresSection = sections.find(
    (section) => section.type === "features"
  );
  const features = featuresSection?.values || [];
  const featuresTitle = featuresSection?.name || "Course Features";

  // Course pointers
  const pointersSection = sections.find(
    (section) => section.type === "pointers"
  );
  const pointers = pointersSection?.values || [];
  const pointersTitle = pointersSection?.name || "What You Will Learn";

  // Exclusive Features
  const exclusiveFeatureSection = sections.find(
    (section) => section.type === "feature_explanations"
  );
  const exclusiveFeatures = exclusiveFeatureSection?.values || [];
  const exclusiveFeatureTitle =
    exclusiveFeatureSection?.name || "Exclusive Features";

  // Course Details (Requirements)
  const courseDetailsSection = sections.find(
    (section) => section.type === "requirements"
  );
  const courseDetails = courseDetailsSection?.values || [];
  const courseDetailsTitle = courseDetailsSection?.name || "Course Details";

  return (
    <div className="relative overflow-x-hidden">
      {/* Background Image */}
      <div
        className="h-[500px] md:h-[300px] w-full  absolute top-0 left-0 z-0"
        style={{
          backgroundImage: `url("https://cdn.10minuteschool.com/images/ui_(1)_1716445506383.jpeg")`,
        }}
      />

      {/* Overlay Content */}
      <div className="relative container mx-auto px-4  lg:pt-24 ">
        {/* MOBILE FIRST STACKING ORDER */}
        <div className="flex flex-col  md:hidden">
          <CourseTrailer media={media} />
          <CourseBasicInfo title={title} description={description} />
          <CourseEnroll ctaText={ctaText} />
          <CourseCheckList checklist={checklist} />
          <CourseInstructor title={instructorTitle} instructors={instructors} />
          <CourseFeatures title={featuresTitle} features={features} />
          <CoursePointers pointers={pointers} title={pointersTitle} />
          <ExclusiveFeature
            title={exclusiveFeatureTitle}
            features={exclusiveFeatures}
          />
          <CourseDetails title={courseDetailsTitle} details={courseDetails} />
        </div>

        {/* DESKTOP VIEW SPLIT */}
        <div className="hidden md:flex flex-row gap-16 justify-between items-start">
          {/* Left Column */}
          <div className="md:w-2/3">
            <CourseBasicInfo title={title} description={description} />
            <CourseInstructor
              title={instructorTitle}
              instructors={instructors}
            />
            <CourseFeatures title={featuresTitle} features={features} />
            <CoursePointers pointers={pointers} title={pointersTitle} />
            <ExclusiveFeature
              title={exclusiveFeatureTitle}
              features={exclusiveFeatures}
            />
            <CourseDetails title={courseDetailsTitle} details={courseDetails} />
          </div>

          {/* Right Column */}
          <div className="md:w-1/3 h-fit ">
            <CourseTrailer media={media} />
            <CourseEnroll ctaText={ctaText} />
            <CourseCheckList checklist={checklist} />
          </div>
        </div>
      </div>
    </div>
  );
}
