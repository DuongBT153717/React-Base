import SUN_FILL from '../assets/images/sun_fill.png';
import WIND from '../assets/images/wind.png';
import RAIN_FILL from '../assets/images/rain_fill.png';
import SUN from '../assets/images/sun.png';
import RAIN from '../assets/images/rain.png';
import RAINHOME from '../assets/images/home-page/RAINHOME.png';
import UV from '../assets/images/home-page/UV.png';
import OZON from '../assets/images/home-page/OZON.png';
import ACID from '../assets/images/home-page/ACID.png';
import AIR from '../assets/images/home-page/AIR.png';
import CLOUD from '../assets/images/weather-page/cloud.png';
import RAIN_WEATHER from '../assets/images/weather-page/rain.png';
import RAIN_THUNDER from '../assets/images/weather-page/rain_thunder.png';
import NEW_S from '../assets/images/home-page/newss.png'

export const homeSupplies = [
    {
        logo: SUN_FILL,
        title: 'THỜI TIẾT',
        desc: 'Nhiệt độ, lượng mưa, chỉ số tia UV, tầng ozon, lắng đọng acid, độ ẩm không khí, áp suất khí quyển, tầm nhìn xa và hơn thế nữa'
    },
    {
        logo: WIND,
        title: 'CHỈ SỐ MÔI TRƯỜNG',
        desc: 'Chỉ số ô nhiễm về không khí, nước, đất, biến đổi khí hậu, sinh học xung quanh cuộc sống có khiến bạn quan tâm?'
    },
    {
        logo: RAIN_FILL,
        title: 'DỰ BÁO KHÍ HẬU',
        desc: 'Dự báo khí hậu được báo cáo theo tháng, quý, năm cực chi tiết và dễ dàng truy xuất dành cho bộ máy, cơ quan quản lý'
    },
    {
        logo: SUN,
        title: 'SỨC KHOẺ & HOẠT ĐỘNG',
        desc: 'Nhiệt độ, lượng mưa, chỉ số tia UV, tầng ozon, lắng đọng acid, độ ẩm không khí, áp suất khí quyển, tầm nhìn xa và hơn thế nữa'
    },
    {
        logo: SUN_FILL,
        title: 'CHỦ ĐỀ',
        desc: 'Chủ đề bụi mịn, dịch bệnh Covid 19, nhiệt độ, ô nhiễm tiếng ồn với nhiều thông tin chi tiết cập nhật kiến thức cho cộng đồng'
    },
    {
        logo: RAIN,
        title: 'TIN TỨC',
        desc: 'Tin tức hàng ngày, tin tức mới nhất về các vấn đề sức khoẻ môi trường và nhiều tin tức quan trọng nữa'
    },
]
export const leftCard = [
    {
        title: 'Hà Nội|19:30|GMT 7+',
        num: '40°C',
        sugest:'Độ ẩm không khí làm tăng cảm giác nóng bức',
        avg: 'C:50°|T:30°'

    }, 
    {
        title: 'Độ ẩm',
        num: '40%',
        sugest:' ',
        avg: 'C:50°|T:30°'

    },
    {
        title: 'Tầm nhìn',
        num: '~7km',
        sugest:'Trời nắng nên không nhìn rõ',
        avg: 'C:50°|T:30°'

    }
    ,
    {
        title: 'Tốc độ gió',
        num: '7km/h',
        sugest:'Trời đẹp nhưng không đi chơi',
        avg: 'C:50°|T:30°'

    },
    {
        title: 'Tỉ lệ bụi mịn',
        num: '10g/m',
        sugest:' ',
        avg: ' '

    },
    {
        title: 'khả năng dị ứng',
        num: '129',
        sugest:'Trời đẹp nhưng không đi chơi',
        avg: ' '
    }
]
 export const rightCard=[
{
    title: 'Lượng Mưa',
    type: '(mm)',
    logo: RAINHOME,
    num: '1200-1600'

},
{
    title: 'Chỉ số tia UV',
    type: '(mm)',
    logo: UV,
    num: '1200-1600'

},
{
    title: 'Chỉ số OZON',
    type: '(mm)',
    logo: OZON,
    num: '1200-1600'

},
{
    title: 'Lắng động Acid',
    type: '(mm)',
    logo: ACID,
    num: '1200-1600'

},
{
    title: 'Độ ẩm không khí',
    type: '(mm)',
    logo: AIR,
    num: '1200-1600'
}

 ]

 export const hourTemp = [
    {
        time: '01:00',
        img: CLOUD,
        degree: '38°'
    },
    {
        time: '02:00',
        img: RAIN_THUNDER,
        degree: '38°'
    },
    {
        time: '03:00',
        img: RAIN_WEATHER,
        degree: '38°'
    },
    {
        time: '07:00',
        img: RAIN_THUNDER,
        degree: '38°'
    },
    {
        time: '05:00',
        img: CLOUD,
        degree: '38°'
    },
    {
        time: '07:00',
        img: RAIN_THUNDER,
        degree: '38°'
    },
    {
        time: '07:00',
        img: RAIN_THUNDER,
        degree: '38°'
    },
    {
        time: '08:00',
        img: RAIN_THUNDER,
        degree: '38°'
    },
    {
        time: '09:00',
        img: RAIN_THUNDER,
        degree: '38°'
    },
    {
        time: '10:00',
        img: RAIN_THUNDER,
        degree: '38°'
    },
]
export const newsMain =[
    {
title: 'Ngay 18/07/2023 sieu bao the gioi do cap vao viet nam,khuyen cao nguoi dan khong ra khoi duong',
img: NEW_S
    },
    {
        title: 'Ngay 20/02/2034 đong đất núi lửa siêu to khổng lồ ,yêu cầu không ra ngoài nha',
        img: NEW_S
            },
        ]




 