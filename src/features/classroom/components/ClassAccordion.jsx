import { useEffect, useState } from "react";
import ClassSidebarItem from "./ClassSidebarItem";
import ArrowDownIcon from "../../../icons/ArrowDown.svg";
import courseApi from "../../../APIs/course";
import useAuth from "../../../hooks/useAuth";
import { useParams } from "react-router-dom";

function ClassAccordion() {
  const [isOpen, setIsOpen] = useState(false);
  const { authUser } = useAuth();
  const [courseDetail, setCourseDetail] = useState({});
  const courseId = useParams();

  const [topics, setTopics] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const fetchAllDetail = async () => {
      try {
        const response = await courseApi.allDetails(courseId);
        const allDetails = response.data;
        console.log(allDetails);
        console.log(allDetails.topics);
        setCourseDetail(allDetails);
        setTopics(allDetails.topics);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllDetail();
  }, [courseId]);

  const handleOpen = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="accordion-container">
      {topics.map((topic, index) => (
        <div
          key={topic.id}
          className={`mb-1 ${
            openIndex === index ? "border-b border-green-600" : ""
          }`}
        >
          <button
            className="w-full h-[70px] p-4 bg-green-50 hover:bg-green-100 transition duration-300 flex justify-between items-center border-b border-green-600"
            onClick={() => handleOpen(index)}
          >
            <h3 className="font-semibold text-xl">{topic.topicName}</h3>
            <img
              src={ArrowDownIcon}
              className={`transform size-6 ${
                openIndex === index ? "rotate-180" : "rotate-0"
              } transition-transform duration-300`}
            />
          </button>
          {openIndex === index && (
            <div className="topic-content">
              {topic?.lessons.map((lesson) => (
                <ClassSidebarItem key={lesson.id} lesson={lesson} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ClassAccordion;
