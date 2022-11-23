import { useState } from "react";

const Comments = () => {
    const [status1, setStatus1] = useState(false);
    const [status2, setStatus2] = useState(false);

    const data = [
    {useName: "Khang sama", timeCommented: "3 day ago", commentContent: "Wibu từ đáy xã hội mà đi lên", imageSrc: "https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-1/117985896_3357627861128965_6048045986021171053_n.jpg?stp=dst-jpg_p320x320&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=g8yBOcPHAB0AX9YB3hF&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT-C7ev3LQ1B6-6g5G5S9NHvj-Y1MKuXYBkecMGKjZV3uw&oe=637B48FD"},
    {useName: "Bad_Man", timeCommented: "1 month(s)", commentContent: "so cool", imageSrc: "https://img7.iqiyipic.com/passport/20220905/9f/8e/passport_34025243248_166236516559205_130_130.jpg"},
    {useName: "I found you🙂", timeCommented: "2month(s)", commentContent: "I can't play the vid because there's a join vip🙄", imageSrc: "https://img7.iqiyipic.com/passport/20220817/49/8e/passport_34024722240_166070254580085_130_130.jpg"},
    {useName: "ethananimelover78", timeCommented: "2022-06-28", commentContent: "very annoying ads right", imageSrc: "https://img7.iqiyipic.com/passport/20220628/d4/08/passport_34022835066_165628398142256_130_130.jpg"},
    {useName: "MUHAMMAD QAYYUM IQRAM BIN ABDILLAH Moe", timeCommented: "2021-11-04", commentContent: "so good", imageSrc: "https://img7.iqiyipic.com/passport/20211104/4a/3b/passport_34014944703_163600088988050_130_130.jpg"}]


    return (  
        <div>
            {data.map((value, index) => {
                return (
                    <div className="flex pt-4">
                        <img src={value.imageSrc} alt="" className="flex rounded-[50%] w-10 h-10 mr-[12px] mt-4 " />
                        <div className="w-full relative border-t border-gray-200 pt-4 dark:border-gray-400">
                        
                            <div className="flex items-center">
                                <span className="text-gray-500 font-semibold">{value.useName}</span>
                                <span className="ml-1 mr-1 text-gray-500">•</span>
                                <span className="text-sm">{value.timeCommented}</span>
                            </div>

                            <div className="content mt-2">
                                <span className="">{value.commentContent}</span>
                            </div>

                            <div className="comment-btn mt-2 flex text-gray-500 pb-4">
                                <button className="flex mr-6 hover:text-green-500 hover:fill-green-500" onMouseOver={() => setStatus1(true)} onMouseLeave={() => setStatus1(false)}>
                                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" className="hover:stroke-green-500">
                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <g stroke={status1 ? "#14c74a" : "#828387"} strokeWidth="2">
                                                <path d="M16.3667196,5.00154561 C17.4245684,5.00215572 18.4815783,5.40669448 19.2874332,6.21441069 C20.0707444,6.99953099 20.4749039,8.01986308 20.499789,9.04770023 C20.5246219,10.0733823 20.1721086,11.1066937 19.4414644,11.9209207 L19.4414644,11.9209207 L12.3569259,19.0301895 L4.71256676,12.083677 C3.90351184,11.2727534 3.49898438,10.2108986 3.49898438,9.14904382 C3.49898438,8.08718904 3.90351184,7.02533425 4.71256676,6.21441069 C5.49266979,5.43250589 6.50810888,5.02836123 7.53148149,5.00236292 C8.55300732,4.97641153 9.582595,5.32690031 10.3936303,6.05488288 L10.3936303,6.05488288 L12.0035388,7.65220921 L13.4407618,6.21185343 C14.2501751,5.40430336 15.3087969,5.00093545 16.3667196,5.00154561 Z"></path>
                                            </g>
                                        </g>
                                    </svg>
                                    <span className="text-sm w-9 text-left leading-6">Like</span>
                                </button>

                                <button className="flex hover:text-green-500" onMouseOver={() => setStatus2(true)} onMouseLeave={() => setStatus2(false)}>
                                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <g stroke={status2 ? "#14c74a" : "#828387"} strokeWidth="2">
                                                <g transform="translate(3.503068, 5.000000)">
                                                    <path d="M15.9969316,1 L15.9969316,12 L10.8761996,12 L8.49832702,14.5363974 L6.11726667,12 L1,12 L1,1 L15.9969316,1 Z"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    <span className="text-sm leading-6">Reply</span>
                                </button>
                            </div>

                        </div>
                    </div>
                );
            })}
        </div>
    );
}
 
export default Comments;