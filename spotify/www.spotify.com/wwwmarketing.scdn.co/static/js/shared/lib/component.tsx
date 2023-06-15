import React from 'react';
import XXH from 'xxhashjs';
import * as LandingPageLibraryComponents from '@spotify-internal/landing-page-library';
import { ComponentConfiguration } from '@spotify-internal/landing-page-library';
import { ComponentData } from '../components/Page';
import { EventParamTypes } from '@spotify-internal/touchdown-analytics/types';
import { Span, globalTracer, Tags } from 'opentracing';
import { createGlobalStyle } from 'styled-components';

const debugElement = ({ text }: { text: string }) => {
  return React.createElement('blockquote', null, text);
};

const studentUsStyles = createGlobalStyle`
section[data-component-name="upsell"] header > p:first-child {
  background-image: url('https://campaigns.scdn.co/images/hulu-green.png');
  background-repeat: no-repeat;
  background-size: 60px;
  height: 33px;
}

section[data-component-name="upsell"] header h3 {
  font-size: 18px;
  line-height: initial;
}

section[data-component-name="productdescription"] > article h1 br {
  display: inline;
}

section[data-component-name="productdescription"] > article h2 br {
    display: inline
   }

section[data-component-name="benefits"] > article {
  max-width: 850px;
}

section[data-component-name="benefits"] ul div[data-in-view] {
  height: 50px
} 

section[data-component-name="benefits"] li {
  align-items: center;
} 
section[data-component-name="benefits"] footer {
  margin: 20px auto 35px;
}

@media (min-width: 768px) {
   section[data-component-name="productdescription"] > article h1 br {
    display: none
   }

   section[data-component-name="productdescription"] > article h2 br {
    display: none
   }
}

}
`;

const LPLComponents = Object.entries(LandingPageLibraryComponents).map<
  [string, any]
>(([name, component]) => [name.toLowerCase(), component]);

const components = new Map([
  ...(LPLComponents as [string, any]),
  ['debug', debugElement],
  ['componentgroup', 'div'],
  ['student-us-styles', studentUsStyles],
]);

export function getComponentName(name: string) {
  return name.toLowerCase();
}

export function getComponentKey(component: string, props: object) {
  return `${component}.${XXH.h32(JSON.stringify(props), 0xcafebabe).toString(
    16,
  )}`;
}

export function getComponentConfiguration() {
  return ComponentConfiguration;
}

export function createComponent(
  rawName: string,
  attributes: any,
  eventParams?: EventParamTypes,
  parentSpan?: Span,
) {
  const tracer = globalTracer();
  const componentSpan = tracer.startSpan(`create-${rawName}`, {
    childOf: parentSpan,
  });

  const componentName = getComponentName(rawName);
  const componentType = components.get(componentName) as string;

  if (!componentType) {
    componentSpan.addTags({
      [Tags.ERROR]: true,
    });
    componentSpan.log({
      event: 'error',
      'error.kind': 'ComponentNotFoundError',
    });
    throw new Error(`Component "${componentName}" not found.`);
  }

  /*
   * temporary workaround
   *
   * We'll eventually need to support grouping components to provide things
   * like shared backgrounds. We're not sure where this feature will live
   * yet (could be somewhere in www-marketing, could be in landing-page-library
   * itself). For now, this workaround provides the baseline ability to group
   * components so that we can include the feature in the schema.
   */

  if (componentName === 'componentgroup') {
    componentSpan.finish();
    return React.createElement(
      componentType,
      {
        ...attributes,
        components: undefined,
      },
      (attributes.components || []).map(
        (component: ComponentData, index: number) =>
          createComponent(
            component.name,
            {
              key: index,
              ...component.attributes,
            },
            component.eventParams,
          ),
      ),
    );
  }
  /* end of temporary workaround */

  componentSpan.finish();
  return React.createElement(componentType, { ...attributes, eventParams });
}
