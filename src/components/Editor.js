import React from "react";
import ReactMde from "react-mde";
import Showdown from "showdown";

const Editor = () => {
  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });

  const [value, setValue] = React.useState("**Hello world!!!**");
  const [selectedTab, setSelectedTab] =
    (React.useState < "write") | ("preview" > "write");

  return (
    <div className="container">
      <ReactMde
        value={value}
        onChange={setValue}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
      />
    </div>
  );
};

export default Editor;
