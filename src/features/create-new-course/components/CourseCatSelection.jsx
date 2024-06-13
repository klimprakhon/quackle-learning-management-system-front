import { useEffect, useState } from "react";
import categoryApi from "../../../APIs/category";

function CourseCatSelection({
  category,
  setCategory,
  subcategory,
  setSubcategory,
  subcategoryId,
  setSubcategoryId,
  level,
  setLevel,
}) {
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await categoryApi.getAllCategory();
        const { categoryData } = response.data;
        setCategory(categoryData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategory();
  }, [setCategory]);

  const onChangeCategory = async (categoryId) => {
    const response = await categoryApi.getSubcategory(categoryId);
    const { subcategoryData } = response.data;
    setSubcategory(subcategoryData);
  };

  const onChangeSubcategory = (subcategoryId) => {
    setSubcategoryId(subcategoryId);
  };

  return (
    <div className="grid grid-cols-3 px-5 py-4 gap-8">
      <div className="col-span-1 flex flex-col">
        <label htmlFor="category" className="text-lg font-medium">
          Course Category
        </label>
        <select
          name="category"
          className="border rounded-md p-2"
          onChange={(event) => onChangeCategory(event.target.value)}
        >
          {category.map((item, index) => {
            return (
              <option key={index} value={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="col-span-1 flex flex-col">
        <label htmlFor="subcategory" className="text-lg font-medium">
          Course Subcategory
        </label>
        <select
          name="subcategory"
          className="border rounded-md p-2"
          onChange={(event) => onChangeSubcategory(event.target.value)}
        >
          {subcategory.map((item, index) => {
            return (
              <option key={index} value={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="col-span-1 flex flex-col">
        <label htmlFor="level" className="text-lg font-medium">
          Course Level
        </label>
        <select
          name="level"
          className="border rounded-md p-2"
          onChange={(event) => setLevel(event.target.value)}
        >
          <option value="BEGINNER">Beginner</option>
          <option value="INTERMEDIATE">Intermediate</option>
          <option value="ADVANCED">Advanced</option>
        </select>
      </div>
    </div>
  );
}

export default CourseCatSelection;
