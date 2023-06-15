import React from 'react';
import { createComponent, getComponentConfiguration } from '../lib/component';
import {
  EventParamTypes,
  eventParamAttributes,
} from '@spotify-internal/touchdown-analytics';
import { globalTracer, Span } from 'opentracing';

export type ComponentData = {
  name: string;
  attributes?: object;
  eventParams?: EventParamTypes;
};

export type PageMetadata = {
  title?: string;
  description?: string;
  image?: string;
  video?: string;
};

export type PageData = {
  metadata?: PageMetadata;
  components: ComponentData[];
  eventParams?: {
    offerTypeId?: string;
    campaignId?: string;
  };
  themeName?: string;
};

export type UserContextType = {
  ineligibility_flag: string | null;
  authenticated: boolean;
};

export type DeviceContextType = {
  platform: string | null;
  gpb_supported: boolean;
};

export type SpotiDataAttributes = {
  market: string;
  direction: string;
  user: UserContextType;
  pageData: PageData;
  device?: DeviceContextType;
};

export const extractComponents = (components: ComponentData[]) => {
  const outcome: {
    header?: ComponentData;
    footer?: ComponentData;
    components: ComponentData[];
  } = {
    header: undefined,
    footer: undefined,
    components: [],
  };

  outcome.components = components.filter((component, index, array) => {
    if (component.name === 'pageheader') {
      outcome.header = array[index];
      return false;
    }
    if (component.name === 'pagefooter') {
      outcome.footer = array[index];
      return false;
    }

    return true;
  });

  return outcome;
};

const Page = ({
  market,
  direction,
  user,
  pageData,
  parentSpan,
  device,
}: SpotiDataAttributes & { mastheadData?: object; parentSpan?: Span }) => {
  const tracer = globalTracer();
  const pageSpan = tracer.startSpan('page', { childOf: parentSpan });

  const ComponentConfiguration = getComponentConfiguration();

  const { themeName } = pageData;

  const { header, footer, components } = extractComponents(pageData.components);

  const pageEventParams = eventParamAttributes(pageData.eventParams);

  const renderedPage = (
    <ComponentConfiguration
      market={market}
      direction={direction}
      user={user}
      themeName={themeName}
      device={device}
    >
      {header &&
        createComponent(
          header.name,
          { ...header.attributes },
          header.eventParams,
          pageSpan,
        )}
      <main {...pageEventParams}>
        {components.map(({ name, attributes, eventParams }, index) =>
          createComponent(
            name,
            { key: index, ...attributes },
            eventParams,
            pageSpan,
          ),
        )}
      </main>
      {footer &&
        createComponent(
          footer.name,
          { ...footer.attributes },
          footer.eventParams,
          pageSpan,
        )}
    </ComponentConfiguration>
  );

  pageSpan.finish();

  return renderedPage;
};

export default Page;
