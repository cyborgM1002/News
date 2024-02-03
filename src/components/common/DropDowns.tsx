import { useDispatch } from "react-redux";
import { categories, countries } from "../../utils/CommonUtilities";
import { setCategory, setCountry } from "../../redux/slice";
import { CapitalizeFirstLetter } from "../../utils/TextFormatter";

export const CountryDropDown = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-start items-center w-40 rounded-md absolute top-10 bg-gray-600">
      {countries.map(function ({ code, value }, index) {
        return (
          <div
            className="text-center py-1 px-3 border-b rounded-b-md border-gray-400 w-full cursor-pointer"
            onClick={() => dispatch(setCountry(code))}
            key={index}
          >
            {CapitalizeFirstLetter(value)}
          </div>
        );
      })}
    </div>
  );
};
export const CategoryDropDown = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-start items-center w-40 rounded-md absolute top-10 bg-gray-600">
      {categories.map(function (category, index) {
        return (
          <div
            className="text-center py-1 px-3 border-b rounded-b-md border-gray-400 w-full cursor-pointer"
            onClick={() => dispatch(setCategory(category))}
            key={index}
          >
            {CapitalizeFirstLetter(category)}
          </div>
        );
      })}
    </div>
  );
};
