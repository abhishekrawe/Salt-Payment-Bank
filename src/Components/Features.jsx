import React from 'react';
import FeaturesBox from './FeaturesBox';
import Featuresimage from '../images/feature_1.png';
import Featuresimage1 from '../images/feature_2.png';
import Featuresimage2 from '../images/feature_3.png';

function Features() {
  return <div id='features'>
      <div className='a-container'>
      <FeaturesBox image={Featuresimage} title="Devloper Features"/>
      <FeaturesBox image={Featuresimage} title="Devloper Features"/>
      <FeaturesBox image={Featuresimage} title="Devloper Features"/>

      </div>

  </div>;
}

export default Features;
