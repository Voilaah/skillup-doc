<script setup>
import BadgeStd from '../../.vitepress/components/BadgeStd.vue'
import SpoilerStd from '../../.vitepress/components/SpoilerStd.vue'
</script>

# Course content

<BadgeStd label="Page is Work in Progress" color="danger" />

SkillUp can import a course content directly from your platform.

Only the course medias (such as images, videos, audios, files upload) won't be imported.

## SkillUp Course Content Structure

### Structure

A SkillUp course required fields

| Field           | Type    | Default  | Description                              |
| --------------- | ------- | -------- | ---------------------------------------- |
| id              | number  | required | Course Id to retrieve from your platform |
| title           | string  | required | Course title                             |
| thumbnail       | string  | required | Course thumbnail                         |
| introduction    | text    | required | Course introduction                      |
| outcomes        | text    | required | Course outcomes                          |
| objectives      | text    | required | Course objectives                        |
| skills          | text    | required | Course skills                            |
| inclusion       | text    | required | Course inclusion                         |
| url             | string  | required | The course url on your platform          |
| duration        | ?number | optional | Course duration in minutes               |
| organization    | string  | required | Organization                             |
| level           | enum    | required | beginner\|intermediate\|advanced         |
| category        | string  | required | Course Category                          |
| is_coming_soon  | boolean | required | Course is upcoming?                      |
| is_published    | boolean | true     | Course is published?                     |
| has_certificate | boolean | true     | Course has a certificate?                |
| is_free         | boolean | true     | Course                                   |
| price           | ?number | optional | Course price if not free                 |
| locale          | string  | required | Course language `en` or `th`             |

In terms of relationships, a SkillUp course has many _lessons_.

And each _lesson_ has many _sections_.

<!-- <SpoilerStd label="Details"> -->

<!-- <br /> -->

#### Lesson

**Lesson fields**

| Field       | Type   | Default  | Description                              |
| ----------- | ------ | -------- | ---------------------------------------- |
| id          | number | required | Lesson Id to retrieve from your platform |
| title       | string | required | Lesson title                             |
| description | text   | required | Lesson description                       |

A _lesson_ has many _sections_.

#### Section

**Section fields**

| Field    | Type       | Default  | Description                               |
| -------- | ---------- | -------- | ----------------------------------------- |
| id       | number     | required | Section Id to retrieve from your platform |
| title    | string     | required | Section title                             |
| duration | number     | required | Section duration in minutes               |
| files    | attachment | optional | Section files attachment                  |

**A section has one and only one**

- engagement
- or assignment
- or summary

#### Engagement

- a rich text content
- a video
- an audio
- an embedded code

#### **Assignment**

A assignment is a quiz that has many questions.

A quiz can be **graded** or **not**.

**Quiz fields**

| Field         | Type    | Default  | Description                                  |
| ------------- | ------- | -------- | -------------------------------------------- |
| id            | number  | required | Quiz Id to retrieve from your platform       |
| title         | string  | required | Quiz title                                   |
| graded        | boolean | true     | Quiz is graded?                              |
| weight        | number  | 1        | Quiz weight in the final grading calculation |
| passing_score | number  | 50       | Percentage to pass the quiz                  |
| questions     | array   | required | Quiz questions                               |

**Question**

**Question fields**

| Field   | Type    | Default  | Description                                       |
| ------- | ------- | -------- | ------------------------------------------------- |
| id      | number  | required | Question Id to retrieve from your platform        |
| title   | string  | required | Question title                                    |
| image   | ?string | optional | Question image displayed below the question title |
| type    | enum    | required | openanswer\|truefalse\|multiplechoices\|dragndrop |
| choices | ?array  | optional | An array of possible choices                      |
| answer  | ?string | optional | The correct answer                                |

A question has a title and an media image optionnaly.

SkillUp handles different types of questions:

- open answer
- true / false
- multiple choices

<!-- </SpoilerStd> -->

**Complete Example**

For a course named "Basic Graphic Design with Canva"

- [**Course**] Basic Graphic Design with Canva
  - [**Section**] Foundations of Design
    - [**Lesson**] Foundations of Design Video
      - [**Engagement**] a video
    - [**Lesson**] Foundations of Design Quiz
      - [**Assignment**] a ungraded quiz
        - [*OpenAnswer*]: Write a summary of your understanding of the video
        - [*MultipleChoice*]: What is the main function of negative space in design?
          - [*Choices*]
            - A) To add more elements to a composition
            - B) To provide structure and breathing room for content
            - C) To make the design more complex
          - [*Answer*]
            - 2
    - [**Lesson**] Lesson summary
      - [**Engagement**] a summary
    - [**Lesson**] Additional Resources
      - [**Engagement**] a rich text content
      - [*Files*]
        - File 1 url
        - File 2 url
  - [**Section**] Advanced Design Principles
    - [**Lesson**] Advanced Design Principles Video
      - [**Engagement**] an embedded code
    - [**Lesson**] Advanced Design Principles Quiz (graded)
      - [**Assignment**] a graded quiz
        - [*OpenAnswer*]: Write a summary of your understanding of the video
        - [*TrueFalse*]: The function of negative space in design is to make design more complex ?
          - [*Answer*] true
    - [**Lesson**] Lesson summary
      - [**Engagement**] a summary
    - [**Lesson**] Additional Resources
      - [**Engagement**] a rich text content
      - [*Files*]
        - File 1 url
        - File 2 url

## API requirements

