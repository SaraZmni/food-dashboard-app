import { FC } from "react";
import menuImage from "@static/images/menu.png";

const Banner: FC = () => {
  return (
    <div className="grid grid-cols-3 bg-primary mt-3 rounded-lg md:size-auto mx-10">
      <div>
        <img
          src={menuImage}
          alt="fooood"
          className="self-end mx-3 my-3"
          width={400}
          height={400}
        />
      </div>
      <div className="row-auto flex flex-col justify-center items-center pl-5">
        <h3 className="tracking-wide  text-gray-900 text-3xl ml-6 font-vazir">
          سامانه‌ی سفارش غذا آنلاین&nbsp;&nbsp;&nbsp;🎉
        </h3>
        <h5 className="text-xs text-gray-500 mt-3 font-vazir leading-6">
          این سامانه به جهت مدیریت و صرفه جویی حداکثری در میزان و تعداد غذای
          مصرفی سازمان طراحی شده است.با استفاده از این سامانه می توان بازه زمانی
          مجازی را قبل از فرآیند توزیع آنلاین و آفلاین غذا تعیین کرده و پرسنل
          نیز با استفاده از انواع روش‌های ارتباطی همچون کامپیوتر و یا تلفن همراه
          می توانند در بازه زمانی مجاز نسبت به انجام رزرو، تغییر و حذف کنند و هم
          چنین می‌‌توانند از برنامه غذایی خود مطلع شوند
        </h5>
      </div>
      <div className="flex justify-end items-end pb-4 pr-4">
        <a className="font-hairline text-secondary font-vazir" href="">
          توضیحات بیشتر <i className="ml-3 fa fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};
export default Banner;
