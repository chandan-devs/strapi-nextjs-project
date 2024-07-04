import type { Schema, Attribute } from '@strapi/strapi';

export interface WhyChooseUsFeature extends Schema.Component {
  collectionName: 'components_why_choose_us_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    isActive: Attribute.Boolean;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'why-choose-us.feature': WhyChooseUsFeature;
    }
  }
}
