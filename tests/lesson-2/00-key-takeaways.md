# Git & Basic Javascript

### 1. Version Control System

> Hệ thống kiểm soát, quản lý các phiên bản

Việc quản lý các phiên bản sẽ giúp:

- Xem lại lịch sử thay đổi (thời gian, thay đổi gì, ai là người thay đổi..)
- Quay trở về bản thay đổi trước đó

Hệ thống quản lý phiên bản có 3 loại chính:

- **Local**: lưu ở máy cá nhân
- **Centralize**: lưu ở 1 máy chủ tập trung
- **Distributed**: lưu ở nhiều máy khác nhau

> Hiện nay, Git là DVCS (Distributed Version Control System) phổ biến nhất thế giới

### 2. Git

> Git có 3 trạng thái

- **Work Directory**: lưu các file mới, file có thay đổi
- **Staging**: các file đưa vào vùng chuẩn bị commit (tạo ra các version)
- **Repository**: các commit (versions)

**1. Khởi tạo repo (Làm 1 lần)**

- `git init`

**2. Tạo repo mới và liên kết tới repo local (Làm 1 lần)**

- `git remote add origin <url>`

**3. Add file có thay đổi**

- Add các file có thay đổi: `git add file1.txt file2.txt`
- Add tất cả file: `git add .`

  - Nếu file nằm trong 1 folder

    `git add folder/file3.txt`

  - Hoặc\
    `cd folder`\
    `git add file3.txt`

  - Nếu muốn cd ra ngoài cùng: `cd ..`

**4. Commit file**

- `git commit -m"first commit"`

**5. Push Code**

- `git push origin main`

> Tóm lại:
>
> > Nếu có file thay đổi, sẽ cần add lại file, và commit lại để push code lên repo.
> > Nếu tạo repo mới, thì cần git remote, add, commit

**6. Giới thiệu về Git - Cấu hình**

#### Git Config

`git config --global user.name`\
`git config --global user.email`

Hai lệnh này để đặt mặc định username và email cho toàn bộ các repo trên máy tính

Nếu cấu hình riêng\
`git init `\
`git config user.name`\
`git config user.email`

### 3. Basic JavaScript
