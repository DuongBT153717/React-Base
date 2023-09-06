import SUN_FILL from "../assets/images/sun_fill.png";
import WIND from "../assets/images/wind.png";
import RAIN_FILL from "../assets/images/rain_fill.png";
import SUN from "../assets/images/sun.png";
import RAIN from "../assets/images/rain.png";
import CLOUD from "../assets/images/weather-page/cloud.png";
import RAIN_WEATHER from "../assets/images/weather-page/rain.png";
import RAIN_THUNDER from "../assets/images/weather-page/rain_thunder.png";
import ICON_SUNNY from "../assets/images/weather-page/icon _day sunny_.png";
import BAROMETER_ from "../assets/images/weather-page/icon _barometer_.png";
import EYE from "../assets/images/weather-page/icon _eye_.png";
import HUMIDITY from "../assets/images/weather-page/icon _humidity_.png";
import RAIN_DROPS from "../assets/images/weather-page/icon _raindrops_.png";
import SHIELD from "../assets/images/weather-page/shield.png";
import RAINHOME from "../assets/images/home-page/RAINHOME.png";
import UV from "../assets/images/home-page/UV.png";
import OZON from "../assets/images/home-page/OZON.png";
import ACID from "../assets/images/home-page/ACID.png";
import AIR from "../assets/images/home-page/AIR.png";
import NEW_S from "../assets/images/home-page/newss.png";

export const homeSupplies = [
  {
    logo: SUN_FILL,
    title: "THỜI TIẾT",
    desc: "Nhiệt độ, lượng mưa, chỉ số tia UV, tầng ozon, lắng đọng acid, độ ẩm không khí, áp suất khí quyển, tầm nhìn xa và hơn thế nữa",
  },
  {
    logo: WIND,
    title: "CHỈ SỐ MÔI TRƯỜNG",
    desc: "Chỉ số ô nhiễm về không khí, nước, đất, biến đổi khí hậu, sinh học xung quanh cuộc sống có khiến bạn quan tâm?",
  },
  {
    logo: RAIN_FILL,
    title: "DỰ BÁO KHÍ HẬU",
    desc: "Dự báo khí hậu được báo cáo theo tháng, quý, năm cực chi tiết và dễ dàng truy xuất dành cho bộ máy, cơ quan quản lý",
  },
  {
    logo: SUN,
    title: "SỨC KHOẺ & HOẠT ĐỘNG",
    desc: "Nhiệt độ, lượng mưa, chỉ số tia UV, tầng ozon, lắng đọng acid, độ ẩm không khí, áp suất khí quyển, tầm nhìn xa và hơn thế nữa",
  },
  {
    logo: SUN_FILL,
    title: "CHỦ ĐỀ",
    desc: "Chủ đề bụi mịn, dịch bệnh Covid 19, nhiệt độ, ô nhiễm tiếng ồn với nhiều thông tin chi tiết cập nhật kiến thức cho cộng đồng",
  },
  {
    logo: RAIN,
    title: "TIN TỨC",
    desc: "Tin tức hàng ngày, tin tức mới nhất về các vấn đề sức khoẻ môi trường và nhiều tin tức quan trọng nữa",
  },
];

export const hourTemp = [
  {
    time: "01:00",
    img: CLOUD,
    degree: "38°",
  },
  {
    time: "02:00",
    img: RAIN_THUNDER,
    degree: "38°",
  },
  {
    time: "03:00",
    img: RAIN_WEATHER,
    degree: "38°",
  },
  {
    time: "07:00",
    img: RAIN_THUNDER,
    degree: "38°",
  },
  {
    time: "05:00",
    img: CLOUD,
    degree: "38°",
  },
  {
    time: "07:00",
    img: RAIN_THUNDER,
    degree: "38°",
  },
  {
    time: "07:00",
    img: RAIN_THUNDER,
    degree: "38°",
  },
  {
    time: "08:00",
    img: RAIN_THUNDER,
    degree: "38°",
  },
  {
    time: "09:00",
    img: RAIN_THUNDER,
    degree: "38°",
  },
  {
    time: "10:00",
    img: RAIN_THUNDER,
    degree: "38°",
  },
];

