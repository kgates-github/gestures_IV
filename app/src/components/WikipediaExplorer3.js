import React, { useEffect, useState, useRef, useContext } from 'react';
import { useAnimation, motion } from "framer-motion"
import PageViewer from './PageViewer2';
import WikipediaNavigator from '../utils/WikipediaNavigator';
import TabBar from './TabBar';


function WikipediaExplorer(props) {
  const [tab, setTab] = useState('browse');
  const [navigator, setNavigator] = useState(null);
  const [curIndex, setCurIndex] = useState(null);
  const [wikiPages, setWikiPages] = useState([]);
  
  const scroll_x = useRef(0);
  const scrollXControls = useAnimation();

  function toggleTab(tab) {
    setTab(tab);
  }

  useEffect(() => {
    setNavigator(new WikipediaNavigator(setWikiPages, scroll_x, scrollXControls, setCurIndex));
  }, []);

  useEffect(() => {
    if (!navigator) return;
     // Capture all anchor clicks and prevent default behavior
    document.addEventListener('click', function(event) {
      let target = event.target.closest('a');

      if (target) {
        event.preventDefault();
        navigator.handleLinkClick(target.href)
      }
    });

    navigator.addPageToQueue("Dymaxion");
  }, [navigator]);

  return (
    <>
      <TabBar toggleTab={toggleTab} tab={tab} />
      {(tab === 'browse' && navigator) ? (
        <PageViewer 
          navigator={navigator} 
          curIndex={curIndex} 
          wikiPages={wikiPages}
          scroll_x={scroll_x}
          scrollXControls={scrollXControls}
        />
      ) : (
        <div>History</div>
      )}
    </>
  );
}

export default WikipediaExplorer;


{/* 
  <PageViewer 
    coords={coords} 
    selectMode={selectMode} 
    scrollLeft={scrollLeft}
    scrollRight={scrollRight}
    controls={controls}
    scroll_x={scroll_x}
    wikiPages={wikiPages}
  /> 
*/}