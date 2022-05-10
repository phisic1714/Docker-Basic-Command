# คำสั่ง Docker 
## คำสั่งเกี่ยวกับ ทั่วไป
- docker version = ตรวจดูเวอร์ชั่น
- docker system df = ดูเนื้อที่ที่ Docker ใช้
- docker exec -it = Remote ไปยัง sh shell

## คำสั่งเกี่ยวกับ Images
- docker build -t [ชื่อimage] = สร้าง Dockerimage
- docker images = ดู Dockerimage ที่ถูกสร้าง
- docker history [ชื่อimage] = ดูจำนวน Layer ของ Dockerfile
- docker run [ชื่อimage] = Run Dockerimage
- docker rmi [ชื่อimage] = ลบ Dockerimage

## คำสั่งเกี่ยวกับ Volume
- docker volume ls = ดู Volume ที่สร้างขึ้นมาทั้งหมด
- docker volume  Inspect = ตรวจสอบใน Volume
- docker volume rm [ชื่อvolume] = ลบ Volume

## คำสั่งเกี่ยวกับ Container
- docker ps -a = ดู Container และ Status ของ Container
- docker rm [Container ID] = ลบ Containers

## คำสั่งเกี่ยวกับ Network
- docker network create [ชื่อที่จะตั้ง] = สร้าง Bridge network 
- docker network rm [ชื่อnetwork] = ลบ Bridge network

## คำสั่งเกี่ยวกับ Compose
- docker-compose up -d = Run Container ด้วย docker-compose
- docker-compose down = หยุดการทำงานของ Container

# คำสั่งหลักๆใน Dockerfile
- FROM กำหนด Base image
- LABEL ใช้กำหนด Metadata เช่น ชื่อ Version หรือเจ้าของ Image
- ENV กำหนด Environment variable ภายใน Container
- RUN ใช้สำหรับติดตั้ง Packagesให้ Container
- COPY สำหรับ Copy file และ Folder ไปยัง Container
- ADD สำหรับ Copy file และ Folder ไปยัง Container โดยสามารถแตกไฟล์ .tar รวมทั้ง Copy file จาก Host ภายนอกได้
- CMD สำหรับรันคำสั่งที่ต้องการขณะรัน Container
- WORKDIR กำหนด Working directory ของ Container
- ARG กำหนด Variable ขณะสร้าง Image
- ENTRYPOINT สำหรับรันคำสั่งที่ต้องการขณะรัน Container
- EXPOSE กำหนด Port ที่เปิดให้ Container อื่นติดต่อเข้ามา
- VOLUME สร้าง Folder เก็บข้อมูลแบบถาวรให้ Container
