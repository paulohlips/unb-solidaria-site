import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 style={{}}>
 <Link to="/">
          
     {/*      <Image
            src={require('./../../../assets/images/Icon-196.png')}
            alt="Open"
            width={55}
            height={55}
            />
          */}
        <p style={{"width":"auto", "fontSize":"0.9rem", "margin-top": "2vh"}}>AMORIS | SOS UnB</p>
        </Link>
      </h1>
    </div>
  );
}

export default Logo;