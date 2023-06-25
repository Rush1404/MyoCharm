import React from 'react';
import Feature from '../../components/feature/Feature';
import {CCard,CCardImage,CCardBody,CCardTitle,CButton,CCardText, CCardGroup} from '@coreui/react';
import electromyograms from '../../assets/electromyograms.png';
import MyoCharm_DL_Model from '../../assets/MyoCharm_DL_Model.png';
import Physician_Verified from '../../assets/Physician_Verified_Treatment.png';
import './myocharm.css';
import { RiFontSize } from 'react-icons/ri';

const MyoCharm = () => (
  <div className="myocharm section__margin" id="mychrm">
    <div className="myoCharm-heading">
      <h1 className="gradient__text">See How We Use AI to Help Physicians to Deliver State of the Art Treatment!</h1>
    </div>
    <div className='card_edit'>
      <CCardGroup>
        <CCard style={{ width: '18rem' }}>
          <CCardImage orientation="top" src={electromyograms} alt='electromyograms' style={{height:'317px'}}/>
          <CCardBody>
            <CCardTitle style={{fontFamily: '#Manrope'}}>Electromyograms</CCardTitle>
            <CCardText>
              Highly Accurate and Easy to Use Commercial Electromyograms for Diagnosis
            </CCardText>
            <CButton href="#">More Information</CButton>
          </CCardBody>
        </CCard>

        <CCard style={{ width: '18rem'}}>
          <CCardImage orientation="top" src={MyoCharm_DL_Model} alt='MyoCharm_DL_Model' />
          <CCardBody>
            <CCardTitle>MyoCharm DL Model</CCardTitle>
            <CCardText>
              Safety of Our Model is Insured Through High Accuracy and Validation Rates and A Variety of Training Images Used
            </CCardText>
            <CButton href="#">More Information</CButton>
          </CCardBody>
        </CCard>

        <CCard style={{ width: '18rem' }}>
          <CCardImage orientation="top" src={Physician_Verified} alt='Physician_Verified' />
          <CCardBody>
            <CCardTitle>Physician Verified Treatment</CCardTitle>
            <CCardText>
              At MyoCharm we Ensure Full Cooperation With Physician Through our MyoCharm Physician Authetication Software (MPAS) to Deliver Efficient and Accurate Treatment
            </CCardText>
            <CButton href="#">More Information</CButton>
          </CCardBody>
        </CCard>
      </CCardGroup>
    </div>
  </div>
);

export default MyoCharm;