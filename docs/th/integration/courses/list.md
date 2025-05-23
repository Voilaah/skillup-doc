# รายการหลักสูตร

<Badge type="warning">หน้านี้อยู่ระหว่างการดำเนินการ</Badge>

SkillUp สามารถนำเข้าหลักสูตรทั้งหมดหรือบางส่วนจากแพลตฟอร์มของคุณได้โดยตรง

::: info ข้อมูล
API นี้จะช่วยให้ SkillUp แสดงรายการหลักสูตรของคุณและหน้าตัวอย่างหลักสูตร โดยให้ข้อมูลพื้นฐานกับนักเรียนก่อนลงทะเบียนเรียน
:::

## ข้อกำหนดของ API

แพลตฟอร์มของคุณจำเป็นต้องให้ API ต่อไปนี้เพื่อดึงรายการหลักสูตร

<Badge>GET</Badge> `https://your-external-platform.com/api/v1/courses`

API ต้องตอบสนองตามข้อกำหนดดังนี้:

**พารามิเตอร์ในการค้นหา (Query parameters)**

| ฟิลด์ | ประเภท | ค่าเริ่มต้น | คำอธิบาย |
|---|---|---|---|
| page | number | 1 | หมายเลขหน้าที่ต้องการดึงข้อมูล |
| per_page | number | 10 | จำนวนหลักสูตรที่ต้องการดึงข้อมูลในแต่ละหน้า |

<br/>

**ค่าที่ API ต้องส่งกลับ**

```jsonc
{
    "total": 52,
    "per_page": 10,
    "current_page": 2,
    "last_page": 5,
    "prev_page_url": "https://your-external-platform.com/api/v1/courses?page=1",
    "next_page_url": "https://your-external-platform.com/api/v1/courses?page=3",
    "data" : [
        {
            "id": 1,
            "code": "001",
            "title": "ชื่อหลักสูตร",
            "thumbnail": "https://your-external-platform.com/storage/app/medias/courses/thumbnail/181120100340-hairdresser-3572053_1280.jpg",
            "introduction": "บทนำของหลักสูตร",
            "description": "คำอธิบายรายละเอียดของหลักสูตร",

            "objectives": "วัตถุประสงค์ของหลักสูตร",
            "outcomes": "สิ่งที่นักเรียนจะได้รับหลังเรียนจบ",
            "skills": "ทักษะที่นักเรียนจะได้ฝึกฝน",
            "inclusion": "สิ่งที่รวมอยู่ในหลักสูตร",
            "url": "https://your-external-platform.com/courses/123456",
            "meta" : {
                "duration": 150,
                "organization": "ชื่อองค์กร",
                "level": "ระดับเริ่มต้น",
                "category": "หมวดหมู่ 1",
                "is_coming_soon": false,
                "is_published": true,
                "has_certificate": true,
                "is_free": true,
                "price": null,
                "locale": "en",
                "last_updated_at" : "2025-05-21 16:55:00"
            }
        },
    ]
}
