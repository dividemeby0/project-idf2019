import React from "react";

export default function About() {
  return (
    <div className="about-container">
      <div id="about-why" className="about-div">
        <h1>Why did I create this nightmare of a website?</h1>
        <p>I'm a figure skating fan. (Yeah, I know.)</p>
        <p>
          My friends are not, but since I'm always nagging them about skating, a
          few of them agreed to go with me to Grenoble in November to attend the{" "}
          <b>2019 Internationaux de France</b>, a major competition that's part
          of the figure skating Grand Prix series.
        </p>
        <p>They're great friends, right?</p>
        <p>
          Unfortunately, they still know next to nothing about the sport, so the
          goal of this website is to explain to them:
        </p>
        <ol className="my-list">
          <li>Why this competition is relevant</li>
          <li>Which skaters will be present</li>
          <li>Who we should be excited to see</li>
        </ol>
        <p>Honestly, I just want everyone to have a good time.</p>
        <p>
          NB: This site is incomplete as of yet but I will try to add all the
          skaters over time.
        </p>
      </div>
    </div>
  );
}
