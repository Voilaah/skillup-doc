---
title: เริ่มต้นใช้งาน
editLink: true
---

# คู่มือ SkillUp

ยินดีต้อนรับสู่เอกสารทางการของแพลตฟอร์ม **SkillUp** — โซลูชันการเรียนรู้ออนไลน์แบบครบวงจรสำหรับ OctoberCMS ที่พัฒนาบน Laravel

ในหน้านี้และหน้าถัดไป คุณจะพบข้อมูลทั้งหมดที่จำเป็นสำหรับการติดตั้งปลั๊กอินลงในเว็บไซต์ของคุณและการเชื่อมต่อเข้ากับธีมที่ใช้งานอยู่ รวมถึงคำอธิบายเกี่ยวกับโมเดลและคอนโทรลเลอร์ต่าง ๆ และวิธีการขยายเพื่อเพิ่มฟังก์ชันที่คุณต้องการ

> [!NOTE]
> หากคุณพบว่าเอกสารบางส่วนยังไม่ครอบคลุมหรืออธิบายไม่ชัดเจน เรายินดีรับคำแนะนำและการมีส่วนร่วมของคุณในการเพิ่มเนื้อหาให้สมบูรณ์มากยิ่งขึ้น คุณสามารถคลิกลิงก์ "แก้ไขหน้านี้บน GitHub" ที่อยู่ด้านล่างของแต่ละหน้า เพื่อเข้าสู่ไฟล์ markdown ที่เกี่ยวข้องใน GitHub ขอบคุณสำหรับความช่วยเหลือของคุณ!

## ความต้องการของระบบ

เราแนะนำให้ใช้ OctoberCMS v3 และ PHP v8 เวอร์ชันล่าสุดเสมอ อย่างไรก็ตาม ความต้องการขั้นต่ำในการใช้งาน SkillUp มีดังนี้:

- OctoberCMS v3.0 ขึ้นไป
- PHP v8.0 ขึ้นไป
- MySQL v5.7+ | v8.0+ **`หรือ`** MariaDB v10.2+ **`หรือ`** SQLite<span style="color: red;">**\***</span> v3.19+

> [!CAUTION] > <span style="color: red;">**\***</span> แม้ว่า SkillUp สามารถใช้กับ SQLite ได้
> แต่เรา **แนะนำอย่างยิ่ง** ให้ใช้ฐานข้อมูลอื่น โดยเฉพาะในกรณีที่มีจำนวนสินค้าหรือลูกค้ามาก

### ปลั๊กอินที่จำเป็น

SkillUp ต้องพึ่งพาปลั๊กอินอย่างเป็นทางการของ OctoberCMS ดังต่อไปนี้ ซึ่งต้องติดตั้งก่อนติดตั้ง SkillUp

- [RainLab.Location](https://octobercms.com/plugin/rainlab-location) v1.2+
- [RainLab.Translate](https://octobercms.com/plugin/rainlab-translate) v1.9+ | v2.0+
- [RainLab.User](https://octobercms.com/plugin/rainlab-user) v1.6+ | v2.0+
- [RainLab.UserPlus](https://octobercms.com/plugin/rainlab-user) v1.6+ | v2.0+
- [Responsiv.Uploader](https://octobercms.com/plugin/rainlab-user) v1.6+ | v2.0+
- [Dubk0ff.UniCrumbs](https://github.com/dubk0ff/unicrumbs-plugin) v2.0+
- [OFFLINE.Boxes](https://octobercms.com/plugin/offline-boxes) v3.5+

SkillUp ยังต้องใช้ PHP package ต่อไปนี้ ซึ่งจะถูกติดตั้งโดยอัตโนมัติเมื่อใช้คำสั่ง `plugin:install` หรือ `project:sync` บน OctoberCMS v3

- [barryvdh/laravel-dompdf](https://packagist.org/packages/barryvdh/laravel-dompdf) v1.0+ | v2.0+
- [laravel/socialite](https://packagist.org/packages/laravel/socialite) v5.1+
- [mews/captcha](https://packagist.org/packages/hashids/hashids) v3.4

### ขึ้นอยู่กับความจำเป็น (Optional)

การติดตั้งปลั๊กอินหรือแพ็กเกจต่อไปนี้เป็นทางเลือก ขึ้นอยู่กับการใช้งานของคุณ โดยต้องติดตั้งเองหากต้องการ

### สำหรับนักพัฒนา (Development)

แพ็กเกจต่อไปนี้จำเป็นเฉพาะในกรณีที่คุณจะพัฒนา/ปรับแต่งปลั๊กอิน SkillUp และต้องติดตั้งเอง

- [fakerphp/faker](https://packagist.org/packages/fakerphp/faker) v1.23+
- [mockery/mockery](https://packagist.org/packages/mockery/mockery) v1.6+
- [phpunit/phpunit](https://packagist.org/packages/omnipay/stripe) v8.5+ | v9.0+
- [squizlabs/php_codesniffer](https://packagist.org/packages/squizlabs/php_codesniffer) v3.0+

## ลิงก์ที่เกี่ยวข้อง

- [Website](https://skillup.global)
- [SkillUp Docs](https://docs.skillup.global)
