'use strict';

const ids = {};

export default function (item) {
  if (!ids[item]) {
    ids[item] = 0;
  }

  return `${item}-${++ids[item]}`;
}
