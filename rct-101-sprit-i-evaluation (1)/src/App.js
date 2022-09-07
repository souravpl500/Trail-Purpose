import React from "react";
import "./styles.css";
import Heading from "./Components/Heading";
import Image from "./Components/Image";
import PlayPause from "./Components/PlayPause";

const users = [
  {
    id: 1,
    Image_url: "https://avatars.githubusercontent.com/u/107460099?v=4",
    title: "Full Stack Web Developer",
    alt: "image",
    width: "50%",
    height: "100%"
  }
];

const userImages = users.map((user) => {
  return (
    <Image
      key={user.id}
      src={user.Image_url}
      title={user.title}
      width={user.width}
      height={user.height}
    />
  );
});

export default function App() {
  return (
    <div className="App">
      <Heading />
      {userImages}
      <PlayPause />
      {/* you can comment the below out */}
      {/* <QuestionDescription /> */}
    </div>
  );
}

/* const QuestionDescription = () => {
  return (
    <div>
      <div>You have 3 files</div>
      <li>
        {" "}
        <b>Heading.jsx</b>
      </li>
      <p>
        You need to create a component called Heading. This component will need
        to have an h1 tag, and have its text content as Masai School{" "}
      </p>
      <li>
        {" "}
        <b>Image.jsx</b>
      </li>
      <p>
        You need to create an Image component which accepts the following
        properties / props
        <li>title</li>
        <li>src</li>
        <li>alt</li>
        <li>width</li>
        <li>height</li>
        You need to pass the title to an h2 tag.
        <br />
        You need to create an image tag, which has the width, height, image
        source, and the alternate text passed to the image element
      </p>
      <li>
        {" "}
        <b>PlayPause.jsx</b>
      </li>
      <p>
        Create a component called PlayPause. <br />
        The component should have two elements, an h1 tag and another button
        element.
        <br />
        The h1 tag should have the title <b>The state is paused</b> by default.
        There should be a button, which has the text <b>paused</b>.
        <br />
        Heading 1 - <b>The state is paused</b>
        <br />
        Button text - <b>paused</b>
        <br />
        <br />
        When you <b>click</b> on the button, then the state should change, and
        the h1 tag should now change to <br />
        Heading 1 - <b>The state is playing</b>
        <br />
        Button text - <b>playing</b>
      </p>
    </div>
  );
}; */
