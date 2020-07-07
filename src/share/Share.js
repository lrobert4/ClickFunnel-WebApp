import React from 'react';
import { Button } from 'semantic-ui-react'

function Share() {
  return (
    <div className="ui container">
      <h1 className="ui center aligned container">Share Now To Get Discount!</h1>
      <div className="ui center aligned container">
      <a href="https://api.whatsapp.com/send?text=Get%20Your%20Anti-Bacterial%20Mask%20Here: https://bellibelle.com/collections/covid-19/products/antibacterial-masks-with-copper-fabric-backing">
        <Button class="ui huge button">Share on Whatsapp!</Button>
        </a>
      </div>
      <h4 className="ui center aligned container">Instructions for coupon code:</h4>
      

      <div className="ui text container">
            <div role="list" class="ui list">
            <div role="listitem" class="item ui center aligned container">
              
              <div class="content">
                <h4 class="header">Step #1</h4>
                <div class="description">
                  An excellent polish restaurant, quick delivery and hearty, filling meals.
                </div>
              </div>
            </div>
            <div role="listitem" class="item ui center aligned container">
              
              <div class="content">
                <h4 class="header">Step #2</h4>
                <div class="description">
                  A taste of Shaanxi&#x27;s delicious culinary traditions, with delights like spicy cold
                  noodles and lamb burgers.
                </div>
              </div>
            </div>
            <div role="listitem" class="item ui center aligned container">
              
              <div class="content">
                <h4 class="header">Step #3</h4>
                <div class="description">Greenpoint&#x27;s best choice for quick and delicious sushi.</div>
              </div>
            </div>
            <div role="listitem" class="item ui center aligned container">
              
              <div class="content">
                <h4 class="header">Step #4</h4>
                <div class="description">At night a bar, during the day a delicious brunch spot.</div>
              </div>
            </div>
          </div>
    </div>
    </div>
  );
}

export default Share;
