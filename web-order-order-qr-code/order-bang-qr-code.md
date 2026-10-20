# Order bằng QR code

**TÍNH NĂNG ORDER BẰNG MÃ QR**\
_(Dành cho cửa hàng để khách tự chủ động order thông qua menu điện tử bằng cách quét mã QR tại mỗi bàn)_

<figure><img src="../.gitbook/assets/0 (7)" alt=""><figcaption></figcaption></figure>

**i. Hướng dẫn Video**

{% embed url="https://youtu.be/BWOo09zQ6Xs" %}

**ii. Hướng dẫn hình ảnh**

**\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_**

\
**A. Các thiết lập ban đầu**

**1. Thiết lập, khởi tạo phòng bàn**\
**2. Khởi tạo và in mã QR bàn và dán lên các bàn tương ứng**\
**3. Lựa chọn mô hình cho cửa hàng (khách order xong có thể thanh toán trước hoặc sau)**\
**4. Thêm các phương thức thanh toán khác (Momo, Payon,...)**\
**5. Thiết lập in bếp cho các đơn hàng được đặt qua QR code**

**B. Hướng dẫn thao tác order bằng QR code**

**\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_**

**A. Các thiết lập ban đầu**

**1. Thiết lập, khởi tạo phòng bàn**

Khách hàng cần tạo các khu vực phòng bàn trên tài khoản tương ứng với số bàn và khu vực thực tế trước bằng thao tác [tại đây](../thiet-lap-phong-ban/thiet-lap-phong-ban.md)

![](<../.gitbook/assets/1 (9)>)

**2. Khởi tạo và in mã QR bàn và dán lên các bàn tương ứng**\
Tại trang [Admin.posapp.vn](https://admin.posapp.vn/) > Thiết lập > Thiết lập phòng bàn

![](<../.gitbook/assets/2 (16)>)

**Tại đây để in QR của 1 bàn bất kỳ** > chọn vào biểu tượng QR trên bàn đó

![](<../.gitbook/assets/3 (36)>)

Sau khi hiện QR bàn cần in > tải về > in

![](<../.gitbook/assets/4 (10)>)

Để in QR của tất cả các bàn > Chọn in QR bàn

![](<../.gitbook/assets/5 (16)>)

Trình duyệt sẽ hiển thị 1 file có tất cả QR các bàn > ấn in để in tất cả

![](<../.gitbook/assets/6 (7)>)

**Chủ cửa hàng dán các QR mới in lên các bàn tương ứng**

**3. Lựa chọn mô hình cho cửa hàng (khách order xong có thể thanh toán trước hoặc sau)**

PosApp đang cung cấp 2 luồng xử lý

\- Khách hàng order xong > Gửi order tới thu ngân > Thanh toán sau tại quầy\
\- Khách hàng order xong > Thanh toán Online > Xác nhận thanh toán

Truy cập trang quản trị > đặt hàng online > mô hình kinh doanh > Lựa chọn hình thức mà cửa hàng muốn hoạt động > Lưu lại

![](<../.gitbook/assets/7 (2)>)

Cờ "Thanh toán sau" Tương ứng với nút Xác nhận, "Thanh toán trước" tương ứng với nút Thanh toán

![](<../.gitbook/assets/8 (28)>)

**4. Thêm các phương thức thanh toán khác (Momo, Payon,...)**

Bước 1: Thêm phương thức thanh toán Momo, Payon,... [Tại đây](../phuong-thuc-thanh-toan/them-phuong-thuc-thanh-toan.md)

Bước 2: Mở phương thức thanh toán trên Web

Tại trang quản trị > Đặt hàng online > cửa hàng trực tuyến > tích chọn các phương thức mong muốn > Lưu lại

![](<../.gitbook/assets/9 (6)>)

**5. Thiết lập in bếp cho các đơn hàng được đặt qua QR code**

Tại màn hình máy thu ngân > chọn đơn online

![](<../.gitbook/assets/10 (4)>)

Chọn dấu 3 chấm trên cùng bên phải > Thiết lập&#x20;

<figure><img src="../.gitbook/assets/11 (2)" alt=""><figcaption></figcaption></figure>

Thiết lập in bếp hoặc in tạm tính khi xác nhận đơn tại mục QR Bàn > Cập nhật

![](<../.gitbook/assets/12 (7)>)

\>>Như vậy sau khi xác nhận đơn order từ QR bàn khi thu ngân xác nhận > sẽ tự in phiếu mà đã cài trước

**B. Hướng dẫn thao tác order bằng QR code**

**a) Order trả sau**

