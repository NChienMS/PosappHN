# Kết nối Mpos - Tingbox

## PHÂN BIỆT KẾT NỐI 1.0 VÀ 2.0

|                                                                                                                   | Sử dụng kết nối 2.0 khi máy dùng PosApp là một máy khác, khi thanh toán sẽ gọi tới máy Mpos,tingbox để hiện giao dịch thanh toán                                        | Sử dụng kết nối 1.0 khi máy thanh toán cài trực tiếp ứng dụng PosApp và bán hàng trên máy  smartPos luôn  |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| <p><strong>Mpos</strong></p><p><img src="../.gitbook/assets/0 (12).png" alt="" data-size="original"></p>          | Không                                                                                                                                                                   | <p>Có<br>Yêu cầu: kết nối bluetooth giữa máy bán hàng và Mpos</p>                                         |
| <p><strong>mini smartPOS</strong></p><p><img src="../.gitbook/assets/1 (13).png" alt="" data-size="original"></p> | <p>Có</p><p>Yêu cầu: <br>1. tải ứng dụng Mpos trên máy</p><p>2. Liên hệ Kỹ thuật viên Mpos để kích hoạt push payment.<br>3. Mở điểm bán hàng > điền mã SN máy</p> | <p>Có</p><p>Yêu cầu: Sử dụng phần mềm PosApp trên máy, ấn thanh toán Mpos trực tiếp từ phần mềm</p>       |
| <p><strong>smartPOS</strong></p><p><img src="../.gitbook/assets/2 (13).png" alt="" data-size="original"></p>      | <p>Có</p><p>1. tải ứng dụng Mpos trên máy</p><p>2. Liên hệ Kỹ thuật viên Mpos để kích hoạt push payment.<br>3. Mở điểm bán hàng > điền mã SN máy</p>              | <p>Có</p><p>Yêu cầu: Sử dụng phần mềm PosApp trên máy, ấn thanh toán Mpos trực tiếp từ phần mềm</p>       |
| <p><strong>SmartPOS PRO</strong></p><p><img src="../.gitbook/assets/3 (13).png" alt="" data-size="original"></p>  | <p>Có</p><p>1. tải ứng dụng Mpos trên máy</p><p>2. Liên hệ Kỹ thuật viên Mpos để kích hoạt push payment.<br>3. Mở điểm bán hàng > điền mã SN máy</p>              | <p>Có</p><p>Yêu cầu: Sử dụng phần mềm PosApp trên máy, ấn thanh toán Mpos trực tiếp từ phần mềm</p>       |
| <p><strong>TingBox</strong></p><p><img src="../.gitbook/assets/4 (12).png" alt="" data-size="original"></p>       | <p>Có</p><p>Không cần cài ứng dụng hay cài đặt gì thêm</p>                                                                                                              | Không                                                                                                     |
| <p><strong>N31</strong></p><p><img src="../.gitbook/assets/5 (12).png" alt="" data-size="original"></p>           | <p>Có</p><p>Yêu cầu: <br>1. Tải ứng dụng Mpos lite trên máy</p><p>2. Liên hệ Kỹ thuật viên Mpos để kích hoạt push payment.<br></p>                                | Không                                                                                                     |

## CÁCH KẾT NỐI

### I. Mpos 2.0

_Cách hoạt động:_ Từ phần mềm PosApp trên máy bán hàng gọi lệnh thanh toán sang máy quẹt thẻ

_Yêu cầu:_\
_- Báo kỹ thuật Mpos bật tính năng điểm bán hàng trên thiết bị cần kết nối (áp dụng với máy smartPos)_\
_- Đối với các thiết bị smartPos cần tải ứng dụng Mpos hoặc Mpos lite để treo màn hình điểm bán hàng_\
_- Lưu ý: với tingbox thì có thể kết nối sử dụng trực tiếp luôn_



#### _**Bước 1. Lấy thông tin kết mobile user của tài khoản tingbox hoặc mpos từ trang Mpos**_

_Lưu ý: Nếu có thông tin mobile user này rồi thì ko cần thao tác bước này_

* Truy cập link [https://mpos.vn/login](https://mpos.vn/login) tiến hành đăng nhập tài khoản, mật khẩu
* Lấy các thông tin cần thiết như hình chính là cột **Nhân viên sử dụng**

**Cách 1: lấy trên web Mpos.vn**

<figure><img src="../.gitbook/assets/image (400).png" alt=""><figcaption></figcaption></figure>

#### _**Cách 2: Xem trên thiết bị Tingbox**_

<figure><img src="../.gitbook/assets/image (406).png" alt=""><figcaption></figcaption></figure>

#### _**Bước 2. Tích hợp thông tin vào PosApp**_

Tại mục thiết lập > phương thức thanh toán

<figure><img src="../.gitbook/assets/image (401).png" alt=""><figcaption></figcaption></figure>

Chọn thêm mới > chọn kết nối Mpos 2.0 và điền tên phương thức thanh toán muốn tạo

<figure><img src="../.gitbook/assets/image (402).png" alt=""><figcaption></figcaption></figure>

Chú ý điền thông tin như sau

* Mục 1: Điền **email/sđt** đăng ký (đăng ký tài khoản bằng email hay sđt)
* Mục 2: Điền tên đăng nhập lấy được ở **bước 1** (đây là mobile user chứ không phải tên đăng nhập trang mpos)
* Mục 3: Điền mã thiết bị của Tingbox hoặc máy quẹt thẻ
* Mục 4: Lựa chọn hình thức kết nối QR cho tingbox, hoặc cà thẻ cho máy cà thẻ. (Có thể chọn cả 2 nếu thiết bị hỗ trợ cả 2)

<figure><img src="../.gitbook/assets/image (403).png" alt=""><figcaption></figcaption></figure>

Như vậy là kết nối xong, đồng bộ lại máy sẽ thấy thêm phương thức thanh toán mới

#### _**Bước 3: Bật điểm bán hàng và sẵn sàng thanh toán với smartPos**_

_<mark style="color:red;">Lưu ý: đối với máy SmartPos cần báo KT mpos mở tính năng điểm bán hàng trước sau đó làm như video bên dưới mỗi ngày</mark>_

{% embed url="https://www.youtube.com/shorts/iAPVQUmE2s4" %}

### II. Mpos 1.0

_Cách hoạt động:_ Từ phần mềm PosApp trên máy quẹt thẻ chọn thanh toán Mpos, máy quẹt thẻ sẽ tự mở giao diện thanh toán

_Video demo tại 1:29s:_

{% embed url="https://youtu.be/StMAEt4_RTA?si=2wHBXBcOvcALqlt7" %}

_Yêu cầu:_ Các thiết bị quẹt thẻ có hỗ trợ thanh toán Mpos 1.0 và tải ứng dụng bán hàng của PosApp tiến hành ấn thanh toán Mpos trên ứng dụng PosApp

_Hướng dẫn kết nối:_

_**1. Tại mục thiết lập > phương thức thanh toán**_

![](<../.gitbook/assets/10 (8).png>)

_**2. Chọn thêm mới > chọn kết nối Mpos**_

và điền các thông tin kết nối như

\- Tên phương thức: tên này sẽ xuất hiện màn hình thanh toán

\- Mobile User: user của khách khi đăng ký Mpos

![A screenshot of a computer

Description automatically generated](<../.gitbook/assets/11 (6).png>)