Your platform needs to provide the following API to retrieve your course content.

GET `https://your-external-platform.com/api/v1/courses/{id}`

**Query parameters**
| Field | Type | Default | Description |
|---|---|---|---|
| id | number | na | Course Id to retrieve from your platform |

```json
{
    "id": 1,
    "code": "001",
    "title": "A course title",
    "thumbnail": "https://your-external-platform.com/storage/app/medias/courses/thumbnail/181120100340-hairdresser-3572053_1280.jpg",
    "introduction": "Dolor commodo aliquip veniam labore amet elit. Laboris culpa quis id consequat voluptate officia tempor consectetur aliquip duis laborum occaecat.",
    "description": "Dolor commodo aliquip veniam labore amet elit. Laboris culpa quis id consequat voluptate officia tempor consectetur aliquip duis laborum occaecat.

    Dolor commodo aliquip veniam labore amet elit. Laboris culpa quis id consequat voluptate officia tempor consectetur aliquip duis laborum occaecat",
    "objectives": "Dolor commodo aliquip veniam labore amet elit. Laboris culpa quis id consequat voluptate officia tempor consectetur aliquip duis laborum occaecat.",
    "outcomes": "Dolor commodo aliquip veniam labore amet elit. Laboris culpa quis id consequat voluptate officia tempor consectetur aliquip duis laborum occaecat.",
    "skills": "Dolor commodo aliquip veniam labore amet elit. Laboris culpa quis id consequat voluptate officia tempor consectetur aliquip duis laborum occaecat.",
    "inclusion": "Dolor commodo aliquip veniam labore amet elit. Laboris culpa quis id consequat voluptate officia tempor consectetur aliquip duis laborum occaecat.",
    "url": "https://your-external-platform.com/courses/123456",
    "meta" : {
        "duration": 150,
        "organization": "Organization name",
        "level": "beginner",
        "category": "category 1",
        "is_coming_soon": false,
        "is_published": true,
        "has_certificate": true,
        "is_free": true,
        "price": null,
        "locale": "en"
    },
    "lessons": [
        {
            "title": "Lesson 1 title",
            "description":"Nostrud irure ullamco adipisicing qui dolor commodo. Anim exercitation velit tempor reprehenderit dolore.",
            "sections":[
                {
                    "title": "Section 1.1 title",
                    "description":"Nostrud irure ullamco adipisicing qui dolor commodo. Anim exercitation velit tempor reprehenderit dolore.",
                    "type": "engagement",
                    "engagement": {
                        "type": "richcontent",
                        "content": "Excepteur <strong>enim</strong> commodo minim enim ex reprehenderit et eiusmod aliqua occaecat aliquip voluptate aliqua nisi. Dolore adipisicing in in anim ex incididunt velit adipisicing. Mollit pariatur veniam anim aliquip ipsum aute ut adipisicing duis incididunt anim dolor. Ullamco veniam esse <a href="">eiusmod</a> id consectetur qui id consequat mollit ex ut. Et culpa Lorem eu ex dolore labore laborum id eiusmod anim in."
                    }
                },
                {
                    "title": "Section 1.2 title",
                    "description":"Nostrud irure ullamco adipisicing qui dolor commodo. Anim exercitation velit tempor reprehenderit dolore.",
                    "type": "engagement",
                    "engagement": {
                        "type": "video",
                        "content": "https://your-external-platform.com/storage/app/medias/courses/1234/video1.mp4"
                    }
                },
                {
                    "title": "Section 1.3 title",
                    "description":"Nostrud irure ullamco adipisicing qui dolor commodo. Anim exercitation velit tempor reprehenderit dolore.",
                    "type": "engagement",
                    "engagement": {
                        "type": "audio",
                        "content": "https://your-external-platform.com/storage/app/medias/courses/1234/audio1.mp3"
                    }
                },
                {
                    "title": "Section 1.3 title",
                    "description":"Nostrud irure ullamco adipisicing qui dolor commodo. Anim exercitation velit tempor reprehenderit dolore.",
                    "type": "engagement",
                    "engagement": {
                        "type": "embedded",
                        "content": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/OKX6keqZ3y8?si=bmVv3PrjqikwsCa3\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
                    }
                },
                {
                    "title": "Section 2 title",
                    "description":"Nostrud irure ullamco adipisicing qui dolor commodo. Anim exercitation velit tempor reprehenderit dolore.",
                    "type": "assignment",
                    "assignment": {
                        "type": "quiz",
                        "questions": [
                            {
                                "type": "truefalse",
                                "title": "White is the opposite of Black?",
                                "answer": true,
                                "media": "https://your-external-platform.com/storage/app/medias/image1.jpg"
                            },
                            {
                                "type": "openanswer",
                                "title": "What do you think?",
                                "answer": null,
                                "media": "https://your-external-platform.com/storage/app/medias/image1.jpg"
                            },
                            {
                                "type": "openanswer",
                                "title": "What do you think?",
                                "answer": "minimum",
                                "media": "https://your-external-platform.com/storage/app/medias/image1.jpg"
                            },
                            {
                                "type": "multiplechoice",
                                "title": "What is the correct answer?",
                                "choices": [
                                    {
                                        "choice": "A)"
                                    },
                                    {
                                        "choice": "B)"
                                    },
                                    {
                                        "choice": "C)"
                                    },
                                ],
                                "answer": 2,
                                "media": null
                            },
                        ]
                    }
                },
            ]
        }
    ]
}
```
