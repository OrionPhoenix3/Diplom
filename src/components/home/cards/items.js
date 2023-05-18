import img_burger_1 from "../../../assets/card/burger/1.png"
import img_burger_2 from "../../../assets/card/burger/2.png"
import img_burger_3 from "../../../assets/card/burger/3.png"
import img_burger_4 from "../../../assets/card/burger/4.png"
import img_burger_5 from "../../../assets/card/burger/5.png"

import img_pizza_1 from "../../../assets/card/pizza/1.png"
import img_pizza_2 from "../../../assets/card/pizza/2.png"
import img_pizza_3 from "../../../assets/card/pizza/3.png"
import img_pizza_4 from "../../../assets/card/pizza/4.png"
import img_pizza_5 from "../../../assets/card/pizza/5.png"

import img_salads_1 from "../../../assets/card/salads/1.png"
import img_salads_2 from "../../../assets/card/salads/2.png"
import img_salads_3 from "../../../assets/card/salads/3.png"
import img_salads_4 from "../../../assets/card/salads/4.png"
import img_salads_5 from "../../../assets/card/salads/5.png"
import img_salads_6 from "../../../assets/card/salads/6.png"
import img_salads_7 from "../../../assets/card/salads/7.png"

import img_donuts_1 from "../../../assets/card/donuts/d1.png"
import img_donuts_2 from "../../../assets/card/donuts/d2.png"
import img_donuts_3 from "../../../assets/card/donuts/d3.png"
import img_donuts_4 from "../../../assets/card/donuts/d4.png"
import img_donuts_5 from "../../../assets/card/donuts/d5.png"

import img_drinks_1 from "../../../assets/card/drinks/1.png"
import img_drinks_2 from "../../../assets/card/drinks/2.png"
import img_drinks_3 from "../../../assets/card/drinks/3.png"
import img_drinks_4 from "../../../assets/card/drinks/4.png"
import img_drinks_5 from "../../../assets/card/drinks/5.png"
import img_drinks_6 from "../../../assets/card/drinks/6.png"

import markFire from "../../../assets/fire.png"
import markLike from "../../../assets/like1.png"
import markStar from "../../../assets/star.png"

