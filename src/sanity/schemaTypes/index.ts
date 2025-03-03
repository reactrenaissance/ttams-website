import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import articleType from "./articleType";
import tariffType from "./tariffType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, articleType, tariffType],
}