export const weatherContent = [
  {
    icon: ICON_SUNNY,
    title: "Chỉ số tia UV",
    des: "11.0",
  },
  {
    icon: HUMIDITY,
    title: "Độ ẩm không khí",
    des: "50%",
  },
  {
    icon: SHIELD,
    title: "Tầng Ozonn",
    des: "????",
  },
  {
    icon: BAROMETER_,
    title: "Áp suất không khí",
    des: "980 mb",
  },
  {
    icon: RAIN_DROPS,
    title: "Lắng đọng Acid",
    des: "5.6 pH",
  },
  {
    icon: EYE,
    title: "Tầm nhìn",
    des: "Trên 10 km",
  },
];

export const leftCard = [
  {
    title: "Hà Nội|19:30|GMT 7+",
    num: "40°C",
    sugest: "Độ ẩm không khí làm tăng cảm giác nóng bức",
    avg: "C:50°|T:30°",
  },
  {
    title: "Độ ẩm",
    num: "40%",
    sugest: " ",
    avg: "C:50°|T:30°",
  },
  {
    title: "Tầm nhìn",
    num: "~7km",
    sugest: "Trời nắng nên không nhìn rõ",
    avg: "C:50°|T:30°",
  },
  {
    title: "Tốc độ gió",
    num: "7km/h",
    sugest: "Trời đẹp nhưng không đi chơi",
    avg: "C:50°|T:30°",
  },
  {
    title: "Tỉ lệ bụi mịn",
    num: "10g/m",
    sugest: " ",
    avg: " ",
  },
  {
    title: "khả năng dị ứng",
    num: "129",
    sugest: "Trời đẹp nhưng không đi chơi",
    avg: " ",
  },
];
export const rightCard = [
  {
    title: "Lượng Mưa",
    type: "(mm)",
    logo: RAINHOME,
    num: "1200-1600",
  },
  {
    title: "Chỉ số tia UV",
    type: "(mm)",
    logo: UV,
    num: "1200-1600",
  },
  {
    title: "Chỉ số OZON",
    type: "(mm)",
    logo: OZON,
    num: "1200-1600",
  },
  {
    title: "Lắng động Acid",
    type: "(mm)",
    logo: ACID,
    num: "1200-1600",
  },
  {
    title: "Độ ẩm không khí",
    type: "(mm)",
    logo: AIR,
    num: "1200-1600",
  },
];

export const hourTemp1 = [
  {
    time: "01:00",
    img: CLOUD,
    degree: "38°",
  },
  {
    time: "02:00",
    img: RAIN_THUNDER,
    degree: "38°",
  },
  {
    time: "03:00",
    img: RAIN_WEATHER,
    degree: "38°",
  },
  {
    time: "07:00",
    img: RAIN_THUNDER,
    degree: "38°",
  },
  {
    time: "05:00",
    img: CLOUD,
    degree: "38°",
  },
  {
    time: "07:00",
    img: RAIN_THUNDER,
    degree: "38°",
  },
  {
    time: "07:00",
    img: RAIN_THUNDER,
    degree: "38°",
  },
  {
    time: "08:00",
    img: RAIN_THUNDER,
    degree: "38°",
  },
  {
    time: "09:00",
    img: RAIN_THUNDER,
    degree: "38°",
  },
  {
    time: "10:00",
    img: RAIN_THUNDER,
    degree: "38°",
  },
];
export const newsMain = [
  {
    title:
      "Ngay 18/07/2023 sieu bao the gioi do cap vao viet nam,khuyen cao nguoi dan khong ra khoi duong",
    img: NEW_S,
  },
];