export const items = [
    {
        id: 1,
        img: img_burger_1,
        mark: markFire,
        markBg: "#FFD1D1",
        styles: "card__img",
        path: "/burger",
        title: "Burger Wanted",
        description: "Rels, Zoodies, Garnein Sesasam Dessigns, Redeshchein, Avocade",
        price: "29"
    },
    {
        id: 2,
        img: img_salads_1,
        mark: markLike,
        markBg: "#FFC10729",
        styles: "card__img",
        path: "/salads",
        title: "Butter Chicken",
        description: "Reis, Sous-vide Chicken, Penaut Satay, Babyspian",
        price: "56"
    },
    {
        id: 3,
        img: img_salads_2,
        mark: null,
        markBg: null,
        styles: "card__img",
        path: "/salads",
        title: "Hi, Salmon",
        description: "Rels, Zoodies, Garnein Dressings, Avacode Edanmame, Maris.",
        price: "69"
    },
    {
        id: 4,
        img: img_salads_3,
        mark: null,
        markBg: null,
        styles: "card__img",
        path: "/salads",
        title: "Tomato puree soup",
        description: "Tomato paste, Tomatoes, Sour cream, Basil, Olive oil, Garlic, Salt",
        price: "26"
    },
    {
        id: 5,
        img: img_salads_4,
        mark: null,
        markBg: null,
        styles: "card__img",
        path: "/salads",
        title: "Chicken with rice",
        description: "Rice, Chicken, Star anise, Turmeric, Coriander, Soy sauce",
        price: "45"
    },
    {
        id: 6,
        img: img_salads_5,
        mark: markStar,
        markBg: "#FFC10729",
        styles: "card__img",
        path: "/salads",
        title: "Salmon",
        description: "Salmon, Avocado, Olive oil, Salt",
        price: "50"
    }, 
    {
        id: 7,
        img: img_burger_2,
        mark: markFire,
        markBg: "#FFD1D1",
        styles: "card__img burger",
        path: "/burger",
        title: "Burger Standard",
        description: "Beef steak, Cheese, Pickled cucumber, Onion, Mustard, Ketchup, Sesame seed bun.",
        price: "35"
    },
    {
        id: 8,
        img: img_burger_3,
        mark: markFire,
        markBg: "#FFD1D1",
        styles: "card__img burger",
        path: "/burger",
        title: "Burger Extra Big",
        description: "Beef steak, Tomato, Cheese, Pickled cucumber, Onion, Mustard, Ketchup, Sesame seed bun.",
        price: "80"
    },
    {
        id: 9,
        img: img_burger_4,
        mark: null,
        markBg: null,
        styles: "card__img burger",
        path: "/burger",
        title: "Black burger",
        description: "Beef steak, Cheese, Pickled cucumber, Onion, Mustard, Ketchup, Black sesame seed bun.",
        price: "45"
    },
    {
        id: 10,
        img: img_burger_5,
        mark: null,
        markBg: null,
        styles: "card__img burger",
        path: "/burger",
        title: "Cheeseburger",
        description: "Extra cheese, Beef steak, Tomato, Pickled cucumber, Onion, Mustard, Ketchup, Sesame seed bun.",
        price: "35"
    },
    {
        id: 11,
        img: img_burger_1,
        mark: null,
        markBg: null,
        styles: "card__img burger",
        path: "/burger",
        title: "Burger double beef",
        description: "Double beef steak, Cheese, Pickled cucumber, Onion, Mustard, Burger sauce, Sesame seed bun",
        price: "65"
    },
    {
        id: 12,
        img: img_pizza_1,
        mark: markStar,
        markBg: "#FFC10729",
        styles: "card__img pizza",
        path: "/pizza",
        title: "Chili pizza",
        description: "Chili pepper, Mozzarella, Cheese sauce, Ham, Olive oil, Oregano, Basil",
        price: "50"
    },
    {
        id: 13,
        img: img_pizza_2,
        mark: null,
        markBg: null,
        styles: "card__img pizza",
        path: "/pizza",
        title: "Chorizo pizza",
        description: "Tomato sauce, Mozzarella, Ham, Chorizo, Artichoke, Olives",
        price: "45"
    },
    {
        id: 14,
        img: img_pizza_3,
        mark: null,
        markBg: null,
        styles: "card__img pizza",
        path: "/pizza",
        title: "Burger pizza",
        description: "Grill sauce, Mozzarella cheese, Pickled cucumbers, Pork, Chicken breast, Bacon",
        price: "57"
    },
    {
        id: 15,
        img: img_pizza_4,
        mark: null,
        markBg: null,
        styles: "card__img pizza",
        path: "/pizza",
        title: "Extra meat pizza",
        description: "Pizza sauce, Mozzarella cheese, Tomatoes, Beef, Pork, Chicken breast, Bacon, Greens",
        price: "49"
    },
    {
        id: 16,
        img: img_pizza_5,
        mark: null,
        markBg: null,
        styles: "card__img pizza",
        path: "/pizza",
        title: "Octopus pizza",
        description: "Mussels, Shredded squid, Octopus, Shrimp, Garlic oil, Tomato sauce, Lemon",
        price: "75"
    },
    {
        id: 17,
        img: img_pizza_2,
        mark: null,
        markBg: null,
        styles: "card__img pizza",
        path: "/pizza",
        title: "Tomato pizza",
        description: "Pizza sauce, Mozzarella cheese, Tomato sauce, Pork, Bacon, Garlic oil, Olives, Gouda cheese",
        price: "26"
    },
    {
        id: 18,
        img: img_salads_6,
        mark: null,
        markBg: null,
        styles: "card__img",
        path: "/salads",
        title: "Nicoise salad",
        description: "Potato, Green beans, Tomato, Lettuce, Tuna, Black olives, Garlic, Anchovy fillet, Mustard",
        price: "37"
    },
    {
        id: 19,
        img: img_salads_7,
        mark: markLike,
        markBg: "#FFC10729",
        styles: "card__img",
        path: "/salads",
        title: "Cesar salad",
        description: "Chicken fillet, Iceberg lettuce, Eggs, Cherry tomatoes, Parmesan cheese, White bread, Garlic, Olive oil, Black pepper",
        price: "55"
    },
    {
        id: 20,
        img: img_donuts_1,
        mark: markLike,
        markBg: "#FFC10729",
        styles: "card__img donuts",
        path: "/donuts",
        title: "Strawberry Donut",
        description: "Sugar, Strawberry filling, Vanilla Syrup, Dough",
        price: "35"
    },
    {
        id: 21,
        img: img_donuts_2,
        mark: markLike,
        markBg: "#FFC10729",
        styles: "card__img donuts",
        path: "/donuts",
        title: "Best Donut",
        description: "Banana filling, Ice cream topping, Marshmallow",
        price: "21"
    },
    {
        id: 22,
        img: img_donuts_3,
        mark: null,
        markBg: null,
        styles: "card__img donuts",
        path: "/donuts",
        title: "Newest Donut",
        description: "Sugar, Chocolate filling, Vanilla Syrup, Dough, Peanuts",
        price: "33"
    },
    {
        id: 23,
        img: img_donuts_4,
        mark: null,
        markBg: null,
        styles: "card__img donuts",
        path: "/donuts",
        title: "Coffee&Peanuts Donut",
        description: "Butter, Sugar, Caffeine, Peanuts",
        price: "34"
    },
    {
        id: 24,
        img: img_donuts_5,
        mark: null,
        markBg: null,
        styles: "card__img donuts",
        path: "/donuts",
        title: "City Donut",
        description: "Sugar, Dough, Eggs, Syrup",
        price: "45"
    },
    {
        id: 25,
        img: img_donuts_2,
        mark: null,
        markBg: null,
        styles: "card__img donuts",
        path: "/donuts",
        title: "Vanilla Donut",
        description: "Sugar, Vanilla filling, Coconut filling, Vanilla syrup",
        price: "15"
    },
    {
        id: 26,
        img: img_drinks_1,
        mark: markFire,
        markBg: "#FFD1D1",
        styles: "card__img drinks",
        path: "/drinks",
        title: "Citrus cocktail",
        description: "Orange juice, Grapefruit juice, Water, Sugar, Citrus syrup, Kiwi, Cherry, Ice cubes",
        price: "11"
    },
    {
        id: 27,
        img: img_drinks_2,
        mark: null,
        markBg: null,
        styles: "card__img drinks",
        path: "/drinks",
        title: "Cherry cocktail",
        description: "Cherry, Sugar, Brown Sugar, Water, Mango juice",
        price: "25"
    },
    {
        id: 28,
        img: img_drinks_3,
        mark: null,
        markBg: null,
        styles: "card__img drinks",
        path: "/drinks",
        title: "Best Cola",
        description: "Coca-Cola, Lime, Ice Cubes, Bubbles",
        price: "27"
    },
    {
        id: 29,
        img: img_drinks_4,
        mark: null,
        markBg: null,
        styles: "card__img drinks",
        path: "/drinks",
        title: "Best coffee",
        description: "Coffee beans, Chocolate chips, Cinnamon, Sugar, Cow milk, Chocolate syrup, Water",
        price: "29"
    },
    {
        id: 30,
        img: img_drinks_5,
        mark: null,
        markBg: null,
        styles: "card__img drinks",
        path: "/drinks",
        title: "Summer mix",
        description: "Watermelon pulp, Fresh mint, Lime juice, Sugar, Ice cubes",
        price: "12"
    },
    {
        id: 31,
        img: img_drinks_6,
        mark: null,
        markBg: null,
        styles: "card__img drinks",
        path: "/drinks",
        title: "Baby cocktail",
        description: "Grapefruit juice, Orange, Brown Sugar, White sugar, Cherry juice, Ice",
        price: "9"
    },
]
