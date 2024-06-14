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

const initialTopics = [
  {
    id: 0,
    name: "Topic Name",
    lessons: [{ name: "Lesson name", type: "description" }],
  },
];

let countId = 0;
function CurriculumPanel() {
  const { openModal, modalState } = useModal();

  const [topics, setTopics] = useState(initialTopics);

  const addTopic = () => {
    countId += 1;
    setTopics((prev) => [
      ...prev,
      {
        id: countId,
        name: "Topic Name",
        lessons: [{ name: "Lesson name", type: "description" }],
      },
    ]);
  };

  console.log(topics);

  const addLesson = (id) => {
    const updatedTopics = [...topics];

    console.log(updatedTopics);
    updatedTopics[id]?.lessons.push({
      name: "Lesson name",
      type: "description",
    });

    setTopics(updatedTopics);
  };

  const handleTopicNameChange = (newName) => {
    console.log(newName);
    const updatedTopics = topics.map((topic) =>
      topic === modalState.item ? { ...topic, name: newName } : topic
    );
    setTopics(updatedTopics);
  };

  const handleLessonNameChange = (newName, topicIndex, lessonIndex) => {
    const updatedTopics = [...topics];
    console.log(updatedTopics);
    updatedTopics[topicIndex].lessons[lessonIndex] = {
      ...updatedTopics[topicIndex].lessons[lessonIndex],
      name: newName,
    };
    setTopics(updatedTopics);
  };

  return (
    <div>
      <div className="flex justify-between px-5 py-4 border-b border-slate-200">
        <h2 className="text-2xl font-semibold">Course Curriculum</h2>
      </div>
      <div>
        <form>
          <div className="flex flex-col items-center py-4 gap-4">
            {topics?.map((topic, topicIndex) => (
              <div
                key={topicIndex}
                className="bg-slate-100 w-11/12 h-fit rounded-xl flex flex-col gap-10 p-4"
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
                      <img src={DeleteIcon} className="size-6" />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-center py-2 gap-2">
                  {topic.lessons.map((lesson, lessonIndex) => (
                    <LessonInput
                      key={lessonIndex}
                      lesson={lesson}
                      topicIndex={topicIndex}
                      lessonIndex={lessonIndex}
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
                lesson={modalState.item}
                handleLessonNameChange={handleLessonNameChange}
              />
            )}
          </Modal>
        </form>
      </div>
      <div className="flex justify-end px-11">
        <Button title="Save & Next" width="40" />
      </div>
    </div>
  );
}

export default CurriculumPanel;
