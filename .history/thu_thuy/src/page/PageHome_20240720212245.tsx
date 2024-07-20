import img2 from'../../public/img/img2.jpg'
import img2I from'../../public/img/img2.1.jpg'
import img2II from'../../public/img/img2.2.jpg'
import img2III from'../../public/img/img2.3.jpg'

const PageHome = () => {
    return (
        <div className="mt-32 mb-5  w-[1120px]  flex justify-around flex-col  m-auto leading-7">
            <p className='text-[#333] text-[15px] uppercase font-[500] mx-9 tracking-wider mb-2'>Phạm Thu Thủy</p>
            <h1 className='uppercase text-[#383838] text-[27px] font-[600] mx-9 mb-5 tracking-wider'>Vì sao nên dùng nước hoa dạng lăn </h1>
            <i className='mx-9'>Nước hoa lăn là sản phẩm được sử dụng phổ biến hiện nay do sự tiện dụng của nó. Với thiết kế nhỏ gọn tiện dụng, dễ mang theo và đa dạng mùi hương. Nước hoa dạng lăn đang là một trong những sự lựa chọn được ưu tiên của học sinh, sinh viên.</i>
            <div className='flex gap-3 mt-3 m-auto'>
                <img className="w-[400px] h-[360px] m-auto" src={img2I} alt="" />
                <img className="w-[400px] h-[360px] m-auto" src={img2} alt="" />
            </div>
            <div className='mx-9 mt-5'>
                <p className='text-[19px] font-[500] mb-2'>Nước hoa dạng lăn là gì ?</p>
                <p>Nước hoa dạng lăn là loại nước hoa có đầu thiét kế tiện lợi, 
                    chỉ cần dùng tay lăn nhẹ nước hoa sẽ trải đều trên vùng da đó. 
                    Nước hoa dạng lăn có hình dáng nhỏ gọn, tiện lợi, dễ dàng mang theo, 
                    phù hợp cho những bạn hay đi du lịchh hoặc có công việc thường xuyẻn xê dịch nhiều nơi.</p>
            </div>
            <div className='mx-9 mt-5'>
                <p className='text-[19px] font-[500] mb-2'>Sự tiện dụng của dạng nước hoa lăn </p>
                <p>Hiện nay, các loại nước hoa dạng lăn đang tạo ra cơn sốt tromg những ngày vừa qua,
                 vậy dạng nước hoa này có gì đặc biệt mà chiếm được sự yêu thích đến vậy? Cùng tìm hiểu lý do sau đây nhé;</p>
            </div>
            <div className='mx-9 mt-5'>
                <p className='text-[19px] font-[500] mb-2'>Sự tiện dụng</p>
                <p> - Đây là ưu điểm đầu tiên của dạng nước hoa này. 
                    Với thiết kế nhỏ gọn khi bạn mở nắp trai có thể lăn lên vị trí mà mình muốn như ( cổ tay, cổ, sau tai, sau gáy..)</p>
                <p> - Ngoài sự tiện dụng ra, dạng nước hoa này có thẻ mang theo bỏ trong túi áo túi sách mang theo bất cứ khi nào hoặc nơi nào mà bạn cần tới. </p>
            </div>
            <div className='mx-9 mt-5'>
                <p className='text-[19px] font-[500] mb-2'>Nước hoa lăn tập trung mùi hương tại một vùng da</p>
                <p>Với dạng nước hoa lăn, bạn có thể kiếm soát độ hương và dễ dàng tập trung mùi hương tại một điểm cụu thể trên cơ thể, 
                    do đó hương thơm sẽ bám lâu hơn so với dạng xịt, vì dạng xịt sẽ bị phân tán bởi nhiều vùng khác nhau</p>
                <img src={img2II} className='mt-3 h-[350px] w-[1050px] m-auto' alt="" />
            </div>
            <div className='mx-9 mt-5'>
                <p className='text-[19px] font-[500] mb-2'>Đa dạng mùi hương</p>
                <p>Hiện nay, có nhiều thương hiệu nước hoa đã cung cấp dạng lăn cho các phiên bản phổ biến của, 
                    nước hoa dạng lăn có nhiều mùi hương khác nahu. Vì vậy, khách hàng có thể thỏa thích lựa chọn mùi phù hợp với
                     cá tính hoặc sở thích của mình. Ngoài ra bạn có thể được trải nghiệm nhiều loại nước hoa ở các vị trí khác nhau </p>
            </div>
            <div className='mx-9 mb-8 mt-5'>
                <p className='text-[19px] font-[500] mb-2'>Thiết kế bắt mắt </p>
                <p>Không chỉ thiết kế tiện lợi mà nước hoa dạng lăn còn rát xinh xắn và bắt mắt, với những ai yêu thích cái đẹp 
                    thì đây chắc hẳn sẽ thích những màu sắc hoặc họa tiết ấn tượng trên những chai nước hoa này.  </p>
                <img src={img2III} className='mt-3 h-[350px] w-[1050px] m-auto' alt="" />
            </div>
        </div>
    )
}

export default PageHome