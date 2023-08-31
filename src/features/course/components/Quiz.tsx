import { Button } from "@mantine/core";
import { IconFlag, IconThumbDown, IconThumbUp } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Quiz: React.FC = () => {
  return (
    <main className="mb-10">
      <div className="leading-none border-b-[3px] border-b-sky-900 pb-1 px-1 w-fit">
        <span className="text-black text-opacity-60 text-[32px] font-bold">
          Quiz 1:
        </span>
        <span className="text-black text-[32px] font-bold"> Lesson #1</span>
      </div>

      <div className="text-black text-opacity-70 text-sm font-normal text-center space-y-3 py-16">
        <div>Attemps Allowed : 2</div>
        <div>Time Limit : 1 Mins</div>
      </div>
      <div className="flex justify-center">
        <Button
          component={Link}
          to={"/quizdetail"}
          className="bg-sky-900 hover:bg-sky-800 my-5 rounded-[5px] px-10"
          type="submit"
          size="md"
        >
          Mulai Quiz
        </Button>
      </div>
      <table className="w-full mt-5">
        <tr className="bg-[#3282B8] text-white h-10">
          <th className="text-start pl-3">State</th>
          <th>Marks / 44.00</th>
          <th>Grade / 100.00</th>
          <th className="pr-3">Review</th>
        </tr>
        <tr className="text-center border-b-2 border-sky-900 border-opacity-40 [&>*]:py-2">
          <td className="text-start pl-3">
            <div className="text-black text-sm font-normal">
              Finished
              <br />
              Submitted Friday, 15 May 2023, 08:12 PM
            </div>
          </td>
          <td>44.00</td>
          <td>100.00</td>
          <td className="text-cyan-600 text-sm font-semibold hover:underline hover:cursor-pointer pr-3">
            Review
          </td>
        </tr>
      </table>
    </main>
  );
};

export default Quiz;
