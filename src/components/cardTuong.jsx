import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import ImageTuong from './ImageTuong';

const cardTuong = [
    {
        tennuoc: 'Thục',
        image: ImageTuong.vidu,
        Danhhieu: 'Loạn Thế Đích Kiêu Hùng',
        name: 'Lưu Bị',
        haotuong: (
            <span><FontAwesomeIcon icon={faUserGroup} /> Quan Vũ, Trương Phi, Cam Phu Nhân</span>
        ),
        Hp :(
            <span>2 <FontAwesomeIcon icon={faHeart} /></span>
        ),
        chucnang: (
            <p>
            <span className="text-red-600">[Nhân Đức]</span> Giai đoạn hành động, bạn có thể đem tuỳ ý 
            lượng thẻ bài trong tay giao cho 1
        người khác chưa nhận bài từ kỹ năng này trong giai đoạn này. Nếu vậy khi tổng số thẻ bài
        bạn giao trong lượt này bằng 2 hoặc nhiều hơn, bạn có thể xem như sử dụng 1 thẻ Cơ Bản bất kỳ.
        </p>
    ),
        caunoi: (
            <i> "Dĩ đức phục nhân, dĩ nhân đãi nhân"</i>
        ),
    },
    {
        tennuoc: 'Ngụy',
        image: ImageTuong.vidu,
        Danhhieu: 'Kinh Hành Hợp Nhất',
        name: 'Vương Cơ',
        haotuong: '---',
        Hp :(
            <span>1.5 <FontAwesomeIcon icon={faHeart} /></span>
        ),
        chucnang: (
            <div>
                <p>
                    <span className="text-red-600">[Kỳ Chế]</span> Trong lượt của bạn, khi bạn sử dụng thẻ 
                    bài phi Trang bị, 
                    bạn có thể bỏ 1 thẻ của người chơi không phải mục tiêu của thẻ trên, 
                    lệnh họ rút 1 thẻ. Nếu thẻ bạn sử dụng mang hiệu quả cương hoá và thẻ bỏ cùng chất với nhau, 
                    bạn bỏ qua điều kiện kích hoạt hiệu quả cường hoá (Ứng Biến).
                </p>
                <p>
                    <span className="text-red-600">[Tiến Xu]</span> Giai đoạn kết thúc, bạn có thể rút 2 thẻ. 
                    Sau đó đem thẻ trên tay bỏ đi tối thiểu X thẻ. 
                    (X là số lần bạn phát động "Kỳ Chế" trong lượt này).
                </p>
            </div>
        ),
        caunoi: (
            <i> "Dụng kế kỳ lược, chế địch phục tâm!"</i>
        ),
    },
    {
        tennuoc: 'Quần',
        image: ImageTuong.vidu,
        Danhhieu: 'Xí Diễm Lưu Kim',
        name: 'Lữ Linh Kì',
        haotuong: '---',
        Hp :(
            <span>2 <FontAwesomeIcon icon={faHeart} /></span>
        ),
        chucnang: (
            <div>
                <p>
                    <span className="text-red-600">[Quắc Vũ]</span> Đầu giai đoạn hành động, bạn có thể lật mở tất 
                    cả bài trên tay, nếu số loại bài trên tay của bạn lớn hơn hoặc bằng:<br />
                    1, bạn thu 1 thẻ [Sát] từ chồng bài bỏ;<br />
                    2, bạn dùng bài không giới hạn khoảng cách;<br />
                    3, trong lượt này bạn dùng [Sát] hoặc Cẩm Nang phổ thông, có thể chọn thêm 2 mục tiêu. (giới hạn 1 lần).
                </p>
                <p>
                    <span className="text-red-600">[Trang Nhung]</span>
                     Một lần giai đoạn hành động, bạn có thể bỏ 1 thẻ cấm nang, 
                    sau đó nhận "Vô Song" (Lữ Bố) cho đến hết lượt.
                </p>
                <p>
                    <span className="text-red-600">[Thần Uy]</span>
                    Chủ Tướng Kỹ. (-0.5 <FontAwesomeIcon icon={faHeart} />) Giai đoạn rút bài, 
                    nếu bạn có sinh lực cao nhất, bạn rút thêm 2 thẻ; giới hạn trữ bài +2.
                </p>
            </div>
        ),
        caunoi: (
            <i> "Vãn thao võ lược, tá phụ xuất chính!"</i>
        ),
    },
    {
        tennuoc: 'Ngô',
        image: ImageTuong.vidu,
        Danhhieu: 'Quan Quân Tướng Quân',
        name: 'Đào Hoàng',
        haotuong: '---',
        Hp :(
            <span>2 <FontAwesomeIcon icon={faHeart} /></span>
        ),
        chucnang: (
            <div>
                <p>
                    <span className="text-red-600">[Lộ Dí]</span> 
                    Giai đoạn hành động giới hạn 1 lần, bạn có thể lật mở 1 thẻ Phi Cơ Bản trên tay, 
                    lệnh 2 người khác tiến hành đấu điểm, người thắng thu lấy thẻ được lật mở.
                </p>
                <p>
                    <span className="text-red-600">[Phá Phục]</span>
                    Bạn có thể đem thẻ [Né] xem như [Vô Giải Khả Kích] để sử dụng, nếu như thẻ Cẩm Nang phổ thông bị 
                    vô hiệu chỉ định bạn là mục tiêu duy nhất. Sau kết toán, bạn lựa chọn 1 mục: 
                    (1) Thu lấy thẻ cẩm nang đó; (2) Gây 1 điểm sát thương lên người sử dụng.
                </p>
            </div>
        ),
        caunoi: (
            <i> "Con đường phục hưng, tràn đầy ngang trái!"</i>
        ),
    },
    {
        tennuoc: 'Ngụy',
        image: ImageTuong.vidu,
        Danhhieu: 'Tào Ngụy Đích Mưu Chủ',
        name: 'Tuân Du',
        haotuong: (
            <span><FontAwesomeIcon icon={faUserGroup} /> Tuân Úc</span>
        ),
        Hp :(
            <span>1.5 <FontAwesomeIcon icon={faHeart} /></span>
        ),
        chucnang: (
            <div>
                <p>
                    <span className="text-red-600">[Kỳ Sách]</span> 
                    Một lần trong giai đoạn hành động, bạn có thể sử dụng tất cả thẻ bài trên tay xem như 1 thẻ Cẩm Nang 
                    phi thời gian (số mục tiêu được chọn không được vượt quá số thẻ bài trên tay bạn đã dùng theo cách 
                    này), sau đó bạn có thể thay đổi Phó Tướng.
                </p>
                <p>
                    <span className="text-red-600">[Trí Ngu]</span>
                    Sau khi bạn nhận sát thương, bạn có thể rút 1 thẻ và mở ra toàn bộ bài trên tay, nếu tất cả đều 
                    cùng 1 màu với nhau, bạn lệnh cho nguồn sát thương bỏ 1 thẻ bài trên tay.
                </p>
            </div>
        ),
        caunoi: (
            <i> " Kỳ Sách tại đây, ai dám cùng ta tranh phong ! "</i>
        ),
    },
    {
        tennuoc: 'Quần',
        image: ImageTuong.vidu,
        Danhhieu: 'Trì Sính Tây Thùy',
        name: 'Mã Đằng',
        haotuong: '---',
        Hp :(
            <span>1.5 <FontAwesomeIcon icon={faHeart} /></span>
        ),
        chucnang: (
            <div>
                <p>
                    <span className="text-red-600">[Mã Thuật]</span> 
                    Toả Định Kỹ. Bạn tính toán khoảng cách với người khác -1.
                </p>
                <p>
                    <span className="text-red-600">[Hùng Dị]</span>
                    Hạn Định Kỹ. Giai đoạn hành động, bạn có thể lệnh cho tất cả người chơi cùng thế lực lần lượt
                     rút 3 thẻ bài. Sau đó, nếu thế lực của bạn là một trong những thế lực ít người chơi nhất, 
                     bạn hồi phục 1 sinh lực.
                </p>
            </div>
        ),
        caunoi: (
            <i> "Ta tập hợp 1 đám quân cùng đánh, thiết kỵ này ai cản được ta!"</i>
        ),
    },
    {
        tennuoc: 'Ngô',
        image: ImageTuong.vidu,
        Danhhieu: 'Kình Thiên Chi Trụ',
        name: 'Lục Tốn',
        haotuong: (
            <span><FontAwesomeIcon icon={faUserGroup} /> Lục Kháng</span>
        ),
        Hp :(
            <span>1.5 <FontAwesomeIcon icon={faHeart} /></span>
        ),
        chucnang: (
            <div>
                <p>
                    <span className="text-red-600">[Khiêm Tốn]</span> 
                     Toả Định Kỹ. Khi bạn trở thành mục tiêu của thẻ bài [Thuận Thủ Khiên Dương] 
                     và [Lạc Bất Tư Thục], huỷ bỏ thẻ bài đó.
                </p>
                <p>
                    <span className="text-red-600">[Độ Thế]</span>
                    Bắt đầu giai đoạn hành động, bạn có thể xem như sử dụng 1 thẻ [Di Dật Đãi Lao].
                </p>
            </div>
        ),
        caunoi: (
            <i> "Quốc chi đại kế, thẩm thế cục vi tiên"</i>
        ),
    },
    {
        tennuoc: 'Dã tâm',
        image: ImageTuong.vidu,
        Danhhieu: 'Giáo Hoạt Đích Đầu Cơ Giả',
        name: 'Công Tôn Uyên',
        haotuong: '---',
        Hp :(
            <span>2 <FontAwesomeIcon icon={faHeart} /></span>
        ),
        chucnang: (
            <div>
                <p>
                    <span className="text-red-600">[Hoài Dị]</span> 
                     Giai đoạn hành động 1 lần, bạn có thể bỏ hết bài trong 1 khu vực thuộc vùng chơi của bạn hoặc 
                     tự di trừ Phó Tướng. lệnh cho tất cả người thuộc Đại Thế Lực lần lượt mỗi người giao cho bạn 
                     tối thiếu 1 thẻ. Sau đó bạn chọn thế lực giao thẻ bài cho bạn ít hơn, di trừ 1 Phó Tướng của 
                     1 người chơi thuộc thế lực đó.
                </p>
                <p>
                    <span className="text-red-600">[Thái Duy]</span>
                    Tỏa Định Kỹ. Phó Tướng bị bạn di trừ sẽ được đặt lên tướng này, gọi là "dị"; Giai đoạn rút bài, 
                    bạn rút thêm X thẻ. Giai đoạn kết thúc, nếu X lớn hơn giới hạn sinh lực của bạn, bạn trận vong. 
                    (X là số "Dị").
                </p>
            </div>
        ),
        caunoi: (
            <i> "Bắt đầu từ ngày hôm nay, ta chính là Yến Vương! " </i>
        ),
    },
    {
        tennuoc: 'Ngô',
        image: ImageTuong.vidu,
        Danhhieu: 'Đốc Liệt Chi Sĩ',
        name: 'Thái Sử Từ',
        haotuong: (
            <span><FontAwesomeIcon icon={faUserGroup} /> Tôn Sách</span>
        ),
        Hp :(
            <span>2 <FontAwesomeIcon icon={faHeart} /></span>
        ),
        chucnang: (
            <div>
                <p>
                    <span className="text-red-600">[Thiên Nghĩa]</span> 
                     Giai đoạn hành động 1 lần, Bạn có thể đấu điểm với 1 người khác. Nếu bạn thắng, lượt này bạn sử 
                     dụng thẻ [Sát] không giới hạn khoảng cách, giới hạn số lần sử dụng và số mục tiêu của thẻ [Sát] +1; 
                     Nếu bạn không thắng, bạn không thể sử dụng thẻ [Sát] cho đến khi kết thúc lượt.
                </p>
                <p>
                    <span className="text-red-600">[Hàm Chiến]</span>
                    Sau khi bạn đấu điểm, người không thắng có thể thu lấy 1 thẻ trong vùng trang bị của người còn lại.
                </p>
            </div>
        ),
        caunoi: (
            <i> "Tin nghĩa vì tiên, báo ân vi tắc" </i>
        ),
    },
    {
        tennuoc: 'Quần',
        image: ImageTuong.vidu,
        Danhhieu: 'Lãnh Khốc Đích Độc Sĩ',
        name: 'Giả Hủ',
        haotuong: (
            <span><FontAwesomeIcon icon={faUserGroup} /> Lý Giác & Quách Tỷ, Trương Tú</span>
        ),
        Hp :(
            <span>1.5 <FontAwesomeIcon icon={faHeart} /></span>
        ),
        chucnang: (
            <div>
                <p>
                    <span className="text-red-600">[Loạn Vũ]</span> 
                     Hạn Định Kỹ. Giai đoạn hành động, bạn lệnh cho tất cả người khác sử dụng thẻ [Sát] đối với 
                     mục tiêu là người chơi được tỉnh toán khoảng cách nhỏ nhất, nếu không họ phải tự mất 1 sinh lực.
                </p>
                <p>
                    <span className="text-red-600">[Hoàn Sát]</span>
                    Toá Định Kỹ. Trong lượt của bạn, khi có người chơi rơi vào trạng thái hấp hối, 
                    trừ bạn và người đó mới có thể dùng [Đào].
                </p>
                <p>
                    <span className="text-red-600">[Hàm Chiến]</span>
                    Toá Định Kỹ. Khi bạn trở thành mục tiêu của Cẩm Nang sắc Đen, huỷ bỏ nó.
                </p>
            </div>
        ),
        caunoi: (
            <i> "Với tất cả kế pháp của tại hạ, há sợ thiên hạ không loạn!" </i>
        ),
    },
    {
        tennuoc: 'Ngụy',
        image: ImageTuong.vidu,
        Danhhieu: 'Đại Tướng Quân',
        name: 'Tào Nhân',
        haotuong: (
            <span><FontAwesomeIcon icon={faUserGroup} /> Tào Hồng</span>
        ),
        Hp :(
            <span>2 <FontAwesomeIcon icon={faHeart} /></span>
        ),
        chucnang: (
            <div>
                <p>
                    <span className="text-red-600">[Cụ Thủ]</span> 
                     Giai đoạn kết thúc, bạn có thể rút X thẻ bài (X là số thế lực trên bàn chơi), sau đó 
                     bỏ đi 1 thẻ bài trên tay. nếu theo cách này thẻ bỏ đi là thẻ Trang Bị, đổi lại thành 
                     bạn sử dụng thẻ đó. Nếu X lớn hơn 2, bạn đặt chồng thẻ võ tướng.
                </p>
            </div>
        ),
        caunoi: (
            <i> "Kiên thủ chớ xuất, nghiêm trận đi đãi!" </i>
        ),
    },
    {
        tennuoc: 'Thục',
        image: ImageTuong.vidu,
        Danhhieu: 'Thục Hán Đích Phụ Dục',
        name: 'Pháp Chính',
        haotuong: (
            <span><FontAwesomeIcon icon={faUserGroup} /> Lưu Bị</span>
        ),
        Hp :(
            <span>1.5 <FontAwesomeIcon icon={faHeart} /></span>
        ),
        chucnang: (
            <div>
                <p>
                    <span className="text-red-600">[Huyễn Hoặc]</span> 
                     Một lần trong giai đoạn hành động của người khác cùng thế lực, họ có thể giao cho bạn 1 thẻ 
                     trên tay, sau đó họ bỏ đi 1 thẻ và chọn sở hữu 1 trong các kỹ năng chưa có trên bàn chơi cho 
                     đến hết lượt sau: "Võ Thánh", "Bào Hao", "Long Đàm", "Thiết Kỵ", "Liệt Cung", "Cuồng Cốt".
                </p>
                <p>
                    <span className="text-red-600">[Ân Oán]</span> 
                     Toả Định Kỹ. Khi người khác dùng [Đào] lên bạn, bạn lệnh họ rút 1 thẻ bài. Sau khi 
                     bạn nhận sát thương, bạn lệnh nguồn sát thương giao 1 thẻ bài trên tay cho bạn hoặc 
                     tự mất 1 sinh lực.
                </p>
            </div>
        ),
        caunoi: (
            <i> "Thụ quân chi ân, chính định tư bảo!" </i>
        ),
    },
    {
        tennuoc: 'Dã tâm',
        image: ImageTuong.vidu,
        Danhhieu: 'Trào Phong Khai Thiên',
        name: 'Tư Mã Chiêu',
        haotuong: (
            <span><FontAwesomeIcon icon={faUserGroup} /> Tư Mã Ý</span>
        ),
        Hp :(
            <span>1.5 <FontAwesomeIcon icon={faHeart} /></span>
        ),
        chucnang: (
            <div>
                <p>
                    <span className="text-red-600">[Túc Trí]</span> 
                     Tỏa Định Kỹ. Trong lượt của bạn, bạn nhận hiệu quả: <br></br>
                    1. Bạn dùng [Sát]/[Quyết Đấu] gây sát thương +1; <br></br>
                    2. Khi bạn dùng Cẩm Nang không chuyến hoá, không hạn chế khoảng cách và bạn rút 1 thẻ; <br></br>
                    3. Sau khi bài của người khác vào chồng bài bỏ do bỏ bài, bạn thu của họ 1 thẻ.
                    Nếu hiệu quả trên phát động đủ 3 lần, kỹ năng này vô hiệu đến hết lượt: 
                    Nếu chưa đủ, khi kết thúc lượt, cho đến khi bắt đầu lượt sau bạn nhận được "Phản Quỹ" (Tư Mã Ý).
                </p>
                <p>
                    <span className="text-red-600">[Chiêu Tâm]</span> 
                     Sau khi bạn nhận sát thương, bạn có thể mở hết bài trên tay, và hoán đối với 
                     1 người khác có số bài trên tay bạn.
                </p>
            </div>
        ),
        caunoi: (
            <i> "Vương quyền khuynh triều dã, hồng vọng định giang sơn!" </i>
        ),
    },
    {
        tennuoc: 'Ngô',
        image: ImageTuong.vidu,
        Danhhieu: 'Dương Võ Tướng Quân',
        name: 'Ngô Cảnh',
        haotuong: (
            <span>---</span>
        ),
        Hp :(
            <span>2 <FontAwesomeIcon icon={faHeart} /></span>
        ),
        chucnang: (
            <div>
                <p>
                    <span className="text-red-600">[Điều Quy]</span> 
                     Giai đoạn hành động 1 lần, bạn có thể dùng 1 thẻ bài Trang Bị như [Điệu Hồ Ly Sơn], 
                     nếu vì vậy mà thế lực của bạn có quan hệ đội hình, bạn rút X thẻ bài 
                     (X là số người thế lực bạn trong quan hệ đội hình).
                </p>
                <p>
                    <span className="text-red-600">[Phong Dương]</span> 
                     Trận Pháp Kỹ. Người chơi không cùng thế lực với bạn không thể huỷ bỏ hoặc thu được bài 
                     trong vùng trang bị của người chơi có quan hệ đội hình với bạn.
                </p>
            </div>
        ),
        caunoi: (
            <i> "Nghe Bá Phù lập nghiệp, nay đến để tương trợ!" </i>
        ),
    },
    {
        tennuoc: 'Ngụy',
        image: ImageTuong.vidu,
        Danhhieu: 'Thiên Tư Đích Minh Quân',
        name: 'Tào Duệ',
        haotuong: (
            <span>---</span>
        ),
        Hp :(
            <span>1.5 <FontAwesomeIcon icon={faHeart} /></span>
        ),
        chucnang: (
            <div>
                <p>
                    <span className="text-red-600">[Hưng Quan]</span> 
                     Giai đoạn hành động 1 lần, bạn có thể lệnh cho tất cả người chơi thuộc cùng 1 thế lực 
                     tiến hành lựa chọn có tiến vào trạng thái liên hoàn (xoay ngang phó tướng) hay không, 
                     người chơi lựa chọn chấp hành sau kết toán cùng bạn rút 1 thẻ.
                </p>
                <p>
                    <span className="text-red-600">[Khôi Thác]</span> 
                     Kết thúc lượt của 1 người chơi, nếu trong lượt này người cùng thế lực với bạn nhận tổng số 
                     sát thương ít nhất là 2, bạn có thể lệnh 1 người tiến hành phán xét. Nếu là: sắc đen, 
                     họ rút X thẻ (X là số sinh lực họ đang mất); sắc đỏ, họ hồi 1 sinh lực.
                </p>
            </div>
        ),
        caunoi: (
            <i> "Thiên hạ nhất thống chi công, trẫm sẽ ban thưởng chư vị tướng quân!" </i>
        ),
    },
    {
        tennuoc: 'Quần',
        image: ImageTuong.vidu,
        Danhhieu: 'Quý Ảnh Thần Đạo',
        name: 'Tả Từ',
        haotuong: (
            <span><FontAwesomeIcon icon={faUserGroup} /> Vu Cát</span>
        ),
        Hp :(
            <span>1.5 <FontAwesomeIcon icon={faHeart} /></span>
        ),
        chucnang: (
            <div>
                <p>
                    <span className="text-red-600">[Dịch Quỷ]</span> 
                      Lần đầu khi bạn lật mở tưởng này, bạn có thể đem 2 thẻ tướng từ chồng tướng đặt úp lên võ tướng này, 
                      gọi là [Hồn]: Mỗi lượt mỗi loại giới hạn 1 lần, Bạn có thể di trừ 1 thẻ [Hồn], 
                      xem như sử dụng 1 thẻ Cơ Bản hoặc Cẩm Nang phổ thông (trừ thẻ [Né] và [Vô Giải Khả Kích]), 
                      mục tiêu không thể bao gồm các người chơi thuộc thế lực khác với thể lực [Hồn], trừ Dã Tâm Gia.
                </p>
                <p>
                    <span className="text-red-600">[Cấp Hồn]</span> 
                     Sau khi bạn nhận sát thương, hoặc sau khi người không cùng thế lực với bạn thoát khỏi 
                     trạng thái hấp hồi, bạn có thể đem 1 thẻ tướng từ chồng tướng đặt úp lên võ tướng, nhập 
                     vào [Hồn]. Giai đoạn chuẩn bị, bạn có thể di trừ tối đa 2 thẻ [Hồn] và rút số [Hồn] tương đương.
                </p>
            </div>
        ),
        caunoi: (
            <i> "Thần quang bất diệt, tiên lực bất tuyệt!" </i>
        ),
    },
    {
        tennuoc: 'Quần',
        image: ImageTuong.vidu,
        Danhhieu: 'Trọng Gia Đích Chủ Tướng',
        name: 'Kỷ Linh',
        haotuong: (
            <span><FontAwesomeIcon icon={faUserGroup} /> Viên Thuật</span>
        ),
        Hp :(
            <span>2 <FontAwesomeIcon icon={faHeart} /></span>
        ),
        chucnang: (
            <div>
                <p>
                    <span className="text-red-600">[Song Nhận]</span> 
                      Bắt đầu giai đoạn hành động, bạn có thể đấu điểm với 1 người chơi khác. 
                      Nếu bạn thắng, xem như bạn đã sử dụng 1 thẻ [Sát] lên họ hoặc 1 người 
                      chơi khác cùng thể lực với họ (thẻ [Sát] này không tính vào giới hạn sử dụng [Sát] trong lượt); 
                      Nếu không thắng, lượt này bạn không thể sử dụng bài lên người khác.
                </p>
            </div>
        ),
        caunoi: (
            <i> "Trọng quốc đại tướng Kỷ Linh tại đây, nếm thử tam tiên lưỡng nhận đao!" </i>
        ),
    },
    {
        tennuoc: 'Ngô',
        image: ImageTuong.vidu,
        Danhhieu: 'Tín Trọng Tô Võ',
        name: 'Phùng Hy',
        haotuong: (
            <span>---</span>
        ),
        Hp :(
            <span>1.5 <FontAwesomeIcon icon={faHeart} /></span>
        ),
        chucnang: (
            <div>
                <p>
                    <span className="text-red-600">[Ngọc Toái]</span> 
                      Mỗi lượt giới hạn 1 lần, sau khi bạn trở thành mục tiêu của thẻ bài sắc Đen do người khác sử dụng; 
                      Nếu họ không cùng thế lực với bạn, bạn có thể tự giảm 1 sinh lực, sau đó bạn lựa chọn 1 mục:<br></br>
                        1. Họ bỏ đi X thẻ trên tay (X là giới hạn sinh lực của họ).<br></br>
                        2. Họ tự giảm sinh lực cho đến bằng sinh lực bạn.
                </p>
                <p>
                    <span className="text-red-600">[Bác Ngôn]</span> 
                      Một lần trong giai đoạn hành động, bạn có thể chọn 1 người chơi khác, 
                      lệnh họ bổ sung bài trên tay bằng giới hạn sinh lực của họ. Sau đó, họ 
                      không thể sử dụng hoặc đánh ra bài trên tay cho đến khi kết thúc lượt này.<br></br>
                    "Tung Hoành": Họ nhận kỹ năng này cho đến khi kết thúc lượt sau của họ, 
                    đồng thời kỹ năng này xoá bỏ mô tả "họ bố sung bài trên tay bằng giới hạn sinh lực của họ".
                </p>
            </div>
        ),
        caunoi: (
            <i> "Trắng đen điên đảo, mất chính là mạng người!" </i>
        ),
    },
    {
        tennuoc: 'Ngụy',
        image: ImageTuong.vidu,
        Danhhieu: 'Đặc Tài Phóng Khoáng',
        name: 'Dương Tu',
        haotuong: (
            <span>---</span>
        ),
        Hp :(
            <span>1.5 <FontAwesomeIcon icon={faHeart} /></span>
        ),
        chucnang: (
            <div>
                <p>
                    <span className="text-red-600">[Đạm Lạc]</span> 
                      Sau khi bạn trở thành mục tiêu của thẻ Cẩm Nang, nếu bạn không phải là mục tiêu duy 
                      nhất của thẻ bài này, bạn có thể rút 1 thẻ bài, sau đó lệnh thẻ bài này vô hiệu với bạn.
                </p>
                <p>
                    <span className="text-red-600">[Kê Lặc]</span> 
                      Sau khi bạn nhận sát thương, bạn có thể gọi tên 1 loại bài. 
                      Nguồn gây sát thương không thể dùng, đánh ra và bỏ bài thuộc loại bài mà bạn đã gọi.
                </p>
            </div>
        ),
        caunoi: (
            <i> "Gân gà, muốn ăn thì không có thịt, bỏ thì lại tiếc, Haha!" </i>
        ),
    },
    {
        tennuoc: 'Thục',
        image: ImageTuong.vidu,
        Danhhieu: 'Giáo Thu Huyên Phiên',
        name: 'Hướng Lãng',
        haotuong: (
            <span>---</span>
        ),
        Hp :(
            <span>1.5 <FontAwesomeIcon icon={faHeart} /></span>
        ),
        chucnang: (
            <div>
                <p>
                    <span className="text-red-600">[Khám Tập]</span> 
                      Giai đoạn hành động giới hạn 1 lần, bạn có thể lật mở hết bài trên tay bạn, 
                      nếu mỗi thẻ bài có chất khác nhau, bạn rút 2 thẻ, sau đó nếu bởi vậy 
                      các thẻ trên tay bạn đủ 4 chất, bạn bỏ qua giai đoạn bỏ bài lượt này.
                </p>
                <p>
                    <span className="text-red-600">[Khiêm Chính]</span> 
                      Mỗi lượt 1 người giới hạn 1 lần, khi bạn trở thành mục tiêu của thẻ cẩm nang 
                      phổ thông hoặc [Sát] do người khác sử dụng, bạn có thể "Trọng Chú" 2 thẻ; Nếu 
                      những thẻ "Trọng Chú" này khác loại với thẻ họ sử dụng, sau khi thẻ đó kết 
                      toán xong và đi vào chồng bài bỏ, bạn có thể thu lấy thẻ đó.
                </p>
            </div>
        ),
        caunoi: (
            <i> "Thế gian học vần, giai tải điển biên chí thượng!" </i>
        ),
    },
];

export default cardTuong