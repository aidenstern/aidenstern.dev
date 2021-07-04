// schemas/schema.js
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Import both schemas
import homepage from './homepage';
import header from './header';
import article from './article';

export default createSchema({
  // We name our schema
  name: 'default',
  types: schemaTypes.concat([
    /* Append to the list of schemas */
    header,
    homepage,
    article
  ]),
});