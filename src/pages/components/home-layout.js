import React from 'react';
import './home-layout.css';

function HomeLayout(props) {
  return (
    <section className="HomeLayout">
      {/* traer las pro[iedades hijas */}
      {props.children}
    </section>
  )
}

export default HomeLayout