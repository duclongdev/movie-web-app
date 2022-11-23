import React from "react";
import "./style.css"
import LogoBtn  from "/src/components/button/Logo";
import {SearchIcon, Phone, TV, Computer} from "../../../assets"
function Footer () {
    return (
        <div className="w-3/4 m-auto mt-6 text-white">
        <div>
            <div className="text-center">
                <h1 className="-mb-4">Trải nghiệm tốt nhất chỉ có tên Space APP</h1>
                <div className="mb-3">
                    <span className="text-green-500 text-sm">
                        <SearchIcon/>SPACE  
                    </span>
                    <span className="text-sm "> Tìm kiếm trong cửa hàng ứng dụng dành cho thiết bị di động</span>
                </div>
                <div className="flex ml-48 pb-8 pt-4">
                    <button className="flex rounded-md text-sm pt-1.5 mr-24 bg-gray-900 w-32 h-8">
                        <span className="ml-5">
                            <Phone/>
                        </span>
                        <span className="ml-1">Điện thoại</span>
                    </button>

                    <button className="flex  rounded-md text-sm pt-1.5 mr-24 bg-gray-900 w-32 h-8">
                        <span className="ml-11">
                            <TV/>
                        </span>
                        <span className="ml-1">TV</span>
                    </button>

                    <button className="flex rounded-md text-sm pt-1.5 bg-gray-900 w-32 h-8">
                        <span className="ml-10">
                            <Computer/>
                        </span>
                        <span className="ml-1">Web</span>
                    </button>
                </div>
                <hr className=""></hr>
            </div>
        </div>
        <div className="pt-6"> 
            <div className="float-left h-16">
                <LogoBtn/>
            </div>
            
            <div className="float-left w-25 ml-5 text-sm">
                <h3>Giới thiệu về SPACE</h3>
                <ul className="text-gray-400 mt-2">
                    <li>Thông tin công ty</li>
                    <li>Giới thiệu dịch vụ sản phẩm</li>
                    <li>Cách xem</li>
                </ul>
            </div>
             <div className="float-left w-25 ml-5  text-sm">
                <h3>Hợp tác</h3>
                <ul className="text-gray-400 mt-2">
                    <li>Đăng quảng cáo</li>                        
                    <li>Quan hệ kinh doanh</li>
                    <li>Hợp tác cài đặt</li>
                </ul>
            </div>
            <div className="float-left w-25 ml-5 text-sm">
                <h3>Hỗ trợ và giúp đỡ</h3>
                <ul className="text-gray-400 mt-2">
                    <li>Phản ánh ý kiến</li>
                    <li>Trung tâm phản hồi bảo mật</li>
                    <li>Câu hỏi thường gặp</li>
                </ul>
            </div>
            <div className="float-left w-25 ml-5 text-sm">
                <h3>Điều khoản dịch vụ</h3>
                <ul className="text-gray-400 mt-2">
                    <li>Điều khoản quyền riêng tư</li>
                    <li>Điều khoản sử dụng</li>                    
                </ul>
            </div>
            </div>
        <div className="float-left mt-8 ml-32 w-3/5 text-xs text-gray-400 pb-8">
            <p>Copyright &copy; 2021 Space All Rights Reserved</p>
            <p>Chúng tôi sử dụng Cookies để cải thiện trải nghiệm sử dụng của bạn. Nếu bạn tiếp tục sử dụng trang web của chúng tôi, có nghĩa là bạn đồng ý chúng tôi sử dụng Cookies. Đọc <u>Chính sách quyền riêng tư SPACE. </u> 
            </p>       
        </div>
    </div>
    );
}

export default Footer;