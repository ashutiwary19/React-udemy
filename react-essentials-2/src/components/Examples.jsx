import {EXAMPLES} from '../data.js';
import { useState } from 'react';
import TabButton from './TabButton.jsx';
import Section from './Section.jsx';


export default function Examples() {
    const [tabState, setTabState] = useState("");
    // tabState will always be in a array format: [initialValue, setValueFunction] 

    function handleSelect(selectedButton) {
        // Selected button => JSX, Components, Props, State
        console.log('Tab selected:', selectedButton);
        setTabState(previousState => selectedButton);
    }


    let tabContent = <p>Please select a tab to see an example.</p>;
    if (tabState) {
    tabContent = (
        <div id="tab-content">
        <h3>{EXAMPLES[tabState]?.title || "Please select a tab to see an example."}</h3>
        <p>{EXAMPLES[tabState]?.description || "No description available for this example."}</p>
        <pre>
            <code>{EXAMPLES[tabState]?.code || ""}</code>
        </pre>
        </div>
    );
    } 

    return (<Section id="examples" title="Examples">
            <menu>
              <TabButton onSelect={() => handleSelect('jsx') } isSelected={tabState === 'jsx'}>JSX</TabButton>
              <TabButton onSelect={() => handleSelect('components') } isSelected={tabState === 'components'}>Components</TabButton>
              <TabButton onSelect={() => handleSelect('props') } isSelected={tabState === 'props'}>Props</TabButton>
              <TabButton onSelect={() => handleSelect('state') } isSelected={tabState === 'state'}>State</TabButton>
            </menu>
            {tabContent}
          </Section>);
}