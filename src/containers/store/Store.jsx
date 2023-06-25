import React from 'react';
import Product from '../../components/product/Product';
import { product1, product2, product3, product4, product5, product6} from './import';

import './store.css';

const Store = () => (
  <div className="store section__padding" id="product">
    <div className="store-heading">
      <h1>Store</h1>
    </div>
    <div className="store-container">
      <div className="store-container_groupB">
        <Product imgUrl={product1} date="June 24, 2023" text="Ventolin" />
        <Product imgUrl={product2} date="June 24, 2023" text="Multi-B Benfotiamine" />
        <Product imgUrl={product3} date="June 24, 2023" text="Radicava ORS" />
        <Product imgUrl={product4} date="June 24, 2023" text="Rixallin" />
        <Product imgUrl={product5} date="June 24, 2023" text="Amantadine Hydrochloride" />
        <Product imgUrl={product6} date="June 24, 2023" text="IntestiBal" />
      </div>
    </div>
  </div>
);

export default Store;