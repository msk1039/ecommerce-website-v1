
import { FaUser } from "react-icons/fa";

export default function Menu() {
  return (
    <>
      <div className="flex items-center justify-center">
        <a href="./cart" className="w-8 ">
        <FaUser className="h-5 w-5"/>

        </a>{" "}
      </div>
    </>
  );
}
