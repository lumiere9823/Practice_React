import React from 'react';
import TabButton from "./TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "../data";
import { useState } from "react";
import Section from './Section';
import Tabs from './Tabs';


export default function Examples() {
    const [tabcontent, setTabContent] = useState("");
  function handleSelect(selectedTab) {
    setTabContent(selectedTab);
  }

  let content = <p>Select a tab to view examples</p>;
  if(tabcontent){
    content = (
      <div id="tab-content">
            <h3>{EXAMPLES[tabcontent]?.title}</h3>
            <p>{EXAMPLES[tabcontent]?.description}</p>
            <pre>
              <code>{EXAMPLES[tabcontent]?.code}</code>
            </pre>
          </div>
    )
  }
  return (
    <Section title='Examples' id="examples">
        
        <Tabs buttonsContainer="menu" buttons={
            <>
          <TabButton
            title="Components"
            isSelected={tabcontent === "components"}
            onSelect={() => handleSelect("components")}
          >
            Components
          </TabButton>
          <TabButton title="JSX" 
            isSelected={tabcontent === "jsx"}
            onSelect={() => handleSelect("jsx")}>
            JSX
          </TabButton>
          <TabButton 
            title="PROPS" 
            isSelected={tabcontent === "props"}
            onSelect={() => handleSelect("props")}>
            PROPS
          </TabButton>
          <TabButton 
            title="STATE" 
            isSelected={tabcontent === "state"}
            onSelect={() => handleSelect("state")}>
            STATE
          </TabButton>
        </>
        }>{content}</Tabs>
      </Section>
  );
}
