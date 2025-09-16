import React from 'react'
import {CategoryInfo} from './CategoryInfo'
import Card from './Card'

import classes from "./Category.module.css";
function Category() {
  return (
    <>
      <div className={classes.category_container}>
        {CategoryInfo.map((infos) => {
          return <Card data={infos} />;
          // In arrow functions, when you use {}, you must explicitly return.
        })}
      </div>
    </>
  );
}

export default Category