Khách hàng tới quán > Quét mã QR tại bàn bằng Camera hoặc Zalo

![](<../.gitbook/assets/13 (4)>) ![](<../.gitbook/assets/14 (6)>)

Hoàn tất sẽ ra 1 trang order tại bàn đúng vị trí bàn khách ngồi

![](<../.gitbook/assets/15 (6)>)

Khách hàng chọn món bằng cách thêm + dưới mỗi món hoặc ấn trực tiếp vào món để có thể thêm lời nhắn riêng của món đó

![](<../.gitbook/assets/16 (2)>)

Order xong ấn vào giả hàng để kiểm tra lại món ăn > xác nhận hoặc thanh toán ngay

![](<../.gitbook/assets/17 (2)>)

Khi khách hàng gửi đơn hàng order (chưa thanh toán online) màn hình thu ngân sẽ nhận được Popup về đơn hàng mới > có thể thao tác xác nhận, xem chi tiết , hoặc từ chối đơn hàng

![](../.gitbook/assets/18)

Nếu Thu ngân lỡ tay ấn Tắt thông báo đó thì có thể vào phòng bàn xem các bàn nào có màu khác với các bàn khác + tiêu đề "web order" thì tức là bàn đó là đơn order online nhưng chưa được xác nhận

![](<../.gitbook/assets/19 (1)>)

\> ấn vào bàn đó để xác nhận hoặc từ chối đơn hàng, có thể order thêm món cho hóa đơn ngay trên máy thu ngân

![](../.gitbook/assets/20)

Mọi thay đổi về đơn hàng từ thu ngân hoặc từ khách hàng đểu được update trên link đặt hàng của điện thoại và trên máy thu ngân

![](<../.gitbook/assets/1 (53)>)

Khách hàng có thể ấn > Thêm món để gửi Yêu cầu thêm món mới vào hóa đơn

![](<../.gitbook/assets/2 (8)>)

![](<../.gitbook/assets/3 (42)>)

![](<../.gitbook/assets/4 (30)>)

Sau khi hoàn tất đơn hàng, Thu ngân xử lý thanh toán đơn hàng cho khách như các đơn hàng khác

**Đối với cửa hàng thiết lập thanh toan trước thì khi khách hàng Order xong khách sẽ nhìn thấy nút Thanh toán trên trang order**

![](<../.gitbook/assets/5 (35)>)

Chọn phương thức thanh toán<br>

<figure><img src="../.gitbook/assets/6 (23)" alt=""><figcaption></figcaption></figure>

Tùy phương thức thanh toán khách chọn mà sẽ link tới các ví và xử lý thanh toán trên ví của khách

![](<../.gitbook/assets/7 (23)>)

![](<../.gitbook/assets/8 (15)>)

Sau khi xử lý thanh toán thành công, trang đặt hàng sẽ update thông báo > khách hàng sử dụng QR code này để ra quầy lấy hóa đơn

Trên máy Thu ngân sẽ hiển thị các đơn hàng mà khách hàng thanh toán Online sẽ có màu khác và hiển thị chữ đa thanh toán, NV sẽ vào lai bàn và ấn hoàn thành đơn hàng

![](<../.gitbook/assets/9 (14)>)

![](<../.gitbook/assets/10 (11)>)

Hoặc trên máy thu ngân sẽ có thông báo đơn hàng Đã thanh toán > xác nhận sẽ in phiếu thanh toán cho khách hàng hoặc quét QR mà khách đưa để tìm đơn hàng đó thanh toán

**>> Chúc các bạn thành công**
