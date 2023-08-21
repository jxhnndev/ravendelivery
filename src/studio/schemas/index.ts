import allergen from "./allergen";
import category from "./category";
import dailyMenu from "./dailyMenu";
import gallery from "./gallery";
import item from "./item";
import order from "./order";
import orderItem from "./orderItem";
import priceOption from "./priceOption";
import product from "./product";
import review from "./review";
import account from "./sanityAuth/account";
import user from "./sanityAuth/user";
import verificationToken from "./sanityAuth/verification-token";
import sliderContent from "./sliderContent";
import specialOffer from "./specialOffer";


const schemas = [
    product,
    review,
    orderItem,
    order,
    sliderContent,
    specialOffer,
    priceOption,
    gallery,

    // auth
    account,
    user,
    verificationToken,

    // pub app
    item,
    category,
    dailyMenu,
    allergen
];

export default schemas;