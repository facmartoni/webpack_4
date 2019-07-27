import React, { useState } from "react";
import data from "./data.json";

import Loader from "./Loader";

import "../../sass/sass.scss";
import "../../less/less.less";
import "../../stylus/stylus.styl";
import logo from "../../images/platzi.png";
import video from "../../video/que-es-core.mp4";

console.log(data);

export default function App() {
  const [loaderList, setLoaderList] = useState([]);

  async function handleClick() {
    setLoaderList(data.loaders);
    const { Alert } = await import("./Alert");
    Alert("omg, este módulo ha cargado dinámicamente");
  }

  return (
    <div>
      <p className="sass">Esto es Sass</p>
      <p className="less">Esto es Less</p>
      <p className="stylus">Esto es Stylus</p>
      <p className="post-css">Esto es Post-CSS</p>
      <video src={video} width={360} controls poster={logo} />
      <p>
        <img src={logo} alt="Logo de Platzi" width={40} />
      </p>
      <ul>
        {loaderList.map(item => (
          <Loader {...item} key={item.id} />
        ))}
      </ul>
      <button onClick={handleClick}>
        Mostrar lo aprendido hasta el momento
      </button>
    </div>
  );
}
