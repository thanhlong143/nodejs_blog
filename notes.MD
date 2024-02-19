# Middleware

### Ý nghĩa
- Phần mềm trung gian (đứng giữa các thành phần trong mô hình phần mềm)

Browser (client) ========== Request ==========> Server (Node)

Browser (client) <========== Response ========== Server (Node)

### Vai trò
- Giống như "Bác bảo vệ"

Nhà ==========> Bác bảo vệ (middleware): Sự kiện (soát vé)

Nhà <========== Sự kiện

1. Soát vé (kiểm soát -> validation)
2. Không cho vào
2. Cho phép vào (Validation passed -> cho vào)
4. Chỉnh sửa / thay đổi

### Ứng dụng
- Dựng chức năng xác thực (Authentication)
- Chức năng phân quyền (Authorization)
- Để chia sẻ các giá trị của biến tới tất cả các views (BE)







# https://expressjs.com/
# https://mongoosejs.com/docs/guide.html
# https://getbootstrap.com/docs/5.3/getting-started/introduction/