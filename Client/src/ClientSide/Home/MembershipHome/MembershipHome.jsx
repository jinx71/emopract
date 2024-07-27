// eslint-disable-next-line no-unused-vars
import React from "react";

const MembershipHome = () => {
  return (
    <div className="bg-[#EDEDED] sectionGap">
      <div className="py-[51px] px-[30px] 2xl-[100px] xl-[100px] md-[100px] ">
        <div>
          <p className="homeMemberShipSamll 2xl:text-center xl:text-center lg:text-center md:text-center">
            Our Membership
          </p>
          <h3 className="homeMemberShipTitle ">membership package</h3>
        </div>
        <div
          className="grid grid-cols-1 gap-y-[15px] cursor-pointer
        2xl:grid-cols-3 2xl:gap-x-[60px] 2xl:pt-[50px]  xl:pt-[40px] lg:pt-[40px]  md:pt-[40px] xl:grid-cols-3 xl:gap-x-[52px]
        lg:grid-cols-3 lg:gap-x-[40px] md:grid-cols-3 md:gap-x-[20px] "
        >
          <button className="membershipbtnOne">Annual Plan</button>
          <button className="membershipbtnTwo">Annual Plan</button>
          <button className="membershipbtnThree">Annual Plan</button>
        </div>
      </div>
    </div>
  );
};

export default MembershipHome;
