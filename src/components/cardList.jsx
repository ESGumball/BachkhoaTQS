const cardList = [
    {
        type: 'Cơ bản',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Sát',
        chucnang: 'Gây cho mục tiêu 1 điểm sát thương',
    },
    {
        type: 'Trang bị',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Ngựa +',
        chucnang: 'Người chơi khác tính toán khoảng cách đến bạn +1',
    },
    {
        type: 'Cẩm nang',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Quát Cốt Liệu Độc',
        chucnang: 'Dùng lên 1 người chơi đang bị thương, người đó hồi phục 1 sinh lực. Có thể dùng để \
        "Trọng chú" để đổi lá mới',
    },
    {
        type: 'Cẩm nang',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Thiểm Điện',
        chucnang: (
            <p> Đặt vào vùng phán xét của bạn. Đến giai đoạn phán xét, nếu kết quả từ 2 - 9 &#9824; . Người lật mở phán
                xét nhận 3 điểm sát thương hệ lôi. Nếu không ra kết quả thì chuyển cho người kế tiếp.
            </p>
        ),
    },
    {
        type: 'Cẩm nang',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Cố Quốc An Bang',
        chucnang: 'Bạn rút 8 thẻ và bỏ đi tối thiểu 6 thẻ bài trên tay. Riêng người chơi Ngô khi dùng thì khi bỏ bài\
        có thể đem cho người cùng thế lực tối đa 2 lá',
    },
    {
        type: 'Cơ bản',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Thích Sát',
        chucnang: 'Khi người chơi dùng thẻ [Né] để triệt tiêu lá Thích Sát họ phải bỏ thêm 1 lá bài trên tay, nếu không\
        thẻ Thích Sát này vẫn gây ra sát thương',
    },
    {
        type: 'Cẩm nang',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Thuận Thủ Khiên Dương',
        chucnang: 'Sử dụng đối với 1 người chơi có bài trong vùng chơi và khoảng cách là 1. Thu lấy 1 thẻ bài trong\
        vùng chơi của họ',
    },
    {
        type: 'Cẩm nang',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Vạn Tiễn Tề Phát',
        chucnang: 'Mỗi người chơi phải bỏ ra 1 thẻ [Né] để triệt tiêu, nếu không họ nhận 1 sát thương',
    },
    {
        type: 'Cơ bản',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Né',
        chucnang: 'Dùng để triệu tiêu lá [Sát]',
    },
    {
        type: 'Trang bị',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Bát Quái Đỏ',
        chucnang: 'Cần sử dụng hoặc đánh ra thẻ [Né] thì tiến hành phán xét\
        nếu là đỏ coi như đã sử dụng [Né]',
    },
    {
        type: 'Trang bị',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Ngọc Tỷ',
        chucnang: 'Trở thành Đại Thế Lực duy nhất và giai đoạn rút bài được rút thêm 1 thẻ. Bắt đầu\
        giai đoạn hành động xem như sử dụng [Tri Kỉ Tri Bỉ]',
    },
    {
        type: 'Cẩm nang',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Suy Tâm Trí Phúc',
        chucnang: 'Sử dụng với người không cùng thế lực, có bài trong vùng chơi, ở khoảng cách 1\
        và thu của họ tối đa 2 thẻ và trả lại số thẻ tương đương trên tay',
    },
    {
        type: 'Trang bị',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Nhân Vương Thuẫn',
        chucnang: 'Thẻ [Sát] sắc đen không có hiệu quả với bạn',
    },
    {
        type: 'Cẩm nang',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Hiệp Thiên Tử Dĩ Lệnh Chư Hầu',
        chucnang: 'Nếu bạn thuộc Đại thế lực và bạn sử dụng, kết thúc ngay giai đoạn hành động. Trong giai đoạn\
        kết thúc, bạn tự bỏ 1 thẻ trên tay để kết thúc lượt hiện tại, bạn được đi thêm lượt nữa.',
    },
    {
        type: 'Cẩm nang',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Trục Cận Khí Viễn',
        chucnang: 'Sử dụng đối với 1 người khác, Nếu khoảng cách lớn hơn 1 thì hủy, khoảng cách bằng 1 thì cướp',
    },
    {
        type: 'Cơ bản',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Sát lôi',
        chucnang: 'Là thẻ [Sát] nhưng có thuộc tính lôi',
    },
    {
        type: 'Trang bị',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Thanh Công Kiếm',
        chucnang: 'Bỏ qua hiệu quả phòng cụ của mục tiêu',
    },
    {
        type: 'Trang bị',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Gia Cát Liên Nỏ',
        chucnang: 'Sử dụng không giới hạn thẻ [Sát]',
    },
    {
        type: 'Trang bị',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Đằng Giáp',
        chucnang: 'Vô hiệu với [Nam Man Nhập Xâm], [Vạn Tiễn Tề Phát], [Xuất Kỳ Bất Ý]\
        , [Sát] phổ thông. Khi nhận [Sát] hỏa, sát thương +1',
    },
    {
        type: 'Trang bị',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Đổng Tước',
        chucnang: 'Trong lượt của bất kì người chơi, khi lần đầu sử dụng thẻ bài mang hiệu quả cường hóa thì sẽ\
        bỏ qua điều kiện và trực tiếp phát động hiệu quả Ứng biến',
    },
    {
        type: 'Cẩm nang',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Lạc Bất Tư Thục',
        chucnang: (
            <p>
            Sử dụng lên 1 người chơi khác, Đến giai đoạn phán xét của họ, nếu thẻ phán xét không phải &#9829;
            , mục tiêu bỏ qua giai đoạn hành động
            </p>
        ),
    },
    {
        type: 'Cẩm nang',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Hô Phong Hoán Vũ',
        chucnang: 'Sử dụng lên 1 người không cùng thế lực, bạn lật mở 3 thẻ trên đầu chồng bài, bạn thu lấy 1 thẻ và\
        cho họ 1 thẻ, thẻ còn lại đặt xuống đáy',
    },
    {
        type: 'Cẩm nang',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Khắc Phục Trung Nguyên',
        chucnang: (
            <>
            <p>
            Sử dụng lên tùy ý người chơi, những người đó theo thứ tự chọn 1 mục:
            </p>
            <p>
            1. Họ xem như sử dụng 1 thẻ [Sát]. "Người chơi Thục khi chọn, [Sát] này +1 sát thương"
            </p>
            <p>
            2. Họ rút 1 thẻ bài. "Người chơi Thục khi chọn, rút 2 thẻ"
            </p>
            </>
        ),
    },
    {
        type: 'Cơ bản',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Đào',
        chucnang: 'Dùng để hồi phục 1 sinh lực hoặc thoát khỏi trạng thái hấp hối. Có thể dùng lên người đang trong\
        trạng thái hấp hối',
    },
    {
        type: 'Cẩm nang',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Hoàng Cân Chi Loạn',
        chucnang: 'Sử dụng lên tất cả người chơi, bạn thực hiện 1 lần phán xét. Sau khi phán xét có hiệu lực, lần lượt\
        từng người chơi khác bỏ đi 1 thẻ cùng loại với thẻ phán xét, nếu không nhận 1 sát thương từ bạn',
    },
    {
        type: 'Cẩm nang',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Động Chúc Tiên Cơ',
        chucnang: 'Sử dụng đối với bạn, bạn xem và rút 2 thẻ, có thể bỏ 1 trong 2 hoặc cả 2 thẻ xuống đáy\
         chồng bài và bốc lá mới',
    },
    {
        type: 'Cẩm nang',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Đào Viên Kết Nghĩa',
        chucnang: 'Sử dụng lên tất cả người chơi, lần lượt hồi phục 1 sinh lực',
    },
    {
        type: 'Cơ bản',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Tửu',
        chucnang: 'Khi sử dụng, lá [Sát] tiếp theo được +1 sát thương. Có thẻ dùng để thoát khỏi trạng\
        thái hấp hối, không được sử dụng cho người khác',
    },
    {
        type: 'Cơ bản',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Sát Băng',
        chucnang: 'Đây là lá [Sát] có thuộc tính băng. Khi sử dụng Sát băng gây sát thương cho mục tiêu\
        bạn có thể chặn sát thương này lại để bỏ 2 thẻ bài của người chơi',
    },
    {
        type: 'Cẩm nang',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Giải Giáp Quy Điền',
        chucnang: (
            <>
            <p>
            Sử dụng lên người chơi có bài trong vùng trang bị, lệnh họ thu hết thẻ bài trên tay. Sau đó họ lựa:
            </p>
            <p>
            1. Bỏ đi số bài tương đương số thẻ cầm lên và hồi phục 1 sinh lực
            </p>
            <p>
            2. Tự giảm 1 sinh lực
            </p>
            </>

        ),
    },
    {
        type: 'Cẩm nang',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Hỏa Thiêu Liên Doanh',
        chucnang: 'Sử dụng lên người bên phải, bạn gây 1 sát thương hỏa cho người đó. Nếu người đó có quan hệ đội hình\
        sát thương này sẽ lan tới những người cùng thế lực với người đó',
    },
    {
        type: 'Cơ bản',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Sát hỏa',
        chucnang: 'Đây là lá [Sát] có thuộc tính Hỏa',
    },
    {
        type: 'Trang bị',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Ngô Lục Kiếm',
        chucnang: 'Phạm vi công kích của người chơi khác cùng thế lực với bạn +1',
    },
    {
        type: 'Cẩm nang',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Sấn Hỏa Tá Kiếp',
        chucnang: (
            <>
            <p>
            Sử dụng lên người chơi có bài trên tay, bạn lật mở 1 thẻ trên tay họ và lệnh họ chọn:
            </p>
            <p>
            1. Giao cho bạn thẻ đó
            </p>
            <p>
            2. Nhận 1 điểm sát thương từ bạn
            </p>
            </>

        ),
    },
    {
        type: 'Cơ bản',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Độc',
        chucnang: (
            <>
            <p>
            Bạn có thể sử dụng lên bản thân, bạn tự giảm 1 sinh lực
            </p>
            <p>
            Khi thẻ [Độc] rời khỏi vùng bài trên tay của bạn, Và bằng cách này thẻ [Độc] tiến vào chồng bài bỏ
            bạn tự giảm 1 sinh lực
            </p>
            <p>
            Khi được giao úp, đấu điểm, đổi phán xét, chuyển hóa thành 1 thẻ khác nhưng không lập tức tiến vào\
            chồng bài bỏ thì người sở hữu lá bài này không chịu hiệu ứng của lá [Độc]
            </p>
            </>
        ),
    },
    {
        type: 'Cẩm nang',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Dĩ Dật Đãi Lao',
        chucnang: 'Sử dụng đối với bạn và tất cả người chơi cùng thế lực. Lần lượt mỗi người rút 2 thẻ bài\
        và bỏ 2 thẻ bài',
    },
    {
        type: 'Trang bị',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Ngũ Hành Hạc Linh Phiến',
        chucnang: 'Có thể đem thẻ [Sát] thuộc tính chuyển hóa thành 1 thẻ [Sát] thuộc tính tùy ý để sử dụng',
    },
    {
        type: 'Cẩm nang',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Điệu Hổ Ly Sơn',
        chucnang: 'Chọn tối đa 2 mục tiêu khác để sử dụng, cho đến hết lượt hiện tại, mục tiêu không tính vào khoảng\
        cách, vị trí, thứ tự ngồi, không thể trở thành mục tiêu và không thể dùng bất kì lá bài nào, sinh lực cũng\
        không thay đổi',
    },
    {
        type: 'Cẩm nang',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Thiếc Tác Liên Hoàn',
        chucnang: 'Chọn tối đa 2 mục tiêu, lệnh họ xoay ngang võ tướng. Nếu họ đang xoay ngang thì xoay dọc võ tướng\
        . Có thể đem lá này để "Trọng Chú".',
    },
    {
        type: 'Trang bị',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Phi Long Đoạt Phượng',
        chucnang: 'Sau khi sử dụng [Sát] xác định mục tiêu, bạn có thể lệnh họ tự bỏ 1 thẻ bài. Khi sử dụng [Sát]\
        khiến mục tiêu rơi vào trạng thái hấp hối, bạn có thể thu lấy 1 thẻ trên tay mục tiêu',
    },
    {
        type: 'Cẩm nang',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Xuất Kỳ Bất Ý',
        chucnang: 'Sử dụng lên 1 người chơi, bạn mở ra 1 thẻ trên tay của họ, nếu thẻ đó khác chất với [Xuất Kì\
        Bất Ý] thì bạn gây cho họ 1 sát thương',
    },
    {
        type: 'Cẩm nang',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Liên Quân Thịnh Yến',
        chucnang: 'Sử dụng với bạn và tất cả người thuộc thế lực khác. Mỗi người trong 1 thế lực đó rút 1 lá bài và\
        xoay dọc võ tướng. Sau đó bạn chấp hành X lần lựa chọn: Hồi phục 1 sinh lực hoặc rút 1 thẻ bài [X là số người\
        trong thế lực đó]',
    },
    {
        type: 'Cẩm nang',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Văn Hòa Loạn Võ',
        chucnang: (
            <>
            <p>Sử dụng lên tất cả người chơi. Lần lượt mỗi người lật mở bài trên tay, sau đó chọn 1 mục:</p>
            <p>1. Lệnh người đó tự bỏ 2 thẻ khác loại trên tay.</p>
            <p>2. Bạn hủy 1 thẻ bài trên tay người đó.</p>
            <p> Người chơi Quần khi sử dụng lá này và sau khi hoàn thành lựa chọn, nếu họ không có bài trên tay thì bạn
                bổ sung bài bằng giới hạn sinh lực. 
            </p>
            </>
        ),
    },
    {
        type: 'Cẩm nang',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Quyết Đấu',
        chucnang: 'Sử dụng đối với 1 người chơi khác, bạn và họ lần lượt đánh ra 1 thẻ [Sát], người nào không thể đánh\
        ra được nữa thì chịu 1 sát thương từ người còn lại',
    },
    {
        type: 'Cẩm nang',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Thụ Thượng Khai Hoa',
        chucnang: 'Sử dụng lên bạn, bạn lựa chọn bỏ tối đa 2 thẻ của bản thân. Sau đó rút lại số thẻ tương đương. Nếu\
        bằng cách này bỏ đi ít nhất 1 thẻ Trang bị, bạn rút thêm 1 thẻ mới',
    },
    {
        type: 'Cẩm nang',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Thảo Thuyền Tá Tiễn',
        chucnang: 'Khi bạn trở thành mục tiêu của thẻ Cẩm Nang loại sát thương phi thuộc tính, bạn có thể sử dụng lá này\
        để vô hiệu hóa tất cả mục tiêu và hiệu quả của lá đó. Sau đó bạn chọn : thu lấy thẻ Cẩm Nang sát thương đó hoặc\
        thu lấy thẻ [Tùy Cơ Ứng Biến] từ ngoài bàn',
    },
    {
        type: 'Cẩm nang',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Vô Giải Khả Kích',
        chucnang: 'Trước khi 1 thẻ cẩm nang có hiệu lực lên 1 mục tiêu, bạn có thể sử dụng thẻ này để triệt tiêu hiệu quả\
        mục tiêu đó. Nếu có chữ [Quốc] bạn có thể sử dụng lên tất cả người cùng thế lực',
    },
    {
        type: 'Cẩm nang',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Hỏa Công',
        chucnang: 'Sử dụng lên 1 người chơi có bài trên tay. Họ mở ra 1 thẻ bài trên tay. Nếu bạn bỏ 1 thẻ cùng chất với\
        1 thẻ họ mở, bạn gây cho họ 1 sát thương hệ hỏa',
    },
    {
        type: 'Cẩm nang',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Ngũ Cốc Phong Đăng',
        chucnang: 'Sử dụng lên tất cả người chơi, từ đầu chồng bài mở ra số thẻ tương đương với mục tiêu, sau đó bắt\
        đầu từ bạn lần lượt mỗi người thu lấy 1 thẻ trong số đó.',
    },
    {
        type: 'Cẩm nang',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Binh Lương Thốn Đoạn',
        chucnang: (
            <>
            <p>Bạn có thể chọn 1 người chơi khác trong khoảng cách 1 và đặt vào vùng phán xét của họ. Đến giai đoạn
                phán xét của họ nếu thẻ phán xét không phải là chất &#9827;. Mục tiêu bỏ qua giai đoạn rút bài.
            </p>
            </>
        ),
    },
    {
        type: 'Cẩm nang',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Viễn Giao Cận Công',
        chucnang: 'Sử dụng đối với 1 người chơi không cùng thế lực. Họ rút 1 thẻ sau đó bạn rút 3 thẻ',
    },
    {
        type: 'Trang bị',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Ngựa -',
        chucnang: 'Bạn tính toán khoảng cách đến người khác -1',
    },
    {
        type: 'Cẩm nang',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Hào Lệnh Thiên Hạ',
        chucnang: (
            <>
            <p> Sử dụng lên 1 người chơi có sinh lực không phải nhỏ nhất, ngoại trừ người đó, tất cả người chơi khác có
                thể lựa chọn: 
            </p>
            <p>
                1. Bỏ 1 thẻ trên tay và xem như dùng 1 thẻ Sát. "người chơi Ngụy không cần bỏ bài"
            </p>
            <p>
                2. Hủy người đó 1 thẻ bài. "người chơi Ngụy thu lấy"
            </p>
            </>
        ),
    },
    {
        type: 'Trang bị',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Thiên Cơ Đồ',
        chucnang: 'Khi lá này tiến vào vùng trang bị của bạn, bạn bỏ đi 1 thẻ khác trừ thẻ này. Khi thẻ này rời khỏi\
        vùng trang bị bạn bổ sung bài trên tay đến 5 lá',
    },
    {
        type: 'Trang bị',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Tam Thiên Lưỡng Nhận Đao',
        chucnang: 'Sau khi bạn gây sát thương lên mục tiêu, bạn có thể bỏ 1 lá trên tay để bắn 1 sát thương cho người\
        chơi có khoảng 1 đối với mục tiêu',
    },
    {
        type: 'Cẩm nang',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Lục Lực Đồng Tâm',
        chucnang: 'Sử dụng lên Đại thế lực hoặc Tiểu thế lực, nếu mục tiêu không ở trạng thái liên hoàn, xoay ngang mục\
        tiêu. Nếu mục tiêu đã ở trạng thái liên hoàn, mục tiêu được rút 1 thẻ bài. Bạn có thể đem lá này để "Trọng Chú".',
    },
    {
        type: 'Trang bị',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Phương Thiên Họa Kích',
        chucnang: 'Sau khi sử dụng thẻ [Sát] chỉ định mục tiêu, bạn có thể chọn thêm tùy ý mỗi thế lực 1 người hoặc người\
        chơi ẩn danh làm mục tiêu. Nếu mục tiêu đầu tiên dùng [Né], vô hiệu thẻ [Sát] với mục tiêu còn lại.',
    },
    {
        type: 'Trang bị',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Ô Thiếc Tỏa Liên',
        chucnang: 'Sau khi bạn sử dụng [Sát] chỉ định mục tiêu, nếu mục tiêu chưa xoay ngang võ tướng bạn xoay ngang\
        tướng của họ',
    },
    {
        type: 'Trang bị',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Quán Thạch Phủ',
        chucnang: 'Khi bạn sử dụng [Sát], nếu mục tiêu dùng [Né] để triệt tiêu, bạn có thể bỏ 2 thẻ bài để triệt tiêu\
        thẻ [Né]',
    },
    {
        type: 'Trang bị',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Bát Trượng Xà Mâu',
        chucnang: 'Đem 2 thẻ trên tay xem như sử dụng thẻ [Sát]',
    },
    {
        type: 'Trang bị',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Lục Long Tham Giá',
        chucnang: 'Vừa có ngựa + vừa có ngựa -',
    },
    {
        type: 'Trang bị',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Thái Công Âm Phù',
        chucnang: 'Bạn có thể lệnh 1 người chơi xoay ngang hoặc xoay dọc võ tướng. Khi kết thúc giai đoạn hành động\
        bạn có thể "Trọng Chú" 1 thẻ bài trên tay',
    },
    {
        type: 'Cẩm nang',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Quá Hà Sách Kiều',
        chucnang: 'Chọn 1 người chơi khác có bài trong vùng chơi và hủy của họ 1 thẻ bài',
    },
    {
        type: 'Trang bị',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Nữ trang',
        chucnang: 'Khi thẻ bài này tiến vào hoặc rời vùng trang bị của 1 người. Nếu người chơi này là giới tính Nam,\
        họ phải tự bỏ 1 thẻ, trừ thẻ [Nữ trang]',
    },
    {
        type: 'Trang bị',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Hắc Quang Khải',
        chucnang: 'Khi bạn trở thành mục tiêu của thẻ [Sát], Cẩm nang loại gây sát thương, Cẩm nang phổ thông sắc Đen\
        nếu bạn không phải là mục tiêu duy nhất, những thẻ đó vô hiệu với bạn.',
    },
    {
        type: 'Cẩm nang',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Tá Đao Sát Nhân',
        chucnang: 'Sử dụng đối với 1 người chơi có thẻ bài Vũ khí trong khu trang bị, lệnh họ sử dụng 1 thẻ [Sát] lên 1\
        người trong phạm vi công kích của họ do bạn chỉ định. Nếu không, họ đem và giao cho bạn thẻ vũ khí',
    },
    {
        type: 'Cẩm nang',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Tri Kỉ Tri Bỉ',
        chucnang: 'Xem tướng hoặc bài của 1 người chơi có thể "Trọng Chú" để đổi lá mới.',
    },
    {
        type: 'Trang bị',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Bạch Ngân Sư Tử',
        chucnang: 'Khi bạn nhận sát thương, nếu số điểm sát thương bạn nhận > 1, giảm số còn 1. Khi thẻ này rời khỏi\
        vùng trang bị của bạn, bạn được hồi 1 sinh lực.',
    },
    {
        type: 'Cẩm nang',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Nam Man Nhập Xâm',
        chucnang: 'Sử dụng đối với tất cả người chơi, lần lượt từng người quăng ra 1 lá [Sát] nếu không nhận 1 sát\
        thương từ bạn.',
    },
    {
        type: 'Trang bị',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Hộ Tâm Kính',
        chucnang: 'Khi bạn nhận sát thương dẫn đến hấp hối, bạn có thể đem thẻ này đưa vào chồng bài bỏ và chặn sát\
        thương đó lại. Bạn có thể đem thẻ này trên tay lắp cho người khác.',
    },
    {
        type: 'Trang bị',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Đinh Dạ Minh Châu',
        chucnang: 'Bỏ tối đa 3 lá để rút lại số lá tương đương.',
    },
    {
        type: 'Trang bị',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Thư Hùng Song Cổ Kiếm',
        chucnang: (
            <>
            <p>Sau khi bạn sử dụng [Sát] chỉ định mục tiêu khác giới tính, lệnh họ lựa chọn:</p>
            <p>1. Họ chọn bỏ 1 thẻ trên tay </p>
            <p>2. Họ lệnh bạn rút 1 thẻ</p>
            </>
        ),
    },
    {
        type: 'Trang bị',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Thái Bình Yêu Thuật',
        chucnang: (
            <>
            <p>Bạn miễn nhiễm với sát thương thuộc tính.</p>
            <p>Giới hạn trữ bài của bạn là +X (X là số thế lực trên bàn - 1).</p>
            <p>Sau khi mất đi lá bài trong vùng trang bị, bạn rút 2 lá. Sau đó nếu sinh lực bạn {'>'} 1 bạn giảm 1 sinh
                lực.
            </p>
            </>
        ),
    },
    {
        type: 'Trang bị',
        image: '/src/assets/Baidanh/vidu.jpg',
        name: 'Mộc Ngưu Lưu Mã',
        chucnang: (
            <>
            <p>1 lần trong giai đoạn hành động, bạn có thể đem 1 lá đặt úp xuống dưới, sau đó bạn có thể lựa chọn:</p>
            <p>1. Đưa [Mộc Ngưu Lưu Mã] cho 1 người chơi khác</p>
            <p>2. Giữ trong vùng trang bị của mình</p>
            <p>Bạn có thể đem bài bên dưới sử dụng hoặc đánh ra như bài trên tay</p>
            </>
        ),
    },
];

export default cardList