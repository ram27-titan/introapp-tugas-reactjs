import React from 'react';
import ClassComponent from './pembahasan/ClassComponent';
import FunctionalComponent from './pembahasan/FunctionalComponent';

export default class Komponen extends React.Component {
  render() {
    return (
      <div>
        <ClassComponent nama="Ram" />
        <FunctionalComponent nama="Ram" />
      </div>
    );
  }
}
