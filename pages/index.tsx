import React, { FC } from "react";
import Question from "../components/Question";
import Answer from "../components/Answer";

const IndexPage: FC = () => (
  <div className="m-auto text-center sm:text-left">
    <div className="sm:max-w-2xl">
      <p className="italic font-light mx-3 sm:mx-auto">
        Guys, I cracked the code! After spending endless hours cultivating crabs
        🦀 in my backyard, I've at last unearthed the solution to the greatest
        mystery that has puzzled humanity since its inception...
      </p>
    </div>
    <Question />
    <Answer />
  </div>
);

export default IndexPage;
