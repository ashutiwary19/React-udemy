import React from 'react';
import { CORE_CONCEPTS } from '../data.js';
import CoreConcept from './CoreConcept.jsx';

export default function CoreConcepts(){
    return (
        <section id='core-concepts'>
                  <h2>Core Concepts</h2>
                  <ul>
                    {CORE_CONCEPTS.map(concept => (
                      <CoreConcept key={concept.title}
                        {...concept}
                      />
                    ))}
                    {/* You can add more <CoreConcept /> components here for additional concepts */}
                  </ul>
                </section>
    );
}