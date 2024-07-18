import Button from "../../../components/Button";
import MenuIcon from "../../../icons/MenuIcon.svg";
import AddIcon from "../../../icons/AddIcon.svg";
import EditIcon from "../../../icons/EditIcon.svg";
import DeleteIcon from "../../../icons/DeleteIcon.svg";
import { useState } from "react";
import LessonInput from "./LessonInput";
import Modal from "../../../components/Modal";
import EditTopicNameModal from "./EditTopicNameModal";
import useModal from "../../../hooks/useModal";
import EditLessonNameModal from "./EditLessonNameModal";
import UploadLessonVideo from "./UploadLessonVideo";
import UploadPDFModal from "./UploadPDFModal";
import UploadDescription from "./UploadDescription";
import topicApi from "../../../APIs/topic";
import lessonApi from "../../../APIs/lesson";
import { toast } from "react-toastify";
import Spinner from "../../../components/Spinner";

const initialTopics = [
  {
    id: 0,
    name: "Topic Name",
    lessons: [{ name: "Lesson name", type: "description", attachment: "" }],
  },
];

let countId = 0;
function CurriculumPanel({
  newCourseId,
  setNewCourseId,
  selectIndex,
  setSelectIndex,
}) {
  const { openModal, closeModal, modalState } = useModal();

  const [topics, setTopics] = useState(initialTopics);
  const [lessonIndex, setLessonIndex] = useState(null);
  const [topicIndex, setTopicIndex] = useState(null);
  const [loading, setLoading] = useState(false);

  const addTopic = () => {
    countId += 1;
    setTopics((prev) => [
      ...prev,
      {
        id: countId,
        name: "Topic Name",
        lessons: [{ name: "Lesson name", type: "description", attachment: "" }],
      },
    ]);
  };

  const addLesson = (id) => {
    const updatedTopics = [...topics];

    updatedTopics[id]?.lessons.push({
      name: "Lesson name",
      type: "description",
    });

    setTopics(updatedTopics);
  };

  const handleTopicNameChange = (newName) => {
    const updatedTopics = topics.map((topic) =>
      topic === modalState.item ? { ...topic, name: newName } : topic
    );
    setTopics(updatedTopics);
  };

  const handleLessonNameChange = (newName, topicIndex, lessonIndex) => {
    const updatedTopics = [...topics];
    updatedTopics[topicIndex].lessons[lessonIndex] = {
      ...updatedTopics[topicIndex].lessons[lessonIndex],
      name: newName,
    };
    setTopics(updatedTopics);
  };

  const handleDeleteTopic = (topicIndex) => {
    const updatedTopics = [...topics];
    updatedTopics.splice(topicIndex, 1);
    setTopics(updatedTopics);
  };
  const handleDeleteLesson = (topicIndex, lessonIndex) => {
    const updatedTopics = [...topics];
    updatedTopics[topicIndex].lessons.splice(lessonIndex, 1);
    setTopics(updatedTopics);
  };

  const handleSelectAttachment = (attachment, topicIndex, lessonIndex) => {
    const updatedTopics = [...topics];
    console.log(updatedTopics[topicIndex].lessons[lessonIndex].type, "kkk");
    updatedTopics[topicIndex].lessons[lessonIndex].type = {
      ...updatedTopics[topicIndex].lessons[lessonIndex],
      type: attachment,
    };
    setTopics(updatedTopics);
  };

  const handleSaveAttachment = (file, topicIndex, lessonIndex) => {
    const updatedTopics = [...topics];
    updatedTopics[topicIndex].lessons[lessonIndex].attachment = {
      ...updatedTopics[topicIndex].lessons[lessonIndex],
      attachment: file,
    };
    setTopics(updatedTopics);

    closeModal();
  };

  const handleSubmit = async (event) => {
    const toastId = toast.loading(" Please wait a moment...");
    try {
      event.preventDefault();

      if (!topics || topics.length === 0) {
        toast.error("No topics found");
      }
      const topicInfo = topics.map((topic) => ({
        courseId: newCourseId,
        topicName: topic.name,
      }));

      const response = await topicApi.createTopics(topicInfo);

      const createdTopics = response.data;

      // mapping the created Topic with the actual TopicId (frontend: id: 0, database: id: 1 )
      const topicIdMap = createdTopics.reduce((acc, topic, index) => {
        acc[index] = topic.id;
        return acc;
      }, {});

      // acc === {0: 13, 1:14, 2: 15}

      // map lesson to the updated topicId
      const lessonInfo = topics.flatMap((topic, topicIndex) => {
        console.log(topic.lessons);
        return topic.lessons.map((lesson) => {
          const attachment =
            lesson.attachment.type.type === "pdf"
              ? lesson.attachment.attachment.name // Use name for pdf
              : lesson.attachment.attachment; // Use for description

          const info = {
            name: lesson.name,
            topicId: topicIdMap[topicIndex], // map frontend index to the topicId from database
            attachment: attachment,
            attachmentType: lesson.attachment
              ? lesson.attachment.type.type
              : null,
          };
          // console.log(info);
          return info;
        });
      });

      // console.log(lessonInfo);
      // lessonInfo === [{name: "lesson name", topicId: 14, attachment: file}]
      // prepare form-data for submit lesson content
      const formData = new FormData();
      formData.append("lessons", JSON.stringify(lessonInfo));

      // append file to form-data
      topics.forEach((topic) => {
        topic.lessons.forEach((lesson) => {
          console.log(lesson.attachment);
          if (lesson.attachment) {
            return formData.append("attachments", lesson.attachment.attachment);
          }
        });
      });

      // for (let pair of formData.entries()) {
      //   console.log(pair[0] + ", " + pair[1]);
      // }

      setLoading(true);

      const lessonResponse = await lessonApi.createLessons(formData);
      console.log(lessonResponse);

      toast.update(toastId, {
        render: "Upload successfully",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      setSelectIndex(3);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <Spinner transparent />}
      <div className="flex justify-between px-5 py-4 border-b border-slate-200">
        <h2 className="text-2xl font-semibold">Course Curriculum</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center py-4 gap-4">
            {topics?.map((topic, topicIndex) => (
              <div
                key={topicIndex}
                className="bg-slate-100 w-11/12 h-fit rounded-xl flex flex-col gap-10 p-4"
                onClick={() => setTopicIndex(topicIndex)}
              >
                <div className="flex justify-between items-center px-4 py-2">
                  <div className="flex items-center gap-2">
                    <img src={MenuIcon} className="size-6" />
                    <h4 className="font-semibold">{topic.name}</h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <button type="button" onClick={() => addLesson(topic.id)}>
                      <img src={AddIcon} className="size-6" />
                    </button>
                    <button
                      type="button"
                      onClick={() => openModal("topicName", topic)}
                    >
                      <img src={EditIcon} className="size-6" />
                    </button>
                    <button type="button">
                      <img
                        src={DeleteIcon}
                        className="size-6"
                        onClick={() => handleDeleteTopic(topicIndex)}
                      />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-center py-2 gap-2">
                  {topic.lessons.map((lesson, lessonIndex) => (
                    <LessonInput
                      key={lessonIndex}
                      lesson={lesson}
                      lessonIndex={lessonIndex}
                      topicIndex={topicIndex}
                      handleDeleteLesson={handleDeleteLesson}
                      handleSelectAttachment={handleSelectAttachment}
                      onClick={() => setLessonIndex(lessonIndex)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="px-12 mb-6 mt-2">
            <Button
              type="button"
              title="Add Topic"
              level="secondary"
              onClick={addTopic}
            />
          </div>
          <Modal>
            {modalState.type === "topicName" && (
              <EditTopicNameModal
                topic={modalState.item}
                handleTopicNameChange={handleTopicNameChange}
              />
            )}
            {modalState.type === "lessonName" && (
              <EditLessonNameModal
                lesson={modalState.item.lesson}
                handleLessonNameChange={handleLessonNameChange}
              />
            )}
            {modalState.type === "video" && (
              <UploadLessonVideo
                handleSaveAttachment={handleSaveAttachment}
                topicIndex={topicIndex}
                lessonIndex={lessonIndex}
              />
            )}
            {modalState.type === "pdf" && (
              <UploadPDFModal
                handleSaveAttachment={handleSaveAttachment}
                topicIndex={topicIndex}
                lessonIndex={lessonIndex}
              />
            )}
            {modalState.type === "description" && (
              <UploadDescription
                handleSaveAttachment={handleSaveAttachment}
                topicIndex={topicIndex}
                lessonIndex={lessonIndex}
              />
            )}
          </Modal>
          <div className="flex justify-end px-11">
            <Button title="Save & Next" width="40" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CurriculumPanel;
