// @flow

import React, { type Node } from 'react';
import { Button } from './Button';

type HeaderButton = {| props: Object, text: Node, modal?: Node |};
type MainHeaderLayoutProps = {|
  title: Node | string,
  subtitle: Node | string,
  buttonOne: HeaderButton,
  buttonTwo?: HeaderButton,
  customButton?: Node,
  image: Node,
  className?: string
|};

export const MainHeaderLayout = ({
  title,
  subtitle,
  buttonOne,
  buttonTwo,
  customButton,
  image,
  className = ''
}: MainHeaderLayoutProps) => {
  const buttonClass = 'btn-xl mx-1 align-self-center';
  const { props, modal = null } = buttonOne;
  const Modal = modal;

  return (
    <header className={`header d-flex home-banner px-1 text-left bg-primary ${className}`}>
      <div className="container my-auto position-relative z-index-base">
        <div className="row gap-y mt-md-2 pb-4 pb-md-6">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <div className="mt-md-n6 mb-md-4">
              <h1 className="text-white mt-5 mt-lg-0 mb-2 mb-sm-3">{title}</h1>
              <div className="text-lg line-height-lg text-white font-weight-light pb-3">
                {subtitle}
              </div>
            </div>
            <div className="d-flex align-items-center flex-wrap">
              {Modal || (
                <Button className={buttonClass} cta {...props}>
                  {buttonOne.text}
                </Button>
              )}
              {!!buttonTwo && (
                <Button className={buttonClass} inverted {...buttonTwo.props}>
                  {buttonTwo.text}
                </Button>
              )}
              {customButton}
            </div>
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center mt-4 mt-lg-0">
            {image}
          </div>
        </div>
      </div>
    </header>
  );
};
