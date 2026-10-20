# Định lượng NVL cho Sản phẩm

{% embed url="https://youtu.be/erYkz6lstwE" %}

**Định lượng NVL (thành phần) cho Sản phẩm - web**\
_(Bán hàng trừ NVL, định lượng các nl cấu thành nên Sản phẩm)_

**Ví dụ:** Sản phẩm **Cafe sữa** sẽ bán theo 2 đơn vị tính Size M, Size L

\- NVL cấu thành nên sẽ bao gồm (Cafe bột, sữa tươi, sữa đặc)

\- Và mỗi 1 size sẽ có định lượng như sau

\+ Size M: làm từ 250g Cafe bột + 200ml sữa tươi + 50ml sữa đặc\
\+ Size L: làm từ 300g Cafe bột + 250ml sữa tươi + 75ml sữa đặc

**Bước 1: Tạo NVL cần sử dụng trước**

[Hướng dẫn tạo NVL trên web](https://nchienms.gitbook.io/posapphn/san-pham-dich-vu-nvl/quan-ly-nvl-web)

\- Tạo nvl cafe bột quản lý đơn vị tính như sau (g để định lượng, kg để nhập kho - có thể để 1 đơn vị tính là g cũng được, và nên để đơn vị tính trùng với đơn vị định lượng)<br>

<figure><img src="../../.gitbook/assets/0 (52)" alt=""><figcaption></figcaption></figure>

\- Tạo nvl sữa đặc và sữa tươi để quản lý đơn vị tính như sau (đều quản lý ml và lít nên em để tượng trưng 1 cái)

<br>

<figure><img src="../../.gitbook/assets/1 (40)" alt=""><figcaption></figcaption></figure>

**Bước 2: Tạo Sản phẩm Cafe sữa**

Tại đây chỉ tập trung vào định lượng do đó cách [Thêm Sản phẩm tại đây](https://nchienms.gitbook.io/posapphn/san-pham-dich-vu-nvl/them-chinh-sua-san-pham-web)

Do định lượng là cost NVL cho đơn vị tính, nên Sản phẩm có mấy đơn vị tính sẽ định lượng bấy nhiêu lần

Ở đây Sản phẩm cafe sữa có size M và L không có tỉ lệ quy đổi nhất định nên tỉ lệ quy đổi để =1 hết

![](<../../.gitbook/assets/2 (17)>)

\- Tiếp theo tại mục quản lý kho sẽ không tích quản lý kho vì mình quản lý Sản phẩm này theo định lượng

![](<../../.gitbook/assets/3 (21)>)

\- Mục định lượng ta tiến hành định lượng cho size M trước

![](<../../.gitbook/assets/4 (6)>)

\- Tìm kiếm nvl cấu thành nên size M > xác nhận

![](<../../.gitbook/assets/5 (25)>)

\- Điền số lượng nvl và chú ý đơn vị tính , khi bán 1 cafe sữa size M kho sẽ trừ đúng số lượng bạn set tại đây

<figure><img src="../../.gitbook/assets/6 (43)" alt=""><figcaption></figcaption></figure>

\- Chuyển qua size L để định lượng tiếp có thể sao chép định lượng ở Size M qua và sửa hoặc thêm thủ công

![](<../../.gitbook/assets/7 (28)>)

\- Điền định lượng cho Size L<br>

<figure><img src="../../.gitbook/assets/8 (20)" alt=""><figcaption></figcaption></figure>

**>> Lưu lại là đã hoàn thành tạo mới 1 sản phẩm và định lượng**

**>> Lưu ý những Sản phẩm đã có sẵn cần định lượng ta chỉ cần chỉnh sửa Sản phẩm đó và định lượng như bình thường**
