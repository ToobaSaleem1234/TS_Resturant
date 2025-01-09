export default function handler(req,res){
    const products = [
        {
          id:1,
          title:"Zinger Burger",
          price:350.00,
          image:"/menu/zingerburger.jpg",
        },
        {
          id:2,
          title:"Paratha Roll",
          price:250.00,
          image:"/menu/roll.jpeg",
        },
        {
          id:3,
          title:"Fried Chicken",
          price:200.00,
          image:"/menu/chicken.jpeg",
        },
        {
          id:4,
          title:"Club Sandwich",
          price:350.00,
          image:"/menu/sandwiches.jpeg",
        },
        {
          id:5,
          title:"Chowmein",
          price:300.00,
          image:"/menu/chowmein.jpg",
        },
        {
          id:6,
          title:"Shashlik With Fried Rice",
          price:500.00,
          image:"/menu/shashlik.jpg",
        },
        {
          id:7,
          title:"Fruit Trifle",
          price:700.00,
          image:"/menu/trifle.jpeg",
        },
        {
          id:8,
          title:"Ice-cream",
          price:350.00,
          image:"/menu/ice-cream.jpeg",
        },
        {
          id:9,
          title:"Kheer",
          price:500.00,
          image:"/menu/kheer.jpeg",
        },
      ]
res.status(200).json(products);
}