import React from "react";

export default function Glossary() {
  return (
    <div className="about-container">
      <div className="about-div">
        <h1>Glossary</h1>
        <p>
          Figure skating is hard! Here are some more or less technical terms you
          might not be familiar with.
        </p>
        <p>
          <b>BV (Base Value)</b>
          <br></br>All technical elements have a pre-defined base value. For
          instance, if you land a valid triple axel, whatever happens, you'll
          get a base value of 8.00 points. That base value is then added to the
          grade of execution of the element (GOE). If your triple axel was
          particularly impressive, you can get up to 13.00 points out of it
          (8.00 BV + 5.00 GOE). On the other hand, if you landed on your ass
          after a really ugly axel, you will only end up with 3.00 points (8.00
          BV - 5.00 GOE). The GOE affects the number of points you get out of an
          element, but as long as the element is valid, its BV will remain the
          same.
        </p>
        <p>
          <b>Edge</b>
          <br></br>On a skate, the edges of the blade are the parts on each side
          of the blade's slightly concave bottom. Skating on the deep edges of
          the blade, with the bottom part barely touching the ice, is considered
          beautiful and a sign of good skating skills.
        </p>
        <p>
          <b>Element</b>
          <br></br>A technical element is an element that is graded in the
          judging system. Each element is worth a certain number of points (see:
          Base Value). Some very impressive stuff can happen on the ice but not
          qualify as a technical element in the score system. The elements are
          as follows:
        </p>
        <ul>
          <li>- Jumps and jump combinations</li>
          <li>- Spins</li>
          <li>- Step Sequences</li>
          <li>- Lifts and twist lifts (pairs)</li>
          <li>- Throws (pairs)</li>
          <li>- Death spirals (pairs)</li>
          <li>- Patterns (ice dance)</li>
        </ul>
        <p>
          <b>Four Continents</b>
          <br></br>The Four Continents Figure Skating Championships is like the
          European Championships, but for every other continent. It's the
          highlight of the season for many Japanese, American and Chinese
          skaters.
        </p>
        <p>
          <b>GOE (Grade Of Execution)</b>
          <br></br>The grade of execution is the score granted to a skater for
          the quality of execution of an element. It can range from -5 to +5.
          <br></br>For each element, the judges have a list of bullet points to
          assess its quality, and they grant more or less points depending on
          the number of applicable bullets points. At the end of the program,
          elements base values and GOE are summed up and form the 'technical'
          part of the score. This is supposed to make the judging fair and
          consistent. However, judges rarely apply their own rules and GOE can
          be as subjective as PCS.
        </p>

        <p>
          <b>PCS (Program Components Scores)</b>
          <br></br>PCS are the scores that do not depend on the execution of the
          technical elements. It's the 'artistic' part of the score. Five
          criteria are appraised for PCS: skating skills, transitions,
          performance, composition and interpretation.<br></br>You can
          -presumably- have amazing jumps and low PCS, or be a very artistic
          skater with super high PCS and a fairly low technical score. PCS are
          more subjective and can be quite abstract.
        </p>
        <p>
          <b>Quad</b>
          <br></br>A quadruple jump, that is to say a jump with four rotations
          off the ice.<br></br>Most ladies can't land any quads (although there
          are more and more exceptions!) while men can't really be competitive
          internationally if they can't consistently land at least one.<br></br>
          Quad lutzes, quad loops, quad toeloops, quad salchows and quad flips
          have all been landed in competition. The only quad no one knows how to
          do yet is the elusive quad axel...
        </p>
        <p>
          <b>Skating skills</b>
          <br></br>Skating skills is a broad term which basically defines the
          way a skater behaves on the ice: their edges, their speed, their
          glide, their turns, their steps, their ability to skate on one foot,
          their ice coverage... Everything that makes skating look beautiful and
          effortless.<br></br>Skating skills have little to do with technical
          elements such as jumps. The best skating skills are found in ice
          dance, but some singles skaters have gorgeous skating skills as well.
        </p>
        <p>
          <b>Uncle</b>
          <br></br>A term used by some figure skating fans to characterize a
          slightly older male skater. You start entering uncle territory when
          you're around 28 years old. This is meant as an endearing term, not a
          derogatory one. I love uncles! It's nice to have adults in the sport
          who are still competitive and have long careers. Uncles also tend to
          have less traditional music choices and have more fun on the ice.
          Unfortunately, ladies tend to retire before they reach their late
          twenties, so there is no female equivalent.
        </p>
        <p>
          <b>Warhorse</b>
          <br></br>A warhorse is a piece of music that has been skated to A LOT
          during figure skating history.<br></br>The term is liberally used now
          (Despacito has become kind of a warhorse during the Olympic season)
          but, traditionally, it refers to a story that's been told a lot, not
          just the music. For instance, Romeo and Juliet is a warhorse, whether
          you use Tchaikovsky, Prokofiev or the soundtrack from the 1996 movie.
          Carmen is a warhorse. Swan Lake is a warhorse. Moulin Rouge. Phantom
          of the Opera. You get the point.<br></br>Warhorses are easily
          identified by judges, therefore you're not really taking any risks
          with your program, but it also makes it harder to stand out when
          you're the fifth Carmen during a competition. It is, however, possible
          to take risks with a warhorse and make it really unique (see Daisuke
          Takahashi's 'Cyberswan' program). Nowadays you can also see modern
          warhorses emerge, such as Muse's Exogenesis Symphony.
        </p>
      </div>
    </div>
  );
}
