# Đưa website Du lịch số Xóm Chiếu lên repository hiện có

Repository đích: https://github.com/thanhduyhvhc-spec/xom-chieu-digital-tourism

## 1. Tải gói website

Sử dụng file `xom-chieu-github-pages-ready.zip` mà Trung tâm nhận được. Giải nén trên máy tính.

## 2. Tải mã nguồn lên đúng thư mục gốc repository

1. Mở repository ở đường dẫn trên và đăng nhập GitHub.
2. Chọn **Add file → Upload files**.
3. Mở thư mục đã giải nén.
4. Chọn toàn bộ nội dung bên trong thư mục website: `index.html`, `styles.css`, `script.js`, `README.md`, file hướng dẫn, thư mục `assets` và thư mục `data`.
5. Kéo các tệp/thư mục đã chọn vào vùng tải lên GitHub. Không kéo thư mục cha bọc ngoài; `index.html` phải nằm ngay ở thư mục gốc repository.
6. Chờ tải xong, nhập thông điệp commit: `Add Xom Chieu digital tourism website`.
7. Chọn **Commit changes**.

Nếu GitHub hỏi xác nhận ghi đè hoặc thêm tệp, kiểm tra danh sách thay đổi trước khi xác nhận. Không xóa các tệp khác của repository nếu không rõ mục đích.

## 3. Bật GitHub Pages

1. Trong repository, mở **Settings → Pages**.
2. Tại **Build and deployment**, chọn **Deploy from a branch**.
3. Chọn branch `main` và folder `/(root)`.
4. Chọn **Save**.
5. Chờ quy trình triển khai hoàn tất trong mục Pages/Actions.

Địa chỉ dự kiến của website:
https://thanhduyhvhc-spec.github.io/xom-chieu-digital-tourism/

Đây là URL dự kiến theo tên tài khoản và repository; chỉ sử dụng để chia sẻ sau khi GitHub Pages báo triển khai thành công.

## 4. Kiểm tra sau xuất bản

- Mở URL website trên máy tính và điện thoại.
- Kiểm tra logo ở đầu trang và chân trang.
- Kiểm tra các mục menu và liên kết nội bộ.
- Kiểm tra hình ảnh, biểu tượng và các tệp CSS/JavaScript có tải đủ.
- Thay ảnh giữ chỗ bằng ảnh thực tế đã được phép sử dụng.
- Chỉ bổ sung địa chỉ, giờ hoạt động, giá, số điện thoại, tọa độ và nội dung lịch sử sau khi được xác minh.

## 5. Lưu ý an toàn và nội dung

- Repository Public làm mã nguồn và tệp tải lên công khai. Không đưa tài liệu nội bộ, thông tin cá nhân, số điện thoại riêng, dữ liệu khảo sát có định danh hoặc tài liệu chưa được phép công bố vào repository.
- Không đưa mật khẩu, mã OTP, khóa API hoặc thông tin đăng nhập vào mã nguồn.
- Website hiện là bản giới thiệu tĩnh. Bản đồ nhúng, biểu mẫu chính thức, flipbook, audio, thống kê và AI cần được kết nối sau khi Trung tâm cung cấp các URL/tư liệu đã duyệt.
- Các thông tin chi tiết về lịch sử, địa chỉ, giờ hoạt động, giá cả và tọa độ chưa được tự suy đoán.
