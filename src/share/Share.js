import React from 'react';


function Share() {
  return (
    <div className="ui container">
      <h1 className="ui center aligned container">Share Now To Get Discount!</h1>
      <h4 className="ui center aligned container">Instructions for coupon code:</h4>

      <div className="">
            <div role="list" class="ui list">
            <div role="listitem" class="item">
              <i aria-hidden="true" class="marker icon"></i>
              <div class="content">
                <a class="header">Krowlewskie Jadlo</a>
                <div class="description">
                  An excellent polish restaurant, quick delivery and hearty, filling meals.
                </div>
              </div>
            </div>
            <div role="listitem" class="item">
              <i aria-hidden="true" class="marker icon"></i>
              <div class="content">
                <a class="header">Xian Famous Foods</a>
                <div class="description">
                  A taste of Shaanxi&#x27;s delicious culinary traditions, with delights like spicy cold
                  noodles and lamb burgers.
                </div>
              </div>
            </div>
            <div role="listitem" class="item">
              <i aria-hidden="true" class="marker icon"></i>
              <div class="content">
                <a class="header">Sapporo Haru</a>
                <div class="description">Greenpoint&#x27;s best choice for quick and delicious sushi.</div>
              </div>
            </div>
            <div role="listitem" class="item">
              <i aria-hidden="true" class="marker icon"></i>
              <div class="content">
                <a class="header">Enid&#x27;s</a>
                <div class="description">At night a bar, during the day a delicious brunch spot.</div>
              </div>
            </div>
          </div>
    </div>
    </div>
  );
}

export default Share;