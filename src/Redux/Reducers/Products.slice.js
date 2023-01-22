import { createSlice } from "@reduxjs/toolkit";

export const Product = createSlice({
  name: "product",
  initialState: {
    items: [{
      "product_name": "Kayak Rental",
      "description": "Rent a high-quality kayak for your next water adventure.",
      "price": {
        "amount": 1000,
        "currency": "INR"
      },
      "rental_period": {
        "unit": "day",
        "value": 1
      },
      "available_quantity": 4,
      "image_url": "https://th.bing.com/th/id/OIP.RGmqD_fdXeppY7uVwG-28wHaE8?pid=ImgDet&rs=1"
    },
    {
      "product_name": "Stand-up Paddle Board Rental",
      "description": "Rent a high-quality stand-up paddle board for your next water adventure.",
      "price": {
        "amount": 1200,
        "currency": "INR"
      },
      "rental_period": {
        "unit": "day",
        "value": 1
      },
      "available_quantity": 5,
      "image_url": "https://th.bing.com/th/id/OIP.KD-PVhj47rXcgnjcm-2JmAHaFj?w=244&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      "product_name": "Fishing Equipment Rental",
      "description": "Rent high-quality fishing equipment for your next fishing trip.",
      "price": {
        "amount": 500,
        "currency": "INR"
      },
      "rental_period": {
        "unit": "day",
        "value": 2
      },
      "available_quantity": 8,
      "image_url": "https://th.bing.com/th/id/OIP.fdj71uOcXmNQmR9z2WyINQHaE8?pid=ImgDet&w=205&h=136&c=7&dpr=1.3"
    },
    {
      "product_name": "RV Rental",
      "description": "Rent a high-quality RV for your next road trip.",
      "price": {
        "amount": 5000,
        "currency": "INR"
      },
      "rental_period": {
        "unit": "day",
        "value": 7
      },
      "available_quantity": 2,
      "image_url": "https://th.bing.com/th/id/OIP.Q-BuWiUm3ujU0d9Wk8i8JgHaE7?w=236&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      "product_name": "Ski Rental",
      "description": "Rent a high-quality ski equipment for your next winter adventure.",
      "price": {
        "amount": 1500,
        "currency": "INR"
},
"rental_period": {
"unit": "day",
"value": 3
},
"available_quantity": 10,
"image_url": "https://th.bing.com/th/id/OIP.mZtGb7m1D9_1EDnZg18hPwHaE8?pid=ImgDet&rs=1"
},
{
"product_name": "Snowshoe Rental",
"description": "Rent a high-quality snowshoes for your next winter hike.",
"price": {
"amount": 500,
"currency": "INR"
},
"rental_period": {
"unit": "day",
"value": 1
},
"available_quantity": 12,
"image_url": "https://th.bing.com/th/id/OIP.ktEZQKGj0uOmBkRglSludgHaJ4?w=214&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
},
{
"product_name": "Golf Club Rental",
"description": "Rent high-quality golf clubs for your next round of golf.",
"price": {
"amount": 800,
"currency": "INR"
},
"rental_period": {
"unit": "day",
"value": 2
},
"available_quantity": 15,
"image_url": "https://th.bing.com/th/id/OIP.lBpCsxfGWhgTqLvNbKCsBAHaE7?pid=ImgDet&w=205&h=136&c=7&dpr=1.3"
},{
  "product_name": "Scuba Diving Equipment Rental",
  "description": "Rent high-quality scuba diving equipment for your next underwater adventure.",
  "price": {
    "amount": 1500,
    "currency": "INR"
  },
  "rental_period": {
    "unit": "day",
    "value": 2
  },
  "available_quantity": 5,
  "image_url": "https://th.bing.com/th/id/OIP.BclEb_wY_feXPv0u9RhHxwHaEK?w=309&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
},
{
  "product_name": "Party Tent Rental",
  "description": "Rent a high-quality party tent for your next event.",
  "price": {
    "amount": 2500,
    "currency": "INR"
  },
  "rental_period": {
    "unit": "day",
    "value": 1
  },
  "available_quantity": 3,
  "image_url": "https://th.bing.com/th/id/OIP.-6rxF-NsRrSvCBzkRx4wIQHaES?w=293&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
},
{
  "product_name": "Power Tool Rental",
  "description": "Rent a high-quality power tool for your next home renovation project.",
  "price": {
    "amount": 200,
    "currency": "INR"
  },
  "rental_period": {
    "unit": "hour",
    "value": 4
  },
  "available_quantity": 10,
  "image_url": "https://th.bing.com/th/id/OIP.JuaqcNfhgj_Va1ZJAUIWHAHaFj?w=246&h=185&c=7&r=0&o=5&dpr=1.1&pid=1.7"
},
{
  "product_name": "Garden Equipment Rental",
  "description": "Rent high-quality garden equipment for your next landscaping project.",
  "price": {
    "amount": 500,
    "currency": "INR"
  },
  "rental_period": {
    "unit": "day",
    "value": 2
  },
  "available_quantity": 7,
  "image_url": "https://th.bing.com/th/id/OIP.CK20P8hCyQXI7SteHuKmNAHaD1?w=332&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
},
{
  "product_name": "Hammock Rental",
  "description": "Rent a high-quality hammock for your next outdoor relaxation.",
  "price": {
    "amount": 150,
    "currency": "INR"
  },
  "rental_period": {
    "unit": "day",
    "value": 1
  },
  "available_quantity": 15,
  "image_url": "https://th.bing.com/th/id/OIP.IpcGt_arVnpebLHLebZ1-AHaFK?w=252&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
},{
  "product_name": "Boat Rental",
  "description": "Rent a high-quality boat for your next water adventure.",
  "price": {
    "amount": 2000,
    "currency": "INR"
  },
  "rental_period": {
    "unit": "day",
    "value": 1
  },
  "available_quantity": 2,
  "image_url": "https://www.portcarlingboats.com/wp-content/uploads/2017/06/pb745-3.jpg"
},
{
  "product_name": "Camping Tent Rental",
  "description": "Rent a high-quality camping tent for your next outdoor adventure.",
  "price": {
    "amount": 800,
    "currency": "INR"
  },
  "rental_period": {
    "unit": "day",
    "value": 3
  },
  "available_quantity": 10,
  "image_url": "https://th.bing.com/th/id/OIP.aAmfFlZAp-AmjAoMgqvujgHaFs?w=242&h=186&c=7&r=0&o=5&dpr=1.1&pid=1.7"
},
{
  "product_name": "Guitar Rental",
  "description": "Rent a high-quality guitar for your next music performance.",
  "price": {
    "amount": 100,
    "currency": "INR"
  },
  "rental_period": {
    "unit": "hour",
    "value": 4
  },
  "available_quantity": 5,
  "image_url": "https://th.bing.com/th/id/OIP.8hXXV_Vw5o33DQQxaCyGeQHaDl?w=337&h=169&c=7&r=0&o=5&dpr=1.1&pid=1.7"
},
{
  "product_name": "Snowboard Rental",
  "description": "Rent a high-quality snowboard for your next winter adventure.",
  "price": {
    "amount": 1000,
    "currency": "INR"
  },
  "rental_period": {
    "unit": "day",
    "value": 3
  },
  "available_quantity": 8,
  "image_url": "https://www.free-mockup.com/wp-content/uploads/edd/2021/03/Snowboard-Free-Mockup-com.jpg"
},
{
  "product_name": "Surfboard Rental",
  "description": "Rent a high-quality surfboard for your next beach adventure.",
  "price": {
    "amount": 1200,
    "currency": "INR"
  },
  "rental_period": {
    "unit": "day",
    "value": 1
  },
  "available_quantity": 5,
  "image_url": "https://2.bp.blogspot.com/_pR1o7YL8nfw/S_829oK6aCI/AAAAAAAAARA/8KREnubM62A/s1600/Surfboard+Collectors+meet+010.jpg"
},{
  "product_name": "Bicycle Rental",
  "description": "Rent a high-quality bicycle for your next adventure.",
  "price": {
    "amount": 500,
    "currency": "INR"
  },
  "rental_period": {
    "unit": "hour",
    "value": 2
  },
  "available_quantity": 5,
  "image_url": "https://th.bing.com/th/id/OIP.QoKsUFWwvY0eC3tA1PdfmwHaGZ?w=218&h=189&c=7&r=0&o=5&dpr=1.1&pid=1.7"
}

    ],
  },
  reducers: {
    saveItemsToStore: (state, action) => {
      state.items = action.payload;
    },
  },
}
);

// Action creators are generated for each case reducer function
export const { saveItemsToStore } = Product.actions;

export default Product.reducer;
