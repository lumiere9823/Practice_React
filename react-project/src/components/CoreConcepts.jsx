import React from 'react';
import CoreConcept from './CoreConcept';
import { CORE_CONCEPTS } from '../data';
import Section from './Section';

export default function CoreConcepts() {
  return (
    <Section title='CoreConcepts' id="core-concepts" classname="">
        <ul>
          {
            CORE_CONCEPTS.map((concept, index) => (
              <CoreConcept key={index} {...concept} />
            ))
          }
        </ul>
      </Section>
  );
}
