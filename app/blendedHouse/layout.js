import React from 'react';
import Image from 'next/image';

const BlendedLayout = ({ children }) => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center flex lg:flex-row">
<Image src="https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/fabb820182e91982eb3b4748ea45d094~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=94967&refresh_token=150b23f368b43cc2b0feb17150506309&x-expires=1738821600&x-signature=3pVFx%2BWgc6plS6e%2BvqzD2Qab%2BRs%3D&shp=a5d48078&shcp=81f88b70.jpg?"
     width={600} height={400}
       className="max-w-sm rounded-lg shadow-2xl" />
            <div>
                <h1 className="text-5xl mb-8 font-bold">Blended House</h1>
                <p className="mb-8">2025 Memorable Experiences</p>
                <button className="btn btn-accent">Catch a vibe</button>
            </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default BlendedLayout;