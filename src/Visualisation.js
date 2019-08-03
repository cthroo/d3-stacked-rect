import React, {useEffect, useRef} from 'react';
import * as d3 from 'd3';

function Visualisation(props) {
  const visEl = useRef(null);
  useEffect(() => {
    var svgContainer = d3.select(visEl.current);
    //make the rectangle
    svgContainer
      .append('rect')
      .attr('x', 50)
      .attr('y', 50)
      .attr('fill', 'blue')
      .attr('width', 200)
      .attr('height', 200);
  }, props.data);

  return (
    <>
      <svg width={200} height={200}>
        <g ref={visEl} />
      </svg>
    </>
  );
}

export default Visualisation;
