import React, { useEffect, useCallback, useRef } from 'react';

import FloatingWindow from './components/FloatingWindow';
// import ContentBlock from './components/ContentBlock';

import './App.scss';
import content from './content';

const coef = 0.05;

function App() {
  let ssDist = useRef(0);

  const heightShim = useRef();
  const headings = useRef([]);

  const ss = useCallback(() => {
    ssDist.current += Math.floor((window.pageYOffset - ssDist.current) * coef);
    heightShim.current.style.transform = `translate3D(0, -${ssDist.current}px, 0)`;
    requestAnimationFrame(ss);
  }, []);

  useEffect(() => {
    const contentHeight = Math.floor(heightShim.current.getBoundingClientRect().height);
    document.body.style.height = `${contentHeight}px`;
    ss();
  }, [ss]);

  return (
    <>
      <FloatingWindow />
      <div className="ss__outer" >
        <div className="ss__inner">
          <div className="col col--md" ref={heightShim}>
          {content.map(({ heading, body }, i) => 
            <article
              className="row row--md block"
              ref={ref => headings.current.push(ref)}
              key={i}
            >
              <h1>{heading}</h1>
              {body.map((line, i) => <p key={i}>{line}</p>)}
            </article>)}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
