# Docker

Docker = platform ที่ให้นำ software โดยเฉพาะ web ที่พัฒนา ทำงาน หรือ รัน ไว้ภายในสิ่งที่เรียกว่า container ที่จะมีทั้ง OS และ โปรแกรมที่ใช้รัน software ที่ จุดประสงคือ การเอกเทศ software เพื่อให้ทำงานในสภาพแวดล้อมของมันไม่ยุ่งกับ server หรือคอมเครื่องหลัก
![](/asset/Docker.png)
ในรูปแต่ล่ะ container จะเก็บและรัน web app หรือ backend api โดยแยกจากกัน ซึ่ง container จะอยู่ภายใน Docker และ Docker จะทำงานอยู่ใน ระบบปฏิบัติการของเครื่องหลัก และโครงสร้างพพื้นฐานของ servers

#### ประโยชน์

1. รัน software web ที่พัฒนา มากกว่า 1 ที่มีเวอร์ชั่น node js ต่างกัน พร้อมกันใน server เดียว เพราะ แยกเป็น container
2. สามารถรัน software web มากกว่า 1 โดยใช้ port เดียวกัน แต่ก็ต้องทำ reverse proxy ด้วยน่ะ
3. สะดวกในการขยาย server (scaling) เพราะไม่ต้องไล่ดาวโหลดโปรแกรมที่รัน software สามารถใช้ docker จัดการโดยใช้ image
4. จัดการ หรือ ติดตั้ง package ง่าย

## โครงสร้าง

![alt text](/asset/image.png)
