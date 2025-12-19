const DATA = {
  "Chuẩn bị - Bắt đầu": {
    title: "Chuẩn bị - Bắt đầu",
    desc: (
        <div>
            <h1 className="font-bold text-black"> Chọn võ tướng</h1>
            <p>- Chia 7 thẻ võ tướng cho mỗi người chơi (nếu có trên 8 người chơi thì chia 5 thẻ).</p>
            <p>- Mỗi người chơi chọn 2 thẻ tướng cùng thế lực với nhau làm võ tướng của mình rồi đặt úp xuống
                gọi là "úp mặt võ tướng" </p>
            <p>- Đặt võ tướng gần thanh máu hơn gọi là Chủ Tướng, tướng còn lại là Phó Tướng </p>
            <h1 className="font-bold text-black"> Chia thẻ máu và sắp xếp thẻ máu</h1>
            <p>- Chia cho mỗi người chơi 1 thẻ máu, người chơi đặt thẻ máu bên cạnh võ tướng, lựa mặt ứng với giới
                hạn sinh lực của mình ngửa lên trên. Giới hạn sinh lực của người chơi bằng tổng số lượng âm dương trên
                2 võ tướng (làm tròn xuống). Hai nửa biểu tượng âm dương có thể ghép lại thành 1 đơn vị sinh lực.
            </p>
            <p>
            - Khi bị mất máu, dùng Chủ tướng che đi phần sinh lực bị mất.
            </p>
            <h1 className="font-bold text-black"> Chia bài đánh khởi đầu</h1>
            <p>- Xào lại toàn bộ bài đánh, sau đó chia cho mỗi người chơi 4 thẻ bài ngẫu nhiên làm bài đánh khởi đầu.
            </p>
            <p>- Khi bốc trúng lá độc người chơi được đổi lại lá đó.</p>
            <p>- Người chơi chỉ được đổi toàn bộ bài 1 lần</p>
        </div>
    ),
  },
  "Tiến hành trò chơi": {
    title: "Tiến hành trò chơi",
    desc: (
        <div>
            <p>- Sau khi xác định được người chơi đầu tiên, sau đó lần lượt tường người chơi sẽ chơi lượt của mình
                theo chiều ngược chiều kim đồng hồ.
            </p>
            <p>- Mỗi người chơi có lượt chơi riêng của họ, khi 1 người chơi kết thúc lượt, thì người chơi bên phải
                mới tiến hành lượt chơi của họ. Mỗi lượt có 6 giai đoạn:
            </p>
            <p className="font-bold text-black">Giai đoạn chuẩn bị &gt; Giai đoạn phán xét &gt; Giai đoạn rút bài &gt; Giai đoạn hành động
                &gt; Giai đoạn bỏ bài &gt; Giai đoạn kết thúc
            </p>
            <h1 className="font-bold text-black"> 1. Giai đoạn chuẩn bị</h1>
            <p>- Một số kĩ năng có thể kích hoạt ở giai đoạn này. Bạn cũng có thể lật mở bất kì 1 trong 2 thẻ Tướng
                hoặc đồng thời cả 2 trong giai đoạn này.
            </p>
            <h1 className="font-bold text-black"> 2. Giai đoạn phán xét</h1>
            <p>- Nếu trong vùng phán xét của bạn có thẻ Cẩm Nang thời gian nằm ngang, bạn phải tiến hành phán xét 
                theo thứ tự để chấp nhận hiệu quả của nó.
            </p>
            <p>- Nếu có nhiều thẻ phán xét trong vùng phán xét của bạn, thẻ nào được đặt sau sẽ tiến hành phán xét thẻ
                đó trước.
            </p>
            <p>- Bạn lật mở thẻ trên cùng của chồng bài rút, gọi là thẻ phán xét.</p>
            <p>- Nếu không có sự thay đổi được kết toán theo vòng, thì nó sẽ là kết quả phán xét và bạn chấp hành
                dựa trên thẻ Cẩm Nang, sau đó đưa vào chồng bài bỏ.
            </p>
            <h1 className="font-bold text-black"> 3. Giai đoạn rút bài</h1>
            <p>- Bạn rút 2 thẻ bài từ đầu chồng bài rút.</p>
            <h1 className="font-bold text-black"> 4. Giai đoạn hành động</h1>
            <p>- Bạn có thể sử dụng bài tùy ý, tuy nhiên phải tuân thủ theo 2 quy tắc sau:</p>
            <p>1. Mỗi giai đoạn hành động chỉ sử dụng 1 thẻ [Sát]</p>
            <p>2. Không thể đặt 2 thẻ Cẩm Nang thời gian cùng tên trong vùng phán xét của 1 người chơi</p>
            <h1 className="font-bold text-black"> 5. Giai đoạn bỏ bài</h1>
            <p>- Trong giai đoạn này, nếu bạn không có bài hoặc không muốn sử dụng bài, bạn có thể tiến vào
                giai đoạn bỏ bài. Kiểm tra xem số bài trên tay có vượt qua số sinh lực hiện tại không (giới hạn trữ
                bài trên tay bằng với số sinh lực hiện tại). Rồi bỏ đi số bài chênh lệch.
            </p>
            <h1 className="font-bold text-black"> 6. Giai đoạn kết thúc</h1>
            <p>- Một số kĩ năng có thể kích hoạt vào giai đoạn này.</p>
        </div>
    ),
  },
  "Quy tắc lật mở tướng": {
    title: "Quy tắc lật mở tướng",
    desc: (
        <div>
            <p>- Người chơi chưa lật mở tướng nào sẽ không có kĩ năng, thế lực hay giới tính.</p>
            <p>- Khi võ tướng đang úp mặt đạt đúng thời điểm kích hoạt kĩ năng, họ có thể lật mở võ tướng đó
                rồi thực hiện kĩ năng.
            </p>
            <p>- Thời điểm mà 1 võ tướng có thể lật mở như sau: </p>
            <p>1. Giai đoạn chuẩn bị;</p>
            <p>2. Đúng thời điểm kích hoạt kĩ năng tướng đó;</p>
            <p>3. Giai đoạn hành động đối với võ tướng có kĩ năng "
                <span className="text-red-500 font-bold">Tỏa Định Kỹ</span>";
            </p>
            <p>- Người chơi đầu tiên lật mở võ tướng sẽ nhận được tiêu ký "Tiên Phong"</p>
            <p>- Người chơi chưa lật mở võ tướng nào sẽ không có giới tính, tất cả kĩ năng và hiệu quả của trang
                bị có liên quan đến giới tính sẽ không được kích hoạt
            </p>
            <p>- Khi người chơi chỉ mở mặt 1 võ tướng, giới tính của người chơi dựa theo giới tính của võ tướng này; Khi
                người chơi lật mở cả 2 võ tướng, giới tính người chơi đó tính theo giới tính của Chủ Tướng.
            </p>
            <p>- Người chơi chưa mở mặt võ tướng nào sẽ không có thế lực, sau khi lật mở 1 võ tướng sẽ xác định thể lực
                hoặc trở thành Dã Tâm.
            </p>
        </div>
    ),
  },
  "Người chơi trận vong": {
    title: "Người chơi trận vong",
    desc: (
        <div>
            <p>- Khi sinh lực của 1 người chơi hạ xuống 0, người này tiến vào trạng thái hấp hối. Trừ khi người chơi 
                này tự sử dụng [Tửu], hoặc có người sử dụng [Đào] để cứu người chơi này, nếu không người đó trận vong.
                Họ phải lật mở toàn bộ võ tướng, bỏ đi toàn bộ bài trong vùng chơi, sau đó tiến hành thưởng phạt.
            </p>
            <h1 className="font-bold text-black" >Quy tắc thưởng phạt</h1>
            <p>+ Nếu người tử vong cùng thế lực với người giết, người giết phải bỏ đi toàn bộ bài của bản thân.</p>
            <p>+ Nếu người trận vong không cùng thế lực với người giết, người giết được rút từ chồng bài rút số
                thẻ bài tương đương số người cùng thế lực với người chơi trận vong (bao gồm cả người trận vong).
            </p>
            <p>+ Riêng với tướng Dã Tâm khi giết 1 người chơi bất kì đều rút 3 lá bài.</p>
        </div>
    ),
  },
  'Chế độ "Ác chiến"': {
    title: 'Chế độ "Ác chiến"',
    desc: (
        <div>
            <p>- Khi trò chơi còn lại 4 người hoặc ít hơn (Nếu ban đầu có 7 người trở xuống thì đổi lại thành 3 người
                hoặc ít hơn ), nếu trên bàn chơi không có thế lực nào vượt hơn 1 người chơi, thì bắt đầu lượt tiếp
                theo, trò chơi tiến vào chế độ "Ác chiến"</p>
            <p>- Trong chế độ "Ác chiến", [Đào] chỉ có thể được sử dụng hoặc đánh ra như thẻ [Sát] hoặc [Né], không
                thể sử dụng để hồi phục sinh lực.
            </p>
            <p>- Một khi tiến vào chế độ "Ác Chiến", kể cả sau đó xuất hiện 2 hoặc nhiều người cùng thế lực với nhau, chế
                độ "Ác Chiến" vẫn không thể hủy bỏ.
            </p>
        </div>
    ),
  },
  "Khái niệm cơ bản": {
    title: "Khái niệm cơ bản",
    desc: (
        <div>
            <p> Các khái niệm sau đây sẽ được đề cập thường xuyên trong trò chơi. Nếu như cảm thấy khó hiểu, bạn có
                thể tạm thời bỏ qua phần này và đọc lại khi cần.
            </p>
            <h1 className="font-bold text-black">Khoảng cách (hoặc gọi là cự ly)</h1>
            <p>- Khi tính khoảng cách từ 1 người chơi đến người chơi khác, giá trị tối thiểu là 1. Khoảng cách
                đối với bản thân luôn là 0.
            </p>
            <h1 className="font-bold text-black">Phạm vi công kích</h1>
            <p>- Khi trận đấu bắt đầu, mỗi người chơi đều có phạm vi công kích là 1, tức là bạn chỉ có thể sử dụng [Sát]
                lên 1 người chơi ở khoảng cách 1 với bạn. Sau khi bạn trang bị vũ khí, phạm vi công kích của người chơi
                bằng phạm vi công kích của vũ khí.
            </p>
            <h1 className="font-bold text-black">Phán xét</h1>
            <p>- Khi bạn tiến hành phán xét, thẻ phán xét được gọi là "Thẻ bài do bạn tiến hành phán xét" gọi tắt là "
                thẻ phán xét của bạn". Bạn không sở hữu đồng thời cũng không mất đi nó.
            </p>
            <h1 className="font-bold text-black">Vùng chơi</h1>
            <p>- Vùng chơi của một người choi bao gồm: bài trên tay, vùng trang bị và vùng phán xét.
            </p>
            <p>- Bài trong vùng phán xét và vùng trang bị đều thuộc là "trên bàn". Người chơi sở hữu bài trên tay
                và bài trong vùng trang bị, còn bài trong vùng phán xét không thuộc về người chơi nào.
            </p>
            <h1 className="font-bold text-black">Tỏa định kĩ, Hạn định kĩ, Luân thứ kĩ</h1>
            <p>- Tỏa định kĩ : kĩ năng mà khi thỏa mãn điều kiện bắt buộc phải kích hoạt hoặc hiệu quả kéo dài vĩnh viễn.
                Khi người chơi chưa lật mở tướng nào xem như không có kĩ năng, dù là Tỏa định kĩ thì nó cũng sẽ không kích hoạt.
            </p>
            <p>- Hạn định kĩ : Kĩ năng chỉ có thể kích hoạt 1 lần trong cùng 1 trận đấu.</p>
            <p>- Luân thứ kĩ: Kĩ năng chỉ có thể kích hoạt 1 lần mỗi vòng</p>
            <h1 className="font-bold text-black">Sử dụng, đánh ra, bỏ bài</h1>
            <p>- Sử dụng: Khi bạn sử dụng 1 thẻ bài trên tay, bạn cần phải thông báo và công khai thẻ bài mình sử dụng, sau đó chỉ
                định 1 hoặc nhiều mục tiêu cho nó, tiếp tục chờ hiệu quả được kết toán xong, sau cùng mới đưa vào chồng bài bỏ.
            </p>
            <p>- Đánh ra: Khi bạn đánh ra 1 thẻ bài, bạn chỉ cần thông báo và công khai thẻ bài mình đánh ra, sau đó đưa vào 
                chồng bài bỏ.
            </p>
            <p>- Bỏ bài: Đưa bài vào chồng bài bỏ, bạn không cần thông báo thẻ bài bạn bỏ đi. Trừ khi phải bỏ đi lượng bài chênh
                lệch trong giai đoạn bỏ bài, bạn không thể chủ động tự ý bỏ bài vào bất kì thời điểm nào, trừ 1 số trường hợp 
                đặc biệt.
            </p>
            <h1 className="font-bold text-black">Trình tự kết toán về gây sát thương</h1>
            <p>Khi gây sát thương &gt; Khi nhận sát thương &gt; Giảm trừ sinh lực &gt; Tiến hành kết toán trạng thái hấp hối
                &gt; Sau khi gây sát thương &gt; Sau khi
                nhận sát thương
            </p>
            <h1 className="font-bold text-black">Nguyên tắc tối cao</h1>
            <p>- Khi quy tắc của trò chơi và mô tả của thẻ bài xảy ra mâu thuẫn, thì tuân theo mô tả của thẻ bài. Ngoài ra,
                trình tự ưu tiên trong giải quyết như sau:
            </p>
            <p>
                Kĩ năng võ tướng &gt; Hiệu quả bài đánh &gt; Quy tắc cơ bản của trò chơi
            </p>
        </div>
    ),
  },
  "Phụ lục": {
    title: "Phụ lục",
    desc: (
        <div>
           <h1 className="font-bold text-black">Chuyển hóa thẻ bài</h1>
           <p>- Thay đổi thuộc tính ban đầu của thẻ bài và chuyển hóa thành thuộc tính của thẻ bài đích.</p>
           <p>- Sau khi kết toán xong, bài chuyển hóa sẽ được chuyển hóa về thuộc tính ban đầu.</p>
           <p>- Nếu dùng 2 lá trở lên để chuyển hóa nếu chúng cùng màu thì bài đích sẽ là màu đó còn khác màu thì bài 
            đích không có màu.
           </p>
           <p>- Bài đã bị chuyển hóa không thể chuyển hóa thêm 1 lần nữa.</p>
           <h1 className="font-bold text-black">Xem như...</h1>
           <p>- Khi thỏa mãn 1 số điều kiện nhất định, xem như xảy ra một sự kiện nào đó, hoặc như 1 thuộc tính nào đó của 
            thẻ bài chuyển thành 1 thuộc tính khác, khi không còn thỏa mãn điều kiện thì khôi phục thuộc tính về trạng thái
            ban đầu của thẻ bài
           </p>
           <h1 className="font-bold text-black">Đấu điểm</h1>
           <p>- Hai người chơi tham gia đấu điểm phải có bài trên tay.</p>
           <p>- Mỗi người chơi đem thẻ bài trên tay đặt úp xuống bàn chơi rồi đồng thời ngửa ra.</p>
           <p>- Nếu điểm bằng nhau, cả 2 người chơi đều không thắng.</p>
           <p>- Sau đó đưa cả 2 thẻ đấu điểm vào chồng bài bỏ</p>
           <h1 className="font-bold text-black">Trận pháp kĩ</h1>
           <p>- Trận pháp kĩ: Kĩ năng loại này chỉ phát huy tác dụng khi còn ít nhất 4 người còn sống trên bàn. 
            Giai đoạn hành động, người chơi đã lật mở tướng sở hữu Trận Pháp Kĩ có thể tiến hành "Triệu hoán trận pháp" </p>
           <h1 className="font-bold text-black">Triệu hoán trận pháp</h1>
           <p>- Một lần giai đoạn hành động, bắt đầu từ người có Trận Pháp Kĩ hỏi theo ngược chiều kim đồng hồ 
            , nếu người chơi chưa xác định thế lực thỏa mãn điều kiện của Trận Pháp Kĩ, người đó có thể mở mặt 1 võ tướng (
                hưởng ứng triệu hoán trận pháp ), sau đó trận pháp phát huy hiệu quả của nó.
           </p>
           <h1 className="font-bold text-black">Quan hệ bao vây/ vay công</h1>
           <p>- Một người ngồi giữa 2 người cùng thế lực</p>
           <h1 className="font-bold text-black">Quan hệ đội hình</h1>
           <p>- Những người cùng thế lực ngồi liền kề nhau (ít nhất 2 người)</p>
           <h1 className="font-bold text-black">Đại thế lực, tiểu thế lực</h1>
           <p>- Đại thế lực: Nếu một thế lực có ít nhất 2 người còn sống và là thế lực có nhiều người chơi còn sống nhất
            , thì thế lực đó được gọi là Đại thế lực </p>
            <p>- Tiểu thế lực: Khi trên bàn có sự xuất hiện của Đại thế lực, tất cả các thế lực còn lại được gọi là
                Tiểu thế lực. Người chơi chưa xác định thế lực cũng thuộc Tiểu thế lực.</p>
            <h1 className="font-bold text-black">"Liên"</h1>
            <p>- 1 lần trong giai đoạn hành động, bạn có thể đem tối đa 3 thẻ bài có kí hiệu "Liên" giao cho 1 người
                chơi khác.
            </p>
            <p>- Nếu giao cho người không cùng thế lực bạn bốc lại lượng bài tương đương từ chồng bài rút</p>
            <p>- Người chơi chưa xác định thế lực không thể xem là cùng hoặc không cùng thế lực với người chơi 
                khác. Cho nên họ không thể giao
            </p>
            <p>- Khi giao cho người chơi chưa xác định thế lực thì không được rút bài.</p>
            <h1 className="font-bold text-black">"Tặng"</h1>
            <p>- Nếu bài cơ bản có chữ "Tặng", bạn có thể đưa lên tay ngươi chơi khác lá đó</p>
            <p>- Nếu bài trang bị có chữ "Tặng", bạn có thể lắp vào vùng trang bị của người khác, với điều kiện
                họ không có vũ khí/ phòng cụ đã lắp từ trước
            </p>
        </div>
    ),
  },
};

export default DATA;