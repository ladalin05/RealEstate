// src/data.js

export const mockTypeList = [
  { id: 1, type_name: "Apartments", type_slug: "apartments", type_image: "https://png.pngtree.com/template/20190926/ourmid/pngtree-realty-flat-apartment-modern-building-logo-design-graphic-style-image_309739.jpg" },
  { id: 2, type_name: "Villas", type_slug: "villas", type_image: "https://static.vecteezy.com/system/resources/previews/011/720/204/non_2x/villa-building-icon-logo-illustration-villa-symbol-template-for-graphic-and-web-design-collection-free-vector.jpg" },
  { id: 3, type_name: "Houses", type_slug: "houses", type_image: "https://thumbs.dreamstime.com/b/icon-represents-universal-symbol-home-designed-minimalist-clean-style-to-convey-concept-house-living-space-348907040.jpg" },
  { id: 4, type_name: "Commercial", type_slug: "commercial", type_image: "https://t3.ftcdn.net/jpg/16/99/57/36/360_F_1699573641_aHYVMMjD4TI48e6cbh92NjXjhqxqoGmu.jpg" },
  { id: 5, type_name: "Land", type_slug: "land", type_image: "https://cdn-icons-png.flaticon.com/512/7587/7587576.png" },
  { id: 6, type_name: "Office Space", type_slug: "office", type_image: "https://www.shutterstock.com/image-vector/office-building-sign-icon-flat-260nw-1377561629.jpg" },
];

export const mockPropertyList = [
  { 
    id: 101, title: "Luxury Beachfront Apartment with Ocean View and Balcony Access", slug: "luxury-beachfront", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/2d/cb/8d/mandalay-luxury-beachfront.jpg?w=900&h=500&s=1", 
    purpose: "Rent", verified: "YES", type_name: "Apartments" , price: 1500000, 
    address: "123 Ocean Drive, Beautiful Beach City, CA 90210", location_name: "Miami", user_id: 1, user_name: "Agent Smith", user_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsPmB1GXY4pw68ln2zacxr9JpB_hpFkJFmZn9HpTR-sakDUBXbhe73M7BtiugDxN778NI&usqp=CAU", is_favourite: true
  },
  { 
    id: 102, title: "Modern Family Home in Prime Suburbs Location", slug: "modern-family-home", image: "https://photos.zolo.ca/178-evansmeade-common-north-west-calgary-A2258894-1.jpg?2025-09-20+23%3A14%3A15", 
    purpose: "Sale", verified: "NO", type_name: "Houses" , price: 45000000, 
    address: "456 Oak Lane, Green Meadows", location_name: "Los Angeles" , user_id: 2, user_name: "Jane Doe", user_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqDxmKapESzCIPN90y_9ycb5eo7ctqZjxSHDxU3wjuK8o8JQ_mNlgAPfTieXyP1hn-s9A&usqp=CAU", is_favourite: false
  },
  { 
    id: 103, title: "Downtown Studio for Rent near Metro Station", slug: "downtown-studio", image: "https://images.trvl-media.com/lodging/60000000/59360000/59351100/59351082/72847d23.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill", 
    purpose: "Rent", verified: "YES", type_name: "Apartments" , price: 800000, 
    address: "789 City Ave, Central District", location_name: "New York" , user_id: 3, user_name: "Real Estate Corp", user_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifunhA6ltTu6tVc5-fOv2g7SwTf-dUW89c5Q5eRygq53GmBb1vm5_Kurx-Mg1NwbzREU&usqp=CAU", is_favourite: false
  },
  { 
    id: 104, title: "Spacious Villa with Private Pool and Garden", slug: "spacious-villa", image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/674770462.jpg?k=b71fbcf0c23ab481a9411cd096b23f52850eacaab4886dda78faabf2d35aecd4&o=", 
    purpose: "Sale", verified: "YES", type_name: "Villas" , price: 95000000, 
    address: "10 Downing Street, Exclusive Enclave", location_name: "Dubai" , user_id: 4, user_name: "Mike Johnson", user_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7FUkBfY_0dqNNZw4lKA7GyeBNqcqeooUdB7ULvoY387Z3FxShz9RcF6G-nbqrwhPfvEk&usqp=CAU", is_favourite: false
  },
];

export const mockTrendingList = [  mockPropertyList[1], mockPropertyList[2] , mockPropertyList[3]];

export const mockBannerContent = {
    home_top: "<div class='p-3 my-3 bg-secondary text-white rounded text-center'><h4>🏡 TOP BANNER AD: 70% OFF Broker Fees This Month!</h4></div>",
    home_bottom: "<div class='p-3 my-3 bg-info text-dark rounded text-center'><h4>💰 BOTTOM BANNER AD: Get Pre-Approved for a Loan Today!</h4></div>"
};