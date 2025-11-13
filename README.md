# Simple Registration Project

Đây là một ứng dụng đăng ký người dùng full-stack với backend NestJS và frontend React.

## 📋 Yêu cầu hệ thống

- **Node.js**: v16 hoặc cao hơn
- **npm**: v7 hoặc cao hơn
- **MongoDB**: Đang chạy trên local hoặc có connection string

## 🚀 Hướng dẫn demo

### Quick Start (Chạy nhanh)

**Terminal 1 - Backend:**
```bash
cd backend
npm install
npm run start:dev
```
**Terminal 2 - Frontend:**
```bash
cd frontend
npm install
npm run dev
```
### Thử nghiệm ứng dụng

1. **Mở trình duyệt** tại: `http://localhost:3001`
2. **Đi đến trang Đăng ký** (`/register`)
   - Nhập email: `test123@example.com`
   - Nhập mật khẩu: `password123`
   - Nhập lại mật khẩu: `password123`
   - Nhấn "Đăng ký"
   - Thấy thông báo "Đăng ký thành công!" ✅

3. **Đi đến trang Đăng nhập** (`/login`)
   - Nhập email: `test@example.com`
   - Nhập mật khẩu: `password123`
   - Nhấn "Đăng nhập"
   - Thấy thông báo "Đăng nhập thành công!" ✅
   - Các trường hợp khác sẽ thất bại (mocking)

4. **Thử nhập sai**
   - Email hoặc mật khẩu không đúng sẽ hiển thị lỗi (màu đỏ)

## 🚀 Hướng dẫn cài đặt và chạy

### 1. Clone/Setup Project

```bash
cd simple-registration
```

### 2. Backend Setup (NestJS)

#### Cài đặt dependencies
```bash
cd backend
npm install
```

#### Cấu hình môi trường (nếu cần)
Tạo file `.env` trong thư mục `backend` nếu cần thiết (copy từ .env.example)

#### Chạy Backend

**Mode phát triển (với hot reload):**
```bash
npm run start:dev
```
Backend sẽ chạy trên `http://localhost:3000`

**Mode production:**
```bash
npm run start
```


### 3. Frontend Setup (React + Vite)

#### Cài đặt dependencies
Mở terminal mới, đi đến thư mục frontend:
```bash
cd frontend
npm install
```

#### Chạy Frontend

**Mode phát triển:**
```bash
npm run dev
```
Frontend sẽ chạy trên `http://localhost:3001`


**Preview build:**
```bash
npm run preview
```

## 👤 Tác giả

kindinh903

## 📄 License

MIT
