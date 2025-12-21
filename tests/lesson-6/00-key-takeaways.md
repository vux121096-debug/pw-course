### Git, JavaScript Advance

Clone, push, pull

**1. Clone**: hành động lấy code từ 1 repo đã có sẵn về máy tính cá nhân\
`git clone <url link repo>`

- E.g:
  `git clone https://github.com/playwrightvn/awesome-testing-materials`

Nếu clone mà muốn đổi tên\
 `git clone <url link repo> <renamed repo>`

- E.g:
  `git clone https://github.com/playwrightvn/awesome-testing-materials testing-material`

> Nếu clone repo private
> `git clone <ssh repo>`
>
> > Nếu clone repo private bằng https thì mỗi lần push/pull code lại phải nhập pass -> bất tiện

- E.g:
  `git clone git@github.com:..`

**2. Push**: hành động đẩy code từ local lên repo

`git push origin <branch_name>`

**3. Stashing**: lưu tạm vào 1 vùng nhớ

`git stash`\
`git stash pop`\
`git stash list`\
`git stash -u`\
`git stash save "ten-hanh-dong"`

**4. Git Convention**

- Convention = bộ quy tắc
- Covention giúp:
  - Gọn gàng, đồng bộ
  - Dễ đoán được ý đồ của PR/ commit
- Convention:
  - Đặt tên branch
    - Cú pháp: `<type>/<short-desc>`
    * `feat/ `: tính năng mới
    * `fix/  `: sửa lỗi
    * `conf/ `: thay đổi file config
    * `chore/`: các thay đổi lặt vặt - xoá file không dùng, đổi tên file
    - short-desc: đặt tên commit
