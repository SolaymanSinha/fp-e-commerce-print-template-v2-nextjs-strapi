import type { Schema, Struct } from '@strapi/strapi';

export interface ProductOptionsColor extends Struct.ComponentSchema {
  collectionName: 'components_product_options_colors';
  info: {
    displayName: 'color';
  };
  attributes: {
    color: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'black:0, white:0, red:10'>;
  };
}

export interface ProductOptionsDeliveryTime extends Struct.ComponentSchema {
  collectionName: 'components_product_options_delivery_times';
  info: {
    displayName: 'delivery_time';
  };
  attributes: {
    delivery_time: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'1 Business Day:20, 2 Business Day:10'>;
  };
}

export interface ProductOptionsSize extends Struct.ComponentSchema {
  collectionName: 'components_product_options_sizes';
  info: {
    description: '';
    displayName: 'size';
    icon: '';
  };
  attributes: {
    size: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'S:0, M:10, L:20'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product-options.color': ProductOptionsColor;
      'product-options.delivery-time': ProductOptionsDeliveryTime;
      'product-options.size': ProductOptionsSize;
    }
  }
}
