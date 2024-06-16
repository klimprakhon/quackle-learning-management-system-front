import { useEffect, useState } from "react";
import instructorApi from "../../../APIs/instructor";
import Button from "../../../components/Button";
import courseApi from "../../../APIs/course";

function PublishCoursePanel({
  selectIndex,
  setSelectIndex,
  newCourseId,
  setNewCourseId,
}) {
  const [instructor, setInstructor] = useState([]);
  const [value, setValue] = useState(null);

  useEffect(() => {
    const fetchAllInstructor = async () => {
      try {
        const response = await instructorApi.getAll();
        const allInstructor = response.data;
        setInstructor(allInstructor);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllInstructor();
  }, []);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const data = { instructorId: parseInt(value) };

      const response = await courseApi.updateCourse(newCourseId, data);

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex justify-between px-5 py-4 border-b border-slate-200">
        <h2 className="text-2xl font-semibold">Publish Course</h2>
      </div>
      <div className="px-4 py-5">
        <h3 className="text-lg font-medium">Add instructor</h3>
        <form
          className="flex flex-col justify-center gap-3"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center gap-3">
            <label htmlFor="instructor" className="font-light text-md">
              Choose an instructor:
            </label>
            <select
              name="instructor"
              id="instructor"
              className="border border-green-600 bg-green-50 rounded-xl p-3 font-light text-sm"
              onChange={(event) => {
                console.log(event.target.value);
                setValue(event.target.value);
              }}
            >
              {instructor.map((item) => {
                return (
                  <option
                    key={item.id}
                    value={item.id}
                  >{`${item.firstName} ${item.lastName} ${item.roleTitle}`}</option>
                );
              })}
            </select>
          </div>
          <div className="flex justify-between">
            <div></div>
            <Button title="Save for preview" type="submit" width="40" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default PublishCoursePanel;
