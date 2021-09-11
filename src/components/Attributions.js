import React from "react";

const Attributions = (props) => {
  return (
    <div className="attributions">
      <a href="https://www.vecteezy.com/free-vector/cartoon-house">
        Cartoon House Vectors by Vecteezy
      </a>
      <div>
        Icon by{" "}
        <a href="https://iconpacks.net/?utm_source=link-attribution&utm_content=968">
          Iconpacks
        </a>
      </div>

      <div>
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/dinosoftlabs"
          title="DinosoftLabs"
        >
          DinosoftLabs
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
      <div>
        Icons made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
      <button
        onClick={() => {
          props.setScreen("welcome-page");
        }}
      >
        Go Back
      </button>
    </div>
  );
};

export default Attributions;
