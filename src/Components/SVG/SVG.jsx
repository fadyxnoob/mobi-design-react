import React, { useRef, useEffect, useState } from 'react';
import image from '../../assets/images/svg.svg'

const SVG = ({ baseColor, colorOne, colorTwo, logosColor }) => {
  
  const svgRef = useRef(null);
  const [svgContent, setSvgContent] = useState('');
  const [svgLoaded, setSvgLoaded] = useState(false);
     
  // Load SVG content from local storage or fetch if not available
  useEffect(() => {
    const savedSvg = localStorage.getItem('customSvg');
    if (savedSvg) {
      setSvgContent(savedSvg);
      setSvgLoaded(true);
    } else {
      fetch(image)
        .then((response) => response.text())
        .then((data) => {
          setSvgContent(data);
          setSvgLoaded(true);
        })
        .catch((error) => {
          console.error('Error fetching SVG:', error);
        });
    }
  }, []);

  // Update SVG colors and store updated SVG in local storage
  useEffect(() => {
    if (!svgLoaded || !svgRef.current) return;

    function updateColorInline(selector, color) {
      const elements = svgRef.current.querySelectorAll(selector);

      if (elements.length === 0) {
        console.error(`No elements found for selector: ${selector}`);
        return;
      }

      elements.forEach(element => {
        element.style.setProperty("fill", color, "important");
        if (element.tagName.toLowerCase() === 'g') {
          element.querySelectorAll('*').forEach(child => {
            child.style.setProperty("fill", color, "important");
          });
        }
      });
    }

    updateColorInline('#baseColor', baseColor);
    updateColorInline('#colorOne', colorOne);
    updateColorInline('#colorTwo', colorTwo);
    updateColorInline('#logosColors', logosColor);
    // updateColorInline('#riderNameColor', riderNameColor);
    // updateColorInline('#riderNumberColor', riderNumberColor);

    // Serialize SVG content and store in local storage
    const svgElement = svgRef.current.querySelector('svg');
    if (svgElement) {
      const updatedSvg = new XMLSerializer().serializeToString(svgElement);
      localStorage.setItem('customSvg', updatedSvg);
      // console.log('SVG saved to local storage:', updatedSvg); // Log the updated SVG
    } else {
      console.error('SVG element not found in svgRef.current');
    }

  }, [baseColor, colorOne, colorTwo, logosColor, svgLoaded]);

  // Ensure SVG content is updated after fetching
  useEffect(() => {
    if (svgLoaded && svgRef.current) {
      const svgElement = svgRef.current.querySelector('svg');
      if (svgElement) {
        const updatedSvg = new XMLSerializer().serializeToString(svgElement);
        localStorage.setItem('customSvg', updatedSvg);
        // console.log('SVG updated and saved to local storage:', updatedSvg);
      }
    }
  }, [svgLoaded]);

  return (
    <div className="svg-holder p-10 w-full">
      <div
        ref={svgRef}
        className="h-full w-full object-contain"
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
    </div>
  );
};

export default SVG;
