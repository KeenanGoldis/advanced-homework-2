import React from "react";

function TopNav(props) {
  return (
    <div className="top-nav">
      <ul>
        <li>
          <a onClick={(event) => {
            event.preventDefault();
            return props.changeCategory("headlights");
          }}
            href="#">car lights
          </a>
        </li>

        <li>
          <a onClick={(event) => {
            event.preventDefault();
            return props.changeCategory("tires");
          }}
            href="#">Car Wheels
          </a>
        </li>

        <li>
          <a onClick={(event) => {
            event.preventDefault();
            return props.changeCategory("bumpers");
          }}
            href="#">Car Bumpers
          </a>
        </li>

        <li>
          <a onClick={(event) => {
            event.preventDefault();
            return props.changeCategory("audio");
          }}
            href="#">Car Audiosystems
          </a>
        </li>

        <li><a href="contact.html">Feedback</a></li>
        <div className="clear"> </div>
      </ul>
    </div>
  )
}
export default TopNav;