export const mockDataTeam = [
    {
      id: 1,
      name: "Jon Snow",
      email: "jonsnow@gmail.com",
      age: 35,
      phone: "(665)121-5454",
      access: "admin",
    },
    {
      id: 2,
      name: "Cersei Lannister",
      email: "cerseilannister@gmail.com",
      age: 42,
      phone: "(421)314-2288",
      access: "manager",
    },
    {
      id: 3,
      name: "Jaime Lannister",
      email: "jaimelannister@gmail.com",
      age: 45,
      phone: "(422)982-6739",
      access: "user",
    },
    {
      id: 4,
      name: "Anya Stark",
      email: "anyastark@gmail.com",
      age: 16,
      phone: "(921)425-6742",
      access: "admin",
    },
    {
      id: 5,
      name: "Daenerys Targaryen",
      email: "daenerystargaryen@gmail.com",
      age: 31,
      phone: "(421)445-1189",
      access: "user",
    },
    {
      id: 6,
      name: "Ever Melisandre",
      email: "evermelisandre@gmail.com",
      age: 150,
      phone: "(232)545-6483",
      access: "manager",
    },
    {
      id: 7,
      name: "Ferrara Clifford",
      email: "ferraraclifford@gmail.com",
      age: 44,
      phone: "(543)124-0123",
      access: "user",
    },
    {
      id: 8,
      name: "Rossini Frances",
      email: "rossinifrances@gmail.com",
      age: 36,
      phone: "(222)444-5555",
      access: "user",
    },
    {
      id: 9,
      name: "Harvey Roxie",
      email: "harveyroxie@gmail.com",
      age: 65,
      phone: "(444)555-6239",
      access: "admin",
    },
    {
      id: 10,
      name: "Jon Snow",
      email: "jonsnow@gmail.com",
      age: 35,
      phone: "(665)121-5454",
      access: "admin",
    },
    {
      id: 12,
      name: "Cersei Lannister",
      email: "cerseilannister@gmail.com",
      age: 42,
      phone: "(421)314-2288",
      access: "manager",
    },
    {
      id: 23,
      name: "Jaime Lannister",
      email: "jaimelannister@gmail.com",
      age: 45,
      phone: "(422)982-6739",
      access: "user",
    },
    {
      id: 34,
      name: "Anya Stark",
      email: "anyastark@gmail.com",
      age: 16,
      phone: "(921)425-6742",
      access: "admin",
    },
    {
      id: 45,
      name: "Daenerys Targaryen",
      email: "daenerystargaryen@gmail.com",
      age: 31,
      phone: "(421)445-1189",
      access: "user",
    },
    {
      id: 46,
      name: "Ever Melisandre",
      email: "evermelisandre@gmail.com",
      age: 150,
      phone: "(232)545-6483",
      access: "manager",
    },
    {
      id: 57,
      name: "Ferrara Clifford",
      email: "ferraraclifford@gmail.com",
      age: 44,
      phone: "(543)124-0123",
      access: "user",
    },
    {
      id: 68,
      name: "Rossini Frances",
      email: "rossinifrances@gmail.com",
      age: 36,
      phone: "(222)444-5555",
      access: "user",
    },
    {
      id: 79,
      name: "Harvey Roxie",
      email: "harveyroxie@gmail.com",
      age: 65,
      phone: "(444)555-6239",
      access: "admin",
    },
  ];
  
  export const mockDataContacts = [
    {
      id: 1,
      name: "Jon Snow",
      email: "jonsnow@gmail.com",
      age: 35,
      phone: "(665)121-5454",
      address: "0912 Won Street, Alabama, SY 10001",
      city: "New York",
      zipCode: "10001",
      registrarId: 123512,
    },
    {
      id: 2,
      name: "Cersei Lannister",
      email: "cerseilannister@gmail.com",
      age: 42,
      phone: "(421)314-2288",
      address: "1234 Main Street, New York, NY 10001",
      city: "New York",
      zipCode: "13151",
      registrarId: 123512,
    },
    {
      id: 3,
      name: "Jaime Lannister",
      email: "jaimelannister@gmail.com",
      age: 45,
      phone: "(422)982-6739",
      address: "3333 Want Blvd, Estanza, NAY 42125",
      city: "New York",
      zipCode: "87281",
      registrarId: 4132513,
    },
    {
      id: 4,
      name: "Anya Stark",
      email: "anyastark@gmail.com",
      age: 16,
      phone: "(921)425-6742",
      address: "1514 Main Street, New York, NY 22298",
      city: "New York",
      zipCode: "15551",
      registrarId: 123512,
    },
    {
      id: 5,
      name: "Daenerys Targaryen",
      email: "daenerystargaryen@gmail.com",
      age: 31,
      phone: "(421)445-1189",
      address: "11122 Welping Ave, Tenting, CD 21321",
      city: "Tenting",
      zipCode: "14215",
      registrarId: 123512,
    },
    {
      id: 6,
      name: "Ever Melisandre",
      email: "evermelisandre@gmail.com",
      age: 150,
      phone: "(232)545-6483",
      address: "1234 Canvile Street, Esvazark, NY 10001",
      city: "Esvazark",
      zipCode: "10001",
      registrarId: 123512,
    },
    {
      id: 7,
      name: "Ferrara Clifford",
      email: "ferraraclifford@gmail.com",
      age: 44,
      phone: "(543)124-0123",
      address: "22215 Super Street, Everting, ZO 515234",
      city: "Evertin",
      zipCode: "51523",
      registrarId: 123512,
    },
    {
      id: 8,
      name: "Rossini Frances",
      email: "rossinifrances@gmail.com",
      age: 36,
      phone: "(222)444-5555",
      address: "4123 Ever Blvd, Wentington, AD 142213",
      city: "Esteras",
      zipCode: "44215",
      registrarId: 512315,
    },
    {
      id: 9,
      name: "Harvey Roxie",
      email: "harveyroxie@gmail.com",
      age: 65,
      phone: "(444)555-6239",
      address: "51234 Avery Street, Cantory, ND 212412",
      city: "Colunza",
      zipCode: "111234",
      registrarId: 928397,
    },
    {
      id: 10,
      name: "Enteri Redack",
      email: "enteriredack@gmail.com",
      age: 42,
      phone: "(222)444-5555",
      address: "4123 Easer Blvd, Wentington, AD 142213",
      city: "Esteras",
      zipCode: "44215",
      registrarId: 533215,
    },
    {
      id: 11,
      name: "Steve Goodman",
      email: "stevegoodmane@gmail.com",
      age: 11,
      phone: "(444)555-6239",
      address: "51234 Fiveton Street, CunFory, ND 212412",
      city: "Colunza",
      zipCode: "1234",
      registrarId: 92197,
    },
  ];
  
  export const mockDataInvoices = [
    {
      id: 1,
      name: "Jon Snow",
      email: "jonsnow@gmail.com",
      cost: "21.24",
      phone: "(665)121-5454",
      date: "03/12/2022",
    },
    {
      id: 2,
      name: "Cersei Lannister",
      email: "cerseilannister@gmail.com",
      cost: "1.24",
      phone: "(421)314-2288",
      date: "06/15/2021",
    },
    {
      id: 3,
      name: "Jaime Lannister",
      email: "jaimelannister@gmail.com",
      cost: "11.24",
      phone: "(422)982-6739",
      date: "05/02/2022",
    },
    {
      id: 4,
      name: "Anya Stark",
      email: "anyastark@gmail.com",
      cost: "80.55",
      phone: "(921)425-6742",
      date: "03/21/2022",
    },
    {
      id: 5,
      name: "Daenerys Targaryen",
      email: "daenerystargaryen@gmail.com",
      cost: "1.24",
      phone: "(421)445-1189",
      date: "01/12/2021",
    },
    {
      id: 6,
      name: "Ever Melisandre",
      email: "evermelisandre@gmail.com",
      cost: "63.12",
      phone: "(232)545-6483",
      date: "11/02/2022",
    },
    {
      id: 7,
      name: "Ferrara Clifford",
      email: "ferraraclifford@gmail.com",
      cost: "52.42",
      phone: "(543)124-0123",
      date: "02/11/2022",
    },
    {
      id: 8,
      name: "Rossini Frances",
      email: "rossinifrances@gmail.com",
      cost: "21.24",
      phone: "(222)444-5555",
      date: "05/02/2021",
    },
  ];
  
  export const mockTransactions = [
    {
      txId: "01e4dsa",
      user: "johndoe",
      date: "2021-09-01",
      cost: "43.95",
    },
    {
      txId: "0315dsaa",
      user: "jackdower",
      date: "2022-04-01",
      cost: "133.45",
    },
    {
      txId: "01e4dsa",
      user: "aberdohnny",
      date: "2021-09-01",
      cost: "43.95",
    },
    {
      txId: "51034szv",
      user: "goodmanave",
      date: "2022-11-05",
      cost: "200.95",
    },
    {
      txId: "0a123sb",
      user: "stevebower",
      date: "2022-11-02",
      cost: "13.55",
    },
    {
      txId: "01e4dsa",
      user: "aberdohnny",
      date: "2021-09-01",
      cost: "43.95",
    },
    {
      txId: "120s51a",
      user: "wootzifer",
      date: "2019-04-15",
      cost: "24.20",
    },
    {
      txId: "0315dsaa",
      user: "jackdower",
      date: "2022-04-01",
      cost: "133.45",
    },
  ];
  