import React from "react";
import {Order} from "./Order"

export default{
    title:"Components/Order",
    component:Order,
};
const Template=(args)=><Order {...args}/>
export const order=Template.bind({})