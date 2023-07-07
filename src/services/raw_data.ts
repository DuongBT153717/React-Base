import SUN_FILL from '../assets/images/sun_fill.png';
import WIND from '../assets/images/wind.png';
import RAIN_FILL from '../assets/images/rain_fill.png';
import SUN from '../assets/images/sun.png';
import RAIN from '../assets/images/rain.png';
import CLOUD from '../assets/images/weather-page/cloud.png';
import RAIN_WEATHER from '../assets/images/weather-page/rain.png';
import RAIN_THUNDER from '../assets/images/weather-page/rain_thunder.png';
import ICON_SUNNY from '../assets/images/weather-page/icon _day sunny_.png'
import BAROMETER_ from '../assets/images/weather-page/icon _barometer_.png'
import EYE from '../assets/images/weather-page/icon _eye_.png'
import HUMIDITY from '../assets/images/weather-page/icon _humidity_.png'
import RAIN_DROPS from '../assets/images/weather-page/icon _raindrops_.png'
import SHIELD from '../assets/images/weather-page/shield.png'
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

export const weatherContent = [
    {
        icon: ICON_SUNNY,
        title: 'Chỉ số tia UV',
        des: '11.0'
    },
    {
        icon: HUMIDITY,
        title: 'Độ ẩm không khí',
        des: '50%'
    },
    {
        icon: SHIELD,
        title: 'Tầng Ozonn',
        des: '????'
    },
    {
        icon: BAROMETER_,
        title: 'Áp suất không khí',
        des: '980 mb'
    },
    {
        icon: RAIN_DROPS,
        title: 'Lắng đọng Acid',
        des: '5.6 pH'
    },
    {
        icon: EYE,
        title: 'Tầm nhìn',
        des: 'Trên 10 km'
    },
]