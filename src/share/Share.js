import React from 'react';


function Share() {
  return (
    <div className="ui container">
      <h1 className="ui center aligned container">Share Now To Get Discount!</h1>
      <div className="ui center aligned container">
      <button class="ui huge button">Share on Whatsapp!</button>
      </div>
      <h4 className="ui center aligned container">Instructions for coupon code:</h4>
      

      <div className="ui text container">
            <div role="list" class="ui list">
            <div role="listitem" class="item ui center aligned container">
              
              <div class="content">
                <a class="header">Step #1</a>
                <div class="description">
                  An excellent polish restaurant, quick delivery and hearty, filling meals.
                </div>
              </div>
            </div>
            <div role="listitem" class="item ui center aligned container">
              
              <div class="content">
                <a class="header">Step #2</a>
                <div class="description">
                  A taste of Shaanxi&#x27;s delicious culinary traditions, with delights like spicy cold
                  noodles and lamb burgers.
                </div>
              </div>
            </div>
            <div role="listitem" class="item ui center aligned container">
              
              <div class="content">
                <a class="header">Step #3</a>
                <div class="description">Greenpoint&#x27;s best choice for quick and delicious sushi.</div>
              </div>
            </div>
            <div role="listitem" class="item ui center aligned container">
              
              <div class="content">
                <a class="header">Step #4</a>
                <div class="description">At night a bar, during the day a delicious brunch spot.</div>
              </div>
            </div>
          </div>
    </div>
    </div>
  );
}

export default Share;