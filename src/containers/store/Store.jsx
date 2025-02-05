import React from 'react';
import Product from '../../components/product/Product';
import { product1, product2, product3, product4, product5, product6} from './import';

import './store.css';

const Store = () => (
  <div className="store section__padding" id="product">
    <div className="store-heading">
      <h1 className='--gradient__text'>Store</h1>
    </div>
    <div className="store-container">
      <div className="store-container_groupB">
        <a href="https://e-surgery.com/product/ventolin/" target="_blank" rel="noopener noreferrer">
          <Product imgUrl={product1} date="June 24, 2023" text="Ventolin" />
        </a>
        <a href="https://ca.iherb.com/pr/benfotiamine-inc-multi-b-benfotiamine-neuropathy-support-formula-120-capsules/3549" target="_blank" rel="noopener noreferrer">
          <Product imgUrl={product2} date="June 24, 2023" text="Multi-B Benfotiamine" />
        </a>
        <a href="https://everyone.org/radicava-ors-edaravone" target="_blank" rel="noopener noreferrer">
          <Product imgUrl={product3} date="June 24, 2023" text="Radicava ORS" />
        </a>
        <a href="https://www.blinkhealth.com/ritalin" target="_blank" rel="noopener noreferrer">
          <Product imgUrl={product4} date="June 24, 2023" text="Rixallin" />
        </a>
        <a href="https://www.petsmart.com/pharmacy/cat/arthritis-and-pain-relief/amantadine-hydrochloride-100-mg--single-tablet-66960.html" target="_blank" rel="noopener noreferrer">
          <Product imgUrl={product5} date="June 24, 2023" text="Amantadine Hydrochloride" />
        </a>
        <a href="https://www.nationalnutrition.ca/bell-lifestyle-products-bell-intestinal-cleansing-and-weight-control-10-60-caps.html" target="_blank" rel="noopener noreferrer">
          <Product imgUrl={product6} date="June 24, 2023" text="IntestiBal" />
        </a>
      </div>
    </div>
  </div>
);

export default Store;