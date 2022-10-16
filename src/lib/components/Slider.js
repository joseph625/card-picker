/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from "react";

/**
 * It takes a height and borderRadius as props, and then uses the useEffect hook to set the height and
 * borderRadius as CSS variables. It then hides all the slides, and shows the first two slides.
 *
 * The next function is the hideAll function. It takes a count as arguments, and then
 * loops through all the slides and hides them.
 *
 * The show function takes a count, and a direction as arguments. It then hides all the
 * slides, and then checks if the current slide is the first slide. If it is, it sets the last slide as
 * the previous slide. If the current slide is the last slide, it sets the first slide as the next
 * slide. It then checks if the current slide has a next sibling, and if it does, it sets it as the
 * next slide. Finally, it sets the current slide as the active slide.
 *
 * The prev
 * @param props - {
 * @returns A React component.
 */
function Slider(props) {
  const {
    infinity,
    height,
    borderRadius = 0,
    previousButton,
    nextButton,
  } = props;
  let currentSlide = 1;

  /* Setting the height and borderRadius as CSS variables. It then hides all the slides, and shows the
first two slides. */
  useEffect(() => {
    let root = document.documentElement;
    root.style.setProperty("--main-height-slider", height);
    root.style.setProperty("--border-radius-slide", borderRadius);
    const slide = document.getElementById("main_slider").children[1];
    hideAll(slide.childElementCount, "main_slider");
    slide.children[0].className = "active slide";
    slide.children[1].className = "next_slide slide";
  }, []);

  function hideAll(count) {
    for (let i = 1; i <= count; i += 1) {
      const slide =
        document.getElementById("main_slider").children[1].children[i - 1];
      slide.className = "hide slide";
    }
  }

  function show(count, direction) {
    hideAll(count);
    const slide = document.getElementById("main_slider").children[1];
    const currSlide = slide.children[currentSlide - 2];
    if (currentSlide == 1) {
      // when come to last child, after scroll comeback to first child
      const last = slide.children[count - 1];
      last.className = "prev slide";
    }

    if (currentSlide == count) {
      const first = slide.children[0];
      first.className = "next_slide slide";
    }

    if (currSlide && direction == "next") {
      currSlide.className = "prev slide";
    }

    if (slide.children[currentSlide - 1].nextSibling != null) {
      slide.children[currentSlide - 1].nextSibling.className =
        "next_slide slide";
    }

    if (direction == "next") {
      slide.children[currentSlide - 1].className = "active slide";
    } else {
      slide.children[currentSlide - 1].className = "active_prev slide";
    }
  }

  function prevAction(count) {
    if (currentSlide <= 1 && infinity != "false" && infinity != false) {
      currentSlide = count;
    } else if (currentSlide != 1) {
      // check if infiniti =flase
      currentSlide -= 1;
    }
    show(count, "prev");
  }

  function nextAction(count) {
    if (currentSlide >= count && infinity != "false" && infinity != false) {
      currentSlide = 1;
    } else if (count != currentSlide) {
      // check if infiniti = flase
      currentSlide += 1;
    }
    show(count, "next");
  }

  function wheel(e) {
    const count =
      document.getElementById("main_slider").children[1].childElementCount;
    if (e.deltaY < 0) {
      prevAction(count);
    } else {
      nextAction(count);
    }
  }

  let mouseDown = null;
  let mouseUp = null;
  function leftRightClick(e, type) {
    const count =
      document.getElementById("main_slider").children[1].childElementCount;
    if (type == "mousedown") {
      mouseDown = e.clientY;
      mouseUp = 0;
    }
    if (type == "mouseup") {
      mouseUp = e.clientY;
    }

    if (mouseDown && mouseUp) {
      if (mouseDown > mouseUp) {
        prevAction(count);
      } else if (mouseDown < mouseUp) {
        nextAction(count);
      }
    }
  }

  function clickOnArrows(action) {
    const count =
      document.getElementById("main_slider").children[1].childElementCount;
    action(count, "main_slider");
  }

  function debounce(func, timeout = 50) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  const wheelForMouse = debounce((e) => wheel(e));

  return (
    <section className="test">
      <div
        id="main_slider"
        className="slider_test"
        onWheel={wheelForMouse}
        onMouseDown={(e) => leftRightClick(e, e.type)}
        onMouseUp={(e) => leftRightClick(e, e.type)}
      >
        <button className="prev_btn" onClick={() => clickOnArrows(prevAction)}>
          {previousButton ? (
            <div
              dangerouslySetInnerHTML={{
                __html: previousButton,
              }}
            ></div>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
            </svg>
          )}
        </button>
        <div>{props.children}</div>
        <button className="next_btn" onClick={() => clickOnArrows(nextAction)}>
          {nextButton ? (
            <div
              dangerouslySetInnerHTML={{
                __html: nextButton,
              }}
            ></div>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}

export default Slider;
