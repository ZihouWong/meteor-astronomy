import {
  tail
}
from 'lodash';

function validateAll(rawDoc) {
  const Class = this;
  const doc = new Class(rawDoc);
  const args = tail(arguments);
  return doc.validateAll.apply(doc, args);
};

export default validateAll;